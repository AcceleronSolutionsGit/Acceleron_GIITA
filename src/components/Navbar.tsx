// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const navLinks = [
  { label: 'HOME', href: '/', hash: '' },
  { label: 'ABOUT US', href: '/#about-us', hash: 'about-us' },
  { label: 'PROGRAMS', href: '/#programs', hash: 'programs' },
  { label: 'INFRASTRUCTURE', href: '/infrastructure', hash: '' },
  { label: 'FACULTY', href: '/#faculty', hash: 'faculty' },
  { label: 'UPCOMING PROGRAMS', href: '/#upcoming-programs', hash: 'upcoming-programs' },
  { label: 'RESOURCES', href: '/resources', hash: '' },
  { label: 'CONTACT US', href: '/#contact', hash: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getScrollOffset = (menuOpen: boolean) => {
    // Topbar is always visible — measure its height
    const topbarEl = document.getElementById('topbar');
    const topbarH = topbarEl?.offsetHeight ?? 36;

    // Navbar is always below topbar
    const navbarEl = document.getElementById('site-header');
    const navbarH = navbarEl?.querySelector('nav')?.offsetHeight ?? 56;

    // If mobile menu is expanded, also account for its height
    const mobileMenuEl = document.getElementById('mobile-menu');
    const mobileMenuH = menuOpen && mobileMenuEl ? mobileMenuEl.offsetHeight : 0;

    return topbarH + navbarH + mobileMenuH;
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string, closeMenu: boolean) => {
    if (!hash) return; // let normal full-page navigation proceed (e.g. /infrastructure)

    // If the target section does not exist on this page, let the <Link> navigate
    // normally to "/#hash" so the browser goes to the home page and scrolls there.
    const target = document.getElementById(hash);
    if (!target) return;

    // Section exists on this page — prevent navigation and smooth-scroll instead.
    e.preventDefault();

    const newMenuOpen = closeMenu ? false : isMenuOpen;
    if (closeMenu) setIsMenuOpen(false);

    // Small delay when closing menu so DOM updates before measuring
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const offset = getScrollOffset(newMenuOpen);
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, closeMenu ? 320 : 0);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      if (
        isMenuOpen &&
        mobileMenu &&
        mobileMenuButton &&
        !mobileMenu.contains(event.target as Node) &&
        !mobileMenuButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header id="site-header" className="w-full bg-white shadow-md transition-all duration-300 sticky top-0 z-40">
      <div className="container max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={`${basePath}/gita-logo-hdr.png`}
              alt="GIITA Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.hash, false)}
                className="nav-link text-[13px] font-semibold tracking-wider text-gray-800 hover:text-[#3A55A5] transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-button"
            className="xl:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`xl:hidden absolute top-full left-0 w-full bg-white/85 backdrop-blur-lg border-t border-gray-200/50 shadow-xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? 'max-h-[450px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-start space-y-5 py-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wider text-gray-800 hover:text-[#3A55A5] transition-colors"
                onClick={(e) => handleSectionClick(e, link.hash, true)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}