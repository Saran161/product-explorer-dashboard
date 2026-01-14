import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/api"
import ProductDetail from "@/components/product-detail"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params
    const product = await getProductById(id)
    return {
      title: product.title,
      description: product.description.substring(0, 160),
    }
  } catch {
    return { title: "Product Not Found" }
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params

  try {
    const product = await getProductById(id)
    return <ProductDetail product={product} />
  } catch {
    notFound()
  }
}
