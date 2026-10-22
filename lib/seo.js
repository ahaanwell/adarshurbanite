// Shared SEO constants and builders for page metadata and JSON-LD.
// Project facts live here so every page stays consistent.

export const SITE_URL = "https://www.adarshurbanite.co";
export const SITE_NAME = "Adarsh Urbanite";

export const HOME_TITLE =
  "Adarsh Urbanite | Bellandur Bangalore | 2, 3 & 4 BHK Apartments | Brochure & Review";
export const HOME_DESCRIPTION =
  "Explore Adarsh Urbanite in Bellandur, Bangalore, a premium 40-acre township offering 2, 3 & 4 BHK apartments, a 50,000 sq. ft. clubhouse, 40+ amenities, project details, brochure, and reviews.";

export const DEFAULT_IMAGE = {
  url: `${SITE_URL}/images/banners/adarshurbanite.webp`,
  width: 1200,
  height: 720,
  alt: "Adarsh Urbanite | Bellandur Bangalore | 2, 3 & 4 BHK Apartments | Brochure & Review",
};

export const PROJECT = {
  name: SITE_NAME,
  developer: "Adarsh Group",
  location: "Bellandur Lake Road",
  city: "Bangalore",
  region: "Karnataka",
  country: "IN",
  landArea: "40 acres",
  towers: 15,
  configurations: ["2 BHK", "3 BHK", "4 BHK"],
  status: "Pre Launch 2027",
};

export const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: PROJECT.location,
  addressLocality: PROJECT.city,
  addressRegion: PROJECT.region,
  addressCountry: PROJECT.country,
};

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROJECT_ID = `${SITE_URL}/#project`;

// Site-wide nodes, rendered once from the root layout
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
        width: 1698,
        height: 770,
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
  ],
};

// The project itself, as an ApartmentComplex
export const projectNode = {
  "@type": "ApartmentComplex",
  "@id": PROJECT_ID,
  name: SITE_NAME,
  description: HOME_DESCRIPTION,
  url: `${SITE_URL}/`,
  image: [
    `${SITE_URL}/images/banners/adarshurbanite.webp`,
    `${SITE_URL}/images/banners/adarsh-urbanite.webp`,
    `${SITE_URL}/images/banners/adarshurbanite-banner.webp`,
  ],
  address: ADDRESS,
  containedInPlace: {
    "@type": "City",
    name: PROJECT.city,
  },
  accommodationFloorPlan: [2, 3, 4].map((beds) => ({
    "@type": "FloorPlan",
    name: `${beds} BHK Apartment`,
    numberOfBedrooms: beds,
    url: `${SITE_URL}/floor-plan`,
  })),
  additionalProperty: [
    { "@type": "PropertyValue", name: "Developer", value: PROJECT.developer },
    { "@type": "PropertyValue", name: "Land Area", value: PROJECT.landArea },
    { "@type": "PropertyValue", name: "Number of Towers", value: PROJECT.towers },
    { "@type": "PropertyValue", name: "Configurations", value: PROJECT.configurations.join(", ") },
    { "@type": "PropertyValue", name: "Project Status", value: PROJECT.status },
  ],
};

/**
 * Metadata for an inner page.
 * path: "/price", etc. image: optional { url, width, height, alt } with url relative to the site.
 */
export function pageMetadata({ title, description, path, keywords = [], image }) {
  const url = `${SITE_URL}${path}`;
  const img = image
    ? { ...image, url: `${SITE_URL}${image.url}` }
    : DEFAULT_IMAGE;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [img],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
  };
}

/** JSON-LD for an inner page: WebPage + breadcrumb, linked to the project. */
export function pageSchema({ title, description, path, name }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PROJECT_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };
}
