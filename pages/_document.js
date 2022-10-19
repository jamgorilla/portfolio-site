// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" /> */}
        
        <link rel="stylesheet" href="https://use.typekit.net/xqn6tpy.css" />
        <link rel="icon" href="/assets/JM-logo-v0.2.svg" type="image/svg" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}