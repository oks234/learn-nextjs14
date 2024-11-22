import { getMovie } from "../app/apis";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Poster from "@/components/poster";
import { TypographyH1, TypographyP } from "./ui/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="flex flex-col gap-4 md:flex-row max-w-4xl mx-auto items-start">
      <Poster src={movie.poster_path} alt={movie.title} />
      <Card>
        <CardHeader>
          <TypographyH1>{movie.title}</TypographyH1>
        </CardHeader>
        <CardContent>
          <TypographyP>⭐️ {movie.vote_average}</TypographyP>
          <TypographyP>⏰ {movie.release_date}</TypographyP>
          <TypographyP>{movie.overview}</TypographyP>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline">
            <a href={movie.homepage} target={"_blank"}>
              Homepage <ExternalLink />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
