import { cx } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  tone?: "default" | "subtle" | "inverse";
  children?: React.ReactNode;
};

/**
 * Strong inner-page hero with tone variants for page rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  tone = "default",
  children,
}: PageHeroProps) {
  const headingId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;

  return (
    <header
      className={cx(
        styles.hero,
        tone === "subtle" && styles.subtle,
        tone === "inverse" && styles.inverse,
      )}
      aria-labelledby={headingId}
    >
      <Container className={styles.inner}>
        <Reveal className={styles.copy}>
          {eyebrow ? (
            <p className={`text-caption ${styles.eyebrow}`}>{eyebrow}</p>
          ) : null}
          <span className="accent-rule" aria-hidden="true" />
          <Heading as="h1" id={headingId} className={styles.title}>
            {title}
          </Heading>
          <p className={`text-lead ${styles.description}`}>{description}</p>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </Reveal>
        {children ? (
          <Reveal delay={120} className={styles.aside}>
            {children}
          </Reveal>
        ) : null}
      </Container>
    </header>
  );
}
