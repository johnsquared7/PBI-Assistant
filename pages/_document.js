import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI DAX Assistant " key="title"/>
        <meta property="og:description" content="GPT 3 Assistant built with buildspace" key="description"/>
        <meta
          property="og:image"
          content="https://images.techyscouts.media/cb:e7Py~323d8/w:auto/h:auto/q:mauto/https://senturus.com/app/uploads/2019/12/DAX-function-Updated.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
