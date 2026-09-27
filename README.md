# gomeztech.dev

[![Live](https://img.shields.io/badge/live-gomeztech.dev-0f766e)](https://gomeztech.dev)
[![Stack](https://img.shields.io/badge/stack-Vite%20%2B%20React-3178c6)](#stack)

Personal portfolio for **Armando Gomez** — Network &amp; Systems Technician moving toward Forward-Deployed / AI Engineering. A single-page site with a hero, capabilities, a live project feed, experience, and resume.

**Live:** [gomeztech.dev](https://gomeztech.dev)

## What makes it more than a template

- **Live project feed.** The Projects section fetches public repositories from the GitHub API at runtime (`/users/ArmandoSNHU/repos`), ranks them against a curated priority list, and renders the top eight. If the API rate-limits a visitor, it falls back to a hand-picked featured set so the page is never empty.
- **Curated over raw.** Featured repositories carry a written description and a category tag instead of showing GitHub's default blurb.
- **Whole-card navigation.** Each project card is a keyboard-accessible link to its repository.
- **Motion, used sparingly.** GSAP scroll reveals and a lightweight custom cursor, with a film-grain overlay.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 5 |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Motion | GSAP, Motion (Framer) |
| Smooth scroll | Lenis |
| Hosting | Custom domain `gomeztech.dev` |

## Local development

```bash
git clone https://github.com/ArmandoSNHU/gomeztech-dev.git
cd gomeztech-dev
npm install
npm run dev        # http://localhost:5173
```

Build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Structure

```text
src/
├── App.jsx              # section composition
├── components/          # Hero, Stats, About, Capabilities, Projects, Experience, Resume, Footer
├── lib/
│   ├── projects.js      # curated repo list, ranking, language colors
│   └── gsap.js          # GSAP + ScrollTrigger setup
└── index.css            # design tokens and component styles
```

To feature a repository, add it to `CURATED` in [`src/lib/projects.js`](src/lib/projects.js) with a priority, description, and tag.

## License

Content © Armando Gomez. Code is available for reference.
