"use client"

import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
