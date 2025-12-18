# Portfolio Deployment Guide

This portfolio is deployed using **Vercel** for optimal performance and seamless CI/CD integration.

## 🚀 Quick Deployment

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [Vercel Account](https://vercel.com/signup) (free)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `https://github.com/Syed-Arqum-Sultan/portfolio`
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

3. **Done!** Your portfolio will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   # For production deployment
   npm run deploy

   # For preview deployment
   npm run deploy:preview
   ```

## 🔄 Automatic Deployments

Once connected to Vercel:
- **Production**: Every push to `main` branch automatically deploys to production
- **Preview**: Every pull request gets a unique preview URL
- **Instant Rollbacks**: Easily rollback to previous deployments from Vercel dashboard

## 🛠️ Build Configuration

The project uses the following build settings (configured in `vercel.json`):
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Vite (auto-detected)

## 📝 Environment Variables

If you need to add environment variables:
1. Go to your project settings in Vercel dashboard
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys, analytics IDs)
4. Redeploy for changes to take effect

## 🧪 Local Testing

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to see the production build locally.

## 🔗 Custom Domain

To add a custom domain:
1. Go to your project in Vercel dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

## 📊 Performance & Analytics

Vercel provides built-in analytics:
- **Web Vitals**: Core Web Vitals monitoring
- **Real User Monitoring**: Actual user performance data
- **Edge Network**: Global CDN for fast loading worldwide

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test the build locally with `npm run build`

### 404 Errors on Refresh
- Vercel automatically handles SPA routing for Vite apps
- No additional configuration needed

### Slow Build Times
- Vercel caches dependencies automatically
- First build may be slower, subsequent builds are faster

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Repository](https://github.com/Syed-Arqum-Sultan/portfolio)

## 🎉 Success!

Your portfolio is now deployed and accessible worldwide! Share your live URL and showcase your work.
