import Head from 'next/head'
import Header from '../Header'

const Layout = ({children, pageTitle}) => {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <section className="flex flex-col overlfow-x-auto px-5 py-12 md:px-60 items-center">
          {children}
        </section>
        <footer className="">test</footer>
      </div>
    </>
  )
}

export default Layout