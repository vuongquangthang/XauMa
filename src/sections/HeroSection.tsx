import { motion } from 'framer-motion'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { IconArrowUpRight, IconPlay, IconQR } from '../components/Icons'
import { ASSETS } from '../constants/assets'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-moss"
    >
      {/* ── Background: The Hero Produce Box in the organic field ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroFieldBox}
          alt="Hộp nông sản Xấu Mã ngoài đồng ruộng"
          className="w-full h-full object-cover object-right lg:object-center opacity-65 lg:opacity-75 scale-105"
        />
        {/* Cinematic atmospheric overlays: deep dark-moss gradient on the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-moss via-moss/95 via-45% to-moss/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-moss/60" />
        {/* Soft radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 20% 40%, rgba(163,217,91,0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── LEFT COLUMN: Text Content (7 cols) ── */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow Sponsor Badge */}
            <GlassReveal delay={0.15}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 liquid-glass rounded-full border border-sprout/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sprout animate-ping shrink-0" />
                <span className="text-xs uppercase font-body font-bold tracking-wider text-sprout">
                  Chiến dịch 2026
                </span>
                <span className="text-cream/30 text-xs">|</span>
                <span className="text-xs font-body text-cream/90 font-medium">
                  Bảo trợ bởi <strong className="text-sprout font-semibold">Nâng Niu Nông Sản Việt</strong>
                </span>
              </div>
            </GlassReveal>

            {/* Campaign Slogan & Main Headline */}
            <div>
              <p className="text-sprout text-xs sm:text-sm font-body uppercase font-bold tracking-[0.22em] mb-3">
                NÔNG SẢN ĐÚNG CHẤT – KHÔNG CẦN ĐÚNG CHUẨN
              </p>
              <h1 className="font-heading italic text-4xl sm:text-5xl lg:text-[4.2rem] text-cream leading-[1.08] tracking-[-1.5px]">
                <BlurText
                  text="Hộp Nông Sản Xấu Mã – Vẻ Ngoài Lạ Mắt, Vị Ngon Nguyên Bản"
                  delay={0.1}
                />
              </h1>
            </div>

            {/* Sub-headline: 3 Core Pillars */}
            <GlassReveal delay={0.4}>
              <p className="text-cream/80 text-base sm:text-lg font-body font-light leading-relaxed max-w-xl">
                <strong className="text-sprout font-medium">Tươi sạch 100%</strong> thu hoạch sớm từ nông trại Việt.
                <strong className="text-sprout font-medium"> Tiết kiệm 20% – 30%</strong> chi phí và cùng chung tay
                <strong className="text-sprout font-medium"> giảm lãng phí thực phẩm</strong>, ủng hộ sinh kế công bằng cho bà con nông dân.
              </p>
            </GlassReveal>

            {/* CTA Buttons */}
            <GlassReveal delay={0.6}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#order"
                  className="bg-sprout hover:bg-sprout/90 text-moss font-body font-bold text-base px-8 py-4 rounded-full flex items-center gap-2.5 shadow-xl shadow-sprout/25 hover:scale-105 active:scale-95 transition-all duration-300 group"
                >
                  <span>Đặt Hộp Xấu Mã Ngay</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <IconArrowUpRight />
                  </span>
                </a>
                <a
                  href="#solution"
                  className="liquid-glass rounded-full px-6 py-4 text-sm font-body font-semibold text-cream/90 hover:text-cream hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10"
                >
                  <IconPlay />
                  <span>Khám phá bên trong hộp</span>
                </a>
              </div>
            </GlassReveal>

            {/* Trust Stat Pills */}
            <GlassReveal delay={0.8}>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-4 max-w-lg">
                <div className="liquid-glass rounded-2xl p-3 sm:p-3.5 text-center border border-white/5 bg-moss/60 backdrop-blur-md">
                  <div className="text-sprout font-heading font-bold text-lg sm:text-xl">24 Giờ</div>
                  <div className="text-cream/55 text-[11px] font-body mt-0.5 leading-tight">Từ vườn tới bếp</div>
                </div>
                <div className="liquid-glass rounded-2xl p-3 sm:p-3.5 text-center border border-white/5 bg-moss/60 backdrop-blur-md">
                  <div className="text-sprout font-heading font-bold text-lg sm:text-xl">-30%</div>
                  <div className="text-cream/55 text-[11px] font-body mt-0.5 leading-tight">Chi phí đi chợ</div>
                </div>
                <div className="liquid-glass rounded-2xl p-3 sm:p-3.5 text-center border border-white/5 bg-moss/60 backdrop-blur-md">
                  <div className="text-sprout font-heading font-bold text-lg sm:text-xl">100%</div>
                  <div className="text-cream/55 text-[11px] font-body mt-0.5 leading-tight">Sạch chuẩn tự nhiên</div>
                </div>
              </div>
            </GlassReveal>
          </div>

          {/* ── RIGHT COLUMN: Interactive Product Box Spotlight (5 cols) ── */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <GlassReveal delay={0.4}>
              <motion.div
                className="liquid-glass-strong rounded-[2.5rem] p-3.5 sm:p-4 border border-sprout/30 shadow-2xl relative overflow-hidden group glow-sprout bg-moss/80 backdrop-blur-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Main Product Feature Image */}
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/11] relative">
                  <img
                    src={ASSETS.heroFieldBox}
                    alt="Nông sản đúng chất – Không cần đúng chuẩn"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-transparent to-black/10" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-moss/85 backdrop-blur-md rounded-full text-xs font-bold text-sprout border border-sprout/30 flex items-center gap-1.5 shadow">
                    <span>✨</span>
                    <span>Nông sản xấu mã – Giá trị không xấu!</span>
                  </div>

                  {/* Bottom Info inside Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left">
                    <p className="text-xs text-cream/70 font-body">Mỗi củ quả là một hình dáng độc bản</p>
                    <div className="font-heading italic text-lg sm:text-xl text-cream font-bold mt-0.5 drop-shadow">
                      Hộp Nông Sản Thu Hoạch Dưới Nắng Sớm
                    </div>
                  </div>
                </div>

                {/* Bottom Card Badges */}
                <div className="p-3 pt-4 flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-sprout/20 flex items-center justify-center text-sprout shrink-0">
                      <IconQR />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cream font-body">Mã QR Truy Xuất Nguồn Gốc</div>
                      <div className="text-[10px] text-cream/50 font-body">Minh bạch nông hộ canh tác</div>
                    </div>
                  </div>

                  <a
                    href="#solution"
                    className="px-3.5 py-1.5 bg-sprout/20 hover:bg-sprout text-sprout hover:text-moss rounded-full text-xs font-body font-bold transition-all border border-sprout/30"
                  >
                    Xem Chi Tiết →
                  </a>
                </div>
              </motion.div>
            </GlassReveal>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-9 rounded-full border border-cream/25 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-sprout/80 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
