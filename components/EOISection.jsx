/* eslint-disable react/no-unescaped-entities */

export default function EOISection() {
  return (
    <section
      id="eoi"
      aria-labelledby="eoi-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="eoi-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            EOI – Expression of Interest at Adarsh Urbanite
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800">
    <img
              className="w-full lg:w-1/2 mx-auto mb-6"
              src="/images/eoi.webp"
              alt="EOI" width={1200} height={675}
              loading="lazy"
            />
  <p>
    An Expression of Interest, commonly known as an EOI, allows prospective buyers to indicate their interest in a proposed residential development. However, an EOI does not necessarily mean that formal bookings have opened or that the project has completed its required approvals.
  </p>

  <p>
    For <strong>Adarsh Urbanite</strong>, the website describes the project as being at a pre-launch or EOI stage. The current EOI status, registration process and any associated payment requirements have not been independently verified.
  </p>

  <p>Before submitting an EOI, buyers should clarify the following:</p>

  <ul className="list-disc space-y-3 pl-6">
    <li>Whether the EOI process is officially open</li>
    <li>Whether any amount is payable and under what terms</li>
    <li>Whether the payment is refundable and what conditions apply</li>
    <li>How apartment selection and allotment will be handled</li>
    <li>Whether the project has obtained the required RERA registration</li>
    <li>What written confirmation will be provided after submission</li>
  </ul>

  <p>
    Do not assume that early registration guarantees a particular apartment, price or allotment priority. Obtain the terms in writing and retain all receipts and communications.
  </p>
</div>

      </div>
    </section>
  );
}
