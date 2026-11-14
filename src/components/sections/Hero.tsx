import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ASSETS } from '../../constants/assets'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center overflow-hidden text-left"
    >
      {/* ── Background Image: background.jpg mới (tỉ lệ 1242x492) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F6E6CA]">
        {/* Ảnh giữ kích thước tỉ lệ tự nhiên không zoom (object-contain), đặt ở chân trang khít màn hình */}
        <div className="absolute inset-x-0 bottom-0 top-16 sm:top-24 md:top-28 pointer-events-none">
          <img
            src={ASSETS.heroBg}
            alt="Nông sản Xấu Mã tự nhiên"
            className="w-full h-full object-contain object-bottom animate-in fade-in duration-700"
          />
          {/* Hiệu ứng màu mờ dần tiệp đúng tone vàng kem ấm tự nhiên của nền ảnh gốc */}
          <div className="absolute inset-x-0 -top-1 h-24 sm:h-36 bg-gradient-to-b from-[#F6E6CA] via-[#F6E6CA]/70 to-transparent pointer-events-none" />
        </div>

        {/* Lớp phủ Gradient sáng mờ điện ảnh phía bên trái để chữ trắng/vàng vẫn dễ đọc mà không bị tối màn hình */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Subtle radial light highlight on bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(25, 93, 59, 0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Content Container: Căn lề trái theo đúng bố cục ảnh mẫu ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col justify-between">
          {/* Cụm trên: Tiêu đề + Subheadline dịch lên phía trên */}
          <div className="space-y-4 sm:space-y-5">
            {/* Headline to, mạnh mẽ, in hoa nét cao theo phong cách ảnh mẫu */}
            <motion.div
              initial={{ filter: 'blur(12px)', opacity: 0, y: 35 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] flex flex-col gap-2 sm:gap-3.5">
                <span className="block whitespace-nowrap leading-none">NÔNG SẢN ĐÚNG CHẤT</span>
                <span className="block whitespace-nowrap leading-none text-[#E8D5B5] drop-shadow-md">
                  KHÔNG CẦN ĐÚNG CHUẨN
                </span>
              </h1>
            </motion.div>

            {/* Subheadline tách thành 2 dòng rõ nét, font thanh lịch, truyền tải giá trị cốt lõi */}
            <motion.p
              initial={{ filter: 'blur(8px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md space-y-1"
            >
              <span className="block">
                Rau củ tươi sạch 100% tuyển chọn thuận tự nhiên với vị ngon nguyên bản —
              </span>
              <span className="block">
                Giải pháp bữa ăn nhanh gọn, đủ chất, tiết kiệm 20% – 30% cho sinh viên và cả nhà.
              </span>
            </motion.p>
          </div>

          {/* Cụm dưới: Kéo cả nút CTA và 3 cam kết xuống phía dưới (đã bỏ gạch ngang) */}
          <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 space-y-4 sm:space-y-5">
            {/* Nút CTA chính */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center w-full sm:w-auto"
            >
              <a
                href="#products"
                className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-[#F8F5E9] text-[#195D3B] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 active:scale-95 text-center flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span className="whitespace-nowrap">ĐẶT MUA THỬ NGAY CHỈ 49.000Đ</span>
                <ArrowRight className="w-4 h-4 text-[#438347] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* 3 Cam kết nhanh (đã bỏ gạch ngang) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/80"
            >
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#91B34D] font-bold">✓</span>
                <span>100% Tươi sạch &amp; An toàn</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#91B34D] font-bold">✓</span>
                <span>Tiết kiệm 20% – 30%</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#91B34D] font-bold">✓</span>
                <span>Giao nhanh trong 24h</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
