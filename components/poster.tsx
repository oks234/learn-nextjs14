import { DetailedHTMLProps, HTMLAttributes } from "react";
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
        "overflow-hidden rounded-xl m-4 mb-0 flex items-center justify-center",
        className
      )}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
