import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'JS Portfolio',
    name: 'Jasurbek Shomaqsudov - Software Engineer',
    description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
    id: 'shomaqsudov-jasurbek-portfolio',
    start_url: '.',
    theme_color: '#141E30',
    background_color: '#141E30',
    display: 'fullscreen',
    display_override: ['fullscreen', 'window-controls-overlay', 'standalone'],
    orientation: 'portrait',
    dir: 'ltr',
    scope: '/',
    lang: 'en',
    prefer_related_applications: false,
    related_applications: [
      {
        platform: 'chrome_web_store',
        url: 'https://shomaqsudov.uz/manifest.json',
        id: 'js-portfolio',
      },
    ],
    icons: [
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '72x72',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '96x96',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '128x128',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '144x144',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '152x152',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '384x384',
        purpose: 'any',
      },
      {
        src: 'https://shomaqsudov.uz/logo.webp',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Home',
        short_name: 'Home',
        description: 'Go to Home',
        url: '/',
        icons: [
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '64x64 32x32 24x24 16x16',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '72x72',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '96x96',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '128x128',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '144x144',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '152x152',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '192x192',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '384x384',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '512x512',
          },
        ],
      },
      {
        name: 'Send Order',
        short_name: 'Send Order',
        description: 'Go to Send Order',
        url: '/?sendOrder=true',
        icons: [
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '64x64 32x32 24x24 16x16',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '72x72',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '96x96',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '128x128',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '144x144',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '152x152',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '192x192',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '384x384',
          },
          {
            src: 'https://shomaqsudov.uz/logo.webp',
            sizes: '512x512',
          },
        ],
      },
    ],
    categories: ['portfolio', 'programming', 'personalization', 'social', 'IT'],
  }
}