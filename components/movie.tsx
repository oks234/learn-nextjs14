"use client";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  return (
    <Card key={id}>
      <div className="overflow-hidden rounded-t-xl m-4 mb-0">
        <img src={poster_path} alt={title} />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="justify-end">
        <Link
          className={`${buttonVariants({ variant: "default" })}`}
          href={`/movies/${id}`}
          prefetch
        >
          View Detail 
          <SquareArrowOutUpRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
