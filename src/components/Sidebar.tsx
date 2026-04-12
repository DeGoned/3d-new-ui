import React from 'react';
import { 
  LayoutDashboard, 
  HelpCircle, 
  LogOut,
  User,
  Ticket,
  MapPin,
  Package,
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "group flex w-full items-center space-x-3 rounded-xl px-4 py-3 transition-all duration-200",
      active 
        ? "bg-primary-container text-primary shadow-sm" 
        : "text-slate-500 hover:text-primary hover:bg-slate-50"
    )}
  >
    <Icon size={18} className={cn(active ? "fill-primary/20" : "transition-transform group-hover:scale-110")} />
    <span className="text-[13px] font-semibold">{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="hidden lg:flex fixed left-0 top-[134px] h-[calc(100vh-134px)] w-72 rounded-tr-[1.5rem] bg-white border-r border-t border-outline flex-col p-6 space-y-8 z-40 pt-8 shadow-sm">
      <div className="flex items-center space-x-4 px-2">
        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
          <User size={24} className="fill-primary/20" />
        </div>
        <div>
          <p className="text-[15px] font-bold text-on-background">Alex Rivers</p>
          <p className="text-xs font-semibold tracking-[0.08em] text-slate-500">Elite Tier</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        />
        <NavItem 
          icon={Package} 
          label="Orders" 
          active={activeTab === 'orders'} 
          onClick={() => setActiveTab('orders')}
        />
        <NavItem 
          icon={Ticket} 
          label="Coupons" 
          active={activeTab === 'coupons'} 
          onClick={() => setActiveTab('coupons')}
        />
        <NavItem 
          icon={MapPin} 
          label="Address" 
          active={activeTab === 'address'} 
          onClick={() => setActiveTab('address')}
        />
        <NavItem 
          icon={Settings} 
          label="Settings" 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        />
      </nav>

      <div className="pt-6 border-t border-outline space-y-2">
        <a href="#" className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:text-primary transition-colors">
          <HelpCircle size={20} />
          <span className="text-[13px] font-semibold">Help Center</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="text-[13px] font-semibold">Logout</span>
        </a>
        <div className="px-4 pt-3">
          <img src="/logo.svg" alt="ProtoTi" className="h-6 opacity-30" />
        </div>
      </div>
    </aside>
  );
};
