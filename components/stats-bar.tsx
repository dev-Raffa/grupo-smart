"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 1000000, suffix: "+", prefix: "", label: "Clientes atendidos" },
  { value: 15, suffix: "+", prefix: "R$ ", label: "Bilhoes originados" },
  { value: 200, suffix: "+", prefix: "", label: "Parceiros financeiros" },
  { value: 12, suffix: "", prefix: "", label: "Anos de mercado" },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let animationFrame: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, start])

  return count
}

function StatItem({
  value,
  suffix,
  prefix,
  label,
  inView,
}: {
  value: number
  suffix: string
  prefix: string
  label: string
  inView: boolean
}) {
  const count = useCountUp(value, 2000, inView)

  function formatNumber(n: number) {
    if (n >= 1000000) return (n / 1000000).toFixed(0) + "M"
    if (n >= 1000) return (n / 1000).toFixed(0) + "K"
    return n.toString()
  }

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="border-y border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
