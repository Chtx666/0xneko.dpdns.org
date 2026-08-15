<div align="center">

# 0xNEKO

**A minimal, responsive and SEO-friendly blog built with Astro.**

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-success)](https://github.com/Chtx666/0xneko.dpdns.org/actions)

🔗 **Live Site:** [https://0xneko.dpdns.org](https://0xneko.dpdns.org)

</div>

---

## About

0xNEKO is a personal blog focused on **competitive programming (OI) solutions** and software development notes, built on top of [AstroPaper](https://github.com/satnaing/astro-paper).

## Features

- ✅ Type-safe frontmatter with Zod schema
- 🌙 Light / dark mode with theme persistence
- 🔍 Full-text search powered by [Pagefind](https://pagefind.app/)
- 📈 Dynamic Open Graph image generation
- 🧮 KaTeX math rendering via `remark-math` / `rehype-katex`
- 🗂 Auto-generated table of contents
- 📡 RSS feed & sitemap
- 🌐 i18n-ready (default `zh-TW`)
- 🔤 Self-hosted `Taipei Sans TC Beta` font (no external font requests)
- ♿ Accessible, responsive, SEO-friendly
- ⚡ Zero-JS static output, Lighthouse 100/100

## Tech Stack

| Technology                                                          | Purpose              |
| ------------------------------------------------------------------- | -------------------- |
| [Astro](https://astro.build/)                                       | Static site framework |
| [AstroPaper](https://github.com/satnaing/astro-paper)               | Blog theme           |
| [TypeScript](https://www.typescriptlang.org/)                       | Type safety          |
| [Tailwind CSS](https://tailwindcss.com/)                            | Styling              |
| [Pagefind](https://pagefind.app/)                                   | Search               |
| [KaTeX](https://katex.org/)                                         | Math rendering       |
| [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) | OG image generation  |
| GitHub Actions                                                      | CI / CD              |
| GitHub Pages                                                        | Hosting              |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 22.12.0`
- A package manager (`npm`, `pnpm`, or `yarn`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Chtx666/0xneko.dpdns.org.git
cd 0xneko.dpdns.org

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site. Changes hot-reload automatically.

### Production Build

```bash
npm run build      # astro check && astro build && pagefind
npm run preview    # preview the built output
```

## Project Structure

```text
.
├── src
│   ├── assets          # icons & images
│   ├── components      # reusable UI components
│   ├── content
│   │   ├── pages       # static pages (e.g. about)
│   │   └── posts       # blog posts (.md / .mdx)
│   ├── i18n            # translations
│   ├── layouts         # page layouts
│   ├── pages           # route definitions
│   ├── scripts         # client-side scripts
│   ├── styles          # global / theme / typography CSS
│   ├── types           # TypeScript type definitions
│   └── utils           # helper functions
├── public              # static assets (fonts, favicon, OG image)
├── astro-paper.config.ts  # site configuration
├── astro.config.ts        # Astro configuration
└── package.json
```

## Writing a Post

Create a new Markdown file under `src/content/posts/`, e.g. `hello-world.md`:

```markdown
---
title: "Hello World"
pubDatetime: 2026-08-15T12:00:00Z
description: "A short description shown in cards."
tags:
  - coding
  - OI
---

Post content goes here. Markdown and KaTeX (`$...$`) are supported.
```

Posts are automatically picked up — no other registration is required. A table of contents, share links, and an OG image are generated for each post.

## Deployment

The site is automatically built and deployed to GitHub Pages via the workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

To deploy your own copy:

1. Fork this repository.
2. In the repository settings, enable **Pages → Source: GitHub Actions**.
3. Update `site.url` in `astro-paper.config.ts`.
4. Push to `main`.

## License

This project is licensed under the [MIT License](LICENSE), based on [AstroPaper](https://github.com/satnaing/astro-paper) © [Sat Naing](https://satna.ing).

## Acknowledgements

- [AstroPaper](https://github.com/satnaing/astro-paper) — the blog theme this project is built on
- [Astro](https://astro.build/) — the underlying framework
