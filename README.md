# ViraConsult Website

A 6-page business website (Home, About Us, Services, Our Work, Insights, Contact Us) in a white and chocolate-brown theme.

**Built with:** HTML, CSS (Tailwind CSS via CDN + `css/style.css`) and JavaScript (React 18 via CDN, no build step).

## Structure
```
index.html
css/style.css
js/tailwind.config.js   (Tailwind colours)
js/app.js               (all pages and logic)
images/                 (photos used on the site)
```

## Run locally
Open `index.html` in a browser (internet needed for the CDN scripts and fonts).

## Publish on GitHub Pages
Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.

## Before going live
Replace the sample company details, testimonials and Office/Hours text in `js/app.js`, and connect the contact form to a real service (it currently only shows a confirmation message).
