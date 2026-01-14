import { create } from "zustand"

interface FavoritesStore {
  favorites: Set<number>
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: new Set<number>(),
  toggleFavorite: (productId: number) => {
    const { favorites } = get()
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    set({ favorites: newFavorites })
  },
  isFavorite: (productId: number) => {
    return get().favorites.has(productId)
  },
}))
