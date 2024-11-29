import { Github } from "lucide-react";
import ExternalLink from "@/components/external-link";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import Skills from "@/components/skills";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="container flex flex-col gap-8">
      <TypographyH1>About</TypographyH1>
      <div className="flex flex-col">
        <TypographyH2>Me</TypographyH2>
        <TypographyP>Ken Oh</TypographyP>
        <TypographyP>개발자</TypographyP>
        <TypographyP>대한민국, 파주시</TypographyP>
      </div>
      <div className="flex flex-col">
        <TypographyH2>Skills & Experiences</TypographyH2>
        <TypographyP className="flex flex-wrap gap-2">
          <Skills />
        </TypographyP>
      </div>
      <div className="flex flex-col">
        <TypographyH2>Link</TypographyH2>
        <TypographyP>
          GitHub :
          <br />
          <ExternalLink
            href={"https://github.com/oks234/learn-nextjs14"}
            noIcon={true}
          >
            <Github /> oks234/learn-nextjs14
          </ExternalLink>
        </TypographyP>
        <TypographyP>
          참고 강의 :
          <br />
          <ExternalLink href={"https://nomadcoders.co/nextjs-for-beginners"}>
            NextJS 14 시작하기 – 노마드 코더 Nomad Coders
          </ExternalLink>
        </TypographyP>
      </div>
    </div>
  );
}
