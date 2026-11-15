import React, { useState } from 'react'
import {
  X,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Phone,
  User,
  FileText,
  Truck,
  Sparkles,
  Lock,
  ArrowRight,
  PackageCheck,
  CreditCard,
} from 'lucide-react'
import { useCart } from '../../store/cartContext'
import { ASSETS } from '../../constants/assets'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null)

  if (!isOpen) return null

  // Quy tắc phí ship demo: Đơn từ 149k freeship, dưới 149k tính 20k
  const shippingFee = subtotal >= 149000 ? 0 : 20000
  const totalAmount = subtotal + shippingFee

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Vui lòng nhập họ và tên của bạn'
    if (!form.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại'
    } else if (!/(0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ (10 chữ số)'
    }
    if (!form.address.trim()) errs.address = 'Vui lòng nhập địa chỉ nhận hàng'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const generatedOrderCode = `XM-${Math.floor(100000 + Math.random() * 900000)}`

    // Chuẩn bị chi tiết đơn hàng dạng text để đọc rõ ràng trong Dashboard Netlify
    const orderDetailsText = items
      .map((item, idx) => {
        let details = `${idx + 1}. ${item.product.name} x ${item.quantity} hộp (${(item.product.price * item.quantity).toLocaleString('vi-VN')}đ)`
        if (item.customization) {
          const pref =
            item.customization.preference === 'leaf'
              ? 'Nhiều rau ăn lá'
              : item.customization.preference === 'root_fruit'
              ? 'Nhiều củ quả'
              : 'Cân bằng'
          details += `\n   - Khẩu vị AI: ${pref}`
          if (item.customization.excludedFoods.length > 0) {
            details += `\n   - Bỏ loại: ${item.customization.excludedFoods.join(', ')}`
          }
        }
        return details
      })
      .join('\n\n')

    // Dữ liệu gửi lên Netlify Forms
    const payload = {
      'form-name': 'order-form',
      orderCode: generatedOrderCode,
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      note: form.note.trim() || 'Không có',
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0).toString(),
      orderDetails: orderDetailsText,
      subtotal: `${subtotal.toLocaleString('vi-VN')}đ`,
      shippingFee: shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString('vi-VN')}đ`,
      totalAmount: `${totalAmount.toLocaleString('vi-VN')}đ`,
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      })
    } catch (error) {
      console.warn('Lỗi khi gửi lên Netlify Forms:', error)
    } finally {
      setIsSubmitting(false)
      setOrderSuccess(generatedOrderCode)
      clearCart()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#E8D5B5] max-h-[90vh] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Brand Pattern (Giảm chiều cao, tinh gọn, hiện đại) */}
        <div className="relative bg-gradient-to-r from-[#195D3B] via-[#1F6B44] to-[#195D3B] text-white px-5 sm:px-6 py-4 overflow-hidden shrink-0">
          {/* Subtle light accents */}
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#91B34D]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-10 w-32 h-32 bg-[#DE8753]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight leading-snug">
            XÁC NHẬN ĐẶT HÀNG
          </h3>
          <p className="text-white/80 text-[11px] sm:text-xs mt-0.5 font-light flex items-center gap-2">
            <span>✓ Đồng kiểm tận tay</span>
            <span>•</span>
            <span>✓ Thanh toán khi nhận hàng (COD)</span>
            <span>•</span>
            <span>✓ Đổi trả 24h</span>
          </p>
        </div>

        {/* Nội dung cuộn bên trong (Scrollable Body) nằm hoàn toàn trong viền bo góc */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 sm:p-7 space-y-6">
          {!orderSuccess ? (
            <form
              onSubmit={handleSubmit}
              name="order-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="order-form" />
              <input type="hidden" name="bot-field" />
              {/* Customer Inputs Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8D5B5] pb-2">
                  <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#195D3B] flex items-center gap-2">
                    <User className="w-4 h-4 text-[#438347]" />
                    <span>1. Thông tin giao nhận</span>
                  </h4>
                  <span className="text-[11px] text-gray-400 italic">* Bắt buộc nhập</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                      Họ và tên người nhận <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Thị Mai"
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                          errors.name
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E8D5B5] focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10 bg-white'
                        }`}
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                    {errors.name && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                      Số điện thoại / Zalo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Ví dụ: 0912 345 678"
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E8D5B5] focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10 bg-white'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                    Địa chỉ nhận hàng chi tiết <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="Số nhà, tên đường, phường/xã, quận/huyện..."
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.address
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-[#E8D5B5] focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10 bg-white'
                      }`}
                    />
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  {errors.address && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                    Ghi chú cho nhà vườn & tài xế (nếu có)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Ví dụ: Giao sáng trước 11h, bớt ớt chuông, gọi trước khi đến..."
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8D5B5] text-sm outline-none focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10 bg-white"
                    />
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Order Summary & Product Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8D5B5] pb-2">
                  <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#195D3B] flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-[#438347]" />
                    <span>2. Chi tiết đơn hàng ({items.length} món)</span>
                  </h4>
                  <span className="text-xs font-bold text-[#DE8753]">{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>

                {/* Items Mini List */}
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-[#F8F5E9]/60 border border-[#E8D5B5] flex items-center gap-3 hover:bg-[#F8F5E9] transition-colors"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#E8D5B5] shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="font-heading font-bold text-xs sm:text-sm text-[#195D3B] truncate">
                            {item.product.name}
                          </h5>
                          <span className="font-bold text-xs sm:text-sm text-[#DE8753] shrink-0">
                            {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">
                          Số lượng: <strong className="text-gray-700">{item.quantity}</strong> ({item.product.weight})
                        </div>
                        {item.customization && (
                          <div className="text-[10px] text-[#438347] truncate mt-0.5">
                            AI: {item.customization.preference === 'leaf' ? 'Nhiều rau ăn lá' : item.customization.preference === 'root_fruit' ? 'Nhiều củ quả' : 'Cân bằng'}
                            {item.customization.excludedFoods.length > 0 && ` • Bỏ ${item.customization.excludedFoods.join(', ')}`}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bill Breakdown */}
                <div className="bg-[#F8F5E9] rounded-2xl p-4 border border-[#E8D5B5] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Tạm tính tiền hàng:</span>
                    <span className="font-semibold text-gray-800">{subtotal.toLocaleString('vi-VN')}đ</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#438347]" />
                      <span>Phí giao hàng:</span>
                    </span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-[#438347] font-bold bg-[#91B34D]/20 px-2 py-0.5 rounded-full">
                          Miễn phí giao hàng (Đơn ≥ 149k)
                        </span>
                      ) : (
                        <span className="font-semibold text-gray-800">{shippingFee.toLocaleString('vi-VN')}đ</span>
                      )}
                    </span>
                  </div>

                  <div className="pt-2.5 border-t border-[#E8D5B5] flex justify-between items-baseline">
                    <div>
                      <span className="font-bold text-sm text-[#195D3B] block">Tổng thanh toán:</span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1">
                        <CreditCard className="w-3 h-3 text-[#438347]" /> Trả tiền mặt khi nhận hàng (COD)
                      </span>
                    </div>
                    <span className="font-heading font-black text-2xl text-[#DE8753]">
                      {totalAmount.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="w-full py-4 rounded-2xl bg-[#195D3B] hover:bg-[#144b30] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#195D3B]/25 transition-all hover:scale-101 active:scale-99 flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Đang kết nối nhà vườn tạo đơn...
                    </span>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 text-[#91B34D]" />
                      <span>XÁC NHẬN ĐẶT HÀNG • {totalAmount.toLocaleString('vi-VN')}đ</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                  <Lock className="w-3 h-3 text-[#438347]" />
                  <span>Bảo mật thông tin khách hàng · Cam kết không spam</span>
                </div>
              </div>
            </form>
          ) : (
            /* Order Success State */
            <div className="p-8 sm:p-10 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#91B34D]/20 text-[#195D3B] flex items-center justify-center mx-auto border-2 border-[#91B34D]/40 shadow-inner">
              <CheckCircle2 className="w-12 h-12 text-[#195D3B]" />
            </div>

            <div className="space-y-1">
              <span className="px-3.5 py-1 bg-[#DE8753]/15 text-[#DE8753] text-xs font-extrabold rounded-full inline-block uppercase tracking-wider">
                Mã đơn hàng: {orderSuccess}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#195D3B]">
                ĐẶT HÀNG THÀNH CÔNG!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed pt-1">
                Cảm ơn <strong className="text-[#195D3B]">{form.name}</strong> đã đồng hành cùng nông dân Việt.
                Đơn hàng sẽ được chuyển tới <span className="text-gray-800 font-medium">{form.address}</span>.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#F8F5E9] rounded-2xl border border-[#E8D5B5] text-xs text-[#1A3828] text-left max-w-md mx-auto space-y-2">
              <div className="font-heading font-bold text-sm text-[#195D3B] pb-1 border-b border-[#E8D5B5] flex items-center justify-between">
                <span>Trạng thái đơn hàng</span>
                <span className="text-[11px] text-[#438347] font-semibold">Đã chuyển nông trại</span>
              </div>
              <p className="flex items-center gap-2">
                <span className="text-[#438347] font-bold">✓</span>
                <span>Thu hoạch sớm và đóng gói hộp giấy Kraft thân thiện.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#438347] font-bold">✓</span>
                <span>Tài xế sẽ gọi đến số <strong>{form.phone}</strong> trước khi giao.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#438347] font-bold">✓</span>
                <span>Đồng kiểm 100% hài lòng mới thanh toán tiền mặt (COD).</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-full bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-sm shadow-lg transition-transform hover:scale-102 cursor-pointer"
              >
                Tiếp tục khám phá Xấu Mã
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
