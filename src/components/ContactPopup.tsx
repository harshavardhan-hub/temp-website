"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
        className="bg-white rounded-[24px] w-full max-w-md p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-opti-text">Contact</h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Name</label>
            <input 
              type="text" 
              value="Suvranjan Biswas" 
              readOnly
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Email</label>
            <input 
              type="email" 
              value="suvranjanbiswas@gmail.com" 
              readOnly
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none font-medium"
            />
          </div>
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full bg-opti-text text-white py-3.5 rounded-[12px] font-medium hover:bg-black transition-all shadow-md mt-4"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
