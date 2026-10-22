import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/location",
  name: "Location",
  title: "Adarsh Urbanite Location, Connectivity and Future Growth",
  description:
    "Explore Adarsh Urbanite Location in Bellandur, East Bangalore, including road connectivity, nearby services, residential suitability and future investment factors.",
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
    q: "Where is Adarsh Urbanite located in Bangalore?",
    a: "Adarsh Urbanite is located on Bellandur Lake Road, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka – 560037. The project is situated in East Bangalore, an established residential and commercial corridor.",
  },
  {
    q: "What is the address of Adarsh Urbanite?",
    a: "The address provided for Adarsh Urbanite is Bellandur Lake Road, Kariyammana Agrahara, Bengaluru, Karnataka – 560037. Buyers should verify the exact project entrance and access road before visiting.",
  },
  {
    q: "What is the nearest landmark to Adarsh Urbanite?",
    a: "Bellandur Lake is identified as a nearby landmark for Adarsh Urbanite. Buyers can use the lake and surrounding locality as a reference point while confirming the exact project location through current maps.",
  },
  {
    q: "How is road connectivity from Adarsh Urbanite?",
    a: "Adarsh Urbanite is located in Bellandur, East Bangalore, where road connectivity serves residential neighborhoods, commercial areas and employment corridors. Actual travel times depend on the destination, traffic conditions, roadworks and the route taken.",
  },
  {
    q: "Is public transport available near Adarsh Urbanite?",
    a: "The supplied project information does not confirm the nearest operational bus stops, metro stations or other public transport services. Buyers should check current routes, service availability and walking distances before making a decision.",
  },
  {
    q: "Are schools and hospitals located near Adarsh Urbanite?",
    a: "The supplied project details do not include a verified list of nearby schools, hospitals or their distances from Adarsh Urbanite. Buyers should identify suitable educational and healthcare facilities and check actual travel times from the project site.",
  },
  {
    q: "Is Adarsh Urbanite suitable for working professionals?",
    a: "Adarsh Urbanite's location in Bellandur, East Bangalore, may be worth considering for professionals working in nearby employment corridors. Its suitability depends on the workplace location, daily commute, traffic conditions and access to public transport.",
  },
  {
    q: "What should families consider about the Adarsh Urbanite location?",
    a: "Families should evaluate access to schools, hospitals, grocery stores, pharmacies and other essential services. Road safety, pedestrian access, street lighting, traffic and noise levels should also be assessed during a site visit.",
  },
  {
    q: "Does Bellandur Lake increase the investment potential of Adarsh Urbanite?",
    a: "Bellandur Lake is a nearby landmark, but its presence alone does not guarantee better property appreciation or environmental conditions. Buyers should assess the surrounding environment, drainage, infrastructure, local property prices and rental demand before investing.",
  },
  {
    q: "What should buyers check before investing in Adarsh Urbanite based on its location?",
    a: "Buyers should test commute times during peak hours, verify nearby essential services, check operational transport links, inspect road and drainage conditions, and compare purchase costs with local rental demand. Proposed infrastructure improvements should be verified through official sources before being considered in investment calculations.",
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
