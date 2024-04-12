"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const badgeVariants = cva(
  "absolute flex items-center justify-center rounded-full border text-base font-semibold transition-colors",
  {
    variants: {
      disabled: {
        true: "pointer-events-none opacity-75",
      },
      variant: {
        default:
          "px-2.5 py-1 border-transparent bg-primary text-primary-foreground",
        outline:
          "px-2.5 py-1 border-2 border-primary rounded-2xl bg-background text-accent-foreground",
        shadow:
          "px-2.5 py-1 border-transparent bg-primary text-primary-foreground shadow-lg shadow-primary/30",
        circle:
          "rounded-full px-2.5 py-1 m-2.5 bg-primary text-primary-foreground",
      },
      placement: {
        tleft:
          "border-4 border-current -translate-x-1/2 -translate-y-1/3 left-1 top-0",
        tright:
          "border-4 border-current -translate-x-1/2 -translate-y-1/3 -right-8 top-0",
        bleft:
          "border-4 border-current -translate-x-1/2 translate-y-1/3 left-1 bottom-0",
        bright:
          "border-4 border-current -translate-x-1/2 translate-y-1/3 -right-8 bottom-0",
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
  disabled?: boolean;
  content?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closeVariant?: string;
}

function Badge({
  children,
  className,
  disabled,
  content,
  icon,
  placement,
  variant,
  onClose,
  closeVariant,
  ...props
}: BadgeProps) {
  return (
    <div>
      {/* div pai, usado como referencia para posicionar a badge */}
      <div className="relative">
        <div
          className={cn(
            badgeVariants({ disabled, placement, variant }),
            className
          )}
          {...props}>
          {/* Renderiza o ícone se estiver disponível */}
          {icon && <span className="mr-1">{icon}</span>}
          {content}

          {/* Renderiza o botão de fechar se a função onClose estiver presente */}
          {onClose && (
            <button
              className={cn("flex ml-2", closeVariant)}
              onClick={onClose}
              aria-label="close">
              <X className={cn("p-0.5")} />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export { Badge, badgeVariants };
