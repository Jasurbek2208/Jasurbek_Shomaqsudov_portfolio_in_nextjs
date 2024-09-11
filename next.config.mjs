/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shomaqsudov.uz',
                pathname: '/**',
            }
        ],
        domains: ['firebasestorage.googleapis.com']
    },
}

export default nextConfig