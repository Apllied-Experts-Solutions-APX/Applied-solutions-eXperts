import { siteConfig } from "@/config/site";
import { homeEcosystem, homeHero } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroMedia } from "@/components/home/HeroMedia";
import styles from "./Hero.module.css";

/**
 * Cinematic homepage hero — brand-first, video-backed introduction.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-heading" data-scroll-sentinel>
      <HeroMedia />
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.content}>
        <div className={styles.brandBlock}>
          <p className={`hero-step hero-step--brand ${styles.brandMark}`}>
            {siteConfig.abbreviation}
          </p>
          <p className={`text-caption hero-step hero-step--eyebrow ${styles.eyebrow}`}>
            {siteConfig.tagline}
          </p>
        </div>
        <h1 id="home-heading" className={`display hero-step hero-step--headline ${styles.headline}`}>
          {homeHero.headline}
        </h1>
        <p className={`text-lead hero-step hero-step--copy ${styles.supporting}`}>
          {homeHero.supporting}
        </p>
        <div className={`hero-step hero-step--actions ${styles.actions}`}>
          <Button href={homeHero.primaryCta.href} onDark>
            {homeHero.primaryCta.label}
          </Button>
          <Button href={homeHero.secondaryCta.href} variant="outline" onDark>
            {homeHero.secondaryCta.label}
          </Button>
        </div>
      </Container>
      <div className={styles.scrollCueWrap}>
        <a href={`#${homeEcosystem.id}`} className={`hero-step hero-step--cue ${styles.scrollCue}`}>
          <span className="visually-hidden">Scroll to explore</span>
          <span className={styles.scrollCueLine} aria-hidden="true" />
        </a>
      </div>
      <div className={styles.heroFade} aria-hidden="true" />
    </section>
  );
}
