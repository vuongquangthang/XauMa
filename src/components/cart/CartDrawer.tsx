import React, { useState } from 'react'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '../../store/cartContext'
import CheckoutModal from '../checkout/CheckoutModal'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, itemCount } = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const handleStartCheckout = () => {
    closeCart()
    setCheckoutOpen(true)
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={closeCart}
        >
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#E8D5B5]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#E8D5B5] flex items-center justify-between bg-[#F8F5E9]">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#195D3B]" />
                  <h3 className="font-heading font-extrabold text-lg text-[#195D3B]">
                    Giỏ hàng của bạn ({itemCount})
                  </h3>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-white transition-colors"
                  aria-label="Đóng giỏ hàng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F8F5E9] text-[#195D3B] flex items-center justify-center mx-auto border border-[#E8D5B5]">
                      <ShoppingBag className="w-8 h-8 text-[#91B34D]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#195D3B]">
                        Giỏ hàng đang trống
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                        Hãy chọn cho mình một chiếc Hộp Nông Sản Xấu Mã tươi sạch từ 49.000đ nhé!
                      </p>
                    </div>
                    <a
                      href="#products"
                      onClick={closeCart}
                      className="inline-block px-5 py-2.5 bg-[#195D3B] text-white rounded-xl text-xs font-bold shadow hover:bg-[#144b30] transition-colors"
                    >
                      Khám phá 3 dòng hộp ngay
                    </a>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-[#E8D5B5] bg-[#F8F5E9]/50 flex gap-3.5 relative group hover:border-[#91B34D] transition-colors"
                    >
                      {/* Item Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-[#E8D5B5]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between text-left">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-heading font-bold text-sm text-[#195D3B]">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 p-1"
                              title="Xóa món này"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            Khối lượng: {item.product.weight}
                          </div>

                          {/* Customization Details if any */}
                          {item.customization && (
                            <div className="text-[10px] text-[#438347] mt-1 space-y-0.5 bg-white/70 p-1.5 rounded-lg border border-[#E8D5B5]">
                              {item.customization.excludedFoods.length > 0 && (
                                <div>
                                  • Loại trừ: <span className="font-semibold">{item.customization.excludedFoods.join(', ')}</span>
                                </div>
                              )}
                              <div>
                                • Sở thích:{' '}
                                <span className="font-semibold">
                                  {item.customization.preference === 'leaf'
                                    ? 'Nhiều rau ăn lá'
                                    : item.customization.preference === 'root_fruit'
                                    ? 'Nhiều củ quả'
                                    : 'Cân bằng'}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#E8D5B5]/60">
                          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-[#E8D5B5]">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-gray-600 hover:text-[#195D3B] p-0.5"
                              aria-label="Giảm số lượng"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-[#195D3B] px-1.5">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-gray-600 hover:text-[#195D3B] p-0.5"
                              aria-label="Tăng số lượng"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="font-heading font-extrabold text-sm text-[#DE8753]">
                            {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-5 border-t border-[#E8D5B5] bg-[#F8F5E9] space-y-3">
                  <div className="flex justify-between items-baseline text-sm">
                    <span className="text-gray-600">Tạm tính giỏ hàng:</span>
                    <span className="font-heading font-extrabold text-xl text-[#195D3B]">
                      {subtotal.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 text-left">
                    * Phí vận chuyển sẽ được tính chi tiết khi nhập địa chỉ giao hàng (Miễn phí từ 149.000đ).
                  </p>

                  <button
                    onClick={handleStartCheckout}
                    className="w-full py-3.5 rounded-2xl bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-sm shadow-lg shadow-[#195D3B]/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-101 active:scale-99"
                  >
                    <span>Đặt hàng</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal Trigger */}
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  )
}
