import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-950 text-white hover:bg-blue-900",
        outline:
          "border border-white/80 bg-white/[.04] text-white hover:bg-white/[.14]",
        ghost: "text-slate-700 hover:bg-slate-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    href: LinkProps["href"];
  };

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <Link className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}
