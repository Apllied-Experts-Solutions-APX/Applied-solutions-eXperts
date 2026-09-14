"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

export type MotionVariant = "up" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
};

const VARIANT_CLASS: Record<MotionVariant, string | undefined> = {
  up: undefined,
  left: "reveal--left",
  right: "reveal--right",
  scale: "reveal--scale",
  fade: "reveal--fade",
};

function useOnceInView(rootMargin = "0px 0px -8% 0px", threshold = 0.1) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealNow = () => setVisible(true);

    if (media.matches) {
      revealNow();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealNow();
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    const onMotionPreference = () => {
      if (media.matches) {
        revealNow();
        observer.disconnect();
      }
    };
    media.addEventListener("change", onMotionPreference);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotionPreference);
    };
  }, [node, rootMargin, threshold]);

  return { setNode, visible };
}

/**
 * Intersection-based entrance — respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const { setNode, visible } = useOnceInView();

  return (
    <div
      ref={setNode}
      className={cx("reveal", VARIANT_CLASS[variant], visible && "reveal-in", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  variant?: MotionVariant;
};

export function Stagger({
  children,
  className,
  as: Tag = "div",
  variant = "up",
}: StaggerProps) {
  const { setNode, visible } = useOnceInView("0px 0px -5% 0px", 0.06);

  return (
    <Tag
      ref={setNode}
      className={cx(
        "stagger",
        variant !== "up" && `stagger--${variant}`,
        visible && "stagger-in",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
