// Laminate colours (photos are in public/images/finishes). Add a new colour by adding a line here.
// Kept in a plain file so the server (search) and the browser (colour tiles, menu) can both use it.
export const FINISHES = [
  { name: 'Mahogany', image: '/images/finishes/mahogany.webp' },
  { name: 'Espresso Walnut', aka: 'dark choco', image: '/images/finishes/dark-choco.webp' },
  { name: 'Flower Wenge Dark', image: '/images/finishes/flower-wenge-dark.webp' },
  { name: 'Honey Oak', aka: 'light choco', image: '/images/finishes/light-choco.webp' },
  { name: 'Royal Ivory Marble', aka: 'taj marble', image: '/images/finishes/taj-marble.webp' },
  { name: 'Rolex Ash Light', image: '/images/finishes/rolex-ash-light.webp' },
  { name: 'Ralph Wood Light', image: '/images/finishes/ralph-wood-light.webp' },
  { name: 'Rolex Ash Dark', image: '/images/finishes/rolex-ash-dark.webp' },
  { name: 'Aroma Walnut', image: '/images/finishes/aroma-walnut.webp' },
  { name: 'Light Pine', image: '/images/finishes/light-pine.webp' },
]

// Renamed colours keep their old slug, so existing links, images and database values still work.
const OLD_SLUGS = { 'espresso walnut': 'dark-choco', 'honey oak': 'light-choco', 'royal ivory marble': 'taj-marble' }
export const colourSlug = (name) => OLD_SLUGS[name.toLowerCase()] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
