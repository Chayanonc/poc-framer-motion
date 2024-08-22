/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "space.3dojmedia.com",
      },
      {
        hostname: "sereneproperty.com",
      },
    ],
  },
};

export default nextConfig;
