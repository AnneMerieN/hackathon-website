'use client'

import { useEffect, useRef } from 'react'
import styles from './Events.module.css'

const events = [
  {
    id: '01',
    emoji: '💡',
    imgClass: styles.img1,
    tags: ['Annual', '36 Hours', '500+ Hackers'],
    accentTag: true,
    title: 'IrvineHacks',
    description: "UCI's largest hackathon held annually in Orange County, California. Students get 36 hours to create something extraordinary alongside hundreds of fellow builders and industry mentors.",
    footerTags: ['Orange County, CA', 'Annual'],
  },
  {
    id: '02',
    emoji: '🐜',
    imgClass: styles.img2,
    tags: ['Beginner Friendly', 'All Levels', '100+ Hackers'],
    accentTag: true,
    title: 'ZotHacks',
    description: 'A beginner-friendly hackathon open to all skill levels and majors. ZotHacks brings 100+ talented people together to learn, build, and grow in a welcoming and inclusive environment.',
    footerTags: ['UC Irvine', 'All Majors'],
  },
  {
    id: '03',
    emoji: '🚀',
    imgClass: styles.img3,
    tags: ['Industry Partner', 'Northrop Grumman'],
    accentTag: true,
    title: 'NorthropHacks',
    description: 'A specialized hackathon in partnership with Northrop Grumman. Students tackle real-world engineering challenges alongside leading aerospace and defense professionals.',
    footerTags: ['Industry', 'Engineering'],
  },
]

export default function Events() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    listRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="events">
      <div className="container">
        <div className="reveal" ref={listRef}>
          <div className="sec-label">Featured Events</div>
          <h2 className="sec-title">Where ideas come to life</h2>
          <p className="sec-sub">
            We host multiple hackathons throughout the year — from large-scale
            competitions to beginner-friendly introductions.
          </p>
        </div>

        <div className={styles.list} ref={listRef}>
          {events.map((ev, i) => (
            <div key={ev.id} className={`${styles.card} reveal d${i + 1}`}>
              <div className={`${styles.img} ${ev.imgClass}`}>{ev.emoji}</div>
              <div className={styles.content}>
                <div>
                  <div className={styles.tags}>
                    {ev.tags.map((t, ti) => (
                      <span key={t} className={`tag ${ti === 0 && ev.accentTag ? 'tag-accent' : ''}`}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.num}>{ev.id} —</div>
                  <h3 className={styles.title}>{ev.title}</h3>
                </div>
                <p className={styles.desc}>{ev.description}</p>
                <div className={styles.footer}>
                  <div className={styles.footerTags}>
                    {ev.footerTags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a href="#" className="view-link">
                    View Event
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
