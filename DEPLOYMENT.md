# Hackathon Website Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Connect to Vercel**: Go to [vercel.com](https://vercel.com) and import your repository
3. **Add Environment Variables**: In Vercel dashboard, add all variables from `env.example`
4. **Deploy**: Vercel will automatically deploy your site

### Option 2: Netlify
1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Connect to Netlify**: Go to [netlify.com](https://netlify.com) and import your repository
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Add Environment Variables**: In Netlify dashboard, add all variables from `env.example`

### Option 3: Railway
1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Connect to Railway**: Go to [railway.app](https://railway.app) and import your repository
3. **Add Environment Variables**: In Railway dashboard, add all variables from `env.example`

## 🔧 Setup Steps

### 1. Get Razorpay Keys
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login to your account
3. Go to Settings → API Keys
4. Generate new API keys
5. Copy the Key ID and Key Secret

### 2. Environment Variables
Create a `.env.local` file in your project root with:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_test_key_id

# Admin key for viewing registrations
ADMIN_KEY=your_secure_admin_key_here
```

### 3. Test Payment Integration
1. Use Razorpay test cards for testing
2. Test card: 4111 1111 1111 1111
3. Any future expiry date
4. Any 3-digit CVV

## 📊 View Form Responses

### Method 1: API Endpoint
Visit: `https://your-domain.com/api/register?admin_key=your_admin_key`

### Method 2: Console Logs
Check your hosting platform's logs for registration data

### Method 3: Database (Recommended for Production)
For production, integrate with a database:

#### MongoDB Atlas (Free)
1. Create account at [mongodb.com](https://mongodb.com)
2. Create a cluster
3. Get connection string
4. Add to environment variables

#### Supabase (Free)
1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get connection string
4. Add to environment variables

## 🔒 Security Considerations

1. **Never commit `.env.local`** to version control
2. **Use HTTPS** in production
3. **Validate all inputs** on server side
4. **Rate limit** API endpoints
5. **Use strong admin keys**

## 📧 Email Notifications

To send confirmation emails, add email service:

### Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Add to environment variables:
```env
RESEND_API_KEY=your_resend_api_key
```

### SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Add to environment variables:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

## 🎯 Production Checklist

- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Set up database for form storage
- [ ] Configure email notifications
- [ ] Test payment flow with live keys
- [ ] Set up monitoring and analytics
- [ ] Configure backup strategy
- [ ] Test form submission and data storage

## 🆘 Troubleshooting

### Payment Issues
- Check Razorpay keys are correct
- Ensure amount is in paise (₹50 = 5000 paise)
- Verify webhook URLs if using webhooks

### Form Submission Issues
- Check API endpoint is accessible
- Verify environment variables are set
- Check server logs for errors

### Deployment Issues
- Ensure all dependencies are in `package.json`
- Check build logs for errors
- Verify environment variables are set in hosting platform 