/**
 * Resolve a path under `public/` for the current deployment basePath.
 *
 * Next.js prefixes `next/link` and `next/image` automatically when `basePath`
 * is set, but root-relative URLs used in `<img>`, `<video>`, `<source>`, and
 * CSS `url(...)` are not. Use this helper (or `assetUrl` for CSS values) so
 * components stay deployment-agnostic.
 *
 * @example assetPath("/videos/APX1.mp4")
 * // local/Vercel/Render → "/videos/APX1.mp4"
 * // GitHub Pages      → "/Applied-solutions-eXperts/videos/APX1.mp4"
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** CSS `url("...")` wrapper with basePath applied. */
export function assetUrl(path: string): string {
  return `url("${assetPath(path)}")`;
}
