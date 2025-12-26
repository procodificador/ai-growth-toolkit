# 🚀 Setup Guide

Quick guide to get your portfolio running and deployed.

## 📋 Prerequisites

- Node.js 18 or higher
- Git
- A GitHub account
- A Netlify account (free)

## 🔧 Local Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deployment to Netlify

### Option 1: Drag & Drop (Fastest)

1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com)
3. Drag the `dist/` folder to Netlify
4. Done! Your site is live

### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ai-growth-toolkit.git
git push -u origin main
```

2. In Netlify:
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

3. Your site will be live at: `https://your-site-name.netlify.app`

## 🎨 Customization

### Update Your Information

1. **Footer Links** - Edit `components/Footer.tsx`
   - Update GitHub, LinkedIn, and Email links

2. **About Section** - Edit `components/About.tsx`
   - Update your story and skills

3. **Results/Metrics** - Edit `components/Results.tsx`
   - Update your numbers and achievements

4. **Skills** - Edit `components/SkillMatrix.tsx`
   - Update your skill levels

### Update Contact Information

Edit `README.md` and replace placeholder links with your actual:
- LinkedIn profile
- GitHub username
- Email address
- Instagram handle (optional)

## 📱 Testing

### Test Locally
```bash
npm run dev
```

### Test Production Build
```bash
npm run build
npm run preview
```

### Test on Mobile
- Use Chrome DevTools (F12)
- Click "Toggle device toolbar"
- Test different screen sizes

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Links tested and working
- [ ] Site tested on mobile and desktop
- [ ] Build completes without errors
- [ ] Content reviewed for accuracy

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Site Doesn't Load
- Check that `dist/` folder was created
- Verify Netlify build settings
- Check browser console for errors

### Styling Issues
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check Tailwind CDN is loading

## 📊 Performance

The portfolio is optimized for:
- Fast load times (< 2s)
- Mobile responsiveness
- SEO
- Accessibility

## 🎯 Next Steps

1. Deploy to Netlify
2. Update your LinkedIn with the live link
3. Add to your resume/CV
4. Share on social media
5. Send to potential employers

## 📞 Support

For issues or questions:
- Check the [README.md](README.md) for detailed documentation
- Open an issue on GitHub
- Review the code comments for guidance

---

**Good luck with your portfolio! 🚀**

*Developed by Yousef Fathi Hellín*
