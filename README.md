# alexandr.es

Personal site for Nick Alexandres. Static HTML and CSS, published by GitHub Pages from the root of `master`.

Custom domain: `alexandr.es` (`CNAME` must stay exactly that).

## Structure

One scrolling page, `index.html`, plus `styles.css`:

- **Home** — name, one-liner, short bio, email / LinkedIn / GitHub, current role
- **Work** — Roku, Riot Games, and TuneIn, with the strongest results from each role, plus earlier engineering, adjunct teaching, and school
- **Projects** — public side projects only
- **Contact** — email, LinkedIn, GitHub

`404.html` covers retired URLs (the old class pages). There is no build step and no analytics.

## Projects schema

Each card is an `<li>` in `#projects`. Copy one to add a public project:

- **name** — the heading
- **one-liner** — one sentence that is actually true
- **link** — a public repo or site URL
- **meta** — a short label, such as `Public repo · Java`

Leave private repositories off the page. Do not describe a project as launched unless it is.

Current cards link to real public repos:

- [TuneInElectronWrapper](https://github.com/nickalex/TuneInElectronWrapper)
- [project_euler](https://github.com/nickalex/project_euler)
- [github.com/nickalex](https://github.com/nickalex)

## Preview locally

From the repo root:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765/`. After this branch merges to `master`, GitHub Pages serves the same files at [https://alexandr.es](https://alexandr.es).

## What was removed

The 2015 Bootstrap site and University of Redlands CS110 materials:

- `cs110.html`, `about.html`, `readinglist.html`
- `Files/` (class PDFs)
- `Lib/` (Bootstrap, jQuery-era scripts, logos, unused JPGs, `Thumbs.db`)
- `blogposts.json` (placeholder posts that nothing current uses)
- Eclipse `.project`
- Google Analytics `UA-56396526-1`
