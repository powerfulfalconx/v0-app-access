"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-in"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fade-up", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation]

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} ${className}`}>
      {children}
    </div>
  )
}
