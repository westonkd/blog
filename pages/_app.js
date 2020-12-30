import '../styles/globals.css'

import Layout from '../components/shared/Layout'

export default function Weston({ Component, pageProps, pageTitle, description }) {
  return(
    <Layout pageTitle={pageTitle}>
      <Component {...pageProps} />
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      pageTitle: configData.default.title,
      description: configData.default.description,
    },
  }
}
