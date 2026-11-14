import { memo } from 'react'
import BlurText from '../components/BlurText'
import GlassReveal from '../components/GlassReveal'
import { IconStar } from '../components/Icons'

const reviews = [
  {
    name: 'Minh Anh',
    meta: '22 tuổi · Sinh viên ĐH Kinh Tế TP.HCM',
    avatar: '🎓',
    location: 'Quận 10, TP.HCM',
    highlight: 'Cà rốt hai chân như đang chạy bộ',
    text: 'Mở hộp ra gặp ngay củ cà rốt có 2 chân như đang chạy bộ, cả phòng trọ cười muốn xỉu! Mang đi nấu canh xương ngọt lịm bất ngờ. Giá lại rẻ hơn siêu thị gần 30% nên cuối tháng sinh viên tụi mình vẫn ăn rau sạch thoải mái mà không lo rỗng ví.',
  },
  {
    name: 'Chị Thu Hà',
    meta: '34 tuổi · Nhân viên văn phòng, mẹ 2 bé',
    avatar: '👩‍💼',
    location: 'Cầu Giấy, Hà Nội',
    highlight: 'Bé lười ăn rau giờ háo hức unboxing',
    text: 'Bé nhà mình trước đây ghét ăn rau củ lắm. Từ ngày đặt Hộp Xấu Mã, tuần nào hai con cũng tranh nhau khui hộp để xem hôm nay có "siêu nhân" cà chua hay "quái vật" dưa leo nào đặc biệt. Cả nhà vừa vui vẻ vừa ăn nhiều rau hơn hẳn!',
  },
  {
    name: 'Hoàng Nam',
    meta: '28 tuổi · Content Creator phong cách sống',
    avatar: '🎥',
    location: 'Đà Lạt & TP.HCM',
    highlight: 'Bao bì kraft tinh tế, QR minh bạch từng vườn',
    text: 'Đóng gói hộp giấy kraft cực kỳ chỉn chu, thân thiện môi trường. Quét mã QR một cái là thấy rõ tên chủ vườn và ngày thu hoạch tại Đơn Dương. Đây chính là cách thiết thực nhất để người trẻ chúng ta nâng niu nông sản Việt!',
  },
]

const ReviewCard = memo(function ReviewCard({
  name,
  meta,
  avatar,
  location,
  highlight,
  text,
  index,
}: typeof reviews[0] & { index: number }) {
  return (
    <GlassReveal delay={index * 0.15 + 0.2}>
      <div className="card-organic-light rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between h-full border border-[#DCE4D6] shadow-lg hover:shadow-2xl hover:border-[#84CC16] transition-all duration-300 bg-white text-left">
        <div>
          {/* Top Rating & Location */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 text-[#84CC16]">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </div>
            <span className="text-[11px] font-body text-gray-400 font-medium">{location}</span>
          </div>

          <div className="text-[#3B7A1C] text-xs font-body font-bold mb-2">
            "{highlight}"
          </div>

          {/* Testimonial Quote */}
          <p className="text-[#3E5143] font-body text-sm sm:text-base leading-relaxed">
            "{text}"
          </p>
        </div>

        {/* Reviewer Profile */}
        <div className="flex items-center gap-3.5 pt-5 mt-6 border-t border-gray-100">
          <div className="w-12 h-12 rounded-2xl bg-[#EBF3E3] flex items-center justify-center text-2xl shrink-0 shadow-inner">
            {avatar}
          </div>
          <div>
            <div className="font-body font-bold text-[#14281A] text-sm">{name}</div>
            <div className="text-[#6D8072] text-xs font-body">{meta}</div>
          </div>
        </div>
      </div>
    </GlassReveal>
  )
})

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FAF7F0] text-[#14281A] transition-colors">
      <div className="max-w-6xl mx-auto">
        <GlassReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label-dark font-bold">// Trải nghiệm thực tế</span>
            <span className="text-gray-400 text-xs">·</span>
            <span className="text-xs text-[#2E6B18] font-bold">Khách hàng nói gì về Xấu Mã?</span>
          </div>
        </GlassReveal>

        <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-[#14281A] max-w-3xl mb-4 leading-tight">
          <BlurText text="Yêu Từ Cái Nhìn Đầu Tiên… Vì Độ Độc Lạ!" delay={0.1} />
        </h2>

        <GlassReveal delay={0.2} className="max-w-2xl mb-14">
          <p className="text-[#516455] font-body text-base leading-relaxed">
            Những chia sẻ chân thật và dí dởm từ những người tiêu dùng thông thái đã mở lòng cùng
            Hộp Nông Sản Xấu Mã lan tỏa thông điệp sống xanh tích cực.
          </p>
        </GlassReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} {...r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
