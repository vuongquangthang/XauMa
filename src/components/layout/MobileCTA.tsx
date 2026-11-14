import { ShoppingBag } from 'lucide-react'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-[#E8D5B5] shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
      <div className="text-left pl-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#438347] block">
          Dùng thử hôm nay:
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading font-extrabold text-sm text-[#195D3B]">
            Hộp Sinh Viên
          </span>
          <span className="font-heading font-extrabold text-base text-[#DE8753]">
            49.000đ
          </span>
        </div>
      </div>

      <a
        href="#products"
        className="px-5 py-2.5 rounded-xl bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-xs shadow-md flex items-center gap-1.5 shrink-0"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Chọn Hộp Ngay</span>
      </a>
    </div>
  )
}
