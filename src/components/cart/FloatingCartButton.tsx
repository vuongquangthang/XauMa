import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../store/cartContext'

export default function FloatingCartButton() {
  const { itemCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#195D3B] hover:bg-[#144b30] text-white shadow-2xl border-2 border-white/60 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer group"
      aria-label="Xem giỏ hàng"
      title="Mở giỏ hàng"
    >
      <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105" />
      <span className="absolute -top-1 -right-1 bg-white text-[#195D3B] border border-[#195D3B]/20 text-[10px] sm:text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
        {itemCount}
      </span>
    </button>
  )
}
