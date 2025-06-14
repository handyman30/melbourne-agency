'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CaseStudies() {
  const caseStudies = [
    {
      name: "Melbourne Fashion Week",
      type: "Influencer",
      metrics: [
        { label: "Followers to Site", value: "+412%" },
        { label: "Brand Collabs", value: "8 new" },
        { label: "Revenue", value: "$24K/mo" }
      ],
      quote: "RankMelbourne helped me turn my Instagram following into a real business.",
      author: "@fashionmelb"
    },
    {
      name: "Elite Physio Carlton",
      type: "Local Business",
      metrics: [
        { label: "Bookings", value: "+312%" },
        { label: "Google Rank", value: "#1" },
        { label: "Revenue", value: "+$18K/mo" }
      ],
      quote: "Our calendar is now booked 3 weeks in advance. Game changer!",
      author: "Dr. James Chen"
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600">See how we've transformed visibility into revenue</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{study.name}</h3>
                <span className="text-sm bg-[#FF6B35] text-white px-3 py-1 rounded-full">{study.type}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-[#FF6B35]">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="italic text-gray-700 mb-2">
                "{study.quote}"
              </blockquote>
              <cite className="text-sm text-gray-600">– {study.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 