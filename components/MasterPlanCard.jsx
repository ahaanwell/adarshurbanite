import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanCard() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative w-full aspect-5/3 bg-gray-100 overflow-hidden">
        <img
          src="/images/master-plan.webp"
          alt="Adarsh Urbanite master plan – 27 towers on 52.5 acres, Whitefield–Hoskote Road, Bengaluru"
          title="Adarsh Urbanite Master Plan"
          width={1250}
          height={750}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <MasterPlanClient/>
      </div>

      <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
        Master Plan
      </div>
    </div>
  );
}
