/**
 * Products & images. To use your own photos, replace the files in
 * src/assets/ keeping the same filename (e.g. peda.jpg), or change the import.
 */
import peda from "@/assets/peda.jpg";
import besanBarfi from "@/assets/besan-barfi.jpg";
import milkCake from "@/assets/milk-cake.jpg";
import laddu from "@/assets/laddu.jpg";
import gulabJamun from "@/assets/gulab-jamun.jpg";
import namkeen from "@/assets/namkeen.jpg";

export const CATEGORIES = [
  "All",
  "Peda",
  "Barfi",
  "Laddu",
  "Milk Sweets",
  "Namkeen",
  "Other Sweets",
] as const;
export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  name: string;
  hindi: string;
  description: string;
  category: Exclude<Category, "All">;
  image: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "peda",
    name: "Peda",
    hindi: "पेड़ा",
    description: "Our signature sweet, made with traditional methods.",
    category: "Peda",
    image: peda,
    featured: true,
  },
  {
    id: "besan-barfi",
    name: "Besan Barfi",
    hindi: "बेसन बर्फी",
    description: "A classic barfi with a rich, traditional flavour.",
    category: "Barfi",
    image: besanBarfi,
    featured: true,
  },
  {
    id: "milk-cake",
    name: "Milk Cake",
    hindi: "मिल्क केक",
    description: "A much-loved milk sweet with a grainy texture.",
    category: "Milk Sweets",
    image: milkCake,
    featured: true,
  },
  {
    id: "besan-laddu",
    name: "Besan Laddu",
    hindi: "बेसन लड्डू",
    description: "Hand-rolled laddu, a favourite for every occasion.",
    category: "Laddu",
    image: laddu,
    featured: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    hindi: "गुलाब जामुन",
    description: "Soft, syrup-soaked and served the traditional way.",
    category: "Other Sweets",
    image: gulabJamun,
    featured: true,
  },
  {
    id: "namkeen",
    name: "Besan Namkeen / Mixture",
    hindi: "नमकीन",
    description: "Savoury namkeen to enjoy alongside your sweets.",
    category: "Namkeen",
    image: namkeen,
    featured: true,
  },
];
