'use client'

import GearLogo from './GearLogo'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={`hero-grid ${styles.grid}`}>

          {/* Left */}
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              UC Irvine&apos;s Hackathon Organization
            </div>

            <h1 className={styles.h1}>
              HACK<br />
              AT<br />
              <span style={{ color: 'var(--accent)' }}>UCI.</span>
            </h1>

            <p className={styles.p}>
              A student-run organization empowering UCI students to learn, grow,
              and build extraordinary things — one hackathon at a time.
            </p>

            <div className={styles.btns}>
              <a href="#get-involved" className="btn btn-fill">
                Get Involved
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#events" className="btn btn-ghost">View Events</a>
            </div>

            <div className={styles.stats}>
              <div>
                <div className={styles.statN}>500+</div>
                <div className={styles.statL}>Hackers</div>
              </div>
              <div>
                <div className={styles.statN}>3</div>
                <div className={styles.statL}>Annual Events</div>
              </div>
              <div>
                <div className={styles.statN}>50+</div>
                <div className={styles.statL}>Sponsors</div>
              </div>
            </div>
          </div>

          {/* Right — gear frame */}
          <div className={`hero-right ${styles.right}`}>
            <div className={styles.gearFrame}>
              <div className={styles.ring}></div>
              <div className={`${styles.dot} ${styles.dotTL}`}></div>
              <div className={`${styles.dot} ${styles.dotTR}`}></div>
              <div className={`${styles.dot} ${styles.dotBL}`}></div>
              <div className={`${styles.dot} ${styles.dotBR}`}></div>
              <GearLogo className={styles.gearSvg} maskId="hero-mask" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
