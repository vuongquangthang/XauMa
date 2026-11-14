import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Sparkles,
  Check,
  ArrowRight,
  Package,
  Flame,
} from 'lucide-react'
import { PRODUCTS, Product } from '../../data/products'
import { useCart } from '../../store/cartContext'
import BlurText from '../BlurText'

export default function ProductShowcase() {
  const { addToCart, openAiModal } = useCart()
  // Mặc định Hộp Sinh Viên được active, rê chuột vào hộp nào hộp đó mở rộng theo chiều ngang mượt mà
  const [activeId, setActiveId] = useState<string>('hop-sinh-vien')

  const handleSelectProduct = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product, 1)
  }

  // Khẩu phần và ưu đãi
  const portionInfo: Record<string, { meals: string; savePct: string }> = {
    'hop-sinh-vien': {
      meals: '3 – 4 bữa ăn',
      savePct: 'Tiết kiệm 30%',
    },
    'hop-gia-dinh': {
      meals: '6 – 8 bữa cơm',
      savePct: 'Tiết kiệm 25%',
    },
    'hop-tiec-xanh': {
      meals: '12 – 14 bữa sum vầy',
      savePct: 'Tiết kiệm 35%',
    },
  }

  return (
    <section
      id="products"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E8D5B5] relative overflow-hidden"
    >
      {/* Nền điểm xuyết ánh sáng hữu cơ nhẹ */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#91B34D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#DE8753]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header tinh gọn, vừa vặn khung nhìn */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
              Hệ sinh thái Hộp Nông Sản
            </span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#195D3B] tracking-tight">
            <BlurText text="CHỌN CHIẾC HỘP PHÙ HỢP VỚI BỮA ĂN CỦA BẠN" delay={0.08} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed"
          >
            Rau củ tươi non thu hoạch sớm, tiết kiệm 20% - 35% chi phí cho bữa cơm gia đình.
          </motion.p>
        </div>

        {/* ── INTERACTIVE EXPANDING HORIZONTAL CARDS (CHIỀU CAO GỌN GÀNG, VỪA VẶN MÀN HÌNH DESKTOP) ── */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch pt-2.5">
          {PRODUCTS.map((prod) => {
            const isExpanded = activeId === prod.id
            const portion = portionInfo[prod.id] || {
              meals: 'Nhiều bữa ăn',
              savePct: 'Tiết kiệm 25%',
            }

            return (
              <div
                key={prod.id}
                onMouseEnter={() => setActiveId(prod.id)}
                onClick={() => setActiveId(prod.id)}
                style={{
                  transition:
                    'flex 0.75s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                  willChange: 'flex',
                }}
                className={`rounded-3xl p-5 sm:p-6 flex flex-col justify-between text-left cursor-pointer relative min-w-0 lg:h-[590px] ${
                  isExpanded
                    ? 'lg:flex-[1.2] bg-[#F8F5E9] border-2 border-[#195D3B] shadow-xl z-20 ring-4 ring-[#195D3B]/5'
                    : 'lg:flex-[0.9] bg-white border border-[#E8D5B5] shadow-xs hover:border-[#91B34D] opacity-90 hover:opacity-100 z-10'
                }`}
              >
                {/* Floating Top Badge */}
                {prod.id === 'hop-sinh-vien' ? (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap transition-transform duration-300 z-30 ${
                      isExpanded ? 'bg-[#DE8753] text-white scale-105 ring-2 ring-white' : 'bg-[#DE8753] text-white'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 fill-white text-[#DE8753]" />
                    <span>Khuyên Dùng Thử</span>
                  </div>
                ) : prod.id === 'hop-gia-dinh' ? (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap transition-transform duration-300 z-30 ${
                      isExpanded ? 'bg-[#195D3B] text-white scale-105 ring-2 ring-white' : 'bg-[#195D3B] text-white'
                    }`}
                  >
                    ★ Bán Chạy Nhất
                  </div>
                ) : (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap transition-transform duration-300 z-30 ${
                      isExpanded ? 'bg-[#438347] text-white scale-105 ring-2 ring-white' : 'bg-[#438347] text-white'
                    }`}
                  >
                    Tiết Kiệm 35%
                  </div>
                )}

                <div>
                  {/* Product Image Frame: Chuẩn tỉ lệ 3:2 khít chính xác với ảnh gốc 1536x1024, không lệch 1 pixel */}
                  <div className="rounded-2xl overflow-hidden aspect-[3/2] w-full bg-[#F7DFC7] border border-[#E8D5B5] relative mb-3.5 shadow-xs shrink-0 flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover object-center pointer-events-none rounded-2xl"
                    />

                    <span className="absolute bottom-2.5 right-2.5 text-[11px] font-extrabold bg-white/95 text-[#195D3B] px-2.5 py-0.5 rounded-md shadow-xs backdrop-blur-xs z-10">
                      {prod.weight}
                    </span>
                  </div>

                  {/* Header Title & Price */}
                  <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-[#E8D5B5]/70">
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`font-heading font-black text-base sm:text-lg tracking-tight leading-snug transition-colors truncate ${
                          isExpanded
                            ? 'text-[#195D3B]'
                            : 'text-gray-800'
                        }`}
                      >
                        {prod.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-medium italic mt-0.5 line-clamp-1">
                        &ldquo;{prod.tagline}&rdquo;
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#DE8753] block leading-none">
                        {prod.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold block mt-0.5">
                        {portion.savePct}
                      </span>
                    </div>
                  </div>

                  {/* Description súc tích */}
                  <p className="text-xs text-gray-600 leading-snug mb-2.5 line-clamp-2">
                    {prod.description}
                  </p>

                  {/* Danh sách thành phần & Khẩu phần tích hợp gọn gàng */}
                  <div className="p-2.5 rounded-xl bg-[#F8F5E9]/80 border border-[#E8D5B5]/60 mb-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-[#195D3B]">
                      <span>Thành phần ({portion.meals}):</span>
                      <span className="text-[#438347] font-semibold lowercase">đổi trả 24h</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-gray-700">
                      {prod.sampleItems.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1 truncate">
                          <Check className="w-3 h-3 text-[#438347] shrink-0" />
                          <span className="truncate">{item.replace(/\s*\([^)]*\)/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area: 2 nút đặt ngang hàng, tiết kiệm tối đa chiều cao */}
                <div className="pt-2 border-t border-[#E8D5B5]/60 flex items-center gap-2">
                  <button
                    onClick={(e) => handleSelectProduct(prod, e)}
                    className={`flex-1 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      isExpanded
                        ? 'bg-[#195D3B] hover:bg-[#144b30] text-white shadow-[#195D3B]/20'
                        : 'bg-[#91B34D] hover:bg-[#7e9d40] text-white'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Chọn hộp này</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openAiModal(prod)
                    }}
                    title="Tùy chỉnh thành phần bằng AI Đi Chợ"
                    className="px-3 py-2.5 rounded-xl bg-white hover:bg-[#F8F5E9] text-[#195D3B] font-bold text-xs border border-[#E8D5B5] hover:border-[#195D3B] flex items-center justify-center gap-1 transition-colors shrink-0 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#DE8753]" />
                    <span className="text-[11px] font-bold">AI</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature note banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 p-3 sm:p-3.5 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-left shadow-xs"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <p className="text-xs text-gray-700 leading-snug">
              Bạn có món không thích? Dùng <strong className="text-[#195D3B]">AI Đi Chợ</strong> để cá nhân hóa khẩu vị!
            </p>
          </div>
          <button
            onClick={() => openAiModal()}
            className="shrink-0 px-3 py-1.5 rounded-xl bg-white hover:bg-[#195D3B] text-[#195D3B] hover:text-white border border-[#E8D5B5] text-xs font-bold transition-all flex items-center gap-1 shadow-xs cursor-pointer"
          >
            <span>Thử ngay</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
