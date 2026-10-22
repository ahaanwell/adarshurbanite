/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadActions from "@/components/DownloadActions";
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
  ["Price", "On Request"],
  ["Project Status", "Pre Launch 2027"],
];

function PricePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Adarsh Urbanite Price
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default PricePage;
