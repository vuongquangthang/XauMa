import { ASSETS } from '../constants/assets'

const socials = [
  { label: 'Facebook Page', href: '#', icon: '🌐' },
  { label: 'TikTok @xauma.vietnam', href: '#', icon: '🎵' },
  { label: 'Zalo OA Nông Sản Việt', href: '#', icon: '💬' },
  { label: 'Instagram @nangniunongsan', href: '#', icon: '📸' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-[#09150E] text-cream relative">
      <div className="max-w-6xl mx-auto">
        {/* Upper Footer Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Campaign Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shrink-0 flex items-center justify-center shadow-md">
                <img
                  src={ASSETS.logo}
                  alt="Logo Xấu Mã"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-cream/50 font-body font-semibold block">
                  Thương hiệu bảo trợ
                </span>
                <div className="font-heading font-bold text-cream text-lg tracking-tight">
                  NÂNG NIU NÔNG SẢN VIỆT
                </div>
              </div>
            </div>

            <p className="text-sprout text-xs uppercase font-body font-bold tracking-wider">
              Chiến dịch: "Nông Sản Đúng Chất – Không Cần Đúng Chuẩn"
            </p>

            <p className="text-cream/60 font-body font-light text-sm leading-relaxed max-w-sm">
              Chúng tôi tin rằng mọi củ quả được nuôi dưỡng từ đất mẹ đều xứng đáng được trân trọng.
              Hành trình cùng Hộp Nông Sản Xấu Mã là lời cam kết vì một nền nông nghiệp tử tế,
              tiêu dùng thông thái và bữa cơm gia đình luôn ngập tràn hương vị tự nhiên.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-sprout/10 border border-sprout/20 rounded-full text-xs text-sprout font-medium">
                Sản phẩm chủ lực: Hộp Nông Sản Xấu Mã
              </span>
            </div>
          </div>

          {/* Contact Information (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <div className="text-cream/80 text-xs font-body uppercase font-bold tracking-wider mb-4">
              Tổng đài kết nối &amp; Hỗ trợ
            </div>
            <div className="space-y-3 text-sm font-body text-cream/70">
              <div className="flex items-start gap-3">
                <span className="text-sprout text-base shrink-0">📞</span>
                <div>
                  <div className="text-xs text-cream/40">Hotline / Zalo OA (8:00 - 20:00)</div>
                  <strong className="text-cream text-base">1900 6868</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sprout text-base shrink-0">✉️</span>
                <div>
                  <div className="text-xs text-cream/40">Hòm thư chiến dịch</div>
                  <span className="text-cream/90">xin-chao@nangniunongsanviet.vn</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sprout text-base shrink-0">📍</span>
                <div>
                  <div className="text-xs text-cream/40">Trạm phân phối nông sản tươi</div>
                  <span className="text-cream/80 leading-relaxed block text-xs">
                    • Kho Hà Nội: 48 Hoàng Hoa Thám, Ba Đình<br />
                    • Kho TP.HCM: 128 Nguyễn Đình Chiểu, Quận 3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Socials & Community (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-cream/80 text-xs font-body uppercase font-bold tracking-wider mb-4">
              Cộng đồng sống xanh
            </div>
            <p className="text-xs text-cream/50 font-body mb-3 leading-relaxed">
              Theo dõi kênh để đón xem câu chuyện của bà con nông dân và bí kíp nấu ăn xanh:
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="liquid-glass rounded-xl px-3.5 py-2 text-xs font-body text-cream/80 hover:text-cream hover:bg-white/5 transition-all flex items-center gap-2.5 border border-white/5"
                >
                  <span>{s.icon}</span>
                  <span className="truncate">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-cream/40">
          <p>© 2026 NÂNG NIU NÔNG SẢN VIỆT. Bản quyền chiến dịch thuộc về cộng đồng tiêu dùng thông minh.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream/70 transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-cream/70 transition-colors">
              Chính sách giao nhận &amp; Đổi trả
            </a>
            <a href="#" className="hover:text-cream/70 transition-colors">
              Tiêu chuẩn nông sản sạch
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
