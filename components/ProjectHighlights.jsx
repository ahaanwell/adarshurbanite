/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ On Request",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "On Request",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "40 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "2800 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "2 B + G + 15 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "15 Towers",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Adarsh Group",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "2031",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Adarsh Urbanite Overview
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="space-y-6 text-gray-800 mb-6">
          <p>
            <strong>
              <a href="https://www.adarshurbanite.co">Adarsh Urbanite</a>
            </strong> is an upcoming high rise residential apartment complex that will be
            developed by <b><a href="https://www.adarshdevelopers.com" target="_blank" rel="noopener noreferrer">Adarsh Developers</a></b> in <b>Bellandur</b>, which is in <a href="https://en.wikipedia.org/wiki/Bangalore_East" target="_blank" rel="noopener noreferrer">East
            Bangalore</a>. Based on the project's website, this development will
            cover about <b>40 acres</b> of land and will have approximately <b>2,800
            apartments in 2, 3 and 4 BHK configurations</b>.
          </p>

          <p>
            The proposed layout includes residential towers, landscaped open
            spaces and shared facilities. These details need to be verified
            against the approved project plan and other official disclosures.
            The project is located close to <b>Bellandur Lake, Bellandur Lake Road,
            Kariyammana Agrahara, Bengaluru, Karnataka – 560037</b>. Due to its
            location, residents will have easy access to many established
            residential neighborhoods and employment areas throughout East
            Bangalore. When evaluating the suitability of the project for
            residential purposes, potential buyers can evaluate the apartment
            layouts, internal circulation, open space planning and proximity to
            nearby workplaces.
          </p>

          <p>
            Although the project is listed on its website as being in the
            pre-launch or Expression of Interest (EOI) stage, buyers should
            verify the current development status, launch timeline and statutory
            approvals through official documentation prior to making a booking
            decision.
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Adarsh Urbanite project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 mt-6">
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl font-bold">
              Adarsh Urbanite Apartment Configurations
            </h2>

            <p>
              The project has been registered as having three types of
              apartments; <strong>2BHK, 3BHK and 4BHK</strong>. According to the project's
              website, there are approximately <strong>2,800 apartments</strong> planned for this
              development. However, you will need to check the most recent
              documentation regarding the project and approved floor plans to
              determine the actual number of units available, how many units are
              available in each configuration type, the amount of usable space
              in each unit and how the rooms are arranged.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>2 BHK + 2 Toilets (1,150–1,250 sq. ft.):</strong> These
                apartments may suit smaller families, couples and buyers looking
                for a two-bedroom home. When reviewing the floor plan, check the
                dimensions of both bedrooms, the relationship between the living
                and dining areas, kitchen access and the provision for utility
                space.
              </li>
              <li>
                <strong>3 BHK + 3 Toilets (1,800–1,900 sq. ft.):</strong> The
                three-bedroom configuration offers additional room for families
                that need separate bedrooms, a work-from-home area or flexible
                space for guests. Buyers should examine bedroom proportions,
                bathroom access, storage provisions and the circulation between
                private and shared areas.
              </li>
              <li>
                <strong>
                  4 BHK + 4 Toilets + Maid's Room (2,200–2,300 sq. ft.):
                </strong>{" "}
                This configuration is intended for households requiring more
                bedrooms and additional domestic support space. The floor plan
                should be checked for the separation of family and service
                areas, the placement of the maid's room, and the amount of
                usable space remaining in the living and dining zones.
              </li>
            </ul>

            <p>
              The areas listed above are indicative super built-up areas. Carpet
              area, room dimensions, balcony sizes and the final layout should
              be verified against the relevant unit-specific plans before
              comparing apartments.
            </p>
          </div>

          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl font-bold">
              Adarsh Urbanite Layout and Space Planning
            </h2>

            <p>
              The overall site layout is an important factor in any large
              residential development such as Adarsh Urbanite, which is reported
              to have approximately <b>2,800 apartments</b> on about <b>40 acres</b>. The
              website says that the project has approximately <b>80% open space</b>.
              Buyers should check how this number was determined and how
              landscaping, recreation, internal roads and other shared
              facilities are located throughout the site.
            </p>

            <p>
              In addition to the above, the project information also mentions
              multiple high-rise towers and shared amenities. By reviewing the
              approved master plan, buyers can gain insight into the distance
              between buildings, location of shared facilities, pedestrian
              movement and the relationship between residential blocks and open
              spaces. When selecting an apartment, the best way to evaluate
              options is to compare the floor plan with the master plan.
            </p>

            <p>
              This will make it easier to determine natural light, ventilation,
              privacy, circulation space and the functional layout of the rooms
              rather than just looking at the total size of the apartment. Note:
              Tower count, floor structure, unit availability, pricing, launch
              and possession dates, <b>RERA registration</b> and statutory approvals
              should be verified through current official project documentation.
              The information provided above is based on the provided project
              documentation and should not be considered as independent
              verification of the development's status.
            </p>

            <h2 className="text-2xl font-bold">Key Project Highlights</h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Project:</strong> Adarsh Urbanite
              </li>
              <li>
                <strong>Developer:</strong> Adarsh Developers / Adarsh Group, as
                stated in the supplied information
              </li>
              <li>
                <strong>Location:</strong> Bellandur Lake Road, Kariyammana
                Agrahara, Bellandur, Bengaluru
              </li>
              <li>
                <strong>Apartment configurations:</strong> 2, 3 and 4 BHK
              </li>
              <li>
                <strong>Total apartments:</strong> Approximately 2,800, as
                stated on the project website; official confirmation required
              </li>
              <li>
                <strong>Reported land area:</strong> Approximately 40 acres
              </li>
              <li>
                <strong>Reported open space:</strong> 80%, subject to
                verification
              </li>
              <li>
                <strong>Clubhouse:</strong> Approximately 50,000 sq. ft., as
                stated on the website
              </li>
              <li>
                <strong>Starting price:</strong> On request
              </li>
              <li>
                <strong>Possession:</strong> July 2031, as stated on the
                website; not independently verified
              </li>
              <li>
                <strong>RERA registration:</strong> Not independently verified
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl font-bold">
              Apartment Planning and Architectural Design
            </h2>

            <p>
              The usability of a large-scale residential development is
              determined by both the layout of each individual apartment and the
              way that the multiple buildings are organized on-site. When
              reviewing a project such as this one which has been reported to
              contain approximately <b>2,800 Units</b>, it will be necessary to
              evaluate several additional elements such as tower spacing, access
              routes and the placement of shared amenities.
            </p>

            <p>
              When considering purchasing an apartment at Adarsh Urbanite,
              buyers should assess how well the layout of their potential home
              accommodates daily activities such as cooking, eating, working and
              sleeping. Factors such as bedroom size, placement of kitchens and
              utilities, availability of storage space and the relationship
              between living spaces and balconies can all impact the overall
              comfort level of each unit. In addition to assessing the layout of
              individual apartments, buyers should also consider the
              organization of the entire development. Important planning
              considerations include tower orientation, building spacing,
              vehicular access and pedestrian pathways.
            </p>

            <p>
              Additionally, the placement of shared amenities can have a
              significant impact on convenience; especially for families with
              children and elderly residents. Buyers should not rely solely on
              general descriptions of architectural quality or planning
              efficiency when evaluating a property. Instead, they should
              request copies of the actual plans and specifications for the
              project. By reviewing these documents, buyers will gain a better
              understanding of what is being proposed for the development and be
              able to make a more informed comparison with other available {" "}
               <b>apartments in Bellandur</b>. Note: Buyers should verify all project
              specifications, number of towers, approvals, pricing, construction
              status and timeline for possession with current official
              documentation prior to making a final decision regarding their
              purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
