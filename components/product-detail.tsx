"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useFavoritesStore } from "@/lib/store"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

interface Props {
  product: Product
}

export default function ProductDetail({ product }: Props) {
  const { isFavorite, toggleFavorite } = useFavoritesStore()
  const favorite = isFavorite(product.id)

  return (
    <main className="min-h-screen bg-background">
      <div className="p-4 md:p-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-6 gap-2 bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="flex items-center justify-center rounded-lg bg-muted p-6">
            <div className="relative h-96 w-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <Card className="flex flex-col gap-6 p-6">
            {/* Category */}
            <div className="inline-flex w-fit rounded-full bg-secondary px-3 py-1">
              <span className="text-sm font-medium text-secondary-foreground capitalize">{product.category}</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">{product.title}</h1>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 text-4xl font-bold text-primary">${product.price.toFixed(2)}</div>

            {/* Rating */}
            {product.rating && (
              <div className="flex gap-2">
                <span className="text-sm font-medium">Rating:</span>
                <span className="text-sm text-muted-foreground">
                  {product.rating.rate} / 5 ({product.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2 border-t border-border pt-6">
              <h2 className="font-semibold">Description</h2>
              <p className="leading-relaxed text-muted-foreground">{product.description}</p>
            </div>

            {/* CTA */}
            <div className="flex gap-3 border-t border-border pt-6">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button
                variant={favorite ? "default" : "outline"}
                size="lg"
                onClick={() => toggleFavorite(product.id)}
                className="gap-2"
              >
                <Heart className={`h-5 w-5 ${favorite ? "fill-current" : ""}`} />
                {favorite ? "Favorited" : "Add to Favorites"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
