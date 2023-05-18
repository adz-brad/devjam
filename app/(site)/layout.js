import '../styles/globals.css'

export const metadata = {
  title: 'devJam',
  description: 'Next-Gen Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
