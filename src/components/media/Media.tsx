import Image from "next/image";
import { assetPath } from "@/lib/assets";
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

/** Slot data accepted by MediaPlaceholder (label-only remains a valid empty slot). */
export type MediaSlotInput = {
  label: string;
  /** Single media path — video vs image is detected from the extension. */
  src?: string;
  /** Multiple images render as a lightweight in-frame gallery. */
  images?: readonly string[];
};

type MediaPlaceholderProps = MediaSlotInput & {
  className?: string;
};

const VIDEO_EXT = /\.(mp4|webm|ogg|mov)(\?|#|$)/i;
const IMAGE_EXT = /\.(jpe?g|png|gif|webp|avif|svg)(\?|#|$)/i;

function isVideoSrc(src: string): boolean {
  return VIDEO_EXT.test(src);
}

function isImageSrc(src: string): boolean {
  return IMAGE_EXT.test(src);
}

function galleryCountClass(count: number): string | undefined {
  if (count <= 1) return styles.galleryCount1;
  if (count === 2) return styles.galleryCount2;
  if (count === 3) return styles.galleryCount3;
  return styles.galleryCount4;
}

function SlotImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 50vw, 33vw"
      className={styles.image}
    />
  );
}

/**
 * Media slot: video, image, image gallery, or empty placeholder.
 * Do not replace empty slots with stock imagery.
 */
export function MediaPlaceholder({
  label,
  src,
  images,
  className,
}: MediaPlaceholderProps) {
  const gallery = images?.filter(Boolean) ?? [];

  if (gallery.length > 1) {
    return (
      <div
        className={cx(styles.gallery, galleryCountClass(gallery.length), className)}
        role="group"
        aria-label={label}
      >
        {gallery.map((imageSrc, index) => (
          <div key={`${imageSrc}-${index}`} className={styles.galleryItem}>
            <SlotImage src={imageSrc} alt={`${label} ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <div className={cx(styles.asset, className)}>
        <SlotImage src={gallery[0]} alt={label} />
      </div>
    );
  }

  if (src) {
    if (isVideoSrc(src)) {
      return (
        <video
          className={cx(styles.video, className)}
          src={assetPath(src)}
          aria-label={label}
          controls
          autoPlay
          muted
          playsInline
          loop
        />
      );
    }

    if (isImageSrc(src) || src.startsWith("/")) {
      return (
        <div className={cx(styles.asset, className)}>
          <SlotImage src={src} alt={label} />
        </div>
      );
    }
  }

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
