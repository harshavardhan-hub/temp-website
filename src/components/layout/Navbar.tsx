"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Why OptiNyxus", href: "/why" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* FIXED HEADER CONTAINER: Never changes size or position */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-6 px-4 md:px-6 pointer-events-none">
        
        {/* THE PILL: Stationary and permanently styled with premium border radius */}
        <motion.div 
          className="pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between relative z-50 px-5 md:px-6 py-3.5 rounded-[16px] bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.06]"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-opti-text flex items-center gap-2 relative z-50">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-opti-text to-gray-500 shrink-0 pr-1">OptiNyxus</span>
          </Link>

          {/* Desktop Links (Center) */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link 
                  key={l.name} 
                  href={l.href}
                  className={`text-sm font-medium transition-opacity ${isActive ? 'text-black' : 'text-black/60 hover:text-black hover:opacity-100'}`}
                >
                  {l.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:flex items-center gap-6 relative z-50">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} 
              className="group relative overflow-hidden bg-opti-text text-white px-5 py-2.5 rounded-[12px] text-sm font-medium transition-transform active:scale-95 shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-2">Request demo</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
             onClick={() => setMobileMenu(!mobileMenu)}
             className="relative z-50 flex flex-col justify-center items-center w-10 h-10 rounded-[12px] bg-black/5 hover:bg-black/10 transition-colors md:hidden"
             aria-label="Toggle menu"
          >
            <motion.span animate={mobileMenu ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-opti-text block transition-all mb-1" />
            <motion.span animate={mobileMenu ? { opacity: 0 } : { opacity: 1 }} className="w-4 h-[1.5px] bg-opti-text block transition-all mb-1" />
            <motion.span animate={mobileMenu ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-opti-text block transition-all" />
          </button>
        </motion.div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 flex flex-col px-6 pt-32 pb-12 overflow-hidden"
          >
            <nav className="flex flex-col gap-6 h-full justify-center px-4">
               {links.map((l, idx) => (
                 <motion.div 
                   key={l.name}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 >
                   <Link 
                     href={l.href} 
                     onClick={() => setMobileMenu(false)} 
                     className="text-4xl sm:text-5xl font-semibold tracking-tight text-opti-text block hover:text-opti-accent-teal transition-colors"
                   >
                     {l.name}
                   </Link>
                 </motion.div>
               ))}
               
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 10 }}
                 transition={{ duration: 0.5, delay: links.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="mt-8 flex flex-col gap-4"
               >
                 <button 
                   onClick={() => { setMobileMenu(false); window.dispatchEvent(new CustomEvent('open-contact')); }}
                   className="bg-opti-text text-white text-center px-6 py-5 rounded-[16px] font-medium text-lg w-full flex items-center justify-center gap-2 shadow-lg shadow-black/10"
                 >
                   Request demo
                 </button>
               </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
