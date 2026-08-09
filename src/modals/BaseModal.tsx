import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Title from "../components/title";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function BaseModal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-app-bg-open-modal/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md transform rounded-lg bg-modal-bg p-6 shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-2 flex items-center justify-between border-b border-gray-200 dark:border-zinc-700">
          <Title text={title} />
          <button
            className="text-gray-400 dark:text-zinc-700 hover:text-zinc-600 dark:hover:text-zinc-500 text-2xl font-light transition-colors leading-none focus:outline-none focus:ring-2 focus:ring-focus"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default BaseModal;
