import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-700 bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-blue-700/10 hover:from-blue-800 hover:to-indigo-700",
        outline:
          "border border-blue-200 bg-white bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:border-blue-300 hover:from-blue-50 hover:to-indigo-100",
        ghost:
          "bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 hover:from-blue-50 hover:to-blue-100",
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
