'use client'

import styles from './Sponsors.module.css'

const tiers = [
  {
    label: 'Platinum',
    size: styles.lg,
    sponsors: ['Google', 'Meta', 'Microsoft', 'IBM Cloud', 'Northrop Grumman'],
  },
  {
    label: 'Gold',
    size: styles.md,
    sponsors: ['Twilio', 'Texas Instruments', 'PIMCO', 'Anduril', 'Figma', 'Corsair'],
  },
  {
    label: 'Silver',
    size: styles.sm,
    sponsors: ['Roku', 'Roblox', 'SoFi', 'GitHub', 'SendGrid', 'WayUp', 'Wolfram', 'Google Cloud', 'Bentley', 'CoreLogic', 'Toshiba', 'Vincit'],
  },
]

export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">Our Sponsors</div>
          <h2 className="sec-title">Backed by industry leaders</h2>
          <p className="sec-sub">
            Our events wouldn&apos;t be possible without these incredible companies
            who believe in the next generation of builders.
          </p>
        </div>

        {tiers.map((tier, i) => (
          <div key={tier.label} className={`${styles.tierWrap} reveal d${i + 1}`}>
            <div className={styles.tierHead}>
              <span className={styles.tierLabel}>{tier.label}</span>
              <div className={styles.tierLine}></div>
            </div>
            <div className={styles.pills}>
              {tier.sponsors.map((sp) => (
                <div key={sp} className={`${styles.pill} ${tier.size}`}>
                  <div className={styles.bar}></div>
                  <span className={styles.spName}>{sp}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
