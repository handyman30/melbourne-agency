'use client'

export default function ChatWidget() {
  const handleChat = () => {
    alert('Chat feature coming soon! Email us at hello@rankmelbourne.com.au')
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleChat}
        className="w-16 h-16 rounded-full gradient-primary text-white shadow-2xl hover:scale-110 transition-transform relative"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
          <path d="M12 6C9.24 6 7 8.24 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14C11.45 14 11 14.45 11 15V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V15.92C14.84 15.48 16.5 13.92 16.96 12.06C16.99 11.87 17 11.69 17 11.5C17 8.46 14.54 6 12 6Z" fill="currentColor"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full text-xs font-bold flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  )
} 