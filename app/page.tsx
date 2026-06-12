'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  FileSearch,
  Mail,
  Menu,
  Network,
  Radar,
  Scale,
  ShieldCheck,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react';

function Button({ children, variant = 'solid', className = '' }: { children: React.ReactNode; variant?: 'solid' | 'outline'; className?: string }) {
  const base = 'inline-flex items-center justify-center whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]';
  const styles =
    variant === 'outline'
      ? 'border border-[#D4AF37]/55 bg-white/45 text-[#111827] hover:bg-[#FFF9EC]'
      : 'bg-[#111827] text-[#F7F4EF] hover:bg-[#1F2937]';
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Review', href: '#review' },
  { label: 'Assurance', href: '#assurance' },
  { label: 'Method', href: '#method' },
  { label: 'Institute', href: '#institute' },
  { label: 'Contact', href: '#contact' },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.58, ease: 'easeOut' },
};

const proof = [
  {
    value: 'Boardroom + Operations',
    label: 'We understand how founders, owners, executives, boards, and senior leaders evaluate risk, performance, accountability, value, and operating reality.',
  },
  { value: 'TT$300M+', label: 'Capital portfolio leadership experience.' },
  { value: 'US$4M+', label: 'Reported cost-savings contribution.' },
];

const workAreas = [
  {
    icon: ShieldCheck,
    title: 'Governance and decision-maker readiness',
    text: 'Clearer decision rights, risk visibility, controls, accountability, reporting, and confidence for founders, executives, boards, and leadership teams.',
  },
  {
    icon: Workflow,
    title: 'Systems and administration',
    text: 'Governance translated into day-to-day records, workflows, follow-up, coordination, reporting, and execution discipline.',
  },
  {
    icon: UsersRound,
    title: 'People and change adoption',
    text: 'HR, role clarity, training, behavioural adoption, leadership alignment, and change measurement that supports performance.',
  },
  {
    icon: BrainCircuit,
    title: 'AI governance and assurance',
    text: 'Independent review of AI use, controls, adoption, risk, compliance, efficiency, and measurable business value.',
  },
];

const reviewOutputs = [
  'Governance and accountability review',
  'Administrative systems and reporting review',
  'AI risk and control assessment',
  'People, HR, and adoption assessment',
  'Cost, waste, and efficiency opportunities',
  'Decision-maker reporting priorities',
  'Performance and value measurement gaps',
  '90-day action roadmap',
];

const assuranceAreas = [
  {
    icon: Radar,
    title: 'Review AI success',
    text: 'Assess whether AI use is improving efficiency, accountability, service quality, cost, labour capacity, and business performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Monitor governance and compliance',
    text: 'Review controls, policies, human oversight, risk registers, data safeguards, vendor exposure, and responsible-use practices.',
  },
  {
    icon: BarChart3,
    title: 'Report to leaders and boards',
    text: 'Provide independent reporting that gives founders, owners, executives, directors, and senior leaders clearer visibility over AI risk, adoption, and value.',
  },
];

const methodSteps = [
  ['01', 'Understand', 'Learn how the business works before prescribing change.'],
  ['02', 'Diagnose', 'Identify what is limiting performance, trust, control, adoption, or value.'],
  ['03', 'Govern', 'Strengthen decision rights, administration, controls, workflows, and accountability.'],
  ['04', 'Measure', 'Track efficiency, adoption, risk reduction, performance, and business impact.'],
];

const sectors = [
  'Corporations and multinationals',
  'Corporate departments and enterprise teams',
  'Oil and gas industries',
  'Engineering-led companies',
  'Project management companies',
  'Logistics and distribution',
  'Industrial and manufacturing',
  'Financial services',
  'SMEs and established businesses',
  'Governance, HR, and change leaders',
];

const instituteAreas = [
  {
    icon: BrainCircuit,
    title: 'AI governance seminars',
    text: 'Upcoming sessions for leaders and teams on AI governance, adoption, risk, controls, and measurable business impact.',
  },
  {
    icon: FileSearch,
    title: 'Research and briefings',
    text: 'Practical notes on governance, administration, AI assurance, change adoption, efficiency, and performance measurement.',
  },
  {
    icon: Network,
    title: 'Tools and frameworks',
    text: 'Business-ready checklists, review tools, scorecards, and implementation guides for leaders and trained teams.',
  },
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function IconBox({ icon: Icon, dark = false }: { icon: React.ElementType; dark?: boolean }) {
  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-[#D4AF37]' : 'bg-[#111827] text-[#D4AF37]'}`}>
      <Icon size={21} strokeWidth={1.9} />
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-[#D4AF37] shadow-sm">
        <Building2 size={21} />
      </div>
      <div className="leading-none">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#111827]">Dominion</p>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#8A6A20]">Group</p>
      </div>
    </div>
  );
}

function SectionHeader({ label, title, text, center = false, light = false }: { label: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <motion.div {...fadeUp} className={`${center ? 'mx-auto text-center' : ''} max-w-[780px]`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#D4AF37]' : 'text-[#8A6A20]'}`}>{label}</p>
      <h2 className={`mt-4 text-[clamp(1.95rem,3.2vw,3rem)] font-semibold leading-[1.03] tracking-[-0.045em] ${light ? 'text-white' : 'text-[#111827]'}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-7 ${light ? 'text-white/68' : 'text-[#4B5563]'}`}>{text}</p>}
    </motion.div>
  );
}

function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className={`mt-1 shrink-0 ${light ? 'text-[#D4AF37]' : 'text-[#8A6A20]'}`} size={18} />
      <p className={`text-sm leading-6 ${light ? 'text-white/72' : 'text-[#374151]'}`}>{children}</p>
    </div>
  );
}

