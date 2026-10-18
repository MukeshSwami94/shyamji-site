import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const cta = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
  {
    variants: {
      variant: {
        whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-warm hover:brightness-110",
        primary: "bg-primary text-primary-foreground shadow-warm hover:brightness-125",
        saffron: "bg-saffron text-accent-foreground shadow-warm hover:brightness-105",
        outlineLight: "border border-gold/70 text-maroon-foreground hover:bg-maroon-foreground/10",
        outline: "border border-primary/40 text-primary hover:bg-primary/5",
      },
      size: { md: "", lg: "min-h-12 px-7 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof cta> & { external?: boolean };

export function CtaButton({ variant, size, className, external = true, ...props }: Props) {
  return (
    <a
      className={cn(cta({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}
