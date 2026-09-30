// // lib/blogCategories.ts

import {
  Brain,
  Server,
  Rocket,
  BookOpen,
} from "lucide-react";

export const blogCategories = {
  "ai-tech": {
    label: "AI & Tech",
    icon: Brain,
    gradient: "from-[#1B2A6B] via-[#2451C4] to-[#22C4F5]",
    image: '/ai-tech.png',
  },

  engineering: {
    label: "Engineering",
    icon: Server,
    gradient: "from-[#2A1B6B] via-[#4A1FA0] to-[#7B3FE4]",
    image: '/engineering.png',
  },

  product: {
    label: "Product",
    icon: Rocket,
    gradient: "from-[#0F3B6B] via-[#1E63A8] to-[#3E7BFA]",
    image: '/product.png',
  },

  company: {
    label: "Company",
    icon: BookOpen,
    gradient: "from-[#111B46] via-[#273EA8] to-[#7C3AED]",
    image: '/company.png',
  },
};