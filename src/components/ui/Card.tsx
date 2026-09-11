import Link from "next/link";
import { cx } from "@/lib/utils";
import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  /** Soft lift on hover when interactive */
  interactive?: boolean;
};

/**
 * Restrained content card — use sparingly; not a default section pattern.
 */
export function Card({
  children,
  className,
  href,
  interactive = Boolean(href),
}: CardProps) {
  const classes = cx(
    styles.card,
    interactive && styles.interactive,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <article className={classes}>{children}</article>;
}

type CardMediaProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardMedia({ children, className }: CardMediaProps) {
  return <div className={cx(styles.media, className)}>{children}</div>;
}

type CardIconProps = {
  children: React.ReactNode;
  className?: string;
  /** Accessible name when icon is decorative SVG without title */
  label?: string;
};

export function CardIcon({ children, className, label }: CardIconProps) {
  return (
    <div
      className={cx(styles.icon, className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {children}
    </div>
  );
}

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cx(styles.body, className)}>{children}</div>;
}

type CardTitleProps = {
  as?: "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
};

export function CardTitle({
  as: Tag = "h3",
  children,
  className,
}: CardTitleProps) {
  return <Tag className={cx(styles.title, className)}>{children}</Tag>;
}
