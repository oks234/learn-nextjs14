"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Poster from "./poster";
interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  return (
    <Link href={`/movies/${id}`} prefetch className="group">
      <Card
        key={id}
        className="cursor-pointer transition-transform group-hover:scale-[0.98] group-active:scale-[0.96]"
      >
        <Poster src={poster_path} alt={title} className="m-4 mb-0" />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
