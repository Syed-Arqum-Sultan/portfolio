# Environment Variables Configuration

## Required Environment Variables

Your portfolio requires **1 environment variable** to enable the contact form functionality:

### `VITE_WEB3FORMS_ACCESS_KEY`

**Purpose**: API key for Web3Forms service to handle contact form submissions

**How to get it**:
1. Go to [web3forms.com](https://web3forms.com)
2. Sign up for a free account (no credit card required)
3. Create a new form
4. Copy your Access Key

**How to configure in Vercel**:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:
   - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key (e.g., `abc123def-456-789-ghi-jklmnop`)
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** your project for changes to take effect

## Optional Environment Variables

Currently, your portfolio doesn't use any other environment variables. However, you may want to add these in the future:

### Analytics (Optional)

- `VITE_GA_TRACKING_ID` - Google Analytics tracking ID
- `VITE_PLAUSIBLE_DOMAIN` - Plausible Analytics domain

### Other Services (Optional)

- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key (for spam protection)

## Local Development

To test the contact form locally:

1. Create a `.env` file in your project root:
   ```bash
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

2. Add `.env` to `.gitignore` (already included)

3. Restart your dev server:
   ```bash
   npm run dev
   ```

## Important Notes

> [!WARNING]
> **Never commit your `.env` file to Git!** It's already in `.gitignore`, but double-check before pushing.

> [!TIP]
> **Free Tier Limits**: Web3Forms free tier includes:
> - 250 submissions per month
> - Email notifications
> - Spam filtering
> - No credit card required

## Current Status

⚠️ **Action Required**: The contact form currently has a placeholder value `'YOUR_WEB3FORMS_ACCESS_KEY'` in the code. You need to:

1. **Update the code** to use the environment variable
2. **Get your Web3Forms API key**
3. **Add it to Vercel** environment variables

I can help you update the code to use environment variables properly if you'd like!
