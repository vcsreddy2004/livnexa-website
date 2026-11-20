import { Container, SectionHeading, StoreButton } from "./ui";

const securityItems = [
  ["◉", "Firebase phone OTP", "Phone number verification"],
  ["⌑", "Secure sessions", "Protected sign-in sessions"],
  ["₹", "Razorpay", "Subscription payments"],
  ["♧", "Push notifications", "Updates and rent reminders"],
  ["▤", "Private document storage", "Secure access to uploaded files"],
  ["⌑", "HTTPS protection", "Encrypted connections"],
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#fbfdfb] py-[100px] max-[700px]:py-[72px]">
      <Container>
        <SectionHeading
          eyebrow="Straightforward plans"
          title="Choose the property you manage."
          description="Simple pricing for homes and land. A low introductory plan for PG owners."
          centered
        />
        <div className="mx-auto grid max-w-[850px] grid-cols-2 items-stretch gap-5 max-[700px]:grid-cols-1 max-[700px]:gap-[25px]">
          <article className="flex flex-col rounded-[15px] border border-[#e5ebe5] bg-white p-[30px] max-[700px]:p-6">
            <div className="text-[10px] font-extrabold tracking-[1.4px] text-liv-green">
              HOME &amp; LAND
            </div>
            <h3 className="mb-1 mt-3 font-liv-heading text-[19px] font-bold">
              Free
            </h3>
            <div className="my-[7px] font-liv-heading text-[39px] font-extrabold tracking-[-1.5px]">
              ₹0 <span className="font-liv-body text-xs font-medium tracking-normal text-[#778379]">/ forever</span>
            </div>
            <p className="mb-[17px] mt-[5px] min-h-11 text-[13px] text-liv-muted">
              For owners managing simple home or land units.
            </p>
            <ul className="mb-[23px] mt-2 flex-1 list-none p-0">
              {[
                "Manage Home and Land properties",
                "Organise units and tenant records",
                "Track rent details and payment history",
              ].map((item) => (
                <li
                  className="relative border-b border-[#f0f3f0] py-2 pl-[22px] text-xs text-[#58665b] before:absolute before:left-0 before:text-liv-green before:content-['✓']"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <StoreButton tone="outline" className="text-center text-[13px]">
              Get started on Google Play <span>↗</span>
            </StoreButton>
            <small className="mt-3 text-center text-[9px] text-[#89948b]">
              No subscription fee for Home &amp; Land property management.
            </small>
          </article>

          <article className="relative flex flex-col rounded-[15px] border-2 border-liv-green bg-white p-[29px] shadow-[0_16px_45px_#1b5e2017] max-[700px]:p-[23px]">
            <div className="absolute right-5 top-[-13px] rounded-full bg-liv-green px-3 py-1.5 text-[8px] font-extrabold tracking-[1px] text-white">
              INTRODUCTORY PG PLAN
            </div>
            <div className="text-[10px] font-extrabold tracking-[1.4px] text-liv-green">
              PG &amp; HOSTEL
            </div>
            <h3 className="mb-1 mt-3 font-liv-heading text-[19px] font-bold">
              One simple starter price.
            </h3>
            <div className="m-0 font-liv-heading text-[60px] font-extrabold tracking-[-1.5px] text-liv-green max-[700px]:text-[54px]">
              ₹30{" "}
              <span className="font-liv-body text-xs font-medium tracking-normal text-[#778379]">
                total · first 3 months
              </span>
            </div>
            <p className="mb-[17px] mt-[5px] min-h-11 text-[13px] text-liv-muted">
              Pay just ₹30 for the entire first 3 months, regardless of your bed
              count. Increase your bed limit during this period without extra
              bed charges.
            </p>
            <div className="my-1 h-px bg-[#e9eee9]" />
            <p className="leading-[1.8] text-xs text-[#657268]">
              <strong>After the first 3 months</strong>
              <br />
              <b className="font-liv-heading text-lg text-liv-ink">
                ₹10 per bed / month
              </b>
            </p>
            <ul className="mb-[23px] mt-2 flex-1 list-none p-0">
              {[
                "One flat ₹30 starter payment covers all 3 months",
                "Increase your bed limit during the starter period without additional bed charges",
                "After the starter period, monthly pricing is based on your bed limit",
              ].map((item) => (
                <li
                  className="relative border-b border-[#f0f3f0] py-2 pl-[22px] text-xs text-[#58665b] before:absolute before:left-0 before:text-liv-green before:content-['✓']"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <StoreButton className="text-center text-[13px]">
              Continue on Google Play <span>↗</span>
            </StoreButton>
            <small className="mt-3 text-center text-[9px] text-[#89948b]">
              Open LivNexa from Google Play to choose your plan and complete
              checkout in the app.
            </small>
          </article>
        </div>
        <p className="mx-auto mt-5 max-w-[850px] text-center text-[10px] leading-[1.7] text-[#7c887e]">
          The ₹30 is a single flat payment for the full first 3 months, not a
          monthly charge. After that period, the plan is ₹10 per bed per month.
          Home and Land property management remains free. Subscription
          selection and checkout take place inside the LivNexa app.
        </p>
      </Container>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section className="py-[100px] max-[700px]:py-[72px]">
      <Container>
        <SectionHeading
          eyebrow="Built with care"
          title="Security and services that support the experience."
          description="Important account and property information is handled through established services."
          centered
        />
        <div className="grid grid-cols-3 gap-3 max-[700px]:grid-cols-2 max-[380px]:grid-cols-1">
          {securityItems.map(([icon, title, description]) => (
            <div
              className="grid grid-cols-[42px_1fr] grid-rows-2 items-center rounded-[10px] border border-[#e9eee9] p-[18px] max-[700px]:grid-cols-[35px_1fr] max-[700px]:p-[13px]"
              key={title}
            >
              <span className="row-span-2 grid size-8 place-items-center rounded-[9px] bg-[#e9f3e8] font-extrabold text-liv-green">
                {icon}
              </span>
              <b className="text-xs max-[700px]:text-[10px]">{title}</b>
              <small className="text-[10px] text-[#879188] max-[700px]:text-[9px]">
                {description}
              </small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
