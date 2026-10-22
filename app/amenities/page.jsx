import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/amenities",
  name: "Amenities",
  title: "Adarsh Urbanite Amenities: Luxury Facilities List",
  description:
    " Explore potential Adarsh Urbanite amenities, including clubhouse, fitness, sports, landscaped spaces and family facilities, with tips to verify inclusions.",
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
    a: "According to the project website, Adarsh Urbanite is planned with more than 40 amenities. Buyers should refer to the latest official amenity schedule for the complete list of facilities.",
  },
  {
    q: "What is the clubhouse size at Adarsh Urbanite?",
    a: "The project website reports an approximately 50,000 sq. ft. clubhouse. The final layout and facilities should be verified through the developer's official project documents.",
  },
  {
    q: "What is the open space percentage at Adarsh Urbanite?",
    a: "According to the supplied project details, Adarsh Urbanite has approximately 80% open space. Buyers should verify this figure against the approved site plan and clarify which areas are included.",
  },
  {
    q: "What fitness amenities are available at Adarsh Urbanite?",
    a: "The supplied information does not confirm individual fitness facilities. Buyers should check the official amenity schedule for details about the gymnasium, swimming pool, yoga facilities, jogging track and other fitness provisions.",
  },
  {
    q: "What facilities are included in the Adarsh Urbanite clubhouse?",
    a: "The clubhouse is reported to cover approximately 50,000 sq. ft., but its individual facilities have not been confirmed in the supplied details. Buyers should request the latest clubhouse layout to verify recreational and community spaces.",
  },
  {
    q: "Does Adarsh Urbanite have sports facilities?",
    a: "The available project information does not confirm specific sports facilities. Buyers should consult the developer's official amenity list to establish whether indoor games, badminton courts or other sports areas are planned.",
  },
  {
    q: "What outdoor amenities are planned at Adarsh Urbanite?",
    a: "The supplied details report approximately 80% open space but do not confirm individual outdoor amenities. Buyers should review the approved landscape plan for information about gardens, walking pathways, seating areas and recreational spaces.",
  },
  {
    q: "Does Adarsh Urbanite offer amenities for children and families?",
    a: "The supplied information does not confirm specific children's or family amenities. Buyers should check the official amenity schedule for playgrounds, children's activity areas and other family-oriented facilities.",
  },
  {
    q: "What security and essential facilities are provided at Adarsh Urbanite?",
    a: "The supplied project details do not specify the complete security and building-service provisions. Buyers should verify CCTV surveillance, access control, fire safety systems, lifts, parking and power backup through the relevant project specifications.",
  },
  {
    q: "How can buyers verify the Adarsh Urbanite amenities list before booking?",
    a: "Buyers should request the latest official amenity schedule, clubhouse plan, landscape layout and approved building specifications. They should also confirm which facilities will be ready at possession and whether any maintenance or usage charges apply.",
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
