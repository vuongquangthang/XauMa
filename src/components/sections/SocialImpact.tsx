import { Sprout, Users, Recycle } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function SocialImpact() {
  const impacts = [
    {
      icon: <Sprout className="w-8 h-8 text-[#195D3B]" />,
      title: 'Tối ưu hóa sản lượng nông trại',
      metricTarget: 'Mục tiêu chiến dịch',
      metricValue: 'Hạn chế lãng phí',
      desc: 'Giúp đưa những củ quả lành lặn bị từ chối chỉ vì lệch chuẩn ngoại hình đến thẳng căn bếp gia đình, giảm áp lực đổ bỏ cho nhà nông.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#195D3B]" />,
      title: 'Hỗ trợ sinh kế bền vững',
      metricTarget: 'Hợp tác trực tiếp',
      metricValue: 'Bao tiêu công bằng',
      desc: 'Bà con nông dân tại các nông trại đối tác có thêm nguồn thu nhập ổn định và tự tin gắn bó với phương thức canh tác an toàn tự nhiên.',
    },
    {
      icon: <Recycle className="w-8 h-8 text-[#195D3B]" />,
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
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#438347] bg-[#91B34D]/20 px-3.5 py-1 rounded-full inline-block">
            Tác động xã hội
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#195D3B] tracking-tight">
            MỖI CHIẾC HỘP NHỎ, MỘT GIÁ TRỊ LỚN HƠN
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hành trình cùng Xấu Mã không chỉ dừng lại ở bữa cơm ngon của bạn, mà còn là sự sẻ chia
            với đất mẹ và những người một nắng hai sương làm ra hạt gạo, củ rau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {impacts.map((imp, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#F8F5E9] border border-[#E8D5B5] shadow-card hover:border-[#91B34D] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8D5B5] flex items-center justify-center mb-6 shadow-xs">
                  {imp.icon}
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] uppercase font-bold text-[#438347] tracking-wider block">
                    {imp.metricTarget}
                  </span>
                  <div className="font-heading font-extrabold text-2xl text-[#195D3B]">
                    {imp.metricValue}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-[#195D3B] mb-2">
                  {imp.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {imp.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8D5B5]/60 text-[11px] text-gray-500 font-medium">
                Chiến dịch hành động vì nông sản Việt 2026
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Banner 3 Set & Lan tỏa lối sống xanh */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-[#E8D5B5] bg-[#F8F5E9] shadow-lg grid md:grid-cols-12 items-center">
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
        </div>

        <div className="mt-10 p-4 bg-[#F8F5E9] rounded-2xl border border-[#E8D5B5] max-w-xl mx-auto text-center text-xs text-gray-500 italic">
          * Dữ liệu thống kê tác động cụ thể theo từng tháng sẽ được cập nhật công khai trên trang báo cáo thường niên của dự án.
        </div>
      </div>
    </section>
  )
}
