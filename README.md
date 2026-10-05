# Cordeiro Real Estate - Official Website

Premium real estate agency web platform for **Cordeiro Real Estate**, Colaba, South Mumbai. Established in 2003 by Anil S. Cordeiro and Deepak Cordeiro.

---

## 🚀 Features

- **Modern Architecture**: Built with React 19, TypeScript, Vite 8, and Tailwind CSS.
- **Optimized Performance**: Modular code-splitting with vendor and icon bundles (sub-800ms build).
- **Executive Profiles**: High-resolution executive portraits for Anil S. Cordeiro & Deepak Cordeiro with in-browser custom photo replacement.
- **Interactive Property Showcase**: Filterable residential, commercial, luxury, and heritage property listings.
- **Lightbox & Contact**: Fullscreen image lightbox modal, quick WhatsApp/Phone enquiry triggers, and lead forms.
- **cPanel & Apache Ready**: Pre-configured `.htaccess` and `.cpanel.yml` for seamless deployment via cPanel Git Version Control.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Type check & validation
npm run lint

# 4. Create production build
npm run build
```

---

## 🌐 Deploying to cPanel via Git Version Control

### Method 1: Using cPanel Git Version Control & `.cpanel.yml` (Recommended)

1. **Push your repository** to your preferred Git host (GitHub, GitLab, or Bitbucket).
2. Log in to your **cPanel** dashboard.
3. Open **Git™ Version Control** under the *Files* section.
4. Click **Create** button:
   - **Clone URL**: Enter your repository URL (e.g., `git@github.com:yourname/cordeiro-real-estate.git` or `https://github.com/yourname/cordeiro-real-estate.git`).
   - **Repository Path**: Enter `repositories/cordeiro` (or desired directory in your home folder).
   - **Repository Name**: `cordeiro-real-estate`.
   - Click **Create**.
5. In `.cpanel.yml`, ensure the target deployment path matches your cPanel public folder:
   ```yaml
   deployment:
     tasks:
       - export DEPLOYPATH=/home/$USER/public_html/
       - /bin/cp -R dist/* $DEPLOYPATH
       - /bin/cp dist/.htaccess $DEPLOYPATH
   ```
6. Whenever you push new updates:
   - In cPanel **Git™ Version Control**, click **Manage** next to the repository.
   - Go to the **Pull or Deploy** tab.
   - Click **Update from Remote** to pull latest commits.
   - Click **Deploy HEAD Commit** to deploy the files to `public_html`.

### Method 2: Direct Static Build Upload

If you prefer building locally and deploying the static build:
1. Run `npm run build` locally.
2. In your cPanel **File Manager**, navigate to `public_html/`.
3. Upload all files from the `dist/` directory directly into `public_html/` (including `dist/.htaccess`). 

---

## 📁 Key Directories

- `public/`: Static assets (`.htaccess`, `logo.jpg`, portraits, etc.)
- `src/components/`: Modular React UI components (Hero, AboutSection, Services, Properties, Contact, etc.)
- `src/data/`: Centralized site content, contact phone numbers, emails, and property lists
- `dist/`: Generated production build output
