import { cx } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Container.module.css";

type ContainerProps = {
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
  prose?: boolean;
};

export function Container({
  as: Tag = "div",
  children,
  className,
  narrow = false,
  wide = false,
  prose = false,
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        "container",
        narrow && "container--narrow",
        wide && "container--wide",
        prose && "container--prose",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  id?: string;
  /** Visual surface variant */
  tone?: "default" | "subtle" | "inverse";
  /** Vertical rhythm */
  spacing?: "default" | "tight" | "flush";
};

export function Section({
  children,
  className,
  ariaLabelledBy,
  id,
  tone = "default",
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "section",
        spacing === "tight" && "section--tight",
        spacing === "flush" && "section--flush",
        tone === "subtle" && "section--subtle",
        tone === "inverse" && "section--inverse",
        styles.section,
        className,
      )}
      aria-labelledby={ariaLabelledBy}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}

type StackProps = {
  as?: "div" | "ul" | "ol" | "nav" | "header" | "footer";
  children: React.ReactNode;
  className?: string;
  gap?: "default" | "tight" | "loose" | "xs" | "sm" | "md" | "lg";
};

export function Stack({
  as: Tag = "div",
  children,
  className,
  gap = "default",
}: StackProps) {
  const gapClass =
    gap === "default"
      ? "stack"
      : gap === "tight"
        ? "stack stack--tight"
        : gap === "loose"
          ? "stack stack--loose"
          : `stack stack--${gap}`;

  return <Tag className={cx(gapClass, className)}>{children}</Tag>;
}

type GridProps = {
  as?: "div" | "ul" | "ol";
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: "default" | "tight" | "loose";
};

export function Grid({
  as: Tag = "div",
  children,
  className,
  columns = 1,
  gap = "default",
}: GridProps) {
  return (
    <Tag
      className={cx(
        "grid",
        columns === 2 && "grid--2",
        columns === 3 && "grid--3",
        columns === 4 && "grid--4",
        gap === "tight" && "grid--tight",
        gap === "loose" && "grid--loose",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type SplitProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "asymmetric" | "asymmetric-reverse";
  align?: "start" | "center";
};

export function Split({
  children,
  className,
  variant = "default",
  align = "start",
}: SplitProps) {
  return (
    <div
      className={cx(
        "split",
        variant === "asymmetric" && "split--asymmetric",
        variant === "asymmetric-reverse" && "split--asymmetric-reverse",
        align === "center" && "split--align-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
