import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQS } from '../../data/faq'

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E8D5B5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5E9] border border-[#E8D5B5] shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#195D3B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#195D3B]">
              Giải đáp thắc mắc
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#195D3B] tracking-tight">
            CÂU HỎI THƯỜNG GẶP VỀ XẤU MÃ
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tất cả những gì bạn cần biết trước khi đặt mua chiếc Hộp Nông Sản Xấu Mã đầu tiên.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#195D3B] bg-[#F8F5E9] shadow-sm'
                    : 'border-[#E8D5B5] bg-white hover:border-[#91B34D]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#195D3B] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold w-6 h-6 rounded-full bg-[#91B34D]/20 text-[#195D3B] flex items-center justify-center shrink-0">
                      0{faq.id}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#195D3B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#E8D5B5]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
