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
        <footer className=""></footer>
      </div>
      <div className="hidden bg-indigo-300 bg-blue-300 bg-yellow-300 bg-green-300 bg-pink-400 text-indigo-300 text-blue-300 text-yellow-300 text-green-300 text-pink-400 text-black">
      </div>
    </>
  )
}

export default Layout