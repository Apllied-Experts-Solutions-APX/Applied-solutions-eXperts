import { cx } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  /** Use logo asset intended for dark / inverse surfaces */
  onDark?: boolean;
  /** Header-scale mark without a duplicate wordmark */
  compact?: boolean;
};

/**
 * Official APX logo foundation.
 * Uses CSS logo slots (`--logo-mark` / `--logo-mark-on-dark`) when assets
 * are present in /public/logos; wordmark remains the accessible label.
 */
export function Logo({ className, onDark = false, compact = false }: LogoProps) {
  return (
    <span
      className={cx(
        styles.logo,
        onDark && styles.onDark,
        compact && styles.compact,
        className,
      )}
      role="img"
      aria-label={siteConfig.abbreviation}
    >
      <span className={styles.mark} aria-hidden="true" />
      <span className={styles.wordmark} aria-hidden="true">
        {siteConfig.abbreviation}
      </span>
    </span>
  );
}
