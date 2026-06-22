const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(v){return String(v||'').trim();}
function esc(v){return clean(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function body(req){if(!req.body)return{};if(typeof req.body==='string'){const ct=req.headers['content-type']||'';if(ct.includes('application/x-www-form-urlencoded'))return Object.fromEntries(new URLSearchParams(req.body).entries());try{return JSON.parse(req.body);}catch(e){return{};}}return req.body;}
function wantsPage(req){return String(req.headers['content-type']||'').includes('application/x-www-form-urlencoded');}
function json(res,code,obj){res.statusCode=code;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify(obj));}
function go(res,path){res.statusCode=303;res.setHeader('Location',path);res.end();}
function fail(req,res,code,msg){if(wantsPage(req))return go(res,'/request-status.html');return json(res,code,{ok:false,message:msg});}
function ok(req,res,msg){if(wantsPage(req))return go(res,'/request-received.html');return json(res,200,{ok:true,message:msg});}
module.exports=async function handler(req,res){
if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{ok:false,message:'Method not allowed.'});}
const b=body(req);if(clean(b.website))return ok(req,res,'Thank you. Your request has been received.');
const name=clean(b.name),email=clean(b.email).toLowerCase(),organisation=clean(b.organisation),role=clean(b.role),market=clean(b.market),primaryConcern=clean(b.primary_concern),message=clean(b.message),consent=clean(b.consent);
if(!name||!EMAIL_RE.test(email)||!organisation||!role||!market||!primaryConcern||consent!=='yes')return fail(req,res,400,'Please complete all required fields.');
const apiKey=process.env.RESEND_API_KEY,from=process.env.MAIL_FROM,to=process.env.MAIL_TO||'advisory@dominiongovernance.com';
if(!apiKey||!from)return fail(req,res,503,'The request form is not fully configured yet.');
const subject='Dominion Governance request - '+organisation;
const html='<h2>New Dominion Governance discussion request</h2><p><strong>Name:</strong> '+esc(name)+'</p><p><strong>Email:</strong> '+esc(email)+'</p><p><strong>Organisation:</strong> '+esc(organisation)+'</p><p><strong>Role:</strong> '+esc(role)+'</p><p><strong>Market:</strong> '+esc(market)+'</p><p><strong>Primary concern:</strong> '+esc(primaryConcern)+'</p><p><strong>Message:</strong></p><p>'+esc(message).replace(/\n/g,'<br>')+'</p>';
const text=['New Dominion Governance discussion request','',`Name: ${name}`,`Email: ${email}`,`Organisation: ${organisation}`,`Role: ${role}`,`Market: ${market}`,`Primary concern: ${primaryConcern}`,'','Message:',message||'No additional message provided.'].join('\n');
try{const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+apiKey,'Content-Type':'application/json'},body:JSON.stringify({from,to,reply_to:email,subject,html,text})});if(!r.ok)return fail(req,res,502,'The request could not be emailed.');return ok(req,res,'Thank you. Your request has been sent to Dominion Governance.');}catch(e){return fail(req,res,500,'The request could not be sent.');}
};
