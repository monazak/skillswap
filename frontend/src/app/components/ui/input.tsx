"use client";

import * as React from "react";
import { cn } from "./utils";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

function Input({
  className,
  type,
  label,
  error,
  id,
  ...props
}: InputProps) {
  const inputId = id || React.useId();

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--text-primary)]"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        data-slot="input"
        className={cn(
          "w-full h-9 rounded-md border px-3 py-1 text-sm bg-input-background",
          "placeholder:text-muted-foreground",
          "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-destructive focus-visible:ring-destructive/20",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export { Input };