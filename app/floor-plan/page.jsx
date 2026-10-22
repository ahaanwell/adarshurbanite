import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/floor-plan",
  name: "Floor Plan",
  title: "Adarsh Urbanite Floor Plan, 2, 3 & 4 BHK Layouts",
  description:
    "Explore Adarsh Urbanite Floor Plan details for 2, 3 and 4 BHK apartments, indicative sizes, carpet area, room layouts and key factors for homebuyers.",
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
    q: "What apartment configurations are available in the Adarsh Urbanite floor plan?",
    a: "Adarsh Urbanite offers 2, 3 & 4 BHK apartments, with indicative sizes ranging from approximately 1,150 sq. ft. to 2,300 sq. ft.",
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
