import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product, PRODUCTS } from '../data/products'

export interface CartItem {
  id: string // unique item id (productId + customized hash)
  product: Product
  quantity: number
  customization?: {
    excludedFoods: string[]
    preference: 'leaf' | 'root_fruit' | 'balanced'
    suggestedItems?: string[]
  }
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addToCart: (product: Product, quantity?: number, customization?: CartItem['customization']) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, delta: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  toastMessage: string | null
  showToast: (msg: string) => void
}

const CART_STORAGE_KEY = 'xau_ma_cart_v1'

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY)
      if (!saved) return []
      const parsed: CartItem[] = JSON.parse(saved)
      // Tự động map lại theo PRODUCTS mới nhất để đồng bộ tên và ảnh chuẩn xác
      return parsed.map((item) => {
        const latestProduct =
          PRODUCTS.find((p) => p.id === item.product.id) ||
          (item.product.id === 'hop-tron-vi'
            ? PRODUCTS.find((p) => p.id === 'hop-gia-dinh')
            : null)

        if (latestProduct) {
          return {
            ...item,
            product: latestProduct,
          }
        }
        return item
      })
    } catch {
      return []
    }
  })

  const [isOpen, setIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors
    }
  }, [items])

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen((prev) => !prev)

  const addToCart = (product: Product, quantity = 1, customization?: CartItem['customization']) => {
    const customKey = customization
      ? `${product.id}-${customization.excludedFoods.sort().join('_')}-${customization.preference}`
      : product.id

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === customKey)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }
      return [...prev, { id: customKey, product, quantity, customization }]
    })

    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`)
    openCart()
  }

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
