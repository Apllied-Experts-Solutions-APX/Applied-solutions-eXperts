import type { Metadata } from "next";
import { digitalPage } from "@/data/digital";
import { Container, Section, Split } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PageCta } from "@/components/sections/PageCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Media, MediaPlaceholder } from "@/components/media/Media";
import { Stagger, Reveal } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: digitalPage.seo.title,
  description: digitalPage.seo.description,
};

export default function DigitalPage() {
  return (
    <>
      <PageHero
        tone="subtle"
        eyebrow={digitalPage.hero.eyebrow}
        title={digitalPage.hero.title}
        description={digitalPage.hero.description}
        actions={<Button href="/contact">Let&apos;s Talk</Button>}
      />

      <Section ariaLabelledBy={digitalPage.role.id}>
        <Container>
          <Split align="center">
            <div>
              <SectionIntro
                id={digitalPage.role.id}
                eyebrow={digitalPage.concept}
                title={digitalPage.role.title}
                lead={digitalPage.role.lead}
                className={styles.introFlush}
              />
              <Reveal delay={80}>
                <p className="text-muted">{digitalPage.role.body}</p>
              </Reveal>
            </div>
            <Reveal delay={100} variant="scale">
              <div className={styles.mediaColumn} aria-label="APX Digital media placeholders">
                {digitalPage.media.placeholders.map((slot) => (
                  <Media key={slot.label} aspect="3x2">
                    <MediaPlaceholder label={slot.label} />
                  </Media>
                ))}
              </div>
            </Reveal>
          </Split>
        </Container>
      </Section>

      <Section ariaLabelledBy={digitalPage.areas.id} tone="subtle">
        <Container>
          <SectionIntro id={digitalPage.areas.id} title={digitalPage.areas.title} />
          <Stagger as="ol" variant="left" className={styles.areaList}>
            {digitalPage.areas.items.map((item, index) => (
              <li key={item.title} className={styles.areaItem}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.areaTitle}>{item.title}</h3>
                  <p className="text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={digitalPage.future.id}>
        <Container narrow>
          <SectionIntro
            id={digitalPage.future.id}
            title={digitalPage.future.title}
            lead={digitalPage.future.note}
          />
        </Container>
      </Section>

      <PageCta title={digitalPage.cta.title} subtitle={digitalPage.cta.subtitle} />
    </>
  );
}
