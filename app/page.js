import AboutDeveloperSection from "@/components/AboutDeveloper";
import AmenitiesSection from "@/components/AmenitiesSection";
import ApartmentsSection from "@/components/ApartmentsSection";
import ApprovalsAndLegalStatusSection from "@/components/ApprovalsAndLegalStatus";
import BlogSection from "@/components/BlogsSection";
import BrochureSection from "@/components/BrochureSection";
import EMICalculator from "@/components/Emicalculator";
import EOISection from "@/components/EOISection";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ImportantPlacesSection from "@/components/ImportantPlaces";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import ModernUrbanLivingSection from "@/components/ModernUrbanLiving";
import OtherProjectsSection from "@/components/OtherProjectsSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import ProjectUpdateSection from "@/components/ProjectUpdateSection";
import RERAStatusSection from "@/components/RERAStatusSection";
import ReviewsAndInvestmentSection from "@/components/ReviewsAndInvestment";
import TaxesChargesSection from "@/components/TaxesChargesSection";
import TopHospitalsSection from "@/components/TopHospitalsSection";
import TopSchoolsSection from "@/components/TopSchoolsSection";
import TopShoppingMallsSection from "@/components/TopShopingMallsSection";
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, projectNode } from "@/lib/seo";

// Title, description and social tags come from the root layout defaults
export const metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  keywords: [
    "Adarsh Urbanite",
    "Adarsh Urbanite Bellandur",
    "Adarsh Urbanite Bangalore",
    "Adarsh Urbanite Bellandur Lake Road",
    "Adarsh Bangalore",
    "Adarsh Urbanite pre launch",
    "Adarsh Urbanite 2 BHK",
    "Adarsh Urbanite 3 BHK",
    "Adarsh Urbanite 4 BHK",
    "pre launch apartments Bellandur Lake Road",
    "2, 3 and 4 BHK apartments East Bangalore",
  ],
};



