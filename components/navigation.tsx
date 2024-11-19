"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="p-6 flex items-center justify-center sticky">
      <ul className="flex rounded-full bg-white/75">
        <li>
          <Link className={`${buttonVariants({ variant: "link" })}`} href="/">
            Home {path === "/" && "🚗"}
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="/about-us"
          >
            About Us {path === "/about-us" && "🚗"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
