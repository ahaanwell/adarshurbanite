/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import FloorPlanCards from "@/components/FloorPlanCards";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "Adarsh Urbanite"],
  ["Developer", "Adarsh Group"],
  ["Location", "Bellandur Lake Road, East Bengaluru"],
  ["Land Area", "40 Acres"],
  ["Towers", "15 Towers"],
  ["Total Units", "2800 Units"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Apartment Sizes", "1,240 – 2,600 sq. ft. (indicative)"],
  ["Project Status", "Pre Launch 2027"],
];

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Adarsh Urbanite Floor Plan
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
