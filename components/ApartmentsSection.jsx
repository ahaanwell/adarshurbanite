/* eslint-disable react/no-unescaped-entities */

export default function ApartmentsSection() {
  return (
    <section
      id="apartments"
      aria-labelledby="apartments-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="apartments-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            Apartments at Adarsh Urbanite
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800">
    <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/apartments.webp"
              alt="Apartments at Adarsh Urbanite" width={1200} height={675}
              loading="lazy"
            />
  <p>
    <b>Apartments in Bangalore</b> offer different options for buyers seeking a home close to employment areas, schools, healthcare facilities and everyday services. The choice of apartment depends on household size, budget, usable space and the convenience of the surrounding neighbourhood.
  </p>

  <p>
    Adarsh Urbanite, located in Bellandur, East Bangalore, is described as a high-rise residential apartment project offering 2, 3 and 4 BHK configurations. The supplied project information indicates a proposed development spread across approximately 40 acres and reports around 2,800 apartments. These figures and the final project specifications should be verified against official documents.
  </p>

  <p>
    The listed apartment sizes range from approximately 1,150 sq. ft. for 2 BHK units to 2,300 sq. ft. for 4 BHK units, measured by super built-up area. The three-bedroom configuration is listed at approximately 1,800–1,900 sq. ft.
  </p>

  <p>
    Each configuration serves different space requirements. Buyers should compare carpet area, room dimensions, kitchen and utility arrangements, storage and balcony space to understand how comfortably an apartment can support everyday activities.
  </p>

  <p>
    The project website describes Adarsh Urbanite as being at the pre-launch or Expression of Interest (EOI) stage. Its current availability, booking terms and launch status should be confirmed before proceeding with a purchase.
  </p>
</div>

      </div>
    </section>
  );
}
