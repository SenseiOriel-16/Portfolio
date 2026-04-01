import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Anchor Next to this folder when a parent directory has another lockfile (e.g. pnpm in home).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
