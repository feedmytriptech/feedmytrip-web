import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import NotifyForm from '@/components/NotifyForm'
import SocialLinks from '@/components/SocialLinks'
import Particles from '@/components/Particles'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <div className={styles.glowTop} />
      <div className={styles.glowBl} />
      <Particles />

      {/* Nav */}
      <Navbar />

      {/* Main */}
      <main className={styles.page}>
        <div className={styles.hero}>

          {/* Logo */}
          <img
            src="/logo.png"
            alt="FeedMyTrip"
            className={styles.heroLogo}
          />

          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Something big is on the way
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.l1}>Your Journey.</span>
            <span className={styles.l2}>Your Story.</span>
          </h1>

          {/* Subheading */}
          <p className={styles.sub}>
            The travel companion for city explorers is almost here.
            Plan smarter, discover deeper, and share your adventures
            with a community that truly gets it.
          </p>

          {/* Feature Pills */}
          <Hero />

          {/* Countdown */}
          <Countdown launchDate="2026-10-01T00:00:00" />

          {/* Notify Form */}
          <NotifyForm />

          {/* Divider */}
          <div className={styles.divLine} />

          {/* Social */}
          <SocialLinks />

        </div>
      </main>

      <Footer />
    </>
  )
}
