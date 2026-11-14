import { ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react'
import { PRODUCTS, Product } from '../../data/products'
import { useCart } from '../../store/cartContext'

export default function ProductShowcase() {
  const { addToCart } = useCart()

  const handleSelectProduct = (product: Product) => {
    addToCart(product, 1)
  }

  return (
    <section id="products" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E8D5B5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
            Hệ sinh thái Hộp Nông Sản
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            CHỌN CHIẾC HỘP PHÙ HỢP VỚI BỮA ĂN CỦA BẠN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Mỗi chiếc hộp là sự kết hợp phong phú các loại rau củ tươi non thu hoạch sớm,
            giúp bạn tiết kiệm thời gian đi chợ và chi tiêu thông minh hơn mỗi ngày.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative text-left ${
                prod.isFeatured
                  ? 'bg-[#F8F5E9] border-2 border-[#195D3B] shadow-xl hover:shadow-2xl scale-[1.02] md:scale-105 z-10'
                  : 'bg-white border border-[#E8D5B5] shadow-card hover:shadow-card-hover hover:border-[#91B34D]'
              }`}
            >
              {/* Featured Badge for Student Box */}
              {prod.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#DE8753] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  ★ Khuyên Dùng Thử Lần Đầu
                </div>
              )}

              <div>
                {/* Product Image */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 bg-[#E8D5B5]/20 border border-[#E8D5B5] relative group">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2.5 right-2.5 text-xs font-bold bg-white/95 text-[#195D3B] px-2.5 py-1 rounded-lg shadow-xs">
                    {prod.weight}
                  </span>
                </div>

                {/* Identity & Target */}
                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#438347] block">
                    {prod.positioning}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#195D3B]">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Phù hợp cho: <strong className="text-gray-700">{prod.targetAudience}</strong>
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-3 px-4 rounded-2xl bg-white border border-[#E8D5B5] mb-5 flex items-baseline justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">Giá trọn gói</span>
                    <span className="font-heading font-extrabold text-3xl text-[#DE8753]">
                      {prod.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{prod.weight}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  {prod.description}
                </p>

                {/* Sample items inside */}
                <div className="pt-4 border-t border-[#E8D5B5]/70 mb-6">
                  <span className="text-[11px] font-bold text-[#195D3B] uppercase tracking-wide block mb-2">
                    Thành phần mùa vụ gợi ý:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {prod.sampleItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#438347] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => handleSelectProduct(prod)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    prod.isFeatured
                      ? 'bg-[#195D3B] hover:bg-[#144b30] text-white shadow-[#195D3B]/20 hover:scale-[1.01]'
                      : 'bg-[#91B34D] hover:bg-[#7e9d40] text-white'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Chọn hộp này ({prod.price.toLocaleString('vi-VN')}đ)</span>
                </button>

                <a
                  href="#ai-shopping"
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-[#F8F5E9] text-[#195D3B] font-semibold text-xs border border-[#E8D5B5] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#91B34D]" />
                  <span>Tùy chỉnh khẩu vị với AI</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature note below cards */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] max-w-2xl mx-auto flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <p className="text-xs text-gray-700 leading-relaxed">
              Bạn có loại rau củ không thích hoặc bị dị ứng? Hãy trải nghiệm tính năng{' '}
              <strong className="text-[#195D3B]">AI Đi Chợ</strong> để cá nhân hóa chiếc hộp trước khi nhận!
            </p>
          </div>
          <a
            href="#ai-shopping"
            className="shrink-0 text-xs font-bold text-[#195D3B] hover:text-[#438347] flex items-center gap-1"
          >
            Thử ngay <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
