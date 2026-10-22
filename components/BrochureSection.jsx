/* eslint-disable react/no-unescaped-entities */

export default function BrochureSection() {
  return (
    <section
      id="brochure"
      aria-labelledby="brochure-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="brochure-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            Adarsh Urbanite Brochure
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800">
    <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/download-brochure.webp"
              alt="Download Brochure" width={1200} height={675}
              loading="lazy"
            />
  <p>
    The <strong>Adarsh Urbanite brochure</strong> can help prospective buyers understand the proposed apartment configurations, master plan, amenities and construction specifications. The brochure should be reviewed alongside the latest official project documents to ensure that the information reflects the current development plans.
  </p>

  <p>Before relying on a brochure, check whether it includes:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Apartment floor plans and indicative areas</li>
    <li>Master plan and tower arrangements</li>
    <li>Proposed amenities and clubhouse facilities</li>
    <li>Construction specifications and materials</li>
    <li>Project address and developer details</li>
    <li>Applicable approvals and RERA registration information</li>
    <li>Proposed possession timeline and relevant conditions</li>
  </ul>

  <p>
    Buyers should obtain the latest available brochure through the developer's authorised channel. Any differences between promotional material, sanctioned plans and contractual documents should be clarified before booking.
  </p>
</div>

      </div>
    </section>
  );
}
