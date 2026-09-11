import { cx } from "@/lib/utils";
import styles from "./Heading.module.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "h1" | "h2" | "h3";

type HeadingProps = {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
};

const sizeClass: Record<HeadingSize, string> = {
  display: "display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

/**
 * Semantic heading with optional visual size decoupling.
 */
export function Heading({
  as = "h2",
  size,
  children,
  className,
  id,
  muted = false,
}: HeadingProps) {
  const Tag = as;
  const visual = size ?? (as === "h4" ? "h3" : as);

  return (
    <Tag
      id={id}
      className={cx(sizeClass[visual], muted && styles.muted, className)}
    >
      {children}
    </Tag>
  );
}
