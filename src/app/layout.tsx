import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import type { Metadata } from 'next'
import { StyledComponentsRegistry } from 'helpers'

export const metadata: Metadata = {
  title: 'Jasurbek Shomaqsudov - Software Engineer',
  description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
  keywords:
    "Jasurbek Shomaqsudov, jasurbek shomaqsudov, Shomaqsudov Jasurbek, shomaqsudov jasurbek, shomaqsudov jasurbek frontend, shomaqsudov Jasurbek, shomaqsudov jasur, shomaqsudov, jasurShomaqsudov, JasurShomaqsudov, jasurshomaqsudov, Jasurshomaqsudov_jasur, jasur, jasur shomaqsudov, shomaqsudov, front-end developer, Jasurbek Shomaqsudov, jasurbek_shomaqsudov, jasur_shomaqsudov, Jasurbek's Portfolio, jasur shomaqsudov, Jasur Shomaqsudov, Jasurbek Frontend, Jasurbek Frontend Developer, Frontend Developer, jasurbekshomaqsudov, jasurshomaqsudov, shomaqsudovjasurbek, jasurbek shomaqsudov uz, shomaqsudovjasur, shomaqsudov_jasurbek_portfolio, shomaqsudov jasurbek portfolio, jasurbek, Jasurbek, JASURBEK, jasur, Jasur, JASUR, shomaqsudov, Shomaqsudov, SHOMAQSUDOV, j, a, s, u, r, b, e, k, ja, jasu, sho, shomaqsudo, jasur uz, jasuruz, jasurbekuz, shomaqsudov uz, shomaqsudovuz, jasur uzb, jasuruzb, jasurbekuzb, shomaqsudov uzb, shomaqsudovuzb, software engineer, jasur software engineer, jasurbek software engineer, shomaqsudov software engineer, programming, frontend, react developer, web developer, portfolio, HTML, CSS, JavaScript, jQuery, Bootstrap, responsive design, web design, web development, front-end, frontend, Джасурбек Шомаксудов, Джасурбек Шомаксудов, Шомаксудов Джасурбек, Шомаксудов Джасурбек, Шомаксудов Джасурбек фронтенд, Шомаксудов Джасурбек, Шомаксудов Джасур, Джасур, Джасур Шомаксудов, Шомаксудов, Front-end разработчик, Джасурбек Шомаксудов, Портфолио Джасурбека, Джасур Шомаксудов",
  openGraph: {
    title: 'Jasurbek Shomaqsudov - Software Engineer',
    description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
    url: 'https://shomaqsudov.uz',
    countryName: 'Uzbekistan',
    phoneNumbers: '+998971052208',
    siteName: 'shomaqsudov.uz',
    images: [
      {
        url: '/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Jasurbek Shomaqsudov Banner',
      },
    ],
    locale: 'en_US',
    alternateLocale: 'uz_UZ',
    type: 'website',
  },
  creator: 'Jasurbek Shomaqsudov',
  classification: 'Software Engineer',
  icons: { icon: '/logo.webp' },
  applicationName: 'shomaqsudov.uz',
  authors: { name: 'Jasurbek Shomaqsudov', url: 'https://shomaqsudov.uz' },
  category: 'Software engineering',
  twitter: {
    title: 'Jasurbek Shomaqsudov - Software Engineer',
    description: 'Jasurbek Shomaqsudov is a front-end developer who creates responsive and user-friendly websites. See my portfolio and learn more about my skills, experience.',
    images: '/banner.webp',
    card: 'summary_large_image',
    site: 'https://shomaqsudov.uz',
    creator: 'Jasurbek Shomaqsudov',
    creatorId: 'jasurbek_shomaqsudov',
    siteId: 'shomaqsudov.uz',
  },
  robots: { index: true, follow: true },
  appleWebApp: { title: 'Jasurbek Shomaqsudov', startupImage: '/logo.webp' },
  themeColor: '#141E30',
  verification: {
    google: 'YKNgW6dch-cCV_lEa2PUcyteFd7APTHkNIwYbtH6JXc',
    yandex: 'b95c7f14b897436e',
    other: {
      'google-adsense-account': 'ca-pub-9331562588011655',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <link rel='canonical' href='https://shomaqsudov.uz' />

        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-V4LQXC2FYF' />
        <Script
          id='google-gtag'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-V4LQXC2FYF');
          `,
          }}
        />
      </Head>
      {/* Yandex Metrika */}
      <Script
        id='yandex-metrika'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(96899216, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
        }}
      />

      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <noscript>
          <div>
            <img src='https://mc.yandex.ru/watch/96899216' style={{ position: 'absolute', left: '-9999px' }} alt='' />
          </div>
        </noscript>
      </body>
    </html>
  )
}
