// import { ExternalLink } from "lucide-react";
import { getCredits, getMovie } from "@/app/apis";
import ExternalLink from "@/components/external-link";
import Profile from "@/components/profile";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Search } from "lucide-react";

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
  const movie = await getMovie(id);

  return (
    <div className="container">
      <TypographyH1 className="mb-6 text-center">{movie.title}</TypographyH1>
      <div className="grid justify-center grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {credits.map((credit) => (
          <Card key={credit.id} className="overflow-hidden">
            <Profile src={credit.profile_path} alt={credit.name} />
            <div>
              <CardHeader>
                <CardTitle>{credit.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>⭐️ {credit.popularity}</TypographyP>
              </CardContent>
              <CardFooter>
                <ExternalLink
                  href={`https://www.google.com/search?q=${credit.name}`}
                  noIcon={true}
                >
                  <Search />
                  Google
                </ExternalLink>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
