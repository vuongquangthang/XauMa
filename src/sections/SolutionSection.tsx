import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { IconLeaf, IconSpark, IconTag, IconArrowUpRight, IconQR } from '../components/Icons'
import { ASSETS } from '../constants/assets'

const BOXES = [
  {
    id: 'personal',
    label: 'Hộp Cá Nhân / Tiện Lợi',
    weight: '3kg',
    price: '89.000đ',
    originalPrice: '125.000đ',
    badge: 'Tiết kiệm 28%',
    description: 'Phù hợp cho 1-2 người dùng trong 4-5 ngày. Ngẫu nhiên 4-5 loại rau củ theo mùa hái sớm.',
    items: [
      { name: 'Cà rốt Đà Lạt dáng lạ (giòn ngọt, thơm)', icon: '🥕' },
      { name: 'Cà chua bi rám nắng tự nhiên mọng nước', icon: '🍅' },
      { name: 'Xà lách mộc mạc không phun thuốc', icon: '🥬' },
      { name: 'Ớt chuông dáng không đều cỡ', icon: '🫑' },
      { name: 'Dưa leo vườn vỏ xù xì giòn mát', icon: '🥒' },
    ],
  },
  {
    id: 'family',
    label: 'Hộp Gia Đình Tiêu Chuẩn',
    weight: '5kg',
    price: '149.000đ',
    originalPrice: '210.000đ',
    badge: 'Tiết kiệm 30% · Bán chạy nhất',
    description: 'Phù hợp cho gia đình 3-5 người dùng trong tuần. Đa dạng 6-7 loại củ quả giàu vitamin & chất xơ.',
    items: [
      { name: 'Cà rốt Đà Lạt hình dáng ngẫu hứng', icon: '🥕' },
      { name: 'Cà chua chín cây mọng nước', icon: '🍅' },
      { name: 'Xà lách & rau thơm hữu cơ', icon: '🥬' },
      { name: 'Lê xanh Sa Pa vỏ thô nhưng ngọt đậm', icon: '🍐' },
      { name: 'Dưa leo vườn giòn ngọt nước', icon: '🥒' },
      { name: 'Bắp non ngọt & khoai tây đất đỏ', icon: '🌽' },
      { name: 'Củ dền đỏ thẫm bổ dưỡng', icon: '🍠' },
    ],
  },
]

const commitments = [
  {
    icon: <IconLeaf />,
    title: '100% Tươi Sạch & An Toàn',
    subtitle: 'Canh tác thuận tự nhiên, giao nhanh 24h',
    tags: ['Thu hoạch sớm', 'Giao trong 24h', 'QR truy xuất minh bạch'],
    text: 'Được thu mua trực tiếp từ các nông hộ canh tác an toàn theo hướng hữu cơ, VietGAP. Thu hoạch lúc sáng sớm tại vườn và chuyển thẳng đến tay bạn trong vòng 24 giờ, kèm mã QR tra cứu rõ tên người nông dân canh tác.',
  },
  {
    icon: <IconSpark />,
    title: '100% Vị Ngon Nguyên Bản',
    subtitle: 'Đậm đà hương vị tự nhiên & Dinh dưỡng trọn vẹn',
    tags: ['Không ép chín', 'Không hoá chất bóng vỏ', 'Vẹn tròn vitamin'],
    text: 'Cây trái lớn lên theo nhịp điệu tự nhiên, chín đúng vụ nên tích tụ lượng đường và vi chất tối đa. Dù bên ngoài có chút "xấu mã" hay méo mó, bên trong luôn giòn ngọt, đậm vị quê nhà hơn hẳn nông sản công nghiệp lưu kho.',
  },
  {
    icon: <IconTag />,
    title: 'Tiết Kiệm 20% – 30% Chi Phí',
    subtitle: 'Tối ưu phân loại, trợ giá công bằng cho nông dân',
    tags: ['Cắt giảm trung gian', 'Giá hợp lý mỗi ngày', 'Trợ giá trực tiếp'],
    text: 'Chúng tôi loại bỏ hoàn toàn chi phí tuyển chọn ngoại hình khắt khe, bao bì cầu kỳ và chiết khấu trung gian của các chuỗi siêu thị. Bạn nhận được mức giá đi chợ sạch cực kỳ dễ chịu, trong khi người nông dân vẫn được trả giá thu mua xứng đáng.',
  },
]

