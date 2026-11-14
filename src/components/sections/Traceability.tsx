import { QrCode, MapPin, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function Traceability() {
  return (
    <section id="traceability" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F5E9] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
            Minh bạch chuỗi cung ứng
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            TỪ NÔNG TRẠI ĐẾN CĂN BẾP – MỖI HỘP ĐỀU CÓ CÂU CHUYỆN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Mỗi chiếc hộp Xấu Mã khi giao tới tay bạn đều đính kèm thẻ QR để bạn có thể tra cứu hành trình
            từ lúc gieo hạt, chăm bón đến ngày hái sớm tại nông trại.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Real QR Unboxing Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src={ASSETS.boxSetupKraft}
                alt="Hộp nông sản Xấu Mã và bao bì Kraft mộc mạc"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-4 bg-white text-left flex items-center justify-between border-t border-[#E8D5B5]">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-5 h-5 text-[#195D3B]" />
                  <span className="text-xs font-bold text-[#195D3B]">
                    Thẻ tag đính kèm hộp giấy Kraft
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 italic">Quét bằng camera điện thoại</span>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Traceability Card (6 cols) */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D5B5] shadow-card space-y-5 relative">
              {/* Demo Badge */}
              <div className="flex justify-between items-center pb-4 border-b border-[#E8D5B5]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#91B34D]/20 text-[#195D3B] flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-[#195D3B]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#195D3B]">
                      Dữ liệu truy xuất nguồn gốc
                    </h3>
                    <span className="text-[10px] text-gray-400">Mã lô mẫu: LOT-DALAT-2026-08</span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#E8D5B5]/50 text-gray-700 border border-[#E8D5B5]">
                  DỮ LIỆU MINH HỌA (DEMO)
                </span>
              </div>

              {/* Data Fields */}
              <div className="space-y-3.5 text-xs text-gray-700">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60">
                  <MapPin className="w-4 h-4 text-[#438347] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-semibold">Tên nông trại & địa điểm:</span>
                    <strong className="text-[#195D3B] text-sm font-heading">Nông trại Hữu cơ Đơn Dương</strong>
                    <p className="text-gray-500 text-[11px] mt-0.5">Huyện Đơn Dương, Tỉnh Lâm Đồng</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60">
                    <Calendar className="w-4 h-4 text-[#438347] mb-1" />
                    <span className="text-[10px] text-gray-500 block uppercase font-semibold">Ngày thu hoạch:</span>
                    <strong className="text-gray-800 text-xs">5:30 Sáng (Trong ngày)</strong>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#438347] mb-1" />
                    <span className="text-[10px] text-gray-500 block uppercase font-semibold">Ngày đóng hộp:</span>
                    <strong className="text-gray-800 text-xs">Giao trong vòng 24 giờ</strong>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60">
                  <ShieldCheck className="w-4 h-4 text-[#438347] mb-1" />
                  <span className="text-[10px] text-gray-500 block uppercase font-semibold">Quy trình kiểm soát:</span>
                  <p className="text-gray-600 text-[11px] leading-relaxed mt-0.5">
                    Canh tác theo hướng an toàn sinh học, không sử dụng chất làm bóng hay thuốc kích thích tăng trưởng. Rau củ được rửa sạch bằng nước ngầm tinh khiết trước khi đóng hộp.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Thẻ QR trên mỗi thùng hàng thực tế sẽ dẫn trực tiếp đến trang thông tin thời gian thực của từng mẻ rau củ thu hoạch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
