"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useFavoritesStore } from "@/lib/store"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { isFavorite, toggleFavorite } = useFavoritesStore()
  const favorite = isFavorite(product.id)

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {/* Image */}
      <Link href={`/products/${product.id}`} className="relative h-48 w-full bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Category */}
        <div className="inline-flex w-fit rounded-full bg-secondary px-2 py-1">
          <span className="text-xs font-medium text-secondary-foreground capitalize">{product.category}</span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.id}`} className="font-semibold hover:underline line-clamp-2">
          {product.title}
        </Link>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          <Button
            variant={favorite ? "default" : "outline"}
            size="icon"
            onClick={() => toggleFavorite(product.id)}
            className="h-8 w-8"
          >
            <Heart className={`h-4 w-4 ${favorite ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
