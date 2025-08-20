import Image from "next/image";

export const Footer = () => {
  return (
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
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="mailto:info@glidzr.com" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Glidzr. All rights reserved. | Shop on Amazon.ae
          </div>
        </div>
      </div>
    </footer>
  );
};
