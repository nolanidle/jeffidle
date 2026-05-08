"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DrumIcon, TrumpetIcon, GuitarIcon } from "@/components/icons";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "HOBBIES", href: "/hobbies" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-retro text-sm text-primary group-hover:text-primary-dark transition-colors">
              JEFF IDLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-retro text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2"
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-retro text-xs px-3 py-2 ${
                    isActive
                      ? "text-primary bg-bg-card-hover"
                      : "text-text-secondary hover:text-primary hover:bg-bg-card-hover"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Animated instrument icons in navbar */}
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 space-x-3 opacity-50">
        <div className="animate-drum-beat">
          <DrumIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="animate-pulse-gold">
          <TrumpetIcon className="w-5 h-5 text-primary" />
        </div>
        <GuitarIcon className="w-5 h-5 text-primary" />
      </div>
    </nav>
  );
}
