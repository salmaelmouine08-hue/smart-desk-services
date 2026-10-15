# Smart Desk Services — Freelance Portfolio Website

A complete, bilingual (English / French), fully responsive static website for the independent freelance brand **Smart Desk Services**.

Built with plain HTML5, CSS3 and vanilla JavaScript. No frameworks, no build tools, no paid services required.

---

## Project Structure

```
smart-desk-services/
├── index.html          ← Main page (all content)
├── styles.css          ← All visual styles
├── script.js           ← Language switcher, mobile menu, config
├── README.md           ← This file
└── assets/
    └── profile.jpg     ← Your professional photo (add this yourself)
```

---

## What Each File Does

| File | Purpose |
|------|---------|
| `index.html` | Structure of every section (hero, services, portfolio, experience, certificates, about, process, why, contact, footer) |
| `styles.css` | Premium design system (navy + gold palette, responsive layout, accessibility) |
| `script.js` | EN/FR translations, language memory, mobile menu, Fiverr URL, dynamic year |
| `assets/profile.jpg` | Your photo that appears in the hero section |

---

## 1. How to Save Your Photo

1. Take the professional photo you want to use.
2. Rename it exactly: `profile.jpg`
3. Create a folder named `assets` next to `index.html` (if it does not already exist).
4. Put `profile.jpg` inside the `assets` folder.
5. The final path must be: `assets/profile.jpg`

If the photo is missing, the site still works and shows a placeholder.

---

## 2. How to Change the Fiverr Link

Open `script.js` and look for this line near the top:

```js
const CONFIG = {
  fiverrUrl: "https://fiverr.com/s/zAAKPkv",
  ...
};
```

Replace the URL with your full Fiverr profile URL.  
All “View My Fiverr Profile” buttons on the site will automatically use the new link.

---

## 3. How to Edit the Four Services

All service text is stored in `script.js` inside the `translations` object.

- English: look under `en` → `services.dataEntry`, `services.excel`, etc.
- French: look under `fr` → same keys.

You can change titles, descriptions and the list of deliverables.  
Keep the same structure so the site continues to work.

---

## 4. How to Edit Experience Information

In `script.js`:

- English: `experience.years` and `experience.intro`
- French: same keys under `fr`

Currently it shows “3 Years of Experience” / “3 ans d’expérience” with a neutral description.  
You can make the text more specific later when you have exact details.

---

## 5. How to Update Certificates & Education

In `index.html` find the section with id `certifications`.  
Each certificate is a small card:

```html
<article class="cert-card">
  ...
  <h3 class="cert-title">Coddy Certificate</h3>
  <p class="cert-year">2023</p>
</article>
```

Change the title and year as needed.  
Do not invent extra certificates.

---

## 6. How to Edit English and French Translations

Everything is centralized in `script.js` inside the big `translations` object.

- Change English text under the `en` key.
- Change French text under the `fr` key.

After saving, refresh the browser. The language switcher will show the updated text.

---

## 7. How to Preview the Website Locally

### Easiest method (no installation)

1. Open the folder that contains `index.html`.
2. Double-click `index.html`.
3. It will open in your default browser.

### Better method (recommended)

1. Install the free extension **Live Server** in Visual Studio Code (or Cursor).
2. Right-click `index.html` → “Open with Live Server”.
3. The site will open with automatic refresh when you save changes.

---

## 8. How to Publish Free with GitHub Pages

1. Create a free account at [github.com](https://github.com) if you do not have one.
2. Click the green **New** button to create a new repository.
3. Name it for example `smart-desk-services`.
4. Leave it public.
5. Click **Create repository**.
6. On the new page click **uploading an existing file**.
7. Drag and drop all the files and the `assets` folder.
8. Click **Commit changes**.
9. Go to the **Settings** tab of the repository.
10. In the left menu click **Pages**.
11. Under “Source” choose **Deploy from a branch**.
12. Select branch `main` and folder `/ (root)`.
13. Click **Save**.
14. Wait 1–2 minutes.
15. GitHub will show a link like:  
   `https://yourusername.github.io/smart-desk-services/`

That is your permanent free website address.

**Important:** Publishing the site does **not** automatically bring visitors. You still need to share the link (for example in your Fiverr profile description or social media).

---

## 9. How to Test After Deployment

- Open the GitHub Pages URL on your phone and computer.
- Test the EN / FR language switcher.
- Test the mobile menu (hamburger icon).
- Click every navigation link.
- Click “View My Fiverr Profile” — it should open in a new tab.
- Click “Send an Email” — it should open your email app with the address already filled.
- Check that your photo appears correctly.

---

## 10. Common Beginner Mistakes

| Problem | Solution |
|---------|----------|
| Photo does not appear | Make sure the file is named exactly `profile.jpg` and is inside the `assets` folder |
| Fiverr button goes to the wrong page | Update the URL in `script.js` → `CONFIG.fiverrUrl` |
| Language does not change | Clear browser cache or open the site in a private window |
| Mobile menu stays open | Click a navigation link or the hamburger again |
| Site looks broken on GitHub Pages | Make sure you uploaded the `assets` folder and all three main files |

---

## Design Summary

- **Colors**: Midnight Navy `#101820`, Champagne Gold `#C6A66B`, Ivory `#F7F5F0`
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Fully bilingual** EN / FR with memory of the chosen language
- **Responsive** from 320 px mobile to large desktops
- **Accessible**: semantic HTML, keyboard navigation, focus states, reduced-motion support
- **Honest content**: sample projects clearly labeled as demonstrations, no fake reviews or invented experience

---

## Checklist of Information Still Needing Your Verification

- [ ] Confirm the exact official titles of the three certificates
- [ ] Replace the short Fiverr link with the full profile URL if needed
- [ ] Add your real photo as `assets/profile.jpg`
- [ ] Decide whether to keep or refine the “3 years of experience” wording
- [ ] Test the final email address `salmaelmouine40@gmail.com`

---

## License & Credits

This website code is provided for your personal use as the owner of Smart Desk Services.  
You may modify and publish it freely.
