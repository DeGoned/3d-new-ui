import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Plus,
  Pencil,
  Trash2,
  Check,
  Building2,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const COUNTRIES = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands",
  "Belgium", "Austria", "Switzerland", "Italy", "Spain", "Portugal",
  "Sweden", "Denmark", "Norway", "Finland", "Poland", "Czech Republic",
  "Hungary", "Romania", "Greece", "Ireland", "Luxembourg", "Canada",
  "Australia", "New Zealand", "Japan", "Singapore", "South Korea"
];

const emptyForm = {
  firstName: '', lastName: '', company: '', taxId: '',
  email: '', phone: '', country: '', address1: '', address2: '',
  city: '', state: '', postalCode: '', isDefault: false
};

const shippingAddresses = [
  {
    id: 1,
    name: "1212 123",
    isDefault: true,
    company: "123",
    taxId: "123",
    email: "kriseoooooo@gmail.com",
    phone: "123123",
    address1: "12312, 123",
    address2: "12312, 123, 123123",
    country: "Germany"
  }
];

type Address = typeof shippingAddresses[0];

interface FormData {
  firstName: string; lastName: string; company: string; taxId: string;
  email: string; phone: string; country: string; address1: string;
  address2: string; city: string; state: string; postalCode: string;
  isDefault: boolean;
}

const inputCls = "w-full bg-slate-50 border border-outline rounded-xl px-4 py-3 text-sm text-on-background outline-none focus:ring-2 ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400";
const labelCls = "mb-1.5 block text-xs font-bold tracking-[0.08em] text-slate-500";

