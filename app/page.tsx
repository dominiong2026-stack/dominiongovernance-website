'use client';

// @ts-nocheck
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

function Button({ children, variant = 'solid', className = '' }) {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2A] focus-visible:ring-offset-2';
  const styles =
    variant === 'outline'
      ? 'border border-[#CBD5E1] bg-white text-[#0B1220] shadow-sm hover:border-[#B88A2A]/60 hover:bg-[#F8FAFC]'
      : 'bg-[#0B1220] text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] hover:bg-[#182235]';
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

function Card({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = '' }) {
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
  transition: { duration: 0.55, ease: 'easeOut' },
};

const proof = [
  {
    value: 'Boardroom + Operations',
    label: 'Governance discipline connected to operational reality.',
  },
  {
    value: 'TT$300M+',
    label: 'Capital portfolio leadership experience.',
  },
  {
    value: 'US$4M+',
    label: 'Reported cost-savings contribution.',
  },
];

const workAreas = [
  {
    icon: ShieldCheck,
    title: 'Governance and decision-maker readiness',
    text: 'Decision rights, risk visibility, controls, accountability, reporting, and confidence for founders, executives, boards, and leadership teams.',
  },
  {
    icon: Workflow,
    title: 'Systems and administration',
    text: 'Governance translated into records, workflows, follow-up, coordination, reporting, and execution discipline.',
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
    text: 'Give founders, owners, executives, directors, and senior leaders clearer visibility over AI risk, adoption, and value.',
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
    text: 'Sessions for leaders and teams on AI governance, adoption, risk, controls, and measurable business impact.',
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

function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function IconBox({ icon: Icon, dark = false }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-[#C6A15B]' : 'bg-[#0B1220] text-[#C6A15B]'} shadow-sm`}>
      <Icon size={21} strokeWidth={1.9} />
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1220] text-[#C6A15B] shadow-sm">
        <Building2 size={21} />
      </div>
      <div className="leading-none">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0B1220]">Dominion</p>
        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.30em] text-[#B88A2A]">Group</p>
      </div>
    </div>
  );
}

function SectionHeader({ label, title, text, center = false, light = false }) {
  return (
    <motion.div {...fadeUp} className={`${center ? 'mx-auto text-center' : ''} max-w-[820px]`}>
      <p className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? 'text-[#C6A15B]' : 'text-[#B88A2A]'}`}>{label}</p>
      <h2 className={`mt-4 text-[clamp(2rem,3.4vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.055em] ${light ? 'text-white' : 'text-[#0B1220]'}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  );
}

function CheckItem({ children, light = false }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className={`mt-1 shrink-0 ${light ? 'text-[#C6A15B]' : 'text-[#B88A2A]'}`} size={18} />
      <p className={`text-sm leading-6 ${light ? 'text-slate-300' : 'text-slate-700'}`}>{children}</p>
    </div>
  );
}

