import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
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
  );
};
