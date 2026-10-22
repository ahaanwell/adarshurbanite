/* eslint-disable react/no-unescaped-entities */
import AmenitiesGrid from "./AmenitiesGrid";
import { IntLink, ExtLink } from "./SeoLinks";

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Adarsh Urbanite
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The project website refers to more than <b>40 amenities</b> and a clubhouse measuring approximately 50,000 sq. ft. The development is also reported to include around <b>2,800 apartments</b>, making the capacity, accessibility and maintenance of shared facilities important points to review. The final facilities, specifications and availability should be checked against the official amenity schedule and approved project documents.
  </p>

  <p>
    When evaluating the <a href="https://www.adarshurbanite.co/amenities"><strong>amenities at Adarsh Urbanite</strong></a>, buyers should focus on the facilities that support regular use rather than relying only on the number of amenities listed. The location of recreational areas, access from residential towers and the provision of dedicated spaces for different age groups are important considerations.
  </p>

  <p>
    A clubhouse can provide indoor recreational and community spaces, depending on its confirmed facilities. Buyers should check the proposed layout, operating arrangements and whether particular facilities require separate charges or advance booking.
  </p>

  <p>
    Outdoor spaces also deserve attention. Landscaped gardens, walking routes, children's play areas and seating zones, where included in the final plan, can support everyday recreation. Their practical value depends on accessibility, maintenance arrangements, safety provisions and separation from vehicle movement.
  </p>

  <p>
    Before booking, prospective residents should request the current amenity list and confirm which facilities are proposed, approved, under development or available for use.
  </p>
</div>

        <AmenitiesGrid />
        
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Amenities and Lifestyle Features at Adarsh Urbanite</h2>

  <p>
    The Adarsh Urbanite website refers to more than 40 amenities and a clubhouse of approximately 50,000 sq. ft. The development is reported to comprise around 2,800 apartments. The final amenity list, facilities and specifications should be confirmed through current project documents before booking.
  </p>

  <p>
    When evaluating amenities, buyers should consider how the facilities are arranged within the development and whether they are convenient to access from the residential towers. The practical value of shared spaces depends on their design, availability and maintenance.
  </p>

  <p>
    Key aspects to review include:
  </p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Clubhouse size, facilities and accessibility</li>
    <li>Indoor recreation and fitness areas, where provided</li>
    <li>Landscaped gardens and outdoor seating spaces, where included</li>
    <li>Children's play areas and family recreation facilities, where specified</li>
    <li>Walking routes and pedestrian access</li>
    <li>Vehicle entry, visitor parking and internal circulation</li>
    <li>Security arrangements and access-control provisions</li>
  </ul>

  <p>
    The final amenity schedule should clarify which facilities are proposed and which are included in the approved development plan. Buyers should avoid assuming that a particular facility is available unless it is confirmed in the official documentation.
  </p>
</div>

      </div>
    </section>
  );
}
