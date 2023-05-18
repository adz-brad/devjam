import '../styles/globals.css'
import Navbar from '../components/nav/Navbar'

export const metadata = {
  title: 'devJam',
  description: 'Next-Gen Web Development',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
