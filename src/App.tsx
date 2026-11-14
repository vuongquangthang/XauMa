import { CartProvider, useCart } from './store/cartContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import BrandStory from './components/sections/BrandStory'
import ProductShowcase from './components/sections/ProductShowcase'
import WhyXauMa from './components/sections/WhyXauMa'
import Traceability from './components/sections/Traceability'
import SocialImpact from './components/sections/SocialImpact'
import CustomerStories from './components/sections/CustomerStories'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import FloatingCartButton from './components/cart/FloatingCartButton'
import MobileCTA from './components/layout/MobileCTA'
import AiShoppingModal from './components/ai/AiShoppingModal'
import { CheckCircle2 } from 'lucide-react'

function ToastNotification() {
  const { toastMessage } = useCart()
  if (!toastMessage) return null

  return (
    <div className="fixed top-20 right-4 z-50 bg-[#195D3B] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-in slide-in-from-top duration-300 border border-[#91B34D]/30">
      <CheckCircle2 className="w-5 h-5 text-[#91B34D] shrink-0" />
      <span>{toastMessage}</span>
    </div>
  )
}

function MainContent() {
  return (
    <div className="min-h-screen bg-[#F8F5E9] text-[#1A3828] font-body flex flex-col selection:bg-[#91B34D] selection:text-white">
      {/* Toast Notification */}
      <ToastNotification />

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 01 - Hero: Ấn tượng đầu tiên, thông điệp và gợi mở trải nghiệm từ 49k */}
        <Hero />

        {/* Section 02 - Brand Story: 4 Chương hành trình cảm xúc (Vấn đề -> Con người -> Giải pháp -> Niềm tin) */}
        <BrandStory />

        {/* Section 03 - Product Showcase: Khám phá 3 dòng hộp sau khi đã thấu hiểu giá trị thương hiệu */}
        <ProductShowcase />

        {/* Section 04 - Why Xấu Mã: 4 Cam kết chất lượng cốt lõi */}
        <WhyXauMa />

        {/* Section 06 - Farm to Table / Traceability: Minh bạch nguồn gốc qua thẻ QR */}
        <Traceability />

        {/* Section 07 - Social Impact: Tác động tích cực đến lãng phí thực phẩm và nông dân */}
        <SocialImpact />

        {/* Section 08 - Customer Stories: Mâm cơm thực tế và cảm nhận khách hàng */}
        <CustomerStories />

        {/* Section 09 - FAQ: Giải đáp băn khoăn trước khi quyết định mua */}
        <FAQ />

        {/* Section 10 - Final CTA: Lời kêu gọi hành động cuối cùng */}
        <FinalCTA />
      </main>

      {/* Section 11 - Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Floating Circular Cart Button (giống mẫu ảnh ở góc dưới phải) */}
      <FloatingCartButton />

      {/* Mobile Fixed CTA Bar */}
      <MobileCTA />

      {/* AI Đi Chợ Interactive Modal Flow */}
      <AiShoppingModal />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  )
}
