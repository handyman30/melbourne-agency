'use client'

import { useState } from 'react'
import Link from 'next/link'

interface LinkItem {
  id: string
  title: string
  url: string
  clicks: number
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

export default function LinkInBioBuilder() {
  const [links, setLinks] = useState<LinkItem[]>([
    { id: '1', title: '🛍️ My Fashion Store', url: 'https://shop.example.com', clicks: 234 },
    { id: '2', title: '📸 Latest Instagram Post', url: 'https://instagram.com/p/latest', clicks: 567 },
    { id: '3', title: '🎥 New YouTube Video', url: 'https://youtube.com/watch?v=abc', clicks: 123 }
  ])

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { platform: 'instagram', url: 'https://instagram.com/yourusername', icon: '📷' },
    { platform: 'tiktok', url: 'https://tiktok.com/@yourusername', icon: '🎵' },
    { platform: 'youtube', url: 'https://youtube.com/c/yourchannel', icon: '🎥' }
  ])

  const [profileData, setProfileData] = useState({
    name: 'Sarah Melbourne',
    bio: 'Melbourne lifestyle blogger 🌟 Fashion, Food & Travel',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
  })

  const [newLink, setNewLink] = useState({ title: '', url: '' })
  const [showPreview, setShowPreview] = useState(false)

  const addLink = () => {
    if (newLink.title && newLink.url) {
      setLinks([...links, {
        id: Date.now().toString(),
        title: newLink.title,
        url: newLink.url,
        clicks: 0
      }])
      setNewLink({ title: '', url: '' })
    }
  }

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id))
  }

  const moveLink = (id: string, direction: 'up' | 'down') => {
    const index = links.findIndex(link => link.id === id)
    if (index === -1) return

    const newLinks = [...links]
    if (direction === 'up' && index > 0) {
      [newLinks[index], newLinks[index - 1]] = [newLinks[index - 1], newLinks[index]]
    } else if (direction === 'down' && index < links.length - 1) {
      [newLinks[index], newLinks[index + 1]] = [newLinks[index + 1], newLinks[index]]
    }
    setLinks(newLinks)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">RankMelbourne</span>
              <span className="text-sm text-gray-500">Link-in-Bio</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4C6 4 2.73 6.11 1 9.5C2.73 12.89 6 15 10 15C14 15 17.27 12.89 19 9.5C17.27 6.11 14 4 10 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {showPreview ? 'Hide' : 'Show'} Preview
              </button>
              <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold">
                Publish Changes
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Links</h2>
              
              {/* Add new link */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Link title"
                  value={newLink.title}
                  onChange={(e) => setNewLink({...newLink, title: e.target.value})}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={newLink.url}
                  onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                />
                <button
                  onClick={addLink}
                  className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E55A2B] transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Links list */}
              <div className="space-y-3">
                {links.map((link, index) => (
                  <div key={link.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveLink(link.id, 'up')}
                        disabled={index === 0}
                        className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveLink(link.id, 'down')}
                        disabled={index === links.length - 1}
                        className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                      >
                        ↓
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{link.title}</div>
                      <div className="text-sm text-gray-500">{link.url}</div>
                      <div className="text-xs text-gray-400 mt-1">{link.clicks} clicks</div>
                    </div>
                    <button
                      onClick={() => removeLink(link.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">924</div>
                  <div className="text-sm text-gray-600">Total Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">3.2K</div>
                  <div className="text-sm text-gray-600">Page Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">28.9%</div>
                  <div className="text-sm text-gray-600">CTR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <div className="text-center mb-4">
                <span className="text-sm text-gray-500">Live Preview</span>
              </div>
              
              {/* Phone Frame */}
              <div className="mx-auto w-full max-w-sm">
                <div className="bg-gray-900 rounded-[3rem] p-6 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Phone Status Bar */}
                    <div className="bg-white px-6 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <span>●●●●</span>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      {/* Profile Section */}
                      <div className="text-center py-6">
                        <img
                          src={profileData.avatar}
                          alt={profileData.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">{profileData.name}</h3>
                        <p className="text-gray-600 text-sm">{profileData.bio}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mb-6">
                        {socialLinks.map((social) => (
                          <a
                            key={social.platform}
                            href={social.url}
                            className="text-2xl hover:scale-110 transition-transform"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="space-y-3">
                        {links.map((link) => (
                          <a
                            key={link.id}
                            href={link.url}
                            className="block w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-center font-medium transition-colors"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="text-center mt-8 text-xs text-gray-400">
                        Powered by RankMelbourne
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 