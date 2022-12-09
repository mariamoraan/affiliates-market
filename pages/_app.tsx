import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { MobileMenu } from '../components/MobileMenu'
import store from '../state/store'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="mainWrapper">
        <Component {...pageProps} />
      </div>
      <MobileMenu />
    </Provider>
  )
}
