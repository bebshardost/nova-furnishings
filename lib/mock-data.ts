import { CartItem, Product } from '@/types'
import Product1 from '@/public/assets/images/product-1.png'
import Product2 from '@/public/assets/images/product-2.png'
import Product3 from '@/public/assets/images/product-3.png'
import Product4 from '@/public/assets/images/product-4.png'
import Product5 from '@/public/assets/images/product-5.png'
import Product6 from '@/public/assets/images/product-6.png'
import Product7 from '@/public/assets/images/product-7.png'
import Product8 from '@/public/assets/images/product-8.png'
import Vase from '@/public/assets/images/vase.png'
import Plate from '@/public/assets/images/plates.png'
import Chair from '@/public/assets/images/chair.png'
import FurnitureImg from '@/public/assets/images/furniture-image.png'

export const products: Product[] = [
  {
    id: '1',
    src: Product1,
    title: 'Modern Chair',
    price: 49.99,
    originalPrice: 69.99,
    category: 'chairs',
    tags: ['modern', 'living room', 'best-seller'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    features: ['Ergonomic design', 'Easy assembly', 'Sustainable materials'],
    materials: ['Solid Wood', 'Premium Fabric'],
    description: 'A beautifully crafted modern chair that combines comfort with contemporary design. Perfect for your living room or office space.',
    dimensions: {
      width: 55,
      height: 85,
      depth: 60
    }
  },
  {
    id: '2',
    src: Product2,
    title: 'Elegant Sofa',
    price: 199.99,
    category: 'sofas',
    tags: ['elegant', 'living room', 'premium'],
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    features: ['3-seater', 'Removable covers', 'Premium cushioning'],
    materials: ['Hardwood Frame', 'Linen Fabric'],
    description: 'Transform your living space with this elegant 3-seater sofa. Designed for both style and ultimate comfort.',
    dimensions: {
      width: 210,
      height: 85,
      depth: 95
    }
  },
  {
    id: '3',
    src: Product3,
    title: 'Wooden Table',
    price: 89.99,
    originalPrice: 119.99,
    category: 'tables',
    tags: ['wooden', 'dining', 'sale'],
    inStock: true,
    rating: 4.3,
    reviewCount: 156,
    features: ['Extendable', 'Scratch resistant', 'Easy to clean'],
    materials: ['Solid Oak'],
    description: 'A versatile wooden table that extends to accommodate guests. Perfect for family dinners and gatherings.',
    dimensions: {
      width: 160,
      height: 75,
      depth: 90
    }
  },
  {
    id: '4',
    src: Product4,
    title: 'Luxury Lamp',
    price: 39.99,
    category: 'lighting',
    tags: ['luxury', 'decor', 'modern'],
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
    features: ['Dimmable', 'LED', 'Energy efficient'],
    materials: ['Brass', 'Glass'],
    description: 'Add a touch of luxury to any room with this beautifully designed dimmable LED lamp.',
    dimensions: {
      width: 25,
      height: 45,
      depth: 25
    }
  },
  {
    id: '5',
    src: Product5,
    title: 'Cozy Bed',
    price: 299.99,
    category: 'beds',
    tags: ['cozy', 'bedroom', 'premium'],
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    features: ['Storage drawers', 'Headboard', 'Easy assembly'],
    materials: ['Solid Wood', 'Premium Fabric'],
    description: 'Wake up refreshed with our cozy bed featuring built-in storage and a comfortable headboard.',
    dimensions: {
      width: 180,
      height: 110,
      depth: 210
    }
  },
  {
    id: '6',
    src: Product6,
    title: 'Stylish Shelf',
    price: 59.99,
    category: 'storage',
    tags: ['stylish', 'storage', 'modern'],
    inStock: true,
    rating: 4.4,
    reviewCount: 94,
    features: ['Wall mounted', 'Adjustable shelves', 'Easy installation'],
    materials: ['Metal', 'Engineered Wood'],
    description: 'Maximize your space with this stylish and functional wall-mounted shelf unit.',
    dimensions: {
      width: 120,
      height: 180,
      depth: 30
    }
  },
  {
    id: '7',
    src: Product7,
    title: 'Minimalist Clock',
    price: 19.99,
    category: 'decor',
    tags: ['minimalist', 'wall decor', 'affordable'],
    inStock: true,
    rating: 4.2,
    reviewCount: 178,
    features: ['Silent movement', 'Battery operated', 'Sleek design'],
    materials: ['Wood', 'Metal'],
    description: 'A minimalist clock that adds elegance to any wall without the distraction of ticking sounds.',
    dimensions: {
      width: 40,
      height: 40,
      depth: 5
    }
  },
  {
    id: '8',
    src: Product8,
    title: 'Classic Rug',
    price: 79.99,
    originalPrice: 99.99,
    category: 'rugs',
    tags: ['classic', 'living room', 'sale'],
    inStock: true,
    rating: 4.5,
    reviewCount: 112,
    features: ['Non-slip', 'Washable', 'Durable'],
    materials: ['Wool', 'Cotton'],
    description: 'This classic rug brings warmth and style to your living space with its durable and washable design.',
    dimensions: {
      width: 160,
      height: 230,
      depth: 2
    }
  },
  {
    id: '9',
    src: Vase,
    title: 'Ceramic Vase',
    price: 34.99,
    category: 'decor',
    tags: ['ceramic', 'decor', 'wellness'],
    inStock: true,
    rating: 4.3,
    reviewCount: 87,
    features: ['Handcrafted', 'Waterproof', 'Versatile'],
    materials: ['Ceramic'],
    description: 'A beautifully handcrafted ceramic vase that adds an artistic touch to any room.',
    dimensions: {
      width: 20,
      height: 35,
      depth: 20
    }
  },
  {
    id: '10',
    src: Plate,
    title: 'Dining Plate Set',
    price: 45.99,
    category: 'kitchen',
    tags: ['kitchen', 'dining', 'set'],
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    features: ['6-piece set', 'Dishwasher safe', 'Microwave safe'],
    materials: ['Porcelain'],
    description: 'Elevate your dining experience with this elegant 6-piece porcelain plate set.',
    dimensions: {
      width: 26,
      height: 4,
      depth: 26
    }
  },
  {
    id: '11',
    src: Chair,
    title: 'Accent Chair',
    price: 129.99,
    category: 'chairs',
    tags: ['accent', 'living room', 'premium'],
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    features: ['Comfortable', 'Stylish', 'Durable'],
    materials: ['Wood', 'Velvet'],
    description: 'Make a statement with this luxurious accent chair featuring premium velvet upholstery.',
    dimensions: {
      width: 65,
      height: 85,
      depth: 70
    }
  },
  {
    id: '12',
    src: FurnitureImg,
    title: 'Console Table',
    price: 149.99,
    category: 'tables',
    tags: ['console', 'entryway', 'modern'],
    inStock: true,
    rating: 4.4,
    reviewCount: 78,
    features: ['Slim design', 'Storage shelf', 'Easy assembly'],
    materials: ['Metal', 'Glass'],
    description: 'A sleek console table perfect for entryways, featuring a modern design with useful storage.',
    dimensions: {
      width: 120,
      height: 80,
      depth: 35
    }
  }
]

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'chairs', name: 'Chairs', count: products.filter(p => p.category === 'chairs').length },
  { id: 'sofas', name: 'Sofas', count: products.filter(p => p.category === 'sofas').length },
  { id: 'tables', name: 'Tables', count: products.filter(p => p.category === 'tables').length },
  { id: 'beds', name: 'Beds', count: products.filter(p => p.category === 'beds').length },
  { id: 'storage', name: 'Storage', count: products.filter(p => p.category === 'storage').length },
  { id: 'lighting', name: 'Lighting', count: products.filter(p => p.category === 'lighting').length },
  { id: 'decor', name: 'Decor', count: products.filter(p => p.category === 'decor').length },
  { id: 'rugs', name: 'Rugs', count: products.filter(p => p.category === 'rugs').length },
  { id: 'kitchen', name: 'Kitchen', count: products.filter(p => p.category === 'kitchen').length }
]

