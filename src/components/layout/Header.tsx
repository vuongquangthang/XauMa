import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ASSETS } from '../../constants/assets'
import { useCart } from '../../store/cartContext'

export default function Header() {
  const { openAiModal } = useCart()
  const [scrollProgress, setScrollProgress] = useState(0) // 0: Đang ở đỉnh Hero, 1: Đã cuộn qua Hero
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Detect mobile width to avoid desktop transform on mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Tính toán tiến trình cuộn mượt mà từ 0% đến 100% trong khoảng từ 0px đến 350px
      const y = window.scrollY
      const threshold = 320
      const progress = Math.min(Math.max(y / threshold, 0), 1)
      setScrollProgress(progress)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Câu chuyện thương hiệu', href: '#brand-story' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'AI Đi Chợ', href: '#ai-shopping' },
    { label: 'Cam kết chất lượng', href: '#why-xau-ma' },
    { label: 'Nguồn gốc QR', href: '#traceability' },
  ]

  // Tính toán các thông số nội suy theo scrollProgress (0 -> 1)
  // Vị trí top: từ 24px (Hero) -> 6px (Scrolled)
  const topPx = Math.round(30 - scrollProgress * 18)
  
  // Padding capsule dọc: từ 7px -> 5px
  const pyPx = (7 - scrollProgress * 2).toFixed(1)
  
  // Logo size: từ 38px -> 34px
  const logoSizePx = Math.round(38 - scrollProgress * 4)
  
  // Brand text height: từ 33px -> 29px
  const brandHeightPx = Math.round(33 - scrollProgress * 4)

  return (
    <header
      style={{ top: `${topPx}px` }}
      className="fixed left-0 right-0 z-40 transition-none"
    >
      {/* 
        Ở Hero (scrollProgress = 0):
        Nằm trong đúng container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start`
        để mép trái Header gióng thẳng tắp với chữ cái N của H1.
        Khi cuộn xuống (scrollProgress -> 1):
        Chuyển dần sang căn giữa màn hình `flex justify-center` với độ rộng chuẩn `max-w-6xl`.
      */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex transition-none ${isMobile ? 'justify-center' : 'justify-start'}`}>
        <div
          style={{
            maxWidth: scrollProgress === 0 ? '1152px' : `${Math.round(1152 - scrollProgress * 48)}px`,
            width: '100%',
            transform: isMobile ? 'none' : `translateX(${Math.round(scrollProgress * 24)}px)`,
          }}
          className="transition-none"
        >
          <div
            style={{
              paddingTop: `${pyPx}px`,
              paddingBottom: `${pyPx}px`,
            }}
            className={`rounded-full flex items-center justify-between transition-shadow duration-300 ${
              scrollProgress > 0.5
                ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/80 pl-2.5 pr-2'
                : 'bg-white/95 backdrop-blur-md shadow-xl border border-white/80 pl-1 sm:pl-1.5 pr-2.5 sm:pr-3'
            }`}
          >
          {/* Logo Xấu Mã tròn thanh lịch bên trái kèm chữ thương hiệu */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0 whitespace-nowrap">
            <div
              style={{
                width: `${logoSizePx}px`,
                height: `${logoSizePx}px`,
              }}
              className="rounded-full bg-white p-0.5 border border-[#E8D5B5] shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 shrink-0 transition-transform"
            >
              <img
                src={ASSETS.logo}
                alt="Logo Xấu Mã"
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>
            <div className="flex items-center -translate-y-0.5">
              <img
                src={ASSETS.brandTextTransparent}
                alt="XẤU MÃ - Nâng niu nông sản Việt"
                style={{
                  height: `${brandHeightPx}px`,
                }}
                className="w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </a>

          {/* Desktop Navigation (căn giữa) */}
          <nav className="hidden xl:flex items-center gap-1.5 whitespace-nowrap">
            {navLinks.map((link) => {
              if (link.href === '#ai-shopping') {
                return (
                  <button
                    key={link.href}
                    onClick={() => openAiModal()}
                    className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap text-gray-700 hover:text-white hover:bg-[#195D3B] cursor-pointer flex items-center gap-1 transition-all duration-200"
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                  </button>
                )
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap text-gray-700 hover:text-white hover:bg-[#195D3B] transition-all duration-200"
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Actions: Nút Pill Đặt mua ngay */}
          <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
            {/* Pill CTA Button */}
            <a
              href="#products"
              style={{
                paddingTop: `${(8 - scrollProgress * 2).toFixed(1)}px`,
                paddingBottom: `${(8 - scrollProgress * 2).toFixed(1)}px`,
                paddingLeft: `${Math.round(18 - scrollProgress * 4)}px`,
                paddingRight: `${Math.round(18 - scrollProgress * 4)}px`,
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#195D3B] hover:bg-[#144b30] text-white font-bold text-xs shadow-md hover:scale-102 active:scale-98 tracking-tight whitespace-nowrap shrink-0 transition-transform"
            >
              <span className="whitespace-nowrap">Đặt mua ngay</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-full bg-gray-50 border border-gray-200 text-[#195D3B] hover:bg-gray-100 transition-all cursor-pointer shrink-0"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-7xl mx-auto bg-white rounded-3xl border border-gray-200 p-4 space-y-2 shadow-xl animate-in fade-in duration-200">
          {navLinks.map((link) => {
            if (link.href === '#ai-shopping') {
              return (
                <button
                  key={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openAiModal()
                  }}
                  className="w-full text-left block px-4 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap text-gray-800 hover:bg-gray-50 cursor-pointer"
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                </button>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap text-gray-800 hover:bg-gray-50"
              >
                <span className="whitespace-nowrap">{link.label}</span>
              </a>
            )
          })}
          <div className="pt-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 rounded-full bg-[#195D3B] text-white text-center text-sm font-bold shadow whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Đặt mua ngay (từ 49.000đ)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
