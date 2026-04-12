import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Ticket,
  Clock,
  Tag, 
  Info, 
  Calendar, 
  ChevronRight,
  Gift
} from 'lucide-react';
import { cn } from '../lib/utils';

const coupons = [
  {
    id: 1,
    code: "March-8off",
    highlight: "8% Off",
    condition: "No order minimum",
    uses: "986 uses left",
    expires: "Apr 1, 2026",
    type: "Percentage Deal",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    id: 2,
    code: "new_freeship",
    highlight: "Free Shipping",
    condition: "On orders over $200.00",
    uses: "10 uses left",
    expires: "Jul 1, 2026",
    type: "Free Shipping",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    id: 3,
    code: "new_10off",
    highlight: "10% Off",
    condition: "On orders over $50.00",
    uses: "12 uses left",
    expires: "Jul 1, 2026",
    type: "Percentage Deal",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    id: 4,
    code: "new_usd20",
    highlight: "$20 Off",
    condition: "No order minimum",
    uses: "32 uses left",
    expires: "Jul 1, 2026",
    type: "Cash Savings",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  }
];

export const CouponsPage = () => {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="max-w-xl">
          <h1 className="mb-3 text-[2rem] font-bold tracking-tight text-on-background">
            Your Rewards.
          </h1>
          <p className="text-[0.95rem] leading-relaxed text-slate-500">
            Redeem exclusive offers and manage your active coupons to maximize your curation budget.
          </p>
      </header>

      {/* My Coupons Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-outline pb-4">
          <div className="flex space-x-8">
            {['available', 'used', 'expired'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative py-2 text-sm font-bold tracking-[0.04em] transition-all",
                  activeTab === tab ? "text-primary" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="text-xs font-bold tracking-[0.08em] text-slate-400">
            Total: {activeTab === 'available' ? coupons.length : 0}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'available' ? (
            <motion.div 
              key="available"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {coupons.map((coupon) => (
                <div 
                  key={coupon.id}
                  className="bg-white border border-outline rounded-xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all group relative overflow-hidden"
                >
                  <div className={cn("absolute top-0 right-0 rounded-bl-xl px-4 py-1 text-[10px] font-black tracking-[0.08em]", coupon.color)}>
                    {coupon.type}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Tag size={14} />
                      <span className="text-xs font-bold tracking-[0.08em]">Code: {coupon.code}</span>
                    </div>

                    <div>
                      <h3 className="text-[1.75rem] font-bold leading-tight tracking-tight text-on-background">
                        {coupon.highlight}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-400 font-normal">
                        {coupon.condition}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-outline/50">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-slate-500">
                          <Clock size={14} />
                          <span className="text-xs font-medium">{coupon.uses}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-500">
                          <Calendar size={14} />
                          <span className="text-xs font-medium">Expires: {coupon.expires}</span>
                        </div>
                      </div>
                      <button className="text-primary font-bold text-xs flex items-center hover:underline">
                        Use Now
                        <ChevronRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                <Ticket size={40} />
              </div>
              <div>
                <p className="text-on-background font-bold">No {activeTab} coupons</p>
                <p className="text-slate-400 text-sm">Check back later for new rewards.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Banner */}
      <section className="bg-primary-container/50 p-6 rounded-xl border border-primary/10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
            <Gift size={24} />
          </div>
          <div>
            <p className="font-bold text-primary">New Coupon Available!</p>
            <p className="text-primary/70 text-sm">Get $100 Off on your next CNC machining order over $1000.</p>
          </div>
        </div>
        <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all">
          Claim Reward
        </button>
      </section>

      {/* Tips Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-outline">
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
            <Calendar size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-on-background mb-1">Check Expiry Date</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Always check the expiry date before planning your purchase.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
            <Tag size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-on-background mb-1">Combine & Save</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Some coupons can be combined for maximum savings.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
            <Info size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-on-background mb-1">Minimum Order</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Pay attention to minimum order requirements for each deal.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
