import { useState } from 'react'
import { Sparkles, HeartHandshake, Compass, Leaf, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function BrandStory() {
  const [activeTab, setActiveTab] = useState<number>(1)

  const chapters = [
    {
      id: 1,
      badge: 'Chương 01 · Vấn đề',
      title: 'MỘT VẺ NGOÀI CHƯA HOÀN HẢO. MỘT GIÁ TRỊ ĐANG BỊ BỎ QUÊN.',
      shortTitle: '01. Tiêu chuẩn ngoại hình',
      icon: <Compass className="w-4 h-4" />,
    },
    {
      id: 2,
      badge: 'Chương 02 · Con người',
      title: 'ĐẰNG SAU MỖI CỦ QUẢ LÀ CÔNG SỨC CỦA NGƯỜI NÔNG DÂN.',
      shortTitle: '02. Mồ hôi nhà nông',
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      id: 3,
      badge: 'Chương 03 · Giải pháp',
      title: 'CHÚNG TÔI CHỌN NHÌN VÀO GIÁ TRỊ, KHÔNG CHỈ VẺ NGOÀI.',
      shortTitle: '03. Giải pháp Xấu Mã',
      icon: <Leaf className="w-4 h-4" />,
    },
    {
      id: 4,
      badge: 'Chương 04 · Niềm tin',
      title: 'ĐÔI KHI, ĐIỀU ĐÁNG TRÂN TRỌNG NHẤT LẠI KHÔNG NẰM Ở VẺ NGOÀI.',
      shortTitle: '04. Niềm tin thương hiệu',
      icon: <Sparkles className="w-4 h-4" />,
    },
  ]

  return (
    <section id="brand-story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8D5B5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Story Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5E9] border border-[#E8D5B5] shadow-xs">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#195D3B]">
              Câu chuyện thương hiệu
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            HÀNH TRÌNH TÌM LẠI GIÁ TRỊ NGUYÊN BẢN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Từ những luống đất đỏ đến mâm cơm gia đình, câu chuyện của Xấu Mã bắt đầu từ một câu hỏi giản dị:
            "Liệu một củ cà rốt cong có ít giá trị hơn một củ cà rốt thẳng?"
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 sm:gap-3 no-scrollbar">
          {chapters.map((chap) => (
            <button
              key={chap.id}
              onClick={() => setActiveTab(chap.id)}
              onMouseEnter={() => setActiveTab(chap.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 border cursor-pointer ${
                activeTab === chap.id
                  ? 'bg-[#195D3B] text-white border-[#195D3B] shadow-md shadow-[#195D3B]/20 scale-102'
                  : 'bg-[#F8F5E9] text-gray-700 border-[#E8D5B5] hover:border-[#91B34D] hover:bg-white'
              }`}
            >
              <span className={activeTab === chap.id ? 'text-[#91B34D]' : 'text-[#438347]'}>
                {chap.icon}
              </span>
              <span>{chap.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* ── CHAPTER 01: THE PROBLEM ── */}
        {activeTab === 1 && (
          <div className="grid lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300 text-left">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#DE8753]/15 text-[#DE8753] border border-[#DE8753]/30 inline-block">
                Chương 01 · The Problem
              </span>

              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#195D3B] leading-tight">
                MỘT VẺ NGOÀI CHƯA HOÀN HẢO. <br />
                MỘT GIÁ TRỊ ĐANG BỊ BỎ QUÊN.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Trong thế giới của những tiêu chuẩn ngoại hình thương mại khắt khe, rau củ dường như cũng phải gánh trên vai những khuôn mẫu vô hình.
                </p>
                <p className="p-4 rounded-2xl bg-[#F8F5E9] border-l-4 border-[#195D3B] text-[#1A3828] font-normal italic">
                  "Cà rốt phải thẳng tắp. Cà chua phải tròn xoe. Khoai tây phải đều chằn chặn. Những sản phẩm có hình dáng khác biệt đôi khi khó tìm được chỗ đứng trên kệ hàng siêu thị, dù bên trong chúng vẫn giòn ngọt và giàu dưỡng chất."
                </p>
                <p className="font-medium text-[#195D3B]">
                  Nhưng liệu một củ cà rốt uốn cong có ít giá trị dinh dưỡng hơn một củ cà rốt mọc thẳng?
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab(2)}
                  className="px-6 py-3 rounded-xl bg-[#F8F5E9] hover:bg-[#E8D5B5]/50 text-[#195D3B] font-bold text-xs sm:text-sm border border-[#E8D5B5] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Đọc tiếp: Công sức người nông dân</span>
                  <ArrowRight className="w-4 h-4 text-[#438347]" />
                </button>
              </div>
            </div>

            {/* Visual Contrast Illustration: Ảnh thật nông sản siêu thị vs rau củ xấu mã */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Standard Supermarket Produce Box */}
                <div className="rounded-3xl overflow-hidden border border-gray-200 bg-[#F8F5E9]/50 shadow-sm flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-white">
                    <img
                      src={ASSETS.standardSupermarketBox}
                      alt="Hộp nông sản đẹp chuẩn siêu thị"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-md">
                      Quy chuẩn công nghiệp
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 text-left">
                    <span className="text-xs font-bold text-gray-700 block uppercase">
                      Chuẩn ngoại hình siêu thị
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Kích thước đều tăm tắp nhưng phải gánh thêm chi phí phân loại gắt gao và dễ bỏ quên 30% nông sản lệch chuẩn.
                    </p>
                  </div>
                </div>

                {/* Organic Quirky Veg */}
                <div className="rounded-3xl overflow-hidden border-2 border-[#195D3B] bg-white shadow-md flex flex-col relative">
                  <div className="relative h-48 overflow-hidden bg-[#F8F5E9]">
                    <img
                      src={ASSETS.quirkyVeg1}
                      alt="Rau củ xấu mã dáng lạ"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#195D3B] text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-md shadow">
                      Vẻ đẹp tự nhiên
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 text-left">
                    <span className="text-xs font-bold text-[#195D3B] block uppercase">
                      Nông sản Xấu Mã
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      Dáng hình độc bản từ thiên nhiên, ruột đặc giòn ngọt, dinh dưỡng nguyên vẹn và giá tiết kiệm 20-30%.
                    </p>
                    <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-[#438347]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Không phân biệt vẻ bề ngoài</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra visual note */}
              <div className="p-3.5 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] flex items-center gap-3">
                <img
                  src={ASSETS.quirkyVeg2}
                  alt="Củ quả độc lạ Xấu Mã"
                  className="w-14 h-14 rounded-xl object-cover border border-[#E8D5B5] shrink-0"
                />
                <p className="text-xs text-gray-600 leading-snug">
                  <strong className="text-[#195D3B]">Mỗi củ quả là một cá tính độc nhất:</strong> Thiên nhiên không có khuôn đúc sẵn, và độ cong của củ cà rốt không làm giảm vị ngọt tự nhiên bên trong.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── CHAPTER 02: THE HUMAN STORY ── */}
        {activeTab === 2 && (
          <div className="grid lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300 text-left">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#195D3B]/10 text-[#195D3B] border border-[#195D3B]/20 inline-block">
                Chương 02 · The Human Story
              </span>

              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#195D3B] leading-tight">
                ĐẰNG SAU MỖI CỦ QUẢ LÀ CÔNG SỨC CỦA NGƯỜI NÔNG DÂN.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Đằng sau mỗi mùa vụ thu hoạch là những tháng ngày kiên trì chăm sóc, thức khuya dậy sớm vun xới và hồi hộp chờ đợi thời tiết thuận hòa của người nông dân.
                </p>
                <p>
                  Từng củ khoai tây, quả cà chua hay ngọn xà lách... đều thấm đượm mồ hôi và thành quả lao động chân chính của những người gắn bó cả đời với đất.
                </p>
                <p className="p-4 rounded-2xl bg-[#F8F5E9] border-l-4 border-[#91B34D] text-[#1A3828] font-normal">
                  "Một khiếm khuyết ngẫu nhiên về hình dáng không nên là lý do duy nhất khiến những thành quả ấy bị chối từ và mất đi cơ hội đến với bàn ăn của người tiêu dùng."
                </p>
                <p>
                  Xấu Mã mong muốn góp phần tạo thêm đầu ra ổn định cho những nông sản này, kết nối công sức thực thụ của người trồng với nhu cầu thực phẩm sạch, tiết kiệm của các gia đình.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveTab(3)}
                  className="px-6 py-3 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-xs sm:text-sm shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Khám phá giải pháp Xấu Mã</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Farm Harvest Visual: Ảnh nông dân thu hoạch trên đồng đất đỏ & banner nụ cười */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={ASSETS.farmerHarvest}
                    alt="Người nông dân thu hoạch cà rốt trên đồng đất đỏ"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#195D3B]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                    <Heart className="w-3.5 h-3.5 text-[#DE8753]" />
                    <span>Mồ hôi trên luống đất bazan</span>
                  </div>
                </div>
                <div className="p-5 bg-white text-left space-y-2 border-t border-[#E8D5B5]">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic">
                    "Trồng rau sạch thuận tự nhiên thì củ cong củ thẳng là chuyện của trời đất. Chỉ mong rau ngon được mọi người đón nhận chứ đừng vứt bỏ uổng phí công sức."
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-gray-500 font-semibold">
                      — Lời tâm tình của người làm vườn tại Đơn Dương, Lâm Đồng
                    </span>
                    <span className="text-[11px] text-[#438347] font-bold">
                      Nông trại đối tác Xấu Mã
                    </span>
                  </div>
                </div>
              </div>

              {/* Small banner: Nâng niu nông sản Việt */}
              <div className="rounded-2xl overflow-hidden border border-[#E8D5B5] bg-[#F8F5E9] shadow-xs">
                <img
                  src={ASSETS.farmerSmileBanner}
                  alt="Nâng niu Nông sản Việt - Người nông dân và hộp Xấu Mã"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── CHAPTER 03: THE XẤU MÃ SOLUTION ── */}
        {activeTab === 3 && (
          <div className="grid lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300 text-left">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#91B34D]/20 text-[#195D3B] border border-[#91B34D]/40 inline-block">
                Chương 03 · The Xấu Mã Solution
              </span>

              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#195D3B] leading-tight">
                CHÚNG TÔI CHỌN NHÌN VÀO GIÁ TRỊ, KHÔNG CHỈ VẺ NGOÀI.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Xấu Mã ra đời để mang đến một góc nhìn mới mẻ và công bằng hơn về nông sản Việt Nam.
                </p>
                <p>
                  Thay vì chỉ mải miết chạy theo những sản phẩm có kích thước bóng bẩy đồng đều, chúng tôi mở rộng vòng tay đón nhận những củ quả có hình dáng độc bản nhưng vẫn vượt qua tiêu chí tuyển chọn kỹ lưỡng về độ tươi sạch và dinh dưỡng.
                </p>
                <p>
                  Chúng tôi kết nối nông sản trực tiếp với người tiêu dùng qua những chiếc hộp tiện lợi (từ 49.000đ), mức giá hợp lý và công cụ AI Đi Chợ giúp cá nhân hóa khẩu vị từng gia đình.
                </p>
                <div className="p-4 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] text-[#195D3B] font-medium text-sm">
                  "Mỗi chiếc hộp Xấu Mã không chỉ là một lựa chọn thực phẩm tiết kiệm. Đó còn là cách chúng ta trao thêm cơ hội cho những giá trị vốn dễ bị bỏ quên."
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="px-6 py-3 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-xs sm:text-sm shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Xem 3 dòng hộp nông sản</span>
                  <ArrowRight className="w-4 h-4 text-[#91B34D]" />
                </a>
                <button
                  onClick={() => setActiveTab(4)}
                  className="px-5 py-3 rounded-xl bg-[#F8F5E9] hover:bg-[#E8D5B5]/40 text-[#195D3B] font-semibold text-xs sm:text-sm border border-[#E8D5B5] transition-colors cursor-pointer"
                >
                  Đọc tiếp: Niềm tin thương hiệu →
                </button>
              </div>
            </div>

            {/* Solution Visual: Hộp tươi rói mở nắp + Trải nghiệm mở hộp có thẻ QR */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={ASSETS.boxOpen2}
                    alt="Hộp nông sản Xấu Mã mở nắp tươi ngon"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#195D3B]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    📦 Hộp giấy Kraft & Túi bảo vệ
                  </div>
                </div>
                <div className="p-4 bg-white text-left border-t border-[#E8D5B5] space-y-1">
                  <div className="font-heading font-bold text-sm sm:text-base text-[#195D3B] flex items-center justify-between">
                    <span>Tuyển chọn tươi sạch trong 24h</span>
                    <span className="text-xs font-semibold text-[#DE8753] bg-[#DE8753]/15 px-2.5 py-0.5 rounded-full">
                      Chỉ từ 49.000đ
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Rau củ được làm sạch đất, phân loại kỹ lưỡng, giữ trọn độ giòn ngọt nguyên bản trước khi đóng gói gửi đến bạn.
                  </p>
                </div>
              </div>

              {/* QR Tag transparency callout with unboxing image */}
              <div className="p-3.5 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] flex items-center gap-3">
                <img
                  src={ASSETS.tuiGiayKraft}
                  alt="Túi giấy Kraft bảo vệ môi trường"
                  className="w-16 h-16 rounded-xl object-cover border border-[#E8D5B5] shrink-0"
                />
                <div className="text-left space-y-0.5">
                  <div className="text-xs font-bold text-[#195D3B] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#438347]" />
                    <span>Bao bì thân thiện & Minh bạch nguồn gốc 100%</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-snug">
                    Sử dụng túi giấy Kraft mộc mạc và thẻ QR tra cứu nhật ký thu hoạch tại nông trại đối tác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── CHAPTER 04: THE BRAND BELIEF ── */}
        {activeTab === 4 && (
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-300">
            <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#195D3B]/10 text-[#195D3B] border border-[#195D3B]/20 inline-block">
              Chương 04 · The Brand Belief
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight leading-tight">
              ĐÔI KHI, ĐIỀU ĐÁNG TRÂN TRỌNG NHẤT <br className="hidden sm:inline" />
              LẠI KHÔNG NẰM Ở VẺ NGOÀI.
            </h3>

            {/* Studio setup picture showcasing the brand promise & commitments */}
            <div className="max-w-xl mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F5E9] bg-white group">
              <img
                src={ASSETS.brandPoster}
                alt="Cam kết thương hiệu Xấu Mã"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-4 bg-white border-t border-[#E8D5B5] text-left flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#195D3B] block">
                    Bao bì thân thiện · Cam kết minh bạch
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Bảo chứng chất lượng bởi Nâng Niu Nông Sản Việt
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#DE8753] block">100% Tươi Sạch</span>
                  <span className="text-[10px] text-gray-400">Đổi trả 24h</span>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              <p>
                Chúng tôi tin rằng giá trị thực chất của một bữa ăn không được đo đếm bằng độ thẳng thớm của củ cà rốt hay sự hoàn hảo không tì vết của quả cà chua.
              </p>
              <p>
                Một lựa chọn tiêu dùng có trách nhiệm có thể bắt đầu từ những hành động rất nhỏ: chọn một hộp rau củ được tuyển chọn tươi ngon, trân trọng thành quả lao động của người nông dân và chung tay hạn chế lãng phí thực phẩm cho xã hội.
              </p>
              <p className="font-medium text-[#195D3B] text-base sm:text-lg">
                Cùng Xấu Mã, hãy để những điều không hoàn hảo có cơ hội tạo nên những giá trị tốt đẹp!
              </p>
            </div>

            {/* Closing Motto Callout */}
            <div className="py-6 px-8 rounded-3xl bg-[#F8F5E9] border-2 border-[#195D3B] max-w-xl mx-auto shadow-sm space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] block">
                Thông điệp gửi gắm
              </span>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#195D3B]">
                CHỌN XẤU MÃ – CHỌN GIÁ TRỊ KHÔNG XẤU!
              </div>
            </div>

            {/* Big Action CTA leading directly to Product Showcase below */}
            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-base shadow-lg shadow-[#195D3B]/20 hover:scale-102 active:scale-98 transition-all"
              >
                <span>KHÁM PHÁ CÁC HỘP NÔNG SẢN (TỪ 49K)</span>
                <ArrowRight className="w-4 h-4 text-[#91B34D]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
