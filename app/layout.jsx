import './globals.css'
import Navigation from './auth/Navigation'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-roboto",
})

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`min-h-screen bg-rose-300 px-48 mx-4 md:mx-48 xl:mx-96 ${roboto.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
