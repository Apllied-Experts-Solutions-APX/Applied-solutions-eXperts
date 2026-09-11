import type { Metadata } from "next";
import { solutionsPage } from "@/data/solutions";
import { Container, Section } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PageCta } from "@/components/sections/PageCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Stagger } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: solutionsPage.seo.title,
  description: solutionsPage.seo.description,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        tone="inverse"
        eyebrow={solutionsPage.hero.eyebrow}
        title={solutionsPage.hero.title}
        description={solutionsPage.hero.description}
        actions={
          <Button href="/contact" onDark>
            Let&apos;s Talk
          </Button>
        }
      />

      <Section ariaLabelledBy={solutionsPage.groups.id}>
        <Container>
          <SectionIntro
            id={solutionsPage.groups.id}
            eyebrow={solutionsPage.concept}
            title={solutionsPage.groups.title}
            lead={solutionsPage.groups.lead}
          />
          <Stagger as="ul" className={styles.groups}>
            {solutionsPage.groups.items.map((item) => (
              <li key={item.title} className={styles.group}>
                <h3 className={styles.groupTitle}>{item.title}</h3>
                <p className={`text-caption ${styles.detail}`}>{item.detail}</p>
                <p className="text-muted">{item.body}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <PageCta
        title={solutionsPage.cta.title}
        subtitle={solutionsPage.cta.subtitle}
      />
    </>
  );
}
