'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product/ProductCard'
import { useCartStore } from '@/lib/store/cart-store'
import { getRelatedProducts } from '@/lib/mock-data'
import { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore((state) => state.addToCart)
  const relatedProducts = getRelatedProducts(product)

  const images = [product.src, product.src, product.src] // Using same image for demo

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleQuantityChange = (value: number) => {
    if (value < 1) return
    setQuantity(value)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <nav className="flex items-center gap-2 text-sm text-text-light">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary capitalize">{product.category}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary">{product.title}</span>
        </nav>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-border">
              <Image
                src={images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === index 
                      ? 'border-accent' 
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-accent">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-text-light">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-text-light line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-accent text-white px-2 py-1 rounded text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-text-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-text-light">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-background-card text-text text-sm rounded-full border border-border"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Dimensions</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary">Width</div>
                    <div className="text-text-light">{product.dimensions.width}cm</div>
                  </div>
                  <div className="text-center p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary">Height</div>
                    <div className="text-text-light">{product.dimensions.height}cm</div>
                  </div>
                  <div className="text-center p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary">Depth</div>
                    <div className="text-text-light">{product.dimensions.depth}cm</div>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="space-y-4 pt-6 border-t border-border">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-4 py-2 hover:bg-background-card transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-4 py-2 hover:bg-background-card transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-secondary hover:bg-secondary-light"
                >
                  Add to Cart ({quantity})
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-text-light">Dhaka & Chittagong</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">2-Year Warranty</div>
                  <div className="text-text-light">Quality Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">14-Day Returns</div>
                  <div className="text-text-light">Easy Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}