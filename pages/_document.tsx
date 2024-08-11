import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Kaushik Tripathi - Portfolio",
  description:
    "A website about Kaushik Tripathi, full stack developer, open source enthusiast, and tech creator.",
  keywords:
    "Kaushik Tripathi, Full Stack Developer, Open Source, Tech Creator, Nashik, Maharashtra, India",
  author: "Kaushik Tripathi",
  openGraph: {
    title: "Kaushik Tripathi - Portfolio",
    description:
      "A website about Kaushik Tripathi, full stack developer, open source enthusiast, and tech creator.",
    siteName: "Kaushik Tripathi - Portfolio",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Tripathi - Portfolio",
    description:
      "A website about Kaushik Tripathi, full stack developer, open source enthusiast, and tech creator.",
  },
};

export default function Document() {
  return (
    <Html
      lang="en"
      className={""}
    >
      <Head>
        <meta charSet={metadata.charset} />
        <meta
          name="title"
          content={metadata.title}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        <meta
          name="author"
          content={metadata.author}
        />
        <meta
          property="og:title"
          content={metadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="og:type"
          content={metadata.openGraph.type}
        />
        <meta
          property="og:locale"
          content={metadata.openGraph.locale}
        />
        <meta
          name="twitter:card"
          content={metadata.twitter.card}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter.title}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
