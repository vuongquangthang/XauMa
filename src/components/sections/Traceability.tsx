import { QrCode, MapPin, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { ASSETS } from '../../constants/assets'
import BlurText from '../BlurText'

export default function Traceability() {
  return (
    <section id="traceability" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F5E9] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
              Minh bạch chuỗi cung ứng
            </span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            <BlurText text="TỪ NÔNG TRẠI ĐẾN CĂN BẾP, MỖI HỘP ĐỀU CÓ CÂU CHUYỆN" delay={0.08} />
          </h2>

          <motion.p
            initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Mỗi chiếc hộp Xấu Mã giao tới tay bạn đều đính kèm thẻ QR để bạn có thể tra cứu hành trình
            từ lúc gieo hạt, chăm bón đến ngày hái tại nông trại
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Real QR Unboxing Image (6 cols) - Cao bằng card bên phải */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, x: -40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex flex-col h-full"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group h-full flex flex-col justify-between">
              <div className="relative flex-1 min-h-[300px] overflow-hidden">
                <img
                  src={ASSETS.boxSetupKraft}
                  alt="Hộp nông sản Xấu Mã và bao bì Kraft mộc mạc"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white text-left flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-5 h-5 text-[#195D3B]" />
                  <span className="text-xs font-bold text-[#195D3B]">
                    Thẻ tag đính kèm hộp giấy Kraft
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Demo Traceability Card (6 cols) */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, x: 40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 text-left flex flex-col h-full"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow space-y-5 relative h-full flex flex-col justify-between">
              {/* Demo Badge */}
              <div className="flex justify-between items-center pb-4 border-b border-[#E8D5B5]">
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#195D3B]">
                      Dữ liệu truy xuất nguồn gốc
                    </h3>
                    <span className="text-[10px] text-gray-400">Mã lô mẫu: LOT-DALAT-2026-08</span>
                  </div>
                </div>
              </div>

              {/* Data Fields */}
              <div className="space-y-3.5 text-xs text-gray-700">
                <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#438347] shrink-0" />
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Tên nông trại &amp; địa điểm:</span>
                  </div>
                  <div className="pl-5">
                    <strong className="text-[#195D3B] text-sm font-heading block">Nông trại Hữu cơ Đơn Dương</strong>
                    <p className="text-gray-500 text-[11px] mt-0.5">Huyện Đơn Dương, Tỉnh Lâm Đồng</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#438347] shrink-0" />
                      <span className="text-[10px] text-gray-500 uppercase font-semibold">Ngày thu hoạch:</span>
                    </div>
                    <strong className="text-gray-800 text-xs block pl-5">5:30 Sáng (Trong ngày)</strong>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#438347] shrink-0" />
                      <span className="text-[10px] text-gray-500 uppercase font-semibold">Ngày đóng hộp:</span>
                    </div>
                    <strong className="text-gray-800 text-xs block pl-5">Giao trong vòng 24 giờ</strong>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F8F5E9]/60 border border-[#E8D5B5]/60 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#438347] shrink-0" />
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Quy trình kiểm soát:</span>
                  </div>
                  <p className="text-gray-600 text-[11px] leading-relaxed pl-5">
                    Canh tác theo hướng an toàn sinh học, không sử dụng chất làm bóng hay thuốc kích thích tăng trưởng. Rau củ được rửa sạch bằng nước ngầm tinh khiết trước khi đóng hộp.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Thẻ QR trên mỗi thùng hàng thực tế sẽ dẫn trực tiếp đến trang thông tin thời gian thực của từng mẻ rau củ thu hoạch.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
