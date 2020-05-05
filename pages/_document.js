import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Inter:500,600,700,800,900&display=swap'"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="images/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="images/favicons/favicon-96x96.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
