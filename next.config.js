/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["img.jovasoftware.com"],
    },
    env: {
        DOMAIN: process.env.DOMAIN,
        URL: process.env.URL,
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
