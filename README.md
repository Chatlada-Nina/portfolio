# Chatlada J. — Portfolio

Personal portfolio site showcasing professional work at [Prodeff AB](https://prodeff.se/), selected personal projects, and a contact form.

**Live site:** [chatlada-nina.github.io/portfolio](https://chatlada-nina.github.io/portfolio/)

## Tech stack

- [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/) — section animations
- [EmailJS](https://www.emailjs.com/) — contact form delivery
- [react-toastify](https://fkhadra.github.io/react-toastify/) — styled toast notifications
- [Remix Icon](https://remixicon.com/) — icons (CDN)
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment

## Features

- **Home** — intro, links to Prodeff / LighthouseTech, resume download
- **About** — bio and grouped skill chips
- **Experience** — Prodeff internship → Web Developer timeline
- **Projects** — professional work + personal builds with hover slide-up cards and frosted-glass overlays
- **Contact** — validated form with success/error toasts
- Responsive layout, sticky nav aligned with footer width (`max-w-7xl`)

## Project structure

```text
portfolio/
├── public/
│   └── chatlada-cv.pdf          # Resume (linked from Home)
├── src/
│   ├── assets/                  # Images, logo, project screenshots
│   ├── components/              # UI sections + ProjectCard, ToastProvider
│   ├── data/
│   │   └── portfolio.js         # Nav, projects, experience, skills (edit here)
│   ├── utils/
│   │   └── toast.jsx            # Themed toast helpers
│   ├── App.jsx
│   ├── index.css                # Tailwind + toast styles
│   └── main.jsx
├── index.html
└── vite.config.js               # base: '/portfolio/' for GitHub Pages
```

## Getting started

**Requirements:** Node.js 20+

```bash
# Install dependencies
npm install

# Local dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Deploy to GitHub Pages

The app is configured for a project site at `/portfolio/` (see `base` in `vite.config.js`).

```bash
npm run deploy
```

This runs `npm run build` then publishes `dist/` via `gh-pages`. Ensure **GitHub Pages** is set to deploy from the `gh-pages` branch (or the branch your workflow uses).

## Updating content

Most copy and project data lives in **`src/data/portfolio.js`**:

- `featuredProjects` — Prodeff, LighthouseTech (add `image` imports for screenshots)
- `personalProjects` — side projects and links
- `experience` — job history bullets
- `skillGroups` — “What I work with” chips
- `navLinks`, `socialLinks`

Replace **`public/chatlada-cv.pdf`** when your resume changes.

## Contact form (EmailJS)

The form does **not** send mail from your server. In the browser it calls [EmailJS](https://www.emailjs.com/), which uses a template you configure in their dashboard.

### Flow

```text
Visitor submits form
       ↓
emailjs.send(serviceId, templateId, { from_name, from_email, message }, publicKey)
       ↓
EmailJS sends email(s) according to that template’s settings
```

Your code (`Contact.jsx`) only passes data. **Who receives the email is set in the EmailJS template “To email” field**, not in React.

### You need two roles (notification vs auto-reply)

| Template | Purpose | **To email** (critical) | Reply to |
|----------|---------|-------------------------|----------|
| **Contact Notification** (`template_suzc9mx`) — **this is what code must call** | You get the message | `chatladanine@gmail.com` | `{{from_email}}` |
| **Auto-Reply** (`template_235oujs`) — link on notification template’s Auto-Reply tab | Visitor gets “thanks” | `{{from_email}}` | Your address (optional) |

**Common bug:** calling `template_235oujs` in code sends only the auto-reply to the visitor. Use `template_suzc9mx` in `Contact.jsx`.

If **To email** on the notification template is `{{from_email}}`, you still won’t receive inquiries.

### Setup in EmailJS dashboard

1. Log in at [dashboard.emailjs.com](https://dashboard.emailjs.com/).
2. Open **Contact Notification** (`template_suzc9mx`) — confirm **To email** is `chatladanine@gmail.com`.
3. Set **Reply to** to `{{from_email}}`.
4. Set **From Name** to `{{name}}` or `{{from_name}}` (code sends both).
5. In the body, use: `{{from_name}}`, `{{from_email}}`, `{{message}}`, and subject `{{title}}`.
6. **Auto-Reply** tab → link **Auto-Reply** (`template_235oujs`, To = `{{from_email}}`).
7. Save, test from the live site, and check **Email History** (each send uses quota).

Docs: [Auto-Reply](https://www.emailjs.com/docs/user-guide/auto-reply/) · [Contact Us template](https://www.emailjs.com/docs/user-guide/pre-built-email-templates/)

### IDs in code

Update in `src/components/Contact.jsx`:

- `service_1rjoeow` — Email Service ID  
- `template_suzc9mx` — **Contact Notification** (the one `emailjs.send` must call)
- `template_235oujs` — **Auto-Reply** (linked in dashboard only, not called directly from code)  
- `zZcUAgg3FDZoSwFMH` — Public Key (safe in frontend; see security section below)

Also check spam/junk for messages to your inbox.

### Security (production)

EmailJS is appropriate for a **portfolio contact form** if you treat the public key as public and harden the rest.

| Safe for frontend | Never put in React / GitHub |
|-------------------|-----------------------------|
| Public key, Service ID, Template IDs | Private key, Gmail password |

**Risks:** spam, quota abuse, someone calling your templates from another site if unrestricted.

**In this repo (`Contact.jsx`):**

- `maxLength` on fields (name 80, email 254, message 2000)
- Trim + empty check before send
- Message character counter

**In EmailJS dashboard (recommended before / after go-live):**

1. **reCAPTCHA** on template `template_suzc9mx` — reduces bots.
2. **Allowed origins / domain restriction** (if your plan includes it) — e.g. `https://chatlada-nina.github.io` and `http://localhost:5173`.
3. Monitor **Statistics** and **Email History**; rotate the public key if you see abuse.
4. Do not add EmailJS **private** keys to the project.

**Not suitable for:** passwords, payments, or highly sensitive data — use a server-side API instead.

Field limits are defined in `FIELD_LIMITS` at the top of `Contact.jsx`.

## Author

**Chatlada J.** — Web Developer, Gothenburg, Sweden

- [GitHub](https://github.com/Chatlada-Nina)
- [LinkedIn](https://www.linkedin.com/in/chatlada-nina/)
