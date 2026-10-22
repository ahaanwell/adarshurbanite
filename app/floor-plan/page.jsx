import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/floor-plan",
  name: "Floor Plan",
  title: "Adarsh Urbanite Floor Plan: 2, 3 & 4 BHK Sizes",
  description:
    "Explore Adarsh Urbanite Floor Plan details for 2, 3 and 4 BHK apartments, including stated sizes, estimated carpet areas and layout selection tips.",
  keywords: [
    "Adarsh Urbanite floor plan",
    "Adarsh Urbanite 2 BHK floor plan",
    "Adarsh Urbanite 3 BHK floor plan",
    "Adarsh Urbanite 4 BHK floor plan",
    "Adarsh Urbanite unit plan",
  ],
  image: { url: "/images/floorplans/3bhk.webp", width: 720, height: 400, alt: "Adarsh Urbanite 3 BHK floor plan" },
};

// FAQ schema – keep in sync with the FAQ section in FloorPlanPage.jsx
const FAQS = [
  {
    q: "What apartment configurations are available in the Adarsh Urbanite Floor Plan?",
    a: "The project information lists 2 BHK, 3 BHK and 4 BHK apartments. Buyers should check the latest official floor plans to confirm the available configurations and unit layouts.",
  },
  {
    q: "What is the size of a 2 BHK apartment at Adarsh Urbanite?",
    a: "The stated super built-up area of a 2 BHK apartment ranges from 1,150 to 1,250 sq. ft., with two toilets. The estimated carpet area is 839–912 sq. ft., subject to verification against official apartment documents.",
  },
  {
    q: "What is the size of a 3 BHK apartment at Adarsh Urbanite?",
    a: "The stated super built-up area of a 3 BHK apartment ranges from 1,800 to 1,900 sq. ft., with three toilets. Its estimated carpet area is 1,314–1,387 sq. ft.",
  },
  {
    q: "What is the size of a 4 BHK apartment at Adarsh Urbanite?",
    a: "The stated super built-up area of a 4 BHK apartment ranges from 2,200 to 2,300 sq. ft. The configuration includes four toilets and a maid's room, with an estimated carpet area of 1,606–1,679 sq. ft.",
  },
  {
    q: "What is the difference between carpet area and super built-up area at Adarsh Urbanite?",
    a: "Carpet area refers to the usable floor area of an apartment as defined under applicable regulations. Super built-up area generally includes the carpet area, walls and an allocated share of common areas, as applicable. Buyers should verify the official area statement before comparing units.",
  },
  {
    q: "Does the Adarsh Urbanite Floor Plan show exact room dimensions?",
    a: "The supplied project information provides apartment area ranges and configuration details but does not include detailed room dimensions. Buyers should request the latest official floor plans to confirm bedroom sizes, kitchen dimensions, bathroom positions and other layout details.",
  },
  {
    q: "Which Adarsh Urbanite Floor Plan is suitable for a small family?",
    a: "A 2 BHK apartment may suit couples or small families, while a 3 BHK may provide additional flexibility for children, guests or a home office. The best option depends on household requirements, room dimensions and budget.",
  },
  {
    q: "What should buyers check in the Adarsh Urbanite 4 BHK Floor Plan?",
    a: "Buyers should review bedroom dimensions, bathroom placement, the maid's room arrangement, storage options and movement between living spaces. The official drawing is necessary to confirm the exact layout and access arrangements.",
  },
  {
    q: "How can buyers choose the best apartment layout at Adarsh Urbanite?",
    a: "Compare room dimensions, furniture placement, ventilation, storage, privacy, bathroom accessibility and everyday movement. Buyers should also consider future household needs and compare the official carpet areas of the available configurations.",
  },
  {
    q: "How can buyers verify the Adarsh Urbanite Floor Plan and carpet area?",
    a: "Buyers should request the latest official apartment floor plan, carpet area statement and relevant project documents. They should cross-check the measurements, configuration and area details against the agreement and applicable regulatory records before booking.",
  },
];

export const metadata = pageMetadata(PAGE);

export default function Page() {
  const schema = pageSchema(PAGE);
  schema["@graph"].push({
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
