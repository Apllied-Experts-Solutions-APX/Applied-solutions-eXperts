import type { Metadata } from "next";
import Link from "next/link";
import {
  homeAudiences,
  homeDigital,
  homeEcosystem,
  homeFinalCta,
  homeInsights,
  homeLabs,
  homeSeo,
  homeSolutions,
  homeWhy,
  homeWork,
} from "@/data/homepage";
import { Container, Section, Grid, Split } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { Media, MediaPlaceholder } from "@/components/media/Media";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: homeSeo.title,
  },
  description: homeSeo.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 02 — APX Ecosystem */}
      <Section id={homeEcosystem.id} ariaLabelledBy="ecosystem-heading">
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <Heading as="h2" id="ecosystem-heading">
              {homeEcosystem.title}
            </Heading>
            <p className={`text-muted ${styles.sectionLead}`}>
              {homeEcosystem.lead}
            </p>
          </div>
          <ul className={styles.ecosystemList}>
            {homeEcosystem.items.map((item) => (
              <li key={item.id} className={styles.ecosystemItem}>
                <h3 className={styles.ecosystemName}>
                  <Link href={item.href} className={styles.ecosystemLink}>
                    {item.name}
                  </Link>
                </h3>
                <p className={`text-caption ${styles.focus}`}>{item.focus}</p>
                <p className={`text-muted ${styles.ecosystemCopy}`}>
                  {item.description}
                </p>
                <TextLink href={item.href} variant="forward">
                  Explore {item.name}
                </TextLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 03 — Who we serve */}
      <Section
        id={homeAudiences.id}
        ariaLabelledBy="audiences-heading"
        tone="subtle"
      >
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <Heading as="h2" id="audiences-heading">
              {homeAudiences.title}
            </Heading>
            <p className={`text-muted ${styles.sectionLead}`}>
              {homeAudiences.lead}
            </p>
          </div>
          <ul className={styles.audienceGrid}>
            {homeAudiences.items.map((item) => (
              <li key={item.title} className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>{item.title}</h3>
                <p className={`text-small text-muted`}>{item.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 04 — APX Labs */}
      <Section id={homeLabs.id} ariaLabelledBy="labs-heading">
        <Container>
          <Split variant="asymmetric" align="center">
            <div className={styles.featureCopy}>
              <p className={`text-caption ${styles.focus}`}>{homeLabs.focus}</p>
              <Heading as="h2" id="labs-heading">
                {homeLabs.title}
              </Heading>
              <p className={styles.concept}>{homeLabs.concept}</p>
              <p className={`text-muted`}>{homeLabs.lead}</p>
              <ul className={styles.themeList}>
                {homeLabs.themes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
              <Button href={homeLabs.href}>{homeLabs.cta}</Button>
            </div>
            <div className={styles.mediaStack} aria-label="APX Labs media placeholders">
              <Media aspect="4x3" className={styles.mediaPrimary}>
                <MediaPlaceholder label={homeLabs.mediaPlaceholders[0].label} />
              </Media>
              <div className={styles.mediaRow}>
                {homeLabs.mediaPlaceholders.slice(1, 4).map((slot) => (
                  <Media key={slot.label} aspect="1x1">
                    <MediaPlaceholder label={slot.label} />
                  </Media>
                ))}
              </div>
            </div>
          </Split>
        </Container>
      </Section>

      {/* 05 — APX Digital */}
      <Section
        id={homeDigital.id}
        ariaLabelledBy="digital-heading"
        tone="subtle"
      >
        <Container>
          <Split variant="asymmetric-reverse" align="center">
            <div className={styles.mediaStack} aria-label="APX Digital media placeholders">
              <div className={styles.mediaRow}>
                {homeDigital.mediaPlaceholders.map((slot) => (
                  <Media key={slot.label} aspect="3x2">
                    <MediaPlaceholder label={slot.label} />
                  </Media>
                ))}
              </div>
            </div>
            <div className={styles.featureCopy}>
              <p className={`text-caption ${styles.focus}`}>{homeDigital.focus}</p>
              <Heading as="h2" id="digital-heading">
                {homeDigital.title}
              </Heading>
              <p className={styles.concept}>{homeDigital.concept}</p>
              <p className={`text-muted`}>{homeDigital.lead}</p>
              <ul className={styles.capabilityList}>
                {homeDigital.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`text-small text-muted ${styles.futureNote}`}>
                {homeDigital.futureNote}
              </p>
              <Button href={homeDigital.href}>{homeDigital.cta}</Button>
            </div>
          </Split>
        </Container>
      </Section>

      {/* 06 — APX Solutions */}
      <Section id={homeSolutions.id} ariaLabelledBy="solutions-heading">
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <p className={`text-caption ${styles.focus}`}>{homeSolutions.focus}</p>
            <Heading as="h2" id="solutions-heading">
              {homeSolutions.title}
            </Heading>
            <p className={styles.concept}>{homeSolutions.concept}</p>
            <p className={`text-muted ${styles.sectionLead}`}>
              {homeSolutions.lead}
            </p>
          </div>
          <ul className={styles.solutionsGrid}>
            {homeSolutions.items.map((item) => (
              <li key={item.title} className={styles.solutionBlock}>
                <h3 className={styles.solutionTitle}>{item.title}</h3>
                <p className={`text-small text-muted`}>{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className={styles.sectionAction}>
            <Button href={homeSolutions.href}>{homeSolutions.cta}</Button>
          </div>
        </Container>
      </Section>

      {/* 07 — Our Work */}
      <Section id={homeWork.id} ariaLabelledBy="work-heading" tone="subtle">
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <Heading as="h2" id="work-heading">
              {homeWork.title}
            </Heading>
            <p className={`text-muted ${styles.sectionLead}`}>{homeWork.lead}</p>
          </div>

          <ol className={styles.workPath}>
            {homeWork.structure.map((step, index) => (
              <li key={step} className={styles.workStep}>
                <span className={styles.workIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.workStepLabel}>{step}</span>
              </li>
            ))}
          </ol>
          <p className={`text-muted ${styles.workPathLead}`}>
            {homeWork.structureLead}
          </p>

          <p className={`text-caption ${styles.categoriesLabel}`}>
            Ecosystem-wide categories
          </p>
          <ul className={styles.categoryList}>
            {homeWork.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>

          <Grid as="ul" columns={3} className={styles.workPlaceholders}>
            {homeWork.placeholders.map((slot) => (
              <li key={slot.category} className={styles.workCard}>
                <Media aspect="16x9">
                  <MediaPlaceholder label={slot.label} />
                </Media>
                <p className={`text-small ${styles.workCardLabel}`}>
                  {slot.category}
                </p>
              </li>
            ))}
          </Grid>

          <p className={`text-small text-muted ${styles.emptyNote}`}>
            {homeWork.emptyNote}
          </p>
          <div className={styles.sectionAction}>
            <Button href={homeWork.href}>{homeWork.cta}</Button>
          </div>
        </Container>
      </Section>

      {/* 08 — Why APX */}
      <Section id={homeWhy.id} ariaLabelledBy="why-heading">
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <Heading as="h2" id="why-heading">
              {homeWhy.title}
            </Heading>
          </div>
          <ul className={styles.whyGrid}>
            {homeWhy.items.map((item) => (
              <li key={item.title} className={styles.whyItem}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={`text-muted`}>{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 09 — Insights / media preview */}
      <Section id={homeInsights.id} ariaLabelledBy="insights-heading" tone="subtle">
        <Container>
          <div className={styles.sectionIntro}>
            <span className="accent-rule" aria-hidden="true" />
            <Heading as="h2" id="insights-heading">
              {homeInsights.title}
            </Heading>
            <p className={`text-muted ${styles.sectionLead}`}>
              {homeInsights.lead}
            </p>
          </div>
          <Grid as="ul" columns={3} className={styles.insightsGrid}>
            {homeInsights.slots.map((slot) => (
              <li key={slot.kind} className={styles.insightSlot}>
                <Media aspect="16x9">
                  <MediaPlaceholder label={slot.label} />
                </Media>
                <p className={`text-small ${styles.insightKind}`}>{slot.kind}</p>
              </li>
            ))}
          </Grid>
          <p className={`text-small text-muted ${styles.emptyNote}`}>
            {homeInsights.emptyNote}
          </p>
          <div className={styles.sectionAction}>
            <TextLink href={homeInsights.href} variant="forward">
              Visit Insights
            </TextLink>
          </div>
        </Container>
      </Section>

      {/* 10 — Final CTA */}
      <Section
        id={homeFinalCta.id}
        ariaLabelledBy="final-cta-heading"
        tone="inverse"
        className={styles.finalCta}
      >
        <Container narrow className={styles.finalInner}>
          <Heading as="h2" id="final-cta-heading" className={styles.finalTitle}>
            {homeFinalCta.title}
          </Heading>
          <p className={styles.finalSubtitle}>{homeFinalCta.subtitle}</p>
          <Button href={homeFinalCta.cta.href} onDark>
            {homeFinalCta.cta.label}
          </Button>
        </Container>
      </Section>
    </>
  );
}
