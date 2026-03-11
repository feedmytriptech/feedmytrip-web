'use client'

import { useEffect, useRef } from 'react'
import styles from './Particles.module.css'

const COLORS = ['#FF6B35', '#F7C948', '#2196C4', '#4CAF50', '#FF9F6B']

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    COLORS.forEach((color) => {
      for (let i = 0; i < 5; i++) {
        const el = document.createElement('div')
        el.className = styles.pt
        const sz = Math.random() * 3.5 + 1.5
        el.style.cssText = `
          width:${sz}px;
          height:${sz}px;
          left:${Math.random() * 100}%;
          background:${color};
          animation-duration:${9 + Math.random() * 13}s;
          animation-delay:${Math.random() * 12}s;
        `
        container.appendChild(el)
      }
    })
  }, [])

  return <div ref={ref} className={styles.container} />
}
