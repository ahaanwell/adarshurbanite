/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

import FloorPlanCards from "./FloorPlanCards";

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Adarsh Urbanite Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.adarshurbanite.co/floor-plan"><strong>Adarsh Urbanite floor plan</strong></a> information lists three primary apartment configurations: <b>2 BHK, 3 BHK and 4 BHK</b>. The project website reports approximately <b>2,800 apartments</b> in total, although the final unit count and configuration-wise distribution should be confirmed from official project documents. Each configuration serves different space requirements, making it important to assess room dimensions and internal arrangement alongside the total apartment area.
  </p>

  <ul className="list-disc space-y-3 pl-6">
    <li>
      <strong>2 BHK apartments:</strong> Listed with a super built-up area of approximately <b>1,150–1,250 sq. ft.</b>, these units include two bedrooms and two toilets. Buyers can examine the living and dining arrangement, kitchen access, bedroom dimensions and available utility space.
    </li>
    <li>
      <strong>3 BHK apartments:</strong> These units are listed at approximately <b>1,800–1,900 sq. ft.</b> of super built-up area, with three bedrooms and three toilets. The additional bedroom can provide flexibility for a home office, guests or a growing family.
    </li>
    <li>
      <strong>4 BHK apartments:</strong> With an indicative super built-up area of <b>2,200–2,300 sq. ft.</b>, this configuration includes four bedrooms, four toilets and a maid's room. The floor plan should be assessed for bedroom privacy, service-area placement and the distribution of space between private and shared rooms.
    </li>
  </ul>

  <p>
    The estimated carpet areas supplied for these configurations are indicative and should be checked against the final unit-specific plans. Carpet area, balcony dimensions, structural columns and the placement of doors and windows can all affect how efficiently an apartment functions in everyday use.
  </p>
</div>
<FloorPlanCards />

      </div>
    </section>
  );
}