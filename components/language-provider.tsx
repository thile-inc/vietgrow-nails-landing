'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Language = 'en' | 'vi'

const copy = {
  en: {
  "lang": {
    "current": "EN",
    "next": "VI",
    "toggleLabel": "Switch to Vietnamese"
  },
  "header": {
    "how": "Offer",
    "package": "$119 plan",
    "results": "Results",
    "faq": "FAQ",
    "cta": "Get Free Plan"
  },
  "hero": {
    "eyebrow": "For nail salons, manicure bars, beauty studios & mobile nail artists",
    "title": "Stop Losing Nail Clients After They Click",
    "body": "Get a clear offer, local ads, and a booking page built to turn clicks into nail appointments. $119/month.",
    "primary": "Get Free Plan",
    "secondary": "View $119 plan",
    "trusted": "Trusted by local nail & beauty owners",
    "lockIn": "No long-term lock-in",
    "leadTitle": "New consultation request",
    "leadMeta": "Gel manicure · 2 min ago",
    "callTitle": "+12 leads this week",
    "callMeta": "from your local ad campaign",
    "imageAlt": "A Vietnamese nail salon with an Asian nail technician doing a gel manicure"
  },
  "results": {
    "title": "Built to turn ad clicks into bookings",
    "stats": [
      {
        "value": "+50%",
        "label": "more booking requests"
      },
      {
        "value": "24/7",
        "label": "ad-to-booking path"
      },
      {
        "value": "Done-for-you",
        "label": "ads + booking page"
      }
    ]
  },
  "system": {
    "eyebrow": "The Vietgrow Nail Salon Growth System",
    "title": "The 3-part funnel we build for your nail salon",
    "body": "No random boosted posts. One offer, one local campaign, one page built to book.",
    "steps": [
      {
        "number": "01",
        "title": "Clarify the offer",
        "description": "We turn your services into clear, click-worthy campaign concepts — gel manicure offers, pedicure promos, acrylic fill specials, nail art sets, bridal packages, and seasonal designs — with short-form video ideas, carousel creatives, and polished beauty visuals.",
        "tags": [
          "Offer strategy",
          "Video & carousel ads",
          "Premium visuals"
        ]
      },
      {
        "number": "02",
        "title": "Run local traffic",
        "description": "We launch and manage Facebook & Instagram campaigns focused on reaching people near your salon who are most likely to book manicures, pedicures, extensions, fills, and nail art.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Convert on the page",
        "description": "Traffic lands on a nail-specific page with a lead form and a conversion-focused journey built to turn clicks into appointment inquiries, design requests, and real booking opportunities.",
        "tags": [
          "Landing page",
          "Lead form",
          "Follow-up path"
        ]
      }
    ],
    "flow": [
      "Nail Offer + Ad Creative",
      "Local Traffic",
      "Landing Page + Lead Form",
      "Appointment / Booking"
    ]
  },
  "package": {
    "eyebrow": "What you get",
    "title": "$119/month nail booking system",
    "body": "Everything needed to launch a simple local ad funnel.",
    "label": "Nail Salon Growth System",
    "cardTitle": "Done-for-you ad funnel",
    "cardBody": "We build the ads, page, form, and monthly improvements.",
    "priceMeta": "per month",
    "cta": "Get my free plan",
    "included": "Everything included:",
    "includes": [
      "12 posts per month",
      "Facebook & Instagram ad setup",
      "Nail ad creative",
      "Local audience targeting",
      "Landing page + lead form",
      "Monthly optimization"
    ]
  },
  "campaign": {
    "eyebrow": "Campaign previews",
    "title": "See what your ad-to-booking journey looks like",
    "body": "From a scroll-stopping ad to a finished booking request — here's the experience we build for your clients.",
    "videoAlt": "Video ad preview for a glossy manicure and nail art package",
    "videoTitle": "Gloss & Go Gel Set",
    "videoMeta": "Gel manicure + simple art · Book this week",
    "videoCaption": "Short-form video ad",
    "carouselAlt": "Carousel ad preview showing a new client gel manicure offer",
    "carouselTitle": "New Client Gel Manicure",
    "carouselMeta": "Fresh color, cuticle care, and a glossy finish.",
    "carouselCta": "Book my nail appointment",
    "carouselCaption": "Carousel & offer creative",
    "formTitle": "Request your appointment",
    "formFields": [
      "Full name",
      "Phone number",
      "Service of interest"
    ],
    "formCta": "Request booking",
    "formStatus": "Lead captured & sent to your inbox",
    "formCaption": "Nail salon landing page & lead form",
    "conceptsLabel": "Campaign concepts we build for nail salons:",
    "concepts": [
      "New client gel manicure offer",
      "Pedicure refresh campaign",
      "Acrylic fill promotion",
      "BIAB / builder gel special",
      "Weekday appointment fill",
      "Seasonal nail art launch",
      "Bridal nail package",
      "French tip set campaign",
      "Lash + nail beauty bundle"
    ]
  },
  "cta": {
    "title": "Ready to stop wasting local ad clicks?",
    "body": "Get a free, practical growth plan built for your nail salon — your offers, your services, your local market. No pressure, no obligation.",
    "button": "Get Free Plan"
  },
  "form": {
    "eyebrow": "Free, no pressure",
    "title": "Get your free nail growth plan",
    "body": "Tell us about your salon. We will send back what to fix first to get more bookings.",
    "expectations": [
      "Best offer angle to test",
      "Where bookings are leaking",
      "What to fix first"
    ],
    "privacy": "No spam. No pressure. We only use this to prepare your plan.",
    "successTitle": "Thank you!",
    "successBody": "We've received your details and will prepare your free nail salon growth plan. Our team will reach out shortly with your next steps.",
    "labels": {
      "fullName": "Full name",
      "businessName": "Business name",
      "phone": "Phone number",
      "email": "Email",
      "businessType": "Business type",
      "budget": "Monthly ad budget",
      "message": "Anything else?",
      "optional": "(optional)"
    },
    "placeholders": {
      "fullName": "Jane Doe",
      "businessName": "Gloss Nail Studio",
      "phone": "(555) 123-4567",
      "email": "you@nailsalon.com",
      "businessType": "Select type",
      "budget": "Select budget",
      "message": "Tell us about your goals, location, or current challenges."
    },
    "businessTypes": [
      {
        "value": "Nail Salon",
        "label": "Nail Salon"
      },
      {
        "value": "Manicure / Pedicure Studio",
        "label": "Manicure / Pedicure Studio"
      },
      {
        "value": "Independent Nail Tech",
        "label": "Independent Nail Tech"
      },
      {
        "value": "Mobile Nail Artist",
        "label": "Mobile Nail Artist"
      },
      {
        "value": "Nail & Beauty Salon",
        "label": "Nail & Beauty Salon"
      },
      {
        "value": "Lash, Brow & Nail Studio",
        "label": "Lash, Brow & Nail Studio"
      },
      {
        "value": "Beauty Bar",
        "label": "Beauty Bar"
      },
      {
        "value": "Other Nail Business",
        "label": "Other Nail Business"
      }
    ],
    "budgets": [
      {
        "value": "Under $500/month",
        "label": "Under $500/month"
      },
      {
        "value": "$500–$1,000/month",
        "label": "$500–$1,000/month"
      },
      {
        "value": "$1,000–$2,500/month",
        "label": "$1,000–$2,500/month"
      },
      {
        "value": "$2,500+/month",
        "label": "$2,500+/month"
      },
      {
        "value": "Not sure yet",
        "label": "Not sure yet"
      }
    ],
    "submitting": "Submitting...",
    "submit": "Get Free Plan",
    "footer": "No spam. No pressure. Just your free plan."
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Questions nail salon owners ask us",
    "items": [
      {
        "q": "Do I need to already have ads running?",
        "a": "No. We can build the funnel from scratch."
      },
      {
        "q": "Is this only for nail salons?",
        "a": "It is built for nail salons, nail techs, and beauty studios."
      },
      {
        "q": "Do you create the ad content?",
        "a": "Yes. We create the ad concepts, visuals, and offers."
      },
      {
        "q": "Do I need a website?",
        "a": "No. We build the landing page and lead form for the campaign."
      },
      {
        "q": "Will this guarantee bookings?",
        "a": "No. We build the system to improve conversion, but bookings depend on offer, market, and follow-up."
      },
      {
        "q": "How much ad budget do I need?",
        "a": "It depends on your area. We will recommend a realistic starting budget."
      },
      {
        "q": "What happens after I submit the form?",
        "a": "We review your salon and send back a practical plan."
      },
      {
        "q": "Can this work for gel, acrylics, pedicures, or nail art?",
        "a": "Yes. We tailor the funnel around your strongest nail service or offer."
      }
    ]
  },
  "footer": {
    "tagline": "Paid-ad growth systems for nail salons and beauty businesses.",
    "link": "Get your free nail salon growth plan",
    "rights": "All rights reserved."
  }
},
  vi: {
  "lang": {
    "current": "VI",
    "next": "EN",
    "toggleLabel": "Switch to English"
  },
  "header": {
    "how": "Offer",
    "package": "Gói $119",
    "results": "Kết quả",
    "faq": "FAQ",
    "cta": "Nhận plan miễn phí"
  },
  "hero": {
    "eyebrow": "Dành cho nail salon, manicure bar, beauty studio và mobile nail artist",
    "title": "Đừng để khách nail rơi mất sau cú click",
    "body": "Offer rõ, ads local, booking page và form để biến click thành lịch nail. $119/tháng.",
    "primary": "Nhận plan miễn phí",
    "secondary": "Xem gói $119",
    "trusted": "Được tin dùng bởi chủ nail salon và beauty business local",
    "lockIn": "Không ràng buộc dài hạn",
    "leadTitle": "Yêu cầu tư vấn mới",
    "leadMeta": "Gel manicure · 2 phút trước",
    "callTitle": "+12 leads tuần này",
    "callMeta": "từ local ad campaign của bạn",
    "imageAlt": "Tiệm nail Việt với nail technician người Việt/Asian đang làm gel manicure cho khách"
  },
  "results": {
    "title": "Xây để biến click ads thành booking",
    "stats": [
      {
        "value": "+50%",
        "label": "thêm booking requests"
      },
      {
        "value": "24/7",
        "label": "đường ads-to-booking"
      },
      {
        "value": "Done-for-you",
        "label": "ads + booking page"
      }
    ]
  },
  "system": {
    "eyebrow": "Vietgrow Nail Salon Growth System",
    "title": "Funnel 3 phần Vietgrow xây cho nail salon của bạn",
    "body": "Không boost post ngẫu nhiên. Một offer rõ, một campaign local, một page được xây để đặt lịch.",
    "steps": [
      {
        "number": "01",
        "title": "Làm rõ offer",
        "description": "Chúng tôi biến dịch vụ của bạn thành campaign concept rõ ràng, dễ click: gel manicure offer, pedicure promo, acrylic fill special, nail art set, bridal package và seasonal design, kèm ý tưởng video ngắn, carousel creative và visual chuẩn beauty.",
        "tags": [
          "Offer strategy",
          "Video & carousel ads",
          "Premium visuals"
        ]
      },
      {
        "number": "02",
        "title": "Kéo traffic local đúng tệp",
        "description": "Chúng tôi launch và quản lý campaign Facebook & Instagram tập trung vào nhóm khách gần salon, có khả năng đặt manicure, pedicure, extension, fill và nail art.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Chuyển đổi trên landing page",
        "description": "Traffic được đưa về landing page riêng cho nail salon, có lead form và journey tối ưu chuyển đổi để tạo appointment inquiry, design request và cơ hội booking thật.",
        "tags": [
          "Landing page",
          "Lead form",
          "Follow-up path"
        ]
      }
    ],
    "flow": [
      "Nail Offer + Ad Creative",
      "Local Traffic",
      "Landing Page + Lead Form",
      "Appointment / Booking"
    ]
  },
  "package": {
    "eyebrow": "Gói dịch vụ",
    "title": "Hệ thống booking nail $119/tháng",
    "body": "Những phần cần để launch một local ad funnel gọn.",
    "label": "Nail Salon Growth System",
    "cardTitle": "Ad funnel done-for-you",
    "cardBody": "Vietgrow làm ads, page, form và tối ưu hằng tháng.",
    "priceMeta": "mỗi tháng",
    "cta": "Nhận plan miễn phí",
    "included": "Bao gồm tất cả:",
    "includes": [
      "12 bài post mỗi tháng",
      "Setup Facebook & Instagram ads",
      "Ad creative ngành nail",
      "Target khách local",
      "Landing page + lead form",
      "Tối ưu hằng tháng"
    ]
  },
  "campaign": {
    "eyebrow": "Campaign preview",
    "title": "Hành trình từ ad đến booking sẽ trông như thế nào",
    "body": "Từ một mẫu ad thu hút trên feed đến form đặt lịch hoàn chỉnh, đây là experience chúng tôi xây cho khách của bạn.",
    "videoAlt": "Video ad preview cho gói manicure và nail art",
    "videoTitle": "Gloss & Go Gel Set",
    "videoMeta": "Gel manicure + simple art · Book trong tuần này",
    "videoCaption": "Short-form video ad",
    "carouselAlt": "Carousel ad preview cho offer gel manicure khách mới",
    "carouselTitle": "New Client Gel Manicure",
    "carouselMeta": "Màu mới, chăm sóc cuticle và finish bóng đẹp.",
    "carouselCta": "Book lịch làm nail",
    "carouselCaption": "Carousel & offer creative",
    "formTitle": "Đăng ký lịch hẹn",
    "formFields": [
      "Họ và tên",
      "Số điện thoại",
      "Dịch vụ quan tâm"
    ],
    "formCta": "Yêu cầu booking",
    "formStatus": "Lead đã được ghi nhận và gửi về inbox",
    "formCaption": "Nail salon landing page & lead form",
    "conceptsLabel": "Campaign concept chúng tôi xây cho nail salon:",
    "concepts": [
      "Offer gel manicure cho khách mới",
      "Campaign pedicure refresh",
      "Promotion acrylic fill",
      "BIAB / builder gel special",
      "Lấp lịch hẹn ngày thường",
      "Launch seasonal nail art",
      "Bridal nail package",
      "Campaign French tip set",
      "Bundle lash + nail beauty"
    ]
  },
  "cta": {
    "title": "Sẵn sàng ngừng lãng phí click local?",
    "body": "Nhận một growth plan thực tế, miễn phí, được xây theo nail salon của bạn: offer, dịch vụ và thị trường local. Không ép bán, không ràng buộc.",
    "button": "Nhận plan miễn phí"
  },
  "form": {
    "eyebrow": "Miễn phí, không áp lực",
    "title": "Nhận plan miễn phí",
    "body": "Gửi thông tin salon. Vietgrow sẽ chỉ ra nên sửa gì trước để có thêm booking.",
    "expectations": [
      "Offer angle nên test",
      "Điểm đang rò rỉ booking",
      "Việc cần sửa trước"
    ],
    "privacy": "Không spam. Không gây áp lực. Chỉ dùng để chuẩn bị plan.",
    "successTitle": "Cảm ơn bạn!",
    "successBody": "Chúng tôi đã nhận thông tin và sẽ chuẩn bị nail salon growth plan miễn phí. Team Vietgrow sẽ liên hệ sớm với bước tiếp theo.",
    "labels": {
      "fullName": "Họ và tên",
      "businessName": "Tên business",
      "phone": "Số điện thoại",
      "email": "Email",
      "businessType": "Loại hình business",
      "budget": "Ngân sách ads hằng tháng",
      "message": "Thông tin thêm?",
      "optional": "(không bắt buộc)"
    },
    "placeholders": {
      "fullName": "Nguyen An",
      "businessName": "Gloss Nail Studio",
      "phone": "(555) 123-4567",
      "email": "you@nailsalon.com",
      "businessType": "Chọn loại hình",
      "budget": "Chọn ngân sách",
      "message": "Chia sẻ mục tiêu, khu vực hoặc vấn đề hiện tại của bạn."
    },
    "businessTypes": [
      {
        "value": "Nail Salon",
        "label": "Nail Salon"
      },
      {
        "value": "Manicure / Pedicure Studio",
        "label": "Manicure / Pedicure Studio"
      },
      {
        "value": "Independent Nail Tech",
        "label": "Independent Nail Tech"
      },
      {
        "value": "Mobile Nail Artist",
        "label": "Mobile Nail Artist"
      },
      {
        "value": "Nail & Beauty Salon",
        "label": "Nail & Beauty Salon"
      },
      {
        "value": "Lash, Brow & Nail Studio",
        "label": "Lash, Brow & Nail Studio"
      },
      {
        "value": "Beauty Bar",
        "label": "Beauty Bar"
      },
      {
        "value": "Other Nail Business",
        "label": "Nail/beauty business khác"
      }
    ],
    "budgets": [
      {
        "value": "Under $500/month",
        "label": "Dưới $500/tháng"
      },
      {
        "value": "$500–$1,000/month",
        "label": "$500–$1,000/tháng"
      },
      {
        "value": "$1,000–$2,500/month",
        "label": "$1,000–$2,500/tháng"
      },
      {
        "value": "$2,500+/month",
        "label": "Trên $2,500/tháng"
      },
      {
        "value": "Not sure yet",
        "label": "Chưa chắc"
      }
    ],
    "submitting": "Đang gửi...",
    "submit": "Nhận plan miễn phí",
    "footer": "Không spam. Không áp lực. Chỉ là plan miễn phí cho bạn."
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Những câu hỏi chủ nail salon thường hỏi",
    "items": [
      {
        "q": "Tôi có cần đang chạy ads sẵn không?",
        "a": "Không. Vietgrow có thể xây funnel từ đầu."
      },
      {
        "q": "Dịch vụ này chỉ dành cho nail salon thôi hả?",
        "a": "Dành cho nail salon, nail tech và beauty studio."
      },
      {
        "q": "Vietgrow có làm ad content không?",
        "a": "Có. Vietgrow làm concept, visual và offer cho ads."
      },
      {
        "q": "Tôi có cần website không?",
        "a": "Không. Vietgrow xây landing page và lead form cho campaign."
      },
      {
        "q": "Dịch vụ này có cam kết booking không?",
        "a": "Không cam kết số booking tuyệt đối. Vietgrow xây hệ thống để tăng khả năng chuyển đổi."
      },
      {
        "q": "Tôi cần ngân sách ads bao nhiêu?",
        "a": "Tùy khu vực. Vietgrow sẽ đề xuất mức bắt đầu thực tế."
      },
      {
        "q": "Sau khi gửi form thì chuyện gì xảy ra?",
        "a": "Vietgrow review salon và gửi lại plan thực tế."
      },
      {
        "q": "Có phù hợp với gel, acrylic, pedicure hoặc nail art không?",
        "a": "Có. Funnel sẽ đi theo dịch vụ hoặc offer mạnh nhất của bạn."
      }
    ]
  },
  "footer": {
    "tagline": "Hệ thống paid ads growth cho nail salon và beauty business.",
    "link": "Nhận nail salon growth plan miễn phí",
    "rights": "All rights reserved."
  }
},
} as const

type Copy = (typeof copy)[Language]

const LanguageContext = createContext<
  | {
      language: Language
      setLanguage: (language: Language) => void
      toggleLanguage: () => void
      copy: Copy
    }
  | undefined
>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('vietgrow-language')
    if (stored === 'en' || stored === 'vi') {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('vietgrow-language', nextLanguage)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'en' ? 'vi' : 'en'),
      copy: copy[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
