import type { Metadata } from "next";
import { labsPage } from "@/data/labs";
import { Container, Grid, Section } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PageCta } from "@/components/sections/PageCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Media, MediaPlaceholder } from "@/components/media/Media";
import { Stagger } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: labsPage.seo.title,
  description: labsPage.seo.description,
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        tone="default"
        eyebrow={labsPage.hero.eyebrow}
        title={labsPage.hero.title}
        description={labsPage.hero.description}
        actions={<Button href="/contact">Let&apos;s Talk</Button>}
      >
        <div className={styles.heroMedia}>
          <Media aspect="4x3">
            <MediaPlaceholder label={labsPage.media.placeholders[0].label} />
          </Media>
        </div>
      </PageHero>

      <Section ariaLabelledBy={labsPage.areas.id} tone="subtle">
        <Container>
          <SectionIntro
            id={labsPage.areas.id}
            eyebrow={labsPage.concept}
            title={labsPage.areas.title}
            lead={labsPage.areas.lead}
          />
          <Stagger as="ul" className={styles.areaGrid}>
            {labsPage.areas.items.map((item) => (
              <li key={item.title} className={styles.areaItem}>
                <h3 className={styles.areaTitle}>{item.title}</h3>
                <p className="text-muted">{item.body}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={labsPage.media.id}>
        <Container>
          <SectionIntro
            id={labsPage.media.id}
            title={labsPage.media.title}
            lead={labsPage.media.lead}
          />
          <Grid as="ul" columns={2} className={styles.mediaGrid}>
            {labsPage.media.placeholders.map((slot) => (
              <li key={slot.label}>
                <Media aspect="16x9">
                  <MediaPlaceholder label={slot.label} />
                </Media>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <PageCta title={labsPage.cta.title} subtitle={labsPage.cta.subtitle} />
    </>
  );
}
