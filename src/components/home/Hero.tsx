import { siteConfig } from "@/config/site";
import { homeHero } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroMedia } from "@/components/home/HeroMedia";
import styles from "./Hero.module.css";

/**
 * Cinematic homepage hero — brand-first, video-backed introduction.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <HeroMedia />
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.content}>
        <p className={styles.brandMark}>{siteConfig.abbreviation}</p>
        <p className={`text-caption ${styles.eyebrow}`}>{siteConfig.tagline}</p>
        <h1 id="home-heading" className={`display ${styles.headline}`}>
          {homeHero.headline}
        </h1>
        <p className={`text-lead ${styles.supporting}`}>{homeHero.supporting}</p>
        <div className={styles.actions}>
          <Button href={homeHero.primaryCta.href} onDark>
            {homeHero.primaryCta.label}
          </Button>
          <Button href={homeHero.secondaryCta.href} variant="outline" onDark>
            {homeHero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
