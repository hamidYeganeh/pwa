import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js PWA",
    short_name: "NextPWA",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#daf",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "./screenshot-1.png",
        sizes: "1280x720",
        platform: "android",
        label:
          "The main PWAmp user interface, showing a list of songs, and playback buttons.",
      },
    ],
    shortcuts: [
      {
        name: "business page",
        short_name: "business",
        description: "open business page",
        url: "/business",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  };
}
