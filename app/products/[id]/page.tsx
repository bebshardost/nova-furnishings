import { notFound } from 'next/navigation'
import ProductDetails from '@/components/product/ProductDetails'
import { getProductById } from '@/lib/mock-data'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found | Nova Furnishings'
    }
  }

  return {
    title: `${product.title} | Nova Furnishings`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}