import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { ASSETS } from '../constants/assets'

const PACKAGES = [
  {
    id: 'trial',
    name: 'Hộp Dùng Thử 3kg',
    price: '89.000đ',
    badge: 'Trải nghiệm lần đầu',
    desc: '4-5 loại củ quả tươi hái sớm',
  },
  {
    id: 'family',
    name: 'Hộp Gia Đình 5kg',
    price: '149.000đ',
    badge: 'Phổ biến nhất · Tiết kiệm 30%',
    desc: '6-7 loại rau củ đa dạng cả tuần',
  },
  {
    id: 'weekly',
    name: 'Gói Định Kỳ Tuần (4 Hộp/Tháng)',
    price: '520.000đ',
    badge: 'Ưu đãi -10% + Tặng Eco-Card',
    desc: 'Giao đều đặn sáng thứ 2 hoặc thứ 5 hàng tuần',
  },
]

export default function OrderSection() {
  const [pkg, setPkg] = useState('family')
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!form.name || !form.phone || !form.address) return
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSubmitted(true)
      }, 1000)
    },
    [form]
  )

  const selectedPkg = PACKAGES.find((p) => p.id === pkg)!

  return (
    <section id="order" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-moss text-cream">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(163,217,91,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <GlassReveal>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="section-label text-center">// Đặt hộp &amp; Gia nhập lối sống xanh</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-cream text-center mb-5 leading-tight">
          <BlurText text="Sẵn Sàng Đón Nhận Những Điều Không Hoàn Hảo Đầy Tươi Ngon?" delay={0.1} />
        </h2>

        <GlassReveal delay={0.3}>
          <p className="text-cream/75 font-body font-light text-center max-w-2xl mx-auto mb-14 text-sm sm:text-base leading-relaxed">
            Đặt thử một <strong className="text-sprout font-medium">Hộp Nông Sản Xấu Mã</strong> ngay hôm nay hoặc đăng ký gói định kỳ hàng tuần
            để cùng <em>Nâng Niu Nông Sản Việt</em> mang lại giá trị trọn vẹn cho từng củ quả quê hương.
          </p>
        </GlassReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* ── Left Column: Real Packaging Studio Shot (5 cols) ── */}
          <div className="lg:col-span-5 space-y-6">
            <GlassReveal delay={0.35}>
              <div className="liquid-glass rounded-[2.5rem] p-4 border border-sprout/20 overflow-hidden shadow-2xl bg-moss/70 backdrop-blur-xl">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square relative group">
                  <img
                    src={ASSETS.studioSetup}
                    alt="Bộ sản phẩm Hộp Nông Sản Xấu Mã và bao bì kraft"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[11px] font-bold text-sprout uppercase tracking-wider block mb-1">
                      Đóng gói hoàn chỉnh khi giao tới bạn:
                    </span>
                    <p className="text-xs text-cream/80 font-body leading-relaxed">
                      Thùng giấy kraft in hình mộc mạc, kèm túi giấy quai xách và thẻ cảm ơn từ bà con nông dân.
                    </p>
                  </div>
                </div>

                {/* 4 Guarantees Checklist */}
                <div className="p-4 space-y-2.5 text-left text-xs font-body text-cream/75">
                  <div className="flex items-center gap-2">
                    <span className="text-sprout font-bold">✓</span>
                    <span>Cam kết tươi ngon, thu hoạch và giao trong 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sprout font-bold">✓</span>
                    <span>Kiểm tra củ quả thoải mái trước khi thanh toán</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sprout font-bold">✓</span>
                    <span>1 đổi 1 ngay lập tức nếu có sản phẩm bị dập úng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sprout font-bold">✓</span>
                    <span>Tích lũy điểm Eco-Card đổi quà cho mỗi lần đặt</span>
                  </div>
                </div>
              </div>
            </GlassReveal>
          </div>

          {/* ── Right Column: Interactive Order Form (7 cols) ── */}
          <div className="lg:col-span-7">
            <GlassReveal delay={0.4}>
              <div className="liquid-glass-strong rounded-[2.5rem] p-6 sm:p-9 border border-sprout/30 shadow-2xl text-left">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      {/* Step 1: Package Selector */}
                      <div>
                        <label className="text-cream/80 font-body text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-3">
                          1. Chọn gói hộp mong muốn:
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {PACKAGES.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setPkg(p.id)}
                              className={`p-3.5 rounded-2xl text-left font-body transition-all duration-200 border relative ${
                                pkg === p.id
                                  ? 'bg-sprout/15 border-sprout text-cream shadow-lg shadow-sprout/10 ring-1 ring-sprout'
                                  : 'liquid-glass border-white/5 text-cream/70 hover:border-white/20'
                              }`}
                            >
                              {p.badge && (
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-sprout text-moss inline-block mb-1.5 font-body">
                                  {p.badge}
                                </span>
                              )}
                              <div className="font-bold text-xs sm:text-sm text-cream">{p.name}</div>
                              <div className="text-[11px] text-cream/50 mt-0.5 mb-2 leading-tight">{p.desc}</div>
                              <div className="text-sprout font-heading font-bold text-base sm:text-lg">{p.price}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Step 2: Contact Info */}
                      <div>
                        <label className="text-cream/80 font-body text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-3">
                          2. Thông tin nhận hàng tận nơi:
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-cream/60 font-body text-xs mb-1">
                              Họ và tên <span className="text-sprout">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Ví dụ: Minh Anh"
                              className="w-full liquid-glass rounded-xl px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 outline-none focus:ring-1 focus:ring-sprout/60 border border-white/5 transition-all"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-cream/60 font-body text-xs mb-1">
                              Số điện thoại / Zalo <span className="text-sprout">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Ví dụ: 0912 345 678"
                              className="w-full liquid-glass rounded-xl px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 outline-none focus:ring-1 focus:ring-sprout/60 border border-white/5 transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Address & Note */}
                      <div className="space-y-3.5">
                        <div>
                          <label className="block text-cream/60 font-body text-xs mb-1">
                            Địa chỉ giao hàng (Hà Nội hoặc TP.HCM) <span className="text-sprout">*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Số nhà, ngõ/đường, phường, quận/huyện..."
                            className="w-full liquid-glass rounded-xl px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 outline-none focus:ring-1 focus:ring-sprout/60 border border-white/5 transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-cream/60 font-body text-xs mb-1">
                            Ghi chú đơn hàng (giờ nhận, yêu cầu riêng...)
                          </label>
                          <input
                            type="text"
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            placeholder="Ví dụ: Giao sáng trước 11h, bớt ớt chuông..."
                            className="w-full liquid-glass rounded-xl px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 outline-none focus:ring-1 focus:ring-sprout/60 border border-white/5 transition-all"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-sprout hover:bg-sprout/90 active:scale-[0.99] text-moss font-body font-bold rounded-full py-4 text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xl shadow-sprout/20 disabled:opacity-60 cursor-pointer"
                        >
                          {loading ? (
                            <svg className="animate-spin w-5 h-5 text-moss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25"/>
                              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"/>
                            </svg>
                          ) : (
                            <span className="text-xl">🌿</span>
                          )}
                          <span>{loading ? 'Đang gửi yêu cầu đặt hộp…' : 'Chốt Đơn Hộp Xấu Mã Ngay'}</span>
                        </button>
                        <p className="text-center text-xs text-cream/40 font-body mt-2.5">
                          ✓ Giao tận cửa · Kiểm tra hàng hài lòng mới thanh toán (COD)
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8"
                    >
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="font-heading italic text-2xl sm:text-3xl text-cream font-bold mb-3">
                        Cảm ơn bạn đã lựa chọn Hộp Nông Sản Xấu Mã!
                      </h3>
                      <p className="text-cream/70 font-body text-sm max-w-lg mx-auto mb-6">
                        Đơn hàng của bạn đã được chuyển tới nhà vườn để chuẩn bị thu hoạch sớm nhất.
                      </p>

                      <div className="liquid-glass rounded-2xl p-6 max-w-md mx-auto mb-6 text-left border border-sprout/20 space-y-2 text-sm font-body">
                        <div className="text-xs uppercase font-bold text-sprout mb-2 pb-2 border-b border-white/5">
                          Tóm tắt đơn hàng
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cream/50">Gói đã chọn:</span>
                          <strong className="text-cream">{selectedPkg.name} ({selectedPkg.price})</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cream/50">Người nhận:</span>
                          <span className="text-cream">{form.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cream/50">SĐT / Zalo:</span>
                          <span className="text-cream">{form.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cream/50">Địa chỉ:</span>
                          <span className="text-cream text-right max-w-[220px] truncate">{form.address}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 justify-center bg-sprout/15 border border-sprout/30 rounded-full px-6 py-3 w-fit mx-auto mb-6 shadow">
                        <span className="text-xl">🃏</span>
                        <span className="text-sm font-body font-bold text-sprout">
                          +15 Eco-Points đã được tích lũy vào số điện thoại của bạn!
                        </span>
                      </div>

                      <p className="text-cream/50 text-xs font-body mb-6">
                        Đội ngũ <strong>Nâng Niu Nông Sản Việt</strong> sẽ liên hệ qua Zalo/Điện thoại trong vòng 30 phút để xác nhận giờ giao tươi.
                      </p>

                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setForm({ name: '', phone: '', address: '', note: '' })
                        }}
                        className="liquid-glass px-6 py-2.5 rounded-full text-xs font-body font-semibold text-cream hover:bg-white/10 transition-colors"
                      >
                        ← Đặt thêm hộp khác
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
