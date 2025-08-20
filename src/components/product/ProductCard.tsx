import { Product } from '@/types/product';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { StarRating } from '@/components/ui/StarRating';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } items-center`}
      >
        {/* Product Image Carousel */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="relative">
            <ImageCarousel images={product.images} productName={product.name} />
            {/* Best Seller Badge */}
            <div className="absolute -top-2 -left-2">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform -rotate-12">
                🏆 Best Seller
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 p-8 lg:p-12 space-y-6">
          <div>
            <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-blue-200">
              {product.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Rating and Social Proof */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">(2,847 reviews)</span>
            </div>
            
            {/* Customer Review Testimonial */}
            {product.review && (
              <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {product.review.author.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm italic">
                      "{product.review.text}"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      - {product.review.author} {'⭐'.repeat(product.review.rating)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FREE Shipping
            </div>
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              30-Day Returns
            </div>
            <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-full border border-purple-200">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure Payment
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>🛒 Shop on Amazon.ae</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
