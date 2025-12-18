# Contact Form Setup Instructions

## Web3Forms Integration

The contact form is integrated with Web3Forms, a free service that sends form submissions to your email without needing a backend server.

### Setup Steps:

1. **Get Your Access Key**:
   - Go to https://web3forms.com/
   - Sign up with your email (syedarqum1999@gmail.com)
   - Create a new form and get your access key

2. **Update the Contact Component**:
   - Open `src/components/Contact.tsx`
   - Find line 20: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
   - Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key from Web3Forms

3. **Test the Form**:
   - Fill out the contact form on your portfolio
   - Submit it
   - Check your email for the message

### Features:
- ✅ No backend server required
- ✅ Free tier: 250 submissions/month
- ✅ Email notifications
- ✅ Spam protection
- ✅ Form validation
- ✅ Success/error messages

### Alternative Options:
If you prefer a different service, you can also use:
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Built-in if deploying to Netlify
