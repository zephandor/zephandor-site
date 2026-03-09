export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: { label: string; value: string }[];
  benefits: string[];
  amazonUrl?: string;
  amazonCtaLabel?: string;
  etsyUrl: string;
};

export const products: Product[] = [
  {
    slug: "zephandor-2-in-1-garment-steamer-dry-iron",
    name: "Zephandor 2-in-1 Garment Steamer & Dry Iron",
    category: "Flagship fabric care essential",
    tagline: "Luxury-level garment care in a compact tool made for home, travel, and daily polish.",
    description:
      "Zephandor combines vertical steaming and dry ironing in one refined 2-in-1 design, giving you fast heat-up, fabric-friendly performance, and a more elevated way to keep clothing presentation-ready.",
    features: [
      "1200W power for steady, effective wrinkle release",
      "Ready in 15 seconds for quick daily touch-ups",
      "65ml water tank for lightweight, travel-friendly use",
      "Vertical and horizontal steaming for flexible garment care",
      "Drip-free ceramic panel for smoother finishing across delicate and everyday fabrics",
      "Adjustable steam output for different fabric needs",
      "Auto shut-off for added confidence during use",
      "Compact design suited to home storage, business trips, and vacation packing"
    ],
    highlights: [
      { label: "Power", value: "1200W" },
      { label: "Fast Heat-Up", value: "15s" },
      { label: "Water Tank", value: "65ml" },
      { label: "Steam Modes", value: "Vertical + horizontal" }
    ],
    benefits: [
      "Keep pieces looking sharp at home without pulling out a full ironing setup.",
      "Travel with one compact tool instead of packing separate steaming and pressing options.",
      "Handle quick touch-ups before meetings, dinners, departures, and daily routines with less effort."
    ],
    amazonUrl: "https://www.amazon.com/dp/B0FYYFBJ9Q",
    etsyUrl: "https://www.etsy.com/listing/4411812017/garment-steamer-dry-iron-2-in-1-compact"
  }
];

export const featuredProduct = products[0];
