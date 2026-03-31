"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, BrainCircuit, Zap, BarChart3, Target } from "lucide-react";

const agents = [
  {
    id: "marketedge",
    name: "MarketEdge",
    tagline: "Find and act on Revenue opportunity",
    features: ["Detects demand shifts and high-value segments", "Prioritizes growth opportunities", "Launches targeting and activation automatically"],
    outcome: "Higher ROI on every growth dollar",
    img: "/marketedge.png"
  },
  {
    id: "pricegenix",
    name: "PriceGenix",
    tagline: "Set the right price — at every moment",
    features: ["Tracks demand, competition, elasticity", "Optimizes pricing continuously", "Executes changes across systems"],
    outcome: "Maximized margin and conversion",
    img: "/pricegenix.png"
  },
  {
    id: "engagesync",
    name: "EngageSync",
    tagline: "Engage every customer with the right action",
    features: ["Understands intent, lifecycle, loyalty", "Decides next-best action", "Executes campaigns autonomously"],
    outcome: "Higher LTV, retention, conversion",
    img: "/engagesync.png"
  },
  {
    id: "optiflow",
    name: "OptiFlow",
    tagline: "Run operations without manual intervention",
    features: ["Monitors workflows", "Identifies inefficiencies", "Executes fixes and process steps"],
    outcome: "Faster operations, lower cost",
    img: "/optiflow.png"
  }
];

