"use client"

import { createElement, useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "article" | "figure" | "li"
}

export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.transitionDelay = `${delay}ms`
            target.classList.add("is-visible")
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return createElement(
    as,
    { ref, className: `reveal ${className}` },
    children,
  )
}