export const bestSellers = products.filter(product => 
  product.tags.includes('best-seller') || product.rating >= 4.5
).slice(0, 8)

// Helper functions
export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products
  return products.filter(product => product.category === category)
}

export const getRelatedProducts = (product: Product, limit = 4) => {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}

// Add to existing mock data

export interface Order {
  id: string
  customer: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    district: string
  }
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'cod' | 'bkash' | 'nagad'
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: string
  updatedAt: string
  notes?: string
}

export interface AdminUser {
  id: string
  username: string
  password: string // In real app, this would be hashed
  name: string
  role: 'admin' | 'manager'
}

// Mock Orders
export const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: {
      name: 'Rahim Ahmed',
      email: 'rahim@gmail.com',
      phone: '01512345678',
      address: '123 Green Road',
      city: 'Dhaka',
      district: 'dhaka'
    },
    items: [
      {
        id: '1',
        src: Product1,
        title: 'Modern Chair',
        price: 49.99,
        category: 'chairs',
        tags: ['modern', 'living room'],
        inStock: true,
        rating: 4.5,
        reviewCount: 128,
        features: ['Ergonomic design', 'Easy assembly'],
        materials: ['Wood', 'Fabric'],
        quantity: 2
      }
    ],
    total: 99.98,
    status: 'confirmed',
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    notes: 'Please deliver before 6 PM'
  },
  {
    id: 'ORD-002',
    customer: {
      name: 'Fatima Begum',
      email: 'fatima@yahoo.com',
      phone: '01787654321',
      address: '456 Lake View',
      city: 'Chittagong',
      district: 'chittagong'
    },
    items: [
      {
        id: '2',
        src: Product2,
        title: 'Elegant Sofa',
        price: 199.99,
        category: 'sofas',
        tags: ['elegant', 'living room'],
        inStock: true,
        rating: 4.8,
        reviewCount: 89,
        features: ['3-seater', 'Removable covers'],
        materials: ['Wood', 'Linen'],
        quantity: 1
      },
      {
        id: '4',
        src: Product4,
        title: 'Luxury Lamp',
        price: 39.99,
        category: 'lighting',
        tags: ['luxury', 'decor'],
        inStock: true,
        rating: 4.6,
        reviewCount: 203,
        features: ['Dimmable', 'LED'],
        materials: ['Metal', 'Glass'],
        quantity: 1
      }
    ],
    total: 239.98,
    status: 'shipped',
    paymentMethod: 'bkash',
    paymentStatus: 'paid',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: 'ORD-003',
    customer: {
      name: 'Kamal Hossain',
      email: 'kamal@gmail.com',
      phone: '01911223344',
      address: '789 Hill Road',
      city: 'Sylhet',
      district: 'sylhet'
    },
    items: [
      {
        id: '3',
        src: Product3,
        title: 'Wooden Table',
        price: 89.99,
        originalPrice: 119.99,
        category: 'tables',
        tags: ['wooden', 'dining'],
        inStock: true,
        rating: 4.3,
        reviewCount: 156,
        features: ['Extendable', 'Scratch resistant'],
        materials: ['Solid Oak'],
        quantity: 1
      }
    ],
    total: 89.99,
    status: 'delivered',
    paymentMethod: 'nagad',
    paymentStatus: 'paid',
    createdAt: '2024-01-13T16:45:00Z',
    updatedAt: '2024-01-14T11:30:00Z'
  },
  {
    id: 'ORD-004',
    customer: {
      name: 'Ayesha Akter',
      email: 'ayesha@hotmail.com',
      phone: '01855667788',
      address: '321 River Side',
      city: 'Dhaka',
      district: 'dhaka'
    },
    items: [
      {
        id: '5',
        src: Product5,
        title: 'Cozy Bed',
        price: 299.99,
        category: 'beds',
        tags: ['cozy', 'bedroom'],
        inStock: true,
        rating: 4.7,
        reviewCount: 67,
        features: ['Storage drawers', 'Headboard'],
        materials: ['Wood', 'Fabric'],
        quantity: 1
      }
    ],
    total: 299.99,
    status: 'pending',
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: '2024-01-16T08:15:00Z',
    updatedAt: '2024-01-16T08:15:00Z'
  }
]

