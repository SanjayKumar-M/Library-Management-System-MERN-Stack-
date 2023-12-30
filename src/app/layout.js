
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Socketclient } from '@/context/Socketclient'

export const metadata = {
  title: 'Cosmic Collab',
  description: 'Connect with friends ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Socketclient>{children}</Socketclient>
        
        </body>
    </html>
  )
}
