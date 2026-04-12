import React, { useState } from 'react';
import { Paperclip, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { ModelPreviewModal } from './ModelPreviewModal';

export type PartItemCardData = {
  fileName: string;
  dimensions: string;
  metrics?: string;
  material: string;
  color: string;
  postProcess: string;
  quantity: string;
  unitPrice?: string;
  totalPrice: string;
  leadTime?: string;
  image: string;
  note?: string;
  attachmentName?: string;
};

interface PartItemCardProps {
  item: PartItemCardData;
  eyebrow?: string;
  topAction?: React.ReactNode;
  rightAside?: React.ReactNode;
  footerActions?: React.ReactNode;
  tone?: 'plain' | 'soft';
}

export const PartItemCard: React.FC<PartItemCardProps> = ({
  item,
  eyebrow,
  topAction,
  rightAside,
  footerActions,
  tone = 'plain',
}: PartItemCardProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          'rounded-[1.75rem] border border-outline p-6 transition-all',
          tone === 'soft'
            ? 'bg-slate-50/70 hover:border-primary/20 hover:bg-white'
            : 'bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'
        )}
      >
        <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)_220px]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="flex h-40 w-full items-center justify-center rounded-[1.25rem] border border-outline/70 bg-white p-4 shadow-sm transition-transform hover:scale-[1.01]"
            >
              <img
                src={item.image}
                alt={item.fileName}
                className="h-full w-full rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
            <div>
              {eyebrow ? (
                <p className="text-[10px] font-black tracking-[0.08em] text-primary">{eyebrow}</p>
              ) : null}
              <h3 className="mt-2 text-lg font-black tracking-tight text-on-background">{item.fileName}</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">{item.dimensions}</p>
              {item.metrics ? <p className="mt-1 text-xs font-medium text-slate-400">{item.metrics}</p> : null}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {item.attachmentName ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-500 ring-1 ring-outline">
                    <Paperclip size={14} />
                    {item.attachmentName}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-400 ring-1 ring-outline">
                    <Paperclip size={14} />
                    No attachments
                  </span>
                )}
                {item.note ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-500 ring-1 ring-outline">
                    <MessageSquare size={14} />
                    Notes attached
                  </span>
                ) : null}
              </div>
              {topAction}
            </div>

            <div className="grid gap-4 border-t border-outline/70 pt-5 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Material</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{item.material}</p>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Color</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{item.color}</p>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Post Process</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{item.postProcess}</p>
              </div>
            </div>

            {item.note ? (
              <div className="rounded-[1.25rem] border border-outline bg-white px-4 py-3">
                <p className="text-[10px] font-black tracking-[0.08em] text-slate-400">Part Notes</p>
                <p className="mt-2 text-sm text-slate-500">{item.note}</p>
              </div>
            ) : null}

            {footerActions ? <div className="border-t border-outline/70 pt-4">{footerActions}</div> : null}
          </div>

          <aside className="rounded-[1.5rem] border border-outline/70 bg-white p-5">
            {rightAside}
          </aside>
        </div>
      </article>

      <ModelPreviewModal
        open={previewOpen}
        title={item.fileName}
        images={[item.image]}
        activeIndex={0}
        onSelect={() => {}}
        onClose={() => setPreviewOpen(false)}
      />
    </>
  );
};
