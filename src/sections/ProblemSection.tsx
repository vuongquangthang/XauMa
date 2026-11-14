import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { ASSETS } from '../constants/assets'

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(target * ease))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, start])
  return count
}

export default function ProblemSection() {
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
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const pct = useCountUp(30, 1800, triggered)

  const insights = [
    {
      icon: '🥕',
      tag: 'Phá vỡ định kiến ngoại hình',
      title: 'Độ ngọt & vitamin không nằm ở dáng vẻ',
      text: 'Một củ cà rốt có hai nhánh chân, quả cà chua hơi vẹo vọ hay trái lê vỏ rám nắng tự nhiên... bên trong vẫn giòn ngọt đậm đà, vẹn nguyên 100% dinh dưỡng. Vẻ ngoài khác biệt chính là dấu ấn canh tác tự nhiên, không bị can thiệp hóa chất làm đẹp nhân tạo.',
    },
    {
      icon: '💡',
      tag: 'Insight người tiêu dùng hiện đại',
      title: 'Mua sắm bằng sự thấu hiểu thay vì vỏ bọc',
      text: 'Người tiêu dùng thông minh hiểu rằng bữa cơm gia đình ngon và lành đến từ độ tươi thật, an toàn thật và cái tâm của người làm vườn. Chuẩn mực thẩm mỹ cứng nhắc của siêu thị đang vô tình loại bỏ những giá trị dinh dưỡng thuần khiết nhất.',
    },
    {
      icon: '🌱',
      tag: 'Hành động vì nông dân & môi trường',
      title: 'Mỗi lựa chọn là một sự trân trọng đất mẹ',
      text: 'Khi bạn mở lòng đón nhận một "Hộp Nông Sản Xấu Mã", bạn không chỉ tiết kiệm ngân sách gia đình mà còn trực tiếp tạo đầu ra công bằng cho người nông dân Việt, cùng giảm thiểu lượng rác thải thực phẩm khổng lồ gây ô nhiễm môi trường.',
    },
  ]

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#F7F5EE] text-[#14281A] transition-colors">
      {/* Subtle organic light background accents */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(132,196,50,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(210,180,140,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label & Campaign Info */}
        <GlassReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label-dark font-bold">// Câu chuyện chiến dịch &amp; Thực trạng</span>
            <span className="text-gray-400 text-xs">·</span>
            <span className="text-xs text-[#2E6B18] font-bold">Thương hiệu Nâng Niu Nông Sản Việt</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-[#14281A] max-w-3xl mb-14 leading-tight">
          <BlurText text="Khi định kiến vẻ bề ngoài đánh cắp giá trị thật của nông sản" delay={0.1} />
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* ── Left Column: Big Stat Card + Image Evidence (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassReveal delay={0.2} className="h-full">
              <div
                ref={ref}
                className="card-organic-light rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between h-full border border-[#D8DFD0] shadow-xl"
              >
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-heading text-[5.5rem] leading-none font-bold text-[#3B7A1C] tabular-nums">
                      {pct}%
                    </span>
                    <span className="font-heading text-2xl text-[#14281A] font-bold">nông sản sạch</span>
                  </div>

                  <div className="inline-block mb-5 px-3.5 py-1 bg-[#FDEEE7] border border-[#F6C2AF] rounded-full text-[#C84E25] text-xs font-bold">
                    ~ 8,8 triệu tấn / năm bị lãng phí tại Việt Nam
                  </div>

                  <h3 className="font-body font-bold text-[#14281A] text-xl mb-3 leading-snug">
                    Bị bỏ rơi trên đồng ruộng chỉ vì không đạt tiêu chuẩn "đẹp mã" của siêu thị
                  </h3>

                  <p className="text-[#4A5D4F] font-body text-sm leading-relaxed mb-6">
                    Chỉ vì hơi cong queo, quả lệch cỡ hay có chút tì vết rám nắng tự nhiên, hàng vạn tấn rau củ tươi ngon,
                    đạt chuẩn vệ sinh an toàn vẫn bị các chuỗi cung ứng khước từ. Người nông dân chịu cảnh{' '}
                    <strong className="text-[#14281A] font-semibold">"được mùa mất giá"</strong>, trong khi tài nguyên đất,
                    nước và công sức lao động bị lãng phí.
                  </p>
                </div>

                {/* Produce Box Photo Evidence */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] relative shadow-md mt-2 border border-[#E0E5D8]">
                  <img
                    src={ASSETS.freshOpenBox}
                    alt="Rau củ Xấu Mã tươi rói"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium drop-shadow">
                    Cận cảnh rau củ tươi non trong hộp Xấu Mã thu hoạch sáng sớm
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/80 flex items-center justify-between text-xs text-[#5D7062]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3B7A1C] animate-pulse" />
                    Theo Báo cáo FAO 2024
                  </span>
                  <span className="font-bold text-[#3B7A1C]">Cần thay đổi nhận thức</span>
                </div>
              </div>
            </GlassReveal>
          </div>

          {/* ── Right Column: 3 Consumer Insights (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {insights.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-organic-light rounded-[2rem] p-6 sm:p-7 flex flex-col sm:flex-row gap-5 items-start border border-[#DCE3D4] hover:border-[#84CC16] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
              >
                <div className="w-13 h-13 rounded-2xl bg-[#E8EFE0] flex items-center justify-center text-3xl shrink-0 p-3 shadow-inner">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-body uppercase font-bold tracking-wider text-[#3B7A1C] block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-body font-bold text-[#14281A] text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#4A5D4F] font-body text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
