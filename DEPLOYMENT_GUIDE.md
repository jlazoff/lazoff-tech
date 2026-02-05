# Lazoff Tech Deployment Guide

## Pre-Deployment Checklist

### Code Verification
- [x] Build passes: `npm run build`
- [x] No ESLint errors
- [x] Dark mode configured: `darkMode: 'class'`
- [x] Responsive design tested
- [x] All links functional
- [x] Professional attribution only
- [x] Network links present (globalknowledgegraph.com)

### Content Verification
- [x] "Now Part of Digital Twin Pro" messaging clear
- [x] Timeline shows company evolution
- [x] Legacy services properly archived
- [x] CTAs point to digitaltwinpro.com
- [x] Footer has all required links

### Compliance Verification
- [x] No personal information (jlazoff, personal GitHub)
- [x] Professional email only (contact@lazoff.tech)
- [x] No vendor-specific names
- [x] No homelab references
- [x] Unique content (not duplicated)

---

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

**Why Cloudflare Pages:**
- Consistent with other portfolio sites
- Fast global CDN
- Free SSL
- Easy custom domain setup
- Automatic deployments from Git

**Steps:**

1. **Connect Repository**
   ```bash
   # Commit all changes first
   cd /Users/jlazoff/GitHub/lazoff-tech
   git add .
   git commit -m "feat: Transform to transitional legacy site

   - Add 'Now Part of Digital Twin Pro' messaging
   - Create company evolution timeline
   - Reposition services as legacy archive
   - Add prominent CTAs to Digital Twin Pro
   - Implement dark/light mode with darkMode: 'class'
   - Full responsive design
   - Update metadata and schema
   - Link to Global Knowledge Graph Network

   Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

   git push origin main
   ```

2. **Cloudflare Dashboard**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect to GitHub repository: `lazoff-tech`
   - Select branch: `main`

3. **Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   Environment variables: None needed
   ```

4. **Domain Setup**
   - Custom domain: `lazoff.tech`
   - DNS records will be configured automatically
   - SSL certificate provisioned automatically

5. **Verify Deployment**
   - Visit https://lazoff.tech
   - Test dark/light mode
   - Test all CTAs
   - Verify responsive design
   - Check analytics tracking

---

### Option 2: Vercel (Alternative)

**Why Vercel:**
- Built by Next.js creators
- Excellent Next.js optimization
- Easy deployment
- Free tier generous

**Steps:**

1. **Install Vercel CLI (if not already installed)**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/jlazoff/GitHub/lazoff-tech

   # Commit changes first
   git add .
   git commit -m "feat: Transform to transitional legacy site"
   git push origin main

   # Deploy to Vercel
   vercel --prod
   ```

3. **Domain Setup**
   - Go to Vercel dashboard
   - Add custom domain: `lazoff.tech`
   - Configure DNS records as instructed

4. **Verify Deployment**
   - Visit https://lazoff.tech
   - Test all functionality

---

### Option 3: Netlify (Alternative)

**Why Netlify:**
- Simple deployment
- Good Next.js support
- Free tier

**Steps:**

1. **Commit and Push**
   ```bash
   cd /Users/jlazoff/GitHub/lazoff-tech
   git add .
   git commit -m "feat: Transform to transitional legacy site"
   git push origin main
   ```

2. **Netlify Dashboard**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub: `lazoff-tech`
   - Branch: `main`

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Domain Setup**
   - Add custom domain: `lazoff.tech`
   - Configure DNS

---

## DNS Configuration

### If Using Cloudflare (Both for DNS and Pages)

**A Records:**
```
Type: A
Name: @
Content: (Cloudflare Pages IP - auto-configured)
Proxy: Enabled (orange cloud)
```

**CNAME Record:**
```
Type: CNAME
Name: www
Content: lazoff-tech.pages.dev
Proxy: Enabled (orange cloud)
```

### If Using External DNS with Cloudflare Pages

Point your domain's nameservers to Cloudflare, then configure as above.

---

## Post-Deployment Verification

### Functional Tests

1. **Homepage Load**
   - [ ] Site loads at https://lazoff.tech
   - [ ] Logo displays correctly
   - [ ] Particles background animates

2. **Responsive Design**
   - [ ] Mobile view (< 640px)
   - [ ] Tablet view (768px)
   - [ ] Desktop view (1024px+)
   - [ ] All sections stack/expand correctly

3. **Dark/Light Mode**
   - [ ] CSS variables work
   - [ ] All components have correct colors
   - [ ] Theme toggle ready (if implemented)

4. **External Links**
   - [ ] Digital Twin Pro links work
   - [ ] Global Knowledge Graph link works
   - [ ] LinkedIn link works
   - [ ] All open in new tabs with noopener

5. **Analytics**
   - [ ] Google Tag Manager fires
   - [ ] Google Analytics tracking works
   - [ ] Events captured correctly

