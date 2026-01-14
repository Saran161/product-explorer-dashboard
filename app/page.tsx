import type { Metadata } from "next"
import ProductListing from "@/components/product-listing"

export const metadata: Metadata = {
  title: "Product Explorer - Dashboard",
  description: "Browse and manage your favorite products",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ProductListing />
    </main>
  )
}
