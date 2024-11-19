import { getMovie } from "../app/apis";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <img src={movie.poster_path} />
      <div>
        <h1>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
