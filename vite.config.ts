import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Dynamically resolve GitHub Pages base path:
  // 1. Explicit env var (VITE_BASE_PATH or BASE_PATH)
  // 2. In GitHub Actions, GITHUB_REPOSITORY is automatically provided as "owner/repo"
  //    - If repo is user/org site ("*.github.io"), base is "/"
  //    - If repo is project page ("owner/repo"), base is "/repo/"
  // 3. Portable fallback: "./"
  const envBase = process.env.VITE_BASE_PATH || process.env.BASE_PATH;
  let computedBase = './';

  if (envBase) {
    computedBase = envBase.endsWith('/') ? envBase : `${envBase}/`;
  } else if (process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    const repo = parts[1] || '';
    if (repo.toLowerCase().endsWith('.github.io')) {
      computedBase = '/';
    } else if (repo) {
      computedBase = `/${repo}/`;
    }
  }

  return {
    base: computedBase,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
