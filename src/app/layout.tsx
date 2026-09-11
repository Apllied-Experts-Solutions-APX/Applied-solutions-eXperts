import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { assetUrl } from "@/lib/assets";
import { themeBootScript } from "@/lib/theme";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.abbreviation} — ${siteConfig.name}`,
    template: `%s | ${siteConfig.abbreviation}`,
  },
  description: siteConfig.tagline,
  applicationName: siteConfig.abbreviation,
};

const logoAssetStyles = {
  ["--logo-light" as string]: assetUrl("/logos/light_website_logo.png"),
  ["--logo-dark" as string]: assetUrl("/logos/websitedarklogo.png"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={sourceSans.variable}
      style={logoAssetStyles}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
