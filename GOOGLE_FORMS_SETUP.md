# Google Forms Setup Guide

## 📝 How to Set Up Google Forms for Form Responses

### Step 1: Create Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create a new form"
3. Name it "HackFest 2025 Registrations"

### Step 2: Add Form Fields
Add these questions to match your registration form:

1. **Full Name** (Short answer)
2. **Email Address** (Short answer)
3. **Phone Number** (Short answer)
4. **College/University** (Short answer)
5. **Year of Study** (Multiple choice)
   - 1st Year
   - 2nd Year
   - 3rd Year
   - 4th Year
   - Other
6. **Experience Level** (Multiple choice)
   - Beginner
   - Intermediate
   - Advanced
7. **Skills & Technologies** (Paragraph)
8. **Team Name** (Short answer)
9. **Team Size** (Multiple choice)
   - Solo (1 member)
   - Team (2 members)
10. **Project Idea** (Paragraph)
11. **Registration Fee** (Short answer)

### Step 3: Get Form URL and Entry IDs
1. Click "Send" button
2. Copy the form URL
3. To get entry IDs:
   - Right-click on the form and "View page source"
   - Search for "entry." to find entry IDs
   - Or use browser developer tools

### Step 4: Update Code
Replace the placeholder values in `app/register/page.tsx`:

```javascript
// Replace YOUR_FORM_ID with actual form ID from URL
const googleFormUrl = "https://docs.google.com/forms/d/YOUR_FORM_ID/formResponse"

// Replace entry IDs with actual ones from your form
formDataToSubmit.append("entry.123456789", formData.fullName) // Full Name
formDataToSubmit.append("entry.987654321", formData.email) // Email
formDataToSubmit.append("entry.111222333", formData.phone) // Phone
formDataToSubmit.append("entry.444555666", formData.college) // College
formDataToSubmit.append("entry.777888999", formData.year) // Year
formDataToSubmit.append("entry.000111222", formData.experience) // Experience
formDataToSubmit.append("entry.333444555", formData.skills) // Skills
formDataToSubmit.append("entry.666777888", formData.teamName) // Team Name
formDataToSubmit.append("entry.999000111", formData.teamSize) // Team Size
formDataToSubmit.append("entry.222333444", formData.projectIdea) // Project Idea
formDataToSubmit.append("entry.555666777", getRegistrationFee().toString()) // Fee
```

### Step 5: View Responses
1. In Google Forms, click "Responses" tab
2. View responses in real-time
3. Export to Google Sheets for better organization
4. Set up email notifications for new responses

### Step 6: Alternative - Google Sheets Integration
For better data management:
1. In Google Forms, click "Responses" → "Create spreadsheet"
2. This creates a Google Sheet that auto-updates with new responses
3. You can add formulas, filters, and analysis

## 🔧 Technical Notes

### CORS Issues
Google Forms has CORS restrictions. The current code uses `mode: "no-cors"` which means:
- Form will submit successfully
- You won't get a response back to confirm submission
- Check Google Forms responses tab to verify submissions

### Testing
1. Test the form submission locally
2. Check Google Forms responses tab
3. Verify all fields are being submitted correctly

### Production Considerations
- Google Forms is free and reliable
- No server costs or maintenance
- Automatic backup and data export
- Can handle thousands of responses
- Mobile-friendly

## 📊 Response Management

### View Responses
- **Google Forms**: Real-time view of all responses
- **Google Sheets**: Spreadsheet format with filtering and sorting
- **Email Notifications**: Get notified of new submissions

### Data Export
- Export to CSV/Excel
- Download as PDF
- Share with team members
- Set up automated reports

### Security
- Only form owner can view responses
- Can share with specific people
- Data is stored securely by Google
- GDPR compliant

## 🎯 Benefits of Google Forms

✅ **Free** - No cost for unlimited responses  
✅ **Reliable** - Google's infrastructure  
✅ **Easy Setup** - No coding required  
✅ **Real-time** - Instant response collection  
✅ **Exportable** - Multiple export formats  
✅ **Mobile-friendly** - Works on all devices  
✅ **Analytics** - Built-in response analysis  
✅ **Integration** - Works with Google Sheets 