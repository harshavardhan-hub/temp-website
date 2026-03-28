"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { AlertCircle, CheckCircle2, Activity } from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FLOWS = [
  {
    id: 0,
    label: "Revenue Growth",
    signal: "Drop in conversion in Segment X",
    steps: [
      { agent: "System",     action: "Detects opportunity" },
      { agent: "MarketEdge", action: "Prioritizes high-value segment" },
      { agent: "EngageSync", action: "Launches targeted engagement" },
      { agent: "PriceGenix", action: "Adjusts pricing dynamically" },
    ],
    outcome: "Conversion and Revenue lift",
  },
  {
    id: 1,
    label: "Pricing Optimization",
    signal: "Competitor price drop",
    steps: [
      { agent: "System",     action: "Detects market shift" },
      { agent: "PriceGenix", action: "Recalculates elasticity" },
      { agent: "PriceGenix", action: "Adjusts pricing dynamically" },
      { agent: "System",     action: "Monitors margin impact" },
    ],
    outcome: "Margin growth, Volume sustained",
  },
  {
    id: 2,
    label: "Customer Retention",
    signal: "High churn probability",
    steps: [
      { agent: "EngageSync", action: "Triggers retention journey" },
      { agent: "PriceGenix", action: "Offers personalized discount" },
    ],
    outcome: "Churn reduced",
  },
  {
    id: 3,
    label: "Operations",
    signal: "Workflow delay or backlog",
    steps: [
      { agent: "OptiFlow", action: "Reroutes process automatically" },
      { agent: "System",   action: "Auto-resolves bottleneck" },
    ],
    outcome: "Faster Cycle time",
  },
] as const;

type Flow = typeof FLOWS[number];

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────────

const getAgentTheme = (agent: string) => {
  switch (agent) {
    case "MarketEdge": return "bg-blue-50 text-blue-700 border-blue-200";
    case "EngageSync": return "bg-orange-50 text-orange-700 border-orange-200";
    case "PriceGenix": return "bg-purple-50 text-purple-700 border-purple-200";
    case "OptiFlow": return "bg-teal-50 text-teal-700 border-teal-200";
    default: return "bg-zinc-100 text-zinc-700 border-zinc-200"; // System
  }
};

