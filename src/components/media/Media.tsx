import { cx } from "@/lib/utils";
import styles from "./Media.module.css";

type AspectRatio = "16x9" | "4x3" | "3x2" | "1x1" | "21x9";

type MediaProps = {
  children: React.ReactNode;
  className?: string;
  aspect?: AspectRatio;
  overlay?: "none" | "default" | "soft" | "strong" | "gradient";
  flush?: boolean;
};

const aspectClass: Record<AspectRatio, string> = {
  "16x9": "media__frame--16x9",
  "4x3": "media__frame--4x3",
  "3x2": "media__frame--3x2",
  "1x1": "media__frame--1x1",
  "21x9": "media__frame--21x9",
};

const overlayClass = {
  none: undefined,
  default: "media__overlay",
  soft: "media__overlay media__overlay--soft",
  strong: "media__overlay media__overlay--strong",
  gradient: "media__overlay media__overlay--gradient",
} as const;

/**
 * Responsive media frame with optional overlay for future APX imagery/video.
 */
export function Media({
  children,
  className,
  aspect = "16x9",
  overlay = "none",
  flush = false,
}: MediaProps) {
  return (
    <div className={cx("media", flush && "media--flush", className)}>
      <div className={cx("media__frame", aspectClass[aspect], styles.frame)}>
        {children}
        {overlay !== "none" ? (
          <div className={overlayClass[overlay]} aria-hidden="true" />
        ) : null}
      </div>
    </div>
  );
}

type VideoEmbedProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export function VideoEmbed({
  children,
  className,
  label = "Video",
}: VideoEmbedProps) {
  return (
    <div className={cx("video-embed", className)} role="group" aria-label={label}>
      {children}
    </div>
  );
}

type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Intentional empty media slot for future APX photos/videos.
 * Do not replace with stock imagery.
 */
export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cx(styles.placeholder, className)}
      role="img"
      aria-label={`${label} (coming soon)`}
    >
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}
