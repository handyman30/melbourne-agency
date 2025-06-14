import Link from 'next/link';

export default function LinkInBioShowcase() {
  const testimonials = [
    {
      name: "Emma Chen",
      handle: "@emmamelb",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote: "Switched from Linktree and my clicks went up 40%! The SEO optimization actually works.",
      followers: "15.2K"
    },
    {
      name: "Jake Wilson", 
      handle: "@jakefitmelb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote: "Love the analytics! Now I know exactly what my audience wants to see.",
      followers: "32.8K"
    },
    {
      name: "Lisa Park",
      handle: "@lisaeatsmelb",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      quote: "The booking integration saved my restaurant. Customers book directly from my bio!",
      followers: "28.5K"
    }
  ];

  const features = [
    {
      icon: '🔍',
      title: 'SEO-Optimized Pages',
      description: 'Rank #1 for "[yourname] Melbourne" searches'
    },
    {
      icon: '📍',
      title: 'Local Discovery',
      description: 'Get found by Melbourne locals searching nearby'
    },
    {
      icon: '📅',
      title: 'Built-in Bookings',
      description: 'Accept bookings & payments directly'
    },
    {
      icon: '🤝',
      title: 'Collab Network',
      description: 'Connect with other Melbourne creators'
    }
  ];

  return (
    <section id="link-in-bio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Value Prop Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>🚀</span>
            <span>Beyond Linktree: The Melbourne Growth Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Don't Just Share Links.
            <span className="block text-[#FF6B35]">Dominate Melbourne Search.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While Linktree gives you a simple link page, RankMelbourne makes you discoverable. 
            Get found in Google, connect with local businesses, and grow your Melbourne audience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Melbourne Creators Choose RankMelbourne</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">
                    <span className="text-gray-500">Linktree</span>
                  </th>
                  <th className="text-center py-4 px-4">
                    <span className="text-[#FF6B35] font-bold">RankMelbourne</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">SEO-Optimized for Google</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Local Melbourne Discovery</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Built-in Booking System</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Collaboration Network</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Local Business Analytics</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Melbourne-Focused</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-sm">rmelb.co/sarahchen</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" 
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">Sarah Chen</h4>
                    <p className="text-gray-400">Melbourne Fashion Blogger</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-gray-300">📍 Melbourne CBD</span>
                      <span className="text-gray-300">✨ 15.2K followers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a className="block bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white py-4 px-6 rounded-xl font-semibold text-center hover:scale-105 transition-transform">
                  🛍️ Shop My Looks
                </a>
                <a className="block bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-gray-700 transition-colors">
                  📸 Book a Photoshoot
                </a>
                <a className="block bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-gray-700 transition-colors">
                  🎯 Brand Collaborations
                </a>
                <a className="block bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-gray-700 transition-colors">
                  ☕ Coffee Chat (Melbourne CBD)
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Views today</span>
                  <span className="text-white font-bold">1,247</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Clicks today</span>
                  <span className="text-white font-bold">342</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Bookings</span>
                  <span className="text-green-400 font-bold">5 new</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6">
              The Link-in-Bio That Actually
              <span className="text-[#FF6B35]"> Grows Your Business</span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Get Found in Google</h4>
                  <p className="text-gray-600">Your RankMelbourne page is SEO-optimized to appear when people search for you or your services in Melbourne.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Accept Bookings Instantly</h4>
                  <p className="text-gray-600">Built-in booking system with payments, calendar sync, and automated reminders.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Connect with Local Brands</h4>
                  <p className="text-gray-600">Get discovered by Melbourne businesses looking for influencers and creators to collaborate with.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/link-in-bio"
                className="gradient-primary text-white py-3 px-8 rounded-full font-semibold text-center hover:-translate-y-0.5 transition-transform"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/sarahmelb"
                className="border-2 border-[#FF6B35] text-[#FF6B35] py-3 px-8 rounded-full font-semibold text-center hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                See Live Example
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Melbourne Creators Love RankMelbourne</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.handle} • {testimonial.followers} followers</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 