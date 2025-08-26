// types/toast.ts
export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

export interface ToastContextType {
  addToast: (message:string, type?: ToastType) => void;
  removeToast: (id: number) => void;
  toasts: Toast[];
}