import Movie from "../../components/movie";
import { getMovies } from "../apis";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="container grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
