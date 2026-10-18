/**
 * Gallery images. Replace imports with your own shop photos
 * (e.g. src/assets/shop-front.jpg) — keep alt text descriptive.
 */
import hero from "@/assets/hero-sweets.jpg";
import peda from "@/assets/peda.jpg";
import barfi from "@/assets/besan-barfi.jpg";
import laddu from "@/assets/laddu.jpg";
import shopFront from "@/assets/shop-front.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import temple from "@/assets/temple-street.jpg";
import namkeen from "@/assets/namkeen.jpg";

export const GALLERY_CATEGORIES = ["All", "Sweets", "Shop", "Traditional", "Customers / Events"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  width: number;
  height: number;
};

export const GALLERY: GalleryImage[] = [
  { src: shopFront, alt: "Shyam Ji Pede Wale sweet shop front in Khachariawas", category: "Shop", width: 1024, height: 1280 },
  { src: peda, alt: "Traditional peda on a brass plate", category: "Sweets", width: 1024, height: 1024 },
  { src: shopInterior, alt: "Sweets being prepared in a brass kadhai", category: "Shop", width: 1024, height: 768 },
  { src: temple, alt: "Temple street decorated with marigold garlands", category: "Traditional", width: 1280, height: 864 },
  { src: barfi, alt: "Besan barfi with silver vark", category: "Sweets", width: 1024, height: 1024 },
  { src: hero, alt: "Festive thali of assorted mithai", category: "Customers / Events", width: 1600, height: 1008 },
  { src: laddu, alt: "Hand-rolled besan laddu", category: "Sweets", width: 1024, height: 1024 },
  { src: namkeen, alt: "Besan namkeen mixture in a brass bowl", category: "Sweets", width: 1024, height: 1024 },
];
