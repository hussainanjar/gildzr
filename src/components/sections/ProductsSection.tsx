import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully selected products that combine functionality with elegant design
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
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
