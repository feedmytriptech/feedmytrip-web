# FeedMyTrip — Web (Next.js)

## 🖥️ Open in VS Code

```bash
# 1. Unzip the project folder
# 2. Open VS Code → File → Open Folder → select feedmytrip-web
# 3. Open the integrated terminal (Ctrl+` or Cmd+`)
```

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:3000 in your browser. The page hot-reloads on every save.

---

## 📁 Project Structure

```
feedmytrip-web/
├── app/
│   ├── layout.tsx        ← fonts, metadata, global wrapper
│   ├── page.tsx          ← main Coming Soon page
│   ├── page.module.css   ← page styles
│   └── globals.css       ← CSS variables & resets
├── components/
│   ├── Navbar.tsx        ← top nav with logo + badge
│   ├── Hero.tsx          ← feature pills
│   ├── Countdown.tsx     ← live countdown timer
│   ├── NotifyForm.tsx    ← email capture form
│   ├── SocialLinks.tsx   ← social media icons
│   ├── Particles.tsx     ← floating particle animation
│   └── Footer.tsx        ← copyright + email
├── public/
│   └── logo.png          ← your FeedMyTrip logo
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## ✏️ Common Customisations

| What | File | What to change |
|------|------|----------------|
| Launch date | `components/Countdown.tsx` | `launchDate` prop in `app/page.tsx` |
| Social URLs | `components/SocialLinks.tsx` | `url` in the `SOCIALS` array |
| Email handler | `components/NotifyForm.tsx` | Replace the `TODO` block with Supabase insert |
| Contact email | `components/Footer.tsx` | `mailto:` link |
| Feature pills | `components/Hero.tsx` | `PILLS` array |

---

## 🌐 Deploy to Vercel

### Option A — Vercel + GitHub (recommended)
```bash
# Push to GitHub first
git init
git add .
git commit -m "initial: FeedMyTrip coming soon page"
git remote add origin https://github.com/YOUR_USERNAME/feedmytrip-web.git
git push -u origin main
```
Then go to https://vercel.com/new → Import from GitHub → select repo → Deploy.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Connect feedmytrip.com
Vercel Dashboard → Project → Settings → Domains → Add `feedmytrip.com` + `www.feedmytrip.com`

---

## 🔌 Connect Email Waitlist to Supabase (later)

In `components/NotifyForm.tsx`, replace the TODO block:

```ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Inside submit():
const { error } = await supabase
  .from('waitlist')
  .insert({ email: trimmed })
```

Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
