import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../store/cartContext'

export default function FloatingCartButton() {
  const { itemCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#195D3B] hover:bg-[#144b30] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer group"
      aria-label="Xem giỏ hàng"
      title="Mở giỏ hàng"
    >
      <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
      <span className="absolute -top-1 -right-1 bg-[#DE8753] text-white border-2 border-white text-xs font-black min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow-md">
        {itemCount}
      </span>
    </button>
  )
}
