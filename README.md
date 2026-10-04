# Pankaj Jadhav – Portfolio

Static site (HTML, CSS, JS). No build step.

## Run locally in VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Or run `npx serve .` in the terminal.)

## Deploy to Vercel
- Dashboard: push to GitHub, then Vercel > Add New > Project > import repo > Deploy (Framework: Other, no build command).
- CLI: `npm i -g vercel`, then run `vercel` in this folder, then `vercel --prod`.

## Edit
- Text and links: `index.html`
- Colors and fonts: variables at the top of `style.css`
- Photo: replace `assets/pankaj.jpg`; resume: replace `assets/Pankaj_Jadhav_Resume.pdf`
