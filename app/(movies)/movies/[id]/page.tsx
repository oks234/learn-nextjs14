import { Suspense } from "react";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import LoadingSpinner from "@/components/loading-spinner";
import { getMovie } from "../../../apis";

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
  return (
    <div className="container">
      <Suspense
        fallback={
          <div className="p-8 flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={
          <div className="p-8 flex justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
