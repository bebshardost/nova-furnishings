'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store/cart-store'
import { Product } from '@/types'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking cart button
    e.stopPropagation()
    addToCart(product)
  }

  const isListView = className?.includes('flex-row')

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className={cn('group card overflow-hidden hover:shadow-lg transition-all duration-300', className)}>
        <div className={cn(
          'relative overflow-hidden',
          isListView ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
        )}>
          <Image
            src={product.src}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
        </div>

        <div className={cn('p-4', isListView && 'flex-1 flex flex-col justify-between')}>
          <div>
            <h3 className="font-semibold text-text mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-text-light mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-text-light line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <div className="flex text-accent">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs text-text-light">({product.reviewCount})</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-secondary hover:bg-secondary-light"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  )
}