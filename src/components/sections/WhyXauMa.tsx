import { Sparkles, CheckCircle2, TrendingDown, HeartHandshake } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function WhyXauMa() {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#195D3B]" />,
      title: 'Nông sản có hình dáng không đồng đều',
      desc: 'Mỗi củ quả phát triển tự nhiên theo nhịp điệu đất trời, không qua khuôn ép công nghiệp. Dáng vẻ độc lạ là dấu ấn tự nhiên của cây trái.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#195D3B]" />,
      title: 'Được tuyển chọn theo tiêu chí chất lượng',
      desc: 'Hình dáng có thể khác biệt, nhưng ruột luôn tươi giòn, đặc ruột, không dập úng, được kiểm tra kỹ lưỡng trước khi đóng gói đến tay bạn.',
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#195D3B]" />,
      title: 'Giá cả dễ tiếp cận cho mọi người',
      desc: 'Tối ưu phân loại và cắt bỏ chi phí bao bì cầu kỳ, mang lại mức giá từ 49.000đ rất dễ thở cho sinh viên, người đi làm và gia đình trẻ.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#195D3B]" />,
      title: 'Góp phần hạn chế lãng phí thực phẩm',
      desc: 'Tiếp thêm đầu ra công bằng cho người làm nông và cứu những củ quả lành lặn khỏi nguy cơ bị bỏ phí chỉ vì không đạt chuẩn mẫu mã siêu thị.',
    },
  ]

  return (
    <section id="why-xau-ma" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8D5B5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Values Grid (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
              Giá trị cốt lõi
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight leading-tight">
              MỘT CHÚT KHÁC BIỆT Ở VẺ NGOÀI. <br />
              <span className="text-[#DE8753]">TRỌN GIÁ TRỊ BÊN TRONG.</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Xấu Mã tin rằng vẻ đẹp thực sự của nông sản nằm ở hương vị nguyên bản và dinh dưỡng nuôi dưỡng cơ thể,
              không phải ở sự hoàn hảo vô hồn của vẻ bề ngoài.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-3">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] space-y-2 hover:border-[#91B34D] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-xs mb-3">
                    {val.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#195D3B]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Kraft Box with Real Produce (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5E9] group">
              <img
                src={ASSETS.boxOpen1}
                alt="Rau củ Xấu Mã tươi rói"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#91B34D] block mb-1">
                  Hình ảnh thực tế
                </span>
                <p className="font-heading font-bold text-base sm:text-lg leading-snug drop-shadow">
                  Cà rốt hai chân, cà chua rám nắng, dưa leo xù xì... vẫn ngọt lành trên mâm cơm mỗi ngày.
                </p>
              </div>
            </div>

            {/* Floating quote badge */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl border border-[#E8D5B5] shadow-lg max-w-xs text-left hidden sm:block">
              <p className="text-xs font-bold text-[#195D3B] italic">
                "Nông sản xấu mã – Giá trị không xấu!"
              </p>
              <span className="text-[10px] text-gray-500 block mt-1">Thông điệp từ Xấu Mã 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
