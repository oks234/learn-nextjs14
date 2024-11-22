import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils";

interface IPosterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  alt: string;
}

export default function Poster({ src, alt, ...divProps }: IPosterProps) {
  const { className, ...restDivProps } = divProps;
  return (
    <div
      {...restDivProps}
      className={cn(
        "relative overflow-hidden rounded-xl flex items-center justify-center aspect-poster",
        className
      )}
    >
      <Skeleton className="absolute top-0 left-0 w-full aspect-poster" />
      <img className="w-full" src={src} alt={alt} />
    </div>
  );
}
