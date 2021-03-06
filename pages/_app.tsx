import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/latoFonts.scss'
import '../styles/globals.scss'
import '../styles/layout.scss'
import '../styles/fonts.scss'
import '../styles/hljs.scss'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV)

  return (
    <div>
      <Head>
        <title>Phala Network</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='bookmark' href='/favicon.ico' type='image/x-icon' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='description' content='Phala Network' />
        <meta name='renderer' content='webkit' />
        <meta name='format-detection' content='telephone=no'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-H3VG3RPY7M'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-H3VG3RPY7M');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
