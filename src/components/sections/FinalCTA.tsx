import { ArrowRight, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { ASSETS } from '../../constants/assets'
import BlurText from '../BlurText'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F5E9] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#195D3B] text-white shadow-2xl overflow-hidden text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#91B34D]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DE8753]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#91B34D] bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-xs">
                Nông sản đúng chất – Không cần đúng chuẩn
              </span>
            </motion.div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              <BlurText text="ĐỪNG CHỌN RAU CỦ CHỈ VÌ VẺ NGOÀI." delay={0.08} />
            </h2>

            <motion.p
              initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed font-light"
            >
              Hãy cùng Xấu Mã nâng niu giá trị thực chất trong từng bữa ăn, ăn sạch tiết kiệm hơn và trao đầu ra công bằng cho người làm vườn.
            </motion.p>

            {/* Price highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block py-2 px-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <span className="text-xs text-white/70 block">Bắt đầu trải nghiệm ngay hôm nay:</span>
              <span className="font-heading font-extrabold text-2xl text-[#DE8753]">
                Hộp Sinh Viên chỉ từ 49.000đ
              </span>
            </motion.div>

            {/* Big CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-2xl bg-[#DE8753] hover:bg-[#c97441] text-white font-bold text-base sm:text-lg shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>CHỌN HỘP XẤU MÃ NGAY</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <p className="text-xs text-white/50 pt-2">
              ✓ Miễn phí giao hàng cho đơn từ 149.000đ · Đồng kiểm hài lòng mới thanh toán
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
