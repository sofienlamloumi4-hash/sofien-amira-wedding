import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سفيان وأميرة",
    short_name: "Wedding",
    description: "دعوة زفاف سفيان وأميرة",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#c9a227",
    lang: "ar",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
