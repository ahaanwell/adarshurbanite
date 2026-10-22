/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

import MasterPlanCard from "./MasterPlanCard";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Adarsh Urbanite Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.adarshurbanite.co/master-plan"><strong>Adarsh Urbanite Master Plan</strong></a> is said to cover about 40 acres in Bellandur, East Bangalore, and have approximately <b>2,800 apartments</b> throughout the entire project.
  </p>

  <p>
    In addition, the website says that approximately 80% of the project will be open space. It is recommended that you check these numbers against the approved Master Plan to see how much of the land is being used for residential buildings; landscaping; internal roads; and shared facilities. How the residential towers are arranged is another important aspect of evaluating a high rise building. The way each tower is oriented; the distance between them; how they are accessed by vehicle and foot; etc., all affect daylighting, ventilation, privacy, and movement within the community.
  </p>

  <p>
    You should also review the Master Plan to find out where the Clubhouse, Recreational Facilities, Entry/Exit Points, Visitor Parking, and Service Access are located. This information will allow you to determine if the layout of the development allows for easy movement of people and vehicles while minimizing potential conflicts between the two. At this size of development, the relationship between open areas and residential blocks is especially important. You should verify if the stated open-space percentage includes landscaped gardens, circulation areas, or other non-built-up parts of the site.
  </p>
</div>
<MasterPlanCard />

      </div>
    </section>
  );
}
