/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadActions from "@/components/DownloadActions";
import LocationMap from "@/components/LocationMap";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "Adarsh Urbanite"],
  ["Developer", "Adarsh Group"],
  ["Location", "Bellandur Lake Road, East Bengaluru"],
  ["Connecting Roads", "SH-35, Kondasapura Road, BDA Road"],
  ["Nearby Hubs", "Bellandur, Whitefield, Marathahalli, Sarjapur Road"],
  ["Land Area", "40 Acres"],
  ["Towers", "15 Towers"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Project Status", "Pre Launch 2027"],
];

function LocationPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Adarsh Urbanite Location
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default LocationPage;
