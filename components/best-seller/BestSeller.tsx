import ProductCard from '@/components/product/ProductCard'
import { bestSellers } from '@/lib/mock-data'

export default function BestSeller() {
  return (
    <section className="container-custom py-16 md:py-24 border-b border-border">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Shop Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}