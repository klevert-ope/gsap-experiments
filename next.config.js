/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    GSAP_TOKEN: process.env.GSAP_TOKEN,
  },
};

module.exports = nextConfig;
