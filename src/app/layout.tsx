import './globals.css'
import type { Metadata } from 'next'
import { StyledComponentsRegistry } from 'helpers'

export const metadata: Metadata = {
  title: 'Jasurbek Shomaqsudov - Software Engineer',
  description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
  keywords: "Jasurbek Shomaqsudov, jasurbek shomaqsudov, Shomaqsudov Jasurbek, shomaqsudov jasurbek, shomaqsudov jasurbek frontend, shomaqsudov Jasurbek, shomaqsudov jasur, shomaqsudov, jasurShomaqsudov, JasurShomaqsudov, jasurshomaqsudov, Jasurshomaqsudov_jasur, jasur, jasur shomaqsudov, shomaqsudov, front-end developer, Jasurbek Shomaqsudov, jasurbek_shomaqsudov, jasur_shomaqsudov, Jasurbek's Portfolio, jasur shomaqsudov, Jasur Shomaqsudov, Jasurbek Frontend, Jasurbek Frontend Developer, Frontend Developer, jasurbekshomaqsudov, jasurshomaqsudov, shomaqsudovjasurbek, jasurbek shomaqsudov uz, shomaqsudovjasur, shomaqsudov_jasurbek_portfolio, shomaqsudov jasurbek portfolio, jasurbek, Jasurbek, JASURBEK, jasur, Jasur, JASUR, shomaqsudov, Shomaqsudov, SHOMAQSUDOV, j, a, s, u, r, b, e, k, ja, jasu, sho, shomaqsudo, jasur uz, jasuruz, jasurbekuz, shomaqsudov uz, shomaqsudovuz, jasur uzb, jasuruzb, jasurbekuzb, shomaqsudov uzb, shomaqsudovuzb, software engineer, jasur software engineer, jasurbek software engineer, shomaqsudov software engineer, programming, frontend, react developer, web developer, portfolio, HTML, CSS, JavaScript, jQuery, Bootstrap, responsive design, web design, web development, front-end, frontend, Джасурбек Шомаксудов, Джасурбек Шомаксудов, Шомаксудов Джасурбек, Шомаксудов Джасурбек, Шомаксудов Джасурбек фронтенд, Шомаксудов Джасурбек, Шомаксудов Джасур, Джасур, Джасур Шомаксудов, Шомаксудов, Front-end разработчик, Джасурбек Шомаксудов, Портфолио Джасурбека, Джасур Шомаксудов",
  openGraph: {
    title: 'Jasurbek Shomaqsudov - Software Engineer',
    description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
    url: 'https://shomaqsudov.uz',
    images: [
      {
        url: 'https://shomaqsudov.uz/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Jasurbek Shomaqsudov Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  applicationName: 'shomaqsudov.uz',
  authors: { name: 'Jasurbek Shomaqsudov', url: 'https://shomaqsudov.uz' },
  // category: ['programming', 'sofware engineering', 'portfolio'],
  twitter: {
    title: 'Jasurbek Shomaqsudov - Software Engineer',
    description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
    images: 'https://shomaqsudov.uz/banner.webp',
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  appleWebApp: { title: 'Jasurbek Shomaqsudov', startupImage: 'https://shomaqsudov.uz/logo.webp' },
  themeColor: '#141E30',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <link rel='canonical' href='https://shomaqsudov.uz' />

        <meta name='yandex-verification' content='b95c7f14b897436e' />
        <meta name='google-adsense-account' content='ca-pub-9331562588011655' />
        <meta name='google-site-verification' content='YKNgW6dch-cCV_lEa2PUcyteFd7APTHkNIwYbtH6JXc' />

        {/* <!-- Google tag (gtag.js) --> */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-V4LQXC2FYF' defer></script>
        <script>
          window.dataLayer = window.dataLayer || [] function gtag() {dataLayer?.push(arguments)}
          gtag('js', new Date()) gtag('config', 'G-V4LQXC2FYF')
        </script>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
