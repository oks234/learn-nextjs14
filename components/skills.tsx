import { SKILLS } from "@/app/constants";
import { badgeVariants } from "./ui/badge";
import { CSSProperties } from "react";

export default function Skills() {
  return (
    <>
      {SKILLS.map(({ skill, color, level }) => (
        <Skill
          key={skill}
          skill={skill}
          color={color}
          level={level || "default"}
        />
      ))}
    </>
  );
}

function Skill({
  skill,
  color,
  level,
}: {
  skill: string;
  color: { default: string; hover: string };
  level: string;
}) {
  const styles: CSSProperties = {};
  color.default && (styles.backgroundColor = color.default);
  level === "low" && (styles.opacity = 0.6);

  return (
    <span
      key={skill}
      className={badgeVariants({ variant: "default" })}
      style={styles}
    >
      {skill}
    </span>
  );
}
