import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

import Courses from './Courses/page'
import YourPage from './YourPage/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lecture Scheduling',
  description: 'Online Lecture Scheduling System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className='body'>
          <div className='nav'>
            <li className=''>
              <Link href='/'>Lecture Scheduling System</Link>
            </li>
            <div className='profile'>
              <div>Admin</div>
              <div className='circleAvatar'>
                <img src='cat.jpg' />
              </div>
            </div>

          </div>
          <div className='main'>
            <div className='left-nav'>
              <div><Link href='/Courses'>Courses</Link></div>
              <div><Link href='/YourPage'>YourPage</Link></div>
              <div><Link href='/Schedule'>Schedule</Link></div>
              <div><Link href='/Schedule'>Request</Link></div>
            </div>
            <div className='right-data'>
              {children}
            </div>
          </div>

        </section>
      </body>
    </html>
  );
}

