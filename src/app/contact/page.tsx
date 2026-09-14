import type { Metadata } from "next";
import { contactPage } from "@/data/contact";
import { Container, Section, Split } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: contactPage.seo.title,
  description: contactPage.seo.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="default"
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        description={contactPage.hero.description}
      />

      <Section ariaLabelledBy={contactPage.invite.id} tone="subtle">
        <Container>
          <Split>
            <div className={styles.copy}>
              <SectionIntro
                id={contactPage.invite.id}
                title={contactPage.invite.title}
                lead={contactPage.invite.lead}
                className={styles.introFlush}
              />
            </div>
            <Reveal delay={120} variant="right">
              <ContactForm />
            </Reveal>
          </Split>
        </Container>
      </Section>
    </>
  );
}
