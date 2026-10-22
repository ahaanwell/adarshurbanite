import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/master-plan",
  name: "Master Plan",
  title: "Adarsh Urbanite Master Plan, Layout & Amenities",
  description:
    "Explore the Adarsh Urbanite Master Plan, including tower layout, landscaped spaces, clubhouse, amenities, retail planning and internal access routes in East Bengaluru.",
  keywords: [
    "Adarsh Urbanite master plan",
    "Adarsh Urbanite site plan",
    "Adarsh Urbanite layout",
    "Adarsh Urbanite towers",
    "Adarsh Urbanite 52.5 acres",
  ],
  image: { url: "/images/master-plan.webp", width: 1250, height: 750, alt: "Adarsh Urbanite master plan" },
};

// FAQ schema – keep in sync with the FAQ section in MasterPlanPage.jsx
const FAQS = [
  {
    q: "What is the total land area of Adarsh Urbanite?",
    a: "As per the Adarsh Urbanite master plan, the project is being developed on approximately 40 acres on Bellandur Lake Road in East Bengaluru.",
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
