import {
  Briefcase,
  Landmark,
  CreditCard,
  ShoppingBag,
  RefreshCw,
  Car,
  CheckCircle,
  Shield,
  Clock,
  Percent,
  type LucideIcon,
} from "lucide-react"

export interface ProductFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProductFaq {
  question: string
  answer: string
}

export interface ProductStep {
  step: string
  title: string
  description: string
}

export interface Product {
  slug: string
  title: string
  subtitle: string
  intro: string
  highlight: string
  features: ProductFeature[]
  steps: ProductStep[]
  faqs: ProductFaq[]
  icon: LucideIcon
  menuDescription: string
}

export const products: Product[] = [
  {
    slug: "credito-trabalhador-clt",
    title: "Credito do Trabalhador CLT",
    subtitle: "Solucoes de credito exclusivas para profissionais do setor privado",
    menuDescription: "Solucoes de credito exclusivas para profissionais do setor privado",
    icon: Briefcase,
    intro:
      "O Credito do Trabalhador CLT e uma linha de emprestimo desenvolvida especificamente para profissionais com carteira assinada. Com taxas competitivas e desconto direto em folha, essa modalidade oferece mais poder de compra e planejamento financeiro para quem atua no setor privado.",
    highlight:
      "Taxas a partir de 1,80% a.m. com parcelas descontadas diretamente na folha de pagamento, sem comprometer seu orcamento.",
    features: [
      {
        icon: Percent,
        title: "Taxas Reduzidas",
        description:
          "Aproveite as menores taxas do mercado para trabalhadores CLT, com condicoes exclusivas negociadas com nossos parceiros.",
      },
      {
        icon: Clock,
        title: "Liberacao Rapida",
        description:
          "Processo 100% digital com analise de credito agil. O dinheiro pode estar na sua conta em ate 24 horas uteis.",
      },
      {
        icon: Shield,
        title: "Seguranca Total",
        description:
          "Todos os dados sao protegidos com criptografia de ponta a ponta, seguindo as melhores praticas de seguranca da informacao.",
      },
      {
        icon: CheckCircle,
        title: "Sem Burocracia",
        description:
          "Contratacao simplificada com documentacao minima. Tudo resolvido de forma digital, sem necessidade de ir a uma agencia.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Simulacao Online",
        description:
          "Acesse nosso simulador e descubra o valor disponivel, a taxa e o numero de parcelas que melhor se encaixa no seu perfil.",
      },
      {
        step: "02",
        title: "Analise de Credito",
        description:
          "Nosso sistema analisa seu perfil de forma automatica, considerando sua margem consignavel e historico financeiro.",
      },
      {
        step: "03",
        title: "Assinatura Digital",
        description:
          "Apos a aprovacao, voce assina o contrato de forma digital, sem necessidade de documentos fisicos ou deslocamento.",
      },
      {
        step: "04",
        title: "Dinheiro na Conta",
        description:
          "O valor e depositado diretamente na sua conta bancaria em ate 24 horas uteis apos a assinatura do contrato.",
      },
    ],
    faqs: [
      {
        question: "Quem pode contratar o Credito do Trabalhador CLT?",
        answer:
          "Todo profissional com carteira assinada (CLT) que possua margem consignavel disponivel na folha de pagamento. A empresa empregadora precisa estar conveniada com nossos parceiros financeiros.",
      },
      {
        question: "Quais documentos sao necessarios?",
        answer:
          "Documento de identidade com foto (RG ou CNH), comprovante de residencia atualizado e ultimo contracheque. Todo o processo e digital.",
      },
      {
        question: "Qual o prazo maximo de pagamento?",
        answer:
          "O prazo pode variar de 12 a 84 meses, dependendo do valor solicitado e da margem consignavel disponivel.",
      },
      {
        question: "Posso antecipar as parcelas?",
        answer:
          "Sim. Voce pode antecipar parcelas a qualquer momento com desconto proporcional dos juros, sem cobranca de taxas adicionais.",
      },
      {
        question: "Como funciona o desconto em folha?",
        answer:
          "As parcelas sao descontadas automaticamente do seu salario pela empresa empregadora, garantindo pontualidade e evitando esquecimentos.",
      },
    ],
  },
  {
    slug: "emprestimo-consignado",
    title: "Emprestimo Consignado",
    subtitle: "As melhores taxas com desconto direto na folha de pagamento",
    menuDescription: "As melhores taxas com desconto direto na folha de pagamento",
    icon: Landmark,
    intro:
      "O Emprestimo Consignado e a modalidade de credito com as menores taxas de juros do mercado. Destinado a servidores publicos, aposentados e pensionistas do INSS, oferece condicoes diferenciadas com desconto automatico na folha ou beneficio.",
    highlight:
      "Taxas a partir de 1,40% a.m. para servidores publicos, com prazo de ate 96 meses e contratacao 100% digital.",
    features: [
      {
        icon: Percent,
        title: "Menores Taxas do Mercado",
        description:
          "Por ter garantia de pagamento via folha, as taxas sao significativamente menores do que outras modalidades de credito pessoal.",
      },
      {
        icon: Clock,
        title: "Prazos Estendidos",
        description:
          "Parcele em ate 96 meses para servidores publicos e 84 meses para aposentados e pensionistas do INSS.",
      },
      {
        icon: Shield,
        title: "Regulamentado pelo Banco Central",
        description:
          "Operacao totalmente regulamentada e fiscalizada pelo Banco Central do Brasil, garantindo transparencia e seguranca.",
      },
      {
        icon: CheckCircle,
        title: "Atendimento Especializado",
        description:
          "Equipe dedicada para servidores e aposentados, com consultores que entendem as particularidades de cada convenio.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Consulta de Margem",
        description:
          "Verificamos sua margem consignavel disponivel junto ao orgao pagador ou INSS de forma automatica e segura.",
      },
      {
        step: "02",
        title: "Proposta Personalizada",
        description:
          "Montamos a melhor proposta de acordo com seu perfil, considerando taxa, prazo e valor que se encaixa na sua necessidade.",
      },
      {
        step: "03",
        title: "Formalizacao Digital",
        description:
          "Assine o contrato digitalmente com validacao biometrica, sem necessidade de comparecer a nenhuma agencia.",
      },
      {
        step: "04",
        title: "Credito Liberado",
        description:
          "Apos a averbacao pelo orgao pagador, o valor e creditado diretamente na sua conta bancaria.",
      },
    ],
    faqs: [
      {
        question: "Quem pode contratar o Emprestimo Consignado?",
        answer:
          "Servidores publicos federais, estaduais e municipais, aposentados e pensionistas do INSS, e militares das Forcas Armadas.",
      },
      {
        question: "Qual a diferenca entre consignado e credito pessoal?",
        answer:
          "A principal diferenca e a taxa de juros: o consignado oferece taxas ate 5 vezes menores, pois o pagamento e garantido via desconto em folha.",
      },
      {
        question: "Posso ter mais de um consignado ativo?",
        answer:
          "Sim, desde que sua margem consignavel comporte as parcelas. A margem total nao pode ultrapassar o limite estabelecido pelo orgao ou INSS.",
      },
      {
        question: "Quanto tempo demora para o dinheiro cair na conta?",
        answer:
          "O prazo varia de acordo com o orgao pagador. Em geral, o credito e liberado em 1 a 5 dias uteis apos a averbacao.",
      },
      {
        question: "Existe um valor minimo ou maximo?",
        answer:
          "O valor minimo e de R$ 500,00. O maximo depende da sua margem consignavel disponivel e das regras do convenio.",
      },
    ],
  },
  {
    slug: "cartao-consignado",
    title: "Cartao Consignado",
    subtitle: "Cartao de credito com taxas reduzidas para beneficiarios e servidores",
    menuDescription: "Cartao de credito com taxas reduzidas para beneficiarios e servidores",
    icon: CreditCard,
    intro:
      "O Cartao Consignado combina a praticidade de um cartao de credito com as vantagens do consignado. O pagamento minimo e descontado diretamente da folha ou beneficio, oferecendo taxas de juros muito inferiores as dos cartoes tradicionais.",
    highlight:
      "Anuidade zero e taxas de juros ate 70% menores que cartoes de credito convencionais, com desconto automatico em folha.",
    features: [
      {
        icon: Percent,
        title: "Juros ate 70% Menores",
        description:
          "As taxas do rotativo e parcelamento sao drasticamente menores que as dos cartoes convencionais, gerando grande economia.",
      },
      {
        icon: Shield,
        title: "Sem Anuidade",
        description:
          "Cartao sem cobranca de anuidade, com bandeira aceita em milhoes de estabelecimentos no Brasil e no exterior.",
      },
      {
        icon: Clock,
        title: "Saque Complementar",
        description:
          "Alem da funcao credito, permite realizar saques do limite disponivel direto na conta, como um emprestimo complementar.",
      },
      {
        icon: CheckCircle,
        title: "Aprovacao Facilitada",
        description:
          "Analise simplificada com base na margem do cartao consignado, separada da margem do emprestimo consignado.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Solicitacao",
        description:
          "Faca sua solicitacao online informando seus dados basicos e o orgao ou conveniada a qual esta vinculado.",
      },
      {
        step: "02",
        title: "Analise e Aprovacao",
        description:
          "Verificamos sua margem de cartao consignado disponivel e, em caso de aprovacao, definimos seu limite.",
      },
      {
        step: "03",
        title: "Receba seu Cartao",
        description:
          "O cartao e enviado para o endereco cadastrado. Voce tambem recebe o cartao virtual para uso imediato.",
      },
      {
        step: "04",
        title: "Comece a Usar",
        description:
          "Utilize em compras online e fisicas. O pagamento minimo sera descontado automaticamente do seu beneficio ou folha.",
      },
    ],
    faqs: [
      {
        question: "O que e a margem do cartao consignado?",
        answer:
          "E uma margem separada da margem do emprestimo consignado, destinada exclusivamente para o pagamento minimo do cartao. Atualmente e de 5% do beneficio ou salario.",
      },
      {
        question: "Posso usar o cartao para compras internacionais?",
        answer:
          "Sim. O cartao possui bandeira internacional e pode ser utilizado em compras online e fisicas no exterior, com conversao pela cotacao do dia.",
      },
      {
        question: "Como funciona o saque complementar?",
        answer:
          "Voce pode transformar parte do seu limite de credito em dinheiro na conta, com taxas muito inferiores ao saque convencional de cartao de credito.",
      },
      {
        question: "Qual o prazo para receber o cartao fisico?",
        answer:
          "O cartao fisico e entregue em ate 15 dias uteis. Enquanto isso, voce ja pode utilizar o cartao virtual pelo aplicativo.",
      },
    ],
  },
  {
    slug: "cartao-beneficio",
    title: "Cartao Beneficio",
    subtitle: "Vantagens e descontos exclusivos em farmacias e servicos",
    menuDescription: "Vantagens e descontos exclusivos em farmacias e servicos",
    icon: ShoppingBag,
    intro:
      "O Cartao Beneficio e um cartao multiuso que oferece descontos exclusivos em farmacias, oticas, laboratorios e diversos estabelecimentos conveniados. Pensado para aposentados e pensionistas do INSS, traz economia real no dia a dia.",
    highlight:
      "Descontos de ate 30% em farmacias e servicos de saude, alem de funcao credito com taxas reduzidas e anuidade zero.",
    features: [
      {
        icon: Percent,
        title: "Descontos em Farmacias",
        description:
          "Economia de ate 30% em medicamentos nas principais redes de farmacias conveniadas em todo o Brasil.",
      },
      {
        icon: Shield,
        title: "Telemedicina Gratuita",
        description:
          "Acesso a consultas medicas por telemedicina sem custo adicional, 24 horas por dia, 7 dias por semana.",
      },
      {
        icon: Clock,
        title: "Rede Credenciada Ampla",
        description:
          "Milhares de estabelecimentos conveniados incluindo oticas, laboratorios, clinicas e servicos de bem-estar.",
      },
      {
        icon: CheckCircle,
        title: "Funcao Credito Inclusa",
        description:
          "Alem dos beneficios, o cartao funciona como credito convencional com taxas especiais em compras parceladas.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Cadastro Simples",
        description:
          "Informe seus dados basicos e numero do beneficio INSS para iniciar a solicitacao do seu cartao.",
      },
      {
        step: "02",
        title: "Validacao do Beneficio",
        description:
          "Confirmamos seu vinculo com o INSS e verificamos a margem disponivel para o cartao beneficio.",
      },
      {
        step: "03",
        title: "Ativacao dos Beneficios",
        description:
          "Assim que aprovado, voce ja pode acessar a rede de descontos e beneficios pelo aplicativo.",
      },
      {
        step: "04",
        title: "Cartao em Maos",
        description:
          "Receba seu cartao fisico e aproveite descontos em saude, bem-estar e compras do dia a dia.",
      },
    ],
    faqs: [
      {
        question: "Quem tem direito ao Cartao Beneficio?",
        answer:
          "Aposentados e pensionistas do INSS que possuam margem disponivel para o cartao beneficio, conforme regulamentacao vigente.",
      },
      {
        question: "O Cartao Beneficio tem anuidade?",
        answer:
          "Nao. O Cartao Beneficio SmartConsig e isento de anuidade e nao possui taxas de manutencao.",
      },
      {
        question: "Como acesso os descontos em farmacias?",
        answer:
          "Basta apresentar o cartao fisico ou virtual no estabelecimento conveniado. O desconto e aplicado automaticamente no ato da compra.",
      },
      {
        question: "A telemedicina cobre quais especialidades?",
        answer:
          "O servico cobre clinica geral, pediatria, geriatria e orientacao farmaceutica, disponivel 24h por dia para consultas remotas.",
      },
    ],
  },
  {
    slug: "portabilidade-refinanciamento",
    title: "Portabilidade com Refinanciamento",
    subtitle: "Traga sua divida e saia com dinheiro extra no bolso",
    menuDescription: "Traga sua divida e saia com dinheiro extra no bolso",
    icon: RefreshCw,
    intro:
      "A Portabilidade com Refinanciamento permite que voce transfira seu emprestimo consignado de outra instituicao para a SmartConsig, aproveitando condicoes melhores. Alem de reduzir sua taxa, voce ainda pode liberar um valor extra no ato da operacao.",
    highlight:
      "Reduza sua taxa de juros e libere ate 40% do valor do contrato como troco, tudo em uma unica operacao simplificada.",
    features: [
      {
        icon: Percent,
        title: "Taxa Menor Garantida",
        description:
          "So realizamos a portabilidade se a nova taxa for efetivamente menor que a praticada na sua instituicao atual.",
      },
      {
        icon: CheckCircle,
        title: "Dinheiro Extra (Troco)",
        description:
          "Alem de reduzir a parcela, voce pode liberar um valor adicional que sera creditado diretamente na sua conta.",
      },
      {
        icon: Shield,
        title: "Sem Custo de Transferencia",
        description:
          "A portabilidade e um direito do consumidor garantido pelo Banco Central. Nao ha cobranca de taxas para a transferencia.",
      },
      {
        icon: Clock,
        title: "Processo Automatizado",
        description:
          "Todo o tramite de portabilidade entre as instituicoes e gerenciado pela nossa equipe, sem burocracia para voce.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Envie seu Contrato Atual",
        description:
          "Informe os dados do seu emprestimo atual: banco, taxa, saldo devedor e numero de parcelas restantes.",
      },
      {
        step: "02",
        title: "Receba a Proposta",
        description:
          "Comparamos as condicoes e montamos uma proposta com taxa menor e, se possivel, valor de troco disponivel.",
      },
      {
        step: "03",
        title: "Aceite e Formalize",
        description:
          "Se a proposta for vantajosa, voce aceita digitalmente e nos cuidamos de toda a comunicacao com o banco de origem.",
      },
      {
        step: "04",
        title: "Nova Condicao Ativa",
        description:
          "Apos a finalizacao, o contrato antigo e encerrado e voce passa a usufruir das novas condicoes com a SmartConsig.",
      },
    ],
    faqs: [
      {
        question: "O que e portabilidade de credito?",
        answer:
          "E o direito de transferir seu emprestimo de uma instituicao financeira para outra que ofereca condicoes melhores, como taxas menores ou prazos mais adequados.",
      },
      {
        question: "O que e o refinanciamento com troco?",
        answer:
          "E a possibilidade de, ao fazer a portabilidade, estender o prazo do contrato e liberar um valor extra (troco) que e creditado na sua conta.",
      },
      {
        question: "Meu banco pode recusar a portabilidade?",
        answer:
          "Nao. A portabilidade e um direito do consumidor regulamentado pelo Banco Central. O banco de origem e obrigado a aceitar a transferencia.",
      },
      {
        question: "Quanto tempo leva o processo?",
        answer:
          "O prazo medio e de 5 a 10 dias uteis, dependendo do tempo de resposta do banco de origem para finalizar a transferencia.",
      },
      {
        question: "Posso fazer portabilidade de mais de um contrato?",
        answer:
          "Sim. E possivel portar varios contratos simultaneamente, consolidando tudo em uma unica operacao com condicoes melhores.",
      },
    ],
  },
  {
    slug: "emprestimo-garantia-veiculo",
    title: "Emprestimo com Garantia do Veiculo",
    subtitle: "Use seu carro para conseguir as menores taxas do mercado",
    menuDescription: "Use seu carro para conseguir as menores taxas do mercado",
    icon: Car,
    intro:
      "O Emprestimo com Garantia do Veiculo permite que voce use seu carro ou moto como garantia para acessar valores mais altos e taxas significativamente menores. O veiculo continua com voce durante todo o periodo do emprestimo.",
    highlight:
      "Taxas a partir de 1,49% a.m. e valores de ate 90% da tabela FIPE do veiculo, com prazo de ate 60 meses para pagamento.",
    features: [
      {
        icon: Percent,
        title: "Taxas Imbativeis",
        description:
          "Por ter garantia real, as taxas sao ate 5 vezes menores que as de um emprestimo pessoal convencional.",
      },
      {
        icon: CheckCircle,
        title: "Veiculo Continua com Voce",
        description:
          "Seu carro ou moto permanece em sua posse durante todo o contrato. So existe alienacao fiduciaria no documento.",
      },
      {
        icon: Shield,
        title: "Valores Elevados",
        description:
          "Consiga ate 90% do valor da tabela FIPE do seu veiculo, com limites que podem chegar a R$ 250.000.",
      },
      {
        icon: Clock,
        title: "Aprovacao em 48h",
        description:
          "Processo agil com vistoria digital do veiculo e liberacao do credito em ate 48 horas apos a aprovacao.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Informe seu Veiculo",
        description:
          "Digite a placa do seu veiculo e nosso sistema consulta automaticamente o valor na tabela FIPE e as condicoes disponiveis.",
      },
      {
        step: "02",
        title: "Vistoria Digital",
        description:
          "Envie fotos do veiculo pelo aplicativo para a vistoria remota. Sem necessidade de levar o carro a nenhum local.",
      },
      {
        step: "03",
        title: "Analise e Contrato",
        description:
          "Apos aprovacao da vistoria e analise de credito, voce recebe o contrato para assinatura digital.",
      },
      {
        step: "04",
        title: "Dinheiro Liberado",
        description:
          "O valor e transferido para sua conta em ate 48 horas. Seu veiculo permanece com voce normalmente.",
      },
    ],
    faqs: [
      {
        question: "Quais veiculos sao aceitos como garantia?",
        answer:
          "Carros e motos com ate 15 anos de fabricacao, quitados (sem financiamento ativo) e sem restricoes no documento.",
      },
      {
        question: "O que acontece com meu veiculo?",
        answer:
          "O veiculo permanece integralmente com voce. Apenas e incluida uma alienacao fiduciaria no documento, que e removida ao final do pagamento.",
      },
      {
        question: "Posso quitar antecipadamente?",
        answer:
          "Sim. A quitacao antecipada pode ser feita a qualquer momento com desconto proporcional dos juros, conforme regulamentacao do Banco Central.",
      },
      {
        question: "Qual o valor minimo e maximo do emprestimo?",
        answer:
          "O valor minimo e de R$ 5.000 e o maximo pode chegar a R$ 250.000, limitado a 90% do valor FIPE do veiculo.",
      },
      {
        question: "Preciso ter o veiculo em meu nome?",
        answer:
          "Sim. O veiculo deve estar registrado no nome do solicitante do emprestimo, com a documentacao em dia.",
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
