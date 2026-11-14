import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCart } from './Icons'
import { ASSETS } from '../constants/assets'

const navLinks = [
  { label: 'Câu chuyện', href: '#problem' },
  { label: 'Hộp Xấu Mã', href: '#solution' },
  { label: 'So sánh', href: '#comparison' },
  { label: 'Tác động xanh', href: '#impact' },
  { label: 'Đánh giá', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-3 left-0 right-0 z-50 px-4 md:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? 'py-1' : ''
        }`}
      >
        {/* Brand Logo & Sponsor Name */}
        <a
          href="#hero"
          className="liquid-glass rounded-2xl px-3 py-1.5 flex items-center gap-2.5 shrink-0 hover:border-sprout/40 transition-colors bg-moss/70 backdrop-blur-xl"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white p-0.5 shrink-0 flex items-center justify-center shadow-md">
            <img
              src={ASSETS.logo}
              alt="Logo Xấu Mã"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider text-cream/60 font-body font-semibold leading-tight">
              NÂNG NIU NÔNG SẢN VIỆT
            </span>
            <span className="font-heading text-sm text-cream font-bold tracking-tight leading-tight">
              Hộp Nông Sản Xấu Mã
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex liquid-glass rounded-full px-2 py-1.5 items-center gap-1 bg-moss/70 backdrop-blur-xl border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-body font-medium text-cream/80 hover:text-cream hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="ml-2 px-5 py-2 bg-sprout text-moss rounded-full text-sm font-body font-bold hover:bg-sprout/90 hover:shadow-lg hover:shadow-sprout/20 transition-all duration-200 whitespace-nowrap"
          >
            Đặt Hộp Ngay
          </a>
        </nav>

        {/* Right side CTA & Menu */}
        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="liquid-glass rounded-xl px-3 py-2 flex items-center gap-2 text-cream/80 hover:text-cream transition-colors bg-moss/70"
            title="Đặt hộp nông sản"
          >
            <IconCart />
            <span className="text-xs font-body font-bold text-sprout">Mùa 2026</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden liquid-glass rounded-xl p-2.5 text-cream/80 hover:text-cream bg-moss/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-2 liquid-glass-strong rounded-2xl p-4 mx-auto max-w-6xl shadow-2xl border border-white/10 bg-moss/95 backdrop-blur-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-2">
              <div className="px-3 py-1 text-xs text-sprout font-semibold tracking-wide uppercase border-b border-white/10 pb-2">
                Chiến dịch "Nông Sản Đúng Chất - Không Cần Đúng Chuẩn"
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-cream/85 hover:text-cream hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-sprout text-moss font-bold rounded-xl text-sm text-center shadow-md shadow-sprout/20"
              >
                Đặt Hộp Xấu Mã Ngay
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