const StackedCard = ({ agent, i, total, scrollYProgress }: any) => {
  const targetScale = 1 - ((total - i) * 0.05);

  const scale = useTransform(scrollYProgress, [i * 0.25, 1], [1, targetScale]);

  return (
    <div className="h-[calc(100dvh-72px)] flex items-center justify-center sticky top-[72px] px-4 sm:px-6">
      <motion.div
        style={{
          scale,
          top: `calc(${i * 25}px)`
        }}
        className="w-full max-w-[500px] md:max-w-2xl bg-white border border-opti-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 md:p-10 flex flex-col justify-between h-auto min-h-[480px] origin-top relative overflow-hidden"
      >
        {/* Solid White Base + Themed Pink Overlay for vibrancy without opacity bug */}
        <div className="absolute inset-0 bg-opti-accent-pink/40 pointer-events-none" />

        {/* Unified Premium Glow Effect over the pink */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-opti-accent-teal blur-[100px] opacity-10 pointer-events-none" />

        <div>
          <div className="flex flex-col sm:flex-row gap-6 mb-6 md:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 rounded-[20px] bg-white flex items-center justify-center p-2 border border-black/5 shadow-sm overflow-hidden relative z-20">
              <Image src={agent.img} alt={agent.name} width={80} height={80} className="object-contain" />
            </div>
            <div className="relative z-20">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-opti-text">{agent.name}</h3>
              <p className="text-sm sm:text-base font-medium leading-snug text-opti-accent-teal mix-blend-multiply">{agent.tagline}</p>
            </div>
          </div>

          <ul className="space-y-2 sm:space-y-3 mb-6 md:mb-8 relative z-20">
            {agent.features.map((feat: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-zinc-400" />
                <span className="font-medium text-zinc-800">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-black/10 mt-auto relative z-20">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-opti-text">Outcome</p>
          <p className="text-sm sm:text-base text-zinc-800 font-medium mt-1">{agent.outcome}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 -mt-[72px] pt-[calc(72px+5rem)] pb-16 bg-grid-pattern overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-[calc(50%+36px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-opti-accent-pink/30 rounded-full blur-[100px] pointer-events-none -z-10" />

        <motion.div
          className="max-w-[72rem] mx-auto text-center z-10 flex flex-col items-center justify-center w-full"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-[64px] lg:text-7xl font-semibold tracking-tight text-opti-text leading-[1.1] mb-6 text-center w-full flex flex-col items-center text-balance px-2">
            <span className="mb-2 md:mb-0 text-center">AI agents that run your business</span>
            <span className="text-opti-muted mt-1 md:mt-0 text-center"><span className="text-black">from</span> Decisions to Execution</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-opti-muted max-w-4xl mx-auto px-4 mb-10 leading-relaxed text-center text-balance">
            <span className="block md:inline">OptiNyxus deploys autonomous agents that </span>
            <span className="block md:inline mt-1 md:mt-0">identify opportunities, set prices, engage customers and execute operations in real time.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              className="bg-opti-text text-white px-8 py-4 rounded-[16px] font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
            >
              See it in action
            </button>
            <Link href="/how-it-works" className="bg-white text-opti-text border border-opti-border px-8 py-4 rounded-[16px] font-medium hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Explore platform <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Flow Strip */}
        <motion.div
          className="w-full max-w-5xl mx-auto border border-opti-border rounded-2xl bg-white/60 backdrop-blur-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[
            { icon: Activity, label: "Signals" },
            { icon: BrainCircuit, label: "AI Agents", active: true },
            { icon: BarChart3, label: "Decisions" },
            { icon: Zap, label: "Actions" },
            { icon: Target, label: "Outcomes" }
          ].map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-3 group">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${step.active ? 'bg-opti-accent-teal text-white shadow-lg shadow-opti-accent-teal/20 scale-110' : 'bg-gray-100 text-opti-muted group-hover:bg-gray-200'}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${step.active ? 'text-opti-text' : 'text-opti-muted'}`}>{step.label}</span>
              </div>
              {i < 4 && (
                <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-opti-border to-transparent relative">
                  <motion.div
                    className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-opti-accent-teal -translate-y-1/2"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="w-full bg-opti-text text-white py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto flex flex-col items-center"
        >
          <motion.p variants={fadeUp} className="uppercase tracking-widest text-xs font-semibold text-zinc-400 mb-12 text-center">
            Deployed across high-scale retail, banking, and digital businesses
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              { prefix: "Upto", stat: "32%", label: "Revenue Uplift" },
              { stat: "1.6x - 3.2x", label: "Gross Profit Improvement" },
              { prefix: "Upto", stat: "66%", label: "Reduction in cost to address Attrition" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center justify-center h-full py-8 md:py-0 px-2 md:px-4 w-full relative">
                <span className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-opti-accent-teal flex items-baseline justify-center">
                  {item.prefix && <span className="text-xl md:text-2xl font-medium tracking-normal text-opti-accent-teal mr-1.5">{item.prefix}</span>}
                  {item.stat}
                </span>
                <span className="text-sm font-medium text-zinc-400">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Summary */}
      <section className="w-full pt-20 pb-10 md:pt-32 md:pb-16 px-6 bg-white shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            className="w-full flex flex-col items-center text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6 text-balance px-2">
              From signals to action automatically
            </motion.h2>
            
            <motion.div variants={fadeUp} className="text-xl md:text-2xl text-opti-muted max-w-4xl mx-auto flex flex-col mb-4 md:mb-6 px-4 text-balance leading-tight">
              <p>Most systems tell you what happened.</p>
              <p>Some tell you what to do.</p>
              <p className="font-semibold text-opti-text">None actually do it.</p>
            </motion.div>

            <motion.h3 variants={fadeUp} className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-opti-text text-balance px-4 leading-relaxed">
              OptiNyxus is an <span className="font-semibold">Autonomous Decisioning System</span> with AI agents that continuously
            </motion.h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { num: "1", title: "Observe", desc: "Customer behavior, pricing signals, demand shifts, workflows" },
              { num: "2", title: "Decide", desc: "AI agents evaluate opportunities, optimize decisions, and learn continuously" },
              { num: "3", title: "Act", desc: "Campaigns launched, prices updated, workflows executed — automatically" }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-gray-50 border border-opti-border rounded-2xl p-8 flex flex-col gap-6 items-start hover:shadow-md transition-shadow h-full text-left">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-opti-accent-teal font-bold text-xl shadow-sm border border-opti-border">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-opti-text mb-3">{step.title}</h3>
                  <p className="text-opti-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Layer (Stacked Deck) */}
      <StackedDeckSection />
    </div>
  );
}

function StackedDeckSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="w-full bg-opti-bg bg-grid-pattern relative">
      <div className="pt-24 md:pt-32 pb-4 px-6 relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-opti-text mb-4 text-balance">
            Four specialized agents.<br />One continuous system.
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full mx-auto md:max-w-5xl pb-[5vh]">
        {agents.map((agent, i) => (
          <StackedCard
            key={agent.id}
            agent={agent}
            i={i}
            total={agents.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      <div className="w-full flex justify-center pb-32">
        <Link href="/how-it-works" className="bg-opti-text text-white px-8 py-4 rounded-[16px] font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 relative z-20">
          Explore OptiNyxus
        </Link>
      </div>
    </section>
  );
}
