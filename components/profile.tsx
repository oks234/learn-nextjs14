"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function Profile({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imgRef.current.complete && setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative flex justify-center bg-background group ${
        isLoaded ? "is-loaded" : ""
      }`}
    >
      {!isLoaded && <Skeleton className="w-full h-auto aspect-poster" />}
      <img
        ref={imgRef}
        className="w-full h-auto absolute opacity-0 group-[.is-loaded]:static group-[.is-loaded]:opacity-100"
        src={src}
        alt={alt}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </div>
  );
}
