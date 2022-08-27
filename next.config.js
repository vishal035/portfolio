/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'media.sproutsocial.com',
      'weeebvers.herokuapp.com',
      'weebvers.s3.ap-south-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
