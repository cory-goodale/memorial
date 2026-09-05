# In Loving Memory &bull; Memorial Service Website

A mobile-friendly, modern celebration of life page designed with parallax depth, editorial typography, and botanical accents. Ready to host on **GitHub Pages**.

---

## 🌸 Quick Preview Locally
You can view the page right in your web browser:
1. Double-click `index.html` on your Mac (or right-click &rarr; **Open With &rarr; Google Chrome / Safari**).
2. Or run a quick local server in your terminal:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🌿 Where to Customize the Content

Everything is marked in [`index.html`](file:///Users/cory/Desktop/memorial/index.html) with obvious comments like `<!-- EDIT HERE: ... -->`:

1. **Mom's Name & Dates** (Lines ~29–35):
   - Replace the placeholder name and dates.
2. **Hero Quote / Subtitle** (Line ~37):
   - A favorite quote, gardening saying, or brief line.
3. **Portrait Photo** (Line ~62):
   - Swap the placeholder photo with a picture of your mom smiling in her garden.
4. **Service & Gathering Details** (Lines ~105–170):
   - Date, times, venue names, addresses, and Google Maps link.
5. **Flower / Remembrance Note** (Line ~167):
   - Placeholder requesting donations or planting perennials instead of cut flowers.
6. **Garden Photo Gallery** (Lines ~185–235):
   - Replace the placeholder flower pictures with her actual garden photos.
   - You can copy image files directly into the `images/` folder and change the `src` to `images/your-photo.jpg`.
7. **RSVP / Contact Info** (Lines ~255–275):
   - Update phone number and email for family RSVPs.

---

## 🚀 How to Host on GitHub Pages (Free & Private/Unlisted)

1. **Initialize Git & Push to GitHub**:
   In your terminal inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Memorial service website"
   git branch -M main
   # Create a repository on github.com (can be Public or GitHub Enterprise Private)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on **GitHub.com** &rarr; **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Choose `main` branch and `/ (root)` folder, then click **Save**.
   - Within 1–2 minutes, your memorial site will be live at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

3. **Sharing with Close Family & Friends**:
   - Because you aren't submitting it to search engine indexes, the link will only be accessible to people you directly text or email the URL to.
