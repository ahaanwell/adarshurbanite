/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK",        size: "1,150–1,250 sq. ft.",    price: "₹ On Request" },
  { type: "3 BHK",        size: "1,800–1,900 sq. ft.",  price: "₹ On Request" },
  { type: "4 BHK",  size: "2,200–2,300 sq. ft.",  price: "₹ On Request" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Adarsh Urbanite Price List and Cost Sheet
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />

        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    <strong><a href="https://www.adarshurbanite.co/price">Pricing for Adarsh Urbanite</a></strong> in <>Bellandur, East Bangalore</> is currently listed as on request. Adarsh Urbanite is a high-rise residential development that will offer <b>2, 3 &amp; 4 BHK apartments</b>. The final price of each apartment may vary based upon its configuration, super built-up area, floor level, orientation and any other applicable charges. Buyers who are comparing apartments at Adarsh Urbanite should obtain the full cost breakdown and not rely solely on the starting price.
  </p>

  <p>
    The full cost breakdown includes the base price of the apartment, applicable taxes, registration charges, parking fees and any other charges specified by the developer. Buyers should obtain the official price list and current booking terms directly from the project's authorized sales channel. Since the launch status and pricing details have not been independently verified, prospective buyers should verify the most up-to-date information prior to making a financial commitment.
  </p>
</div>


        <div className="flex flex-col lg:flex-row gap-0 mt-6">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/adarsh-urbanite-costing-details.png" alt="Adarsh Urbanite cost sheet and price details" width={320} height={174} />
            <DownloadCostSheetActions/>
          </div>

        </div>
        <div className="space-y-6 mt-6">
          
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Apartment Prices at Adarsh Urbanite</h2>

  <p>
    The pricing of <strong>Adarsh Urbanite Apartments</strong> will be provided upon request. The project is located in Bellandur, East Bangalore; and is referred to as a high-rise residential development that offers <b>2, 3 and 4 BHK apartments</b>. The final price may differ based on the apartment configuration, super built-up area, floor level, unit location and any other applicable charges.
  </p>

  <p>
    Buyers should ask for the most recent price list and a detailed cost breakdown from the authorized sales team to get an accurate estimate. Builder prices and booking terms may change over time; therefore, it is important to verify the current rates before making a decision. Bellandur's indicative average property rate is approximately <b>₹14,750 per sq. ft.</b>, based on the reference number given. This is a general area-level benchmark and not the confirmed selling rate for Adarsh Urbanite. Property prices can vary depending on the project, property type, specifications and transaction details.
  </p>

  <h3 className="text-xl font-bold">Adarsh Urbanite Apartment Price Factors</h3>

  <p>
    The following indicative apartment sizes can help buyers understand the different configurations available at the project.
  </p>

  <ul className="list-disc space-y-3 pl-6">
    <li>
      <strong>2 BHK apartments (1,150–1,250 sq. ft.):</strong> A two-bedroom option for buyers looking for a home with a relatively compact layout. The final price depends on the selected unit and its specifications.
    </li>
    <li>
      <strong>3 BHK apartments (1,800–1,900 sq. ft.):</strong> A larger configuration that may suit families requiring an additional bedroom or more flexible living space.
    </li>
    <li>
      <strong>4 BHK apartments (2,200–2,300 sq. ft.):</strong> A larger apartment option that includes four bedrooms, four toilets and a maid's room, according to the supplied project details.
    </li>
  </ul>

  <p>
    These areas represent indicative super built-up areas. Buyers should confirm the carpet area, current base price, additional charges and final payable amount for their preferred unit.
  </p>
</div>

<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Adarsh Urbanite Price and Booking Information</h2>

  <p>
    The starting price for Adarsh Urbanite is currently "on request." Buyers may ask for configuration-specific prices, availability and a full cost sheet to determine the total cost of purchasing.
  </p>

  <p>
    Prior to making a booking payment, buyers should also check the project's current launch status, RERA registration, applicable approvals and declared possession timeline from official records. Checking these items will allow buyers to assess pricing information and project commitments based upon the most recent documentation available.
  </p>

  <h2 className="text-2xl font-bold">Adarsh Urbanite Payment Plan</h2>

  <p>
    The confirmed payment plan for Adarsh Urbanite has not been provided in the available project information. Buyers should request the official payment schedule rather than relying on a general instalment structure.
  </p>

  <p>
    The schedule should explain when each instalment becomes payable, what milestone triggers the payment, and which taxes or additional charges apply. Any booking amount or advance should be paid only after the relevant project details and payment terms have been verified.
  </p>
</div>

        </div>
        
      </div>
    </section>
  );
}