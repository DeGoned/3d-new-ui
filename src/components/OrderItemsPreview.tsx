import React, { useMemo, useState } from 'react';
import { ModelPreviewModal } from './ModelPreviewModal';

type OrderItemsPreviewProps = {
  previewImages: string[];
  totalItems: number;
  className?: string;
  title?: string;
};

export const OrderItemsPreview = ({ previewImages, totalItems, className, title = 'Order Model Preview' }: OrderItemsPreviewProps) => {
  const images = useMemo(() => previewImages.filter(Boolean), [previewImages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (images.length === 0) return null;

  const childImages = images.slice(1, 4);

  const openPreview = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className={className}>
        <button
          type="button"
          onClick={() => openPreview(0)}
          className="relative h-12 w-12 shrink-0 overflow-visible rounded-xl border border-outline bg-slate-50 shadow-sm transition-transform hover:scale-[1.03]"
        >
          <img src={images[0]} alt="Primary order model preview" className="h-full w-full rounded-xl object-cover" referrerPolicy="no-referrer" />
        </button>

        {totalItems > 1 ? (
          <div className="flex items-center gap-1.5">
            {childImages.map((image, index) => {
              const previewIndex = index + 1;
              const showBadge = index === childImages.length - 1;

              return (
                <button
                  key={`${image}-${previewIndex}`}
                  type="button"
                  onClick={() => openPreview(previewIndex)}
                  className="relative h-7 w-7 shrink-0 overflow-visible rounded-md border border-outline bg-slate-50 shadow-sm transition-transform hover:scale-[1.03]"
                >
                  <img src={image} alt={`Order model preview ${previewIndex + 1}`} className="h-full w-full rounded-md object-cover" referrerPolicy="no-referrer" />
                  {showBadge ? (
                    <span className="absolute -right-2 -top-2 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[9px] font-black text-white shadow-sm shadow-primary/20">
                      +{totalItems - 1}
                    </span>
                  ) : null}
                </button>
              );
            })}
            <span className="select-none text-[10px] font-black tracking-[0.28em] text-slate-300">...</span>
          </div>
        ) : null}
      </div>

      <ModelPreviewModal
        open={open}
        title={title}
        images={images}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
