import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-20 gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Dominate Melbourne Search?</h2>
        <p className="text-xl mb-8 opacity-90">Join 500+ local businesses already ranking higher</p>
        
        <div className="flex flex-col items-center gap-6">
          <Link
            href="#demo"
            className="bg-white text-[#FF6B35] px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform shadow-lg inline-flex items-center gap-2"
          >
            Get Your Free Audit
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L12 15L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
          
          <div className="flex items-center gap-2 opacity-90">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.09 8.26L21 9L16 13.88L17.45 21L12 17.27L6.55 21L8 13.88L3 9L9.91 8.26L12 2Z" fill="#FFB800"/>
            </svg>
            <span>90-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
} 