import { Product } from '@/types/product';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { StarRating } from '@/components/ui/StarRating';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-12 lg:gap-16`}
    >
      {/* Product Image Carousel */}
      <div className="flex-1 max-w-lg">
        <ImageCarousel images={product.images} productName={product.name} />
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-6">
        <div>
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {product.category}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="space-y-4">
          <StarRating rating={product.rating} />
          
          <ul className="space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Shop on Amazon.ae</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};
