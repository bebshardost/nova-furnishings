'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface CartToastProps {
  productName: string
  productImage: string
  productPrice: number
  onViewCart: () => void
}

export function CartToast({ 
  productName, 
  productImage, 
  productPrice,
  onViewCart 
}: CartToastProps) {
  return (
    <div className="flex items-center gap-3 min-w-[280px] max-w-[380px]">
      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-background-card">
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0 pr-2">
        <p className="text-sm font-semibold truncate text-foreground">
          {productName}
        </p>
        <p className="text-xs text-muted-foreground">
          ${productPrice.toFixed(2)}
        </p>
      </div>
      <Button 
        size="sm" 
        onClick={onViewCart}
        className="bg-accent hover:bg-accent-light text-white text-xs whitespace-nowrap flex-shrink-0"
      >
        View Cart
      </Button>
    </div>
  )
}