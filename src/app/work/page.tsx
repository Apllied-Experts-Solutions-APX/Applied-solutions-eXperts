import type { Metadata } from "next";
import { workPage } from "@/data/work";
import { Container, Section } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PageCta } from "@/components/sections/PageCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Media, MediaPlaceholder } from "@/components/media/Media";
import { Stagger } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: workPage.seo.title,
  description: workPage.seo.description,
};

export default function WorkPage() {
  const hasProjects = workPage.projects.length > 0;

  return (
    <>
      <PageHero
        tone="inverse"
        eyebrow={workPage.hero.eyebrow}
        title={workPage.hero.title}
        description={workPage.hero.description}
        actions={
          <Button href="/contact" onDark>
            Let&apos;s Talk
          </Button>
        }
      />

      <Section ariaLabelledBy={workPage.path.id}>
        <Container>
          <SectionIntro
            id={workPage.path.id}
            title={workPage.path.title}
            lead={workPage.path.lead}
          />
          <Stagger as="ol" variant="left" className={styles.path}>
            {workPage.path.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className="text-muted">{step.body}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy={workPage.categories.id} tone="subtle">
        <Container>
          <SectionIntro
            id={workPage.categories.id}
            title={workPage.categories.title}
            lead={workPage.categories.lead}
          />
          <Stagger as="ul" variant="fade" className={styles.categories}>
            {workPage.categories.items.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </Stagger>

          {hasProjects ? (
            <Stagger as="ul" variant="scale" className={styles.projects}>
              {workPage.projects.map((project) => (
                <li key={project.slug} className={styles.project}>
                  <Media aspect="16x9">
                    <MediaPlaceholder label={project.mediaLabel ?? project.title} />
                  </Media>
                  <p className={`text-caption ${styles.projectCategory}`}>
                    {project.category}
                  </p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <dl className={styles.projectMeta}>
                    <div>
                      <dt>Challenge</dt>
                      <dd className="text-muted">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt>APX Approach</dt>
                      <dd className="text-muted">{project.approach}</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd className="text-muted">{project.result}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </Stagger>
          ) : (
            <div className={styles.empty}>
              <Stagger as="ul" variant="scale" className={`${styles.placeholders} grid grid--3`}>
                {workPage.placeholders.map((slot) => (
                  <li key={slot.category} className={`${styles.placeholderCard} motion-media-reveal`}>
                    <Media aspect="16x9">
                      <MediaPlaceholder label={slot.label} />
                    </Media>
                    <p className={`text-caption ${styles.projectCategory}`}>
                      {slot.category}
                    </p>
                    <p className={styles.placeholderFrame}>Challenge</p>
                    <p className={styles.placeholderFrame}>APX Approach</p>
                    <p className={styles.placeholderFrame}>Result</p>
                  </li>
                ))}
              </Stagger>
              <h2 className={styles.emptyTitle}>{workPage.empty.title}</h2>
              <p className="text-muted">{workPage.empty.note}</p>
            </div>
          )}
        </Container>
      </Section>

      <PageCta title={workPage.cta.title} subtitle={workPage.cta.subtitle} />
    </>
  );
}
