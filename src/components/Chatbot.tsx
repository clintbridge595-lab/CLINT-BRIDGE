import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Menu,
  Send,
  Paperclip,
  Smile,
  ThumbsUp,
  X,
  Phone,
  Mail,
  ArrowUpRight,
  RefreshCw,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp?: string;
  quickReplies?: string[];
  ctaAction?: {
    label: string;
    url: string;
  };
}

// Friendly SVG Avatar matching the Customer Support agent in reference screenshot
const SupportAvatar: React.FC<{ size?: string }> = ({ size = 'w-9 h-9' }) => (
  <div
    className={`${size} rounded-full bg-slate-100 overflow-hidden flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs`}
  >
    <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
      <rect width="36" height="36" fill="#F1F5F9" />
      {/* Head */}
      <circle cx="18" cy="14" r="5.5" fill="#FDBA74" />
      {/* Hair */}
      <path
        d="M12.5 13.5C12.5 10 14.8 7.5 18 7.5C21.2 7.5 23.5 10 23.5 13.5C23.5 14 23 14.5 22.2 14C21.5 13 20 11.8 18 11.8C16 11.8 14.5 13 13.8 14C13 14.5 12.5 14 12.5 13.5Z"
        fill="#334155"
      />
      {/* Shirt & Shoulders */}
      <path
        d="M8 32C8 26.5 12.5 22 18 22C23.5 22 28 26.5 28 32V36H8V32Z"
        fill="#254A34"
      />
      {/* Collar */}
      <path d="M15 22L18 26.5L21 22H15Z" fill="#C6FF1A" />
    </svg>
  </div>
);

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialQuickReplies = [
    'I have a question',
    'Tell me more about services',
    'Get a Free Quote',
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: '👋 Hi! How can we help you today with CLINT BRIDGE digital agency services?',
      timestamp: 'Just now',
      quickReplies: initialQuickReplies,
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowBadge(false);
    }
  }, [messages, isOpen]);

  // AI Knowledge Engine for CLINT BRIDGE
  const getAIResponse = (
    userText: string
  ): {
    reply: string;
    quickReplies?: string[];
    ctaAction?: { label: string; url: string };
  } => {
    const text = userText.toLowerCase().trim();

    // 1. "Get a Free Quote" / Audit requests
    if (
      text.includes('audit') ||
      text.includes('quote') ||
      text.includes('free quote') ||
      text.includes('proposal')
    ) {
      return {
        reply:
          "Great! A CLINT BRIDGE Project Consultation includes a complete review of your website requirements, competitor positioning, and lead funnels. We provide a clear roadmap and fixed estimate within 2 business hours.\n\nReady to get started? Fill out our quote form or chat with us directly on WhatsApp!",
        quickReplies: [
          'WhatsApp (0311-2713755)',
          'Tell me more about services',
          'Pricing Packages',
        ],
        ctaAction: {
          label: 'Chat on WhatsApp',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20business.',
        },
      };
    }

    // 2. Services overview
    if (
      text.includes('service') ||
      text.includes('services') ||
      text.includes('what do you do') ||
      text.includes('offer')
    ) {
      return {
        reply:
          'CLINT BRIDGE specializes in 8 core digital solutions:\n\n1. 💻 Website Design & Development: Fast, mobile-first React platforms with high conversion rates.\n2. 📱 Social Media & Content Marketing: High-converting creative campaigns.\n3. 🎨 Branding & Logo Design: Complete brand identity systems.\n4. 🔍 Search Engine Optimization: Local and national organic ranking.\n5. 📍 Google Business Profile: Local 3-Pack Maps optimization.\n6. 💬 WhatsApp Funnels: Direct automated lead routing.\n7. 🛒 E-commerce Development: Secure online shopping platforms.\n8. ☁️ Cloud Hosting & Maintenance: High uptime and daily backups.',
        quickReplies: [
          'Get a Free Quote',
          'Pricing Packages',
          'View Portfolio Work',
          'Contact Details',
        ],
        ctaAction: {
          label: 'Chat with Lead Strategist',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20want%20to%20learn%20more%20about%20your%20services.',
        },
      };
    }

    // 3. General inquiries
    if (
      text.includes('question') ||
      text.includes('sawal') ||
      text.includes('help')
    ) {
      return {
        reply:
          "We're here to help! What would you like to know?\n\n• Project timelines (standard delivery is 3 to 14 days)\n• Pricing & transparent packages\n• Live portfolio websites\n• Speaking directly with our team in Karachi",
        quickReplies: [
          'Pricing Packages',
          'Project Timeline',
          'Get a Free Quote',
          'Call Support',
        ],
      };
    }

    // 4. Paid Ads & Lead Generation
    if (
      text.includes('ad') ||
      text.includes('ads') ||
      text.includes('meta') ||
      text.includes('google') ||
      text.includes('lead') ||
      text.includes('marketing')
    ) {
      return {
        reply:
          'Our marketing team crafts Meta (Facebook/Instagram) and Google Ads campaigns tailored for service businesses and e-commerce stores in Pakistan and internationally. We write conversion copy, design scroll-stopping creatives, and route leads straight to WhatsApp.',
        quickReplies: [
          'Get a Free Quote',
          'Pricing Packages',
          'Chat on WhatsApp',
        ],
        ctaAction: {
          label: 'Discuss Marketing Campaigns',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20am%20interested%20in%20marketing%20and%20ads.',
        },
      };
    }

    // 5. Pricing & Packages
    if (
      text.includes('price') ||
      text.includes('pricing') ||
      text.includes('cost') ||
      text.includes('package') ||
      text.includes('kitna') ||
      text.includes('paisa') ||
      text.includes('flagship') ||
      text.includes('digital growth')
    ) {
      return {
        reply:
          'CLINT BRIDGE offers clear, transparent packages with zero hidden hourly fees:\n\n⭐ COMPLETE DIGITAL GROWTH (PKR 200,000 — Flagship):\nOur turnkey all-in-one transformation. Includes: 8-Page Custom Website + Android MVP Mobile App + Complete Corporate Branding + Meta Ads Setup + 12 Social Posts & 4 Reels + Google Maps SEO + WhatsApp Business + 30-Day Support.\n\n• STARTER (PKR 30,000): Complete responsive website, custom contact forms, WhatsApp integration, and hosting setup.\n• BUSINESS (PKR 40,000): Up to 5 pages, custom 3D web UI/UX, Google Maps local SEO, and WhatsApp funnel.\n• GROWTH PARTNER (PKR 60,000): Custom web platform, priority maintenance, Google Ads & Meta conversion setup, and monthly CRO.',
        quickReplies: [
          'Flagship (PKR 200k)',
          'Get a Free Quote',
          'Starter (PKR 30k)',
          'Business (PKR 40k)',
          'WhatsApp Us',
        ],
        ctaAction: {
          label: 'Inquire on WhatsApp',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20would%20like%20to%20discuss%20your%20COMPLETE%20DIGITAL%20GROWTH%20package%20(PKR%20200,000).',
        },
      };
    }

    // 6. Contact & Direct Reachout
    if (
      text.includes('contact') ||
      text.includes('call') ||
      text.includes('email') ||
      text.includes('phone') ||
      text.includes('number') ||
      text.includes('whatsapp')
    ) {
      return {
        reply:
          'You can connect with the CLINT BRIDGE team directly:\n\n📱 Primary Line: 0300-2464078\n📞 Direct Line: 0321-2114972\n✉️ Email: official.clientbridge@gmail.com\n📍 Location: Karachi, Pakistan\n\nWe respond to all direct inquiries promptly!',
        quickReplies: [
          'Open WhatsApp Now',
          'Get a Free Quote',
          'Tell me more about services',
        ],
        ctaAction: {
          label: 'Open WhatsApp Direct',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20connecting%20from%20your%20website.',
        },
      };
    }

    // 7. Timeline / How long does it take?
    if (
      text.includes('time') ||
      text.includes('timeline') ||
      text.includes('duration') ||
      text.includes('kab')
    ) {
      return {
        reply:
          'Speed and quality go hand in hand at CLINT BRIDGE! Standard websites are delivered in 3 to 7 business days. Custom multi-page platforms and full marketing systems take 10 to 14 days.',
        quickReplies: [
          'Get a Free Quote',
          'Pricing Packages',
          'Contact Details',
        ],
      };
    }

    // 8. Roman Urdu / Urdu Greetings & Inquiries
    if (
      text.includes('salam') ||
      text.includes('kya') ||
      text.includes('hai') ||
      text.includes('banwani') ||
      text.includes('kaise')
    ) {
      return {
        reply:
          'Walaikum Assalam! CLINT BRIDGE mein khushamdeed. Hum high-converting websites, branding, SEO, aur direct WhatsApp lead systems banatay hain Karachi mein. Aap ko kis service ke baray mein janna hai?',
        quickReplies: [
          'Website Packages',
          'Get a Free Quote',
          'WhatsApp Chat',
        ],
        ctaAction: {
          label: 'WhatsApp par baat karein',
          url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20mujhe%20website%20aur%20marketing%20ke%20hawalay%20se%20maloomat%20chahiye.',
        },
      };
    }

    // Default Fallback
    return {
      reply:
        "Thank you for contacting CLINT BRIDGE! We're dedicated to helping your business turn into an authoritative brand with high-performance web platforms and digital marketing.\n\nWould you like a free quote or would you prefer speaking with our consultants directly?",
      quickReplies: [
        'Get a Free Quote',
        'Tell me more about services',
        'WhatsApp (0311-2713755)',
      ],
      ctaAction: {
        label: 'Chat on WhatsApp',
        url: 'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20have%20an%20inquiry%20regarding%20digital%20agency%20services.',
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);
    setShowEmojiPicker(false);

    // AI typing simulation (300 - 500ms)
    setTimeout(() => {
      const response = getAIResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        timestamp: 'Just now',
        quickReplies: response.quickReplies,
        ctaAction: response.ctaAction,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleQuickReply = (reply: string) => {
    if (reply.toLowerCase().includes('whatsapp')) {
      window.open(
        'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20am%20chatting%20from%20your%20website%20widget.',
        '_blank'
      );
      return;
    }
    if (reply.toLowerCase().includes('call')) {
      window.location.href = 'tel:03112713755';
      return;
    }
    handleSendMessage(reply);
  };

  const handleSendThumbsUp = () => {
    handleSendMessage('👍');
  };

  const emojis = ['👋', '👍', '🚀', '💡', '🔥', '✅', '📈', '🤝'];

  return (
    <>
      {/* 1. FLOATING WIDGET TRIGGER (Bottom Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-end">
        {/* Floating "We Are Here!" Badge over the button */}
        {!isOpen && showBadge && (
          <div className="absolute -top-12 -left-12 sm:-top-14 sm:-left-14 pointer-events-auto z-50 animate-bounce duration-1000">
            <div className="relative">
              {/* Close 'X' badge */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBadge(false);
                }}
                className="absolute -top-1 -right-1 z-30 w-5 h-5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs shadow-md transition-transform hover:scale-110 active:scale-90 cursor-pointer"
                aria-label="Close message badge"
                title="Dismiss"
              >
                <X className="w-3 h-3 stroke-[2.5]" />
              </button>

              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer filter drop-shadow-md select-none hover:scale-105 transition-transform"
              >
                <svg
                  width="135"
                  height="60"
                  viewBox="0 0 135 60"
                  className="overflow-visible"
                >
                  <g transform="rotate(-18 65 30)">
                    <text
                      x="65"
                      y="33"
                      textAnchor="middle"
                      fill="#254A34"
                      fontSize="21"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="0.4"
                    >
                      We Are Here!
                    </text>
                    <text
                      x="65"
                      y="30"
                      textAnchor="middle"
                      fill="white"
                      stroke="#254A34"
                      strokeWidth="6"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fontSize="21"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="0.4"
                    >
                      We Are Here!
                    </text>
                    <text
                      x="65"
                      y="30"
                      textAnchor="middle"
                      fill="white"
                      fontSize="21"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="0.4"
                    >
                      We Are Here!
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Circular Forest Green Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#254A34] hover:bg-[#1F3B2B] text-white shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#254A34]/40 cursor-pointer group"
          aria-label={isOpen ? 'Close Customer Support' : 'Open Customer Support'}
        >
          {isOpen ? (
            <ChevronDown className="w-8 h-8 text-white stroke-[3] transition-transform duration-200" />
          ) : (
            <div className="relative flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                <path
                  d="M18 4C10.268 4 4 10.268 4 18C4 20.875 4.868 23.548 6.357 25.776L5 31L10.514 29.558C12.671 31.094 15.234 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4Z"
                  fill="white"
                />
                <path
                  d="M12.5 19.5C13.8 22.8 22.2 22.8 23.5 19.5C21.8 21.4 14.2 21.4 12.5 19.5Z"
                  fill="#254A34"
                />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* 2. CHAT POPUP WINDOW STRUCTURE */}
      {isOpen && (
        <div
          className="fixed bottom-22 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#F8FAFC] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 font-sans"
        >
          {/* Header Bar */}
          <div className="bg-[#254A34] text-white px-4 py-3.5 flex items-center justify-between select-none shrink-0 shadow-xs relative">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Collapse Customer Support"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              <span>CLINT BRIDGE Support</span>
            </button>

            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1.5 rounded-lg hover:bg-black/10 transition-colors focus:outline-none cursor-pointer"
                aria-label="Options Menu"
              >
                <Menu className="w-5 h-5 stroke-[2.2]" />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-10 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-slate-700 text-xs animate-in fade-in duration-150">
                  <a
                    href="https://wa.me/923112713755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium text-[#254A34]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Support</span>
                  </a>
                  <a
                    href="tel:03002464078"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 0300-2464078</span>
                  </a>
                  <a
                    href="mailto:official.clientbridge@gmail.com"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Support</span>
                  </a>
                  <div className="my-1 border-t border-slate-100" />
                  <button
                    onClick={() => {
                      setMessages([
                        {
                          id: `reset-${Date.now()}`,
                          sender: 'bot',
                          text: '👋 Hi! How can we help you today with CLINT BRIDGE services?',
                          timestamp: 'Just now',
                          quickReplies: initialQuickReplies,
                        },
                      ]);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-rose-600 hover:bg-rose-50 w-full text-left transition-colors font-medium cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Restart Conversation</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8FAFC]">
            <div className="text-[11px] font-semibold text-slate-400 pl-11 tracking-wide uppercase">
              CLINT BRIDGE Desk
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                {msg.sender === 'bot' ? (
                  <div className="flex items-start gap-2.5 max-w-[92%]">
                    <SupportAvatar />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="bg-[#254A34] text-white rounded-2xl rounded-tl-xs px-4 py-3 text-xs sm:text-sm font-medium leading-relaxed shadow-2xs whitespace-pre-line">
                        {msg.text}
                      </div>

                      {msg.ctaAction && (
                        <a
                          href={msg.ctaAction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#C6FF1A] text-[#0F1A14] font-bold text-xs py-1.5 px-3.5 rounded-lg transition-transform hover:scale-102 w-fit shadow-xs"
                        >
                          <span>{msg.ctaAction.label}</span>
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-slate-800 text-white rounded-2xl rounded-tr-xs px-4 py-2.5 text-xs sm:text-sm font-medium leading-relaxed shadow-2xs max-w-[85%] whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>
                )}

                {/* Quick Suggestion Pills */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-col items-end gap-1.5 pt-1 pl-11">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="border border-[#254A34] bg-white text-[#254A34] hover:bg-[#254A34] hover:text-white transition-all duration-150 rounded-full px-4 py-1.5 text-xs sm:text-[13px] font-semibold shadow-2xs text-right cursor-pointer active:scale-95"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2.5 pl-1">
                <SupportAvatar size="w-7 h-7" />
                <div className="bg-white border border-slate-200 rounded-full px-3.5 py-2 shadow-2xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Emoji Quick Picker Popup */}
          {showEmojiPicker && (
            <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-around text-lg">
              {emojis.map((emoji, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputMessage((prev) => prev + emoji);
                    setShowEmojiPicker(false);
                    inputRef.current?.focus();
                  }}
                  className="hover:scale-125 transition-transform cursor-pointer"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Bottom Input Bar */}
          <div className="bg-white border-t border-slate-200/80 p-2.5 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 focus-within:border-[#254A34] focus-within:bg-white transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type here and press enter..."
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent py-1 px-1"
              />

              <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
                {inputMessage.trim().length > 0 ? (
                  <button
                    type="submit"
                    className="w-7 h-7 rounded-full bg-[#254A34] hover:bg-[#1F3B2B] text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleSendThumbsUp}
                      className="p-1 hover:text-slate-700 transition-colors cursor-pointer"
                      title="Send thumbs up"
                      aria-label="Send thumbs up"
                    >
                      <ThumbsUp className="w-4 h-4 stroke-[1.8]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.open(
                          'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20I%20have%20project%20files%20and%20briefs%20to%20share.',
                          '_blank'
                        );
                      }}
                      className="p-1 hover:text-slate-700 transition-colors cursor-pointer"
                      title="Attach brief / files via WhatsApp"
                      aria-label="Attach file"
                    >
                      <Paperclip className="w-4 h-4 stroke-[1.8]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className={`p-1 transition-colors cursor-pointer ${
                        showEmojiPicker ? 'text-[#254A34]' : 'hover:text-slate-700'
                      }`}
                      title="Insert emoji"
                      aria-label="Insert emoji"
                    >
                      <Smile className="w-4 h-4 stroke-[1.8]" />
                    </button>
                  </>
                )}
              </div>
            </form>

            <div className="flex items-center justify-center mt-2 mb-0.5">
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-full px-3 py-0.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#254A34]" />
                <span className="text-[10px] text-slate-500 font-medium">
                  CLINT BRIDGE Support Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
