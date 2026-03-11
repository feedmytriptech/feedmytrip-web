import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}{' '}
        <a href="https://feedmytrip.com">FeedMyTrip</a>
        {' '}· All rights reserved &nbsp;·&nbsp;
        <a href="mailto:hello@feedmytrip.com">contact@feedmytrip.com</a>
      </p>
    </footer>
  )
}
