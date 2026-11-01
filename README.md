# Ray Joshua — Portfolio

Personal portfolio of **Ray Joshua Angcan Balingkit** — ICT & Robotics Educator, Software Developer and EdTech Builder based in Bangkok, Thailand.

**Live site:** https://rayjoshuaa-portfolio.pages.dev

## About

This site presents my teaching and development work in one place: ICT and robotics teaching (Scratch, Python, LEGO robotics, Arduino), school systems and lesson platforms I have built, and the freelance services I offer — CMS websites (WordPress/Elementor, Shopify), social media management, and custom web and app development.

## Blog

The blog is written from real, researched resources. Since November 2026 it grows one article at a time: each educational post I publish on [LinkedIn](https://www.linkedin.com/in/rayjoshua432) is expanded afterwards into a full article here, with its source cited, a practical classroom takeaway, and a real (non-AI-generated) title photo from Pexels, credited in the article.

Blog posts live in `content/` as MDX files (frontmatter: `title`, `publishedAt`, `summary`, `tags`, `image`). Title photos live in `public/assets/blog/`.

## Tech

- Next.js 14 (static export) + TypeScript
- Tailwind CSS + Framer Motion
- MDX blog with reading time and topic filters
- Microsoft Clarity analytics
- Deployed on Cloudflare Pages, connected to this repository — every push to `main` builds and publishes automatically

Cloudflare Pages build settings: framework preset **Next.js (Static HTML Export)**, build command `npm run build`, build output directory `out`.

## Local development

```bash
npm install
npm run dev     # local dev server
npm run build   # static export to out/
```

## Credits

Built from the open-source [dev-portfolio-template](https://github.com/yethikrishna/dev-portfolio-template) by Mynd Labs (MIT — see `LICENSE`), heavily customised: content, services, projects, blog system and design are my own.

© 2026 Ray Joshua. All rights reserved.
