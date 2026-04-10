import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Anchor Next to this folder when a parent directory has another lockfile (e.g. pnpm in home).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  /** Do not ship source maps to the browser in production (default is false; kept explicit). Inspecting minified JS is still possible. */
  productionBrowserSourceMaps: false,
};

export default nextConfig;
