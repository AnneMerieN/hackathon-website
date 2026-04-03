'use client'

import styles from './GetInvolved.module.css'

const channels = [
  {
    name: 'Discord',
    handle: 'Join 500+ hackers, find teammates, get event updates',
    badge: 'Join Now',
    badgeAccent: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    name: 'Newsletter',
    handle: 'Early access to events, workshops & opportunities',
    badge: 'Subscribe',
    badgeAccent: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="var(--accent)" strokeWidth="2" />
        <path d="m2 8 9.5 6.5a1 1 0 0 0 1 0L22 8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@hackatuci — photos, announcements & behind the scenes',
    badge: 'Follow',
    badgeAccent: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="var(--accent)" stroke="var(--accent)" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Hack at UCI — connect with organizers & alumni',
    badge: 'Connect',
    badgeAccent: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="9" width="4" height="12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="4" r="2" stroke="var(--accent)" strokeWidth="2" />
      </svg>
    ),
  },
]

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function GetInvolved() {
  return (
    <section id="get-involved">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">Connect With Us</div>
          <h2 className="sec-title">Get involved</h2>
          <p className="sec-sub">
            Join the community — whether you want to hack, stay informed, or
            connect with fellow builders.
          </p>
        </div>

        <div className={`${styles.list} reveal d1`}>
          {channels.map((ch) => (
            <a key={ch.name} href="#" className={styles.row}>
              <div className={styles.icon}>{ch.icon}</div>
              <div className={styles.info}>
                <div className={styles.name}>{ch.name}</div>
                <div className={styles.handle}>{ch.handle}</div>
              </div>
              <span className={`tag ${ch.badgeAccent ? 'tag-accent' : ''} ${styles.badge}`}>
                {ch.badge}
              </span>
              <div className={styles.arrow}><Arrow /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
