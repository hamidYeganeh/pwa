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
        src: "/screenshot-1.png",
        sizes: "1280x720",
        platform: "android",
        label:
          "اﮐﯿﭙﻮ ﯾﮏ ﻓﺮﺻﺖ ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﺳﺎده اﺳﺖ ﮐﻪ ﺑﻪ ﺷﻤﺎ اﯾﻦ ﻓﺮﺻﺖ را ﻣﯿﺪﻫﺪ ﺗﺎ در ﺑﺎزار ﻣﻠﮏ و ﻣﺴﺘﻐﻼت از 100 ﻫﺰار ﺗﻮﻣﺎن ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﮐﻨﯿﺪ",
      },
      {
        src: "/screenshot-2.png",
        sizes: "1280x720",
        platform: "android",
        label:
          "اﮐﯿﭙﻮ ﯾﮏ ﻓﺮﺻﺖ ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﺳﺎده اﺳﺖ ﮐﻪ ﺑﻪ ﺷﻤﺎ اﯾﻦ ﻓﺮﺻﺖ را ﻣﯿﺪﻫﺪ ﺗﺎ در ﺑﺎزار ﻣﻠﮏ و ﻣﺴﺘﻐﻼت از 100 ﻫﺰار ﺗﻮﻣﺎن ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﮐﻨﯿﺪ",
      },
      {
        src: "/screenshot-3.png",
        sizes: "1280x720",
        platform: "android",
        label:
          "اﮐﯿﭙﻮ ﯾﮏ ﻓﺮﺻﺖ ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﺳﺎده اﺳﺖ ﮐﻪ ﺑﻪ ﺷﻤﺎ اﯾﻦ ﻓﺮﺻﺖ را ﻣﯿﺪﻫﺪ ﺗﺎ در ﺑﺎزار ﻣﻠﮏ و ﻣﺴﺘﻐﻼت از 100 ﻫﺰار ﺗﻮﻣﺎن ﺳﺮﻣﺎﯾﻪ ﮔﺬارى ﮐﻨﯿﺪ",
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