function FlowDetailProfessional({ flow }: { flow: Flow }) {
  return (
    <div className="flex flex-col h-full justify-between gap-3 md:gap-4 overflow-hidden">
      
      {/* Signal Section */}
      <div className="flex items-start gap-3 md:gap-4 shrink-0">
        <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
          <Activity className="w-5 h-5 md:w-6 md:h-6 opacity-80" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-opti-muted block mb-0.5 md:mb-1">
            Signal Detected
          </span>
          <span className="text-base md:text-xl font-semibold text-opti-text leading-tight">
            {flow.signal}
          </span>
        </div>
      </div>

      {/* Steps Path */}
      <div className="flex-1 ml-5 md:ml-6 border-l-2 border-dashed border-zinc-200 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 py-2 md:py-4 pl-6 md:pl-8 relative">
        {flow.steps.map((step, i) => (
          <motion.div 
            key={i} 
            className="flex flex-col relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            {/* Path Node marker */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-zinc-300 rounded-full" />
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-1 md:px-2.5 md:py-1 rounded-md border ${getAgentTheme(step.agent)} w-fit shrink-0`}>
                {step.agent}
              </span>
              <span className="text-zinc-600 text-xs md:text-sm lg:text-base font-medium leading-snug">
                {step.action}
              </span>
            </div>
          </motion.div>
        ))}
        
        {/* Animated flow particle overlay */}
        <motion.div 
          className="absolute left-[-5px] top-0 w-2 h-8 rounded-full bg-opti-border/80 pointer-events-none"
          animate={{ y: [0, 250] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Outcome Section */}
      <motion.div 
        className="bg-emerald-50 border border-emerald-100 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-row items-center justify-between gap-3 shrink-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-600/70 block mb-0.5 md:mb-1">
            Outcome Achieved
          </span>
          <span className="text-sm md:text-lg lg:text-xl font-semibold text-emerald-900 leading-tight">
            {flow.outcome}
          </span>
        </div>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </motion.div>

    </div>
  );
}

// ─── MAIN STICKY SCROLL SECTION (RESPONSIVE) ─────────────────────────────────

function InteractiveFlows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest >= 0.25 && latest < 0.5) setActiveIndex(1);
    else if (latest >= 0.5 && latest < 0.75) setActiveIndex(2);
    else if (latest >= 0.75) setActiveIndex(3);
  });

  const flow = FLOWS[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-opti-bg">
      {/* ── Sticky view container ── */}
      <div className="sticky top-[72px] w-full h-[calc(100dvh-72px)] overflow-hidden flex items-center bg-opti-bg border-y border-opti-border">
        
        {/* Very subtle background texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.5fr] gap-6 md:gap-10 lg:gap-16 items-center">
          
          {/* ── Left: Elegant Typographic Nav ── */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 md:mb-8 lg:mb-10">
              <span className="text-opti-muted text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-2 md:mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-opti-text text-balance">
                Autonomous orchestration.
              </h2>
            </div>
            
            {/* Mobile-only pagination dots */}
            <div className="flex md:hidden items-center gap-2 mb-2">
              {FLOWS.map((f, i) => (
                <div 
                  key={f.id} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-opti-text' : 'w-2 bg-opti-border'}`} 
                />
              ))}
            </div>

            {/* Desktop-only flow list */}
            <div className="hidden md:flex flex-col gap-1 relative border-l-2 border-opti-border pl-4 lg:pl-6">
              
              {/* Active animated indicator */}
              <motion.div 
                className="absolute left-[-2px] top-0 w-[2px] bg-opti-text rounded-full origin-top"
                initial={false}
                animate={{ 
                  height: `${(100 / FLOWS.length)}%`, 
                  y: `${activeIndex * 100}%` 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              />

              {FLOWS.map((f, i) => (
                <div 
                  key={f.id}
                  className="py-2 lg:py-4 flex flex-col transition-all duration-300 pointer-events-none"
                  style={{ opacity: activeIndex === i ? 1 : 0.4 }}
                >
                  <span className={`text-lg lg:text-2xl font-medium ${activeIndex === i ? 'text-opti-text' : 'text-opti-muted'}`}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="hidden md:flex mt-6 lg:mt-10 text-[10px] lg:text-xs font-medium text-opti-muted uppercase tracking-widest flex items-center gap-2 opacity-60">
              <motion.span 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
              Scroll to advance
            </p>
          </div>

          {/* ── Right: Clean Card Canvas ── */}
          <div className="relative w-full h-auto min-h-[420px] sm:min-h-[450px] aspect-auto md:aspect-[4/5] lg:aspect-[4/3] max-h-[70vh] md:max-h-[650px] flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={flow.id}
                className="absolute inset-0 bg-white rounded-3xl border border-opti-border shadow-sm p-6 md:p-8 lg:p-10"
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <FlowDetailProfessional flow={flow} />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── COMBINED PAGE COMPONENT ──────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-opti-bg min-h-screen flex flex-col font-sans">
      
      {/* ── 1. Hero header ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center w-full">
        <motion.h1 
          className="text-5xl md:text-7xl font-semibold tracking-tight text-opti-text mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Real decisions. Real execution. <span className="text-opti-muted">Real outcomes.</span>
        </motion.h1>
      </section>

      {/* ── 2. Professional use-case flows (Sticky Scroll) ── */}
      <InteractiveFlows />

      {/* ── 3. Case Snippets ── */}
      <section className="py-32 px-6 bg-white border-t border-opti-border w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-12 text-center text-opti-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proven business impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Retail",
                metric: "+27% revenue from micro-segmentation activation",
                problem: "Underutilized customer base",
                action: "MarketEdge + EngageSync",
                result: "Immediate lift in targeted segments"
              },
              {
                industry: "E-commerce",
                metric: "+12% margin via real-time pricing",
                problem: "Static pricing",
                action: "PriceGenix deployment",
                result: "Margin expansion without volume loss"
              },
              {
                industry: "Banking / Lending",
                metric: "3x faster customer engagement decisions",
                problem: "Manual campaign cycles",
                action: "EngageSync automation",
                result: "Faster conversions, lower CAC"
              }
            ].map((caseItem, i) => (
              <motion.div 
                key={i}
                className="bg-opti-accent-pink/50 border border-opti-border p-8 rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-opti-muted mb-4 block">{caseItem.industry}</span>
                <h3 className="text-2xl font-semibold text-opti-text mb-8">{caseItem.metric}</h3>
                
                <div className="space-y-4 text-sm bg-white p-6 rounded-2xl border border-opti-border shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-opti-muted uppercase text-xs font-semibold mb-1">Problem</span>
                    <span className="text-opti-text font-medium">{caseItem.problem}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-opti-muted uppercase text-xs font-semibold mb-1">Action</span>
                    <span className="text-opti-accent-teal font-medium">{caseItem.action}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-opti-muted uppercase text-xs font-semibold mb-1">Result</span>
                    <span className="text-opti-text font-medium">{caseItem.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
