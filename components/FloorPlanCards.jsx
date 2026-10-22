import FloorPlanClient from "./FloorPlanClient";

export const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "/images/floorplans/2bhk.webp",
    alt: "Adarsh Urbanite 2 BHK floor plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "/images/floorplans/3bhk.webp",
    alt: "Adarsh Urbanite 3 BHK floor plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "/images/floorplans/4bhk.webp",
    alt: "Adarsh Urbanite 4 BHK floor plan",
  },
];

export default function FloorPlanCards() {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-label="Adarsh Urbanite floor plans"
    >
      {floorPlans.map((plan) => (
        <li
          key={plan.id}
          className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
        >
          <div className="relative w-full aspect-9/5 overflow-hidden bg-white">
            <img
              src={plan.image}
              alt={plan.alt}
              title={`Adarsh Urbanite ${plan.label}`}
              width={720}
              height={400}
              className="w-full h-full object-contain"
              loading="lazy"
            />

            <FloorPlanClient plan={plan} />
          </div>

          <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
            {plan.label}
          </div>
        </li>
      ))}
    </ul>
  );
}
