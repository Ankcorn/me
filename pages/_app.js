import Head from 'next/head'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>My new cool app</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        description={
          "Systems Engineer, Software Coach and Serverless First Architect." +
          "I do 1 on 1 coaching in react, nodejs, serverless, clean code, tdd and crafting software."
        }
      />
    </Head>
    <Component {...pageProps} />
  </>)
}
