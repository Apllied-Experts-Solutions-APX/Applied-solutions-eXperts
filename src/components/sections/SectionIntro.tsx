import { Heading } from "@/components/ui/Heading";
import { Stagger } from "@/components/motion/Reveal";
import { cx } from "@/lib/utils";
import styles from "./SectionIntro.module.css";

type SectionIntroProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionIntro({
  id,
  eyebrow,
  title,
  lead,
  className,
}: SectionIntroProps) {
  return (
    <Stagger className={cx(styles.intro, className)}>
      {eyebrow ? (
        <p className={`text-caption ${styles.eyebrow}`}>{eyebrow}</p>
      ) : null}
      <div className={styles.headingBlock}>
        <span className="accent-rule" aria-hidden="true" />
        <Heading as="h2" id={id}>
          {title}
        </Heading>
      </div>
      {lead ? <p className={`text-muted ${styles.lead}`}>{lead}</p> : null}
    </Stagger>
  );
}
