export const siteContent = {
  brand: {
    name: "Koranco Farms",
    logoAlt: "Koranco Farms logo",
    homeAriaLabel: "Koranco Farms home",
  },
  navigation: {
    primary: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About us" },
      { href: "#service", label: "Services" },
      { href: "#gallery", label: "Gallery" },
      { href: "#testimonial", label: "Testimonials" },
    ],
    contactLabel: "Contact us",
    mobileContactLabel: "Contact Us",
  },
  about: {
    eyebrow: "About Us",
    statement:
      "Powering the future of agriculture through innovation powering the future of agriculture",
    stats: [
      { value: "12+", label: "Years of experience" },
      { value: "235K+", label: "Acres Improved" },
      { value: "421K+", label: "Farmer around world" },
      { value: "$12B+", label: "Agricultural product" },
    ],
  },
  contact: {
    eyebrow: "Join us",
    title: "Ready to transform your farming with smart technology?",
    ctaLabel: "Ger started",
    backgroundImage: "/assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png",
    statement: "Transforming agriculture through smart, sustainable innovation.",
    email: "info@korancofarms.com",
    quickLinks: ["Home", "About us", "Our solutions", "Our services"],
    navigationLinks: ["Our team", "Testimonial", "Faqs", "Contact us"],
    socials: ["Facebook", "Instagram", "Threads", "Pinterest"],
    copyright: "© 2026 Koranco Farms. All Rights Reserved.",
  },
  products: {
    eyebrow: "Our solutions",
    title: "One platform complete agriculture solutions",
    ctaLabel: "Contact us",
    image: "/assets/images/zNmcQyo07DxCT3RJxPq6gaYORh0.png",
    cards: [
      {
        title: "Precision farming solutions",
        description: "Use advanced technology to monitor crops and maximize yield with confidence.",
        tags: ["Data insights", "Smart Monitoring"],
        image: "/assets/images/zNmcQyo07DxCT3RJxPq6gaYORh0.png",
      },
      {
        title: "Farm management system",
        description: "Plan, track, and manage every farming activity effortlessly from one simple digital platform.",
        tags: ["Time Efficiency", "Digital Control"],
        image: "/assets/images/3jG5Dq23m4D3GRcwL5L9qpH3pgo.png",
      },
      {
        title: "Sustainable agriculture services",
        description: "Improve soil health, save resources, and grow responsibly with eco-friendly practices.",
        tags: ["Sustainability", "Smart Practices"],
        image: "/assets/images/JAGzNWPJfggBCr1mBmpRz68ZHug.png",
      },
    ],
  },
  services: {
    eyebrow: "Our services",
    title: "Advanced Services for Modern Agriculture",
    stages: [
      {
        title: "Agriculture consulting",
        description: "Smart, sustainable farming guidance tailored to your needs.",
        image: "/assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png",
      },
      {
        title: "Agri-Technology integration",
        description: "Implementing smart tools and IoT-driven dashboards for real-time farming.",
        image: "/assets/images/TsnDBzzzDviYNEHVue597g4xp0.png",
      },
      {
        title: "Farm management services",
        description: "Comprehensive farm planning, monitoring, and performance reporting for maximum efficiency.",
        image: "/assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png",
      },
      {
        title: "Supply chain & market access",
        description: "Helping farmers connect with buyers, suppliers, and global agriculture markets seamlessly.",
        image: "/assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png",
      },
      {
        title: "Training & support",
        description: "Farmer education programs, workshops, and 24/7 technical support for continuous growth.",
        image: "/assets/images/Rvme5hRNyk19wmGXNRlgBXRlcg.png",
      },
    ],
  },
  gallery: {
    eyebrow: "Our gallery",
    title: "Inside our farming world",
    columns: [
      [
        { src: "/assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png", alt: "Gallery Image" },
        { src: "/assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png", alt: "Gallery Image" },
      ],
      [
        { src: "/assets/images/6gwj2IyXc941vE8Zxy3orojMs.png", alt: "Gallery Image" },
        { src: "/assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png", alt: "Gallery Image" },
      ],
      [
        { src: "/assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png", alt: "Gallery Image" },
      ],
      [
        { src: "/assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png", alt: "Gallery Image" },
        { src: "/assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png", alt: "Gallery Image" },
      ],
    ],
  },
  hero: {
    eyebrow: "Smart farming solutions",
    title: "Innovative Technology for Agricultural Growth",
    description:
      "Koranco Farms delivers smart farming solutions to improve productivity and promote sustainable agricultural growth.",
    videoTitle: "Farming in Motion",
    videoDescription: "Real-time insights driving smarter decisions.",
    ctaLabel: "Ger started",
    backgroundImage: "/assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png",
    videoSource: "/assets/misc/Np45wly46PBKqCGM0tXpdJqVAo.mp4",
  },
  seo: {
    title: "Farmio",
    description:
      "Koranco Farms delivers smart, sustainable farming solutions that improve productivity and strengthen agricultural growth.",
    icon: "/assets/images/tUtWFipl6qdHjA2F5yK6HmnJM3U.svg",
  },
} as const

export type SiteContent = typeof siteContent
