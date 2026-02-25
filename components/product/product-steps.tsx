import type { ProductStep } from "@/lib/products-data"

interface ProductStepsProps {
  steps: ProductStep[]
}

export default function ProductSteps({ steps }: ProductStepsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left: Explanation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Passo a passo
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Como funciona?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Simplificamos todo o processo para que voce tenha acesso ao credito
            de forma rapida, segura e sem burocracia. Confira o passo a passo da
            contratacao.
          </p>
        </div>

        {/* Right: Steps */}
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-border" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
