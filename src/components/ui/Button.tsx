import Link from "next/link";
import { cx } from "@/lib/utils";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "md" | "sm";

type SharedProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  /** Contrast styles for navy / video overlays */
  onDark?: boolean;
};

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClassName({
  variant = "primary",
  size = "md",
  className,
  disabled,
  onDark,
}: Pick<
  SharedProps,
  "variant" | "size" | "className" | "disabled" | "onDark"
>) {
  return cx(
    "text-button",
    styles.button,
    styles[variant],
    size === "sm" && styles.sm,
    onDark && styles.onDark,
    disabled && styles.disabled,
    className,
  );
}

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

/**
 * Shared button styles for native buttons and Next.js links.
 */
export function Button(props: ButtonProps) {
  if (isLinkProps(props)) {
    const {
      href,
      children,
      variant,
      size,
      className,
      disabled,
      onDark,
      onClick,
    } = props;
    const classes = buttonClassName({
      variant,
      size,
      className,
      disabled,
      onDark,
    });

    if (disabled) {
      return (
        <span className={classes} aria-disabled="true" role="link">
          {children}
        </span>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const {
    children,
    variant,
    size,
    className,
    disabled,
    onDark,
    type = "button",
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={buttonClassName({
        variant,
        size,
        className,
        disabled,
        onDark,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

/** Phase 01 compatibility — maps legacy `secondary` to outline styles. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const mapped: ButtonVariant =
    variant === "secondary" ? "outline" : "primary";

  return (
    <Button href={href} variant={mapped} className={className}>
      {children}
    </Button>
  );
}
