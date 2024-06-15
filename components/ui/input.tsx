"use client";

import * as React from "react";
import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-14 w-full border-2  rounded-md ring-offset-background bg-background px-3 text-sm placeholder:text-muted-foreground",
  {
    variants: {
      variant: {
        flat: "border-none",
        border: "border border-sky-500",
        underline: "",
        faded: "",
      },
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  animatedLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, animatedLabel, type = "text", ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(event.target.value !== "");
    };

    return (
      <div className="relative">
        <input
          id="input"
          name="input"
          type={type}
          className={cn(
            inputVariants(),
            "peer",
            className,
            `${animatedLabel ? "pb-2 pt-6" : "py-2"}`
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor="input"
          className={`absolute left-3 cursor-text transition-all ${
            focused || hasValue ? "text-sm top-2" : "text-base top-4"
          }`}>
          {animatedLabel}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

/*

  Outra forma de fazer o efeito do Label, porém com mais tailwind

  <!--Email input-->
<div class="relative mb-3">
  <input
    type="email"
    class="peer m-0 block h-[58px] w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingInput"
    placeholder="name@example.com" />
  <label
    for="floatingInput"
    class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Email address</label
  >
</div>


*/
