export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, Melb Eats",
      content: "The platform is incredible! My link-in-bio gets 3x more clicks than Linktree ever did.",
      rating: 5
    },
    {
      name: "James Wilson", 
      role: "Owner, Elite Fitness",
      content: "Finally, SEO that actually makes sense. I can see exactly what's working.",
      rating: 5
    },
    {
      name: "Emma Martinez",
      role: "@emmadesigns",
      content: "Turned my 20K followers into paying clients. Best investment I've made!",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by <span className="gradient-text">Melbourne Businesses</span>
          </h2>
          <p className="text-xl text-gray-600">Join 500+ happy customers growing with RankMelbourne</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 