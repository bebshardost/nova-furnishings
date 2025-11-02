'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/product/ProductCard'
import { products, categories, getProductsByCategory } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Filter, Grid, List } from 'lucide-react'

type SortOption = 'default' | 'price-low' | 'price-high' | 'rating' | 'name'

export default function ProductListing() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'all'
  
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  const filteredProducts = useMemo(() => {
    let filtered = getProductsByCategory(category)
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating)
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return filtered
    }
  }, [category, sortBy, priceRange])

  const currentCategory = categories.find(cat => cat.id === category) || categories[0]

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          {currentCategory.name}
        </h1>
        <p className="text-text-light">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="card p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-text-light mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    className={`block text-sm hover:text-secondary transition-colors ${
                      category === cat.id ? 'text-secondary font-medium' : 'text-text'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </a>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-text-light mb-3">Price Range</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="default">Default</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="text-sm text-text-light">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-light text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setPriceRange([0, 500])
                  setSortBy('default')
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className={`
              gap-6
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'space-y-6'
              }
            `}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === 'list' ? 'flex flex-row' : ''}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}