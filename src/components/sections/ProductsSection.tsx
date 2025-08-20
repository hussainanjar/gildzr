import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🏆 FEATURED PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Our Best-Selling Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover organization solutions trusted by thousands of customers. 
            Each product is carefully selected for quality, functionality, and customer satisfaction.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>2,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span>4.8★ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};