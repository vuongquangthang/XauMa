import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { ASSETS } from '../../constants/assets'
import { useCart } from '../../store/cartContext'

export default function Footer() {
  const { openAiModal } = useCart()
  return (
    <footer className="bg-white border-t border-[#E8D5B5] pt-16 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8 text-left text-xs text-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8D5B5]">
          {/* Brand Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white p-1 border border-[#E8D5B5] shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src={ASSETS.logo}
                  alt="Logo Xấu Mã"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-[#195D3B] tracking-tight block">
                  XẤU MÃ
                </span>
                <span className="text-[11px] text-[#438347] font-semibold">
                  Nâng niu nông sản Việt
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Xấu Mã cung cấp các sản phẩm nông sản có hình dáng không đạt tiêu chuẩn ngoại hình thương mại
              nhưng vẫn được tuyển chọn theo các tiêu chí chất lượng, tươi ngon và an toàn thực phẩm.
            </p>

            <div className="text-[11px] text-gray-500 pt-1">
              Chiến dịch: <strong className="text-[#195D3B]">Nông sản đúng chất – Không cần đúng chuẩn</strong>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-[#195D3B] text-xs uppercase tracking-wider">
              Khám phá
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-[#195D3B] transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-[#195D3B] transition-colors">
                  Câu chuyện thương hiệu
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#195D3B] transition-colors">
                  Ba dòng hộp nông sản
                </a>
              </li>
              <li>
                <button
                  onClick={() => openAiModal()}
                  className="hover:text-[#195D3B] transition-colors cursor-pointer text-left"
                >
                  AI Đi Chợ cá nhân hóa
                </button>
              </li>
              <li>
                <a href="#why-xau-ma" className="hover:text-[#195D3B] transition-colors">
                  Cam kết chất lượng
                </a>
              </li>
              <li>
                <a href="#traceability" className="hover:text-[#195D3B] transition-colors">
                  Truy xuất nguồn gốc QR
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#195D3B] transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-[#195D3B] text-xs uppercase tracking-wider">
              Chính sách
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-[#195D3B] transition-colors">
                  Chính sách mua hàng
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#195D3B] transition-colors">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#195D3B] transition-colors">
                  Chính sách đổi trả 24h
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#195D3B] transition-colors">
                  Tiêu chuẩn phân loại củ quả
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-[#195D3B] text-xs uppercase tracking-wider">
              Thông tin liên hệ
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#438347] shrink-0 mt-0.5" />
                <span>Trạm phân phối: Hà Nội &amp; TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#438347] shrink-0" />
                <span>lienhe@xauma.vn (Đang cập nhật)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#438347] shrink-0" />
                <span>Hotline: Hỗ trợ qua kênh Zalo OA</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-gray-500 block mb-2">Kênh cộng đồng:</span>
              <div className="flex gap-2">
                {['TikTok', 'Facebook', 'Instagram', 'Zalo'].map((social) => (
                  <span
                    key={social}
                    className="px-2.5 py-1 rounded-lg bg-[#F8F5E9] border border-[#E8D5B5] text-[11px] font-semibold text-gray-700 hover:text-[#195D3B] cursor-pointer"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-[11px]">
          <p>© 2026 XẤU MÃ. Bản quyền thuộc về thương hiệu Xấu Mã.</p>
          <p className="italic">Nông sản xấu mã - Nâng niu nông sản Việt</p>
        </div>
      </div>
    </footer>
  )
}
