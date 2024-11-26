import { getMovie } from "../app/apis";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Poster from "@/components/poster";
import { TypographyP } from "./ui/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="flex flex-col gap-4 md:flex-row max-w-4xl mx-auto items-start">
      <Poster src={movie.poster_path} alt={movie.title} />
      <Card>
        <CardHeader>
          <CardTitle>{movie.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <TypographyP>⭐️ {movie.vote_average}</TypographyP>
          <TypographyP>⏰ {movie.release_date}</TypographyP>
          <TypographyP>{movie.overview}</TypographyP>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 flex-wrap">
            <Button asChild variant="outline">
              <a href={movie.homepage} target={"_blank"}>
                Homepage <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/movies/${id}/credits`}>
                Credits <SquareArrowOutUpRight />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
