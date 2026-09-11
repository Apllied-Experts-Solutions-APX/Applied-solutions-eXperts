import { Container } from "@/components/layout/Container";
import styles from "./PageIntro.module.css";

type PageIntroProps = {
  title: string;
  description?: string;
};

/**
 * Minimal page heading shell for route scaffolding.
 */
export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Container as="header" className={styles.intro}>
      <h1>{title}</h1>
      {description ? <p className="text-muted">{description}</p> : null}
    </Container>
  );
}
