export default function Services() {
  const modules = [
    {
      category: "For Influencers & Creators",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#FFE5DB"/>
          <path d="M24 16C20.686 16 18 18.686 18 22C18 25.314 20.686 28 24 28C27.314 28 30 25.314 30 22C30 18.686 27.314 16 24 16Z" fill="#FF6B35"/>
          <path d="M24 12C18.477 12 14 16.477 14 22V26C14 31.523 18.477 36 24 36C29.523 36 34 31.523 34 26V22C34 16.477 29.523 12 24 12ZM24 32C20.686 32 18 29.314 18 26V22C18 18.686 20.686 16 24 16C27.314 16 30 18.686 30 22V26C30 29.314 27.314 32 24 32Z" fill="#FF6B35" opacity="0.3"/>
        </svg>
      ),
      modules: [
        {
          name: "Smart Link-in-Bio",
          features: ["SEO-optimized pages", "Shoppable posts", "Analytics", "Custom domains"],
          icon: "🔗"
        },
        {
          name: "Media Kit Generator",
          features: ["Auto-pull social stats", "PDF export", "Brand templates", "View tracking"],
          icon: "📊"
        },
        {
          name: "Content AI",
          features: ["Caption generator", "Hashtag research", "Best posting times", "Cross-posting"],
          icon: "🤖"
        }
      ]
    },
    {
      category: "For Local Businesses",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#E3F2FD"/>
          <path d="M24 12L12 20V36H20V28H28V36H36V20L24 12Z" fill="#2196F3"/>
          <path d="M20 24H28V28H20V24Z" fill="#2196F3" opacity="0.3"/>
        </svg>
      ),
      modules: [
        {
          name: "Smart Bookings",
          features: ["Online scheduling", "SMS reminders", "Payment processing", "Staff calendar"],
          icon: "📅"
        },
        {
          name: "Review Manager",
          features: ["Auto-collection", "AI responses", "Google integration", "Testimonials"],
          icon: "⭐"
        },
        {
          name: "Customer Hub",
          features: ["Simple CRM", "Email marketing", "Loyalty programs", "Birthday offers"],
          icon: "👥"
        }
      ]
    },
    {
      category: "For Everyone",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#F3E5F5"/>
          <path d="M24 14L30 20L24 26L18 20L24 14Z" fill="#9C27B0"/>
          <path d="M14 24L20 30L26 24L20 18L14 24Z" fill="#9C27B0" opacity="0.5"/>
          <path d="M34 24L28 30L22 24L28 18L34 24Z" fill="#9C27B0" opacity="0.5"/>
        </svg>
      ),
      modules: [
        {
          name: "SEO Dashboard",
          features: ["Live rankings", "Competitor tracking", "Traffic analytics", "Revenue impact"],
          icon: "🔍"
        },
        {
          name: "Marketing Suite",
          features: ["Email campaigns", "SMS marketing", "Social scheduler", "Automation"],
          icon: "📧"
        },
        {
          name: "Analytics Center",
          features: ["Unified reporting", "Custom dashboards", "Export to PDF", "API access"],
          icon: "📈"
        }
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to <span className="gradient-text">Grow</span>
          </h2>
          <p className="text-xl text-gray-600">
            One platform, endless possibilities. Pick the modules that fit your business.
          </p>
        </div>

        <div className="space-y-16">
          {modules.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                <div>{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{module.name}</h4>
                      <span className="text-2xl">{module.icon}</span>
                    </div>
                    <ul className="space-y-2">
                      {module.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you need? We'll build it for you.
          </p>
          <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform shadow-lg">
            Request Custom Module →
          </button>
        </div>
      </div>
    </section>
  )
} 