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
