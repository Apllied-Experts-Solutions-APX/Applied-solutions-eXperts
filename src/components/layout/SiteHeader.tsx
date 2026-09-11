import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/navigation/MainNav";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/media/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import styles from "./SiteHeader.module.css";

/**
 * Site header — balanced primary nav + distinct Let's Talk CTA.
 */
export function SiteHeader() {
  return (
    <header className={styles.header}>
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
