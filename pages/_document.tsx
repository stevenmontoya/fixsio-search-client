import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    const { ids, css } = this.props as any;
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