### SEO Tests

1. **Metadata**
   - [ ] Title: "Lazoff Tech | Now Part of Digital Twin Pro"
   - [ ] Description shows in search results
   - [ ] Open Graph image displays on social media

2. **Schema Markup**
   - [ ] JSON-LD validates (use Google's Rich Results Test)
   - [ ] Organization schema correct
   - [ ] Website schema correct

3. **Performance**
   - [ ] Lighthouse score > 90
   - [ ] First Contentful Paint < 1.5s
   - [ ] Time to Interactive < 3s

---

## Optional: Redirect Setup

If you want legacy URLs to redirect to Digital Twin Pro:

### Vercel `vercel.json`
```json
{
  "redirects": [
    {
      "source": "/services",
      "destination": "https://digitaltwinpro.com/services",
      "permanent": true
    },
    {
      "source": "/contact",
      "destination": "https://digitaltwinpro.com/contact",
      "permanent": true
    }
  ]
}
```

### Cloudflare Pages `_redirects`
```
/services https://digitaltwinpro.com/services 301
/contact https://digitaltwinpro.com/contact 301
```

### Netlify `_redirects`
```
/services https://digitaltwinpro.com/services 301!
/contact https://digitaltwinpro.com/contact 301!
```

---

## Rollback Plan

If issues occur after deployment:

### Cloudflare Pages
1. Go to Deployments tab
2. Find previous deployment
3. Click "Rollback to this deployment"

### Vercel
```bash
vercel rollback
```

### Netlify
1. Go to Deploys tab
2. Find previous deploy
3. Click "Publish deploy"

---

## Monitoring

### Analytics Dashboard
- Google Analytics: Track traffic to Digital Twin Pro CTAs
- Google Tag Manager: Monitor event tracking
- Set up goal for "Visit Digital Twin Pro" clicks

### Key Metrics to Monitor
- **Traffic source**: Where visitors come from
- **CTA clicks**: How many click through to Digital Twin Pro
- **Bounce rate**: Should be low (clear CTAs)
- **Time on page**: Should be moderate (reading timeline)
- **Exit links**: Digital Twin Pro should be top exit

### Alerts to Set Up
- Traffic anomalies (sudden drops/spikes)
- Error rate increases
- Slow page load times

---

## Maintenance

### Regular Tasks

**Monthly:**
- Review analytics for user behavior
- Check all external links still work
- Verify Digital Twin Pro link is correct
- Monitor Core Web Vitals

**Quarterly:**
- Update dependencies: `npm update`
- Rebuild and test: `npm run build`
- Review and update content if needed
- Check for security vulnerabilities: `npm audit`

**Annually:**
- Review company evolution narrative (still accurate?)
- Update copyright year in footer
- Refresh Open Graph image if needed

### Content Updates

If you need to update the timeline or add information:

1. Edit `src/app/page.js`
2. Update the `timeline` array
3. Rebuild and redeploy
4. No breaking changes needed

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Dark Mode Not Working
- Verify `tailwind.config.js` has `darkMode: 'class'`
- Check CSS variables are defined in `globals.css`
- Ensure components use `dark:` prefix

### Links Not Working
- Check for typos in URLs
- Verify `target="_blank"` and `rel="noopener noreferrer"`
- Test on multiple browsers

### Analytics Not Tracking
- Verify Google Analytics ID is correct
- Check GTM container ID
- Test in incognito/private browsing
- Use Google Tag Assistant Chrome extension

---

## Success Criteria

After deployment, verify:

✅ **Messaging**: Clearly communicates company transition
✅ **CTAs**: Prominent links to Digital Twin Pro
✅ **Design**: Professional, modern, responsive
✅ **Technical**: Fast, accessible, SEO-optimized
✅ **Compliance**: All standards met
✅ **Analytics**: Tracking user journey to Digital Twin Pro

---

## Support

If you encounter issues:

1. **Build Issues**: Check Next.js logs
2. **Deployment Issues**: Check platform-specific docs
3. **DNS Issues**: Verify nameserver configuration
4. **Content Issues**: Review UPDATE_SUMMARY.md

---

## Final Checklist

Before marking deployment complete:

- [ ] Site accessible at https://lazoff.tech
- [ ] SSL certificate active (HTTPS)
- [ ] All sections display correctly
- [ ] Responsive design works on all devices
- [ ] Dark mode ready (CSS correct)
- [ ] All CTAs link to digitaltwinpro.com
- [ ] Global Knowledge Graph link present
- [ ] Analytics tracking works
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Schema markup validates
- [ ] Social media preview looks good

---

**Deployment Ready**: ✅ YES

All requirements met. Site is ready for production deployment.

---

**Documentation Updated**: February 5, 2026
**Next Review**: Monthly analytics check
