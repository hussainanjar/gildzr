"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: "drawer-divider",
    name: "Glidzr Adjustable Drawer Divider",
    description: "Transform any drawer into an organized space with spring-loaded bamboo dividers. Organizers with non-slip silicone pads for kitchen, office, nursery, closet & dresser.",
    rating: 4.6,
    category: "Kitchen & Office",
    features: ["Adjustable spring-loaded design", "Non-slip silicone pads", "Premium bamboo material", "Custom fit for any drawer"],
    amazonUrl: "https://www.amazon.ae/dp/B0FGQ7BSG9",
    images: [
      "/products/drawer-divider/61VGLwIt-gL._AC_SX679__ primary.jpg",
      "/products/drawer-divider/61V-kyjyF-L._AC_SX679_.jpg",
      "/products/drawer-divider/716sPFXyTGL._AC_SX679_.jpg",
      "/products/drawer-divider/716UXSkqhcL._AC_SX679_.jpg",
      "/products/drawer-divider/71IBknqTkmL._AC_SX679_.jpg",
      "/products/drawer-divider/71PxfWjTlIL._AC_SX679_.jpg",
      "/products/drawer-divider/71s7ZwCEBAL._AC_SX679_.jpg"
    ]
  },
  {
    id: "makeup-organizer",
    name: "360° Rotating Makeup Organizer",
    description: "A premium acrylic rotating organizer that holds all your beauty essentials. Clear design lets you see everything at a glance with easy access storage.",
    rating: 4.6,
    category: "Beauty & Personal Care",
    features: ["360° rotating design", "Clear acrylic material", "Multiple compartments", "Large capacity storage"],
    amazonUrl: "https://www.amazon.ae/dp/B0FGQ52YFP",
    images: [
      "/products/makeup-organizer/617c6HbPmeL._AC_SX679_.jpg",
      "/products/makeup-organizer/61t6I4Yru8L._AC_SX679_.jpg",
      "/products/makeup-organizer/71-PIuAbveL._AC_SX679_.jpg",
      "/products/makeup-organizer/717qYao5rpL._AC_SX679_.jpg",
      "/products/makeup-organizer/71Gw47nlzjL._AC_SX679_.jpg",
      "/products/makeup-organizer/71uzquYxgdL._AC_SX679_.jpg",
      "/products/makeup-organizer/71xE7i-8XzL._AC_SX679_.jpg"
    ]
  },
  {
    id: "mop-broom-holder",
    name: "Wall-Mounted Tool Organizer",
    description: "Keep your cleaning tools organized and easily accessible. Strong adhesive mounting requires no drilling or permanent installation for mops, brooms and cleaning supplies.",
    rating: 4.5,
    category: "Cleaning & Storage",
    features: ["5 positions, 6 hooks", "Strong adhesive mounting", "No drilling required", "Holds up to 11 tools"],
    amazonUrl: "https://www.amazon.ae/dp/B0FGQDMYZ8",
    images: [
      "/products/mop-broom-holder/7147O-X+i5L._AC_SX679_primary.jpg",
      "/products/mop-broom-holder/61hp0pEqgiL._AC_SX679_.jpg",
      "/products/mop-broom-holder/713Y7gj+SOL._AC_SX679_.jpg",
      "/products/mop-broom-holder/71cW0olEBJL._AC_SX679_.jpg",
      "/products/mop-broom-holder/71do4Jkw8+L._AC_SX679_.jpg",
      "/products/mop-broom-holder/71HEHzkODuL._AC_SX679_.jpg",
      "/products/mop-broom-holder/71ruEzBLKXL._AC_SX679_.jpg"
    ]
  },
  {
    id: "underwear-organizer",
    name: "4-Piece Undergarment Organizer Set",
    description: "Organize your intimates with these breathable fabric storage boxes. Foldable design saves space when not in use, perfect for underwear, bras, and socks.",
    rating: 4.0,
    category: "Bedroom & Closet",
    features: ["Set of 4 foldable boxes", "Breathable non-woven fabric", "Perfect for underwear, bras, socks", "Space-saving foldable design"],
    amazonUrl: "https://www.amazon.ae/dp/B0DSSY9VLL?th=1",
    images: [
      "/products/underwear-cloth-organizer/61u4OR4GLxL._AC_SX679_primary.jpg",
      "/products/underwear-cloth-organizer/51S0Ii+2dbL._AC_SX679_.jpg",
      "/products/underwear-cloth-organizer/61+smakOVjL._AC_SX679_.jpg",
      "/products/underwear-cloth-organizer/618lAocL+KL._AC_SX679_.jpg",
      "/products/underwear-cloth-organizer/61x-rnUmiVL._AC_SX679_.jpg",
      "/products/underwear-cloth-organizer/71jKsV1xDRL._AC_SX679_.jpg",
      "/products/underwear-cloth-organizer/71u0T4gLKxL._AC_SX679_.jpg"
    ]
  },
  {
    id: "cutting-board",
    name: "HappyHubb Double-Sided Cutting Board",
    description: "Professional-grade 304 stainless steel cutting board with eco-friendly wheat straw backing. Food-grade, hygienic, durable, and easy to clean.",
    rating: 4.6,
    category: "Kitchen Essentials",
    features: ["304 stainless steel", "Double-sided functionality", "16.1″ × 12.2″ size", "Eco-friendly wheat straw"],
    amazonUrl: "https://www.amazon.ae/dp/B0DHXNZ81Z",
    images: [
      "/products/cutting-board/71XosLb4d9L._AC_SX679_ primary.jpg",
      "/products/cutting-board/61aQeA8jdZL._AC_SX679_.jpg",
      "/products/cutting-board/61XIL-DZXiL._AC_SX679_.jpg",
      "/products/cutting-board/71dfcpI08NL._AC_SX679_.jpg",
      "/products/cutting-board/71kVU2-eXTL._AC_SX679_.jpg",
      "/products/cutting-board/71y7xlaJLXL._AC_SX679_.jpg"
    ]
  }
];

const ImageCarousel = ({ images, productName }: { images: string[], productName: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 p-8">
        <Image
          src={images[currentImageIndex]}
          alt={`${productName} - Image ${currentImageIndex + 1}`}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex 
                  ? 'border-blue-600 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="ml-1 text-sm text-gray-600">{rating}</span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Glidzr"
                width={120}
                height={40}
                className="mx-auto mb-8"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Organize.
              <br />
              <span className="text-blue-600">Simplify.</span>
              <br />
              Live Better.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your home with our curated collection of premium organization solutions. 
              From kitchen essentials to bedroom storage, discover products that bring order to your space.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
              ⭐ Trusted by thousands across the UAE
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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
              <div
                key={product.id}
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
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Glidzr?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Carefully curated products that combine durability with elegant design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable shipping through Amazon.ae across the UAE</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Loved</h3>
                <p className="text-gray-600">Thousands of satisfied customers across the UAE trust our products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Glidzr"
              width={100}
              height={33}
              className="mx-auto mb-6 invert opacity-90"
            />
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your home with Glidzr&apos;s premium organization solutions. 
              Bringing order and elegance to every space.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Glidzr. All rights reserved. | Shop on Amazon.ae
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}