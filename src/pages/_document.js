import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="author" content="Ryan Than"></meta>
          <link rel="icon" href="/images/logo-icon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
