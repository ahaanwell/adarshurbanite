import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/master-plan",
  name: "Master Plan",
  title: "Adarsh Urbanite Master Plan, Towers and Layout",
  description:
    "Explore the Adarsh Urbanite Master Plan, including site layout, tower distribution, open spaces, clubhouse, apartment configurations and key details to verify.",
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
    a: "According to the project website, Adarsh Urbanite is planned across approximately 40 acres in Bellandur, East Bangalore. Buyers should verify the final land area against the official project documents.",
  },
  {
    q: "How many apartments are planned in Adarsh Urbanite?",
    a: "The project website reports approximately 2,800 apartments in 2, 3 and 4 BHK configurations. The final unit count should be confirmed through the approved master plan and official project records.",
  },
  {
    q: "How many towers are there in the Adarsh Urbanite Master Plan?",
    a: "The supplied project information contains conflicting references to 15 and 30 towers. Buyers should confirm the final tower count using the latest official master plan before relying on either figure.",
  },
  {
    q: "What is the building structure mentioned in the Adarsh Urbanite Master Plan?",
    a: "The supplied project details describe a structure comprising two basement levels, a ground floor and 15 upper floors. Buyers should verify whether this configuration applies to all towers or only specific buildings.",
  },
  {
    q: "What percentage of open space is planned at Adarsh Urbanite?",
    a: "The project website reports approximately 80% open space. Buyers should check the approved site layout to understand how this percentage is calculated and which areas are included.",
  },
  {
    q: "What is the clubhouse size in the Adarsh Urbanite Master Plan?",
    a: "The project website reports a clubhouse measuring approximately 50,000 sq. ft. Its exact location, layout and facilities should be confirmed through the latest official master plan and amenity schedule.",
  },
  {
    q: "Which apartment configurations are available at Adarsh Urbanite?",
    a: "The project information lists 2, 3 and 4 BHK apartments. The supplied indicative super built-up areas are 1,150–1,250 sq. ft. for 2 BHK, 1,800–1,900 sq. ft. for 3 BHK and 2,200–2,300 sq. ft. for 4 BHK homes. Buyers should verify the final unit sizes against official floor plans.",
  },
  {
    q: "What details can buyers understand from the Adarsh Urbanite Master Plan?",
    a: "The master plan can help buyers assess tower locations, internal roads, entry and exit points, landscaped areas, the clubhouse and shared facilities. The exact arrangement should be reviewed in the latest official site layout.",
  },
  {
    q: "How can buyers choose the right tower in Adarsh Urbanite?",
    a: "Buyers should compare tower locations, apartment orientation, proximity to internal roads and shared facilities, and the surrounding buildings. Views, daylight, privacy and noise levels should also be evaluated using the relevant floor plans and site conditions.",
  },
  {
    q: "How can buyers verify the Adarsh Urbanite Master Plan and approvals?",
    a: "Buyers should request the latest official master plan, tower-wise building plans, apartment floor plans and amenity schedule. They should also verify applicable approvals and RERA registration details through official records before making a purchase decision.",
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
