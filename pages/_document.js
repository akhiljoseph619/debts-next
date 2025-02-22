import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
