"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/navigation/MainNav";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/media/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cx } from "@/lib/utils";
import styles from "./SiteHeader.module.css";

/**
 * Site header — balanced primary nav + distinct Let's Talk CTA.
 * Gains a denser surface after the user scrolls past the hero.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Logo compact />
          <span className={`text-small ${styles.name}`}>{siteConfig.name}</span>
        </Link>
        <MainNav />
        <div className={styles.tools}>
          <ThemeToggle />
          <Link href={siteConfig.primaryCta.href} className={styles.cta}>
            <span className="text-button">{siteConfig.primaryCta.label}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
