import type { Metadata } from "next";
import { aboutPage } from "@/data/about";
import { Container, Section, Split } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PageCta } from "@/components/sections/PageCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardTitle } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/TextLink";
import { Stagger } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="inverse"
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        actions={
          <Button href="/contact" onDark>
            Let&apos;s Talk
          </Button>
        }
      />

      <Section ariaLabelledBy={aboutPage.who.id}>
        <Container>
          <Split align="center">
            <SectionIntro
              id={aboutPage.who.id}
              title={aboutPage.who.title}
              lead={aboutPage.who.lead}
              className={styles.introFlush}
            />
            <p className={styles.statement}>{aboutPage.who.body}</p>
          </Split>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.what.id} tone="subtle">
        <Container>
          <SectionIntro
            id={aboutPage.what.id}
            title={aboutPage.what.title}
            lead={aboutPage.what.lead}
          />
          <Stagger as="ul" className={styles.verbGrid}>
            {aboutPage.what.items.map((item) => (
              <li key={item.title} className={styles.verbItem}>
                <h3 className={styles.verbTitle}>{item.title}</h3>
                <p className="text-muted">{item.body}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.ecosystem.id}>
        <Container>
          <SectionIntro
            id={aboutPage.ecosystem.id}
            title={aboutPage.ecosystem.title}
            lead={aboutPage.ecosystem.lead}
          />
          <Stagger as="ul" className={styles.ecosystem}>
            {aboutPage.ecosystem.items.map((item) => (
              <li key={item.id}>
                <Card className="motion-lift">
                  <CardBody>
                    <p className={`text-caption ${styles.focus}`}>{item.focus}</p>
                    <CardTitle>{item.name}</CardTitle>
                    <p className="text-muted">{item.description}</p>
                    <TextLink href={item.href} variant="forward">
                      Explore {item.name}
                    </TextLink>
                  </CardBody>
                </Card>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.audiences.id} tone="subtle">
        <Container>
          <SectionIntro
            id={aboutPage.audiences.id}
            title={aboutPage.audiences.title}
            lead={aboutPage.audiences.lead}
          />
          <Stagger as="ul" className={styles.audienceGrid}>
            {aboutPage.audiences.items.map((item) => (
              <li key={item.title} className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>{item.title}</h3>
                <p className="text-small text-muted">{item.detail}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.approach.id}>
        <Container narrow>
          <SectionIntro
            id={aboutPage.approach.id}
            title={aboutPage.approach.title}
            lead={aboutPage.approach.lead}
          />
          <p className="text-muted">{aboutPage.approach.body}</p>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.vision.id} tone="subtle">
        <Container className={styles.vision}>
          <SectionIntro
            id={aboutPage.vision.id}
            title={aboutPage.vision.title}
            lead={aboutPage.vision.lead}
          />
          <p className={styles.tagline}>{aboutPage.vision.body}</p>
        </Container>
      </Section>

      <Section ariaLabelledBy={aboutPage.why.id}>
        <Container>
          <SectionIntro id={aboutPage.why.id} title={aboutPage.why.title} />
          <Stagger as="ul" className={styles.whyGrid}>
            {aboutPage.why.items.map((item) => (
              <li key={item.title} className={styles.whyItem}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <PageCta
        title="Have a problem worth solving?"
        subtitle="Have an idea worth building?"
      />
    </>
  );
}
