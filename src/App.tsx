import { useState } from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Settings2, 
  CheckCircle2, 
  Medal,
  Home,
  Plus,
  Package as PackageIcon,
  User as UserIcon,
  Ticket,
  MapPin,
  Settings
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { StatCard } from './components/StatCard';
import { RecentOrders } from './components/RecentOrders';
import { CouponsPage } from './components/CouponsPage';
import { AddressPage } from './components/AddressPage';
import { OrdersPage } from './components/OrdersPage';
import { SettingsPage } from './components/SettingsPage';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10 selection:text-primary">
      <TopNav />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="pt-[134px] pb-24 lg:ml-72 lg:px-10 xl:px-12 2xl:px-14 lg:pb-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header Section */}
              <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <h1 className="mb-3 text-[2rem] font-bold tracking-tight text-on-background">
                    Welcome back, Alex.
                  </h1>
                  <p className="text-[0.95rem] leading-relaxed text-slate-500">
                    Your curation projects are currently moving through the pipeline. 
                    You have 3 actions requiring immediate attention today.
                  </p>
                </div>
              </header>

              {/* Stats Grid */}
              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                <StatCard 
                  icon={ShoppingCart} 
                  label="In Cart" 
                  value="08" 
                  actionLabel="View Details" 
                  iconColor="text-primary"
                  onClick={() => { window.location.href = '/cart.html'; }}
                />
                <StatCard 
                  icon={CreditCard} 
                  label="Unpaid" 
                  value="03" 
                  actionLabel="Settle Now" 
                />
                <StatCard 
                  icon={Settings2} 
                  label="In Production" 
                  value="12" 
                  actionLabel="Track Progress" 
                />
                <StatCard 
                  icon={CheckCircle2} 
                  label="Completed" 
                  value="142" 
                  actionLabel="History" 
                />
              </div>

              {/* Content Grid */}
              <section className="grid grid-cols-1 gap-8">
                <div>
                  <RecentOrders onExplore={() => setActiveTab('orders')} />
                </div>
              </section>
            </motion.div>
          ) : activeTab === 'coupons' ? (
            <motion.div
              key="coupons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CouponsPage />
            </motion.div>
          ) : activeTab === 'address' ? (
            <motion.div
              key="address"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AddressPage />
            </motion.div>
          ) : activeTab === 'orders' ? (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <OrdersPage />
            </motion.div>
          ) : activeTab === 'settings' ? (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SettingsPage />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-outline flex justify-around items-center h-20 px-4 z-50">
        <button 
          onClick={() => setActiveTab('overview')}
          className={cn("flex flex-col items-center group", activeTab === 'overview' ? "text-primary" : "text-slate-400")}
        >
          <Home size={24} className={cn(activeTab === 'overview' && "fill-primary/20")} />
          <span className="mt-1 text-[10px] font-bold">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('orders')}
          className={cn("flex flex-col items-center group", activeTab === 'orders' ? "text-primary" : "text-slate-400")}
        >
          <PackageIcon size={24} className={cn(activeTab === 'orders' && "fill-primary/20")} />
          <span className="mt-1 text-[10px] font-bold">Orders</span>
        </button>
        <div className="relative -mt-10">
          <button className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/40 active:scale-90 transition-all">
            <Plus size={24} />
          </button>
        </div>
        <button 
          onClick={() => setActiveTab('coupons')}
          className={cn("flex flex-col items-center group", activeTab === 'coupons' ? "text-primary" : "text-slate-400")}
        >
          <Ticket size={24} className={cn(activeTab === 'coupons' && "fill-primary/20")} />
          <span className="mt-1 text-[10px] font-bold">Coupons</span>
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={cn("flex flex-col items-center group", activeTab === 'settings' ? "text-primary" : "text-slate-400")}
        >
          <Settings size={24} className={cn(activeTab === 'settings' && "fill-primary/20")} />
          <span className="mt-1 text-[10px] font-bold">Settings</span>
        </button>
      </nav>
    </div>
  );
}
