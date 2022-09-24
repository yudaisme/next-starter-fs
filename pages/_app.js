import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
