import { getVideos } from "../app/apis";

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
        />
      ))}
    </div>
  );
}