const CommitmentCard = memo(function CommitmentCard({
  icon,
  title,
  subtitle,
  tags,
  text,
  index,
}: typeof commitments[0] & { index: number }) {
  return (
    <motion.div
      className="liquid-glass rounded-[2rem] p-7 flex flex-col justify-between border border-white/10 hover:border-sprout/40 transition-all duration-300 min-h-[340px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div>
        <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center text-sprout mb-5 shadow-inner">
          {icon}
        </div>
        <div className="text-xs uppercase font-body font-bold tracking-wider text-sprout mb-1">
          Cam kết #{index + 1}
        </div>
        <h3 className="font-body font-bold text-cream text-lg mb-1">{title}</h3>
        <p className="text-xs text-cream/50 font-body mb-3 font-medium">{subtitle}</p>
        <p className="text-cream/70 font-body font-light text-sm leading-relaxed">{text}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-body text-sprout/90 bg-sprout/10 border border-sprout/20 rounded-full px-3 py-1 font-medium"
          >
            ✓ {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
})

export default function SolutionSection() {
  const [selected, setSelected] = useState<'personal' | 'family'>('family')
  const box = BOXES.find((b) => b.id === selected)!

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-moss text-cream">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(163,217,91,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <GlassReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label">// Giải pháp trọng tâm</span>
            <span className="text-cream/30 text-xs">·</span>
            <span className="text-xs text-sprout font-medium">Chiến dịch Nâng Niu Nông Sản Việt</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-cream max-w-3xl mb-5 leading-tight">
          <BlurText text="Hộp Nông Sản Xấu Mã – Bất Ngờ Thú Vị Trong Từng Mùa Vụ" delay={0.1} />
        </h2>

        <GlassReveal delay={0.2} className="max-w-2xl mb-14">
          <p className="text-cream/75 font-body font-light text-base leading-relaxed">
            Mỗi chiếc hộp là một tổ hợp ngẫu nhiên của những củ quả theo mùa: hình dáng độc lạ không đụng hàng,
            nhưng ruột ngon nguyên bản, đóng gói chỉn chu trong hộp giấy kraft thân thiện môi trường.
          </p>
        </GlassReveal>

        {/* ── Interactive Unboxing Experience with Real Photo ── */}
        <GlassReveal delay={0.3} className="mb-20">
          <div className="liquid-glass-strong rounded-[2.5rem] p-6 sm:p-10 border border-sprout/30 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Unboxing Real Image & QR Traceability (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square relative shadow-2xl border border-white/10 group">
                  <img
                    src={ASSETS.unboxingQR}
                    alt="Mở hộp nông sản Xấu Mã"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-transparent to-transparent" />

                  {/* Top Quote Tag */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 p-3 bg-moss/85 backdrop-blur-md rounded-2xl border border-sprout/20 text-left">
                    <span className="text-[11px] font-body text-sprout font-bold uppercase tracking-wider block">
                      Thông điệp từ nông trại:
                    </span>
                    <p className="text-xs text-cream/90 font-medium italic mt-0.5">
                      "Cảm ơn bạn vì đã chọn giá trị thay vì vẻ ngoài ♡"
                    </p>
                  </div>

                  {/* Bottom QR Tag Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between p-2.5 bg-black/60 backdrop-blur-md rounded-xl text-xs text-cream/90">
                    <span className="flex items-center gap-1.5 text-sprout font-semibold">
                      <IconQR /> Có thẻ truy xuất QR
                    </span>
                    <span className="text-[11px] text-cream/60">Bao bì giấy kraft tái sinh</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Box Customizer & Produce List (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Toggle Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-xs font-body uppercase font-bold text-sprout tracking-wider block mb-1">
                      Lựa chọn gói hộp:
                    </span>
                    <h3 className="font-heading italic text-xl text-cream font-bold">
                      Kích cỡ phù hợp với căn bếp của bạn
                    </h3>
                  </div>

                  <div className="flex gap-2 p-1.5 liquid-glass rounded-full border border-white/10">
                    {BOXES.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelected(b.id as 'personal' | 'family')}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-body font-semibold transition-all duration-300 ${
                          selected === b.id
                            ? 'bg-sprout text-moss shadow-md'
                            : 'text-cream/70 hover:text-cream'
                        }`}
                      >
                        {b.weight} · {b.label.split('/')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price and Details */}
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3 bg-moss-light/80 p-4 rounded-2xl border border-white/5">
                    <div>
                      <span className="text-xs text-cream/50 block font-body">{box.label}</span>
                      <div className="flex items-baseline gap-3 mt-1">
                        <span className="font-heading text-4xl sm:text-5xl text-sprout font-bold tracking-tight">
                          {box.price}
                        </span>
                        <span className="text-cream/40 line-through text-sm font-body">
                          {box.originalPrice}
                        </span>
                        <span className="text-xs text-cream/60 font-body">/ hộp</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-3.5 py-1 bg-sprout/20 border border-sprout/40 text-sprout text-xs font-bold rounded-full font-body inline-block">
                        {box.badge}
                      </span>
                      <p className="text-[11px] text-cream/50 font-body mt-1">Giao tươi miễn phí nội thành</p>
                    </div>
                  </div>

                  <p className="text-sm font-body text-cream/80 italic">
                    "{box.description}"
                  </p>

                  {/* Items List inside the selected box */}
                  <div>
                    <span className="text-xs uppercase font-body font-semibold text-cream/60 tracking-wider block mb-2.5">
                      Rau củ theo mùa bên trong chiếc hộp:
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {box.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="liquid-glass rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 border border-white/5"
                        >
                          <span className="text-xl shrink-0">{item.icon}</span>
                          <span className="text-xs sm:text-sm font-body text-cream/90">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#order"
                      className="flex-1 bg-sprout hover:bg-sprout/90 text-moss font-body font-bold rounded-full py-3.5 text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-sprout/20"
                    >
                      <span>Chốt Đơn Hộp {box.weight} Ngay</span>
                      <IconArrowUpRight />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </GlassReveal>

        {/* ── 3 Core Commitments Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-body uppercase font-bold text-sprout tracking-widest block mb-2">
            Vì sao bạn có thể hoàn toàn yên tâm?
          </span>
          <h3 className="font-heading italic text-2xl sm:text-3xl text-cream font-bold">
            3 Cam Kết Cốt Lõi Từ Thương Hiệu "Nâng Niu Nông Sản Việt"
          </h3>
        </div>

        {/* 3 Core Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, i) => (
            <CommitmentCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
