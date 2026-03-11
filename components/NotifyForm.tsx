'use client'

import { useState } from 'react'
import styles from './NotifyForm.module.css'

export default function NotifyForm() {
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState<'idle' | 'success' | 'error'>('idle')
  const [loading, setLoading] = useState(false)

  async function submit() {
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setStatus('error')
      return
    }
    setLoading(true)
    try {
      // ── TODO: Connect to Supabase ──────────────────────────────────
      // Replace this with your Supabase Edge Function or direct insert:
      //
      // const { error } = await supabase
      //   .from('waitlist')
      //   .insert({ email: trimmed })
      //
      // if (error) throw error
      // ──────────────────────────────────────────────────────────────
      await new Promise((r) => setTimeout(r, 600)) // simulate request
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.wrap}>
      {status === 'success' ? (
        <p className={styles.ok}>✅ You're on the list! We'll notify you at launch.</p>
      ) : (
        <>
          <div className={`${styles.box} ${status === 'error' ? styles.boxErr : ''}`}>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              placeholder="Your email for early access…"
              disabled={loading}
            />
            <button className={styles.btn} onClick={submit} disabled={loading}>
              {loading ? 'Sending…' : 'Notify Me 🚀'}
            </button>
          </div>
          {status === 'error' && (
            <p className={styles.err}>Please enter a valid email address.</p>
          )}
        </>
      )}
    </div>
  )
}
