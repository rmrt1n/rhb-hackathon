import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] max-w-5xl p-4 lg:px-0 m-auto">
        <Component {...pageProps} />
      </div>
    </>
  )
}
