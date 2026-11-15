import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Sparkles,
} from 'lucide-react'
import { ASSETS } from '../../constants/assets'
import BlurText from '../BlurText'

export default function BrandStory() {
  return (
    <section
      id="brand-story"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8D5B5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Story Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
              Câu chuyện thương hiệu
            </span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            <BlurText text="HÀNH TRÌNH TÌM LẠI GIÁ TRỊ NGUYÊN BẢN" delay={0.08} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Từ những luống đất đỏ đến mâm cơm gia đình, câu chuyện của Xấu Mã bắt đầu từ một câu hỏi giản dị:{' '}
            <span className="italic font-normal text-[#195D3B]">
              &ldquo;Liệu một củ cà rốt cong có ít giá trị hơn một củ cà rốt thẳng?&rdquo;
            </span>
          </motion.p>
        </div>

        {/* ── 2 NHỊP ĐỐI THOẠI CỐT LÕI (GIẢM 50% CHIỀU DÀI, GIỮ TRỌN CẢM XÚC) ── */}
        <div className="space-y-16 sm:space-y-24">
          {/* ════════════ NHỊP 1: TỪ ĐỒNG RUỘNG ĐẾN NỖI NIỀM NHÀ NÔNG (Text Trái - Ảnh Phải) ════════════ */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Cột chữ bên Trái */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-5 text-left"
            >
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#195D3B] leading-tight">
                VẺ NGOÀI KHÔNG HOÀN HẢO, <br />
                NHƯNG CÔNG SỨC VẸN NGUYÊN
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Trong chuỗi cung ứng hiện đại, những quy chuẩn khắt khe về kích thước và ngoại hình vô tình loại bỏ hơn 30% nông sản lành lặn. Cà rốt uốn cong, khoai tây méo mó hay quả cà chua nhỏ hơn chuẩn thường bị từ chối dù bên trong vẫn giòn ngọt, giàu dinh dưỡng.
                </p>
                <div className="p-4 rounded-2xl bg-[#F8F5E9] border-l-4 border-[#195D3B] text-[#1A3828] text-xs sm:text-sm italic">
                  &ldquo;Trồng rau sạch thuận tự nhiên thì củ cong củ thẳng là chuyện của đất trời. Chỉ mong mồ hôi của bà con được đón nhận, đừng vì ngoại hình mà lãng phí công sức.&rdquo;
                </div>
                <p>
                  <strong className="text-[#195D3B]">Xấu Mã</strong> ra đời với sứ mệnh giản dị: mang lại cơ hội công bằng cho nông sản tự nhiên, bao tiêu thành quả lao động chân chính của nhà nông và giảm áp lực đổ bỏ thực phẩm.
                </p>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-600">
                <span className="flex items-center gap-1.5 text-[#195D3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#438347]" />
                  <span>Dinh dưỡng nguyên vẹn</span>
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5 text-[#195D3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#438347]" />
                  <span>Bao tiêu công bằng</span>
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5 text-[#195D3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#438347]" />
                  <span>Tiết kiệm 20% – 30%</span>
                </span>
              </div>
            </motion.div>

            {/* Cột ảnh bên Phải */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-6 space-y-3"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white group">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={ASSETS.farmerHarvest}
                    alt="Người nông dân thu hoạch cà rốt trên đồng đất đỏ"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#195D3B]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    Đơn Dương, Lâm Đồng
                  </div>
                </div>
                <div className="p-4 bg-white text-left flex items-center justify-between border-t border-[#E8D5B5]">
                  <div>
                    <span className="text-xs font-bold text-[#195D3B] block">
                      Nông trại đối tác Xấu Mã
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Canh tác an toàn • Thu hoạch trong 24h
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-[#DE8753] bg-[#DE8753]/15 px-3 py-1 rounded-full">
                    Bao tiêu trực tiếp
                  </span>
                </div>
              </div>

              {/* Callout nhỏ đối sánh dáng củ quả tự nhiên */}
              <div className="p-3 rounded-2xl bg-[#F8F5E9] shadow-md flex items-center gap-3 text-left">
                <img
                  src={ASSETS.quirkyVeg2}
                  alt="Củ quả độc lạ Xấu Mã"
                  className="w-12 h-12 rounded-xl object-cover border border-[#E8D5B5] shrink-0"
                />
                <p className="text-xs text-gray-600 leading-snug">
                  <strong className="text-[#195D3B]">Mỗi củ quả là một cá tính độc nhất:</strong> Thiên nhiên không có khuôn đúc sẵn, và độ cong của củ cà rốt không làm giảm vị ngọt tự nhiên bên trong.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ════════════ NHỊP 2: GIẢI PHÁP & NIỀM TIN CHO BÀN ĂN VIỆT (Ảnh Trái - Text Phải) ════════════ */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Cột ảnh bên Trái (order-2 lg:order-1) */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-6 space-y-3 order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white group">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={ASSETS.boxOpen2}
                    alt="Hộp nông sản Xấu Mã mở nắp tươi ngon"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#195D3B]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    Hộp tươi sạch chỉ từ 49.000đ
                  </div>
                </div>
                <div className="p-4 bg-white text-left flex items-center justify-between border-t border-[#E8D5B5]">
                  <div>
                    <span className="text-xs font-bold text-[#195D3B] block">
                      Bao bì giấy Kraft 100% tái sinh
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Thân thiện môi trường • Tươi ngon 24h
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-[#438347] bg-[#91B34D]/20 px-3 py-1 rounded-full">
                    Đổi trả 24h
                  </span>
                </div>
              </div>

              {/* Thông điệp cốt lõi */}
              <div className="p-4 rounded-2xl bg-[#F8F5E9] shadow-md text-center">
                <div className="font-heading font-extrabold text-base sm:text-lg text-[#195D3B] tracking-wide">
                  CHỌN XẤU MÃ – CHỌN GIÁ TRỊ KHÔNG XẤU!
                </div>
              </div>
            </motion.div>

            {/* Cột chữ bên Phải (order-1 lg:order-2) */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2"
            >
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#195D3B] leading-tight">
                NHÌN VÀO GIÁ TRỊ THẬT, <br />
                KHÔNG CHỈ LÀ VẺ BỀ NGOÀI
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Thay vì mải miết chạy theo những tiêu chuẩn bóng bẩy, Xấu Mã kết nối nông sản trực tiếp từ nông trại đến gian bếp qua những chiếc hộp tiện lợi (từ 49.000đ). Rau củ được làm sạch, sơ chế và bảo quản kỹ lưỡng trong bao bì Kraft thân thiện môi trường.
                </p>
                <div className="p-4 rounded-2xl bg-[#F8F5E9] border-l-4 border-[#91B34D] text-[#1A3828] text-xs sm:text-sm italic">
                  &ldquo;Mỗi chiếc hộp Xấu Mã không chỉ là lựa chọn thực phẩm tiết kiệm 20% – 30% cho sinh viên và gia đình. Đó còn là cách chúng ta cùng nhau trân quý đất mẹ và công sức người nông dân.&rdquo;
                </div>
                <p>
                  Hãy cùng chúng tôi thay đổi thói quen tiêu dùng: ăn ngon, sống xanh và trao cơ hội cho những giá trị đích thực.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
