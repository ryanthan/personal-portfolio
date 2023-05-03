import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '@/styles/globals.css';
import { ThemeProvider } from "next-themes";
import Transition from '@/components/transition';
import NavigationBar from "@/components/navigation-bar";
import { Poppins, Raleway } from 'next/font/google';

// Load fonts:
const poppins = Poppins({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const raleway = Raleway({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

/*
* Accessibility - Outputs issues to console on dev and client-side only.
* https://github.com/dequelabs/axe-core-npm
*/
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0XZN7KQ5VG"/>
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XZN7KQ5VG', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>

      <NavigationBar />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </ThemeProvider>
  );
}