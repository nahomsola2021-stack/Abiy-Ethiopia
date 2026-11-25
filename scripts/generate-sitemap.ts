import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { DESTINATIONS } from '../src/data/destinations';
import { TOURS } from '../src/data/tours';

const siteUrl = 'https://abiyethiopiatours.com';
const staticPaths = ['/', '/destinations', '/tours', '/about', '/contact'];
const destinationPaths = DESTINATIONS.map(
  (destination) => `/destinations/${encodeURIComponent(destination.slug)}`,
);
const tourPaths = TOURS.map((tour) => `/tours/${encodeURIComponent(tour.slug)}`);
const paths = [...staticPaths, ...destinationPaths, ...tourPaths];
const urls = paths
  .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n  </url>`)
  .join('\n');

await writeFile(
  resolve(process.cwd(), 'public', 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
