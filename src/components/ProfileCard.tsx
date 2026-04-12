import React from 'react';
import { BadgeCheck } from 'lucide-react';

export const ProfileCard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-on-background">Curator Profile</h2>
      <div className="bg-white border border-outline rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full p-1 border-2 border-primary border-dashed animate-[spin_10s_linear_infinite]">
            <div className="w-full h-full rounded-full overflow-hidden animate-[spin_10s_linear_infinite_reverse]">
              <img 
                alt="User Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx3_2aVc2n1eVeRtvPH74EZoWkhyQfAk1pjonJcRMikFwu_A1h9NCKJkByPfqEWLT0LozbaEFXa-_U9NYwN4fzqgS8S2Zi1l37eKULxjSMlLP-eHPhqqCptlfZtY6SZnuoQdi2rpQ-EaFzBRKujiMo8z9EkTdbXks4Z5I_uNXLx9Yt4jA8h65Vql9RPb3Kl3XsVPJb2cXU9HyrDwEuhO4ZYUFvgUNDKcl8BilZUvNhtdsS3iqzfJww8I5X14rlhamlVJDHeRlVRKEy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center shadow-sm">
            <BadgeCheck size={16} className="text-white fill-white/20" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-on-background mb-1">Alex Rivers</h3>
        <p className="text-slate-500 text-sm font-medium mb-6">Joined December 2021</p>

        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-outline group hover:bg-primary-container/30 transition-colors">
            <p className="mb-1 text-[10px] font-bold tracking-[0.08em] text-slate-400 transition-colors group-hover:text-primary/60">Total Spent</p>
            <p className="text-lg font-black text-primary">$12.4k</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-outline group hover:bg-primary-container/30 transition-colors">
            <p className="mb-1 text-[10px] font-bold tracking-[0.08em] text-slate-400 transition-colors group-hover:text-primary/60">Projects</p>
            <p className="text-lg font-black text-primary">24</p>
          </div>
        </div>

        <button className="w-full border-2 border-primary text-primary font-extrabold py-4 rounded-xl hover:bg-primary hover:text-white active:scale-95 transition-all duration-300">
          Edit Profile Details
        </button>
        
        <p className="mt-4 text-[10px] font-bold tracking-[0.08em] text-slate-400">
          Elite Tier Member Since 2022
        </p>
      </div>
    </div>
  );
};
