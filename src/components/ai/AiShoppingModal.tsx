import { useState, useEffect } from 'react'
import { Sparkles, Check, ArrowRight, ArrowLeft, RotateCcw, X, ShoppingBag, Plus } from 'lucide-react'
import { PRODUCTS, Product } from '../../data/products'
import { EXCLUSION_OPTIONS } from '../../data/vegetables'
import { generateAiRecommendation, AiShoppingRecommendation } from '../../services/aiService'
import { useCart } from '../../store/cartContext'

export default function AiShoppingModal() {
  const { isAiModalOpen, closeAiModal, aiInitialProduct, addToCart, openCart } = useCart()

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0])
  const [excludedFoods, setExcludedFoods] = useState<string[]>([])
  const [preference, setPreference] = useState<'leaf' | 'root_fruit' | 'balanced'>('balanced')
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false)
  const [customExclusionInput, setCustomExclusionInput] = useState<string>('')
  const [recommendation, setRecommendation] = useState<AiShoppingRecommendation | null>(null)

  // Sync initial product when opened
  useEffect(() => {
    if (isAiModalOpen) {
      if (aiInitialProduct) {
        setSelectedProduct(aiInitialProduct)
        // If user already clicked a specific product, jump straight to Step 2 (Exclude)
        setCurrentStep(2)
      } else {
        setSelectedProduct(PRODUCTS[0])
        setCurrentStep(1)
      }
      setExcludedFoods([])
      setShowOtherInput(false)
      setCustomExclusionInput('')
      setPreference('balanced')
      setRecommendation(null)
    }
  }, [isAiModalOpen, aiInitialProduct])

  if (!isAiModalOpen) return null

  const handleToggleExclusion = (foodName: string) => {
    setExcludedFoods((prev) =>
      prev.includes(foodName) ? prev.filter((item) => item !== foodName) : [...prev, foodName]
    )
  }

  const handleAddCustomExclusion = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmed = customExclusionInput.trim()
    if (!trimmed) return
    if (!excludedFoods.includes(trimmed)) {
      setExcludedFoods((prev) => [...prev, trimmed])
    }
    setCustomExclusionInput('')
  }

  const handleGenerateResult = () => {
    const result = generateAiRecommendation({
      product: selectedProduct,
      excludedFoods,
      preference,
    })
    setRecommendation(result)
    setCurrentStep(4)
  }

  const handleAddAiBoxToCart = () => {
    if (!recommendation) return
    addToCart(recommendation.product, 1, {
      excludedFoods: recommendation.excludedList,
      preference,
      suggestedItems: recommendation.suggestedItems.map((item) => item.vegetable.name),
    })
    closeAiModal()
    openCart()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeAiModal}
      />

      {/* Modal Shell */}
      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 md:p-6 relative z-10">
        <div
          className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8D5B5] overflow-hidden my-4 text-left animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-[#E8D5B5] flex items-center justify-between bg-[#F8F5E9]/80">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white border border-[#E8D5B5] flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5 text-[#DE8753]" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-[#195D3B] tracking-tight">
                  AI Đi Chợ Thông Minh
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                  Cá nhân hóa rau củ theo đúng khẩu vị nhà bạn
                </p>
              </div>
            </div>

            <button
              onClick={closeAiModal}
              className="p-1.5 rounded-full hover:bg-gray-200/80 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress */}
          <div className="px-5 py-3.5 sm:px-6 bg-white border-b border-[#E8D5B5]/60">
            <div className="flex items-start justify-between max-w-md mx-auto relative">
              {/* Đường kẻ ngang đặt ở top-3.5 sm:top-4 để xuyên đúng tâm vòng tròn số */}
              <div className="absolute left-6 right-6 top-3.5 sm:top-4 h-0.5 bg-[#E8D5B5] -z-0" />
              {[
                { num: 1, label: 'Chọn hộp' },
                { num: 2, label: 'Món kiêng' },
                { num: 3, label: 'Khẩu vị' },
                { num: 4, label: 'Gợi ý' },
              ].map((st) => (
                <div key={st.num} className="flex flex-col items-center relative z-10 bg-white px-2">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      currentStep === st.num
                        ? 'bg-[#195D3B] text-white ring-4 ring-[#91B34D]/30 shadow'
                        : currentStep > st.num
                        ? 'bg-[#438347] text-white'
                        : 'bg-white border border-[#E8D5B5] text-gray-400'
                    }`}
                  >
                    {currentStep > st.num ? <Check className="w-3.5 h-3.5" /> : st.num}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#195D3B] mt-1.5 whitespace-nowrap">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 max-h-[72vh] overflow-y-auto">
            {/* STEP 1: CHỌN HỘP */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#438347] block mb-1">
                    Bước 1 trên 4
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-[#195D3B]">
                    Chọn quy cách hộp bạn muốn tùy chỉnh
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                        selectedProduct.id === p.id
                          ? 'border-[#195D3B] bg-[#F8F5E9] ring-2 ring-[#195D3B] shadow-sm'
                          : 'border-[#E8D5B5] hover:border-[#91B34D] bg-white'
                      }`}
                    >
                      {p.isFeatured && (
                        <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#DE8753] text-white mb-1.5 inline-block">
                          Dùng thử
                        </span>
                      )}
                      <div className="font-heading font-bold text-sm text-[#195D3B] leading-tight">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium my-1">
                        Khối lượng: {p.weight}
                      </div>
                      <div className="font-heading font-extrabold text-base text-[#DE8753]">
                        {p.price.toLocaleString('vi-VN')}đ
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-3">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Tiếp tục: Chọn món kiêng</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: LOẠI TRỪ (MÓN KHÔNG THÍCH) */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#438347] block mb-1">
                      Bước 2 trên 4
                    </span>
                    <span className="text-xs text-gray-500 font-semibold bg-[#F8F5E9] px-2.5 py-1 rounded-full border border-[#E8D5B5]">
                      Đang chọn: <strong>{selectedProduct.name}</strong>
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#195D3B]">
                    Những loại rau củ bạn muốn loại trừ?
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Tích chọn món bạn dị ứng hoặc không ăn được, AI sẽ thay thế bằng các món cùng giá trị dinh dưỡng.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {EXCLUSION_OPTIONS.map((opt) => {
                    const isChecked = excludedFoods.includes(opt.id) || excludedFoods.includes(opt.name)
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleToggleExclusion(opt.name)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                          isChecked
                            ? 'border-red-400 bg-red-50 text-red-900 ring-2 ring-red-400 shadow-xs'
                            : 'border-[#E8D5B5] hover:border-gray-300 bg-white text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xl shrink-0">{opt.icon}</span>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                              {opt.label || opt.name}
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium">
                              {opt.reason}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-red-500 border-red-500 text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    )
                  })}

                  {/* NÚT BẤM "KHÁC..." NHƯ CÁC OPTION KHÁC */}
                  {(() => {
                    const customItems = excludedFoods.filter(
                      (name) => !EXCLUSION_OPTIONS.some((opt) => opt.name === name || opt.id === name)
                    )
                    const isOtherActive = showOtherInput || customItems.length > 0

                    return (
                      <button
                        type="button"
                        onClick={() => setShowOtherInput(!showOtherInput)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                          isOtherActive
                            ? 'border-red-400 bg-red-50 text-red-900 ring-2 ring-red-400 shadow-xs'
                            : 'border-[#E8D5B5] hover:border-gray-300 bg-white text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xl shrink-0">✍️</span>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                              Món khác
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium truncate">
                              {customItems.length > 0
                                ? `Đã thêm (${customItems.length})`
                                : 'Tự nhập món kiêng'}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isOtherActive
                              ? 'bg-red-500 border-red-500 text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isOtherActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    )
                  })()}
                </div>

                {/* KHUNG NHẬP LIỆU CHỈ HIỆN KHI BẤM CHỌN "MÓN KHÁC" HOẶC ĐÃ CÓ MÓN TỰ NHẬP */}
                {(showOtherInput ||
                  excludedFoods.filter(
                    (name) => !EXCLUSION_OPTIONS.some((opt) => opt.name === name || opt.id === name)
                  ).length > 0) && (
                  <div className="p-3.5 rounded-2xl bg-[#F8F5E9]/80 border border-[#E8D5B5] space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#195D3B] flex items-center gap-1.5">
                        <span>Nhập tên loại rau củ bạn muốn loại trừ:</span>
                      </label>
                      <span className="text-[10px] text-gray-500">Ví dụ: Cần tây, Khổ qua, Ngò rí...</span>
                    </div>

                    <form onSubmit={handleAddCustomExclusion} className="flex gap-2">
                      <input
                        type="text"
                        autoFocus
                        value={customExclusionInput}
                        onChange={(e) => setCustomExclusionInput(e.target.value)}
                        placeholder="Gõ tên loại rau củ không ăn được rồi bấm Thêm..."
                        className="flex-1 px-3.5 py-2 rounded-xl border border-[#E8D5B5] text-xs sm:text-sm bg-white outline-none focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10"
                      />
                      <button
                        type="submit"
                        disabled={!customExclusionInput.trim()}
                        className="px-4 py-2 rounded-xl bg-[#195D3B] hover:bg-[#144b30] disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Thêm</span>
                      </button>
                    </form>

                    {/* Danh sách các món do người dùng tự nhập */}
                    {excludedFoods.filter((name) => !EXCLUSION_OPTIONS.some((opt) => opt.name === name || opt.id === name)).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {excludedFoods
                          .filter((name) => !EXCLUSION_OPTIONS.some((opt) => opt.name === name || opt.id === name))
                          .map((customName) => (
                            <span
                              key={customName}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-100/90 text-red-900 text-xs font-semibold border border-red-200 shadow-2xs"
                            >
                              <span>{customName}</span>
                              <button
                                type="button"
                                onClick={() => handleToggleExclusion(customName)}
                                className="text-red-500 hover:text-red-700 font-bold ml-0.5 cursor-pointer p-0.5"
                                title="Xoá món này"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-[#E8D5B5]/60">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Chọn lại hộp</span>
                  </button>

                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Tiếp tục: Sở thích ăn uống</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: KHẨU VỊ / THIÊN HƯỚNG */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#438347] block mb-1">
                    Bước 3 trên 4
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-[#195D3B]">
                    Khẩu vị bữa ăn ưu tiên của nhà bạn
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Giúp AI tính toán tỉ lệ cân bằng giữa rau lá và củ quả cất tủ lạnh được lâu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'balanced',
                      title: 'Cân bằng tiêu chuẩn',
                      desc: '50% rau lá tươi + 50% củ quả lưu trữ, phù hợp nhất cho cả tuần.',
                      icon: '⚖️',
                    },
                    {
                      id: 'leaf',
                      title: 'Ưu tiên Rau Lá',
                      desc: 'Nhiều cải ngọt, cải thìa, rau muống, xà lách cho tín đồ ăn luộc và canh.',
                      icon: '🥬',
                    },
                    {
                      id: 'root_fruit',
                      title: 'Ưu tiên Củ & Quả',
                      desc: 'Nhiều khoai tây, cà rốt, củ dền, bầu bí bảo quản tủ lạnh được 7-10 ngày.',
                      icon: '🥔',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setPreference(opt.id as any)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        preference === opt.id
                          ? 'border-[#195D3B] bg-[#F8F5E9] ring-2 ring-[#195D3B] shadow-sm'
                          : 'border-[#E8D5B5] hover:border-[#91B34D] bg-white'
                      }`}
                    >
                      <span className="text-2xl mb-1.5 block">{opt.icon}</span>
                      <div className="font-heading font-bold text-sm text-[#195D3B] mb-1">
                        {opt.title}
                      </div>
                      <div className="text-[11px] text-gray-600 leading-snug">{opt.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E8D5B5]/60">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Quay lại</span>
                  </button>

                  <button
                    onClick={handleGenerateResult}
                    className="px-5 py-2.5 rounded-xl bg-[#DE8753] hover:bg-[#c97442] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>AI Tính Toán &amp; Đề Xuất</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: KẾT QUẢ GỢI Ý TỐI ƯU */}
            {currentStep === 4 && recommendation && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#E8D5B5]">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#438347] block mb-0.5">
                      Gợi ý tối ưu từ AI Đi Chợ
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-[#195D3B]">
                      {recommendation.product.name} (Tùy Chỉnh)
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 bg-[#F8F5E9] px-3.5 py-1.5 rounded-xl border border-[#E8D5B5] self-start sm:self-auto">
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Giá:</span>
                    <span className="font-heading font-extrabold text-lg text-[#DE8753]">
                      {recommendation.totalPrice.toLocaleString('vi-VN')}đ
                    </span>
                    <span className="text-[11px] text-gray-600 font-medium">
                      ({recommendation.totalWeight})
                    </span>
                  </div>
                </div>

                {/* Exclusion notice */}
                {recommendation.excludedList.length > 0 && (
                  <div className="p-2.5 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-600 shrink-0" />
                    <span>
                      Đã loại trừ:{' '}
                      <strong>{recommendation.excludedList.join(', ')}</strong> theo yêu cầu.
                    </span>
                  </div>
                )}

                {/* Nutrition highlight */}
                <div className="p-2.5 bg-[#91B34D]/15 rounded-xl border border-[#91B34D]/30 text-xs text-[#195D3B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#438347] shrink-0" />
                  <span>
                    <strong>Dinh dưỡng:</strong> {recommendation.nutritionHighlight}
                  </span>
                </div>

                {/* Suggested items list */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500 block mb-2">
                    Thành phần nông sản đề xuất trong hộp:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {recommendation.suggestedItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl border border-[#E8D5B5] bg-[#F8F5E9]/50 flex items-center gap-2"
                      >
                        <span className="text-xl shrink-0">{item.vegetable.icon}</span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#195D3B] truncate">
                            {item.vegetable.name}
                          </div>
                          <div className="text-[10px] text-gray-500">~{item.estimatedWeight}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-3 border-t border-[#E8D5B5] flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tùy chỉnh lại</span>
                  </button>

                  <button
                    onClick={handleAddAiBoxToCart}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#195D3B]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Thêm Hộp Đã Tùy Chỉnh Vào Giỏ Hàng</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