// Admin Users
export const adminUsers: AdminUser[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123', // Simple password for demo
    name: 'System Administrator',
    role: 'admin'
  },
  {
    id: '2',
    username: 'manager',
    password: 'manager123',
    name: 'Store Manager',
    role: 'manager'
  }
]

// Analytics Data
// Add to existing analytics object
export const analytics = {
  totalSales: orders.reduce((sum, order) => sum + order.total, 0),
  totalOrders: orders.length,
  pendingOrders: orders.filter(order => order.status === 'pending').length,
  deliveredOrders: orders.filter(order => order.status === 'delivered').length,
  monthlySales: [
    { month: 'Jan', sales: 12500 },
    { month: 'Feb', sales: 18900 },
    { month: 'Mar', sales: 15600 },
    { month: 'Apr', sales: 23400 },
    { month: 'May', sales: 19800 },
    { month: 'Jun', sales: 28700 }
  ],
  popularProducts: products.slice(0, 5).map(product => ({
    name: product.title,
    sales: Math.floor(Math.random() * 100) + 20
  })),
  customerStats: {
    totalCustomers: 156,
    newCustomers: 24,
    returningCustomers: 89
  },
  revenueByCategory: [
    { category: 'chairs', revenue: 12450 },
    { category: 'sofas', revenue: 8920 },
    { category: 'tables', revenue: 6780 },
    { category: 'beds', revenue: 4230 },
    { category: 'lighting', revenue: 3150 },
    { category: 'decor', revenue: 2870 }
  ]
}

// Helper functions
export const getOrderById = (id: string) => {
  return orders.find(order => order.id === id)
}

export const getOrdersByStatus = (status: Order['status']) => {
  return orders.filter(order => order.status === status)
}

export const updateOrderStatus = (orderId: string, status: Order['status']) => {
  const order = orders.find(order => order.id === orderId)
  if (order) {
    order.status = status
    order.updatedAt = new Date().toISOString()
  }
  return order
}

export const verifyAdminLogin = (username: string, password: string) => {
  return adminUsers.find(user => 
    user.username === username && user.password === password
  )
}