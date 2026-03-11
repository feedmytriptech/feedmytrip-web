import styles from './Hero.module.css'

const PILLS = [
  { emoji: '🗺️', label: 'Smart Trip Planning' },
  { emoji: '📍', label: 'Hidden Gems' },
  { emoji: '🎥', label: 'Travel Reels' },
  { emoji: '🌤️', label: 'Live City Intel' },
  { emoji: '👥', label: 'Explorer Community' },
  { emoji: '🛡️', label: 'Safety Alerts' },
]

export default function Hero() {
  return (
    <div className={styles.pills}>
      {PILLS.map((p) => (
        <div key={p.label} className={styles.pill}>
          <span>{p.emoji}</span>
          {p.label}
        </div>
      ))}
    </div>
  )
}
