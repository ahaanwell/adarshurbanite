/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "Adarsh Urbanite"],
  ["Developer", "Adarsh Group"],
  ["Location", "Bellandur Lake Road, East Bengaluru"],
  ["Land Area", "40 Acres"],
  ["Towers", "15 Towers"],
  ["Clubhouse", "Approx. 50,000 sq. ft."],
  ["Amenities", "250+ Planned Amenities"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Project Status", "Pre Launch 2027"],
];

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
        </div>
      </main>
    </>
  );
}

export default AmenitiesPage;
