import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TRXY819B3L"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-TRXY819B3L');
                    `
                }}

            />
        </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
    );
  }
}

export default MyDocument;
