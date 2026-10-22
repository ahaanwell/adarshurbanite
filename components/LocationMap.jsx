import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23696.26002568959!2d77.67483349999999!3d12.932318149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13752e34e92f%3A0xc2b234a66f986aae!2sBellandur%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1792609334807!5m2!1sen!2sin";

export const MAP_LINK_URL = "https://maps.app.goo.gl/JbwWf6tJ7KnNKkYn7";

export default function LocationMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
      <div className="w-full h-[380px] md:h-[460px]">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Adarsh Urbanite location map — Whitefield–Hoskote Road, East Bengaluru"
          aria-label="Google Maps showing Adarsh Urbanite location on Whitefield–Hoskote Road, East Bengaluru"
        />
      </div>

      <Link
        href={MAP_LINK_URL}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Know more about Adarsh Urbanite location on Whitefield–Hoskote Road"
        className="block w-full bg-primary text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
      >
        Know More About Location
      </Link>
    </div>
  );
}
