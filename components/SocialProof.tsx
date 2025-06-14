'use client'

import { useEffect, useState } from 'react'

const activities = [
  { icon: '🎯', business: 'Sarah\'s Yoga Studio', action: 'just ranked #1 for "yoga fitzroy"', time: '2 min ago' },
  { icon: '📈', business: 'Elite Dental Melbourne', action: 'traffic increased by 156%', time: '14 min ago' },
  { icon: '🏆', business: '@melbfoodie', action: 'reached 10K monthly website visitors', time: '1 hour ago' },
  { icon: '⚡', business: 'Green Thumb Landscaping', action: 'outranked 3 competitors this week', time: '3 hours ago' },
  { icon: '🚀', business: 'Paws & Claws Vet', action: 'bookings increased by 89%', time: '5 hours ago' },
  { icon: '💎', business: 'Luxe Hair Studio', action: 'now ranking for 25 keywords', time: '8 hours ago' }
]

export default function SocialProof() {
  const [displayedActivities, setDisplayedActivities] = useState(activities.slice(0, 3))
  const [currentIndex, setCurrentIndex] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % activities.length
        const newActivity = activities[nextIndex]
        
        setDisplayedActivities(current => [newActivity, ...current.slice(0, 2)])
        
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-gray-900">Live Activity</span>
          </div>
          
          <div className="space-y-3">
            {displayedActivities.map((activity, index) => (
              <div
                key={`${activity.business}-${index}`}
                className="flex items-center gap-4 bg-white p-4 rounded-lg animate-in slide-in-from-top-2 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{activity.icon}</span>
                <span className="flex-1 text-gray-700">
                  <strong className="text-gray-900">{activity.business}</strong> {activity.action}
                </span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 