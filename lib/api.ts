import type { Product } from "./types"

const API_BASE = "https://fakestoreapi.com"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE}/products`)
    if (!response.ok) throw new Error("Failed to fetch products")
    return response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`)
    if (!response.ok) throw new Error("Product not found")
    return response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    throw error
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE}/products/categories`)
    if (!response.ok) throw new Error("Failed to fetch categories")
    return response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}
