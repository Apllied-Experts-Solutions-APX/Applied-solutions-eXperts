import type { NextConfig } from "next";

/**
 * Deployment-aware base path.
 *
 * - Local / Vercel / Render (root host): no basePath
 * - GitHub Pages project site: set GITHUB_PAGES=true in the deploy workflow
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Applied-solutions-eXperts" : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    // Required for `output: "export"` (no Image Optimization API on static hosts).
    unoptimized: true,
  },
  env: {
    // Exposed to client/server code so public asset URLs can include basePath.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
