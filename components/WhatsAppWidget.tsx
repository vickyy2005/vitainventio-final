'use client'

import { useEffect, useState } from 'react'
import { X, Send } from 'lucide-react'

export function WhatsAppWidget() {
  const [showChat, setShowChat] = useState(false)
  const [hasNotification, setHasNotification] = useState(false)

  useEffect(() => {
    // Show a notification badge after 5 seconds to prompt interaction
    const timer = setTimeout(() => {
      setHasNotification(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleToggle = () => {
    setShowChat(!showChat)
    if (hasNotification) {
      setHasNotification(false)
    }
  }

  const handleStartChat = () => {
    const phoneNumber = '919175723038'
    const message = encodeURIComponent("Hello Vita Inventio, I'd like to discuss a project!")
    const url = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="whatsapp-widget-container">
      {/* Floating Chat Window */}
      <div className={`wa-chat-window ${showChat ? 'wa-chat-window-open' : ''}`}>
        <div className="wa-chat-header">
          <div className="wa-chat-profile">
            <div className="wa-chat-avatar">
              <img src="/logo-symbol.png" alt="Vita Inventio Logo" />
              <span className="wa-status-dot" />
            </div>
            <div className="wa-chat-meta">
              <strong>Vita Inventio</strong>
              <span>Typically replies in minutes</span>
            </div>
          </div>
          <button className="wa-close-btn" onClick={() => setShowChat(false)} aria-label="Close Chat">
            <X size={16} />
          </button>
        </div>

        <div className="wa-chat-body">
          <div className="wa-chat-bubble">
            <div className="wa-chat-sender">Vita Inventio</div>
            <p>Hi there! How can we help you build your next digital product? 🚀</p>
            <span className="wa-chat-time">Just now</span>
          </div>
        </div>

        <div className="wa-chat-footer">
          <button className="wa-start-btn" onClick={handleStartChat}>
            Start Chat <Send size={14} style={{ marginLeft: '6px' }} />
          </button>
        </div>
      </div>

      {/* Floating Bubble Button */}
      <button 
        className={`wa-bubble-btn ${hasNotification ? 'wa-bubble-pulse' : ''}`}
        onClick={handleToggle}
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 2.012 14.125.99 11.5.992c-5.437 0-9.862 4.371-9.866 9.8.001 2.007.525 3.96 1.515 5.674L2.09 20.328l4.557-1.174zM16.75 14.54c-.284-.141-1.682-.83-1.947-.926-.263-.096-.456-.141-.647.142-.19.283-.739.927-.905 1.114-.167.188-.334.212-.618.071-.284-.141-1.2-.442-2.285-1.41-1.085-.968-1.82-2.164-2.032-2.518-.213-.353-.022-.544.119-.685.127-.127.284-.332.426-.497.142-.166.19-.283.284-.472.095-.188.047-.354-.024-.497-.071-.141-.648-1.56-.887-2.132-.233-.559-.489-.482-.647-.49l-.554-.01c-.19 0-.501.071-.763.353-.263.283-1.004.98-1.004 2.39 0 1.41 1.028 2.769 1.17 2.958.143.188 2.023 3.09 4.899 4.331.684.296 1.218.473 1.635.605.69.219 1.319.188 1.815.114.552-.082 1.683-.687 1.921-1.353.238-.667.238-1.238.167-1.354-.071-.115-.263-.19-.548-.33z"/>
        </svg>
        {hasNotification && <span className="wa-notif-dot">1</span>}
      </button>
    </div>
  )
}
