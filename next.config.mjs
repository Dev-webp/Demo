/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','aceternity.com', 'assets.aceternity.com'], // Added 'assets.aceternity.com' to allow loading images from this domain
  },
};

export default nextConfig;
