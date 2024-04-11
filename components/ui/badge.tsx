import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const badgeVariants = cva(
  "absolute flex items-center justify-center rounded-full border text-base font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "px-2.5 py-1 border-transparent bg-primary text-primary-foreground",
        outline: "text-foreground",
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
  content?: string;
  icon?: React.ReactNode; // Aceita um tipo de ícone do React Icons
}

function Badge({
  children,
  className,
  content,
  icon,
  placement,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div>
      {/* div pai, usado como referencia para posicionar a badge */}
      <div className="relative">
        <div
          className={cn(badgeVariants({ placement, variant }), className)}
          {...props}>
          {/* Renderiza o ícone se estiver disponível */}
          {icon && <span className="mr-1">{icon}</span>}
          {content}
        </div>
        {children}
      </div>
    </div>
  );
}

export { Badge, badgeVariants };
