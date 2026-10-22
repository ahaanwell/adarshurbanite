import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/price",
  name: "Price",
  title: "Adarsh Urbanite Price, Apartment Sizes & Cost Details",
  description:
    "Explore Adarsh Urbanite Price details, proposed 2, 3 and 4 BHK apartment sizes, pricing factors, additional charges and key budgeting considerations.",
  keywords: [
    "Adarsh Urbanite price",
    "Adarsh Urbanite price list",
    "Adarsh Urbanite cost sheet",
    "Adarsh Urbanite 2 BHK price",
    "Adarsh Urbanite 3 BHK price",
    "Adarsh Urbanite 4 BHK price",
    "Whitefield Hoskote Road apartment price",
  ],
};

// FAQ schema – keep in sync with the FAQ section in PricePage.jsx
const FAQS = [
  {
    q: "What is the current Adarsh Urbanite price?",
    a: "The official Adarsh Urbanite price list has not been released yet, as the project is in the pre-launch stage. Buyers should obtain the latest price list and cost sheet directly from the developer.",
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
      <PricePage />
      <BlogSection/>
    </>
  );
}
