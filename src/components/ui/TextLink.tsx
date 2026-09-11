import Link from "next/link";
import { cx } from "@/lib/utils";

type TextLinkVariant = "default" | "quiet" | "forward";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: TextLinkVariant;
  external?: boolean;
};

const variantClass: Record<TextLinkVariant, string> = {
  default: "text-link",
  quiet: "link-quiet",
  forward: "link-forward",
};

/**
 * Styled text link for body copy and directional CTAs.
 */
export function TextLink({
  href,
  children,
  className,
  variant = "default",
  external = false,
}: TextLinkProps) {
  const classes = cx(variantClass[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
