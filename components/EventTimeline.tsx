"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Code, Trophy, CheckCircle, AlertCircle, Play } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  status: 'upcoming' | 'current' | 'completed'
  icon: React.ReactNode
  color: string
}

export default function EventTimeline() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [currentEvent, setCurrentEvent] = useState<TimelineEvent | null>(null)
  const [isClient, setIsClient] = useState(false)

  const timelineEvents: TimelineEvent[] = [
    {
      id: 'registration',
      title: 'Registration Deadline',
      description: 'Last day to register for the hackathon',
      date: 'July 25, 2025',
      time: '11:59 PM',
      status: 'upcoming',
      icon: <Calendar className="h-6 w-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'day1',
      title: 'Day 1 - Event Start',
      description: 'Opening ceremony, team formation, and project ideation',
      date: 'July 26, 2025',
      time: '9:00 AM',
      status: 'upcoming',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'day2',
      title: 'Day 2 - Event End',
      description: 'Project demos, judging, and award ceremony',
      date: 'July 27, 2025',
      time: '6:00 PM',
      status: 'upcoming',
      icon: <Trophy className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  useEffect(() => {
    setIsClient(true)
    setCurrentTime(new Date())
    
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!currentTime) return
    
    const now = currentTime.getTime()
    
    // Event dates (you can adjust these as needed)
    const registrationDeadline = new Date('2025-07-25T23:59:00').getTime()
    const eventStart = new Date('2025-07-26T09:00:00').getTime()
    const eventEnd = new Date('2025-07-27T18:00:00').getTime()

    let currentEventFound: TimelineEvent | null = null

    if (now < registrationDeadline) {
      currentEventFound = timelineEvents.find(e => e.id === 'registration') || null
    } else if (now >= eventStart && now < eventEnd) {
      currentEventFound = timelineEvents.find(e => e.id === 'day1') || null
    } else if (now >= eventEnd) {
      currentEventFound = timelineEvents.find(e => e.id === 'day2') || null
    }

    setCurrentEvent(currentEventFound)
  }, [currentTime])

  const getTimeUntilEvent = (eventDate: string, eventTime: string) => {
    if (!currentTime) return 'Loading...'
    
    const eventDateTime = new Date(`${eventDate} ${eventTime}`).getTime()
    const now = currentTime.getTime()
    const diff = eventDateTime - now

    if (diff <= 0) {
      return 'Event has started'
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m remaining`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m remaining`
    } else {
      return `${minutes}m remaining`
    }
  }

  const getEventStatus = (event: TimelineEvent) => {
    if (!currentTime) return 'upcoming'
    
    const eventDateTime = new Date(`${event.date} ${event.time}`).getTime()
    const now = currentTime.getTime()
    
    if (event.id === 'day1' && now >= eventDateTime && now < new Date('2025-07-27T18:00:00').getTime()) {
      return 'current'
    } else if (now >= eventDateTime) {
      return 'completed'
    } else {
      return 'upcoming'
    }
  }

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Live Event Timeline</h2>
          <p className="text-xl text-white/90 mb-6">
            Real-time countdown to HackFest 2025
          </p>
          <div className="text-2xl font-mono text-cyan-300 mb-4 bg-black/30 px-6 py-3 rounded-lg inline-block">
            {currentTime ? currentTime.toLocaleString() : 'Loading...'}
          </div>
        </div>

        {/* Current Event Status */}
        {currentEvent && (
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-md border-purple-400/50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentEvent.color} rounded-full flex items-center justify-center shadow-lg`}>
                    {currentEvent.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">{currentEvent.title}</h3>
                    <p className="text-white/90 mb-2 drop-shadow-sm">{currentEvent.description}</p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-red-600/80 text-white border-red-700 shadow-sm">
                        <Play className="h-3 w-3 mr-1" />
                        Live Now
                      </Badge>
                      <span className="text-cyan-300 font-mono drop-shadow-sm">
                        {getTimeUntilEvent(currentEvent.date, currentEvent.time)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {timelineEvents.map((event, index) => {
              const status = getEventStatus(event)
              const timeUntil = getTimeUntilEvent(event.date, event.time)
              
              return (
                <div key={event.id} className="flex items-center space-x-4">
                  {/* Timeline Line */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
                      {status === 'completed' ? (
                        <CheckCircle className="h-6 w-6 text-white" />
                      ) : status === 'current' ? (
                        <Play className="h-6 w-6 text-white" />
                      ) : (
                        event.icon
                      )}
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-16 left-8 w-0.5 h-12 bg-white/30"></div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow">
                    <Card className={`backdrop-blur-md border-white/30 shadow-lg ${
                      status === 'current' 
                        ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 border-purple-400/50' 
                        : 'bg-slate-800/90'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white drop-shadow-sm">{event.title}</h3>
                          <Badge className={
                            status === 'completed' 
                              ? 'bg-green-500/30 text-green-200 border-green-400/50 shadow-sm'
                              : status === 'current'
                              ? 'bg-red-600/80 text-white border-red-700 shadow-sm'
                              : 'bg-yellow-500/30 text-yellow-200 border-yellow-400/50 shadow-sm'
                          }>
                            {status === 'completed' ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Completed
                              </>
                            ) : status === 'current' ? (
                              <>
                                <Play className="h-3 w-3 mr-1" />
                                Live Now
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Upcoming
                              </>
                            )}
                          </Badge>
                        </div>
                        <p className="text-white/90 mb-3 drop-shadow-sm">{event.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-white/80 drop-shadow-sm">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {event.date} at {event.time}
                          </div>
                          <div className="text-cyan-300 font-mono text-sm drop-shadow-sm bg-black/20 px-3 py-1 rounded">
                            {timeUntil}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 