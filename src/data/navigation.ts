export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation — Insights intentionally excluded (homepage / footer only). */
export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About APX", href: "/about" },
  { label: "APX Labs", href: "/labs" },
  { label: "APX Digital", href: "/digital" },
  { label: "APX Solutions", href: "/solutions" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

/** Footer links — includes Insights as a secondary destination. */
export const footerNavigation: NavItem[] = [
  { label: "APX Labs", href: "/labs" },
  { label: "APX Digital", href: "/digital" },
  { label: "APX Solutions", href: "/solutions" },
  { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
