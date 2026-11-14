import { useState } from 'react'
import { Sparkles, Check, ArrowRight, ArrowLeft, AlertCircle, ShoppingBag, RotateCcw } from 'lucide-react'
import { PRODUCTS, Product } from '../../data/products'
import { EXCLUSION_OPTIONS } from '../../data/vegetables'
import { generateAiRecommendation, AiShoppingRecommendation } from '../../services/aiService'
import { useCart } from '../../store/cartContext'

export default function AiShoppingWizard() {
  const { addToCart } = useCart()

  // Wizard state: 1, 2, 3, 4
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0])
  const [excludedFoods, setExcludedFoods] = useState<string[]>([])
  const [preference, setPreference] = useState<'leaf' | 'root_fruit' | 'balanced'>('balanced')
  const [recommendation, setRecommendation] = useState<AiShoppingRecommendation | null>(null)

  // Toggle exclusion checkbox
  const handleToggleExclusion = (foodName: string) => {
    setExcludedFoods((prev) =>
      prev.includes(foodName) ? prev.filter((item) => item !== foodName) : [...prev, foodName]
    )
  }

  // Generate result and go to Step 4
  const handleGenerateResult = () => {
    const result = generateAiRecommendation({
      product: selectedProduct,
      excludedFoods,
      preference,
    })
    setRecommendation(result)
    setCurrentStep(4)
  }

  // Add customized AI box to cart
  const handleAddAiBoxToCart = () => {
    if (!recommendation) return
    addToCart(recommendation.product, 1, {
      excludedFoods: recommendation.excludedList,
      preference,
      suggestedItems: recommendation.suggestedItems.map((item) => item.vegetable.name),
    })
  }

  return (
    <section id="ai-shopping" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F5E9] relative">
      <div className="max-w-4xl mx-auto text-left">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D5B5] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#91B34D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#195D3B]">
              Trải nghiệm thông minh
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#195D3B] tracking-tight">
            CHIẾC HỘP CỦA BẠN, KHẨU VỊ CỦA BẠN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Hãy chọn những loại rau củ bạn yêu thích hoặc không muốn xuất hiện. Xấu Mã sẽ gợi ý chiếc hộp phù hợp nhất với căn bếp của bạn.
          </p>
        </div>

        {/* Wizard Progress Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-xl mx-auto relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[#E8D5B5] -z-0" />
            {[
              { num: 1, label: 'Chọn hộp' },
              { num: 2, label: 'Loại trừ' },
              { num: 3, label: 'Sở thích' },
              { num: 4, label: 'Gợi ý' },
            ].map((st) => (
              <div key={st.num} className="flex flex-col items-center relative z-10 bg-[#F8F5E9] px-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    currentStep === st.num
                      ? 'bg-[#195D3B] text-white ring-4 ring-[#91B34D]/30 shadow'
                      : currentStep > st.num
                      ? 'bg-[#438347] text-white'
                      : 'bg-white border border-[#E8D5B5] text-gray-500'
                  }`}
                >
                  {currentStep > st.num ? <Check className="w-4 h-4" /> : st.num}
                </div>
                <span className="text-[11px] font-bold text-[#195D3B] mt-1.5 hidden sm:block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D5B5] shadow-card relative">
          {/* STEP 1: CHỌN LOẠI HỘP */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#438347] block mb-1">
                  Bước 1 trên 4
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#195D3B]">
                  Chọn quy cách hộp bạn muốn thiết kế
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Mỗi hộp có khối lượng và định vị riêng, giá giữ nguyên theo thông tin công bố.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {PRODUCTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p)}
                    onMouseEnter={() => setSelectedProduct(p)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      selectedProduct.id === p.id
                        ? 'border-[#195D3B] bg-[#F8F5E9] ring-2 ring-[#195D3B] shadow-md'
                        : 'border-[#E8D5B5] hover:border-[#91B34D] bg-white'
                    }`}
                  >
                    {p.isFeatured && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#DE8753] text-white mb-2 inline-block">
                        Dùng thử
                      </span>
                    )}
                    <div className="font-heading font-bold text-base text-[#195D3B]">{p.name}</div>
                    <div className="text-xs text-gray-500 font-medium mb-2">Khối lượng: {p.weight}</div>
                    <div className="font-heading font-extrabold text-xl text-[#DE8753]">
                      {p.price.toLocaleString('vi-VN')}đ
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-sm font-bold shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Tiếp tục: Chọn loại trừ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LOẠI TRỪ THỰC PHẨM */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#438347] block mb-1">
                  Bước 2 trên 4
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#195D3B]">
                  Bạn không muốn nhận loại thực phẩm nào?
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Chọn những loại củ quả bạn không thích ăn hoặc bị dị ứng. Hệ thống sẽ không đề xuất các món này.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EXCLUSION_OPTIONS.map((opt) => {
                  const isChecked = excludedFoods.includes(opt.label)
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleToggleExclusion(opt.label)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'border-red-400 bg-red-50 text-red-900 ring-1 ring-red-400'
                          : 'border-[#E8D5B5] hover:border-[#91B34D] bg-white text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{opt.icon}</span>
                        <div>
                          <div className="text-xs sm:text-sm font-bold">{opt.label}</div>
                          {opt.isAllergy && (
                            <span className="text-[10px] text-red-500 font-semibold">Cảnh báo dị ứng</span>
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs border ${
                          isChecked ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isChecked && '✕'}
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="p-3.5 bg-[#F8F5E9] rounded-2xl border border-[#E8D5B5] flex items-start gap-2.5 text-xs text-gray-600">
                <AlertCircle className="w-4 h-4 text-[#DE8753] shrink-0 mt-0.5" />
                <span>
                  Lưu ý an toàn: Rau củ được phân loại tại cùng trạm tập kết nông sản. Nếu bạn có cơ địa dị ứng nghiêm trọng, vui lòng ghi chú rõ khi đặt hàng để được hỗ trợ đặc biệt.
                </span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Quay lại
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-sm font-bold shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Tiếp tục: Chọn sở thích</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SỞ THÍCH ĂN UỐNG */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#438347] block mb-1">
                  Bước 3 trên 4
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#195D3B]">
                  Khẩu vị & phong cách ăn uống của bạn
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Chọn tỷ lệ rau củ bạn mong muốn nhận nhiều hơn trong tuần này.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'leaf',
                    title: 'Nhiều rau ăn lá',
                    icon: '🥬',
                    desc: 'Ưu tiên xà lách, rau cải, rau thơm... cho các món canh, xào, salad thanh mát.',
                  },
                  {
                    id: 'root_fruit',
                    title: 'Nhiều củ quả',
                    icon: '🥕',
                    desc: 'Ưu tiên cà rốt, khoai tây, bắp non, cà chua... bảo quản lâu, nấu món hầm bùi ngọt.',
                  },
                  {
                    id: 'balanced',
                    title: 'Cân bằng hài hòa',
                    icon: '⚖️',
                    desc: 'Tỷ lệ 50/50 giữa rau ăn lá và củ quả tươi sạch cho thực đơn đa dạng cả tuần.',
                  },
                ].map((pref) => (
                  <button
                    key={pref.id}
                    onClick={() => setPreference(pref.id as any)}
                    onMouseEnter={() => setPreference(pref.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      preference === pref.id
                        ? 'border-[#195D3B] bg-[#F8F5E9] ring-2 ring-[#195D3B] shadow-md'
                        : 'border-[#E8D5B5] hover:border-[#91B34D] bg-white'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{pref.icon}</span>
                    <div className="font-heading font-bold text-base text-[#195D3B]">{pref.title}</div>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{pref.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Quay lại
                </button>
                <button
                  onClick={handleGenerateResult}
                  className="px-7 py-3.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-sm font-bold shadow-lg shadow-[#195D3B]/20 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#91B34D]" />
                  <span>Xem đề xuất giỏ hàng AI</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: ĐỀ XUẤT GIỎ HÀNG */}
          {currentStep === 4 && recommendation && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8D5B5]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#438347] block mb-1">
                    Gợi ý tối ưu từ AI Đi Chợ
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#195D3B]">
                    Chiếc {recommendation.product.name} của riêng bạn
                  </h3>
                </div>

                <div className="text-left sm:text-right bg-[#F8F5E9] px-4 py-2 rounded-2xl border border-[#E8D5B5]">
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Tổng tiền</span>
                  <span className="font-heading font-extrabold text-2xl text-[#DE8753]">
                    {recommendation.totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                  <span className="text-xs text-gray-600 font-medium block">
                    Khối lượng: {recommendation.totalWeight}
                  </span>
                </div>
              </div>

              {/* Exclusion confirmation banner */}
              {recommendation.excludedList.length > 0 && (
                <div className="p-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-600" />
                  <span>
                    Đã loại trừ hoàn toàn:{' '}
                    <strong>{recommendation.excludedList.join(', ')}</strong> theo yêu cầu của bạn.
                  </span>
                </div>
              )}

              {/* Nutrition highlight */}
              <div className="p-3.5 bg-[#91B34D]/15 rounded-2xl border border-[#91B34D]/30 text-xs text-[#195D3B] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#438347] shrink-0" />
                <span>
                  <strong>Đặc điểm dinh dưỡng:</strong> {recommendation.nutritionHighlight}
                </span>
              </div>

              {/* Suggested items grid */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-gray-500 block mb-3">
                  Danh mục rau củ đề xuất trong hộp:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {recommendation.suggestedItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl border border-[#E8D5B5] bg-[#F8F5E9]/50 flex items-center gap-3"
                    >
                      <span className="text-2xl">{item.vegetable.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#195D3B]">
                          {item.vegetable.name}
                        </div>
                        <div className="text-[11px] text-gray-500">~{item.estimatedWeight}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8D5B5] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tùy chỉnh lại từ đầu</span>
                </button>

                <button
                  onClick={handleAddAiBoxToCart}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-sm font-bold shadow-lg shadow-[#195D3B]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm Hộp Này Vào Giỏ Hàng ({recommendation.totalPrice.toLocaleString('vi-VN')}đ)</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center italic">
                * Thuật toán AI Đi Chợ đề xuất dựa trên quy tắc cân đối dinh dưỡng và mùa vụ thực tế (Rule-based Recommendation).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