export default function DominionGroupMasterWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-[#0B1220] antialiased selection:bg-[#C6A15B]/25">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <a href="#top" aria-label="Dominion Group home">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#B88A2A]">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="mailto:advisory@dominiongovernance.com" className="hidden lg:block">
            <Button className="py-2.5">Request Review</Button>
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B1220] shadow-sm lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </Container>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <Container className="grid gap-2 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <a href="mailto:advisory@dominiongovernance.com" className="mt-2">
                <Button className="w-full">Request Review</Button>
              </a>
            </Container>
          </div>
        )}
      </header>

      <main id="top" className="overflow-hidden">
        <section className="relative isolate border-b border-slate-200 bg-white">
          <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(198,161,91,0.15),rgba(255,255,255,0)_54%)]" />
          <Container className="py-20 sm:py-24 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mx-auto max-w-[980px] text-center"
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8A6A20] shadow-sm">
                Independent Governance, Systems & AI Assurance
              </div>
              <h1 className="mt-7 text-[clamp(3rem,6.4vw,6.2rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-[#0B1220]">
                Stronger governance for serious operators.
              </h1>
              <p className="mx-auto mt-7 max-w-[760px] text-lg leading-8 text-slate-600 sm:text-xl">
                Dominion provides independent business and AI governance reviews for organizations that need clearer control, sharper accountability, operational discipline, and decision-ready reporting.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="mailto:advisory@dominiongovernance.com">
                  <Button className="h-13 w-full px-7 sm:w-auto">
                    Request an Independent Review <ArrowRight className="ml-2" size={17} />
                  </Button>
                </a>
                <a href="#assurance">
                  <Button variant="outline" className="h-13 w-full px-7 sm:w-auto">
                    View AI Assurance
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto mt-16 grid max-w-[960px] gap-4 sm:grid-cols-3">
              {proof.map((item) => (
                <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#0B1220]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section id="work" className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
          <Container>
            <SectionHeader
              center
              label="What We Do"
              title="We connect decision-maker priorities to operating reality."
              text="Dominion is not only an AI governance firm. We bring executive operating perspective, governance discipline, HR and change-management insight, project execution, administration, and systems thinking to improve business performance."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workAreas.map((item) => (
                <motion.div key={item.title} {...fadeUp}>
                  <Card className="h-full rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
                    <CardContent className="p-7">
                      <IconBox icon={item.icon} />
                      <h3 className="mt-7 text-xl font-semibold leading-7 tracking-[-0.035em] text-[#0B1220]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="review" className="bg-white py-20 sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <SectionHeader
              label="Flagship Review"
              title="Dominion Business & AI Governance Review™."
              text="A practical independent review for organizations that need to understand whether governance, administration, people, systems, projects, and AI adoption are supporting performance, control, and measurable value."
            />

            <motion.div {...fadeUp} className="overflow-hidden rounded-[2rem] bg-[#0B1220] p-8 text-white shadow-[0_32px_90px_rgba(11,18,32,0.28)] sm:p-9">
              <div className="absolute" />
              <div className="flex items-start gap-4">
                <IconBox icon={Radar} dark />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C6A15B]">What leadership receives</p>
                  <h3 className="mt-3 text-3xl font-semibold leading-9 tracking-[-0.05em]">A clear view of risk, readiness, control, and value.</h3>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {reviewOutputs.map((item) => (
                  <CheckItem key={item} light>{item}</CheckItem>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        <section id="assurance" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <Container>
            <SectionHeader
              center
              label="Corporate AI Assurance"
              title="Independent AI assurance for founders, executives, boards, and leadership teams."
              text="For corporations, multinationals, and regional business units that have adopted AI and need independent review of risk, compliance, adoption, control effectiveness, and business value. Dominion can serve as a Caribbean-region assurance partner for founder, executive, board, and senior-leadership reporting."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {assuranceAreas.map((item) => (
                <motion.div key={item.title} {...fadeUp}>
                  <Card className="h-full rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
                    <CardContent className="p-8">
                      <IconBox icon={item.icon} />
                      <h3 className="mt-7 text-xl font-semibold leading-7 tracking-[-0.035em] text-[#0B1220]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="method" className="bg-white py-20 sm:py-24">
          <Container>
            <SectionHeader
              center
              label="Dominion Controlled Growth Framework™"
              title="We understand both the boardroom and the operating floor."
              text="Our method is informed by practical experience and large-enterprise best practices across corporate, industrial, oil and gas, financial-services, governance, administration, HR, project, change, operational, and AI-readiness environments."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {methodSteps.map(([number, title, text]) => (
                <motion.div key={title} {...fadeUp} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
                  <p className="text-sm font-bold text-[#B88A2A]">{number}</p>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em] text-[#0B1220]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#0B1220] py-20 text-white sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <SectionHeader
              light
              label="How We Work"
              title="No blame. Clear truth. Practical solutions."
              text="We work with clients and partners openly and honestly. Our role is not to assign blame, but to understand the system, identify what is limiting performance, protect what must be trusted, and build solutions that leave the organization stronger."
            />

            <motion.div {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.20)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C6A15B]">Governance and administration</p>
              <h3 className="mt-4 text-3xl font-semibold leading-9 tracking-[-0.05em] text-white">
                Governance sets direction. Administrative discipline makes it work.
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                We translate governance into records, reporting, follow-up, coordination, controls, evidence, and execution rhythm so leaders can see what is working and what needs attention.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <Container>
            <SectionHeader
              center
              label="Who We Help"
              title="For organizations preparing to improve performance, strengthen control, or govern AI more seriously."
              text="Dominion supports organizations that need stronger systems, governance, administration, adoption, independent AI assurance, and measurable reporting."
            />

            <motion.div {...fadeUp} className="mx-auto mt-12 grid max-w-[980px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {sectors.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section id="institute" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <Container>
            <SectionHeader
              center
              label="Dominion Institute"
              title="Training, research, and practical tools for leaders and teams."
              text="A focused knowledge area for AI governance seminars, business briefings, research materials, and practical tools that support better governance, adoption, and performance."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {instituteAreas.map((item) => (
                <motion.div key={item.title} {...fadeUp}>
                  <Card className="h-full rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
                    <CardContent className="p-8">
                      <IconBox icon={item.icon} />
                      <h3 className="mt-7 text-xl font-semibold leading-7 tracking-[-0.035em] text-[#0B1220]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2.25rem] bg-[#0B1220] px-6 py-14 text-center text-white shadow-[0_32px_90px_rgba(11,18,32,0.30)] sm:px-10 md:px-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#C6A15B]">
              <Scale size={26} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.30em] text-[#C6A15B]">Start with clarity</p>
            <h2 className="mx-auto mt-5 max-w-[820px] text-[clamp(2.1rem,3.7vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
              Before change expands further, know what your governance, systems, people, controls, and AI oversight can support.
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-sm leading-7 text-slate-300">
              Request an independent review to assess governance, administration, systems, AI use, people adoption, accountability, efficiency, risk, and the next 90 days of action.
            </p>
            <div className="mt-9 flex justify-center">
              <a href="mailto:advisory@dominiongovernance.com">
                <Button className="bg-[#C6A15B] px-7 text-[#0B1220] shadow-[0_18px_45px_rgba(198,161,91,0.22)] hover:bg-[#B88A2A]">
                  <Mail className="mr-2" size={18} /> advisory@dominiongovernance.com
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-3 text-sm leading-6 text-slate-500 md:flex-row">
          <p>© 2026 Dominion Group. All rights reserved.</p>
          <p className="md:text-right">Governance · Administration · Systems · AI Assurance · Performance · Decision-Ready Reporting</p>
        </div>
      </footer>
    </div>
  );
}
