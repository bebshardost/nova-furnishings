> 💼 A project by [BebsharDost](https://bebshardost.com) - Your Digital Dost

# 🛋️ Nova Furnishings - Modern Furniture E-commerce

A beautiful, modern furniture e-commerce store built with Next.js 15, TypeScript, and Tailwind CSS. Features a complete admin dashboard for store management.

![Nova Furnishings](https://via.placeholder.com/1200x600/8A9B69/FFFFFF?text=Nova+Furnishings)

## 🚀 Live Demo

**Store Frontend:** [your-domain.com](https://your-domain.com)  
**Admin Dashboard:** [your-domain.com/admin](https://your-domain.com/admin)

### Demo Credentials
```
Username: admin
Password: admin123
```

## ✨ Features

### 🛍️ Customer Features
- **Modern Product Catalog** - Browse furniture by categories
- **Advanced Product Search** - Filter by price, category, ratings
- **Product Details** - Comprehensive product information with galleries
- **Shopping Cart** - Add/remove items with quantity management
- **Bangladeshi Payment Options** - COD, bKash, Nagad integration
- **Responsive Design** - Mobile-first approach
- **Fast Performance** - Next.js 15 with App Router

### 👨‍💼 Admin Features
- **Dashboard Analytics** - Sales metrics and business insights
- **Product Management** - Full CRUD operations for products
- **Order Management** - Process and track orders
- **Customer Management** - View customer data and order history
- **Inventory Management** - Stock tracking and status
- **Sales Reports** - Revenue analytics and popular products

### 🛠️ Technical Features
- **Next.js 15** - Latest App Router with React 18
- **TypeScript** - Full type safety
- **Tailwind CSS** - Modern utility-first styling
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icons
- **Mock Data** - No backend required for demo

## 🏗️ Project Structure

```
nova-furnishings/
├── app/                    # Next.js 15 App Router
│   ├── admin/             # Admin dashboard pages
│   ├── cart/              # Shopping cart pages
│   ├── checkout/          # Checkout process
│   ├── products/          # Product listing & details
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── admin/             # Admin-specific components
│   ├── ui/                # Base UI components
│   └── [feature]/         # Feature-based components
├── lib/                   # Utilities and configurations
│   ├── store/             # Zustand state stores
│   ├── mock-data.ts       # Product and order data
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript type definitions
└── assets/               # Static images and icons
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nova-furnishings.git
   cd nova-furnishings
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local`:
   ```env
   NEXT_PUBLIC_USE_MOCK_DATA=true
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Customer Facing
- **Homepage** (`/`) - Featured products and collections
- **Product Listing** (`/products`) - Filterable product grid
- **Product Details** (`/products/[id]`) - Individual product pages
- **Shopping Cart** (`/cart`) - Cart management
- **Checkout** (`/checkout`) - Order completion

### Admin Dashboard
- **Admin Login** (`/admin`) - Secure admin access
- **Dashboard** (`/admin/dashboard`) - Business overview
- **Products** (`/admin/products`) - Product catalog management
- **Orders** (`/admin/orders`) - Order processing
- **Customers** (`/admin/customers`) - Customer database
- **Analytics** (`/admin/analytics`) - Sales reports

## 🎨 Design System

### Color Palette
- **Primary**: `#2A2A2A` (Deep Charcoal)
- **Secondary**: `#8A9B69` (Sage Green)
- **Accent**: `#C46D5E` (Terracotta)
- **Background**: `#F8F5F2` (Cream)
- **Border**: `#D3CEC4` (Taupe)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary, Secondary, Outline, Ghost variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Accessible input fields with focus states

## 💳 Payment Integration

### Supported Methods (Bangladesh)
1. **Cash on Delivery (COD)** - Pay when delivered
2. **bKash** - Mobile financial service
3. **Nagad** - Digital payment platform

### Payment Flow
- Customer selects payment method
- Instructions displayed based on selection
- Order confirmation with tracking

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### State Management
Uses **Zustand** for lightweight state management:
- `useCartStore` - Shopping cart functionality
- `useAdminStore` - Admin authentication and data

### Data Management
Currently uses **mock data** for demonstration. Ready for database integration with:
- Products catalog
- Customer orders
- Admin users
- Analytics data

## 📈 Admin Dashboard Features

### Products Management
- View all products with search and filters
- Add/edit product information
- Manage inventory and pricing
- Product images and descriptions

### Orders Management
- Process orders through status workflow
- Update order status (Pending → Confirmed → Shipped → Delivered)
- View customer information and order details
- Payment status tracking

### Analytics & Reports
- Sales performance metrics
- Revenue by category
- Popular products tracking
- Customer insights and behavior

## 🔒 Security Notes

### Current Implementation (Demo)
- Simple username/password authentication for admin
- Mock data storage in browser localStorage
- No sensitive customer data in demo

### Production Ready Upgrades
- Implement proper authentication (Auth.js)
- Database integration (PostgreSQL/MongoDB)
- Secure payment gateway integration
- Data encryption and privacy compliance

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

### Environment Variables for Production
```env
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=your_production_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@novafurnishings.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/nova-furnishings/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/nova-furnishings/discussions)

## 🙏 Acknowledgments

- Design inspiration from modern furniture brands
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach
- Lucide for beautiful icons

---

**Built with ❤️ for the modern furniture e-commerce experience**
```