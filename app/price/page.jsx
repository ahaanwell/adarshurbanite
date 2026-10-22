import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/price",
  name: "Price",
  title: "Adarsh Urbanite Price List for 2, 3 & 4 BHK",
  description:
    "Check Adarsh Urbanite Price details for 2, 3 and 4 BHK apartments, stated sizes, estimated carpet areas, additional charges and quotation guidance.",
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
    q: "What is the price of Adarsh Urbanite apartments?",
    a: "The Adarsh Urbanite price is listed as Price on Request for all apartment configurations in the supplied project information. Buyers should request the latest official price sheet for confirmed pricing.",
  },
  {
    q: "What is the Adarsh Urbanite 2 BHK apartment price?",
    a: "The price of a 2 BHK apartment at Adarsh Urbanite is available on request. The stated super built-up area ranges from 1,150 to 1,250 sq. ft. Buyers should obtain a unit-specific quotation from the developer.",
  },
  {
    q: "What is the Adarsh Urbanite 3 BHK apartment price?",
    a: "The 3 BHK apartment price is available on request. The stated super built-up area ranges from 1,800 to 1,900 sq. ft. The final cost should be confirmed through the latest official price sheet.",
  },
  {
    q: "What is the Adarsh Urbanite 4 BHK apartment price?",
    a: "The 4 BHK apartment price is listed as Price on Request. The stated super built-up area ranges from 2,200 to 2,300 sq. ft., with four toilets and a maid's room.",
  },
  {
    q: "What is the Adarsh Urbanite price list based on apartment size?",
    a: "The supplied project information lists 2 BHK apartments of 1,150–1,250 sq. ft., 3 BHK apartments of 1,800–1,900 sq. ft. and 4 BHK apartments of 2,200–2,300 sq. ft. Prices for all three configurations are available on request.",
  },
  {
    q: "What additional charges should buyers consider when calculating the Adarsh Urbanite price?",
    a: "Depending on applicable regulations and the purchase terms, additional costs may include stamp duty, registration charges, applicable GST, maintenance deposits, parking charges and utility-related fees. Buyers should request a written cost sheet to confirm which charges apply.",
  },
  {
    q: "Does the Adarsh Urbanite price include parking and maintenance charges?",
    a: "The supplied project information does not confirm whether parking and maintenance charges are included in the apartment price. Buyers should request a written quotation specifying the included items and any additional charges.",
  },
  {
    q: "What is the payment plan for Adarsh Urbanite apartments?",
    a: "The payment plan has not been provided in the supplied project information. Buyers should request the official payment schedule, booking terms, cancellation conditions and refund policy before making any payment.",
  },
  {
    q: "What is the possession date of Adarsh Urbanite?",
    a: "The project website states a possession date of July 2031. Buyers should verify this timeline against the applicable official project documents and RERA records before making financial commitments.",
  },
  {
    q: "How can buyers get the latest Adarsh Urbanite price list?",
    a: "Buyers can request the latest official price sheet and unit availability details from the project representative. The quotation should specify the apartment number, configuration, super built-up area, carpet area, additional charges and payment schedule.",
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
