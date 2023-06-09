import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Desejo Ardente" />
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:site_name" content="Desejo Ardente"></meta>
        <meta property="og:url" content="https://desejo-ardente.vercel.app/" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Descubra o segredo para fazer ele correr atrás de você, sentir sua falta como nunca e querer assumir um relacionamento"
        ></meta>
        {/* <meta property="og:image" content="/icon.png" /> */}
        <meta name="theme-color" content="#ff7171"></meta>
        <meta charSet="UTF-8"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
