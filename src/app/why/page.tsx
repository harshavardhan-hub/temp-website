"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ArrowRight, Check, X, Orbit, ActivitySquare } from "lucide-react";

export default function WhyOptiNyxus() {
  const roiData = [
    { name: "Decision Speed", before: 2, after: 100, labelBefore: "Days", labelAfter: "Minutes" },
    { name: "Execution", before: 20, after: 100, labelBefore: "Manual", labelAfter: "Continuous" },
    { name: "Pricing", before: 10, after: 100, labelBefore: "Static", labelAfter: "Real-time" },
    { name: "Operations", before: 30, after: 100, labelBefore: "Reactive", labelAfter: "Autonomous" },
  ];

  return (
    <div className="w-full bg-opti-bg min-h-screen font-sans">
      
      {/* Hero */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto text-center flex flex-col justify-center min-h-[40vh]">
        <motion.h1 
          className="text-4xl md:text-6xl font-semibold tracking-tight text-opti-text mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           The end of <span className="text-opti-muted">guessing.</span>
        </motion.h1>
      </section>

      {/* ── 1. ROI Section / Measurable Impact ── */}
      <section className="py-12 md:py-16 px-6 w-full bg-white border-t border-opti-border flex items-center min-h-[70vh]">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold tracking-tight text-opti-text max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Measurable impact — within weeks
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            
            {/* Left: Premium Text Comparison */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { label: "Decision Speed", b: "Decisions took days", a: "Decisions happen in minutes" },
                { label: "Execution", b: "Campaigns were manual", a: "Execution is continuous" },
                { label: "Pricing", b: "Pricing was static", a: "Pricing adapts in real time" },
                { label: "Operations", b: "Operations were reactive", a: "Operations run autonomously" }
              ].map((r, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-opti-border rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-stretch overflow-hidden group"
                >
                  {/* Traditional */}
                  <div className="flex-1 flex flex-col gap-1 bg-zinc-50 p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-opti-border relative overflow-visible">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Traditional</span>
                    <span className="text-sm font-medium text-zinc-500 line-through decoration-zinc-300">
                      {r.b}
                    </span>
                    
                    {/* Centered clearly visible mobile arrow overlapping the border */}
                    <div className="flex sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white border border-opti-border items-center justify-center rounded-full z-10 shadow-sm">
                       <ArrowRight className="w-3.5 h-3.5 text-zinc-400 rotate-90" />
                    </div>
                  </div>

                  {/* OptiNyxus */}
                  <div className="flex-1 flex flex-col gap-1 bg-white p-4 sm:p-5 relative overflow-visible">
                    {/* Centered clearly visible desktop arrow overlapping the border */}
                    <div className="hidden sm:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-opti-border items-center justify-center rounded-full z-10 shadow-sm transition-colors group-hover:bg-opti-accent-teal group-hover:border-opti-accent-teal text-zinc-400 group-hover:text-white">
                       <ArrowRight className="w-4 h-4" />
                    </div>
                    
                    <span className="text-[10px] font-bold uppercase tracking-widest text-opti-accent-teal">OptiNyxus</span>
                    <span className="text-sm md:text-base font-semibold text-opti-text">
                      {r.a}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right: Bar Chart Data */}
            <motion.div 
              className="w-full bg-zinc-50/50 border border-opti-border rounded-2xl p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-bold text-opti-muted uppercase tracking-widest">
                  Performance Multiplier
                </h3>
  
                {/* Legend */}
                <div className="hidden md:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-[2px] bg-zinc-200" />
                    <span className="text-zinc-500">Traditional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-[2px] bg-opti-accent-teal" />
                    <span className="text-opti-text">OptiNyxus</span>
                  </div>
                </div>
              </div>
              
              <div style={{ width: '100%', height: '220px', minHeight: '220px' }} className="w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} style={{ fontSize: '11px', fontWeight: 600, fill: '#6B7280' }} width={90} />
                    <Tooltip 
                      cursor={{fill: '#F3F4F6'}} 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white border border-opti-border p-3 rounded-lg shadow-md min-w-[130px] text-xs">
                              <p className="font-semibold text-opti-text mb-1.5">{payload[0].payload.name}</p>
                              <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-center gap-3 text-zinc-500">
                                  <span>Traditional</span>
                                  <span>{payload[0].payload.labelBefore}</span>
                                </div>
                                <div className="flex justify-between items-center gap-3 text-opti-text font-medium">
                                  <span className="text-opti-accent-teal">OptiNyxus</span>
                                  <span>{payload[0].payload.labelAfter}</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }} 
                    />
                    <Bar dataKey="before" radius={[0, 4, 4, 0]} barSize={12}>
                      {roiData.map((entry, index) => (
                        <Cell key={`cell-before-${index}`} fill="#E5E7EB" />
                      ))}
                    </Bar>
                    <Bar dataKey="after" radius={[0, 4, 4, 0]} barSize={12}>
                      {roiData.map((entry, index) => (
                        <Cell key={`cell-after-${index}`} fill="#10B981" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Differentiation Section / Why OptiNyxus Wins ── */}
      <section className="py-12 md:py-16 px-6 w-full bg-opti-bg border-t border-opti-border flex items-center min-h-[70vh]">
        <div className="max-w-6xl mx-auto w-full">
          
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-opti-text">
              Why OptiNyxus wins
            </h2>
          </motion.div>

          {/* Symmetrical Clean Cards Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Traditional Systems (Left Card) */}
            <motion.div 
              className="w-full bg-zinc-50 border border-opti-border rounded-2xl p-6 md:p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-opti-border">
                <div className="w-8 h-8 rounded-lg bg-zinc-200/50 flex items-center justify-center text-zinc-500 shrink-0">
                  <X className="w-4 h-4" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-opti-text">
                  Traditional Systems
                </h3>
              </div>
              
              <ul className="space-y-4 md:space-y-5 flex-1">
                {[
                  { title: "Dashboards", desc: "Forces you to stare at charts" },
                  { title: "Insights", desc: "Tells you there is a problem" },
                  { title: "Manual execution", desc: "Requires human intervention" },
                  { title: "Static rules", desc: "Fails when the market changes" }
                ].map((t, i) => (
                  <li key={i} className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-opti-text flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 inline-block mr-1" />
                       {t.title}
                    </span>
                    <span className="text-sm text-opti-muted ml-5 border-l-2 border-zinc-200 pl-3">
                      {t.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* OptiNyxus (Right Card) */}
            <motion.div 
              className="w-full bg-white border border-opti-accent-teal/20 shadow-[0_4px_20px_rgb(16,185,129,0.04)] rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-opti-accent-teal to-transparent opacity-50" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-opti-border/60">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-opti-accent-teal shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-opti-text">
                  OptiNyxus
                </h3>
              </div>
              
              <ul className="space-y-4 md:space-y-5 flex-1">
                {[
                  { title: "Autonomous agents", desc: "Takes action for you instantly" },
                  { title: "Decisions", desc: "Solves problems mathematically" },
                  { title: "Automatic execution", desc: "Pushes changes to your stack directly" },
                  { title: "Learning systems", desc: "Adapts and improves every iteration" }
                ].map((t, i) => (
                  <li key={i} className="flex flex-col gap-0.5 group">
                    <span className="text-base font-semibold text-opti-text flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-opti-accent-teal inline-block mr-1 group-hover:scale-125 transition-transform" />
                       {t.title}
                    </span>
                    <span className="text-sm text-opti-muted ml-5 border-l-2 border-emerald-100 pl-3">
                      {t.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 md:py-24 px-6 bg-white border-t border-opti-border relative flex justify-center">
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold mb-10 tracking-tight text-opti-text text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Works inside your existing systems
          </motion.h2>

          <motion.ul 
            className="w-full bg-zinc-50 border border-opti-border rounded-3xl p-8 md:p-12 shadow-sm flex flex-col gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              "Integrates with CRM, ERP, pricing, and campaign tools",
              "API-first architecture",
              "Real-time decision engine",
              "Closed-loop learning from every action"
            ].map((f, i) => (
               <li key={i} className="flex flex-row items-start gap-4 text-opti-text text-lg md:text-xl font-medium">
                 <div className="mt-2.5 w-2 h-2 rounded-full bg-opti-accent-teal shrink-0" />
                 <span>{f}</span>
               </li>
            ))}
          </motion.ul>

          <motion.div
            className="inline-flex items-center gap-3 bg-white border border-opti-border px-8 py-4 rounded-full shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Check className="w-5 h-5 text-opti-accent-teal shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-full" />
            <p className="text-lg font-semibold text-opti-text">No rip-and-replace required</p>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-6 bg-opti-bg border-t border-opti-border text-center flex flex-col justify-center min-h-[40vh]">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-balance text-opti-text">
             Stop analyzing. <span className="text-opti-accent-teal">Start executing.</span>
          </h2>
          <p className="text-base md:text-lg text-opti-muted max-w-xl mx-auto leading-relaxed mb-8">
            Deploy AI agents that continuously run your business — across growth, pricing, engagement, and operations.
          </p>
          <Link href="/contact" className="inline-block bg-opti-text text-white px-8 py-4 rounded-[12px] font-medium text-base hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-md">
            Request demo
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
