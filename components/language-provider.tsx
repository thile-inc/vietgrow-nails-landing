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
    lang: {
      current: "EN",
      next: "VI",
      toggleLabel: "Switch to Vietnamese"
    },
    header: {
      how: "How it works",
      package: "$119 plan",
      results: "Proof",
      faq: "FAQ",
      cta: "Get Free Plan"
    },
    hero: {
      eyebrow: "For nail salons and nail techs",
      title: "Add 50 New Nail Bookings a Month",
      body: "Launch one easy-to-book nail offer, run local ads, and send clients to a page built to book.",
      primary: "Get Free Plan",
      secondary: "See how it works",
      trusted: "For nail owners who need fuller calendars",
      lockIn: "No long-term contract",
      leadTitle: "New booking request",
      leadMeta: "Gel manicure - 2 min ago",
      callTitle: "50 new bookings/month",
      callMeta: "from one local campaign",
      imageAlt: "A Vietnamese nail salon with an Asian nail technician doing a gel manicure"
    },
    results: {
      title: "Turn ad clicks into nail appointments.",
      stats: [
        {
          value: "50",
          label: "new bookings/month"
        },
        {
          value: "1",
          label: "offer to launch"
        },
        {
          value: "$119",
          label: "per month"
        }
      ]
    },
    system: {
      eyebrow: "How it works",
      title: "Pick an offer. Run ads. Fill the calendar.",
      body: "Give new clients one clear reason to book.",
      steps: [
        {
          number: "01",
          title: "Pick one starter offer",
          description: "Turn gel, pedi, or full set into a clear new-client offer.",
          tags: [
            "Offer",
            "Price",
            "Hook"
          ]
        },
        {
          number: "02",
          title: "Run targeted ads",
          description: "Show it to the right nearby clients on Facebook and Instagram.",
          tags: [
            "Facebook",
            "Instagram",
            "Nearby clients"
          ]
        },
        {
          number: "03",
          title: "Drive bookings",
          description: "Send clicks to a short page that pushes booking requests.",
          tags: [
            "Booking page",
            "Form",
            "Follow-up"
          ]
        }
      ],
      flow: [
        "Starter offer",
        "Targeted ads",
        "Booking page",
        "Booking request"
      ]
    },
    package: {
      eyebrow: "What you get",
      title: "Launch your nail booking campaign for $119/month",
      body: "Get the pieces needed to turn one offer into new nail appointments.",
      label: "Nail Booking System",
      cardTitle: "Built for nail bookings",
      cardBody: "We build the campaign and improve it each month.",
      price: "$119",
      priceMeta: "per month",
      cta: "Get my free plan",
      included: "Included:",
      includes: [
        "12 posts per month",
        "Facebook and Instagram setup",
        "Nail ad creative",
        "Local targeting",
        "Booking page and form",
        "Monthly improvements"
      ]
    },
    campaign: {
      eyebrow: "Campaign preview",
      title: "What a client sees",
      body: "A clear nail offer and one easy way to request an appointment.",
      videoAlt: "Video ad preview for a nail offer",
      videoTitle: "Fresh Gel Set",
      videoMeta: "Gel manicure - book this week",
      videoCaption: "Short video ad",
      carouselAlt: "Carousel ad preview for a nail offer",
      carouselTitle: "New Client Gel Manicure",
      carouselMeta: "Fresh color and clean finish for first-time guests.",
      carouselCta: "Request my appointment",
      carouselCaption: "Offer creative",
      formTitle: "Request your appointment",
      formFields: [
        "Full name",
        "Phone number",
        "Service interest"
      ],
      formCta: "Send request",
      formStatus: "Request sent to your inbox",
      formCaption: "Landing page and inquiry form",
      conceptsLabel: "Strong nail campaign angles:",
      concepts: [
        "Gel manicure for new clients",
        "Pedicure refresh",
        "Acrylic fill",
        "Builder gel set",
        "Weekday appointment fill",
        "Seasonal nail art",
        "Bridal nails",
        "French tip set",
        "Nail and lash bundle"
      ]
    },
    cta: {
      title: "Start filling more nail slots",
      body: "Get the first offer and booking path your salon should run.",
      button: "Get Free Plan"
    },
    form: {
      eyebrow: "Free, no pressure",
      title: "Get your nail booking plan",
      body: "Tell us about your salon. We will show you what to promote first.",
      expectations: [
        "Which offer to launch",
        "What revenue target to aim for",
        "What channel to fix first"
      ],
      privacy: "No spam. We only use this to prepare your plan.",
      successTitle: "Thank you!",
      successBody: "We received your details. Vietgrow will review your salon and send the next step shortly.",
      labels: {
        fullName: "Full name",
        businessName: "Business name",
        phone: "Phone number",
        email: "Email",
        businessType: "Business type",
        budget: "Current monthly revenue",
        message: "Anything else?",
        optional: "(optional)",
        revenueGoal: "How much more revenue do you want in 12 months?",
        currentAssets: "What do you already have?"
      },
      placeholders: {
        fullName: "Jane Doe",
        businessName: "Gloss Nail Studio",
        phone: "(555) 123-4567",
        email: "you@nailsalon.com",
        businessType: "Select type",
        budget: "Select current revenue",
        message: "Share your city, main service, or current challenge.",
        revenueGoal: "Select revenue goal",
        currentAssets: "Select current assets"
      },
      businessTypes: [
        {
          value: "Nail Salon",
          label: "Nail Salon"
        },
        {
          value: "Manicure / Pedicure Studio",
          label: "Manicure / Pedicure Studio"
        },
        {
          value: "Independent Nail Tech",
          label: "Independent Nail Tech"
        },
        {
          value: "Mobile Nail Artist",
          label: "Mobile Nail Artist"
        },
        {
          value: "Nail & Beauty Salon",
          label: "Nail & Beauty Salon"
        },
        {
          value: "Beauty Bar",
          label: "Beauty Bar"
        },
        {
          value: "Other Nail Business",
          label: "Other Nail Business"
        }
      ],
      budgets: [
        {
          value: "$5k/month",
          label: "$5k/month"
        },
        {
          value: "$10k/month",
          label: "$10k/month"
        },
        {
          value: "$50k/month",
          label: "$50k/month"
        },
        {
          value: "$100k+/month",
          label: "$100k+/month"
        }
      ],
      submitting: "Submitting...",
      submit: "Get Free Plan",
      footer: "No spam. Just a practical plan.",
      revenueGoals: [
        {
          value: "+$5k/month",
          label: "+$5k/month"
        },
        {
          value: "+$10k/month",
          label: "+$10k/month"
        },
        {
          value: "+$50k/month",
          label: "+$50k/month"
        },
        {
          value: "+$100k+/month",
          label: "+$100k+/month"
        }
      ],
      currentAssets: [
        {
          value: "Website",
          label: "Website"
        },
        {
          value: "Facebook / Instagram / TikTok",
          label: "Facebook / Instagram / TikTok"
        },
        {
          value: "Google Maps profile",
          label: "Google Maps profile"
        },
        {
          value: "Website + social channels",
          label: "Website + social channels"
        },
        {
          value: "Social channels + Google Maps profile",
          label: "Social channels + Google Maps profile"
        },
        {
          value: "Website + social channels + Google Maps profile",
          label: "Website + social channels + Google Maps profile"
        },
        {
          value: "None yet",
          label: "None yet"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "What nail salon owners ask",
      items: [
        {
          q: "Do I need ads already?",
          a: "No. We can start from zero."
        },
        {
          q: "Do I need a website?",
          a: "No. We create the booking page."
        },
        {
          q: "Is 50 guaranteed?",
          a: "No. It is the campaign target. Results depend on your offer, area, budget, and follow-up."
        },
        {
          q: "What happens after I submit?",
          a: "We review your salon and send a simple campaign plan."
        }
      ]
    },
    footer: {
      tagline: "Paid ad campaigns for nail salons and beauty studios.",
      link: "Get your free nail booking plan",
      rights: "All rights reserved."
    }
  },
  vi: {
    lang: {
      current: "VI",
      next: "EN",
      toggleLabel: "Chuyển sang tiếng Anh"
    },
    header: {
      how: "Cách làm",
      package: "Gói $119",
      results: "Kết quả",
      faq: "Hỏi đáp",
      cta: "Nhận kế hoạch miễn phí"
    },
    hero: {
      eyebrow: "Dành cho tiệm nail và thợ nail",
      title: "Kéo thêm 50 lịch nail mới mỗi tháng",
      body: "Dựng offer mồi, chạy quảng cáo đúng tệp, đưa khách về trang đặt lịch.",
      primary: "Nhận kế hoạch miễn phí",
      secondary: "Xem cách làm",
      trusted: "Dành cho chủ tiệm nail muốn kín lịch hơn",
      lockIn: "Không ràng buộc dài hạn",
      leadTitle: "Yêu cầu đặt lịch mới",
      leadMeta: "Sơn gel - 2 phút trước",
      callTitle: "50 lịch nail mới/tháng",
      callMeta: "từ một chiến dịch địa phương",
      imageAlt: "Tiệm nail Việt với kỹ thuật viên đang làm móng gel cho khách"
    },
    results: {
      title: "Biến cú nhấp quảng cáo thành lịch hẹn làm nail.",
      stats: [
        {
          value: "50",
          label: "lịch nail mới/tháng"
        },
        {
          value: "1",
          label: "offer mồi cần chạy"
        },
        {
          value: "$119",
          label: "mỗi tháng"
        }
      ]
    },
    system: {
      eyebrow: "Cách làm",
      title: "Chọn offer. Chạy quảng cáo. Lấp lịch.",
      body: "Offer càng rõ, khách càng dễ đặt lịch.",
      steps: [
        {
          number: "01",
          title: "Chọn offer mồi",
          description: "Lấy gel, pedi hoặc full set rồi gắn ưu đãi đủ hút khách mới.",
          tags: [
            "Offer mồi",
            "Ưu đãi",
            "Hook"
          ]
        },
        {
          number: "02",
          title: "Chạy quảng cáo đúng tệp",
          description: "Đưa ưu đãi đến đúng khách quanh tiệm trên Facebook và Instagram.",
          tags: [
            "Facebook",
            "Instagram",
            "Khách quanh tiệm"
          ]
        },
        {
          number: "03",
          title: "Chốt lượt đặt lịch",
          description: "Dẫn khách về một trang ngắn, tập trung vào yêu cầu đặt lịch.",
          tags: [
            "Trang đặt lịch",
            "Biểu mẫu",
            "Chăm sóc khách"
          ]
        }
      ],
      flow: [
        "Offer mồi",
        "Quảng cáo đúng tệp",
        "Trang đặt lịch",
        "Yêu cầu đặt lịch"
      ]
    },
    package: {
      eyebrow: "Bạn nhận được gì",
      title: "Chạy chiến dịch đặt lịch nail với $119/tháng",
      body: "Có đủ phần cần chạy để biến một offer thành lịch hẹn mới.",
      label: "Hệ thống đặt lịch nail",
      cardTitle: "Xây cho tiệm nail cần thêm lịch hẹn",
      cardBody: "Vietgrow dựng chiến dịch và cải thiện hằng tháng.",
      price: "$119",
      priceMeta: "mỗi tháng",
      cta: "Nhận kế hoạch miễn phí",
      included: "Bao gồm:",
      includes: [
        "12 bài đăng mỗi tháng",
        "Thiết lập Facebook và Instagram",
        "Mẫu quảng cáo ngành nail",
        "Nhắm khách quanh tiệm",
        "Trang đặt lịch và biểu mẫu",
        "Cải thiện hằng tháng"
      ]
    },
    campaign: {
      eyebrow: "Minh họa chiến dịch",
      title: "Khách sẽ thấy gì",
      body: "Một ưu đãi nail rõ ràng và một cách đặt lịch thật dễ.",
      videoAlt: "Mẫu quảng cáo cho offer nail",
      videoTitle: "Bộ móng gel mới",
      videoMeta: "Sơn gel - đặt lịch trong tuần",
      videoCaption: "Quảng cáo video ngắn",
      carouselAlt: "Mẫu quảng cáo cho offer nail",
      carouselTitle: "Sơn gel cho khách mới",
      carouselMeta: "Màu đẹp, dáng sạch, hoàn thiện chỉn chu cho khách lần đầu.",
      carouselCta: "Tôi muốn đặt lịch",
      carouselCaption: "Mẫu ưu đãi",
      formTitle: "Gửi yêu cầu đặt lịch",
      formFields: [
        "Họ và tên",
        "Số điện thoại",
        "Dịch vụ quan tâm"
      ],
      formCta: "Gửi yêu cầu",
      formStatus: "Yêu cầu đã được gửi về hộp thư của bạn",
      formCaption: "Trang đích và biểu mẫu đặt lịch",
      conceptsLabel: "Góc chiến dịch mạnh cho tiệm nail:",
      concepts: [
        "Sơn gel cho khách mới",
        "Làm mới móng chân",
        "Dặm bột",
        "Gel cứng",
        "Lấp lịch ngày thường",
        "Mẫu móng theo mùa",
        "Móng cô dâu",
        "Móng kiểu Pháp",
        "Gói móng và mi"
      ]
    },
    cta: {
      title: "Bắt đầu lấp thêm lịch hẹn cho tiệm nail",
      body: "Nhận offer và đường đặt lịch nên chạy trước.",
      button: "Nhận kế hoạch miễn phí"
    },
    form: {
      eyebrow: "Miễn phí, không gây áp lực",
      title: "Nhận kế hoạch kéo lịch hẹn cho tiệm nail",
      body: "Cho Vietgrow biết về tiệm của bạn. Chúng tôi sẽ gợi ý offer nên chạy trước.",
      expectations: [
        "Offer nên chạy",
        "Mục tiêu doanh thu nên nhắm tới",
        "Kênh cần sửa trước"
      ],
      privacy: "Không gửi thư rác. Thông tin chỉ dùng để chuẩn bị kế hoạch.",
      successTitle: "Cảm ơn bạn!",
      successBody: "Vietgrow đã nhận thông tin và sẽ xem tiệm của bạn để gửi bước tiếp theo.",
      labels: {
        fullName: "Họ và tên",
        businessName: "Tên cơ sở",
        phone: "Số điện thoại",
        email: "Email",
        businessType: "Loại hình cơ sở",
        budget: "Doanh thu hiện tại của tiệm",
        message: "Thông tin thêm?",
        optional: "(không bắt buộc)",
        revenueGoal: "Trong 12 tháng muốn tăng thêm bao nhiêu doanh thu?",
        currentAssets: "Hiện tại bạn đang có gì?"
      },
      placeholders: {
        fullName: "Nguyễn An",
        businessName: "Gloss Nail Studio",
        phone: "(555) 123-4567",
        email: "you@nailsalon.com",
        businessType: "Chọn loại hình",
        budget: "Chọn mức doanh thu hiện tại",
        message: "Chia sẻ thêm khu vực, dịch vụ chính hoặc vấn đề bạn đang gặp.",
        revenueGoal: "Chọn mục tiêu tăng doanh thu",
        currentAssets: "Chọn những gì đang có"
      },
      businessTypes: [
        {
          value: "Nail Salon",
          label: "Tiệm nail"
        },
        {
          value: "Manicure / Pedicure Studio",
          label: "Tiệm làm móng tay và móng chân"
        },
        {
          value: "Independent Nail Tech",
          label: "Thợ nail độc lập"
        },
        {
          value: "Mobile Nail Artist",
          label: "Thợ nail phục vụ tận nơi"
        },
        {
          value: "Nail & Beauty Salon",
          label: "Tiệm nail và làm đẹp"
        },
        {
          value: "Beauty Bar",
          label: "Salon làm đẹp"
        },
        {
          value: "Other Nail Business",
          label: "Loại hình nail khác"
        }
      ],
      budgets: [
        {
          value: "$5k/month",
          label: "$5k mỗi tháng"
        },
        {
          value: "$10k/month",
          label: "$10k mỗi tháng"
        },
        {
          value: "$50k/month",
          label: "$50k mỗi tháng"
        },
        {
          value: "$100k+/month",
          label: "Trên $100k mỗi tháng"
        }
      ],
      submitting: "Đang gửi...",
      submit: "Nhận kế hoạch miễn phí",
      footer: "Không gửi thư rác. Chỉ là một kế hoạch thực tế.",
      revenueGoals: [
        {
          value: "+$5k/month",
          label: "Tăng thêm $5k mỗi tháng"
        },
        {
          value: "+$10k/month",
          label: "Tăng thêm $10k mỗi tháng"
        },
        {
          value: "+$50k/month",
          label: "Tăng thêm $50k mỗi tháng"
        },
        {
          value: "+$100k+/month",
          label: "Tăng thêm trên $100k mỗi tháng"
        }
      ],
      currentAssets: [
        {
          value: "Website",
          label: "Website"
        },
        {
          value: "Facebook / Instagram / TikTok",
          label: "Facebook / Instagram / TikTok"
        },
        {
          value: "Google Maps profile",
          label: "Hồ sơ Google Maps"
        },
        {
          value: "Website + social channels",
          label: "Website và kênh mạng xã hội"
        },
        {
          value: "Social channels + Google Maps profile",
          label: "Kênh mạng xã hội và hồ sơ Google Maps"
        },
        {
          value: "Website + social channels + Google Maps profile",
          label: "Website, kênh mạng xã hội và hồ sơ Google Maps"
        },
        {
          value: "None yet",
          label: "Chưa có gì"
        }
      ]
    },
    faq: {
      eyebrow: "Hỏi đáp",
      title: "Chủ tiệm nail thường hỏi",
      items: [
        {
          q: "Tôi có cần đang chạy quảng cáo không?",
          a: "Không. Vietgrow có thể bắt đầu từ con số không."
        },
        {
          q: "Tôi có cần website không?",
          a: "Không. Vietgrow tạo trang đặt lịch riêng."
        },
        {
          q: "Có cam kết đúng 50 lượt không?",
          a: "Không. Đây là mục tiêu chiến dịch. Kết quả phụ thuộc vào ưu đãi, khu vực, ngân sách và cách chăm sóc khách."
        },
        {
          q: "Sau khi gửi thông tin thì sao?",
          a: "Vietgrow xem tiệm của bạn và gửi kế hoạch chiến dịch ngắn gọn."
        }
      ]
    },
    footer: {
      tagline: "Chiến dịch quảng cáo cho tiệm nail và salon làm đẹp.",
      link: "Nhận kế hoạch đặt lịch miễn phí",
      rights: "Đã đăng ký bản quyền."
    }
  }
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
