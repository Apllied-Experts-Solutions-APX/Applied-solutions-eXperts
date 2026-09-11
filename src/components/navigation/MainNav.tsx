"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cx } from "@/lib/utils";
import styles from "./MainNav.module.css";

/**
 * Primary navigation with desktop bar and accessible mobile drawer.
 */
export function MainNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="visually-hidden">
          {open ? "Close menu" : "Open menu"}
        </span>
        <span className={cx(styles.toggleBars, open && styles.toggleBarsOpen)} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={cx(styles.backdrop, open && styles.backdropOpen)}
        aria-hidden="true"
        onClick={close}
      />

      <nav
        id={panelId}
        className={cx(styles.nav, open && styles.navOpen)}
        aria-label="Primary"
      >
        <ul className={styles.list}>
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cx(
                  "text-nav",
                  styles.link,
                  isCurrent(pathname, item.href) && styles.linkCurrent,
                )}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={close}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={siteConfig.primaryCta.href}
          className={styles.mobileCta}
          onClick={close}
        >
          <span className="text-button">{siteConfig.primaryCta.label}</span>
        </Link>
      </nav>
    </>
  );
}

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
