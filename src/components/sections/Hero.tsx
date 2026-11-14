import { ArrowRight, Sparkles } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-start overflow-hidden text-left"
    >
      {/* ── Background Image: raucuxau2.png trải rộng full màn hình ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg}
          alt="Nông sản Xấu Mã tự nhiên"
          className="w-full h-full object-cover object-center scale-100 animate-in fade-in duration-700"
        />
        {/* Lớp phủ Gradient điện ảnh giúp chữ trắng tương phản sắc nét và nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Subtle radial light highlight on bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(25, 93, 59, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Content Container: Căn lề trái theo đúng bố cục ảnh mẫu ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl space-y-5 sm:space-y-6">
          {/* Headline to, mạnh mẽ, in hoa nét cao theo phong cách ảnh mẫu */}
          <div>
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] flex flex-col gap-2 sm:gap-3.5">
              <span className="block whitespace-nowrap leading-none">NÔNG SẢN ĐÚNG CHẤT</span>
              <span className="block whitespace-nowrap leading-none text-[#E8D5B5] drop-shadow-md">
                KHÔNG CẦN ĐÚNG CHUẨN
              </span>
            </h1>
          </div>

          {/* Subheadline 2 dòng rõ nét, font thanh lịch, truyền tải giá trị cốt lõi */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md">
            Rau củ tươi sạch 100% tuyển chọn thuận tự nhiên với vị ngon nguyên bản —{' '}
            <span className="font-normal text-white">
              giải pháp bữa ăn nhanh gọn, đủ chất, tiết kiệm 20% – 30% cho sinh viên và cả nhà.
            </span>
          </p>

          {/* Social Proof Pill / Badge bo tròn mờ kính theo mẫu */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm shadow-md whitespace-nowrap">
              <span className="whitespace-nowrap">Hơn 2.500+ sinh viên &amp; gia đình trẻ tại đô thị tin dùng</span>
            </div>
          </div>

          {/* Cặp nút CTA đặt ngang theo bố cục ảnh mẫu */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Nút 1: Nền trắng chữ xanh đậm in hoa */}
            <a
              href="#products"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-[#F8F5E9] text-[#195D3B] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-102 active:scale-98 text-center flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">ĐẶT MUA THỬ NGAY – HỘP 49.000Đ</span>
              <ArrowRight className="w-4 h-4 text-[#438347] shrink-0" />
            </a>

            {/* Nút 2: Nền kính mờ viền trắng mảnh chữ trắng in hoa */}
            <a
              href="#products"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-black/35 hover:bg-black/55 border border-white/60 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all hover:scale-102 active:scale-98 text-center whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">XEM 3 DÒNG HỘP</span>
            </a>
          </div>

          {/* 3 Cam kết nhanh dưới dạng text trắng tinh gọn */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/80">
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
          </div>
        </div>
      </div>
    </section>
  )
}
