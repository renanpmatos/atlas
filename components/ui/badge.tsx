import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "absolute flex items-center justify-center px-2.5 py-1.5 rounded-full border text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        outline: "text-foreground",
      },
      placement: {
        tleft:
          "border-2 border-current -translate-x-1/2 -translate-y-1/3 left-1 top-0",
        tright:
          "border-2 border-current -translate-x-1/2 -translate-y-1/3 -right-7 top-0",
        bright:
          "border-2 border-current -translate-x-1/2 -translate-y-1/2 left-1 -bottom-7",
        bleft:
          "border-2 border-current -translate-x-1/2 -translate-y-1/2 -right-7 -bottom-7",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  content?: any;
}

function Badge({
  children,
  className,
  content,
  placement,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div className="relative">
      <div
        className={cn(badgeVariants({ placement, variant }), className)}
        {...props}>
        {content}
      </div>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
