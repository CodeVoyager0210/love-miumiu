"use client"

import { useEffect, useState } from "react"

const navItems = [
  { label: "首页", href: "#home" },
  { label: "关于", href: "#about" },
  { label: "作品", href: "#works" },
  { label: "影像", href: "#gallery" },
  { label: "联系", href: "#contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-border/40"
          : "backdrop-blur-md bg-background/10 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={`font-serif text-xl md:text-2xl tracking-[0.2em] transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-background drop-shadow-sm"
            }`}
          >
            LIU · HAOCUN
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`font-sans text-xs tracking-[0.25em] uppercase transition-colors duration-500 hover:opacity-60 ${
                  scrolled ? "text-foreground" : "text-background"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <span
            className={`font-sans text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-background/80"
            }`}
          >
            MMXXVI
          </span>
        </div>

        <button
          aria-label="菜单"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-background"
          }`}
        >
          <span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* 移动端抽屉 */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100 backdrop-blur-xl bg-background/90" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl tracking-wide text-foreground hover:opacity-60 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
