import Link from 'next/link'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/_components/navigation'

const raleway = Raleway({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Mārupes Masāža',
  description: 'Masiera pakalpojumi Mārupē',
}

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <body className={raleway.className}>
        <div className="page-container">
          <div className="page-content">
            <Link href="/">
              <h1 className="logo">Mārupes Masāža</h1>
            </Link>
            <Navigation />
            {children}
            <div className="footer">
              <div className="contacts">
                <div>Samanta, tel. 25 137 388</div>
                <div>Mārupe</div>
                <div className="icon-links">
                  <a
                    href="https://www.instagram.com/marupe_massage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="#fff"
                      width="40px"
                      height="40px"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
