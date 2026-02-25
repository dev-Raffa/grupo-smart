import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product/product-hero"
import ProductIntro from "@/components/product/product-intro"
import ProductFeatures from "@/components/product/product-features"
import ProductSteps from "@/components/product/product-steps"
import ProductFaqs from "@/components/product/product-faqs"
import ProductCta from "@/components/product/product-cta"
import { getAllProductSlugs, getProductBySlug } from "@/data/products"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: "Produto nao encontrado | SmartConsig" }
  }

  return {
    title: `${product.title} | SmartConsig`,
    description: product.subtitle,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ProductHero title={product.title} subtitle={product.subtitle} />
        <ProductIntro intro={product.intro} highlight={product.highlight} />
        <ProductFeatures features={product.features} />
        <ProductSteps steps={product.steps} />
        <ProductFaqs faqs={product.faqs} title={product.title} />
        <ProductCta />
      </main>
      <Footer />
    </>
  )
}
