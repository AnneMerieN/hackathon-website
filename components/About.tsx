'use client'

import styles from './About.module.css'

const facts = [
  { num: '01', icon: '🎓', name: 'Student-Led',        detail: 'UCI students'    },
  { num: '02', icon: '🌐', name: 'Community First',    detail: '500+ members'    },
  { num: '03', icon: '⚡', name: 'Innovation-Driven',  detail: '3 events / year' },
  { num: '04', icon: '🤝', name: 'Industry-Connected', detail: '50+ sponsors'    },
  { num: '05', icon: '🏆', name: 'Award-Winning',      detail: 'Top UCI org'     },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">About Us</div>
          <h2 className="sec-title">
            Empowering builders<br />at UC Irvine
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.text} reveal d1`}>
            <p>
              Hack at UCI is a student-run organization established to provide
              students with a platform to learn, grow, and develop technology
              at hackathons.
            </p>
            <p>
              We act as an ambassador to the UCI community, educating resources,
              and empowering the community around us by giving students the
              platform to learn more about technology.
            </p>
            <p>
              From first-timers to experienced engineers — we believe everyone
              has something to build, and something to learn.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a href="#get-involved" className="btn btn-ghost">
                Join the Community →
              </a>
            </div>
          </div>

          <div className={`${styles.facts} reveal d2`}>
            {facts.map((f) => (
              <div key={f.num} className={styles.factRow}>
                <span className={styles.factNum}>{f.num}</span>
                <span className={styles.factIco}>{f.icon}</span>
                <span className={styles.factName}>{f.name}</span>
                <span className={styles.factDetail}>{f.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
