import { SiteHeader } from "@/components/site-header"
import "../styles/globals.css"

import { Web3Provider } from "providers/Web3"
import Footer from "@/components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </Web3Provider>
  )
}

export default MyApp
