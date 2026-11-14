import { useEffect, useRef, useState } from 'react'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'

function useCountUp(target: number, suffix: string, duration = 2200, start = false) {
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const val = Math.floor(target * ease)
      setDisplay(val.toLocaleString('vi-VN') + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, suffix, duration, start])
  return display
}

const metrics = [
  {
    raw: 142500,
    suffix: '+',
    unit: 'kg',
    label: 'Nông Sản Tươi Được Giải Cứu',
    desc: 'Hàng trăm tấn rau củ tươi non, vẹn nguyên dưỡng chất đã thoát khỏi số phận bị vứt bỏ lãng phí trên đồng ruộng, đến thẳng bàn ăn của hàng ngàn gia đình Việt.',
    emoji: '🌱',
    highlight: 'Giảm lãng phí thực phẩm',
  },
  {
    raw: 320,
    suffix: '+',
    unit: 'Hộ',
    label: 'Nông Dân Được Đồng Hành Bền Vững',
    desc: 'Bà con nông dân tại Lâm Đồng, Đắk Lắk, Sa Pa... có đầu ra bao tiêu ổn định với mức giá thu mua công bằng, không còn nỗi lo bị thương lái ép giá vì củ quả lạ hình.',
    emoji: '🧑‍🌾',
    highlight: 'Hỗ trợ sinh kế nông thôn',
  },
  {
    raw: 85400,
    suffix: '+',
    unit: 'kg',
    label: 'Khí Thải CO₂ Được Giảm Thiểu',
    desc: 'Ngăn chặn lượng rác hữu cơ khổng lồ phân hủy sinh ra khí nhà kính nguy hại. Đồng thời đóng gói tối giản bằng thùng giấy kraft tái sinh thân thiện môi trường.',
    emoji: '🌍',
    highlight: 'Bảo vệ bầu khí quyển',
  },
]

function MetricCard({
  raw,
  suffix,
  unit,
  label,
  desc,
  emoji,
  highlight,
  start,
}: typeof metrics[0] & { start: boolean }) {
  const count = useCountUp(raw, suffix, 2200, start)
  return (
    <div className="liquid-glass-strong rounded-[2rem] p-8 flex flex-col justify-between border border-sprout/20 hover:border-sprout/40 transition-all duration-300 min-h-[320px] text-left">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-3xl">{emoji}</span>
          <span className="text-[11px] font-body uppercase font-bold text-sprout px-3 py-1 bg-sprout/10 rounded-full border border-sprout/20">
            {highlight}
          </span>
        </div>
        <div className="mb-2">
          <div className="font-heading text-4xl sm:text-5xl font-bold text-sprout tabular-nums tracking-tight">
            {count} <span className="text-2xl text-cream/70 font-body font-normal">{unit}</span>
          </div>
          <div className="font-body font-bold text-cream text-lg mt-3">{label}</div>
        </div>
        <p className="text-cream/65 font-body font-light text-sm leading-relaxed mt-3">{desc}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cream/40">
        <span>Chiến dịch 2026</span>
        <span className="text-sprout font-medium">Đang tiếp tục tăng ↑</span>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A180F] text-cream">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(163,217,91,0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <GlassReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label">// Tác động xã hội &amp; Bền vững</span>
            <span className="text-cream/30 text-xs">·</span>
            <span className="text-xs text-sprout font-medium">Chung tay sống xanh</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-cream max-w-3xl mb-4 leading-tight">
          <BlurText text="Những Con Số Biết Nói Từ Cộng Đồng Sống Xanh" delay={0.1} />
        </h2>

        <GlassReveal delay={0.2} className="max-w-2xl mb-14">
          <p className="text-cream/70 font-body font-light text-base leading-relaxed">
            Mỗi chiếc Hộp Nông Sản Xấu Mã bạn chọn là một phiếu bầu cho lối sống bền vững,
            góp phần viết tiếp câu chuyện ý nghĩa cho nền nông nghiệp Việt Nam.
          </p>
        </GlassReveal>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <GlassReveal key={m.label} delay={0.2}>
              <MetricCard {...m} start={triggered} />
            </GlassReveal>
          ))}
        </div>

        {/* Eco-Card Rewards Callout */}
        <GlassReveal delay={0.4} className="mt-12">
          <div className="liquid-glass rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto border border-sprout/25 bg-gradient-to-r from-sprout/10 via-transparent to-kraft/10">
            <div className="flex items-center gap-5 text-left">
              <div className="w-16 h-16 rounded-2xl bg-sprout/20 flex items-center justify-center text-3xl shrink-0 shadow-inner">
                🃏
              </div>
              <div>
                <span className="text-xs uppercase font-body font-bold text-sprout tracking-wider block mb-1">
                  Đặc quyền thành viên xanh
                </span>
                <h4 className="font-heading italic text-lg sm:text-xl text-cream font-bold mb-1">
                  Tích Lũy Điểm Eco-Card Trong Từng Hộp Rau Củ
                </h4>
                <p className="text-cream/65 font-body text-xs sm:text-sm leading-relaxed max-w-xl">
                  Mỗi đơn hàng được tích lũy điểm xanh để đổi lấy phiếu miễn phí vận chuyển, tặng hạt giống hoa quả,
                  hoặc chiết khấu trực tiếp cho các gói đăng ký định kỳ mỗi tuần.
                </p>
              </div>
            </div>

            <a
              href="#order"
              className="shrink-0 px-6 py-3.5 bg-sprout text-moss font-body font-bold text-sm rounded-full hover:bg-sprout/90 hover:scale-105 transition-all shadow-md"
            >
              Đặt Ngay Để Tích Điểm
            </a>
          </div>
        </GlassReveal>
      </div>
    </section>
  )
}