const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
      primaryImageOfPage: `${SITE_URL}/images/banners/adarshurbanite.webp`,
    },

    projectNode,

    // FAQ schema – matches components/FaqSection.jsx
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Adarsh Urbanite located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adarsh Urbanite is described as a proposed residential apartment development on Bellandur Lake Road, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka – 560037. Its location in East Bangalore offers access to residential neighbourhoods, workplaces and everyday services. Buyers should verify the exact site entrance and approach roads before visiting.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project is associated with Adarsh Developers, also referred to as Adarsh Group in the available project information. Prospective buyers should verify the legal name of the promoter through the relevant project documents and Karnataka RERA records before entering into a transaction.",
          },
        },
        {
          "@type": "Question",
          name: "What types of apartments are planned at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project information describes three apartment configurations: 2 BHK, 3 BHK and 4 BHK. The final availability, layouts, room dimensions and specifications should be confirmed using the latest approved floor plans and official sales documents.",
          },
        },
        {
          "@type": "Question",
          name: "What is the total land area of Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project website reports a development area of approximately 40 acres. Buyers should compare this figure with the land extent disclosed in the sanctioned master plan and applicable registration documents.",
          },
        },
        {
          "@type": "Question",
          name: "How many apartments are planned at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The supplied project information reports approximately 2,800 apartments. This figure should be treated as indicative until the final unit count is confirmed through the approved project plans and official disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "What are the apartment sizes at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The reported super built-up areas are approximately: 2 BHK: 1,150–1,250 sq. ft.; 3 BHK: 1,800–1,900 sq. ft.; 4 BHK: 2,200–2,300 sq. ft. These are indicative figures published in project-related information. Buyers should verify the area of each available unit and distinguish super built-up area from carpet area before comparing prices.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of apartments at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The final apartment prices have not been reliably established in the information reviewed. Buyers should request the latest official price list and an itemised cost sheet covering the base price, applicable taxes, registration expenses, parking charges where applicable and other contractual payments.",
          },
        },
        {
          "@type": "Question",
          name: "Is Adarsh Urbanite RERA registered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project's current RERA registration status has not been independently verified. Although some project marketing material makes approval-related claims, other project information states that the RERA number is awaited. Buyers should search the official Karnataka RERA portal at https://rera.karnataka.gov.in/ and confirm the promoter's identity and registration details before committing money.",
          },
        },
        {
          "@type": "Question",
          name: "Is Adarsh Urbanite currently in the pre-launch stage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The supplied information describes the project as being in a pre-launch or Expression of Interest (EOI) stage. However, other project listings publish a launch date in June 2026. Its actual launch and booking status as of October 2026 should therefore be confirmed directly with the authorised developer and checked against applicable registration requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What is the expected possession date of Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project website mentions July 2031 as the expected possession date, while another project listing gives December 2031. This discrepancy means neither date should be treated as confirmed without checking the applicable official records. Buyers should verify the declared completion date and the possession terms in the sale agreement.",
          },
        },
        {
          "@type": "Question",
          name: "What amenities are proposed at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project-related information describes a clubhouse of approximately 50,000 sq. ft. and more than 40 proposed amenities. Facilities mentioned include a swimming pool, gymnasium, yoga room, landscaped areas, children's play areas and community spaces. Buyers should confirm the final amenity list, specifications and delivery commitments against the approved plans and contractual documents.",
          },
        },
        {
          "@type": "Question",
          name: "How much open space is planned at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project website reports approximately 80% open space. Buyers should verify how this figure is calculated and what it includes by reviewing the sanctioned master plan, landscaping layout and official project disclosures. The advertised percentage alone does not establish the amount of usable recreational space available to residents.",
          },
        },
        {
          "@type": "Question",
          name: "What is the location advantage of Adarsh Urbanite in Bellandur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bellandur is an established East Bangalore locality with residential areas, employment districts and everyday services. The suitability of Adarsh Urbanite's location will depend on the buyer's workplace, commuting route, access to schools and hospitals, and travel requirements. Visiting the site and checking peak-hour traffic can help assess practical connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "Can buyers submit an EOI for Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project information refers to an EOI stage, but the current status and terms have not been independently confirmed. Before submitting an Expression of Interest, buyers should establish whether the process is officially open, whether any payment is requested, the applicable refund conditions and the legal status of the project. An EOI should not be assumed to guarantee a particular apartment, price or allotment priority.",
          },
        },
        {
          "@type": "Question",
          name: "Is a home loan available for Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Home loan availability depends on the buyer's financial eligibility, the lender's assessment and the property's documentation. Buyers should obtain confirmation directly from the relevant bank or housing finance company. They should not assume that a lender has approved the project without written confirmation.",
          },
        },
        {
          "@type": "Question",
          name: "What documents should buyers verify before purchasing an apartment at Adarsh Urbanite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buyers should request and review the applicable title and ownership records, sanctioned building plans, land and development permissions, RERA registration and disclosures, apartment specifications, cost sheet and Agreement for Sale. A qualified property lawyer can assess the documents and identify any inconsistencies before a purchase commitment is made.",
          },
        },
        {
          "@type": "Question",
          name: "Is Adarsh Urbanite suitable for investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project may be considered by buyers evaluating residential property in Bellandur, but its investment suitability depends on the verified purchase price, legal status, final specifications, competing developments, rental demand and ongoing ownership costs. Future appreciation or rental returns cannot be guaranteed. Buyers should conduct independent financial and legal due diligence.",
          },
        },
        {
          "@type": "Question",
          name: "How can buyers obtain the Adarsh Urbanite brochure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buyers can request the latest available brochure through the developer's authorised channel. They should check the publication date and compare the stated apartment sizes, master plan, amenities and possession timeline with official project documents. Promotional material should not replace sanctioned plans, registration records or contractual commitments.",
          },
        },
      ],
    },
  ],
};



export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <EMICalculator/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <ModernUrbanLivingSection/>
    <RERAStatusSection/>
    <ApartmentsSection/>
    <ProjectUpdateSection/>
    <BrochureSection/>
    <EOISection/>
    <ApprovalsAndLegalStatusSection/>
    <TaxesChargesSection/>
    <ReviewsAndInvestmentSection/>
    <OtherProjectsSection/>
    <ImportantPlacesSection/>
    <AboutDeveloperSection/>
    <TopSchoolsSection/>
    <TopHospitalsSection/>
    <TopShoppingMallsSection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
