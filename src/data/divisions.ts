export type DivisionId = "labs" | "digital" | "solutions";

export type Division = {
  id: DivisionId;
  name: string;
  href: `/${DivisionId}`;
  focus: readonly string[];
};

export const divisions: readonly Division[] = [
  {
    id: "labs",
    name: "APX Labs",
    href: "/labs",
    focus: ["STEM", "Robotics", "Innovation"],
  },
  {
    id: "digital",
    name: "APX Digital",
    href: "/digital",
    focus: ["Digital Skills", "Mentorship", "Learning"],
  },
  {
    id: "solutions",
    name: "APX Solutions",
    href: "/solutions",
    focus: ["Technology", "Software", "Infrastructure"],
  },
] as const;

export function getDivision(id: DivisionId): Division | undefined {
  return divisions.find((division) => division.id === id);
}

export function formatDivisionFocus(division: Division): string {
  return division.focus.join(" • ");
}
