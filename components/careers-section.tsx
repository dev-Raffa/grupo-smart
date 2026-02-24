import { MapPin, ArrowUpRight } from "lucide-react"

const jobs = [
  {
    title: "Desenvolvedor(a) Back-end Senior",
    location: "Remoto",
    type: "CLT",
    area: "Smart Tech",
  },
  {
    title: "Analista de Credito Pleno",
    location: "Sao Paulo, SP",
    type: "CLT",
    area: "SmartConsig",
  },
  {
    title: "Product Designer",
    location: "Remoto",
    type: "CLT",
    area: "Smart Tech",
  },
  {
    title: "Analista de Compliance",
    location: "Sao Paulo, SP",
    type: "CLT",
    area: "SmartConsig",
  },
]

export default function CareersSection() {
  return (
    <section id="vagas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Carreiras
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Faca parte do nosso time
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Estamos sempre em busca de talentos que compartilham nossa paixao
              por tecnologia e inovacao no mercado financeiro.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Ver todas as vagas
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right - Job Cards */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            {jobs.map((job) => (
              <a
                key={job.title}
                href="#"
                className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {job.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {job.type}
                    </span>
                    <span className="rounded-full border border-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {job.area}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
