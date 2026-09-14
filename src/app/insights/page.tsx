import type { Metadata } from "next";
import { insightsPage } from "@/data/insights";
import { Container, Section } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Media, MediaPlaceholder } from "@/components/media/Media";
import { Stagger } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: insightsPage.seo.title,
  description: insightsPage.seo.description,
};

export default function InsightsPage() {
  const hasArticles = insightsPage.articles.length > 0;

  return (
    <>
      <PageHero
        tone="subtle"
        eyebrow={insightsPage.hero.eyebrow}
        title={insightsPage.hero.title}
        description={insightsPage.hero.description}
      />

      <Section ariaLabelledBy={insightsPage.architecture.id}>
        <Container>
          <SectionIntro
            id={insightsPage.architecture.id}
            title={insightsPage.architecture.title}
            lead={insightsPage.architecture.lead}
          />
          <Stagger as="ul" variant="left" className={styles.topics}>
            {insightsPage.architecture.topics.map((topic) => (
              <li key={topic.title} className={styles.topic}>
                <h3 className={styles.topicTitle}>{topic.title}</h3>
                <p className="text-muted">{topic.body}</p>
              </li>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section ariaLabelledBy="insights-feed" tone="subtle">
        <Container>
          <SectionIntro
            id="insights-feed"
            title={hasArticles ? "Latest" : insightsPage.empty.title}
            lead={hasArticles ? undefined : insightsPage.empty.note}
          />

          {hasArticles ? (
            <Stagger as="ul" variant="scale" className={styles.articles}>
              {insightsPage.articles.map((article) => (
                <li key={article.slug} className={styles.article}>
                  <p className={`text-caption ${styles.topicLabel}`}>{article.topic}</p>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className="text-muted">{article.summary}</p>
                </li>
              ))}
            </Stagger>
          ) : (
            <div className={styles.empty}>
              <Stagger as="ul" variant="scale" className={`${styles.slots} grid grid--3`}>
                {insightsPage.slots.map((slot) => (
                  <li key={slot.kind} className={`${styles.slot} motion-media-reveal`}>
                    <Media aspect="16x9">
                      <MediaPlaceholder label={slot.label} />
                    </Media>
                    <p className={`text-caption ${styles.topicLabel}`}>{slot.kind}</p>
                    <p className={styles.slotLine}>Headline</p>
                    <p className={styles.slotLine}>Summary</p>
                  </li>
                ))}
              </Stagger>
              <Button href="/contact" variant="outline">
                Talk with APX
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
