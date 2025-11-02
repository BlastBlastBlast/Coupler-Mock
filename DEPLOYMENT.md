# Deploying to GitHub Pages

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub: https://github.com/BlastBlastBlast/Coupler-Mock
   - Click **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - The workflow will automatically deploy when you push to main/master

3. **Your site will be available at:**
   ```
   https://BlastBlastBlast.github.io/Coupler-Mock/
   ```

## Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Install gh-pages package (if not already installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Select **gh-pages** branch as source
   - Your site will be available at the same URL

## Notes

- The `base` path in `vite.config.js` is set to `/Coupler-Mock/` to match your repository name
- If you change the repository name, update the `base` path in `vite.config.js`
- After deployment, wait a few minutes for GitHub Pages to update
- Clear your browser cache if you see old content

