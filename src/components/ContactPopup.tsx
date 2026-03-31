"use client";
import { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact", handleOpen);
    return () => window.removeEventListener("open-contact", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div 
        className="bg-white rounded-[24px] w-full max-w-md p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 animate-in fade-in zoom-in duration-200"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex flex-col items-center justify-center text-center pt-4 pb-2">
          <div className="w-16 h-16 bg-opti-accent-teal/10 text-opti-accent-teal rounded-full flex items-center justify-center mb-6 shadow-sm border border-opti-accent-teal/20">
            <Mail className="w-8 h-8" />
          </div>
          
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Please drop a mail to
            <a 
              href="mailto:info@optinyxus.onmicrosoft.com" 
              className="block mt-2 font-semibold text-opti-accent-teal hover:underline text-xl break-all"
            >
              info@optinyxus.onmicrosoft.com
            </a>
          </p>
          
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full bg-opti-text text-white py-3.5 rounded-[12px] font-medium hover:bg-black transition-all shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
