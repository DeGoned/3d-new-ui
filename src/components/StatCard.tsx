import React from 'react';
import { cn } from '../lib/utils';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  actionLabel: string;
  iconColor?: string;
  onClick?: () => void;
}

export const StatCard = ({ icon: Icon, label, value, actionLabel, iconColor = "text-slate-500", onClick }: StatCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-[164px] w-full flex-col items-center justify-center rounded-xl border border-outline bg-white px-6 py-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <Icon className={cn(iconColor, "mb-4 h-7 w-7 transition-transform group-hover:scale-110")} />
      <h3 className="mb-1 text-xs font-semibold text-slate-500">{label}</h3>
      <p className="text-[1.75rem] font-bold tracking-tight text-on-background">{value}</p>
      <div className="mt-3 flex items-center justify-center text-[11px] font-bold text-primary">
        <span>{actionLabel}</span>
      </div>
    </button>
  );
};
