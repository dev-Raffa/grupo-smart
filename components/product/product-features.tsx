import type { ProductFeature } from "@/lib/products-data"

interface ProductFeaturesProps {
  features: ProductFeature[]
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Vantagens
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Por que escolher esta solucao?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/[0.05]">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
