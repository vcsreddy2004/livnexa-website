import { Container, Eyebrow, StoreButton, TextLink } from "./ui";

const ownerBenefits = [
  "See occupancy, dues and recent payments on your dashboard.",
  "Switch between properties and manage property details.",
  "Search residents and filter by status, floor, room, unit or payment state.",
  "Review monthly payment lists and pending payment-proof approvals.",
  "Get owner notifications and mark them as read.",
  "Manage resident login links, subscription and billing from settings.",
  "Use typed confirmation before deleting a property.",
];

const residentBenefits = [
  "Open your property-specific login link and sign in with phone OTP.",
  "View your PG or home details and this month's rent summary.",
  "Check payment history and current dues.",
  "Send payment proof with amount, method, note and screenshot from gallery or camera.",
  "See notifications with unread counts and clear notification types.",
  "Update your profile photo and upload Aadhar ID proof.",
];

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="my-[25px] mb-[30px] list-none p-0 [&>li]:relative [&>li]:my-[13px] [&>li]:pl-7 [&>li]:text-[13px] [&>li]:leading-[1.65] [&>li]:text-[#526056] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-0 [&>li]:before:grid [&>li]:before:size-[18px] [&>li]:before:place-items-center [&>li]:before:rounded-full [&>li]:before:bg-[#e5f2e5] [&>li]:before:font-extrabold [&>li]:before:text-[11px] [&>li]:before:text-liv-green [&>li]:before:content-['✓']">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function OwnerPreview() {
  const approvals = [
    { initials: "SP", name: "Sai Prakash", room: "Room 105" },
    { initials: "RV", name: "Ravi Varma", room: "Room 302" },
  ];

  return (
    <div className="mx-auto w-full max-w-[470px] rotate-[-1deg] rounded-[17px] border border-[#e8eee8] bg-white p-[25px] shadow-[0_18px_50px_rgba(20,50,25,0.09)]">
      <div className="flex justify-between text-[9px] font-extrabold tracking-[1.2px] text-[#89958b]">
        <span>OWNER OVERVIEW</span>
        <span className="tracking-[2px]">•••</span>
      </div>
      <h3 className="mb-[17px] mt-[17px] font-liv-heading text-[21px] font-extrabold">
        Green View PG
      </h3>
      <div className="grid grid-cols-3 gap-[9px]">
        {[
          ["Total beds", "40"],
          ["Occupied", "32"],
          ["Vacant", "08"],
        ].map(([label, amount]) => (
          <div className="rounded-[9px] bg-[#f6f9f6] p-[13px]" key={label}>
            <small className="block text-[9px] text-[#7d897f]">{label}</small>
            <b className="mt-[3px] block font-liv-heading text-[21px] font-extrabold">
              {amount}
            </b>
          </div>
        ))}
      </div>
      <div className="mt-[19px] flex justify-between text-[10px]">
        <span>Occupancy</span>
        <b className="text-liv-green">80%</b>
      </div>
      <div className="mb-5 mt-2 h-[7px] rounded-full bg-[#e4ebe4]">
        <i className="block h-full w-4/5 rounded-full bg-liv-accent" />
      </div>
      <div className="mb-[17px] h-px bg-[#edf0ed]" />
      <div className="mb-3 flex items-center justify-between font-liv-heading text-xs font-bold">
        Pending approvals
        <span className="grid size-5 place-items-center rounded-full bg-[#e7f2e7] text-[9px] text-liv-green">
          2
        </span>
      </div>
      {approvals.map((approval, index) => (
        <div
          className="flex items-center gap-2.5 border-t border-[#f0f2f0] py-[11px]"
          key={approval.initials}
        >
          <span
            className={`grid size-[27px] place-items-center rounded-full text-[8px] font-extrabold ${
              index === 0
                ? "bg-[#f8ead8] text-[#986421]"
                : "bg-[#e5eafa] text-[#455d9b]"
            }`}
          >
            {approval.initials}
          </span>
          <span className="flex-1">
            <b className="block text-[10px]">{approval.name}</b>
            <small className="block text-[9px] text-[#8a958c]">
              {approval.room} · Payment proof
            </small>
          </span>
          <span className="rounded-full bg-[#fff3d9] px-1.5 py-[3px] text-[8px] font-extrabold text-[#a76b0b]">
            Review
          </span>
        </div>
      ))}
      <div className="mt-[14px] flex justify-between rounded-[9px] bg-[#f8faf8] px-2.5 py-3.5 text-[8px] text-[#748075]">
        <span>⌂ Overview</span>
        <span>♙ Residents</span>
        <span>₹ Payments</span>
        <span>☰ More</span>
      </div>
    </div>
  );
}

