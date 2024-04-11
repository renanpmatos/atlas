import * as React from "react";
import { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Content } from "next/font/google";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "text-foreground",
      },
      placement: {
        tright: "left-0 top-0",
        tleft: "right-0 top-0",
        bright: "left-0 bottom-0",
        bleft: "right-0 bottom-0",
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
    <div className="">
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
