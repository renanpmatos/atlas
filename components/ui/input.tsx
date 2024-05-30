import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {},
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  animatedPlaceholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, animatedPlaceholder, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(inputVariants())}
          ref={ref}
          {...props}
        />
        <label
          htmlFor="text"
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b border-white">
          <span className="absolute bottom-0 left-0 pb-5 transition-all duration-300">
            {animatedPlaceholder}
          </span>
        </label>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };

/*

<div class="flex items-center justify-center">
  <div class="relative">
    <input
      id="username"
      name="username"
      type="text"
      class="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="username"
      class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
      >Name</label
    >
  </div>
</div>

*/
