export default function TrustSection() {
  const stats = [
    { value: '17', label: 'Melbourne businesses joined this week' },
    { value: '4.9/5', label: 'Average client rating' },
    { value: '90-day', label: 'Money-back guarantee' },
    { value: '24/7', label: 'Dashboard access' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-[#FF6B35] mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 