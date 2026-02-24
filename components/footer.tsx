import Link from "next/link"
import { Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  institucional: [
    { label: "Sobre o Grupo", href: "#" },
    { label: "Nossa Historia", href: "#" },
    { label: "Governanca Corporativa", href: "#" },
    { label: "Responsabilidade Social", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  produtos: [
    { label: "Credito Consignado", href: "#" },
    { label: "Credito Empresarial", href: "#" },
    { label: "Consignado Privado", href: "#" },
    { label: "Seguros", href: "#" },
    { label: "Plataforma White Label", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Politica de Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
    { label: "Compliance", href: "#" },
    { label: "Ouvidoria", href: "#" },
  ],
  contato: [
    { label: "Fale Conosco", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Canal de Denuncias", href: "#" },
    { label: "SAC: 0800 123 4567", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#a1a1a1]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top: Logo + columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#f5f5f5]">
                Smart<span className="text-primary">Consig</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Tecnologia e solidez a servico do mercado de credito brasileiro.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] transition-colors hover:border-primary hover:text-primary"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]">
              Institucional
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#f5f5f5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]">
              Produtos
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#f5f5f5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#f5f5f5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]">
              Contato
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#f5f5f5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a2a2a] pt-8 md:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} SmartConsig. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs transition-colors hover:text-[#f5f5f5]">
              Politica de Privacidade
            </Link>
            <Link href="#" className="text-xs transition-colors hover:text-[#f5f5f5]">
              LGPD
            </Link>
            <Link href="#" className="text-xs transition-colors hover:text-[#f5f5f5]">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
