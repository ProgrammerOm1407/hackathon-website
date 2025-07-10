import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Trophy, Users, Code, Zap, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">HackFest 2025</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#schedule" className="text-white/80 hover:text-white transition-colors">
              Schedule
            </a>
            <a href="#rules" className="text-white/80 hover:text-white transition-colors">
              Rules
            </a>
            <a href="#prizes" className="text-white/80 hover:text-white transition-colors">
              Prizes
            </a>
          </div>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Register Now
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Register Now - ₹50 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent"
                >
                  Learn More
                </Button>
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
                  All participants will receive a certificate of participation. Top teams will get special recognition and internship/mentorship opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Event Schedule</h2>
            <p className="text-xl text-white/80">48 hours of non-stop coding and innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">Registration Deadline</h3>
                  <p className="text-white/80">Last day to register for the hackathon</p>
                  <p className="text-cyan-400 font-medium">July 18, 2025 - 11:59 PM (Friday)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">Day 1 - Event Start</h3>
                  <p className="text-white/80">Opening ceremony, team formation, and project ideation</p>
                  <p className="text-blue-400 font-medium">July 19, 2025 - 9:00 AM (Saturday)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">Day 2 - Event End</h3>
                  <p className="text-white/80">Project demos, judging, and award ceremony</p>
                  <p className="text-purple-400 font-medium">July 20, 2025 - 6:00 PM (Sunday)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <span className="font-medium">Digital & Physical Copy</span>
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
              Registration deadline: July 18th, 2025. Limited spots available!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">HackFest 2025</span>
          </div>
          <p className="text-white/60">© 2025 HackFest. All rights reserved. Built with passion for innovation.</p>
        </div>
      </footer>
    </div>
  )
}
