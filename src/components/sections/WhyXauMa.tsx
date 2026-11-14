import { ShieldCheck, Clock, RefreshCw, BadgePercent } from 'lucide-react'
import { motion } from 'framer-motion'
import { ASSETS } from '../../constants/assets'
import BlurText from '../BlurText'

export default function WhyXauMa() {
  const commitments = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#195D3B]" />,
      title: 'Tuyển chọn 3 bước nghiêm ngặt',
      desc: (
        <>
          Chúng tôi chỉ chọn củ quả <span className="italic font-medium text-gray-800">&ldquo;dáng lạ&rdquo;</span>, tuyệt đối loại bỏ những củ dập nát, thối rữa hay sâu bệnh trước khi đóng gói đến tay bạn.
        </>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 text-[#195D3B]" />,
      title: 'Thu hoạch & Giao trong 24 giờ',
      desc: 'Rau củ được hái sớm từ các nông trại đối tác tại Đơn Dương, Lâm Đồng và chuyển thẳng về đô thị, giữ trọn độ giòn ngọt tươi mới.',
    },
    {
      icon: <BadgePercent className="w-5 h-5 text-[#195D3B]" />,
      title: 'Tiết kiệm thực chất 20% – 30%',
      desc: 'Cắt giảm tối đa chi phí mẫu mã và trung gian siêu thị, mang lại mức giá từ 49.000đ cực kỳ kinh tế cho sinh viên và gia đình.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#195D3B]" />,
      title: 'Bảo hành 1 đổi 1 trong 24h',
      desc: 'Nếu mở hộp phát hiện bất kỳ củ quả nào hư hỏng trong quá trình vận chuyển, bạn chỉ cần quét mã QR để được đổi bù ngay lập tức.',
    },
  ]

  return (
    <section id="why-xau-ma" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8D5B5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Values Grid (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
                Cam kết chất lượng
              </span>
            </motion.div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight leading-tight">
              <BlurText text="AN TÂM ĐẶT MUA VỚI" delay={0.05} /> <br />
              <span className="text-[#DE8753]">
                <BlurText text="4 CAM KẾT VÀNG TỪ XẤU MÃ" delay={0.25} />
              </span>
            </h2>

            <motion.p
              initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              Chúng tôi không chỉ trao đi những chiếc hộp nông sản giá trị, mà còn đồng hành cùng căn bếp của bạn bằng sự minh bạch và trách nhiệm cao nhất.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5 pt-3">
              {commitments.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ filter: 'blur(8px)', opacity: 0, y: 24 }}
                  whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.15 * idx, ease: 'easeOut' }}
                  className="p-5 rounded-2xl bg-[#F8F5E9] border border-[#E8D5B5] space-y-2.5 hover:border-[#91B34D] transition-colors text-left"
                >
                  {/* Hàng trên cùng: Kí tự icon và Tiêu đề đặt cùng một hàng */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8D5B5]/60 flex items-center justify-center shadow-xs shrink-0">
                      {val.icon}
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#195D3B] leading-snug">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Kraft Box with Real Produce (5 cols) */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, x: 40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5E9] group">
              <img
                src={ASSETS.boxOpen1}
                alt="Rau củ Xấu Mã tươi rói"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#91B34D] block mb-1">
                  Đồng kiểm khi nhận hàng
                </span>
                <p className="font-heading font-bold text-base sm:text-lg leading-snug drop-shadow">
                  Mở hộp hài lòng mới thanh toán · Đảm bảo quyền lợi khách hàng 100%.
                </p>
              </div>
            </div>

            {/* Floating quote badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl border border-[#E8D5B5] shadow-lg max-w-xs text-left hidden sm:block"
            >
              <p className="text-xs font-bold text-[#195D3B] italic">
                &ldquo;Xấu mã bên ngoài – Chuẩn chất bên trong!&rdquo;
              </p>
              <span className="text-[10px] text-gray-500 block mt-1">Chính sách đồng kiểm &amp; bảo hành</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
