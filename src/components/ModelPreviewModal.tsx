import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

type ModelPreviewModalProps = {
  open: boolean;
  title: string;
  images: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onClose: () => void;
};

export const ModelPreviewModal = ({
  open,
  title,
  images,
  activeIndex,
  onClose,
}: ModelPreviewModalProps) => {
  const dragState = useRef({ active: false, x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState({ x: -8, y: 18 });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    setScale(1);
    setRotation({ x: -8, y: 18 });
    dragState.current = { active: false, x: 0, y: 0 };
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragState.current.active) return;

      const deltaX = event.clientX - dragState.current.x;
      const deltaY = event.clientY - dragState.current.y;

      dragState.current = {
        active: true,
        x: event.clientX,
        y: event.clientY,
      };

      setRotation((current) => ({
        x: Math.max(-45, Math.min(45, current.x - deltaY * 0.12)),
        y: current.y + deltaX * 0.18,
      }));
    };

    const handlePointerUp = () => {
      dragState.current.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  const safeImages = images.length > 0 ? images : [''];
  const currentImage = safeImages[Math.max(0, Math.min(activeIndex, safeImages.length - 1))];

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/55 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 flex h-[92vh] w-full max-w-[min(96vw,1920px)] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          <h2 className="text-xl font-medium tracking-tight text-slate-900 sm:text-[1.95rem]">
            3D Preview - {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 p-3 sm:p-4">
          <div
            className="flex h-full cursor-grab items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-50 [perspective:1600px] active:cursor-grabbing"
            onPointerDown={(event) => {
              dragState.current = {
                active: true,
                x: event.clientX,
                y: event.clientY,
              };
            }}
            onWheel={(event) => {
              event.preventDefault();
              const nextScale = scale - event.deltaY * 0.0012;
              setScale(Math.max(0.72, Math.min(2.4, nextScale)));
            }}
            onDoubleClick={() => {
              setScale(1);
              setRotation({ x: -8, y: 18 });
            }}
          >
            <img
              src={currentImage}
              alt={title}
              className="pointer-events-none max-h-full max-w-full select-none object-contain drop-shadow-[0_28px_80px_rgba(15,23,42,0.18)] transition-transform duration-75"
              style={{
                transform: `scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              referrerPolicy="no-referrer"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
