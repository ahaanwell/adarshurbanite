import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/amenities",
  name: "Amenities",
  title: "Adarsh Urbanite Amenities, Clubhouse & Open Spaces",
  description:
    "Explore Adarsh Urbanite Amenities, including the planned clubhouse, landscaped spaces, recreation areas, pedestrian-friendly planning and shared facilities.",
  keywords: [
    "Adarsh Urbanite amenities",
    "Adarsh Urbanite clubhouse",
    "Adarsh Urbanite swimming pool",
    "Adarsh Urbanite facilities",
    "Adarsh Urbanite lifestyle",
  ],
};

// FAQ schema – keep in sync with the FAQ section in AmenitiesPage.jsx
const FAQS = [
  {
    q: "How many amenities are planned at Adarsh Urbanite?",
    a: "More than 40 amenities are planned across the 40-acre Adarsh Urbanite development on Bellandur Lake Road Road, East Bengaluru.",
  }
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
