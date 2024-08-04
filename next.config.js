/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
    console.log("IS PROD: " + isProd)

const nextConfig = {
    basePath: isProd ? '/my-portfolio' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
}
    console.log("BASE PATH: " + nextConfig.basePath)

module.exports = nextConfig
