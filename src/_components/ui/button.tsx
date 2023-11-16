"use client";

import * as React from "react";
import { cn } from "../../utils/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md transition-colors  disabled:opacity-50  dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-bright-yellow/60 dark:data-[state=open]:bg-white uppercase border border-transparent ",
  {
    variants: {
      variant: {
        default:
          "text-white hover:bg-white bg-bright-yellow hover:text-bright-yellow shadow-inner border",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600 border",
        outline:
          "bg-transparent border hover:bg-bright-yellow/50 border-white",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-gray-700 dark:text-slate-100 border",
        ghost:
          "bg-transparent hover:bg-gray-700 dark:text-bright-yellow dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent hover:border",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        xs: "h-6 px-3 rounded-md text-xs",
        sm: "h-9 px-3 rounded-md text-sm",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, href, disabled, ...props }, ref) => {
    if (!disabled && href) {
      return (
        <a
          className={cn(buttonVariants({ variant, size, className }))}
          href={href}
          target={props.external ? "_blank" : ""}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
