import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&family=Ubuntu&display=swap');
    </style>
  </head>
  return <Component {...pageProps} />
}
