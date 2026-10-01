import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, ArrowUpRight, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
  whatsappCta?: boolean;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Entrance notification after 4 seconds as instructed
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Salam & Welcome to Client Bridge! 👋 I am your digital growth assistant. How can we help your business today?',
      quickReplies: ['Website Banwani Hai', 'Pricing & Packages', 'Branding & Logo', 'WhatsApp se baat karein'],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadBadge(false);
    }
  }, [messages, isOpen]);

  // Language & Intent Detection Logic
  const getBotResponse = (userText: string): { reply: string; quickReplies?: string[]; whatsappCta?: boolean } => {
    const text = userText.toLowerCase().trim();

    // Check Roman Urdu
    const isRomanUrdu =
      text.includes('kya') ||
      text.includes('kia') ||
      text.includes('hai') ||
      text.includes('hain') ||
      text.includes('krna') ||
      text.includes('karna') ||
      text.includes('banwani') ||
      text.includes('kitna') ||
      text.includes('kitni') ||
      text.includes('paisa') ||
      text.includes('rupay') ||
      text.includes('rate') ||
      text.includes('chahiye') ||
      text.includes('salam') ||
      text.includes('batao') ||
      text.includes('theek') ||
      text.includes('sochna') ||
      text.includes('mehnga') ||
      text.includes('kam') ||
      text.includes('baat');

    // 1. WhatsApp handoff
    if (text.includes('whatsapp') || text.includes('call') || text.includes('rabta') || text.includes('number')) {
      if (isRomanUrdu) {
        return {
          reply: 'Aap directly hamaray lead team se WhatsApp par baat kar saktay hain: 0311-2713755. Ham foran reply karein ge!',
          whatsappCta: true,
          quickReplies: ['Starter 20k Package', 'Business 30k Package', 'Brief Form'],
        };
      }
      return {
        reply: 'You can chat directly with our Karachi agency leads on WhatsApp: 0311-2713755. We respond promptly!',
        whatsappCta: true,
        quickReplies: ['Starter Plan', 'Business Plan', 'Growth Partner'],
      };
    }

    // 2. Pricing & Packages
    if (
      text.includes('price') ||
      text.includes('pricing') ||
      text.includes('cost') ||
      text.includes('kitna') ||
      text.includes('paisa') ||
      text.includes('charges') ||
      text.includes('package')
    ) {
      if (isRomanUrdu) {
        return {
          reply: 'Client Bridge ke 3 transparent packages hain:\n\n1. Starter (PKR 20,000): Complete website + free domain aur 1 month hosting + WhatsApp lead flow.\n2. Business (PKR 30,000): 5-page custom 3D website + Google Maps SEO + brand direction (Most Popular).\n3. Growth Partner (PKR 50,000): Full 3D custom website + Meta advertising support + monthly optimization.',
          quickReplies: ['Starter (20k)', 'Business (30k)', 'Growth (50k)', 'WhatsApp par baat karein'],
          whatsappCta: true,
        };
      }
      return {
        reply: 'Client Bridge offers 3 upfront transparent packages:\n\n1. Starter (PKR 20,000): Complete responsive website, domain + 1 month cloud hosting, WhatsApp enquiry flow.\n2. Business (PKR 30,000): 5-page custom 3D website, Google Maps SEO, Brand direction (Most Popular).\n3. Growth Partner (PKR 50,000): Full 3D web platform + advertising creative support + monthly optimization.',
        quickReplies: ['Choose Starter', 'Choose Business', 'Discuss on WhatsApp'],
        whatsappCta: true,
      };
    }

    // 3. Website Design
    if (
      text.includes('website') ||
      text.includes('site') ||
      text.includes('web') ||
      text.includes('page') ||
      text.includes('online shop') ||
      text.includes('ecommerce')
    ) {
      if (isRomanUrdu) {
        return {
          reply: 'Zabardast! Aap ka kis type ka business hai? (Restaurant, clinic, salon, rent car, e-commerce, ya professional services?)\n\nHum mobile-first, ultra-fast websites banatay hain jo direct WhatsApp orders aur Google search capture karti hain.',
          quickReplies: ['Restaurant / Food', 'Clinic / Doctor', 'Rent Car / Fleet', 'Salon / Beauty', 'E-commerce Shop'],
        };
      }
      return {
        reply: 'Excellent! What type of business do you operate? (e.g. restaurant, clinic, rent-a-car, salon, e-commerce, or professional service?)\n\nWe build high-performance, mobile-first websites with direct WhatsApp checkout integration.',
        quickReplies: ['Restaurant', 'Medical Clinic', 'Car Rental', 'Beauty Salon', 'E-commerce'],
      };
    }

    // 4. Branding & Logo
    if (text.includes('brand') || text.includes('logo') || text.includes('design') || text.includes('identity')) {
      if (isRomanUrdu) {
        return {
          reply: 'Hum custom vector logo, brand identity guidelines, social media templates aur corporate stationery design kartay hain. Aap hamara Logo Brief fill kar saktay hain ya WhatsApp par sample dekh saktay hain!',
          quickReplies: ['Logo Brief Form', 'Business Package (30k)', 'WhatsApp se baat karein'],
          whatsappCta: true,
        };
      }
      return {
        reply: 'We design bespoke vector logos, complete brand guidelines, and social media creative toolkits. Would you like to review our brief form or explore the Business package?',
        quickReplies: ['Logo Brief', 'Business Package', 'Chat on WhatsApp'],
        whatsappCta: true,
      };
    }

    // 5. Objection: Budget / Expensive / Mehnga
    if (text.includes('mehnga') || text.includes('budget') || text.includes('discount') || text.includes('expensive') || text.includes('kam')) {
      if (isRomanUrdu) {
        return {
          reply: 'Hum samajhtay hain! Is liye hamara Starter package sirf PKR 20,000 mein free domain aur cloud hosting ke sath shamil hai. Koi hidden charges nahi hotay. Ek professional website se aap ke business ki credibility aur direct customer inquiries kai guna barh jati hain.',
          quickReplies: ['Starter 20,000 details', 'WhatsApp discussion'],
          whatsappCta: true,
        };
      }
      return {
        reply: 'We completely respect budget considerations! That is why our Starter package is fixed at PKR 20,000 with domain and cloud hosting included. It eliminates recurring freelancer overhead and delivers immediate credibility.',
        quickReplies: ['Starter Package Details', 'Consult on WhatsApp'],
        whatsappCta: true,
      };
    }

    // 6. Objection: Sochna hai / Will think
    if (text.includes('sochna') || text.includes('think') || text.includes('later') || text.includes('baad')) {
      if (isRomanUrdu) {
        return {
          reply: 'Beshak, pura waqt lein! Aap hamari live websites (Pizza Munch, Prime Ride, Beauty Salon, Mr Beef Burgrz) dekh saktay hain. Jab bhi ready hon, WhatsApp par hum se mashwara kar saktay hain.',
          quickReplies: ['Live Projects Dekhein', 'WhatsApp Save Karein'],
          whatsappCta: true,
        };
      }
      return {
        reply: 'Take all the time you need! You can check our live client platforms (Pizza Munch, Prime Ride, Beauty Salon, Mr Beef Burgrz) anytime. Whenever you are ready, reach out on WhatsApp.',
        quickReplies: ['View Live Projects', 'Save WhatsApp Contact'],
        whatsappCta: true,
      };
    }

    // 7. Objection: Already have a website
    if (text.includes('already') || text.includes('pehle se') || text.includes('website hai')) {
      if (isRomanUrdu) {
        return {
          reply: 'Bohot achi baat hai! Agar aap ki existing site slow hai ya mobile par sahi nahi dikhti, toh hum usko redesign aur modern Google SEO ke sath upgrade kar saktay hain. Free audit ke liye WhatsApp par link share karein.',
          quickReplies: ['WhatsApp par link bhejein', 'SEO Services'],
          whatsappCta: true,
        };
      }
      return {
        reply: 'That is great! If your current site is slow or not converting mobile visitors, we can run a redesign and local SEO upgrade. Feel free to share your link on WhatsApp for a free audit.',
        quickReplies: ['Share link on WhatsApp', 'SEO Services'],
        whatsappCta: true,
      };
    }

    // Default Fallback
    if (isRomanUrdu) {
      return {
        reply: 'Shukriya! Hum Karachi based digital agency hain. Hum websites, branding, Google Maps aur digital marketing provide kartay hain. Aap ka koi specific sawal hai ya WhatsApp par baat karna chahein ge?',
        quickReplies: ['Website Packages', 'Client Projects', 'WhatsApp 0311-2713755'],
        whatsappCta: true,
      };
    }

    return {
      reply: 'Thank you for reaching out! Client Bridge builds high-converting websites, branding, and local digital marketing. What can we build for you today?',
      quickReplies: ['Website Packages', 'Client Work', 'Chat on WhatsApp'],
      whatsappCta: true,
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        quickReplies: response.quickReplies,
        whatsappCta: response.whatsappCta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickReply = (reply: string) => {
    if (reply.toLowerCase().includes('whatsapp')) {
      window.open('https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20am%20chatting%20from%20your%20website%20bot.', '_blank');
      return;
    }
    if (reply.toLowerCase().includes('brief')) {
      window.open('https://forms.gle/eUynYqzZziPvoqZz6', '_blank');
      return;
    }
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Subtle label pill when chat is closed */}
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 bg-[#1F3B2B] text-white text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-lg border border-[#31503D]">
            <span>Ask AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF1A] animate-pulse" />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#254A34] hover:bg-[#1F3B2B] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C6FF1A]/50 border-2 border-[#C6FF1A] group"
          aria-label="Open AI Assistant"
        >
          {/* Subtle lime glow pulse */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#C6FF1A] opacity-25 animate-ping pointer-events-none" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-[#C6FF1A]" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white group-hover:text-[#C6FF1A] transition-colors" />
              <Sparkles className="w-3 h-3 text-[#C6FF1A] absolute -top-1 -right-1" />
            </div>
          )}

          {/* Unread badge indicator */}
          {unreadBadge && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C6FF1A] border-2 border-[#254A34] animate-bounce" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[540px] bg-white rounded-3xl shadow-2xl border border-[#E3E4E4] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header (Dark Forest Green with Lime Accent) */}
          <div className="bg-[#254A34] text-white px-5 py-4 flex items-center justify-between border-b border-[#1F3B2B]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center font-bold text-xs shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold flex items-center gap-1.5">
                  <span>Client Bridge AI</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C6FF1A]" />
                </h3>
                <span className="text-[11px] text-[#C6FF1A] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF1A] animate-pulse" />
                  Online · Karachi Agency
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF7EF]/40 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed whitespace-pre-line shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#254A34] text-white rounded-br-xs'
                      : 'bg-white text-[#0F1A14] border border-[#E3E4E4] rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>

                {/* WhatsApp direct CTA if flagged */}
                {msg.whatsappCta && (
                  <button
                    onClick={() =>
                      window.open('https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20want%20to%20chat%20directly.', '_blank')
                    }
                    className="mt-2 inline-flex items-center gap-1.5 bg-[#1FA866] hover:bg-[#188c54] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-xs transition-colors"
                  >
                    <span>Open in WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}

                {/* Quick replies chips */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickReplies.map((qr, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickReply(qr)}
                        className="bg-white hover:bg-[#C6FF1A] text-[#254A34] hover:text-[#0F1A14] border border-[#E3E4E4] hover:border-[#C6FF1A] text-[11px] font-semibold py-1 px-2.5 rounded-full transition-colors shadow-2xs"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-[#E3E4E4] px-3.5 py-2 rounded-2xl rounded-bl-xs w-max text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#254A34] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E3E4E4] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about website, pricing, or Roman Urdu..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-[#E3E4E4] rounded-full focus:outline-none focus:ring-1 focus:ring-[#254A34] text-[#0F1A14]"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-8 h-8 rounded-full bg-[#254A34] text-[#C6FF1A] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1F3B2B] transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
