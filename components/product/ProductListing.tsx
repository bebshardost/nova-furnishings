'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/product/ProductCard'
import { products, categories, getProductsByCategory } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Filter, Grid, List, X } from 'lucide-react'

type SortOption = 'default' | 'price-low' | 'price-high' | 'rating' | 'name'

export default function ProductListing() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'all'
  
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [showFilters, setShowFilters] = useState(false)

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
    <div className="container-custom py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 md:mb-8 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
          {currentCategory.name}
        </h1>
        <p className="text-sm sm:text-base text-text-light">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden px-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Sidebar Filters */}
        <div className={`
          lg:w-64 flex-shrink-0
          ${showFilters ? 'block' : 'hidden lg:block'}
        `}>
          <div className="card p-4 sm:p-5 md:p-6 lg:sticky lg:top-24 mx-2 lg:mx-0">
            {/* Mobile Filter Header */}
            <div className="flex items-center justify-between mb-4 lg:mb-0">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
                className="lg:hidden"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-6 mt-4 lg:mt-4">
              <h4 className="font-medium text-sm text-text-light mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    className={`block text-sm hover:text-secondary transition-colors ${
                      category === cat.id ? 'text-secondary font-medium' : 'text-text'
                    }`}
                    onClick={() => setShowFilters(false)}
                  >
                    {cat.name} ({cat.count})
                  </a>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-4">
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
                  className="w-full accent-secondary"
                />
              </div>
            </div>

            {/* Mobile Apply Filters Button */}
            <Button
              onClick={() => setShowFilters(false)}
              className="w-full lg:hidden bg-secondary hover:bg-secondary-light mt-4"
            >
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 px-2 lg:px-0">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
              >
                <option value="default">Default</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg overflow-hidden w-fit">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Product Count */}
            <p className="text-xs sm:text-sm text-text-light">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-light text-base sm:text-lg mb-4">
                No products found matching your criteria.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
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
              ${viewMode === 'grid' 
                ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6' 
                : 'space-y-4 sm:space-y-5 md:space-y-6'
              }
            `}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}