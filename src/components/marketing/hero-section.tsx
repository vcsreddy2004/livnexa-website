import { Container, Eyebrow, StoreButton, TextLink } from "./ui";

function DashboardPreview() {
  const payments = [
    { initials: "AK", name: "Arun Kumar", detail: "Room 204 · UPI", amount: "₹7,000", status: "Paid", tone: "paid" },
    { initials: "SP", name: "Sai Prakash", detail: "Room 105 · Cash", amount: "₹6,500", status: "Pending", tone: "pending" },
    { initials: "RV", name: "Ravi Varma", detail: "Room 302 · UPI", amount: "₹7,000", status: "Paid", tone: "paid" },
  ];

  return (
    <div
      className="relative min-w-0 px-0 py-5 max-[700px]:mx-[5px] max-[700px]:pb-[35px] max-[700px]:pt-3"
      aria-label="Illustrative LivNexa owner dashboard showing occupancy, rent dues and recent payments"
    >
      <div className="absolute inset-[12%_0] rounded-full bg-[#dcebd9] opacity-65 blur-[55px]" />
      <div className="relative rotate-1 rounded-[17px] border border-[#e7ece7] bg-white p-5 shadow-[0_28px_70px_#163d1b1a] max-[700px]:p-[13px]">
        <div className="flex items-center justify-between border-b border-[#edf0ed] pb-[18px]">
          <div className="flex items-center gap-[7px] font-liv-heading text-[13px] font-extrabold text-liv-green">
            <span className="grid size-[23px] place-items-center rounded-[7px] bg-liv-green text-[13px] font-extrabold text-white shadow-[0_5px_12px_#1b5e202b]">
              L
            </span>
            LivNexa
          </div>
          <div className="flex gap-[5px]">
            <i className="size-1.5 rounded-full bg-[#d9e0da]" />
            <i className="size-1.5 rounded-full bg-[#d9e0da]" />
            <i className="size-1.5 rounded-full bg-[#d9e0da]" />
          </div>
        </div>
        <div className="my-5 flex items-center justify-between max-[700px]:my-[14px]">
          <div>
            <small className="text-[8px] font-extrabold tracking-[1.2px] text-[#849087]">
              OVERVIEW
            </small>
            <h3 className="m-0 mt-[3px] font-liv-heading text-base font-bold max-[700px]:text-[13px]">
              Good morning, owner
            </h3>
          </div>
          <div className="rounded-[7px] border border-[#e8ece8] px-2 py-[6px] text-[9px] font-bold text-[#47544a] max-[700px]:text-[8px]">
            Green View PG <span className="ml-3">⌄</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[9px] max-[380px]:gap-[5px]">
          <div className="rounded-[9px] border border-[#edf1ed] bg-[#f8faf8] p-3 max-[700px]:p-2">
            <span className="block text-[9px] text-[#849087]">Occupancy</span>
            <strong className="my-2 block font-liv-heading text-xl font-extrabold max-[700px]:text-[15px] max-[380px]:text-[13px]">
              32 <small className="text-[10px] text-[#89958b]">/ 40</small>
            </strong>
            <div className="my-2 h-[5px] rounded-full bg-[#e4ebe4]">
              <i className="block h-full w-4/5 rounded-full bg-liv-accent" />
            </div>
            <small className="text-[9px] text-liv-green">80% occupied</small>
          </div>
          <div className="rounded-[9px] border border-[#edf1ed] bg-[#f8faf8] p-3 max-[700px]:p-2">
            <span className="block text-[9px] text-[#849087]">Rent collected</span>
            <strong className="my-2 block whitespace-nowrap font-liv-heading text-xl font-extrabold max-[700px]:text-[15px] max-[380px]:text-[13px]">
              ₹48,000
            </strong>
            <small className="text-[9px] text-[#8a968c]">This month</small>
          </div>
          <div className="rounded-[9px] border border-[#edf1ed] bg-[#f8faf8] p-3 max-[700px]:p-2">
            <span className="block text-[9px] text-[#849087]">Pending dues</span>
            <strong className="my-2 block whitespace-nowrap font-liv-heading text-xl font-extrabold text-[#c27a0b] max-[700px]:text-[15px] max-[380px]:text-[13px]">
              ₹12,000
            </strong>
            <small className="text-[9px] text-[#8a968c]">5 residents</small>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-[1.65fr_1fr] gap-[10px] max-[700px]:grid-cols-1">
          <div className="min-w-0 rounded-[9px] border border-[#edf0ed] p-3">
            <div className="mb-3 flex justify-between font-liv-heading text-[10px] font-bold">
              Recent payments <span className="font-liv-body text-[8px] font-semibold text-liv-green">View all</span>
            </div>
            {payments.map((payment) => (
              <div
                className="flex items-center gap-[7px] border-t border-[#f0f2f0] py-2 max-[380px]:gap-1"
                key={payment.initials}
              >
                <span
                  className={`grid size-[27px] flex-none place-items-center rounded-full text-[8px] font-extrabold ${
                    payment.tone === "paid"
                      ? "bg-[#e4f0e4] text-[#35633b]"
                      : "bg-[#f8ead8] text-[#986421]"
                  }`}
                >
                  {payment.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <b className="block text-[8px]">{payment.name}</b>
                  <small className="block text-[7px] text-[#8a958c]">{payment.detail}</small>
                </div>
                <strong className="whitespace-nowrap text-[8px] max-[380px]:text-[7px]">
                  {payment.amount}
                </strong>
                <span
                  className={`whitespace-nowrap rounded-full px-1.5 py-[3px] text-[7px] font-extrabold max-[380px]:px-1 max-[380px]:text-[6px] ${
                    payment.tone === "paid"
                      ? "bg-[#e5f5e9] text-[#16803a]"
                      : "bg-[#fff3d9] text-[#a76b0b]"
                  }`}
                >
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
          <div className="flex min-w-0 flex-col items-start rounded-[9px] border border-[#edf0ed] bg-[#f7faf7] p-3 max-[700px]:hidden">
            <div className="mb-[9px] grid size-[26px] place-items-center rounded-lg bg-[#e3f1e4] text-liv-green">
              ✓
            </div>
            <small className="text-[8px] font-extrabold tracking-[1.2px] text-[#849087]">
              NEEDS YOUR REVIEW
            </small>
            <b className="my-[5px] font-liv-heading text-xs font-bold">Payment proof</b>
            <p className="mb-3 mt-0 text-[8px] leading-[1.5] text-[#78847a]">
              One resident has sent a payment screenshot.
            </p>
            <div className="flex w-full justify-between border-t border-[#e5ece5] pt-[9px] text-[8px] font-extrabold text-liv-green">
              <span>Review proof</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-5 flex items-center gap-2.5 rounded-[11px] border border-[#edf0ed] bg-white px-3.5 py-[11px] shadow-[0_12px_30px_#193e1b17] max-[700px]:right-[-8px]">
        <span className="grid size-7 place-items-center rounded-lg bg-[#eff7ef] text-liv-green">♢</span>
        <span>
          <b className="block text-[10px]">Rent reminder</b>
          <small className="block text-[8px] text-[#879188]">Sent to residents</small>
        </span>
        <i className="size-1.5 rounded-full bg-[#16a34a]" />
      </div>
      <div className="absolute left-[-24px] top-[45px] flex items-center gap-2.5 rounded-[11px] border border-[#edf0ed] bg-white px-3.5 py-[11px] shadow-[0_12px_30px_#193e1b17] max-[700px]:left-[-10px] max-[700px]:top-[25px]">
        <span className="text-xl text-liv-green">⌂</span>
        <span>
          <b className="block text-[10px]">40 beds</b>
          <small className="block text-[8px] text-[#879188]">One property</small>
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[radial-gradient(ellipse_at_78%_35%,#eaf3e9_0,transparent_42%),linear-gradient(180deg,#fbfdfb,#fff)] pb-[92px] pt-[84px] max-[700px]:pb-[55px] max-[700px]:pt-[65px]"
    >
      <Container>
        <div className="grid grid-cols-[1fr_1.05fr] items-center gap-[50px] max-[900px]:gap-[25px] max-[700px]:grid-cols-1 max-[700px]:gap-[25px]">
          <div>
            <Eyebrow dot>A simpler way to manage your property</Eyebrow>
            <h1 className="mb-5 mt-5 font-liv-heading text-[clamp(38px,4.4vw,57px)] font-extrabold leading-[1.12] tracking-[-2.2px] text-liv-ink max-[900px]:text-[44px] max-[700px]:text-[43px] max-[700px]:tracking-[-1.7px] max-[380px]:text-[37px]">
              Manage your PG, residents, and rent{" "}
              <em className="not-italic text-liv-green">in one place.</em>
            </h1>
            <p className="max-w-[530px] text-base leading-[1.8] text-liv-muted max-[700px]:text-sm">
              Replace scattered spreadsheets and notebooks with one app for
              property setup, resident records, rent dues, payment approvals and
              reminders. A clear experience for owners and residents alike.
            </p>
            <div className="mt-[29px] flex items-center gap-[26px]">
              <StoreButton>Get started <span aria-hidden="true">↗</span></StoreButton>
              <TextLink href="#how-it-works">
                See how it works <span aria-hidden="true">↓</span>
              </TextLink>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs text-[#617064]">
              <span className="grid size-[18px] place-items-center rounded-full bg-[#e4f1e3] font-extrabold text-liv-green">
                ✓
              </span>
              Built around everyday PG and hostel work
            </div>
          </div>
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
