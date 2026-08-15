// Product image imports — grouped by category
import imgDrillChuck from "../assets/products/janmac-drill-chuck-with-key-photo.png";
import imgHikoki from "../assets/products/shop-display-cabinet-hikoki-power-tool-boxes.png";

import imgTapariaPliers from "../assets/products/taparia-hand-tools-pliers-cutters-display-photo.png";
import imgHardwareWall from "../assets/products/shop-interior-hardware-wall-display-1.png";
import imgToolShelf from "../assets/products/shop-interior-staff-working-shelf.png";

import imgAdhesives from "../assets/products/shop-display-cabinet-adhesives-polish.png";
import imgSprayAdhesives from "../assets/products/shop-display-cabinet-spray-paint-adhesives.png";

import imgPaintTins from "../assets/products/shop-interior-paint-tins-ladders-shelf.png";

import imgMetalBrackets from "../assets/products/custom-fabricated-metal-brackets-fittings-tray-photo.png";
import imgFasteners from "../assets/products/landmark-hp-fasteners-screws-rivets-board-photo.png";
import imgCuttingDiscsWall from "../assets/products/shop-interior-cutting-discs-wall-shelf.png";
import imgCuttingDiscsVbelts from "../assets/products/shop-interior-cutting-discs-vbelts-shelf.png";
import imgFlapDiscs from "../assets/products/shop-interior-flap-discs-tapes-shelf.png";
import imgCuttingDisc from "../assets/products/yuri-green-abrasive-cutting-disc-photo.png";
import imgAbrasivesShelf from "../assets/products/shop-interior-staff-with-cutting-discs-shelf.png";
import imgVbeltsAbrasives from "../assets/products/shop-interior-vbelts-abrasives-staff.png";

import imgHardwareCorner1 from "../assets/products/shop-interior-general-hardware-corner-1.png";
import imgHardwareCorner2 from "../assets/products/shop-interior-general-hardware-corner-2.png";
import imgHardwareShelfTapes from "../assets/products/shop-interior-general-hardware-shelf-tapes.png";
import imgSmallParts from "../assets/products/shop-interior-small-parts-bins-organizer.png";
import imgVbelts1 from "../assets/products/shop-interior-vbelts-hanging-1.png";
import imgVbelts2 from "../assets/products/shop-interior-vbelts-hanging-2.png";
import imgVbelts3 from "../assets/products/shop-interior-vbelts-hanging-3.png";
import imgVbeltsAdhesives from "../assets/products/shop-interior-vbelts-adhesives-staff.png";

import imgPvcMetalRods from "../assets/products/shop-interior-pvc-metal-rods-shelf.png";
import imgPvcPipesTins from "../assets/products/shop-interior-pvc-pipes-paint-tins-shelf.png";
import imgPvcPipes1 from "../assets/products/shop-interior-pvc-pipes-shelf-1.png";
import imgPvcPipes2 from "../assets/products/shop-interior-pvc-pipes-shelf-2.png";
import imgPvcRods3 from "../assets/products/shop-interior-pvc-rods-shelf-3.png";
import imgPvcRodsStorage from "../assets/products/shop-interior-storage-room-pvc-rods.png";

export const siteUrl = "https://maimoon.in";

