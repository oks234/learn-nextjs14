import { getCredits, getMovie } from "@/app/apis";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: `Credits - ${movie.title}`,
  };
}

export default async function CreditsPage({ params }: IParams) {
  const { id } = await params;
  const credits = await getCredits(id);

  return (
    <div className="container flex grid-cols-1 flex-col gap-4">
      {credits.map((credit) => (
        <Card key={credit.id} className="overflow-hidden">
          <div className="flex justify-center bg-background">

          <img src={credit.profile_path} alt={credit.name} />
          </div>
          <div>
            <CardHeader>
              <CardTitle>{credit.name}</CardTitle>
            </CardHeader>
            <CardContent>{credit.gender === 1 && "♂"}{credit.gender === 2 && "♀"}</CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
