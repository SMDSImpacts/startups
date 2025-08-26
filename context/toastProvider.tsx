// context/ToastProvider.tsx
"use client";

import { useState, useCallback, ReactNode } from "react";
import { ToastContext } from "./toastContext";
import { Toast, ToastType } from "@/type/toast"; // Adjust path if needed
import ToastContainer from "@/components/ToastContainer"; // We will create this next

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    },
    [], // No dependencies needed as `setToasts` is stable
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
}