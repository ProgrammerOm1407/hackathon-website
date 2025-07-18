"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Code, CheckCircle } from "lucide-react"
import Link from "next/link"

interface FormData {
  fullName: string
  email: string
  phone: string
  college: string
  year: string
  experience: string
  skills: string
  projectIdea: string
  agreeTerms: boolean
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    experience: "",
    skills: "",
    projectIdea: "",
    agreeTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getRegistrationFee = () => 50

  const handleSubmit = async () => {
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions")
      return
    }
    // Validate required fields (marked with * in Google Form)
    if (!formData.fullName || !formData.email || !formData.phone || !formData.college) {
      alert("Please fill in all required fields: Name, Email, Phone, and College/Organization")
      return
    }
    setIsLoading(true)
    try {
      // Google Forms submission URL
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScTU9Wwsi12H77ZsOOQpJutn5-cMg-KuTQAgmF3JaDSgQtq9w/formResponse"
      // Submit to Google Forms using a reliable method
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = googleFormUrl
      form.style.display = 'none'
      // Add all form fields
      Object.entries({
        "entry.2092238618": formData.fullName,
        "entry.1556369182": formData.email,
        "entry.173574700": formData.phone,
        "entry.479301265": formData.college || "",
        "entry.58272716": formData.year || "",
        "entry.1509200465": formData.experience || "",
        "entry.138192442": formData.skills || "",
        "entry.1021395116": formData.projectIdea || "",
        "entry.2109138769": formData.agreeTerms ? "Yes" : "No"
      }).forEach(([name, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = name
        input.value = value
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
      setIsSubmitted(true)
    } catch (error) {
      alert("Registration failed. Please try again or contact support.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">HackFest 2025</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">Registration Successful!</h1>
            <p className="text-xl text-white/80 mb-8">
              Thank you for registering for HackFest 2025! You will receive a confirmation email shortly.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Registration Details</h3>
              <div className="text-left space-y-2 text-white/80">
                <p><strong>Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Registration Fee:</strong> ₹{getRegistrationFee()}</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-white/60">
                Your registration has been submitted successfully! We will contact you shortly with payment details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">HackFest 2025</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Register for HackFest 2025</h1>
            <p className="text-xl text-white/80 mb-6">
              Join the ultimate coding challenge and compete for certificates!
            </p>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30">
                Solo: ₹50
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30">
                Early Bird Offer
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Registration Form</CardTitle>
                  <CardDescription className="text-white/80">
                    Fill in your details to register for HackFest 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="college" className="text-white">
                        College/University
                      </Label>
                      <Input
                        id="college"
                        value={formData.college}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Enter your college name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year" className="text-white">
                        Year of Study
                      </Label>
                      <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-white">
                        Experience Level
                      </Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="skills" className="text-white">
                      Skills & Technologies
                    </Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="List your programming skills and technologies you know"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectIdea" className="text-white">
                      Project Idea (Optional)
                    </Label>
                    <Textarea
                      id="projectIdea"
                      value={formData.projectIdea}
                      onChange={(e) => handleInputChange("projectIdea", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Briefly describe your project idea or problem you want to solve"
                      rows={3}
                    />
                  </div>
                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-cyan-500"
                    />
                    <Label htmlFor="terms" className="text-white/80 text-sm leading-relaxed">
                      I agree to the{" "}
                      <a href="#" className="text-cyan-400 hover:underline">
                        terms and conditions
                      </a>
                      ,{" "}
                      <a href="#" className="text-cyan-400 hover:underline">
                        privacy policy
                      </a>
                      , and{" "}
                      <a href="#" className="text-cyan-400 hover:underline">
                        code of conduct
                      </a>{" "}
                      of HackFest 2025.
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Registration Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-6 w-6 mr-2 text-green-400" />
                    Registration Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-white">
                      <span>Registration Type</span>
                      <span>Solo (1 member)</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Registration Fee</span>
                      <span>₹{getRegistrationFee()}</span>
                    </div>
                    <div className="border-t border-white/20 pt-3">
                      <div className="flex justify-between text-white font-semibold text-lg">
                        <span>Total Amount</span>
                        <span>₹{getRegistrationFee()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center text-white/80 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                      Certificate for the participant
                    </div>
                    <div className="text-white/60 text-xs">
                      Payment can be completed after form submission via Google Pay, UPI, or bank transfer.
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      isLoading || !formData.fullName || !formData.email || !formData.phone || !formData.agreeTerms
                    }
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isLoading ? "Submitting..." : "Submit Registration"}
                  </Button>
                  <div className="text-center text-white/60 text-xs">
                    By clicking "Submit Registration", you agree to our terms and conditions
                  </div>
                </CardContent>
              </Card>
              {/* What's Included */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 mt-6">
                <CardHeader>
                  <CardTitle className="text-white text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 48-hour hackathon access</li>
                    {/* <li>• Meals and refreshments</li> */}
                    <li>• Mentorship sessions</li>
                    <li>• Networking opportunities</li>
                    {/* <li>• Swag kit and goodies</li> */}
                    <li>• Certificate of participation</li>
                    {/* <li>• Access to workshops</li> */}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
