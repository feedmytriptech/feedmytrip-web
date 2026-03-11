import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo.png"
        alt="FeedMyTrip"
        width={160}
        height={44}
        className={styles.logo}
        priority
      />
      <span className={styles.badge}>Coming Soon</span>
    </nav>
  )
}
