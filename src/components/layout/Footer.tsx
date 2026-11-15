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
                <span>lienhe@xauma.vn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#438347] shrink-0" />
                <span>Hotline: 0812642516</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-gray-500 block mb-2">Kênh cộng đồng:</span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1MEVktChNv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Xấu Mã"
                  className="w-9 h-9 rounded-xl bg-[#F8F5E9] text-[#195D3B] hover:text-white hover:bg-[#195D3B] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@mhagn._?_r=1&_t=ZS-9BQDjFyIuTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Xấu Mã"
                  className="w-9 h-9 rounded-xl bg-[#F8F5E9] text-[#195D3B] hover:text-white hover:bg-[#195D3B] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mhagn._?mdxt=MTJwbnI3aWlndjJ0eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Xấu Mã"
                  className="w-9 h-9 rounded-xl bg-[#F8F5E9] text-[#195D3B] hover:text-white hover:bg-[#195D3B] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
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
