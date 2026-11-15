import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, PhoneCall, Send, User, Phone, MessageSquare, ShieldCheck } from 'lucide-react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    const errs: { name?: string; phone?: string } = {}
    if (!name.trim()) errs.name = 'Vui lòng nhập họ và tên'
    if (!phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại'
    } else if (!/(0[3|5|7|8|9])+([0-9]{8})\b/.test(phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ (10 chữ số)'
    }
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

    const payload = {
      'form-name': 'consultation-form',
      name: name.trim(),
      phone: phone.trim(),
      note: note.trim() || 'Không có ghi chú',
      createdAt: new Date().toLocaleString('vi-VN'),
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      })
    } catch (err) {
      console.warn('Lỗi gửi form tư vấn Netlify:', err)
    } finally {
      setIsSubmitting(false)
      setIsSuccess(true)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setName('')
    setPhone('')
    setNote('')
    setErrors({})
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Backdrop mượt mà */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={handleClose}
          />

          {/* Modal Card với spring physics đàn hồi siêu mượt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 350,
            }}
            className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-[#E8D5B5] overflow-hidden text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="relative bg-gradient-to-r from-[#195D3B] to-[#257A4E] text-white p-5 sm:p-6 overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#91B34D]/25 rounded-full blur-xl pointer-events-none" />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="p-2 rounded-xl bg-white/15 text-[#91B34D] inline-flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#91B34D]">
                  Đội ngũ Xấu Mã hỗ trợ
                </span>
              </div>

              <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                ĐĂNG KÝ TƯ VẤN
              </h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Để lại thông tin, Xấu Mã sẽ liên hệ tư vấn chọn hộp nông sản phù hợp với nhu cầu ăn uống của bạn.
              </p>
            </div>

            {/* Form Body */}
            <div className="p-5 sm:p-6">
              {!isSuccess ? (
                <form
                  onSubmit={handleSubmit}
                  name="consultation-form"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="consultation-form" />
                  <input type="hidden" name="bot-field" />

                  <div>
                    <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                      Họ và tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn A"
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
                      Số điện thoại nhận tư vấn <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

                  <div>
                    <label className="block text-xs font-bold text-[#1A3828] mb-1.5">
                      Nhu cầu hoặc thắc mắc của bạn (tùy chọn)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Ví dụ: Mình ở 2 người, muốn biết nên chọn hộp nào; có giao định kỳ hàng tuần không?..."
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8D5B5] text-sm outline-none focus:border-[#195D3B] focus:ring-2 focus:ring-[#195D3B]/10 bg-white resize-none"
                      />
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white font-extrabold text-sm shadow-lg shadow-[#195D3B]/20 transition-all hover:scale-101 active:scale-99 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Đang gửi yêu cầu...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>GỬI YÊU CẦU TƯ VẤN</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#438347]" />
                    <span>Bảo mật thông tin · Tư vấn miễn phí trong 15–30 phút</span>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#91B34D]/20 text-[#195D3B] flex items-center justify-center mx-auto border-2 border-[#91B34D]/40">
                    <CheckCircle2 className="w-10 h-10 text-[#195D3B]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-[#195D3B]">
                      ĐÃ GỬI YÊU CẦU THÀNH CÔNG!
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed max-w-xs mx-auto">
                      Cảm ơn bạn <strong className="text-[#195D3B]">{name}</strong>. Tư vấn viên của Xấu Mã sẽ liên hệ sớm nhất qua số điện thoại <strong className="text-gray-800">{phone}</strong>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-[#195D3B] text-white text-xs font-bold hover:bg-[#144b30] transition-colors cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
