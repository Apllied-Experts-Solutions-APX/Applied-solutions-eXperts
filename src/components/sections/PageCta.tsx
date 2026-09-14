import { Container, Section } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Stagger } from "@/components/motion/Reveal";
import styles from "./PageCta.module.css";

type PageCtaProps = {
  title: string;
  subtitle?: string;
  href?: string;
  label?: string;
};

export function PageCta({
  title,
  subtitle,
  href = "/contact",
  label = "Let's Talk",
}: PageCtaProps) {
  return (
    <Section ariaLabelledBy="page-cta-heading" tone="inverse" className={styles.cta}>
      <Container narrow>
        <Stagger className={styles.inner}>
          <span className={`accent-rule ${styles.rule}`} aria-hidden="true" />
          <Heading as="h2" id="page-cta-heading" className={styles.title}>
            {title}
          </Heading>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          <Button href={href} onDark>
            {label}
          </Button>
        </Stagger>
      </Container>
    </Section>
  );
}
