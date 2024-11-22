import { getVideos } from "../app/apis";
import { Card } from "./ui/card";

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <iframe src={`https://www.youtube.com/embed/${video.key}`} />
        </Card>
      ))}
    </div>
  );
}
