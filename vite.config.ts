import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages serves a project site from https://<user>.github.io/<repo>/,
 * so the build needs base "/<repo>/". The GitHub Actions workflow sets
 * VITE_BASE automatically from the repository name. For local work the
 * default below is used. If you deploy to a user site (<user>.github.io)
 * or a custom domain, set VITE_BASE to "/".
 */
const DEFAULT_BASE = '/mohamed-mosaad-portfolio/';

/** Fills absolute-URL SEO tags only when VITE_SITE_URL is known. */
function seoUrls(siteUrl: string): Plugin {
  const clean = siteUrl.replace(/\/+$/, '');
  return {
    name: 'seo-urls',
    transformIndexHtml(html) {
      if (!clean) {
        return html
          .replace(/\s*<!--SEO_URL_START-->[\s\S]*?<!--SEO_URL_END-->/g, '')
          .replace(/%SITE_URL%/g, '');
      }
      return html
        .replace(/<!--SEO_URL_(START|END)-->/g, '')
        .replace(/%SITE_URL%/g, clean);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const base = env.VITE_BASE || DEFAULT_BASE;
  return {
    base,
    plugins: [react(), seoUrls(env.VITE_SITE_URL || '')],
    build: { target: 'es2022', sourcemap: false },
  };
});