export default function DominionGroupMasterWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-[#F7F2EA] text-[#111827] antialiased selection:bg-[#D4AF37]/30">
      <header className="sticky top-0 z-50 border-b border-[#E7DED1] bg-[#F7F2EA]/90 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <a href="#top" aria-label="Dominion Group home"><BrandMark /></a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#374151] lg:flex">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="transition hover:text-[#8A6A20]">{link.label}</a>)}
          </nav>
          <a href="mailto:advisory@dominiongovernance.com" className="hidden lg:block"><Button className="rounded-full px-5 py-2.5 text-sm">Request Review</Button></a>
          <button type="button" aria-label="Open navigation menu" onClick={() => setMenuOpen((current) => !current)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E7DED1] bg-white/60 text-[#111827] lg:hidden">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </Container>
        {menuOpen && (
          <div className="border-t border-[#E7DED1] bg-[#FDFBF7] lg:hidden">
            <Container className="grid gap-2 py-4">
              {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-3 text-sm font-medium text-[#374151] hover:bg-[#F7F2EA]">{link.label}</a>)}
              <a href="mailto:advisory@dominiongovernance.com" className="mt-2"><Button className="w-full rounded-full px-5 py-2.5 text-sm">Request Review</Button></a>
            </Container>
          </div>
        )}
      </header>

      <main id="top" className="overflow-hidden">
        <section className="relative isolate">
          <div className="absolute left-1/2 top-[-260px] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D4AF37]/18 blur-3xl" />
          <Container className="py-16 sm:py-20 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="mx-auto max-w-[930px] text-center">
              <h1 className="text-[clamp(2.55rem,5.2vw,4.75rem)] font-semibold leading-[0.99] tracking-[-0.06em] text-[#111827]">Stronger systems. Clearer governance. Measurable performance.</h1>
              <p className="mx-auto mt-7 max-w-[730px] text-base leading-8 text-[#4B5563] sm:text-lg">Dominion provides independent business and AI governance reviews for organizations that need stronger control, clearer accountability, improved efficiency, and decision-ready reporting.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="mailto:advisory@dominiongovernance.com"><Button className="h-12 w-full rounded-full px-6 text-sm sm:w-auto">Request an Independent Review <ArrowRight className="ml-2" size={17} /></Button></a>
                <a href="#assurance"><Button variant="outline" className="h-12 w-full rounded-full px-6 text-sm sm:w-auto">View AI Assurance</Button></a>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="mx-auto mt-14 grid max-w-[920px] gap-4 sm:grid-cols-3">
              {proof.map((item) => <div key={item.value} className="rounded-[1.5rem] border border-[#E7DED1] bg-white/60 p-5 text-center shadow-sm backdrop-blur"><p className="text-2xl font-semibold tracking-[-0.04em] text-[#111827]">{item.value}</p><p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.label}</p></div>)}
            </motion.div>
          </Container>
        </section>

        <section id="work" className="border-y border-[#E7DED1] bg-white/55 py-16 sm:py-20">
          <Container>
            <SectionHeader center label="What We Do" title="We connect decision-maker priorities to operating reality." text="Dominion is not only an AI governance firm. We bring executive operating perspective, governance discipline, HR and change-management insight, project execution, administration, and systems thinking to improve business performance." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workAreas.map((item) => <motion.div key={item.title} {...fadeUp}><Card className="h-full rounded-[1.75rem] border border-[#E7DED1] bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><IconBox icon={item.icon} /><h3 className="mt-6 text-xl font-semibold leading-7 tracking-[-0.03em]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.text}</p></CardContent></Card></motion.div>)}
            </div>
          </Container>
        </section>

        <section id="review" className="py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <SectionHeader label="Flagship Review" title="Dominion Business & AI Governance Review™." text="A practical independent review for organizations that need to understand whether governance, administration, people, systems, projects, and AI adoption are supporting performance, control, and measurable value." />
            <motion.div {...fadeUp} className="rounded-[2rem] bg-[#111827] p-7 text-white shadow-2xl sm:p-8">
              <div className="flex items-start gap-4"><IconBox icon={Radar} dark /><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">What leadership receives</p><h3 className="mt-3 text-2xl font-semibold leading-8 tracking-[-0.04em]">A clear view of risk, readiness, control, and value.</h3></div></div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{reviewOutputs.map((item) => <CheckItem key={item} light>{item}</CheckItem>)}</div>
            </motion.div>
          </Container>
        </section>

        <section id="assurance" className="border-y border-[#E7DED1] bg-white/55 py-16 sm:py-20">
          <Container>
            <SectionHeader center label="Corporate AI Assurance" title="Independent AI assurance for founders, executives, boards, and leadership teams." text="For corporations, multinationals, and regional business units that have adopted AI and need independent review of risk, compliance, adoption, control effectiveness, and business value. Dominion can serve as a Caribbean-region assurance partner for founder, executive, board, and senior-leadership reporting." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">{assuranceAreas.map((item) => <motion.div key={item.title} {...fadeUp}><Card className="h-full rounded-[1.75rem] border border-[#E7DED1] bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><IconBox icon={item.icon} /><h3 className="mt-6 text-xl font-semibold leading-7 tracking-[-0.03em]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.text}</p></CardContent></Card></motion.div>)}</div>
          </Container>
        </section>

        <section id="method" className="py-16 sm:py-20">
          <Container>
            <SectionHeader center label="Dominion Controlled Growth Framework™" title="We understand both the boardroom and the operating floor." text="Our method is informed by practical experience and large-enterprise best practices across corporate, industrial, oil and gas, financial-services, governance, administration, HR, project, change, operational, and AI-readiness environments." />
            <div className="mt-12 grid gap-5 md:grid-cols-4">{methodSteps.map(([number, title, text]) => <motion.div key={title} {...fadeUp} className="rounded-[1.75rem] border border-[#E7DED1] bg-[#FDFBF7] p-6 shadow-sm"><p className="text-sm font-semibold text-[#8A6A20]">{number}</p><h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#111827]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#4B5563]">{text}</p></motion.div>)}</div>
          </Container>
        </section>

        <section className="border-y border-[#E7DED1] bg-[#111827] py-16 text-white sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <SectionHeader light label="How We Work" title="No blame. Clear truth. Practical solutions." text="We work with clients and partners openly and honestly. Our role is not to assign blame, but to understand the system, identify what is limiting performance, protect what must be trusted, and build solutions that leave the organization stronger." />
            <motion.div {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Governance and administration</p><h3 className="mt-4 text-2xl font-semibold leading-8 tracking-[-0.04em] text-white">Governance sets direction. Administrative discipline makes it work.</h3><p className="mt-4 text-sm leading-7 text-white/66">We translate governance into records, reporting, follow-up, coordination, controls, evidence, and execution rhythm so leaders can see what is working and what needs attention.</p></motion.div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader center label="Who We Help" title="For organizations preparing to improve performance, strengthen control, or govern AI more seriously." text="Dominion supports organizations that need stronger systems, governance, administration, adoption, independent AI assurance, and measurable reporting." />
            <motion.div {...fadeUp} className="mx-auto mt-10 grid max-w-[960px] gap-3 sm:grid-cols-2 lg:grid-cols-5">{sectors.map((item) => <div key={item} className="rounded-2xl border border-[#E7DED1] bg-[#FDFBF7] px-4 py-4 text-center text-sm font-medium leading-6 text-[#374151] shadow-sm">{item}</div>)}</motion.div>
          </Container>
        </section>

        <section id="institute" className="border-y border-[#E7DED1] bg-white/55 py-16 sm:py-20">
          <Container>
            <SectionHeader center label="Dominion Institute" title="Training, research, and practical tools for leaders and teams." text="A focused knowledge area for AI governance seminars, business briefings, research materials, and practical tools that support better governance, adoption, and performance." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">{instituteAreas.map((item) => <motion.div key={item.title} {...fadeUp}><Card className="h-full rounded-[1.75rem] border border-[#E7DED1] bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><IconBox icon={item.icon} /><h3 className="mt-6 text-xl font-semibold leading-7 tracking-[-0.03em]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.text}</p></CardContent></Card></motion.div>)}</div>
          </Container>
        </section>

        <section id="contact" className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[2rem] bg-[#111827] px-6 py-12 text-center text-white shadow-2xl sm:px-10 md:px-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#D4AF37]"><Scale size={26} /></div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Start with clarity</p>
            <h2 className="mx-auto mt-4 max-w-[780px] text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.04] tracking-[-0.045em]">Before change expands further, know what your governance, systems, people, controls, and AI oversight can support.</h2>
            <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-white/66">Request an independent review to assess governance, administration, systems, AI use, people adoption, accountability, efficiency, risk, and the next 90 days of action.</p>
            <div className="mt-8 flex justify-center"><a href="mailto:advisory@dominiongovernance.com"><Button className="h-12 rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-[#111827] hover:bg-[#C9A22F]"><Mail className="mr-2" size={18} /> advisory@dominiongovernance.com</Button></a></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7DED1] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-3 text-sm leading-6 text-[#6B7280] md:flex-row">
          <p>© 2026 Dominion Group. All rights reserved.</p>
          <p className="md:text-right">Governance · Administration · Systems · AI Assurance · Performance · Decision-Ready Reporting</p>
        </div>
      </footer>
    </div>
  );
}
