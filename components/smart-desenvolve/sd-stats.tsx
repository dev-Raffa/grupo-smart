"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "500+", label: "Profissionais capacitados" },
  { value: "99%", label: "Satisfacao nos treinamentos" },
  { value: "3x", label: "Aceleracao de resultados" },
]

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    const numericPart = value.replace(/[^0-9]/g, "")
    const prefix = value.match(/^[^0-9]*/)?.[0] || ""
    const suffix = value.match(/[^0-9]*$/)?.[0] || ""
    const target = parseInt(numericPart, 10)

    if (isNaN(target)) {
      setDisplay(value)
      return
    }

    const duration = 1500
    const steps = 40
    const stepTime = duration / steps
    let current = 0

    const interval = setInterval(() => {
      current += 1
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const val = Math.round(eased * target)
      setDisplay(`${prefix}${val}${suffix}`)
      if (current >= steps) {
        setDisplay(value)
        clearInterval(interval)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [visible, value])

  return <span ref={ref}>{display}</span>
}

export default function SDStats() {
  return (
    <section className="bg-muted/50 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-0 md:divide-x md:divide-border">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-12 text-center"
          >
            <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <AnimatedValue value={stat.value} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
