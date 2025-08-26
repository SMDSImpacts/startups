// context/ToastContext.tsx
"use client";

import { createContext, useContext } from "react";
import { ToastContextType } from "@/type/toast"; // Adjust path if needed

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}