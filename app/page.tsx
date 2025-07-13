import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Trophy, Users, Code, Zap, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import EventTimeline from "@/components/EventTimeline"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-black/90 via-purple-900/80 to-black/90 backdrop-blur-xl z-50 border-b border-white/20 shadow-2xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Code className="h-10 w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent">
                HackFest
              </span>
              <span className="text-lg font-semibold text-white/90 ml-1">2025</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">About</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#schedule" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">Schedule</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#problem" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">Problem</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#rules" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">Rules</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#prizes" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">Prizes</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#terms" className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group">
              <span className="relative z-10">Terms</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          <Link href="/register">
            <Button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 border border-cyan-400/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Register Now</span>
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30">
                48 Hours of Innovation
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                HackFest
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the ultimate coding challenge where innovation meets creativity. Build, compete, and earn certificates!
              </p>
              <div className="flex justify-center items-center mb-12">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 border-2 border-cyan-400/30 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Register Now - ₹50</span>
                    <ArrowRight className="ml-3 h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">48</div>
                  <div className="text-white/60">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Certificate</div>
                  <div className="text-white/60">for all participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-white/60">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">24</div>
                  <div className="text-white/60">Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">₹50/₹70</div>
                  <div className="text-white/60">Registration Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About HackFest 2025</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The premier hackathon event bringing together the brightest minds in technology to solve real-world
              problems
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Build cutting-edge solutions using the latest technologies including AI, blockchain, IoT, and more.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Work with talented individuals from diverse backgrounds and skill sets to create amazing projects.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <Trophy className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  All participants will receive a certificate of participation. Top teams will get special recognition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 px-4 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-indigo-900/80">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Problem Statement</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build any type of website that solves a real-world problem or showcases your creativity
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Problem Statement Card */}
            <Card className="bg-gradient-to-br from-cyan-600/80 via-blue-600/70 to-purple-600/70 backdrop-blur-xl border-cyan-400/40 text-white shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Build Any Website</CardTitle>
                    <CardDescription className="text-cyan-200">No Specific Theme Required</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-cyan-300">What You Can Build:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>E-commerce platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Social media applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Educational platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Healthcare applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Entertainment websites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Utility tools & dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Creative portfolios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Any innovative web solution</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Submission Requirements Card */}
            <Card className="bg-gradient-to-br from-purple-600/80 via-pink-600/70 to-red-600/70 backdrop-blur-xl border-purple-400/40 text-white shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Submission Requirements</CardTitle>
                    <CardDescription className="text-purple-200">Must Submit Both Links</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-300">Required Submissions:</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-purple-400 font-bold mr-2">🔗</span>
                      <div>
                        <span className="font-semibold">Code Repository Link:</span>
                        <p className="text-sm text-white/70 mt-1">GitHub, GitLab, or any public repository containing your source code</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 font-bold mr-2">🌐</span>
                      <div>
                        <span className="font-semibold">Live Preview Link:</span>
                        <p className="text-sm text-white/70 mt-1">Deployed website URL (Netlify, Vercel, Heroku, etc.)</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">⚠️ Important</h4>
                  <p className="text-white/90 text-sm">
                    Both links must be accessible and working. Incomplete submissions will be disqualified.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Evaluation Criteria */}
          <div className="mt-12">
            <Card className="bg-gradient-to-br from-emerald-600/80 via-teal-600/70 to-cyan-600/70 backdrop-blur-xl border-emerald-400/40 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-3xl">Evaluation Criteria</CardTitle>
                <CardDescription className="text-emerald-200 text-lg">How your project will be judged</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">30%</div>
                    <h4 className="font-semibold mb-2">Innovation & Creativity</h4>
                    <p className="text-sm text-white/70">Unique approach and creative solutions</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">25%</div>
                    <h4 className="font-semibold mb-2">Technical Implementation</h4>
                    <p className="text-sm text-white/70">Code quality and technical excellence</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">25%</div>
                    <h4 className="font-semibold mb-2">Problem Solving</h4>
                    <p className="text-sm text-white/70">How well the solution addresses the problem</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">20%</div>
                    <h4 className="font-semibold mb-2">Presentation Quality</h4>
                    <p className="text-sm text-white/70">Demo presentation and documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Timeline Section */}
      <section id="schedule">
        <EventTimeline />
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Rules & Guidelines</h2>
            <p className="text-xl text-white/80">Fair play ensures everyone has a great experience</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  Team Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Teams of 1-2 members</p>
                <p>• Cross-functional teams encouraged</p>
                <p>• Solo participation allowed</p>
                <p>• Team formation help available</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-6 w-6 text-cyan-400 mr-2" />
                  Development Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Code must be written during the event</p>
                <p>• Open source libraries allowed</p>
                <p>• Pre-existing code prohibited</p>
                <p>• All work must be original</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-green-400 mr-2" />
                  Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Submit before deadline</p>
                <p>• Include demo video</p>
                <p>• Provide source code</p>
                <p>• Document your solution</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-6 w-6 text-purple-400 mr-2" />
                  Judging Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Innovation & Creativity (30%)</p>
                <p>• Technical Implementation (25%)</p>
                <p>• Problem Solving (25%)</p>
                <p>• Presentation Quality (20%)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-indigo-900/80">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Certificates & Rewards</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Every participant gets recognized. Top performers receive special certificates and opportunities.
            </p>
          </div>
          
          {/* Participation Certificate for Everyone */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-emerald-600/80 via-teal-600/70 to-cyan-600/70 backdrop-blur-xl border-emerald-400/40 text-white text-center shadow-2xl">
              <CardHeader className="pb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-4xl font-bold mb-2">Participation Certificate</CardTitle>
                <CardDescription className="text-emerald-200 text-xl font-medium">For All Participants</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Every participant who completes the hackathon will receive an official participation certificate, 
                  recognizing their dedication and contribution to innovation.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Official Recognition</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Portfolio Enhancement</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Digital Copy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Special Recognition</h3>
            <p className="text-lg text-white/70">Top performing teams receive additional certificates and opportunities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-600/80 via-amber-600/70 to-orange-600/70 backdrop-blur-xl border-yellow-400/40 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">1st Place</CardTitle>
                <CardDescription className="text-yellow-200 text-lg font-medium">Winner</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center justify-center space-x-2">
                    <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Winner Certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-600/80 via-slate-600/70 to-gray-700/70 backdrop-blur-xl border-gray-400/40 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-400 via-slate-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">2nd Place</CardTitle>
                <CardDescription className="text-gray-300 text-lg font-medium">Runner-up</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center justify-center space-x-2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-700/80 via-red-600/70 to-pink-600/70 backdrop-blur-xl border-orange-500/40 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">3rd Place</CardTitle>
                <CardDescription className="text-orange-300 text-lg font-medium">Third Place</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center justify-center space-x-2">
                    <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h2>
            <p className="text-xl text-white/80">Please read carefully before registering</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Registration & Payment</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-red-400 font-bold mr-2">⚠</span>
                      <span><strong>Refund Policy:</strong> Registration fees are non-refundable except in case of event cancellation by organizers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Registration is confirmed only after successful payment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Registration fees: Solo participants ₹50, Team participants ₹70.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>All payments must be completed before the registration deadline.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Event Participation</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Participants must be present for the entire duration of the event.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>All code must be written during the hackathon period.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Use of pre-existing code is strictly prohibited.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Teams must submit their projects before the deadline.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Code of Conduct</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>All participants must maintain professional behavior.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Harassment or discrimination of any kind will not be tolerated.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Organizers reserve the right to disqualify participants for misconduct.</span>
                    </li>
                  </ul>
                </div>

                {/* <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Liability & Disclaimers</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Organizers are not responsible for any technical issues during the event.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Participants are responsible for their own equipment and internet connection.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <span>Event schedule may be subject to change with prior notice.</span>
                    </li>
                  </ul>
                </div> */}

                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mt-6">
                  <h4 className="text-lg font-bold text-red-400 mb-2">Important Notice</h4>
                  <p className="text-white/90">
                    By registering for this event, you acknowledge that you have read, understood, and agree to all terms and conditions stated above. 
                    <strong className="text-red-400"> Refunds will only be provided if the event is canceled by the organizers.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Challenge?</h2>
            <p className="text-xl text-white/80 mb-8">
              Don't miss out on this incredible opportunity to showcase your skills, learn from experts, and win amazing
              prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Register Now - ₹50 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-white/60 mt-4 text-sm">
              Registration deadline: July 25th, 2025. Limited spots available!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-black/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Code className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">HackFest 2025</span>
              </div>
              <p className="text-white/70 text-sm">
                The premier hackathon event bringing together the brightest minds in technology.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+917058653500" className="text-white/80 hover:text-cyan-400 transition-colors">
                    +91 7058653500
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:triowavedigital@gmail.com" className="text-white/80 hover:text-cyan-400 transition-colors">
                    triowavedigital@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-white/70 hover:text-cyan-400 transition-colors">About</a>
                <a href="#problem" className="block text-white/70 hover:text-cyan-400 transition-colors">Problem</a>
                <a href="#schedule" className="block text-white/70 hover:text-cyan-400 transition-colors">Schedule</a>
                <a href="#terms" className="block text-white/70 hover:text-cyan-400 transition-colors">Terms</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60">© 2025 HackFest. All rights reserved. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
