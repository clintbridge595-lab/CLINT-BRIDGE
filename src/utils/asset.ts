/**
 * Safely resolves public asset paths against Vite's base URL.
 * Works seamlessly across:
 * - Local development (http://localhost:3000/)
 * - GitHub Pages subpath (https://USERNAME.github.io/REPOSITORY-NAME/)
 * - GitHub Pages custom domain / user site (https://USERNAME.github.io/)
 * - Relative builds (./)
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^(\.\/|\/)/, '');
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${cleanPath}`;
};
