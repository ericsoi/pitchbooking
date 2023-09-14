import Navigation from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'
import Footer from '@/components/Footer'
import moment from 'moment';
moment.locale('en'); // Replace 'en' with the desired locale

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sansiro',
  description: 'Book a football pitch',
  icons: {
    icon: {
      url: "/img/icon.png",
      type: "image/png",
    },
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navigation />
          {children}
          <Footer />
        </Provider>
        </body>
    </html>
  )
}
