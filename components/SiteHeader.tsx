import GearLogo from './GearLogo'
import styles from './SiteHeader.module.css'

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>
        <GearLogo className={styles.logoMark} maskId="site-header-mask" />
        <span className={styles.logoName}>Hack at UCI</span>
      </a>
    </header>
  )
}
