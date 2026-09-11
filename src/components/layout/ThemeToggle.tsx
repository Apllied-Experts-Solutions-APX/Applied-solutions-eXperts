"use client";

import { applyTheme, resolveTheme } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

/**
 * Compact light/dark control — uses the existing data-theme system.
 */
export function ThemeToggle() {
  function onToggle() {
    const next = resolveTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
}

function MoonIcon() {
  return (
    <svg
      className={`${styles.icon} ${styles.moon}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      className={`${styles.icon} ${styles.sun}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M17.99 17.99l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M17.99 6.01l1.06-1.06" />
    </svg>
  );
}
