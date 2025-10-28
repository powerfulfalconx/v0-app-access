"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Impact Map", href: "#impact-map" },
    { label: "Challenges", href: "#challenges" },
    { label: "Global Pulse", href: "#global-pulse" },
    { label: "Impact", href: "#solutions" },
    { label: "Reviews", href: "#reviews" },
    { label: "Future", href: "#future" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-110">
              <Image src="/images/greenspark-logo.png" alt="GreenSpark Logo" fill className="object-contain" priority />
            </div>
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GreenSpark
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild>
              <a href="https://green-spark-190cd2eb.base44.app" target="_blank" rel="noopener noreferrer">
                Try GreenSpark
              </a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="https://green-spark-190cd2eb.base44.app" target="_blank" rel="noopener noreferrer">
                Try GreenSpark
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
