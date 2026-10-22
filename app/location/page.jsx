import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/location",
  name: "Location",
  title: "Adarsh Urbanite Bellandur Location & Connectivity Guide",
  description:
    "Explore Adarsh Urbanite Location, road connectivity, Whitefield access, nearby infrastructure, public transport, daily living convenience and investment potential in East Bengaluru.",
  keywords: [
    "Adarsh Urbanite location",
    "Adarsh Urbanite address",
    "Adarsh Urbanite Bellandur Lake Road",
    "Adarsh Urbanite connectivity",
    "apartments near Bellandur Lake Road",
  ],
};

// FAQ schema – keep in sync with the FAQ section in LocationPage.jsx
const FAQS = [
  {
    q: "Where is Adarsh Urbanite located?",
    a: "Adarsh Urbanite is located on Bellandur Lake Road in East Bengaluru, Karnataka.",
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}
