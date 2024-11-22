import { Suspense } from "react";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import LoadingSpinner from "@/components/loading-spinner";
import { getMovie } from "../../../apis";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return (
    <div className="container">
      <TypographyH1 className="mb-6">{movie.title}</TypographyH1>
      <TypographyH2 className="mb-6">Information</TypographyH2>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <MovieInfo id={id} />
      </Suspense>
      <TypographyH2 className="mt-12 mb-6">Related Videos</TypographyH2>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
