import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { IconCheck, IconX } from '../components/Icons'

const rows = [
  {
    label: 'Hình thức & Diện mạo',
    icon: '✨',
    standardTitle: 'Đều tăm tắp, phủ sáp bóng bẩy',
    standard: 'Được tuyển chọn theo khuôn mẫu gắt gao. Phải gọt bỏ tới 30% sản lượng đạt chuẩn an toàn chỉ vì củ cong, quả lệch size hoặc rám nắng tự nhiên.',
    xaumaTitle: 'Độc bản 100% thuận tự nhiên',
    xauma: 'Mỗi củ quả mang một hình thù ngẫu hứng riêng biệt. Vẻ ngoài mộc mạc chính là bằng chứng xác thực của nông sản lớn lên dưới nắng gió, không ép dáng.',
  },
  {
    label: 'Dinh dưỡng & Độ tươi',
    icon: '🥗',
    standardTitle: 'Lưu kho lạnh nhiều ngày',
    standard: 'Trải qua nhiều khâu trung gian, lưu kho mát kéo dài để chờ phân phối, dễ hao hụt lượng vitamin nhạy cảm và giảm độ giòn ngọt tự nhiên.',
    xaumaTitle: 'Tươi giòn trong 24h thu hoạch',
    xauma: 'Thu hoạch theo đơn lúc sáng sớm và giao thẳng tới bếp trong 24 giờ. Giữ trọn 100% vitamin, khoáng chất và vị ngọt thanh đặc trưng của thổ nhưỡng.',
  },
  {
    label: 'Giá thành & Chi phí',
    icon: '🏷️',
    standardTitle: 'Gánh thêm 25% – 35% chi phí',
    standard: 'Người mua phải trả thêm chi phí cho khâu tuyển chọn thẩm mỹ khắt khe, bao bì nilon lấp lánh và chiết khấu mặt bằng siêu thị đắt đỏ.',
    xaumaTitle: 'Tiết kiệm 20% – 30% trực tiếp',
    xauma: 'Tối ưu phân loại và cắt bỏ toàn bộ khâu trung gian hào nhoáng. Mang đến mức giá dễ thở cho bữa cơm gia đình mà nông dân vẫn có lợi nhuận cao hơn.',
  },
  {
    label: 'Tác động môi trường & Xã hội',
    icon: '🌍',
    standardTitle: 'Lãng phí & ép giá nông hộ',
    standard: 'Gia tăng hàng triệu tấn rác hữu cơ chôn lấp gây phát thải khí nhà kính (CO2, Methane). Nông dân chịu cảnh "được mùa mất giá" do bị ép loại.',
    xaumaTitle: 'Cứu trợ nông sản & sống xanh',
    xauma: 'Giải cứu nông sản ngay tại đồng ruộng, giảm thiểu khí thải CO2, đồng thời tạo nguồn thu nhập ổn định và bền vững cho hơn 320 hộ nông dân Việt.',
  },
]

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#F4F8F1] text-[#14281A] transition-colors">
      <div className="max-w-6xl mx-auto">
        <GlassReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label-dark font-bold">// Sự thật minh bạch</span>
            <span className="text-gray-400 text-xs">·</span>
            <span className="text-xs text-[#2E6B18] font-bold">Real vs. Standard Truth</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-[#14281A] max-w-3xl mb-4 leading-tight">
          <BlurText text="Chuẩn Siêu Thị Hào Nhoáng vs. Hộp Nông Sản Xấu Mã" delay={0.1} />
        </h2>

        <GlassReveal delay={0.2} className="max-w-2xl mb-14">
          <p className="text-[#4E6152] font-body text-base leading-relaxed">
            Đặt lên bàn cân giữa vỏ bọc chuẩn mực công nghiệp và giá trị dinh dưỡng thuần khiết từ nông trại Việt.
            Lựa chọn của bạn sẽ thay đổi cách chúng ta trân trọng thực phẩm.
          </p>
        </GlassReveal>

        {/* 2-Column Comparison Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Standard Column (Muted light gray-green) */}
          <GlassReveal delay={0.25}>
            <div className="card-organic-light rounded-[2.2rem] p-7 sm:p-9 h-full border border-[#D5DED0] bg-[#ECEFEA] opacity-90">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-6 mb-7 border-b border-gray-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                    🏪
                  </div>
                  <div className="text-left">
                    <h3 className="font-body font-bold text-[#1F3325] text-base sm:text-lg">
                      Nông Sản Chuẩn Siêu Thị
                    </h3>
                    <p className="text-[#6D8072] text-xs font-body">Tiêu chuẩn hình thức công nghiệp</p>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-600 border border-gray-300">
                  Hào nhoáng
                </span>
              </div>

              {/* Rows List */}
              <div className="space-y-6 text-left">
                {rows.map((row) => (
                  <div key={row.label} className="pb-5 border-b border-gray-200/80 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <IconX />
                      </div>
                      <span className="font-body text-xs font-bold text-[#3B4D40] uppercase tracking-wide">
                        {row.label}
                      </span>
                    </div>
                    <div className="pl-7">
                      <p className="text-sm font-body font-semibold text-[#1F3325] mb-1">{row.standardTitle}</p>
                      <p className="text-xs sm:text-sm font-body text-[#5A6D5F] leading-relaxed">
                        {row.standard}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassReveal>

          {/* Xau Ma Column (Highlighted with Sprout Green & Premium Card) */}
          <GlassReveal delay={0.35}>
            <div className="card-organic-highlight rounded-[2.2rem] p-7 sm:p-9 h-full shadow-xl relative overflow-hidden bg-white border-2 border-[#84CC16]">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-6 mb-7 border-b border-[#D8E6C8]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] flex items-center justify-center text-2xl shrink-0 text-[#3B7A1C] shadow-inner">
                    🌿
                  </div>
                  <div className="text-left">
                    <h3 className="font-body font-bold text-[#14281A] text-base sm:text-lg">
                      Hộp Nông Sản Xấu Mã
                    </h3>
                    <p className="text-[#3B7A1C] text-xs font-body font-bold">Chất lượng dinh dưỡng thật 100%</p>
                  </div>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#84CC16] text-[#0E1F14] shadow-md font-body">
                  ★ Khuyên Dùng
                </span>
              </div>

              {/* Rows List */}
              <div className="space-y-6 text-left relative z-10">
                {rows.map((row) => (
                  <div key={row.label} className="pb-5 border-b border-[#E3EDD6] last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#E5F3D2] flex items-center justify-center shrink-0">
                        <IconCheck />
                      </div>
                      <span className="font-body text-xs font-bold text-[#2E6B18] uppercase tracking-wide">
                        {row.label}
                      </span>
                    </div>
                    <div className="pl-7">
                      <p className="text-sm font-body font-bold text-[#14281A] mb-1">{row.xaumaTitle}</p>
                      <p className="text-xs sm:text-sm font-body text-[#3C5042] leading-relaxed">
                        {row.xauma}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick CTA */}
              <div className="mt-8 pt-6 border-t border-[#D8E6C8] flex items-center justify-between">
                <span className="text-xs text-[#4A5D4F] font-body">Bữa ăn xanh &amp; tiết kiệm cho bạn</span>
                <a
                  href="#order"
                  className="px-5 py-2.5 bg-[#84CC16] hover:bg-[#70B010] text-[#0E1F14] text-xs font-bold rounded-full transition-all shadow-md font-body"
                >
                  Chọn Hộp Ngay →
                </a>
              </div>
            </div>
          </GlassReveal>
        </div>
      </div>
    </section>
  )
}
