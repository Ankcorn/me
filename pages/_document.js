import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Thomas Ankcorn</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            description={
              "Systems Engineer, Software Coach and Serverless First Architect." +
              "I do 1 on 1 coaching in react, nodejs, serverless, clean code, tdd and crafting software."
            }
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:500,600,700,800,900&display=swap'"
            rel="stylesheet"
          />
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
