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
      eyebrow: "For nail salons, nail techs, beauty bars, and manicure studios",
      title: "Get 50 Nail Booking Requests Without Discounting Every Service",
      body: "Vietgrow builds the offer, ads, booking page, and inquiry form so nearby clients know exactly why to choose your salon.",
      primary: "Get Free Plan",
      secondary: "See how it works",
      trusted: "Built for local nail and beauty owners",
      lockIn: "No long-term contract",
      leadTitle: "New appointment request",
      leadMeta: "Gel manicure - 2 min ago",
      callTitle: "50 booking requests",
      callMeta: "from one local campaign",
      imageAlt: "A Vietnamese nail salon with an Asian nail technician doing a gel manicure"
    },
    results: {
      title: "A clearer path from ad click to nail appointment",
      stats: [
        {
          value: "50",
          label: "nail booking requests"
        },
        {
          value: "24/7",
          label: "booking path stays live"
        },
        {
          value: "$119",
          label: "monthly system fee"
        }
      ]
    },
    system: {
      eyebrow: "How it works",
      title: "Choose one nail offer. Reach the right clients. Turn clicks into bookings.",
      body: "A simple three-step path built for new appointment requests.",
      steps: [
        {
          number: "01",
          title: "Choose the nail service",
          description: "Pick one nail service with a bold price offer to attract new clients.",
          tags: [
            "Nail service",
            "Price offer",
            "Hook"
          ]
        },
        {
          number: "02",
          title: "Run targeted ads",
          description: "Run effective Facebook and Instagram ads aimed at the right local clients.",
          tags: [
            "Facebook",
            "Instagram",
            "Local audience"
          ]
        },
        {
          number: "03",
          title: "Convert the click",
          description: "Maximize conversion from ad click to booking request.",
          tags: [
            "Booking page",
            "Inquiry form",
            "Follow-up"
          ]
        }
      ],
      flow: [
        "Nail service offer",
        "Targeted ads",
        "Short booking page",
        "Booking request"
      ]
    },
    package: {
      eyebrow: "What you get",
      title: "$119/month nail booking system",
      body: "A focused setup for salons that need appointment requests, not quiet weekdays.",
      label: "Nail Booking System",
      cardTitle: "Built for nail appointments",
      cardBody: "We prepare the campaign pieces and improve them month by month.",
      price: "$119",
      priceMeta: "per month",
      cta: "Get my free plan",
      included: "Included:",
      includes: [
        "12 posts per month",
        "Facebook and Instagram ad setup",
        "Nail-focused ad creative",
        "Local audience targeting",
        "Booking page and inquiry form",
        "Monthly campaign improvement"
      ]
    },
    campaign: {
      eyebrow: "Campaign preview",
      title: "What clients see before they book",
      body: "A clear nail offer, a short page, and an easy way to request an appointment.",
      videoAlt: "Video ad preview for a spa package",
      videoTitle: "Fresh Gel Set",
      videoMeta: "Gel manicure - book this week",
      videoCaption: "Short video ad",
      carouselAlt: "Carousel ad preview for a spa offer",
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
      title: "Fill more appointment slots with a clearer offer",
      body: "Get a simple plan for the nail offer, page, and ad angle to test first.",
      button: "Get Free Plan"
    },
    form: {
      eyebrow: "Free, no pressure",
      title: "Get your free nail booking plan",
      body: "Tell us about your salon. We will show you which offer to run first to grow revenue.",
      expectations: [
        "Best service or offer to run first",
        "Revenue target to aim for over 12 months",
        "Which current channel to fix first for better conversion"
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
      title: "Questions nail salon owners ask us",
      items: [
        {
          q: "Do I need ads running already?",
          a: "No. We can start from zero."
        },
        {
          q: "Is this only for nail salons?",
          a: "It is built for nail salons, nail techs, and beauty studios."
        },
        {
          q: "Do I need a website?",
          a: "No. We create the campaign landing page."
        },
        {
          q: "Is 30 guaranteed?",
          a: "No. We create the campaign booking page."
        },
        {
          q: "Is 50 guaranteed?",
          a: "No. It is the campaign target. Results depend on your market, offer, budget, and follow-up."
        },
        {
          q: "What happens after I submit?",
          a: "We review your spa and send a simple campaign plan."
        }
      ]
    },
    footer: {
      tagline: "Paid ad systems for nail salons and beauty businesses.",
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
      eyebrow: "Dành cho tiệm nail, thợ nail, salon làm đẹp và tiệm chăm sóc móng",
      title: "Có 50 lượt yêu cầu đặt lịch cho tiệm nail mà không cần giảm giá mọi dịch vụ",
      body: "Vietgrow xây ưu đãi, quảng cáo, trang đặt lịch và biểu mẫu để khách quanh khu vực hiểu ngay lý do nên chọn tiệm của bạn.",
      primary: "Nhận kế hoạch miễn phí",
      secondary: "Xem cách làm",
      trusted: "Dành cho chủ tiệm nail và làm đẹp tại địa phương",
      lockIn: "Không ràng buộc dài hạn",
      leadTitle: "Yêu cầu đặt lịch mới",
      leadMeta: "Sơn gel - 2 phút trước",
      callTitle: "50 lượt yêu cầu đặt lịch",
      callMeta: "từ một chiến dịch địa phương",
      imageAlt: "Tiệm nail Việt với kỹ thuật viên đang làm móng gel cho khách"
    },
    results: {
      title: "Đường đi rõ hơn từ cú nhấp quảng cáo đến lịch hẹn làm móng",
      stats: [
        {
          value: "50",
          label: "lượt yêu cầu đặt lịch nail"
        },
        {
          value: "24/7",
          label: "đường đặt lịch luôn hoạt động"
        },
        {
          value: "$119",
          label: "chi phí hằng tháng"
        }
      ]
    },
    system: {
      eyebrow: "Cách làm",
      title: "Chọn đúng dịch vụ nail. Chạy đúng khách. Tối đa hóa lượt đặt lịch.",
      body: "Quy trình 3 bước gọn để biến quảng cáo thành yêu cầu đặt lịch.",
      steps: [
        {
          number: "01",
          title: "Chọn dịch vụ nail",
          description: "Chọn 1 dịch vụ nail với giá giảm sốc để thu hút khách hàng.",
          tags: [
            "Dịch vụ nail",
            "Giá thu hút",
            "Điểm chú ý"
          ]
        },
        {
          number: "02",
          title: "Chạy quảng cáo đúng tệp",
          description: "Chạy quảng cáo Facebook và Instagram hiệu quả, nhắm đúng đối tượng khách hàng.",
          tags: [
            "Facebook",
            "Instagram",
            "Khách phù hợp"
          ]
        },
        {
          number: "03",
          title: "Tăng chuyển đổi",
          description: "Tăng tối đa chuyển đổi từ cú nhấp thành lượt yêu cầu đặt lịch.",
          tags: [
            "Trang đặt lịch",
            "Biểu mẫu",
            "Chăm sóc khách"
          ]
        }
      ],
      flow: [
        "Dịch vụ nail giá tốt",
        "Quảng cáo đúng tệp",
        "Trang đặt lịch ngắn",
        "Yêu cầu đặt lịch"
      ]
    },
    package: {
      eyebrow: "Bạn nhận được gì",
      title: "Hệ thống đặt lịch nail $119 mỗi tháng",
      body: "Một bộ triển khai gọn cho tiệm cần lịch hẹn mới, không phải những ngày vắng khách.",
      label: "Hệ thống đặt lịch nail",
      cardTitle: "Xây cho tiệm nail cần thêm lịch hẹn",
      cardBody: "Vietgrow chuẩn bị các phần của chiến dịch và cải thiện hằng tháng.",
      price: "$119",
      priceMeta: "mỗi tháng",
      cta: "Nhận kế hoạch miễn phí",
      included: "Bao gồm:",
      includes: [
        "12 bài đăng mỗi tháng",
        "Thiết lập quảng cáo Facebook và Instagram",
        "Mẫu quảng cáo đúng ngành nail",
        "Nhắm khách quanh khu vực",
        "Trang đặt lịch và biểu mẫu",
        "Cải thiện chiến dịch hằng tháng"
      ]
    },
    campaign: {
      eyebrow: "Minh họa chiến dịch",
      title: "Khách thấy gì trước khi đặt lịch",
      body: "Một ưu đãi nail rõ ràng, một trang ngắn và một cách đặt lịch dễ hiểu.",
      videoAlt: "Mẫu quảng cáo cho gói spa",
      videoTitle: "Bộ móng gel mới",
      videoMeta: "Sơn gel - đặt lịch trong tuần",
      videoCaption: "Quảng cáo video ngắn",
      carouselAlt: "Mẫu quảng cáo cho ưu đãi spa",
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
      title: "Lấp thêm lịch hẹn bằng một ưu đãi rõ ràng",
      body: "Nhận kế hoạch đơn giản cho ưu đãi nail, trang đặt lịch và góc quảng cáo nên thử trước.",
      button: "Nhận kế hoạch miễn phí"
    },
    form: {
      eyebrow: "Miễn phí, không gây áp lực",
      title: "Nhận kế hoạch đặt lịch miễn phí cho tiệm nail",
      body: "Cho Vietgrow biết về tiệm của bạn. Chúng tôi sẽ chỉ ra nên chạy ưu đãi nào trước để tăng doanh thu.",
      expectations: [
        "Dịch vụ hoặc ưu đãi nên chạy trước",
        "Mức doanh thu cần nhắm trong 12 tháng",
        "Kênh hiện tại nên sửa trước để tăng chuyển đổi"
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
          q: "Dịch vụ này chỉ dành cho tiệm nail không?",
          a: "Dành cho tiệm nail, thợ nail và salon làm đẹp."
        },
        {
          q: "Tôi có cần website không?",
          a: "Không. Vietgrow tạo trang riêng cho chiến dịch."
        },
        {
          q: "Có cam kết đúng 30 lượt không?",
          a: "Không. Vietgrow tạo trang đặt lịch riêng cho chiến dịch."
        },
        {
          q: "Có cam kết đúng 50 lượt không?",
          a: "Không. Đây là mục tiêu chiến dịch. Kết quả phụ thuộc vào khu vực, ưu đãi, ngân sách và cách chăm sóc khách."
        },
        {
          q: "Sau khi gửi thông tin thì sao?",
          a: "Vietgrow xem spa của bạn và gửi kế hoạch chiến dịch ngắn gọn."
        }
      ]
    },
    footer: {
      tagline: "Hệ thống quảng cáo trả phí cho tiệm nail và salon làm đẹp.",
      link: "Nhận kế hoạch đặt lịch miễn phí cho tiệm nail",
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
