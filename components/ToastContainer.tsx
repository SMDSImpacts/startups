// components/ToastContainer.tsx
import { Toast } from "@/type/toast";
import ToastMessage from "./ToastMessage";

interface ToastContainerProps {
  toasts: Toast[];
}

export default function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-xs space-y-2">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} toast={toast} />
      ))}
    </div>
  );
}