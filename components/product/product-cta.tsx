import { MessageCircle } from "lucide-react"

export default function ProductCta() {
  return (
    <section className="bg-[#f9f9f9]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            Ficou com alguma duvida sobre esta solucao?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nossos especialistas estao prontos para oferecer um atendimento
            personalizado e ajudar voce a encontrar a melhor opcao.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com um consultor
          </a>
        </div>
      </div>
    </section>
  )
}