export const AddressPage = () => {
  const [activeTab, setActiveTab] = useState('shipping');
  const [addresses, setAddresses] = useState(shippingAddresses);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowModal(true);
  };

  const openEdit = (addr: Address) => {
    const [firstName = '', lastName = ''] = addr.name.split(' ');
    setForm({
      firstName, lastName,
      company: addr.company, taxId: addr.taxId,
      email: addr.email, phone: addr.phone,
      country: addr.country,
      address1: addr.address1, address2: addr.address2 || '',
      city: '', state: '', postalCode: '',
      isDefault: addr.isDefault
    });
    setEditingId(addr.id);
    setShowModal(true);
  };

  const closeModal = () => { setShowModal(false); setEditingId(null); };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const name = `${form.firstName} ${form.lastName}`.trim();
    if (editingId !== null) {
      setAddresses(addresses.map(a => a.id === editingId
        ? { ...a, name, company: form.company, taxId: form.taxId, email: form.email, phone: form.phone, country: form.country, address1: form.address1, address2: form.address2, isDefault: form.isDefault }
        : form.isDefault ? { ...a, isDefault: false } : a
      ));
    } else {
      const newAddr: Address = {
        id: Date.now(), name, company: form.company, taxId: form.taxId,
        email: form.email, phone: form.phone, country: form.country,
        address1: form.address1, address2: form.address2, isDefault: form.isDefault
      };
      setAddresses(prev =>
        form.isDefault ? [...prev.map(a => ({ ...a, isDefault: false })), newAddr] : [...prev, newAddr]
      );
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl">
          <h1 className="mb-3 text-[2rem] font-bold tracking-tight text-on-background">
            Address Management.
          </h1>
          <p className="text-[0.95rem] leading-relaxed text-slate-500">
            Manage your shipping and billing locations for a seamless checkout experience.
          </p>
        </div>
        <button
          onClick={openAdd}
          className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-md shadow-primary/20 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add New Address</span>
        </button>
      </header>

      {/* Tabs */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-outline pb-4">
          <div className="flex space-x-8">
            {['shipping', 'billing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative py-2 text-sm font-bold tracking-[0.04em] transition-all",
                  activeTab === tab ? "text-primary" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab === 'shipping' ? 'Shipping Address' : 'Billing Address'}
                {activeTab === tab && (
                  <motion.div
                    layoutId="address-tab-underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'shipping' && addresses.length > 0 ? (
            <motion.div
              key="shipping-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="bg-white border border-outline rounded-xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all group relative"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-bold tracking-tight text-on-background">{addr.name}</h3>
                      {addr.isDefault && (
                        <span className="rounded-full bg-primary-container px-3 py-1 text-[10px] font-black tracking-[0.08em] text-primary">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => openEdit(addr)}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(addr.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-slate-500">
                        <Building2 size={16} className="text-slate-300" />
                        <span className="text-sm font-medium">Company: {addr.company}, Tax ID: {addr.taxId}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-500">
                        <Mail size={16} className="text-slate-300" />
                        <span className="text-sm font-medium">{addr.phone}, {addr.email}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 text-slate-500">
                        <MapPin size={16} className="text-slate-300 mt-0.5" />
                        <div className="text-sm font-medium">
                          <p>{addr.address1}</p>
                          <p>{addr.address2}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-500">
                        <Globe size={16} className="text-slate-300" />
                        <span className="text-sm font-medium">{addr.country}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-outline/50">
                    <label className="flex items-center space-x-3 cursor-pointer group/check">
                      <div className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                        addr.isDefault ? "bg-primary border-primary" : "border-outline group-hover/check:border-primary"
                      )}>
                        {addr.isDefault && <Check size={14} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className={cn(
                        "text-xs font-bold tracking-[0.08em] transition-colors",
                        addr.isDefault ? "text-primary" : "text-slate-400 group-hover/check:text-slate-600"
                      )}>
                        Set as Default
                      </span>
                    </label>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center justify-between pt-8">
                <p className="text-xs font-bold tracking-[0.08em] text-slate-400">
                  Showing 1-{addresses.length} of {addresses.length} items
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline text-slate-300 cursor-not-allowed">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline text-slate-300 cursor-not-allowed">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <select className="bg-white border border-outline rounded-lg px-4 py-2 text-xs font-bold text-slate-600 outline-none focus:ring-2 ring-primary/20">
                    <option>10 / page</option>
                    <option>20 / page</option>
                    <option>50 / page</option>
                  </select>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty-address"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                <MapPin size={40} />
              </div>
              <div>
                <p className="text-on-background font-bold">No addresses yet</p>
                <p className="text-slate-400 text-sm">Add your first address to speed up your checkout.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Address Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-outline sticky top-0 bg-white z-10 rounded-t-2xl">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-on-background">
                    {editingId !== null ? 'Edit Address' : 'Add New Address'}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">All fields marked with * are required</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSave} className="px-8 py-6 space-y-6">

                {/* Recipient */}
                <div>
                  <p className="mb-4 text-[10px] font-black tracking-[0.08em] text-primary">Recipient Information</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>First Name *</label>
                      <input className={inputCls} placeholder="John" value={form.firstName} onChange={set('firstName')} required />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name *</label>
                      <input className={inputCls} placeholder="Smith" value={form.lastName} onChange={set('lastName')} required />
                    </div>
                    <div>
                      <label className={labelCls}>Company Name</label>
                      <input className={inputCls} placeholder="Acme Corp" value={form.company} onChange={set('company')} />
                    </div>
                    <div>
                      <label className={labelCls}>Tax ID / VAT Number</label>
                      <input className={inputCls} placeholder="DE123456789" value={form.taxId} onChange={set('taxId')} />
                    </div>
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input className={inputCls} type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} required />
                    </div>
                    <div>
                      <label className={labelCls}>Phone *</label>
                      <input className={inputCls} type="tel" placeholder="+49 123 456 789" value={form.phone} onChange={set('phone')} required />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <p className="mb-4 text-[10px] font-black tracking-[0.08em] text-primary">Shipping Address</p>
                  <div className="space-y-4">
                    <div>
                      <label className={labelCls}>Country / Region *</label>
                      <select className={inputCls} value={form.country} onChange={set('country')} required>
                        <option value="">Select a country...</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Street Address *</label>
                      <input className={inputCls} placeholder="123 Main Street" value={form.address1} onChange={set('address1')} required />
                    </div>
                    <div>
                      <label className={labelCls}>Address Line 2 <span className="normal-case font-normal text-slate-400">(Apt, Suite, Building…)</span></label>
                      <input className={inputCls} placeholder="Suite 4B" value={form.address2} onChange={set('address2')} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <label className={labelCls}>Postal Code *</label>
                        <input className={inputCls} placeholder="10115" value={form.postalCode} onChange={set('postalCode')} required />
                      </div>
                      <div className="col-span-1">
                        <label className={labelCls}>City *</label>
                        <input className={inputCls} placeholder="Berlin" value={form.city} onChange={set('city')} required />
                      </div>
                      <div className="col-span-1">
                        <label className={labelCls}>State / Province</label>
                        <input className={inputCls} placeholder="Bavaria" value={form.state} onChange={set('state')} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Default toggle */}
                <label className="flex items-center gap-3 cursor-pointer group/check pt-2">
                  <button
                    type="button"
                    onClick={() => setForm(p => ({ ...p, isDefault: !p.isDefault }))}
                    className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center transition-all shrink-0",
                      form.isDefault ? "bg-primary border-primary" : "border-outline group-hover/check:border-primary"
                    )}
                  >
                    {form.isDefault && <Check size={13} className="text-white" strokeWidth={3} />}
                  </button>
                  <span className="text-sm font-semibold text-slate-600">Set as default address</span>
                </label>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:brightness-110 transition-all active:scale-95 shadow-md shadow-primary/20"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
