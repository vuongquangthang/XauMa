import { Star, Quote } from 'lucide-react'

export default function CustomerStories() {
  const reviews = [
    {
      name: 'Minh Anh',
      role: 'Sinh viên năm 3 · ĐH Kinh tế TP.HCM',
      avatar: '🎓',
      boxType: 'Hộp Sinh Viên (49k)',
      title: 'Mở hộp củ cà rốt có hai chân cười xỉu!',
      comment:
        'Cuối tháng ví mỏng mà vẫn muốn nấu cơm đủ chất ở trọ. Mua thử Hộp Sinh Viên 49k ăn được gần cả tuần! Cà rốt tuy có hai nhánh chân nhưng xào thịt bò ngọt lịm. Quá hời cho sinh viên!',
    },
    {
      name: 'Chị Thu Hà',
      role: 'Nhân viên văn phòng · Mẹ bé 4 tuổi',
      avatar: '👩‍💼',
      boxType: 'Hộp Gia Đình (99k)',
      title: 'Bé con từ ghét rau thành thích unboxing',
      comment:
        'Trước đây ép con ăn rau khó lắm. Từ lúc đặt hộp Xấu Mã, tuần nào hai mẹ con cũng cùng khui hộp đoán xem củ quả có hình thù gì đặc biệt. Cả nhà vừa vui vừa ăn uống xanh mát hơn.',
    },
    {
      name: 'Hoàng Nam',
      role: 'Freelance Designer · Sống một mình',
      avatar: '🎨',
      boxType: 'Hộp Gia Đình (99k)',
      title: 'Đóng gói mộc mạc, quét QR rất rõ ràng',
      comment:
        'Hộp giấy kraft đóng gói chỉn chu, không dùng nilon bọc từng quả. Quét mã QR biết rõ thu hoạch ở Đơn Dương lúc sáng sớm. Ủng hộ nông sản Việt theo cách rất văn minh và hiện đại!',
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F5E9] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
            Góc trải nghiệm
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            KHÔNG CẦN HOÀN HẢO ĐỂ CÓ MỘT BỮA CƠM NGON
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Lắng nghe những cảm nhận chân thành từ những người bạn đã cùng Xấu Mã mở lòng với những củ quả "lạ hình".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#E8D5B5] shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#DE8753]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E8D5B5]" />
                </div>

                <span className="text-[10px] uppercase font-bold text-[#438347] bg-[#91B34D]/15 px-2.5 py-0.5 rounded-md inline-block mb-2">
                  Đã trải nghiệm: {rev.boxType}
                </span>

                <h3 className="font-heading font-bold text-base text-[#195D3B] mb-2">
                  "{rev.title}"
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-[#E8D5B5]/60">
                <div className="w-10 h-10 rounded-full bg-[#F8F5E9] flex items-center justify-center text-xl border border-[#E8D5B5]">
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-bold text-xs text-[#195D3B]">{rev.name}</div>
                  <div className="text-[11px] text-gray-500">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-500 mt-8 italic">
          * Đánh giá được thu thập từ khảo sát trải nghiệm của khách hàng đặt mua dùng thử trong đợt đầu của dự án.
        </p>
      </div>
    </section>
  )
}
