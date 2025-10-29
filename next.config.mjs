/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 新版本必须这样设置
  images: { unoptimized: true }, // ✅ 避免 next/image 报错
};

module.exports = nextConfig;
