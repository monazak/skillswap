"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "./utils";

type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  online?: boolean;
};

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
  xl: "size-16",
};

function getInitials(name?: string) {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({
  className,
  src,
  alt,
  size = "md",
  online = false,
  children,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-muted flex items-center justify-center",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className="aspect-square size-full object-cover"
        />
      )}

      <AvatarPrimitive.Fallback className="flex size-full items-center justify-center text-sm font-medium">
        {children || getInitials(alt)}
      </AvatarPrimitive.Fallback>

      {online && (
        <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-green-500 border-2 border-white" />
      )}
    </AvatarPrimitive.Root>
  );
}

export { Avatar };