
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Running shoes for everyday adventures.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description: "Lightweight running shoes with a breathable design.",
    specs: ["Breathable upper", "Foam sole", "Lightweight"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Experience music without limits.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description: "Wireless earbuds with powerful sound.",
    specs: ["Wireless", "8-hour battery", "USB-C charging"],
  },
  {
    id: "nova-watch",
    name: "Nova Watch",
    tagline: "Smart technology on your wrist.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    accent: "#45b99a",
    description: "A stylish smartwatch for everyday use.",
    specs: ["Heart rate monitor", "Water resistant", "Fitness tracking"],
  },
  {
    id: "orbit-speaker",
    name: "Orbit Speaker",
    tagline: "Big sound in a small package.",
    price: 149,
    category: "Audio",
    emoji: "🔊",
    accent: "#ff9b54",
    description: "Portable speaker with rich audio quality.",
    specs: ["Bluetooth", "12-hour battery", "Portable design"],
  },
  {
    id: "spark-drone",
    name: "Spark Drone",
    tagline: "Capture your world from above.",
    price: 299,
    category: "Gadgets",
    emoji: "🚁",
    accent: "#e77b9a",
    description: "Compact drone for aerial photography.",
    specs: ["HD camera", "Remote control", "Easy to fly"],
  },
  {
    id: "cloud-step",
    name: "Cloud Step",
    tagline: "Comfort for every step.",
    price: 119,
    category: "Sneakers",
    emoji: "👟",
    accent: "#9b8cff",
    description: "Comfortable sneakers for daily activities.",
    specs: ["Soft cushioning", "Flexible sole", "Breathable fabric"],
  },
  {
    id: "fit-band",
    name: "Fit Band",
    tagline: "Track your fitness goals.",
    price: 79,
    category: "Wearables",
    emoji: "⌚",
    accent: "#5bafc9",
    description: "A lightweight fitness tracker.",
    specs: ["Step counter", "Sleep tracking", "Long battery life"],
  },
  {
    id: "mini-projector",
    name: "Mini Projector",
    tagline: "Bring the big screen home.",
    price: 249,
    category: "Gadgets",
    emoji: "📽️",
    accent: "#c28aef",
    description: "Compact projector for home entertainment.",
    specs: ["HD display", "Portable", "HDMI connectivity"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
