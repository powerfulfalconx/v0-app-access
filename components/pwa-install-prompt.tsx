"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Download, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Show the prompt after a delay
      setTimeout(() => setShowPrompt(true), 3000)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Check if user has dismissed the prompt before
    const dismissed = localStorage.getItem("pwa-install-dismissed")
    if (dismissed) {
      const dismissedTime = Number.parseInt(dismissed)
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24)
      if (daysSinceDismissed < 7) {
        setShowPrompt(false)
      }
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback for browsers that don't support the install prompt
      alert(
        "To install this app:\n\n" +
          "Chrome/Edge: Click the menu (⋮) → 'Install app'\n" +
          "Safari: Tap Share → 'Add to Home Screen'\n" +
          "Firefox: Tap Menu → 'Install'",
      )
      return
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsInstalled(true)
      setShowPrompt(false)
    }

    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem("pwa-install-dismissed", Date.now().toString())
  }

  if (isInstalled || !showPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <ScrollAnimation animation="fade-up">
        <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-2xl shadow-2xl border-2 border-primary/20 backdrop-blur-xl overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="relative p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-white">Install GreenSpark</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Get the full experience! Install our app for faster access, offline support, and a native app feel.
                  Powered by v0 by Vercel.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleInstallClick}
                className="flex-1 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Install Now
              </Button>
              <Button onClick={handleDismiss} variant="ghost" className="text-white hover:bg-white/20" size="lg">
                Later
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-xs text-white/80">Fast</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-xs text-white/80">Offline</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className="text-xs text-white/80">Native Feel</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
