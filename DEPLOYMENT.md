# 🚀 Deployment Guide - Vercel

Your code is pushed to GitHub! Now let's deploy to Vercel.

## GitHub Repository
**URL**: https://github.com/adrianstier/bealer-blueprint-nextjs

---

## Deploy to Vercel (Easy Way)

### Step 1: Go to Vercel
Visit: **https://vercel.com/new**

### Step 2: Import Your GitHub Repository
1. Sign in with GitHub (if not already)
2. Click "Add New Project"
3. Find **`adrianstier/bealer-blueprint-nextjs`** in your repo list
4. Click "Import"

### Step 3: Configure Project
Vercel will auto-detect Next.js settings. Just click **"Deploy"** - but WAIT! First set up environment variables.

### Step 4: Add Environment Variables ⚠️ IMPORTANT
Before clicking Deploy, click on "Environment Variables" and add these:

#### Required Variables:

1. **NEXTAUTH_URL**
   - Value: (leave blank for now, we'll update after first deploy)
   - Or use your custom domain if you have one

2. **NEXTAUTH_SECRET**
   - Value: Generate a random secret
   - Run this command to generate one:
   ```bash
   openssl rand -base64 32
   ```
   - Example: `K9n3P8xQ2v5J7h4M6wL1R9sT0yU3iO8pA5bC2dE4fG6`

3. **AUTH_USERNAME**
   - Value: `derrick`

4. **AUTH_PASSWORD**
   - Value: `allstate2026`
   - (or change to something more secure!)

### Step 5: Deploy!
Click **"Deploy"** and wait ~2 minutes.

---

## After First Deployment

### Update NEXTAUTH_URL
1. Once deployed, Vercel will give you a URL like:
   - `https://bealer-blueprint-nextjs.vercel.app`

2. Go to your Vercel project settings:
   - Project Settings → Environment Variables
   - Find `NEXTAUTH_URL`
   - Update it to your actual Vercel URL
   - Redeploy (or push a new commit to trigger auto-deploy)

---

## Your Live Site

After deployment, your site will be at:
- **Production URL**: `https://bealer-blueprint-nextjs.vercel.app`
- **Custom Domain**: You can add your own domain in Vercel settings

### Login Credentials:
```
Username: derrick
Password: allstate2026
```

---

## Automatic Deployments

Every time you push to GitHub, Vercel will automatically:
- ✅ Build and deploy your changes
- ✅ Run on the production URL
- ✅ Create preview URLs for branches

---

## Custom Domain (Optional)

Want a custom domain like `bealer-growth.com`?

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel: Project Settings → Domains
3. Add your domain
4. Update DNS records as Vercel instructs
5. Update `NEXTAUTH_URL` to your custom domain

---

## Security Notes

### Change the Default Password
For production, update `AUTH_PASSWORD` in Vercel settings to something more secure.

### Secure the Secret
The `NEXTAUTH_SECRET` should be:
- At least 32 characters
- Random and unique
- Never committed to GitHub (it's in `.env.local` which is gitignored)

---

## Troubleshooting

### Login Not Working
- Check that all environment variables are set in Vercel
- Make sure `NEXTAUTH_URL` matches your actual domain
- Redeploy after changing env vars

### Site Not Loading
- Check Vercel deployment logs
- Make sure all dependencies are in `package.json`
- Verify build completed successfully

### Need to Update Credentials
1. Go to Vercel project settings
2. Environment Variables
3. Edit `AUTH_USERNAME` or `AUTH_PASSWORD`
4. Redeploy

---

## Quick Commands

```bash
# Generate new NEXTAUTH_SECRET
openssl rand -base64 32

# Check environment variables locally
cat .env.local

# Force redeploy (if needed)
git commit --allow-empty -m "Trigger deploy"
git push
```

---

## 🎉 You're Done!

Your private, authenticated blueprint site is now live and accessible only to those with login credentials.

**Next Steps:**
1. Share the URL with Derrick
2. Give him the login credentials
3. Consider setting up a custom domain
4. Monitor checklist progress through localStorage

---

## Support

Built by: **Adrian Stier**
- Email: adrian.stier@gmail.com
- Phone: (203) 241-8978

For Vercel support: https://vercel.com/docs
