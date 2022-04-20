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
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&callback=initMap&libraries=places,drawing,visualization&v=weekly`}
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
