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
  Sparkles,
  Check,
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
        fill="#3B82F6"
      />
      {/* Collar */}
      <path d="M15 22L18 26.5L21 22H15Z" fill="#FFFFFF" />
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
    'Book a Free Audit',
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: '👋 Hi! How can we help you today with ClientBridge services?',
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

  // AI Knowledge Engine for ClientBridge
  const getAIResponse = (
    userText: string
  ): {
    reply: string;
    quickReplies?: string[];
    ctaAction?: { label: string; url: string };
  } => {
    const text = userText.toLowerCase().trim();

    // 1. "Book a Free Audit" / Audit requests
    if (
      text.includes('audit') ||
      text.includes('book') ||
      text.includes('free audit')
    ) {
      return {
        reply:
          "Awesome! A ClientBridge Free Growth Audit includes a deep-dive review of your current website, Google Maps visibility, and ad funnels. We'll identify high-ROI opportunities within 2 business hours.\n\nReady to get started? Contact us directly or connect on WhatsApp!",
        quickReplies: [
          'WhatsApp (+44 7517 035549)',
          'Tell me more about services',
          'Pricing Packages',
        ],
        ctaAction: {
          label: 'Book Free Audit via WhatsApp',
          url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20would%20like%20to%20book%20a%20Free%20Growth%20Audit%20for%20my%20business.',
        },
      };
    }

    // 2. "Tell me more about services" / Services overview
    if (
      text.includes('service') ||
      text.includes('services') ||
      text.includes('what do you do') ||
      text.includes('offer')
    ) {
      return {
        reply:
          'ClientBridge specializes in 3 core business growth pillars:\n\n1. 🎯 Paid Advertising: High-converting Meta Ads & Google Ads campaigns engineered for measurable ROAS.\n2. 🚀 Full-Funnel Growth Systems: Automated lead capture, CRM pipeline integration, and direct WhatsApp sales workflows.\n3. 💻 Custom Web Architecture: Modern 3D interactive web platforms, mobile-first UI/UX, and local SEO dominance.',
        quickReplies: [
          'Book a Free Audit',
          'Pricing & Packages',
          'Paid Ads Details',
          'Contact Support',
        ],
        ctaAction: {
          label: 'Chat with a Lead Strategist',
          url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20want%20to%20learn%20more%20about%20your%20services.',
        },
      };
    }

    // 3. "I have a question" / General inquiries
    if (
      text.includes('question') ||
      text.includes('sawal') ||
      text.includes('help')
    ) {
      return {
        reply:
          "We're here to help! What would you like to know?\n\n• Project timelines (standard delivery is 3-7 days)\n• Pricing & transparent packages\n• Paid Ads & Lead generation funnels\n• Speaking directly with a consultant",
        quickReplies: [
          'Pricing Packages',
          'Project Timeline',
          'Book a Free Audit',
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
          'Our Paid Advertising team crafts precision Meta (Facebook/Instagram) & Google Ads funnels specifically tailored for service businesses and growing brands. We write custom conversion copy, design scroll-stopping creatives, and connect leads straight to WhatsApp or your CRM.',
        quickReplies: [
          'Book a Free Audit',
          'See Pricing Packages',
          'Chat on WhatsApp',
        ],
        ctaAction: {
          label: 'Discuss Ad Campaigns',
          url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20am%20interested%20in%20Meta%20and%20Google%20Ads.',
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
      text.includes('paisa')
    ) {
      return {
        reply:
          'ClientBridge offers straightforward, transparent investments with zero hidden hourly fees:\n\n• Starter (PKR 20,000 / ~£60): Complete responsive website + free domain, cloud hosting, and WhatsApp flow.\n• Business (PKR 30,000 / ~£90): 5-page custom 3D web platform + Google Maps SEO + Brand Direction (Most Popular).\n• Growth Partner (PKR 50,000 / ~£150): Full 3D web platform + Meta Ads support + monthly CRO & lead optimization.',
        quickReplies: [
          'Book a Free Audit',
          'Starter Details',
          'Business Details',
          'WhatsApp Us',
        ],
        ctaAction: {
          label: 'Lock in a Package',
          url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20would%20like%20to%20discuss%20your%20website%20packages.',
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
          'You can connect with the ClientBridge team anytime:\n\n📞 Direct UK / International: +44 7517 035549\n📱 Pakistan Line: 0311-2713755 / 0321-2114972\n✉️ Email: clintbridge595@gmail.com\n🌐 Website: clintbridge.com\n\nWe respond to all direct inquiries within 2 hours.',
        quickReplies: [
          'Open WhatsApp Now',
          'Book a Free Audit',
          'Tell me more about services',
        ],
        ctaAction: {
          label: 'Open WhatsApp Direct',
          url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20connecting%20from%20your%20website%20support%20widget.',
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
          'Speed is one of our biggest advantages! Standard websites are fully designed, developed, and deployed in 3 to 7 business days. Complex custom funnels and 3D web applications take 10 to 14 days.',
        quickReplies: [
          'Book a Free Audit',
          'Tell me more about services',
          'Contact Support',
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
          'Walaikum Assalam! ClientBridge mein khushamdeed. Hum high-converting websites, Meta & Google Ads, aur direct WhatsApp lead systems banatay hain. Aap kis service ke baray mein janna chahein ge?',
        quickReplies: [
          'Website Packages',
          'Paid Ads & Marketing',
          'Book a Free Audit',
          'WhatsApp Call',
        ],
        ctaAction: {
          label: 'WhatsApp par baat karein',
          url: 'https://wa.me/923112713755?text=Hi%20ClientBridge,%20mujhe%20website%20aur%20marketing%20ke%20hawalay%20se%20maloomat%20chahiye.',
        },
      };
    }

    // Default Fallback
    return {
      reply:
        "Thank you for contacting ClientBridge! We're dedicated to helping your business acquire high-value clients through modern websites and high-performance ad funnels.\n\nWould you like a complimentary growth audit or would you prefer speaking with our consultants directly?",
      quickReplies: [
        'Book a Free Audit',
        'Tell me more about services',
        'WhatsApp (+44 7517 035549)',
      ],
      ctaAction: {
        label: 'Chat on WhatsApp',
        url: 'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20have%20an%20inquiry%20regarding%20growth%20services.',
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

    // AI typing simulation (300 - 600ms)
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
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    if (reply.toLowerCase().includes('whatsapp')) {
      window.open(
        'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20am%20chatting%20from%20your%20website%20support%20widget.',
        '_blank'
      );
      return;
    }
    if (reply.toLowerCase().includes('call')) {
      window.location.href = 'tel:+447517035549';
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
      {/* ========================================================
          1. FLOATING WIDGET TRIGGER (Bottom Right)
          Styled exactly like Screenshot 1 & 2
         ======================================================== */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-end">
        {/* Floating "We Are Here!" Badge over the button */}
        {!isOpen && showBadge && (
          <div className="absolute -top-12 -left-12 sm:-top-14 sm:-left-14 pointer-events-auto z-50 animate-bounce duration-1000">
            <div className="relative">
              {/* Close 'X' badge on top right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBadge(false);
                }}
                className="absolute -top-1 -right-1 z-30 w-5 h-5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs shadow-md transition-transform hover:scale-110 active:scale-90"
                aria-label="Close message badge"
                title="Dismiss"
              >
                <X className="w-3 h-3 stroke-[2.5]" />
              </button>

              {/* Bubbly Cartoon SVG Text with cyan/blue stroke & white fill matching Screenshot 1 */}
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
                    {/* Shadow layer */}
                    <text
                      x="65"
                      y="33"
                      textAnchor="middle"
                      fill="#0284C7"
                      fontSize="21"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="0.4"
                    >
                      We Are Here!
                    </text>
                    {/* Thick Cyan Stroke */}
                    <text
                      x="65"
                      y="30"
                      textAnchor="middle"
                      fill="white"
                      stroke="#00AEEF"
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
                    {/* White Fill Layer */}
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

        {/* Circular Emerald Green Button (#00A859) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#00A859] hover:bg-[#00964F] text-white shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00A859]/40 group"
          aria-label={isOpen ? 'Close Customer Support' : 'Open Customer Support'}
        >
          {isOpen ? (
            /* Down chevron arrow when window is open (as seen in Screenshot 2 bottom right) */
            <ChevronDown className="w-8 h-8 text-white stroke-[3] transition-transform duration-200" />
          ) : (
            /* Stylized white speech bubble with emerald smile cutout (as seen in Screenshot 1) */
            <div className="relative flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                {/* White speech bubble */}
                <path
                  d="M18 4C10.268 4 4 10.268 4 18C4 20.875 4.868 23.548 6.357 25.776L5 31L10.514 29.558C12.671 31.094 15.234 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4Z"
                  fill="white"
                />
                {/* Emerald smile cutout inside */}
                <path
                  d="M12.5 19.5C13.8 22.8 22.2 22.8 23.5 19.5C21.8 21.4 14.2 21.4 12.5 19.5Z"
                  fill="#00A859"
                />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* ========================================================
          2. CHAT POPUP WINDOW STRUCTURE
          Styled exactly like Screenshot 2
         ======================================================== */}
      {isOpen && (
        <div
          className="fixed bottom-22 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#F8FAFC] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {/* Header Bar (Solid Emerald Green #00A859) */}
          <div className="bg-[#00A859] text-white px-4 py-3.5 flex items-center justify-between select-none shrink-0 shadow-xs relative">
            {/* Left Title: "< Customer Support" */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="Collapse Customer Support"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              <span>Customer Support</span>
            </button>

            {/* Right: Hamburger / Three-dots Menu Icon */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1.5 rounded-lg hover:bg-black/10 transition-colors focus:outline-none"
                aria-label="Options Menu"
              >
                <Menu className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-slate-700 text-xs animate-in fade-in duration-150">
                  <a
                    href="https://wa.me/447517035549"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium text-emerald-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Support</span>
                  </a>
                  <a
                    href="tel:+447517035549"
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +44 7517 035549</span>
                  </a>
                  <a
                    href="mailto:clintbridge595@gmail.com"
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
                          text: '👋 Hi! How can we help you today with ClientBridge services?',
                          timestamp: 'Just now',
                          quickReplies: initialQuickReplies,
                        },
                      ]);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-rose-600 hover:bg-rose-50 w-full text-left transition-colors font-medium"
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
            {/* Subtle Subtitle header as seen in screenshot */}
            <div className="text-[11px] font-semibold text-slate-400 pl-11 tracking-wide uppercase">
              Customer Support
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                {msg.sender === 'bot' ? (
                  /* Bot Message layout with Avatar on left and green bubble */
                  <div className="flex items-start gap-2.5 max-w-[92%]">
                    <SupportAvatar />
                    <div className="flex flex-col gap-1.5 flex-1">
                      {/* Green Bubble (#00A859) with white text */}
                      <div className="bg-[#00A859] text-white rounded-2xl rounded-tl-xs px-4 py-3 text-xs sm:text-sm font-medium leading-relaxed shadow-2xs whitespace-pre-line">
                        {msg.text}
                      </div>

                      {/* Optional Action CTA Link */}
                      {msg.ctaAction && (
                        <a
                          href={msg.ctaAction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-800/10 hover:bg-emerald-800/20 text-[#00A859] font-bold text-xs py-1.5 px-3.5 rounded-lg transition-colors w-fit border border-[#00A859]/30"
                        >
                          <span>{msg.ctaAction.label}</span>
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  /* User Message layout aligned right */
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
                        className="border border-[#00A859] bg-white text-[#00A859] hover:bg-[#00A859] hover:text-white transition-all duration-150 rounded-full px-4 py-1.5 text-xs sm:text-[13px] font-semibold shadow-2xs text-right cursor-pointer active:scale-95"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2.5 pl-1">
                <SupportAvatar size="w-7 h-7" />
                <div className="bg-white border border-slate-200 rounded-full px-3.5 py-2 shadow-2xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-bounce [animation-delay:0.4s]" />
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
                  className="hover:scale-125 transition-transform"
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
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 focus-within:border-[#00A859] focus-within:bg-white transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type here and press enter.."
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent py-1 px-1"
              />

              {/* Action buttons on the right */}
              <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
                {inputMessage.trim().length > 0 ? (
                  /* Send arrow button when text is present */
                  <button
                    type="submit"
                    className="w-7 h-7 rounded-full bg-[#00A859] hover:bg-[#00964F] text-white flex items-center justify-center transition-transform active:scale-90"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <>
                    {/* Thumbs up */}
                    <button
                      type="button"
                      onClick={handleSendThumbsUp}
                      className="p-1 hover:text-slate-700 transition-colors"
                      title="Send thumbs up"
                      aria-label="Send thumbs up"
                    >
                      <ThumbsUp className="w-4 h-4 stroke-[1.8]" />
                    </button>

                    {/* Paperclip */}
                    <button
                      type="button"
                      onClick={() => {
                        window.open(
                          'https://wa.me/447517035549?text=Hi%20ClientBridge,%20I%20have%20project%20files%20and%20briefs%20to%20share.',
                          '_blank'
                        );
                      }}
                      className="p-1 hover:text-slate-700 transition-colors"
                      title="Attach brief / files via WhatsApp"
                      aria-label="Attach file"
                    >
                      <Paperclip className="w-4 h-4 stroke-[1.8]" />
                    </button>

                    {/* Smile / Emoji */}
                    <button
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className={`p-1 transition-colors ${
                        showEmojiPicker ? 'text-[#00A859]' : 'hover:text-slate-700'
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

            {/* Footer Attribution Pill: "Powered by ClientBridge AI" */}
            <div className="flex items-center justify-center mt-2 mb-0.5">
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-full px-3 py-0.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                <span className="text-[10px] text-slate-500 font-medium">
                  Powered by <span className="font-semibold text-slate-700">ClientBridge AI</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
