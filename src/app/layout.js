import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from './components/ui/toaster'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishv Salvi',
  description: 'This is a portfolio website of Vishv Salvi, a full stack developer from India.',
}

export default function RootLayout({ children }) {
  return (
    <html style={{scrollBehavior:"smooth"}} lang="en">
      <head>
        
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          
      </head>
      <body className={inter.className}>{children}
      <Toaster />
      </body>
    </html>
  )
}
