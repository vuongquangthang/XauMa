import { motion } from 'framer-motion'
import { ASSETS } from '../../constants/assets'
import BlurText from '../BlurText'

export default function SocialImpact() {
  const impacts = [
    {
      image: ASSETS.quirkyVeg1,
      imageAlt: 'Nông sản hình dáng tự nhiên',
      title: 'Tối ưu hóa sản lượng nông trại',
      metricTarget: 'Mục tiêu chiến dịch',
      metricValue: 'Hạn chế lãng phí',
      desc: 'Giúp đưa những củ quả lành lặn bị từ chối chỉ vì lệch chuẩn ngoại hình đến thẳng căn bếp gia đình, giảm áp lực đổ bỏ cho nhà nông.',
    },
    {
      image: ASSETS.farmerSmileBanner,
      imageAlt: 'Nông dân gắn bó cùng Xấu Mã',
      title: 'Hỗ trợ sinh kế bền vững',
      metricTarget: 'Hợp tác trực tiếp',
      metricValue: 'Bao tiêu công bằng',
      desc: 'Bà con nông dân tại các nông trại đối tác có thêm nguồn thu nhập ổn định và tự tin gắn bó với phương thức canh tác an toàn tự nhiên.',
    },
    {
      image: ASSETS.tuiGiayKraft,
      imageAlt: 'Bao bì túi giấy thân thiện môi trường',
      title: 'Thúc đẩy tiêu dùng có trách nhiệm',
      metricTarget: 'Lối sống xanh',
      metricValue: 'Bao bì tái sinh',
      desc: 'Sử dụng 100% thùng giấy Kraft và túi giấy thân thiện môi trường, hình thành thói quen mua sắm thấu hiểu giá trị cốt lõi.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8D5B5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
              Tác động xã hội
            </span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            <BlurText text="MỖI CHIẾC HỘP NHỎ, MỘT GIÁ TRỊ LỚN HƠN" delay={0.08} />
          </h2>

          <motion.p
            initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Hành trình cùng Xấu Mã không chỉ dừng lại ở bữa cơm ngon của bạn, mà còn là sự sẻ chia
            với đất mẹ và những người một nắng hai sương làm ra hạt gạo, củ rau.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 text-left">
          {impacts.map((imp, idx) => (
            <motion.div
              key={idx}
              initial={{ filter: 'blur(8px)', opacity: 0, y: 24 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.15 * idx, ease: 'easeOut' }}
              className="rounded-3xl bg-[#F8F5E9] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-white border-b border-[#E8D5B5]">
                  <img
                    src={imp.image}
                    alt={imp.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Metric overlay bottom-left */}
                  <div className="absolute bottom-2.5 left-3.5 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#A3D95B] tracking-wider block">
                      {imp.metricTarget}
                    </span>
                    <div className="font-heading font-extrabold text-lg sm:text-xl text-white drop-shadow-sm leading-tight">
                      {imp.metricValue}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#195D3B] leading-snug">
                    {imp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {imp.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E8D5B5]/60 text-[11px] text-gray-500 font-medium">
                Chiến dịch hành động vì nông sản Việt 2026
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Banner 3 Set & Lan tỏa lối sống xanh */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-14 rounded-3xl overflow-hidden bg-[#F8F5E9] shadow-xl hover:shadow-2xl transition-shadow duration-300 grid md:grid-cols-12 items-center"
        >
          <div className="md:col-span-6 relative h-64 sm:h-80 overflow-hidden">
            <img
              src={ASSETS.cheBienMonAn}
              alt="Chế biến bữa ăn ngon từ nông sản Xấu Mã"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 bg-[#195D3B]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
              🍳 Bữa cơm xanh chuẩn vị
            </div>
          </div>
          <div className="md:col-span-6 p-7 sm:p-10 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#438347] bg-[#91B34D]/20 px-3 py-1 rounded-full inline-block">
              Từ nông trại đến bàn ăn
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#195D3B] leading-snug">
              TIẾT KIỆM CHO BẠN, TIẾP SỨC CHO NHÀ NÔNG
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
              Mỗi món ăn chế biến từ nông sản Xấu Mã là một lời khẳng định: nguyên liệu tươi sạch, an toàn và bổ dưỡng mới là cốt lõi của sức khỏe – không phải ngoại hình hoàn hảo trên quầy kệ.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#195D3B] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#144b30] transition-colors"
              >
                <span>Cùng chung tay lan tỏa</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
