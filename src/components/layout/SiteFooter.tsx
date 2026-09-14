import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/data/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/media/Logo";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./SiteFooter.module.css";

/**
 * Complete APX footer — identity, navigation, no invented contact details.
 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Reveal variant="fade">
          <div className={styles.inner}>
            <div className={styles.brand}>
              <Logo compact />
              <div className={styles.brandCopy}>
                <p className={styles.abbr}>{siteConfig.abbreviation}</p>
                <p className={`text-small ${styles.fullName}`}>{siteConfig.name}</p>
                <p className={`text-small text-muted ${styles.pillars}`}>
                  Technology • Innovation • Digital Skills • Solutions
                </p>
                <p className={`text-small text-muted`}>{siteConfig.tagline}</p>
              </div>
            </div>

            <nav className={styles.nav} aria-label="Footer">
              <p className={`text-caption ${styles.navLabel}`}>Navigate</p>
              <ul className={styles.list}>
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.ctaBlock}>
              <p className={`text-small ${styles.ctaLead}`}>Ready to talk?</p>
              <Link href={siteConfig.primaryCta.href} className={styles.cta}>
                <span className="text-button">{siteConfig.primaryCta.label}</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
