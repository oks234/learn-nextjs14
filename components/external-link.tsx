import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IExternalLinkProps {
  href: string;
  noIcon?: boolean;
}

export default function ExternalLink({
  children,
  href,
  noIcon,
}: React.PropsWithChildren<IExternalLinkProps>) {
  return (
    <Button asChild variant="outline">
      <a href={href} target={"_blank"}>
        {children}
        {!noIcon && <ExternalLinkIcon />}
      </a>
    </Button>
  );
}
