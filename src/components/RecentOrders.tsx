import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { OrderItemsPreview } from './OrderItemsPreview';

const orders = [
  {
    id: "#ORD-9021",
    name: "Premium Editorial Pack",
    date: "Oct 24, 2023",
    amount: "$1,240.00",
    itemsLabel: "5 items",
    status: "Completed",
    statusClass: "bg-slate-100 text-slate-700",
    actionLabel: "Details",
    previewImages: [
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 5,
  },
  {
    id: "#ORD-8842",
    name: "Bespoke Design Suite",
    date: "Oct 21, 2023",
    amount: "$2,100.00",
    itemsLabel: "3 items",
    status: "Production",
    statusClass: "bg-primary-container text-primary",
    actionLabel: "Track",
    previewImages: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 3,
  },
  {
    id: "#ORD-8810",
    name: "Curator Essentials",
    date: "Oct 19, 2023",
    amount: "$450.00",
    itemsLabel: "1 item",
    status: "Unpaid",
    statusClass: "bg-slate-100 text-slate-600",
    actionLabel: "Pay",
    previewImages: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 1,
  }
];

export const RecentOrders = ({ onExplore }: { onExplore?: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[1.5rem] font-bold text-on-background">Recent Orders</h2>
        <button onClick={onExplore} className="group flex items-center text-sm font-bold text-primary hover:underline">
          View All
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="bg-white rounded-xl border border-outline overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-[0.04em] text-slate-500">Order ID</th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-[0.04em] text-slate-500">Date</th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-[0.04em] text-slate-500">Items</th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-[0.04em] text-slate-500">Total</th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-[0.04em] text-slate-500">Status</th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-[0.04em] text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="grid grid-cols-[148px_minmax(0,1fr)] items-start gap-5">
                      <OrderItemsPreview
                        previewImages={order.previewImages}
                        totalItems={order.modelCount}
                        title={`${order.id} Models`}
                        className="flex flex-col gap-2"
                      />
                      <div className="space-y-2 pt-1 text-left">
                        <p className="text-sm font-semibold text-on-background">{order.id}</p>
                        <p className="text-sm text-slate-400">{order.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center text-sm font-medium text-slate-600">{order.date}</td>
                  <td className="px-6 py-5 text-center text-sm font-medium text-slate-600">{order.itemsLabel}</td>
                  <td className="px-6 py-5 text-center text-sm font-semibold text-on-background">{order.amount}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={cn("inline-flex rounded-sm px-3 py-1 text-sm font-medium", order.statusClass)}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-4">
                      {order.status === 'Unpaid' ? (
                        <>
                          <button className="text-sm font-bold text-primary hover:underline">Pay</button>
                          <button className="text-sm font-bold text-primary hover:underline">Details</button>
                        </>
                      ) : (
                        <button className="text-sm font-bold text-primary hover:underline">{order.actionLabel}</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
