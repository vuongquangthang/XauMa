import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ASSETS } from '../../constants/assets'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Câu chuyện thương hiệu', href: '#brand-story' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'AI Đi Chợ', href: '#ai-shopping' },
    { label: 'Vì sao chọn Xấu Mã', href: '#why-xau-ma' },
    { label: 'Nguồn gốc QR', href: '#traceability' },
  ]

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/80'
            : 'bg-white/90 backdrop-blur-md shadow-md border border-white/60'
        }`}
      >
        {/* Logo Xấu Mã tròn thanh lịch bên trái */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0 whitespace-nowrap">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-1 border border-[#E8D5B5] shadow-xs flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shrink-0">
            <img
              src={ASSETS.logo}
              alt="Logo Xấu Mã"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left whitespace-nowrap">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#195D3B] leading-none whitespace-nowrap">
              XẤU MÃ
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#438347] font-bold tracking-wide whitespace-nowrap">
              Nâng niu nông sản Việt
            </span>
          </div>
        </a>

        {/* Desktop Navigation (căn giữa) */}
        <nav className="hidden xl:flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all text-gray-700 hover:text-[#195D3B] hover:bg-gray-100/70"
            >
              <span className="whitespace-nowrap">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Nút Pill Đặt mua ngay */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          {/* Pill CTA Button */}
          <a
            href="#products"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#195D3B] hover:bg-[#144b30] text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-102 active:scale-98 tracking-tight whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Đặt mua ngay</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-gray-50 border border-gray-200 text-[#195D3B] hover:bg-gray-100 transition-all cursor-pointer shrink-0"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-7xl mx-auto bg-white rounded-3xl border border-gray-200 p-4 space-y-2 shadow-xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap text-gray-800 hover:bg-gray-50"
            >
              <span className="whitespace-nowrap">{link.label}</span>
            </a>
          ))}
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