export const business = {
  name: "Maimoon",
  fullName: "Maimoon Industrial Hardware & Plywood",
  tagline: "Industrial Hardware. Plywood. Every Fitting You Need.",
  established: 2002,
  phones: ["098230 16058", "9595169520", "9657019021"],
  primaryPhone: "09823016058",
  whatsapp: "919823016058",
  address: {
    line1: "Shop No 8, Shanti Heights, S No 54",
    line2: "Katraj-Kondhwa Road, Kondhwa",
    city: "Pune, Maharashtra 411048",
    full: "Shop No 8, Shanti Heights, S No 54, Katraj-Kondhwa Road, Kondhwa, Pune, Maharashtra 411048",
  },
  geo: { lat: 18.452371816489133, lng: 73.88991349484694 },
  hours: {
    monSat: "9:30 AM – 7:30 PM",
    sun: "9:30 AM – 1:00 PM",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=18.452371816489133,73.88991349484694&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=18.452371816489133,73.88991349484694",
  ratings: {
    google: { score: 5.0, count: 4 },
    justdial: { score: 4.9, count: 14 },
  },
  // Direct links to the live review listings.
  // Fill in justdial with the exact URL from your JustDial business page.
  reviewUrls: {
    google: "https://www.google.com/maps/search/Maimoon+Industrial+Hardware+%26+Plywood+Kondhwa+Pune/",
    justdial: "", // TODO: paste your JustDial listing URL here
  },
};

export const brands = [
  "Addison", "Venus", "Araldite", "CUMI", "Eurotech", "Taparia",
  "Godrej", "Dr Fixit", "JK Files & Tools", "ABRO", "Prince",
  "Fischer", "Norton", "Tata", "DeWalt", "HIKOKI", "Mangalam", "Powercord",
];

export const categories = [
  {
    id: "power-tools",
    name: "Power Tools",
    description: "Drills, grinders, cutters from DeWalt, HIKOKI and Taparia.",
    products: [
      {
        name: "Drill Chuck with Key (Janmac)",
        image: imgDrillChuck,
        alt: "Janmac drill chuck with key — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "HIKOKI Power Tools",
        image: imgHikoki,
        alt: "HIKOKI power tool boxes on display — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    description: "Wrenches, files, pliers and everyday tools from Taparia, JK Files & Tools.",
    products: [
      {
        name: "Taparia Pliers & Cutters",
        image: imgTapariaPliers,
        alt: "Taparia pliers and cutters display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Wall Hardware Display",
        image: imgHardwareWall,
        alt: "Hardware wall display with tools and fittings — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Tool & Hardware Shelf",
        image: imgToolShelf,
        alt: "Tool and hardware shelf — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "adhesives-sealants",
    name: "Adhesives & Sealants",
    description: "Araldite, M-Seal, Fevicol and structural bonding solutions.",
    products: [
      {
        name: "Adhesives & Polish",
        image: imgAdhesives,
        alt: "Adhesives and polish display cabinet — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Spray Adhesives & Paint",
        image: imgSprayAdhesives,
        alt: "Spray adhesives and paint cans display — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "waterproofing-paints",
    name: "Waterproofing & Paints",
    description: "Dr Fixit waterproofing systems and industrial coatings.",
    products: [
      {
        name: "Paint Tins & Accessories",
        image: imgPaintTins,
        alt: "Paint tins and accessories on shelf — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "plywood",
    name: "Plywood & Boards",
    description: "Structural and decorative plywood, laminates, boards.",
    // No product photos available yet — call shop to check stock
    products: [],
  },
  {
    id: "fasteners-fittings",
    name: "Fasteners & Fittings",
    description: "Fischer anchors, Norton abrasives, screws, bolts, and fittings.",
    products: [
      {
        name: "Custom Metal Brackets & Fittings",
        image: imgMetalBrackets,
        alt: "Custom fabricated metal brackets and fittings tray — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "HP Fasteners — Screws & Rivets",
        image: imgFasteners,
        alt: "HP fasteners board showing screws and rivets — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Cutting Discs Wall Display",
        image: imgCuttingDiscsWall,
        alt: "Cutting discs wall shelf display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Cutting Discs & V-Belts",
        image: imgCuttingDiscsVbelts,
        alt: "Cutting discs and V-belts on shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Flap Discs & Grinding Wheels",
        image: imgFlapDiscs,
        alt: "Flap discs and grinding wheels shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Abrasive Cutting Disc (Yuri)",
        image: imgCuttingDisc,
        alt: "Yuri green abrasive cutting disc — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Abrasives & Cutting Discs Shelf",
        image: imgAbrasivesShelf,
        alt: "Abrasives and cutting discs shelf display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "V-Belts & Abrasives Display",
        image: imgVbeltsAbrasives,
        alt: "V-belts and abrasives display with staff — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "electricals",
    name: "Electricals",
    description: "Powercord cables, switches, industrial electrical supplies.",
    // No product photos available yet — call shop to check stock
    products: [],
  },
  {
    id: "safety-general",
    name: "Safety & General Hardware",
    description: "Safety gear, general hardware, and everyday shop essentials.",
    products: [
      {
        name: "General Hardware Corner",
        image: imgHardwareCorner1,
        alt: "General hardware corner shop display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Hardware & Supplies Corner",
        image: imgHardwareCorner2,
        alt: "Hardware and supplies corner display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Hardware Shelf — Tapes & Accessories",
        image: imgHardwareShelfTapes,
        alt: "Hardware shelf with tapes and accessories — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "Small Parts & Organizers",
        image: imgSmallParts,
        alt: "Small parts bins and organizers display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "V-Belts",
        image: imgVbelts1,
        alt: "V-belts hanging on display rack — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "V-Belts Selection",
        image: imgVbelts2,
        alt: "V-belts selection on hanging display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "V-Belts Range",
        image: imgVbelts3,
        alt: "V-belts range on hanging display — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "V-Belts & Adhesives Display",
        image: imgVbeltsAdhesives,
        alt: "V-belts and adhesives display with staff — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
  {
    id: "pipes-plumbing",
    name: "Pipes & Plumbing",
    description: "PVC pipes, rods, and plumbing supplies for construction and industrial use.",
    products: [
      {
        name: "PVC & Metal Rods",
        image: imgPvcMetalRods,
        alt: "PVC and metal rods on shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "PVC Pipes Display",
        image: imgPvcPipesTins,
        alt: "PVC pipes display shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "PVC Pipes",
        image: imgPvcPipes1,
        alt: "PVC pipes on shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "PVC Pipes Range",
        image: imgPvcPipes2,
        alt: "PVC pipes range on shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "PVC Rods",
        image: imgPvcRods3,
        alt: "PVC rods stacked on shelf — Maimoon Hardware Kondhwa Pune",
      },
      {
        name: "PVC Rods Stock",
        image: imgPvcRodsStorage,
        alt: "PVC rods in storage room — Maimoon Hardware Kondhwa Pune",
      },
    ],
  },
];

export const homeFAQs = [
  {
    question: "Where is Maimoon Industrial Hardware located in Pune?",
    answer: "Maimoon Industrial Hardware & Plywood is at Shop No 8, Shanti Heights, S No 54, Katraj-Kondhwa Road, Kondhwa, Pune, Maharashtra 411048. Easily reached from NIBM Road, Wanowrie, Undri, and Bibvewadi.",
  },
  {
    question: "What are Maimoon Industrial Hardware's opening hours?",
    answer: "Maimoon is open Monday to Saturday 9:30 AM–7:30 PM and Sunday 9:30 AM–1:00 PM.",
  },
  {
    question: "Does Maimoon deliver plywood and hardware in Kondhwa and Pune?",
    answer: "For bulk orders — construction projects, contractor sourcing runs, or large quantity requirements — ask about delivery when you call on 098230 16058. Delivery is discussed on a case-by-case basis.",
  },
  {
    question: "What brands does Maimoon Industrial Hardware stock?",
    answer: "Maimoon stocks Taparia, DeWalt, HIKOKI, Godrej, Dr Fixit, Fischer, Norton, CUMI, Araldite, Fevicol, M-Seal, ABRO, Powercord, Addison, Venus, JK Files & Tools, Mangalam, and more — covering power tools, hand tools, adhesives, waterproofing, fasteners, and electrical supplies.",
  },
  {
    question: "How long has Maimoon been operating in Kondhwa, Pune?",
    answer: "Maimoon has operated from Katraj-Kondhwa Road, Kondhwa, Pune since 2002 — over two decades supplying contractors, fabricators, plumbers, and individual buyers across the city.",
  },
];

export const contactFAQs = [
  {
    question: "How do I get to Maimoon Industrial Hardware in Kondhwa, Pune?",
    answer: 'Maimoon is at Shop No 8, Shanti Heights, S No 54, Katraj-Kondhwa Road, Kondhwa, Pune 411048. From NIBM Road it\'s a 3-4 minute drive. From Wanowrie or Undri, roughly 10 minutes. Search "Maimoon Industrial Hardware & Plywood" on Google Maps — the pin is accurate.',
  },
  {
    question: "What are Maimoon's opening hours on Sunday?",
    answer: "Maimoon is open Sunday 9:30 AM–1:00 PM. Monday to Saturday hours are 9:30 AM–7:30 PM.",
  },
  {
    question: "Does Maimoon offer delivery for hardware and plywood orders in Pune?",
    answer: "For bulk orders — construction projects, contractor sourcing, or large quantities — ask about delivery when you call on 098230 16058. We can discuss what's possible on a case-by-case basis.",
  },
  {
    question: "How can I contact Maimoon Industrial Hardware?",
    answer: "Call us on 098230 16058 (primary and WhatsApp), 9595169520, or 9657019021. Open Mon–Sat 9:30 AM–7:30 PM, Sun 9:30 AM–1:00 PM.",
  },
];

// Placeholder reviews — clearly marked, to be replaced with restored real reviews.
export const placeholderReviews = [
  {
    name: "Placeholder Review",
    text: "Real customer reviews were removed and are being restored. This card will be replaced with authentic feedback.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Placeholder Review",
    text: "Real customer reviews were removed and are being restored. This card will be replaced with authentic feedback.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Placeholder Review",
    text: "Real customer reviews were removed and are being restored. This card will be replaced with authentic feedback.",
    rating: 5,
    isPlaceholder: true,
  },
];
