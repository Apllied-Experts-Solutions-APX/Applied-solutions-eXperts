"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "@/lib/utils";
import { homeHero } from "@/data/homepage";
import styles from "./Hero.module.css";

const TRANSITION_MS = 900;

/**
 * Dual hero videos with a simple right-to-left curtain swap.
 * Reduced motion: static navy atmosphere (no autoplay).
 */
export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [active, setActive] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const videosRef = useRef<Array<HTMLVideoElement | null>>([]);
  const swapTimer = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    return () => {
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
    };
  }, []);

  const playIndex = useCallback((index: number) => {
    const video = videosRef.current[index];
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {
      /* Autoplay can be blocked; overlay copy remains readable. */
    });
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      videosRef.current.forEach((video) => video?.pause());
      return;
    }
    playIndex(active);
  }, [active, reduceMotion, playIndex]);

  const handleEnded = (index: number) => {
    if (reduceMotion || incoming !== null) return;
    if (homeHero.videos.length < 2) {
      const only = videosRef.current[index];
      if (only) {
        only.currentTime = 0;
        playIndex(index);
      }
      return;
    }

    const next = (index + 1) % homeHero.videos.length;
    const nextVideo = videosRef.current[next];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      playIndex(next);
    }
    setIncoming(next);
    swapTimer.current = window.setTimeout(() => {
      setActive(next);
      setIncoming(null);
    }, TRANSITION_MS);
  };

  if (reduceMotion) {
    return <div className={styles.staticBackdrop} aria-hidden="true" />;
  }

  return (
    <div className={styles.media} aria-hidden="true">
      {homeHero.videos.map((src, index) => (
        <video
          key={src}
          ref={(node) => {
            videosRef.current[index] = node;
          }}
          className={cx(
            styles.video,
            index === active && styles.videoActive,
            index === incoming && styles.videoIncoming,
          )}
          src={src}
          muted
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          onEnded={() => handleEnded(index)}
        />
      ))}
    </div>
  );
}
