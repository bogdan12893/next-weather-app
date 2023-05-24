/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ignoreBuildErrors: true,
  },

  env: {
    RAPID_API_URL: process.env.RAPID_API_URL,
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    RAPID_API_HOST: process.env.RAPID_API_HOST,
    OPEN_WEATHER_URL: process.env.OPEN_WEATHER_URL,
    OPEN_WEATHER_KEY: process.env.OPEN_WEATHER_KEY,
  },
};

module.exports = nextConfig;
