"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

interface TooltipContentProps extends TooltipPrimitive.TooltipContentProps {
  ref?: React.RefObject<HTMLDivElement>;
}

export const TooltipContent = ({
  ref,
  sideOffset,
  className,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "text-background border-divider bg-primary z-50 max-w-[90vw] rounded border px-2 py-1.5 text-sm shadow-md",
        className,
      )}
      {...props}
    />
  );
};

TooltipContent.displayName = TooltipPrimitive.Content.displayName;
