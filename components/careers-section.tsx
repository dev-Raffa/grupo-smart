"use client"

import { useState, useRef, type FormEvent } from "react"
import { Upload, CheckCircle2, FileText, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CareersSection() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(files: FileList | null) {
    if (files && files.length > 0) {
      setFileName(files[0].name)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragActive(false)
    handleFileChange(e.dataTransfer.files)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function removeFile() {
    setFileName(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (submitted) {
    return (
      <section id="vagas" className="bg-background py-24 lg:py-32">
        <div className="mx-auto flex max-w-xl flex-col items-center px-6 text-center lg:px-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Curriculo enviado com sucesso
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Obrigado pelo seu interesse em fazer parte do Grupo SmartConsig. Nossa
            equipe de Pessoas analisara seu perfil e entrara em contato caso haja
            uma oportunidade compativel.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFileName(null)
            }}
            className="mt-8 inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Enviar outro curriculo
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="vagas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Trabalhe conosco
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Envie seu curriculo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Estamos sempre em busca de talentos que compartilham nossa paixao por
              tecnologia e inovacao no mercado financeiro. Cadastre-se em nosso
              banco de talentos.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Preencha seus dados</p>
                  <p className="text-sm text-muted-foreground">
                    Informacoes basicas para conhecermos voce.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Anexe seu curriculo</p>
                  <p className="text-sm text-muted-foreground">
                    Aceitos formatos PDF e DOCX (max. 5MB).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Aguarde nosso contato</p>
                  <p className="text-sm text-muted-foreground">
                    Nosso time analisara seu perfil com atencao.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Nome completo */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Area de interesse */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="area">Area de interesse</Label>
                  <Select name="area" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Tecnologia</SelectItem>
                      <SelectItem value="credito">Credito</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="compliance">Compliance / Juridico</SelectItem>
                      <SelectItem value="rh">Pessoas / RH</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Linkedin */}
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              {/* Mensagem */}
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre voce e sua experiencia..."
                  className="min-h-24 resize-none"
                />
              </div>

              {/* File upload */}
              <div className="mt-5 flex flex-col gap-2">
                <Label>Curriculo</Label>
                {fileName ? (
                  <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {fileName}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label="Remover arquivo"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault()
                      setDragActive(true)
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors ${dragActive
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 hover:bg-muted/50"
                      }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        fileInputRef.current?.click()
                      }
                    }}
                    aria-label="Area de upload de curriculo"
                  >
                    <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground">
                      Arraste seu arquivo aqui ou clique para selecionar
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF ou DOCX, max. 5MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.docx,.doc"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e.target.files)}
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar curriculo
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                Ao enviar, voce concorda com nossa{" "}
                <a href="#" className="underline transition-colors hover:text-foreground">
                  Politica de Privacidade
                </a>{" "}
                e o tratamento dos seus dados conforme a LGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
