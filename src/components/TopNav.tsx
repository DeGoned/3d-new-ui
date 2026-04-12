import React, { useState, useRef } from 'react';
import { ShoppingCart, Phone, Mail, User, LogOut } from 'lucide-react';

export const TopNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Blue Info Bar */}
      <div className="bg-[#0060fe] text-white text-sm h-10 flex items-center">
        <div className="flex justify-between items-center w-full max-w-[1620px] mx-auto px-8 lg:px-12 xl:px-14">
          <div className="flex items-center gap-6">
            <a href="tel:+8618126397112" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>+86 18126397112</span>
            </a>
            <a href="mailto:hello@prototi.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span>hello@prototi.com</span>
            </a>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-1 border border-white/60 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
          >
            <span>🎉</span>
            <span>2026 Chinese New Year Holiday & ProtoTi Shipping Schedule</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/80 backdrop-blur-2xl border-b border-outline/30 shadow-[0_2px_15px_rgba(0,0,0,0.03)] h-16">
        <div className="flex justify-between items-center h-full w-full max-w-[1620px] mx-auto px-8 lg:px-12 xl:px-14">
          <div className="flex items-center gap-5">
            <a href="/home-v3.html" className="flex items-center shrink-0">
              <img src="/logo.svg" alt="ProtoTi" className="h-7" />
            </a>
            <a
              href="/quote-manage.html"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#0060fe] text-white text-sm font-bold rounded-full hover:brightness-110 active:scale-95 transition-all shadow-sm shadow-[#0060fe]/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Instant Quote
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <a
              href="/cart.html"
              className="relative flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="hidden lg:inline text-sm font-semibold">Cart</span>
            </a>

            {/* User Dropdown */}
            <div
              className="relative pb-2 -mb-2"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <User size={20} />
                <span className="hidden lg:inline text-sm font-semibold text-slate-700">hongxin hong</span>
              </button>

              <div
                className={`absolute right-0 top-full pt-1 w-44 z-50 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'
                }`}
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg py-1">
                  <a href="/" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <User size={16} className="text-slate-400" />
                    Personal Center
                  </a>
                  <div className="my-1 border-t border-slate-100"></div>
                  <a href="/login.html" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={16} />
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
