import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export function ErrorMessage({
  message = "Something went wrong. Please try again.",
  className,
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
        className,
      )}
      role="alert"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}
