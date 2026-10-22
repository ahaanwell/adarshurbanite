/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

function AmenitiesPage() {

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Amenities"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Adarsh Urbanite Amenities
          </h1>
          <DownloadActions/>
          
<div className="space-y-6 text-gray-800 mt-6">
  <p><strong>Adarsh Urbanite Amenities</strong> are an important consideration for buyers evaluating the proposed residential development in <b>Bellandur, East Bangalore</b>. According to the project website, the development is planned with more than <b>40 amenities</b> and a clubhouse measuring approximately <b>50,000 sq. ft.</b> These shared facilities are intended to support recreation, fitness, social activities and everyday convenience.</p>

  <p>The complete list of individual amenities has not been confirmed in the supplied project details. The following guide covers facilities commonly considered in luxury apartment communities. These are amenities for buyers to look for, <strong>not a verified list of facilities committed to <a href="https://www.adarshurbanite.co">Adarsh Urbanite</a></strong>. The final inventory should be checked against the developer's official amenity schedule.</p>
  <AmenitiesGrid />
  <h2 className="text-2xl font-bold">Adarsh Urbanite Amenities for Fitness and Wellness</h2>

  <p>Fitness and wellness facilities can help residents maintain exercise routines without travelling to separate centres. Their practical value depends on the equipment, operating hours, space and maintenance arrangements.</p>

  <p>Potential fitness and wellness amenities include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Fully equipped gymnasium</li>
    <li>Cardio training zone</li>
    <li>Strength training area</li>
    <li>Yoga studio</li>
    <li>Meditation room</li>
    <li>Aerobics studio</li>
    <li>Indoor stretching area</li>
    <li>Outdoor fitness stations</li>
    <li>Jogging track</li>
    <li>Walking track</li>
    <li>Swimming pool</li>
    <li>Children's swimming pool</li>
    <li>Poolside deck</li>
    <li>Changing rooms and showers</li>
    <li>Wellness or relaxation room</li>
    <li>Fitness instructor space</li>
  </ul>

  <p>Buyers should confirm which facilities are included and whether any services require separate membership or payment.</p>

  <h2 className="text-2xl font-bold">Adarsh Urbanite Clubhouse Amenities</h2>

  <p>The project website states that the clubhouse will measure approximately 50,000 sq. ft. The final clubhouse plan will determine how this space is divided among indoor recreation, gatherings and other shared activities.</p>

  <p>Possible clubhouse amenities to check include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Residents' lounge</li>
    <li>Multipurpose hall</li>
    <li>Indoor games room</li>
    <li>Table tennis area</li>
    <li>Billiards or pool room</li>
    <li>Chess and carrom area</li>
    <li>Board-games lounge</li>
    <li>Reading room</li>
    <li>Library</li>
    <li>Party hall</li>
    <li>Celebration room</li>
    <li>Community activity room</li>
    <li>Indoor recreation lounge</li>
    <li>Co-working space</li>
    <li>Meeting room</li>
    <li>Private dining area</li>
    <li>Hobby room</li>
    <li>Event space</li>
  </ul>

  <p>The official clubhouse layout should identify the facilities that are actually planned, along with any booking rules, operating hours or usage charges.</p>

  <h2 className="text-2xl font-bold">Outdoor and Landscaped Amenities</h2>

  <p>Outdoor spaces provide opportunities for walking, sitting and spending time outside the apartment. The project website reports approximately 80% open space, but buyers should verify how this figure is calculated and which areas are included.</p>

  <p>Potential outdoor amenities include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Landscaped gardens</li>
    <li>Central green spaces</li>
    <li>Walking pathways</li>
    <li>Jogging paths</li>
    <li>Tree-lined avenues</li>
    <li>Shaded seating areas</li>
    <li>Garden benches</li>
    <li>Lawn areas</li>
    <li>Flower gardens</li>
    <li>Outdoor relaxation zones</li>
    <li>Family seating areas</li>
    <li>Picnic spaces</li>
    <li>Open-air gathering areas</li>
    <li>Outdoor yoga zone</li>
    <li>Decorative water features</li>
    <li>Children's outdoor play area</li>
    <li>Landscaped courtyards</li>
    <li>Nature-inspired seating spaces</li>
  </ul>

  <p>The approved landscape plan should clarify how these spaces are arranged, whether residents can access them freely and how they connect to the residential towers and internal pathways.</p>

  <h2 className="text-2xl font-bold">Sports and Indoor Recreation Amenities</h2>

  <p>Sports facilities can support recreational activities for residents with different interests. Buyers should consider the available playing space, equipment, safety provisions and booking arrangements.</p>

  <p>Possible sports and recreation amenities include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Badminton court</li>
    <li>Basketball court or practice area</li>
    <li>Tennis court</li>
    <li>Squash court</li>
    <li>Multipurpose sports court</li>
    <li>Indoor table tennis</li>
    <li>Pool table</li>
    <li>Carrom boards</li>
    <li>Chess tables</li>
    <li>Board-game area</li>
    <li>Indoor recreation room</li>
    <li>Children's play zone</li>
    <li>Outdoor exercise area</li>
    <li>Family recreation room</li>
    <li>Hobby and activity space</li>
  </ul>

  <p>Not every luxury apartment development includes all these facilities. Their presence, dimensions and intended use should be confirmed through the official project documents.</p>

  <h2 className="text-2xl font-bold">Family and Children's Amenities</h2>

  <p>Family-oriented facilities can provide convenient spaces for play, social interaction and leisure. Their suitability depends on age-appropriate equipment, supervision arrangements and separation from vehicle movement.</p>

  <p>Potential amenities for families and children include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Children's playground</li>
    <li>Toddler play area</li>
    <li>Indoor children's playroom</li>
    <li>Age-appropriate play equipment</li>
    <li>Family seating zones</li>
    <li>Children's activity room</li>
    <li>Hobby room</li>
    <li>Multipurpose community hall</li>
    <li>Outdoor family lawn</li>
    <li>Celebration area</li>
    <li>Senior citizens' seating area</li>
    <li>Quiet relaxation corners</li>
    <li>Spaces for community activities</li>
  </ul>

  <p>Buyers should check whether play areas are positioned away from vehicle routes and whether seating allows adults to supervise children comfortably.</p>

  <h2 className="text-2xl font-bold">Convenience, Security and Essential Facilities</h2>

  <p>Everyday infrastructure is another important part of apartment living. Although some features are building services rather than lifestyle amenities, they can affect residents' convenience and safety.</p>

  <p>Facilities and provisions to verify include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Security personnel at entry points</li>
    <li>CCTV surveillance in designated common areas</li>
    <li>Controlled visitor access</li>
    <li>Intercom or visitor communication system</li>
    <li>Passenger lifts</li>
    <li>Service lifts, where provided</li>
    <li>Power backup for specified common services</li>
    <li>Fire detection and firefighting systems</li>
    <li>Dedicated parking areas</li>
    <li>Bicycle parking</li>
    <li>Waste segregation facilities</li>
    <li>Rainwater harvesting</li>
    <li>Water management systems</li>
    <li>Maintenance office</li>
    <li>Delivery or visitor waiting area</li>
    <li>Clearly marked emergency exits</li>
    <li>Accessible routes in common areas</li>
  </ul>

  <p>The final specifications should be checked against the approved building plans and project documents.</p>

  <h2 className="text-2xl font-bold">How to Verify Adarsh Urbanite Amenities</h2>

  <p>Before booking, buyers should request the latest amenity schedule, clubhouse plan and landscape layout. These documents can help distinguish confirmed facilities from indicative concepts or features that may change during planning.</p>

  <p>It is also useful to confirm which amenities will be available at possession, whether maintenance charges apply and whether access is subject to operating rules. Safety systems and essential building services should be reviewed separately from recreational facilities.</p>
</div>

<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Adarsh Urbanite Amenities – FAQs</h2>

  <h3 className="text-xl font-bold">1. How many amenities are planned at Adarsh Urbanite?</h3>
  <p>According to the project website, Adarsh Urbanite is planned with more than 40 amenities. Buyers should refer to the latest official amenity schedule for the complete list of facilities.</p>

  <h3 className="text-xl font-bold">2. What is the clubhouse size at Adarsh Urbanite?</h3>
  <p>The project website reports an approximately 50,000 sq. ft. clubhouse. The final layout and facilities should be verified through the developer's official project documents.</p>

  <h3 className="text-xl font-bold">3. What is the open space percentage at Adarsh Urbanite?</h3>
  <p>According to the supplied project details, Adarsh Urbanite has approximately 80% open space. Buyers should verify this figure against the approved site plan and clarify which areas are included.</p>

  <h3 className="text-xl font-bold">4. What fitness amenities are available at Adarsh Urbanite?</h3>
  <p>The supplied information does not confirm individual fitness facilities. Buyers should check the official amenity schedule for details about the gymnasium, swimming pool, yoga facilities, jogging track and other fitness provisions.</p>

  <h3 className="text-xl font-bold">5. What facilities are included in the Adarsh Urbanite clubhouse?</h3>
  <p>The clubhouse is reported to cover approximately 50,000 sq. ft., but its individual facilities have not been confirmed in the supplied details. Buyers should request the latest clubhouse layout to verify recreational and community spaces.</p>

  <h3 className="text-xl font-bold">6. Does Adarsh Urbanite have sports facilities?</h3>
  <p>The available project information does not confirm specific sports facilities. Buyers should consult the developer's official amenity list to establish whether indoor games, badminton courts or other sports areas are planned.</p>

  <h3 className="text-xl font-bold">7. What outdoor amenities are planned at Adarsh Urbanite?</h3>
  <p>The supplied details report approximately 80% open space but do not confirm individual outdoor amenities. Buyers should review the approved landscape plan for information about gardens, walking pathways, seating areas and recreational spaces.</p>

  <h3 className="text-xl font-bold">8. Does Adarsh Urbanite offer amenities for children and families?</h3>
  <p>The supplied information does not confirm specific children's or family amenities. Buyers should check the official amenity schedule for playgrounds, children's activity areas and other family-oriented facilities.</p>

  <h3 className="text-xl font-bold">9. What security and essential facilities are provided at Adarsh Urbanite?</h3>
  <p>The supplied project details do not specify the complete security and building-service provisions. Buyers should verify CCTV surveillance, access control, fire safety systems, lifts, parking and power backup through the relevant project specifications.</p>

  <h3 className="text-xl font-bold">10. How can buyers verify the Adarsh Urbanite amenities list before booking?</h3>
  <p>Buyers should request the latest official amenity schedule, clubhouse plan, landscape layout and approved building specifications. They should also confirm which facilities will be ready at possession and whether any maintenance or usage charges apply.</p>
</div>


        </div>
      </main>
    </>
  );
}

export default AmenitiesPage;
