/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only standard configurations for the public teaser
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
