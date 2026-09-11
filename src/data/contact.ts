import { divisions, formatDivisionFocus } from "@/data/divisions";
import { siteConfig } from "@/config/site";

export const contactPage = {
  seo: {
    title: "Contact",
    description:
      "Contact APX about STEM, digital skills, technology solutions, or a problem worth solving.",
  },
  hero: {
    eyebrow: siteConfig.primaryCta.label,
    title: "Contact APX",
    description:
      "Tell us what you are trying to learn, build, solve or grow. Use the form below to send an enquiry from this page.",
  },
  invite: {
    id: "enquiry",
    title: "Start a conversation",
    lead: "Share enough context for APX to understand the need. There is no public email or phone listed here yet — this form is the enquiry path on the website.",
  },
  form: {
    interests: [
      { value: "", label: "Select an interest (optional)" },
      ...divisions.map((division) => ({
        value: division.id,
        label: `${division.name} — ${formatDivisionFocus(division)}`,
      })),
      { value: "general", label: "General enquiry" },
      { value: "work", label: "Our work / a project" },
    ],
    notice:
      "Submitting this form stores your enquiry in this browser session so you can confirm what you wrote. A live email delivery connection is not enabled on this site yet.",
    successTitle: "Enquiry captured on this page",
    successBody:
      "Your message has been recorded in this session so you can review it. It has not been emailed automatically. If you need to reach APX another way, use the contact details APX has already shared with you.",
  },
} as const;
