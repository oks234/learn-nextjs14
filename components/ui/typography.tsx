import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ITypography {
  className?: string;
}
export function TypographyH1({
  children,
  className,
}: PropsWithChildren<ITypography>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyP({
  children,
  className,
}: PropsWithChildren<ITypography>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
