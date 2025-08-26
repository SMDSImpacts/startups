// components/ToastMessage.tsx
import { useEffect } from "react";
import { useToast } from "@/context/toastContext";
import { Toast } from "@/type/toast";

interface ToastMessageProps {
  toast: Toast;
}

const toastTypeClasses = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

export default function ToastMessage({ toast }: ToastMessageProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000); // Auto-remove after 3 seconds

    // Cleanup the timer if the component is unmounted before the time is up
    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, removeToast]);

  const toastClass = toastTypeClasses[toast.type] || toastTypeClasses.info;

  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg px-4 py-2 text-white shadow-md animate-fade-in-up ${toastClass}`}
    >
      {toast.message}
    </div>
  );
}