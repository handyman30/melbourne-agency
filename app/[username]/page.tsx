export default function PublicLinkPage({ params }: { params: { username: string } }) {
  // In a real app, this would fetch data from a database
  const mockData = {
    username: params.username,
    name: 'Sarah Melbourne',
    bio: 'Melbourne lifestyle blogger 🌟 Fashion, Food & Travel',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    links: [
      { id: '1', title: '🛍️ My Fashion Store', url: 'https://shop.example.com' },
      { id: '2', title: '📸 Latest Instagram Post', url: 'https://instagram.com/p/latest' },
      { id: '3', title: '🎥 New YouTube Video', url: 'https://youtube.com/watch?v=abc' },
      { id: '4', title: '📧 Subscribe to Newsletter', url: 'https://newsletter.example.com' }
    ],
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/sarahmelb', icon: '📷' },
      { platform: 'tiktok', url: 'https://tiktok.com/@sarahmelb', icon: '🎵' },
      { platform: 'youtube', url: 'https://youtube.com/c/sarahmelb', icon: '🎥' }
    ],
    theme: {
      backgroundColor: '#f9fafb',
      buttonColor: '#FF6B35',
      textColor: '#1f2937'
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: mockData.theme.backgroundColor }}>
      <div className="max-w-lg mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src={mockData.avatar}
            alt={mockData.name}
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg"
          />
          <h1 className="text-2xl font-bold mb-2" style={{ color: mockData.theme.textColor }}>
            {mockData.name}
          </h1>
          <p className="text-gray-600 text-sm px-8">{mockData.bio}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {mockData.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:scale-110 transition-transform"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Main Links */}
        <div className="space-y-4">
          {mockData.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 text-center font-medium rounded-xl shadow-sm hover:-translate-y-0.5 transition-all"
              style={{ 
                backgroundColor: mockData.theme.buttonColor,
                color: 'white'
              }}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <a 
            href="/"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Create your own link-in-bio with RankMelbourne
          </a>
        </div>
      </div>
    </div>
  )
} 