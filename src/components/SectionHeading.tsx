import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-10 max-w-2xl text-center md:mb-14", className)}>
      {eyebrow && (
        <p className="divider-ornament mb-3 justify-center text-xs font-semibold uppercase tracking-[0.25em]">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-4xl font-semibold md:text-5xl", light ? "text-maroon-foreground" : "text-primary")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", light ? "text-maroon-foreground/80" : "text-muted-foreground")}>{subtitle}</p>
      )}
    </div>
  );
}
