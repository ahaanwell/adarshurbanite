export const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "/images/amenities/gym.svg" },
  { id: 2,  name: "Swimming Pool",       image: "/images/amenities/swm.svg" },
  { id: 3,  name: "Yoga Pavilion",       image: "/images/amenities/yoga.svg" },
  { id: 4,  name: "Video Door Phone",    image: "/images/amenities/videos.svg" },
  { id: 5,  name: "Kids Activity Zone",  image: "/images/amenities/kids.svg" },
  { id: 6,  name: "Mini Theater",        image: "/images/amenities/mine.svg" },
  { id: 7,  name: "Aerobics Room",       image: "/images/amenities/tennis.svg" },
  { id: 8,  name: "Indoor Games Room",   image: "/images/amenities/chess.svg" },
  { id: 9,  name: "Club House",          image: "/images/amenities/disco-ball.svg" },
  { id: 10, name: "Dance/Music",         image: "/images/amenities/dance.svg" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "/images/amenities/cctv.svg" },
  { id: 12, name: "Jogging Track",       image: "/images/amenities/jog.svg" },
  { id: 13, name: "Tennis Court",        image: "/images/amenities/tennis-court.svg" },
  { id: 14, name: "Amphitheatre",        image: "/images/amenities/amphitheatre.svg" },
  { id: 15, name: "EV Charging Points",  image: "/images/amenities/ev-charging.svg" },
];

export default function AmenitiesGrid() {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
      aria-label="Adarsh Urbanite amenities"
    >
      {amenitiesData.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
        >
          <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
            <img
              src={item.image}
              alt={`${item.name} at Adarsh Urbanite`}
              width={512}
              height={512}
              className="w-full h-[90%] object-contain"
              loading="lazy"
            />
          </div>

          <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
