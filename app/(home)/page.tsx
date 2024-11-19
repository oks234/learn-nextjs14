import Movie from "../../components/movie";
import { getMovies } from "../apis";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="">
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
