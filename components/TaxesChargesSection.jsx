/* eslint-disable react/no-unescaped-entities */

export default function TaxesChargesSection() {
  return (
    <section
      id="taxes-charges"
      aria-labelledby="taxes-charges-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="taxes-charges-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            Taxes and Other Purchase Charges
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800">
    <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/taxes-charges.webp"
              alt="Taxes and Charges" width={1200} height={675}
              loading="lazy"
            />
  <p>
    The total cost of an apartment can include more than the advertised base price. Buyers evaluating Adarsh Urbanite should request an itemised cost sheet that clearly identifies the applicable charges.
  </p>

  <p>Depending on the transaction, these may include:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Base apartment price</li>
    <li>Applicable GST, where legally chargeable</li>
    <li>Stamp duty and registration fees</li>
    <li>Parking or other separately chargeable facilities, where applicable</li>
    <li>Maintenance deposits and other contractual charges</li>
  </ul>

  <p>
    Tax treatment depends on the property's status and the applicable law. For example, GST treatment can differ between under-construction residential property and a completed property sold under the applicable conditions. Buyers should confirm the relevant tax treatment with a qualified professional rather than relying on a general percentage.
  </p>
</div>

      </div>
    </section>
  );
}
