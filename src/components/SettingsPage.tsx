import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Lock, 
  Camera, 
  Eye, 
  EyeOff, 
  Save, 
  ChevronRight,
  Mail,
  Phone,
  Building2,
  Briefcase,
  UserCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl">
          <h1 className="mb-3 text-[2rem] font-bold tracking-tight text-on-background">
            Account Settings.
          </h1>
          <p className="text-[0.95rem] leading-relaxed text-slate-500">
            Manage your personal information, security preferences, and account details.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <section className="space-y-8">
        <div className="flex items-center border-b border-outline pb-4">
          <div className="flex space-x-8">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'password', label: 'Password', icon: Lock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center space-x-2 py-2 text-sm font-bold tracking-[0.04em] transition-all",
                  activeTab === tab.id ? "text-primary" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="settings-tab-underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'profile' ? (
            <motion.div
              key="profile-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              {/* Avatar Section */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-outline rounded-2xl p-8">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-primary-container flex items-center justify-center text-primary overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src="https://picsum.photos/seed/alex/300" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 border-2 border-white">
                    <Camera size={18} />
                  </button>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-on-background">hongxin hong</h3>
                  <p className="text-slate-400 font-medium">@kriseoooooo@gmail.com</p>
                  <button className="pt-2 text-xs font-bold tracking-[0.08em] text-primary hover:underline">
                    Change Avatar
                  </button>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">First Name</label>
                  <input 
                    type="text" 
                    defaultValue="hongxin"
                    className="w-full px-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue="hong"
                    className="w-full px-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 flex items-center text-[10px] font-black tracking-[0.08em] text-slate-400">
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="email" 
                      defaultValue="kriseoooooo@gmail.com"
                      disabled
                      className="w-full pl-12 pr-5 py-4 bg-slate-100 border border-outline rounded-xl text-sm font-bold text-slate-400 outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">Gender</label>
                  <div className="relative">
                    <UserCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <select className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none appearance-none focus:ring-2 ring-primary/20 transition-all">
                      <option>Select your gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">Company</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your company name"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="ml-1 text-[10px] font-black tracking-[0.08em] text-slate-400">Job Title</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your job title"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-md shadow-primary/20 flex items-center space-x-2">
                  <Save size={20} />
                  <span>Save Changes</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="password-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl space-y-8"
            >
              <div className="bg-white border border-outline rounded-2xl p-8 space-y-8">
                <div className="space-y-2">
                  <label className="ml-1 flex items-center text-[10px] font-black tracking-[0.08em] text-slate-400">
                    Current Password <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                    <button 
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                    >
                      {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 flex items-center text-[10px] font-black tracking-[0.08em] text-slate-400">
                    New Password <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                    <button 
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                    >
                      {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 flex items-center text-[10px] font-black tracking-[0.08em] text-slate-400">
                    Confirm New Password <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-on-background outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                    <button 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold transition-all active:scale-95 shadow-md shadow-primary/20 flex items-center justify-center space-x-2">
                    <Lock size={20} />
                    <span>Update Password</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h4 className="text-amber-800 font-bold text-sm mb-2">Password Requirements:</h4>
                <ul className="text-amber-700 text-xs space-y-1 list-disc list-inside">
                  <li>Minimum 8 characters long</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one number or special character</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};
