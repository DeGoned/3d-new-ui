import React from 'react';
import { ArrowRight, Minus, Pencil, Plus, Trash2 } from 'lucide-react';
import { PartItemCard, type PartItemCardData } from './PartItemCard';

const cartItems: PartItemCardData[] = [
  {
    fileName: 'Turbine_Housing_V4.stl',
    dimensions: '142 x 88 x 42 mm',
    metrics: '124.5 cm³',
    material: '1.2 SLM - Stainless Steel 316L - $$$',
    color: 'Metallic Gray',
    postProcess: 'Sand Blasted - Matte',
    quantity: '1',
    unitPrice: '$284.50',
    totalPrice: '$284.50',
    leadTime: 'Est. 4-6 days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXzZpUM03yLGjPJBbjgXDJPQqHs-4vwak6__2g4eoXPAdTGdvZqsH66zgU-NoCamha8oOubt5aUlqCKtBZBDxDwvHiNWyD9KMy7TTkIHjPp1JTBl4NwAT1odGhGaPdxxC80G6zYIj_brnITP3qAvOegIPWwFKx1QPIKtSsRonGsoG8VMGY3F2TTQBv4iduDiTOGt6M-s3I4vmPbHt6jGGOuhtU9xKzXHc_Sk1yEb0h5oicHRhCGiaQqwSaFGE9vu4n3OiPovWLxxw',
    note: 'Please keep the inner passage clean after finishing.',
    attachmentName: 'Tolerance_Notes.pdf',
  },
  {
    fileName: 'Base_Plate_Alpha.obj',
    dimensions: '200 x 200 x 10 mm',
    metrics: '400.0 cm³',
    material: 'Not Configured',
    color: 'Pending',
    postProcess: 'Pending',
    quantity: '1',
    unitPrice: '$0.00',
    totalPrice: 'Not Configured',
    leadTime: 'Awaiting configuration',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80',
  },
];

const CartAside = ({ item }: { item: PartItemCardData }) => (
  <div className="space-y-5">
    <div>
      <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Quantity</p>
      <div className="mt-3 inline-flex items-center rounded-full border border-outline bg-slate-50 p-1">
        <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white hover:text-primary">
          <Minus size={16} />
        </button>
        <span className="min-w-[2.5rem] text-center text-sm font-bold text-on-background">{item.quantity}</span>
        <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white hover:text-primary">
          <Plus size={16} />
        </button>
      </div>
    </div>

    <div>
      <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Unit Price</p>
      <p className="mt-2 text-sm font-semibold text-slate-800">{item.unitPrice ?? '-'}</p>
    </div>

    <div>
      <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Lead Time</p>
      <p className="mt-2 text-sm font-semibold text-slate-800">{item.leadTime ?? '-'}</p>
    </div>

    <div>
      <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Total Price</p>
      <p className="mt-2 text-2xl font-black tracking-tight text-primary">{item.totalPrice}</p>
    </div>
  </div>
);

export const CartPage = () => {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-[2.5rem] font-extrabold tracking-tighter text-on-background">Shopping Cart.</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Review each part before checkout. The card structure is aligned with order details so the same part data can be reused across quote, cart and settlement flows.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
          <span>Total Parts: <span className="text-slate-900">2</span></span>
          <span>Configured: <span className="text-primary">1</span></span>
          <span>Pending: <span className="text-slate-900">1</span></span>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="space-y-5">
          {cartItems.map((item, index) => (
            <PartItemCard
              key={item.fileName}
              item={item}
              eyebrow={`Part ${String(index + 1).padStart(2, '0')}`}
              tone="soft"
              topAction={
                <button className="rounded-full border border-outline bg-white px-4 py-2 text-xs font-bold tracking-[0.04em] text-slate-600 transition-colors hover:border-primary/30 hover:text-primary">
                  Configure
                </button>
              }
              rightAside={<CartAside item={item} />}
              footerActions={
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary-container px-4 py-2 text-xs font-bold tracking-[0.04em] text-primary transition-all hover:bg-primary hover:text-white">
                    <Pencil size={14} />
                    Edit Configuration
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-outline bg-white px-4 py-2 text-xs font-bold tracking-[0.04em] text-red-500 transition-colors hover:border-red-200 hover:bg-red-50">
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              }
            />
          ))}
        </section>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
            <p className="text-[11px] font-black tracking-[0.08em] text-primary">Shipping</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-background">Delivery Setup</h2>
            <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-500">
              <p className="font-semibold text-slate-800">1212 123 Default</p>
              <p className="mt-2">Tariff-Free Shipping</p>
              <p className="mt-1">Estimated delivery in 5-7 business days.</p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
            <p className="text-[11px] font-black tracking-[0.08em] text-primary">Order Summary</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-background">Checkout Total</h2>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-semibold text-slate-800">$274.32</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Shipping Fee</span>
                <span className="font-semibold text-slate-800">$65.00</span>
              </div>
              <div className="border-t border-outline pt-5">
                <div className="flex items-end justify-between">
                  <span className="text-base font-bold text-slate-900">Estimated Total</span>
                  <span className="text-3xl font-black tracking-tight text-primary">$339.32</span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <a
                href="/order-confirmation.html"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-bold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-95"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </a>
              <a
                href="/quote-manage.html"
                className="inline-flex w-full items-center justify-center rounded-full border border-outline bg-white px-5 py-4 text-sm font-bold text-slate-600 transition-colors hover:border-primary/30 hover:text-primary"
              >
                Back to Quotes
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};