function ResidentPreview() {
  return (
    <div className="relative grid min-h-[500px] place-items-center max-[700px]:min-h-[470px]">
      <div className="w-[265px] rotate-[2deg] rounded-[34px] border-[7px] border-[#1d2c21] bg-[#1c2c20] p-2 shadow-[0_28px_60px_#102e1626]">
        <div className="relative z-[1] mx-auto mb-[5px] mt-[-1px] h-[13px] w-[75px] rounded-b-xl bg-[#1c2c20]" />
        <div className="min-h-[430px] rounded-[23px] bg-[#f7faf7] px-[14px] pb-[13px] pt-5">
          <div className="text-[8px] font-extrabold tracking-[1px] text-[#829084]">
            GOOD MORNING <span className="float-right">☀</span>
          </div>
          <h3 className="mb-[15px] mt-2 font-liv-heading text-[23px] font-extrabold leading-[1.2]">
            Your home,
            <br />
            made simpler.
          </h3>
          <div className="flex items-center gap-[9px] rounded-[10px] bg-white p-2.5 shadow-[0_3px_12px_#1a401a0a]">
            <span className="grid size-[34px] place-items-center rounded-lg bg-[#e4f0e3] text-liv-green">
              ⌂
            </span>
            <span className="flex-1">
              <b className="block text-[9px]">Green View PG</b>
              <small className="block text-[8px] text-[#879188]">
                Room 204 · Bed 2
              </small>
            </span>
            <span className="text-[#829084]">›</span>
          </div>
          <div className="relative mt-3 rounded-[11px] border border-[#e9eee9] bg-white p-[13px]">
            <small className="block text-[8px] font-extrabold tracking-[1px] text-[#879188]">
              THIS MONTH&apos;S RENT
            </small>
            <strong className="my-1 block font-liv-heading text-2xl font-extrabold">
              ₹7,000
            </strong>
            <span className="absolute right-3 top-10 rounded-full bg-[#e5f5e9] px-1.5 py-[3px] text-[8px] font-extrabold text-[#16803a]">
              Paid
            </span>
            <div className="text-[8px] text-[#829084]">
              You&apos;re all caught up for this month.
            </div>
          </div>
          <h4 className="mb-[9px] mt-[17px] font-liv-heading text-[11px] font-bold">
            Quick actions
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[9px] bg-white p-2.5">
              <span className="block text-[15px] text-liv-green">₹</span>
              <small className="text-[8px] text-[#718074]">Payment history</small>
            </div>
            <div className="rounded-[9px] bg-white p-2.5">
              <span className="block text-[15px] text-liv-green">↗</span>
              <small className="text-[8px] text-[#718074]">Send proof</small>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-[9px] rounded-[9px] bg-[#eaf3e9] p-2.5 text-liv-green">
            <span className="text-[17px]">♧</span>
            <span>
              <b className="block text-[8px]">Stay updated</b>
              <small className="block text-[7px] text-[#68816a]">
                Rent reminders appear here.
              </small>
            </span>
          </div>
          <div className="mt-4 flex justify-between border-t border-[#e8eee8] pt-[11px] text-[#527354]">
            {[
              ["⌂", "Home"],
              ["₹", "Payments"],
              ["♧", "Updates"],
              ["♙", "Profile"],
            ].map(([icon, label]) => (
              <span className="text-center text-xs" key={label}>
                {icon}
                <small className="block text-[7px] text-[#839087]">{label}</small>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[58px] right-0 flex items-center gap-[9px] rounded-[11px] border border-[#e8eee8] bg-white p-3 shadow-[0_18px_50px_rgba(20,50,25,0.09)] max-[700px]:bottom-[45px]">
        <span className="grid size-7 place-items-center rounded-full bg-[#e4f3e7] text-[#16803a]">
          ✓
        </span>
        <span>
          <b className="block text-[10px]">Proof submitted</b>
          <small className="block text-[8px] text-[#849087]">
            Waiting for owner approval
          </small>
        </span>
      </div>
    </div>
  );
}

function AudienceCopy({
  eyebrow,
  title,
  description,
  benefits,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  children: React.ReactNode;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-[14px] mt-[14px] max-w-[500px] font-liv-heading text-[clamp(32px,3.5vw,43px)] font-extrabold leading-[1.12] tracking-[-1.5px] text-liv-ink max-[700px]:text-[34px]">
        {title}
      </h2>
      <p className="m-0 text-[15px] leading-[1.8] text-liv-muted max-[700px]:text-[13px]">
        {description}
      </p>
      <BenefitList items={benefits} />
      {children}
    </div>
  );
}

export function OwnerSection() {
  return (
    <section id="owners" className="py-[100px] max-[700px]:py-[72px]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-[90px] max-[900px]:gap-[45px] max-[700px]:grid-cols-1 max-[700px]:gap-[35px]">
          <AudienceCopy
            eyebrow="For owners & managers"
            title="Your property at a glance. Your records in order."
            description="Spend less time checking notebooks and following up one by one. LivNexa brings the day-to-day property tasks into a single owner experience."
            benefits={ownerBenefits}
          >
            <StoreButton>Get the owner app <span>↗</span></StoreButton>
          </AudienceCopy>
          <OwnerPreview />
        </div>
      </Container>
    </section>
  );
}

export function ResidentSection() {
  return (
    <section id="residents" className="bg-[#f8fbf8] py-[100px] max-[700px]:py-[72px]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-[90px] max-[900px]:gap-[45px] max-[700px]:grid-cols-1 max-[700px]:gap-[35px]">
          <div className="max-[700px]:order-2">
            <ResidentPreview />
          </div>
          <div className="max-[700px]:order-1">
            <AudienceCopy
              eyebrow="For residents & tenants"
              title="Know what you owe. Keep your payment proof handy."
              description="A straightforward place to check your rent, see past payments and send proof to your property owner."
              benefits={residentBenefits}
            >
              <p className="mb-[22px] mt-0 rounded-lg bg-[#edf5ed] px-3.5 py-3 text-xs text-[#657268]">
                <strong className="text-liv-green">Important:</strong> A
                submitted screenshot is not an automatic payment confirmation.
                Your owner must review and approve it.
              </p>
              <TextLink href="https://play.google.com/store/apps/details?id=in.venomai.livnexa">
                Find LivNexa on Google Play <span>↗</span>
              </TextLink>
            </AudienceCopy>
          </div>
        </div>
      </Container>
    </section>
  );
}
