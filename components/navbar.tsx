'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (but not at the top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm text-white shadow-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Riptide Jet Ski Rental" className="h-20 w-auto object-contain" />
            </a>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:bg-blue-700 px-3 py-2 rounded transition">
              Privacy Policy
            </a>
            <a href="/security" className="hover:bg-blue-700 px-3 py-2 rounded transition">
              Security Policy
            </a>
            <a href="/data-safety" className="hover:bg-blue-700 px-3 py-2 rounded transition">
              Data Safety
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
