interface ProductIntroProps {
  intro: string
  highlight: string
}

export default function ProductIntro({ intro, highlight }: ProductIntroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Sobre o produto
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 lg:text-xl lg:leading-relaxed">
            {intro}
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-primary/20 bg-primary/[0.03] p-6 lg:p-8">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
              <span className="text-xs font-bold text-primary-foreground">$</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Destaque
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
