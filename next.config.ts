import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {};

export default withPWA({
  dest: "public",

  disable: false,
})(nextConfig);
