'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import GearLogo from './GearLogo'
import styles from './Navbar.module.css'

const links = [
  { href: '#events',      label: 'Events'   },
  { href: '#about',       label: 'About'    },
  { href: '#sponsors',    label: 'Sponsors' },
  { href: '#get-involved', label: 'Connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120) {
          current = sec.id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="#hero" className={styles.logo}>
            <GearLogo className={styles.logoMark} maskId="nav-mask" />
            <span className={styles.logoName}>Hack at UCI</span>
          </Link>

          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.link} ${active === l.href.replace('#', '') ? styles.active : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#get-involved" className={`${styles.link} ${styles.pill}`}>
                Get Involved →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
