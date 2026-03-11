'use client'

import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'

interface Props {
  launchDate: string
}

interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
  launched: boolean
}

function calc(launchDate: string): TimeLeft {
  const diff = new Date(launchDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, launched: true }
  return {
    days:     Math.floor(diff / 86400000),
    hours:    Math.floor((diff % 86400000) / 3600000),
    mins:     Math.floor((diff % 3600000) / 60000),
    secs:     Math.floor((diff % 60000) / 1000),
    launched: false,
  }
}

export default function Countdown({ launchDate }: Props) {
  // Start as null to avoid server/client mismatch (hydration error)
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calc(launchDate))
    const id = setInterval(() => setTime(calc(launchDate)), 1000)
    return () => clearInterval(id)
  }, [launchDate])

  const placeholder = ['Days', 'Hours', 'Mins', 'Secs']

  // Render placeholder zeros until client hydrates
  if (!time) {
    return (
      <div className={styles.wrap}>
        <p className={styles.label}>Launching In</p>
        <div className={styles.cd}>
          {placeholder.map((unit, i) => (
            <span key={unit}>
              <div className={styles.block}>
                <span className={styles.num}>{unit === 'Days' ? '000' : '00'}</span>
                <span className={styles.unit}>{unit}</span>
              </div>
              {i < 3 && <span className={styles.sep}>:</span>}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (time.launched) {
    return (
      <div className={styles.wrap}>
        <p className={styles.live}>🚀 We are LIVE!</p>
      </div>
    )
  }

  const blocks = [
    { num: String(time.days).padStart(3, '0'),  unit: 'Days' },
    { num: String(time.hours).padStart(2, '0'), unit: 'Hours' },
    { num: String(time.mins).padStart(2, '0'),  unit: 'Mins' },
    { num: String(time.secs).padStart(2, '0'),  unit: 'Secs' },
  ]

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>Launching In</p>
      <div className={styles.cd}>
        {blocks.map((b, i) => (
          <span key={b.unit}>
            <div className={styles.block}>
              <span className={styles.num}>{b.num}</span>
              <span className={styles.unit}>{b.unit}</span>
            </div>
            {i < 3 && <span className={styles.sep}>:</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
