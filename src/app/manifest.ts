import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifest",
};

export default function manifest() {
  return {
    name: "Aditya Sharma Portfolio",
    short_name: "Aditya",
    description: "Portfolio of Aditya Sharma, an AI Engineer and Full-Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
