import { Container, SectionHeading } from "./ui";

const features = [
  {
    color: "bg-[#e7f2e7] text-liv-green",
    icon: "▣",
    title: "Phone OTP Login",
    description:
      "Owners and residents sign in with a phone number. No passwords to remember.",
  },
  {
    color: "bg-[#e5f5ef] text-[#24835c]",
    icon: "⌂",
    title: "Property Setup",
    description:
      "Manage PGs with floors, rooms and beds, or simple units for Home and Land properties.",
  },
  {
    color: "bg-[#eaf0fc] text-[#3564b7]",
    icon: "♙",
    title: "Resident Records",
    description:
      "Keep rent, deposit, due day, move dates, emergency contact, notes, photo and ID proof together.",
  },
  {
    color: "bg-[#fff2dc] text-[#ad7417]",
    icon: "▦",
    title: "Floors, Rooms & Beds",
    description:
      "Set room sharing from 1 to 5 or custom capacity, define rent and track each bed's status.",
  },
  {
    color: "bg-[#e7f2e7] text-liv-green",
    icon: "₹",
    title: "Rent & Payments",
    description:
      "Track paid, pending, partial and overdue dues. Record Cash, UPI, Bank Transfer or Other.",
  },
  {
    color: "bg-[#fbeceb] text-[#ba5b54]",
    icon: "✓",
    title: "Payment Proof Approval",
    description:
      "Residents send a screenshot for review. It counts as paid only after the owner approves it.",
  },
  {
    color: "bg-[#fff2dc] text-[#ad7417]",
    icon: "♧",
    title: "Automatic Reminders",
    description:
      "Scheduled rent reminders and payment updates help keep owners and residents informed.",
  },
  {
    color: "bg-[#eaf0fc] text-[#3564b7]",
    icon: "▤",
    title: "Dedicated Resident Portal",
    description:
      "Residents get their own app experience for property details, dues, payment history and profile.",
  },
  {
    color: "bg-[#e7f2e7] text-liv-green",
    icon: "₹",
    title: "Subscription Billing",
    description:
      "PG subscription pricing is based on the bed limit, with trial, activation and renewal through Razorpay.",
  },
  {
    color: "bg-[#e5f5ef] text-[#24835c]",
    icon: "▥",
    title: "Multi-Property Dashboard",
    description:
      "Switch between properties and review summary figures, recent payments and resident details.",
  },
  {
    color: "bg-[#eaf0fc] text-[#3564b7]",
    icon: "♧",
    title: "Secure Documents",
    description:
      "Profile photos and ID proofs are stored privately and accessed through time-limited secure links.",
  },
  {
    color: "bg-[#fbeceb] text-[#ba5b54]",
    icon: "↻",
    title: "In-App Updates",
    description:
      "Android users can be prompted to update LivNexa through the Google Play in-app update flow.",
  },
];

const trustItems = [
  ["⌂", "Made for PG & hostel workflows"],
  ["◉", "Separate owner and resident experiences"],
  ["▣", "Phone OTP sign-in"],
  ["✓", "Razorpay subscription billing"],
];

const steps = [
  ["▣", "Sign in securely", "Use your phone number and OTP. No password required."],
  ["⌂", "Add your property", "Create a property and share its resident login link."],
  ["▦", "Set up spaces", "Add floors, rooms and beds, or units for Home and Land."],
  ["♙", "Add residents", "Enter rent, security deposit and monthly due day."],
  ["₹", "Track payments", "Record collections and review resident-submitted proof."],
  ["♧", "Stay in the loop", "Residents receive reminders and can send proof from their app."],
];

export function TrustStrip() {
  return (
    <section className="bg-liv-deep py-[23px] text-white">
      <Container className="grid grid-cols-4 gap-5 max-[700px]:grid-cols-2 max-[700px]:gap-x-2 max-[700px]:gap-y-[15px]">
        {trustItems.map(([icon, text]) => (
          <div
            className="flex items-center justify-center gap-2.5 text-xs text-[#e5eee5] max-[700px]:justify-start max-[700px]:text-[10px] max-[380px]:text-[9px]"
            key={text}
          >
            <span className="text-[19px] text-[#a7d0a5] max-[700px]:text-base">
              {icon}
            </span>
            <b>{text}</b>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-[100px] max-[700px]:py-[72px]">
      <Container>
        <SectionHeading
          eyebrow="Everything in one place"
          title="Less chasing. More clarity."
          description="From the first room setup to the monthly rent follow-up, keep the important details organised."
          centered
        />
        <div className="grid grid-cols-3 gap-[15px] max-[700px]:grid-cols-1 max-[700px]:gap-[10px]">
          {features.map((feature) => (
            <article
              className="rounded-xl border border-[#e9eee9] bg-white p-[25px] transition duration-200 hover:-translate-y-[3px] hover:border-[#d7e6d7] hover:shadow-[0_18px_50px_rgba(20,50,25,0.09)] max-[700px]:p-[19px]"
              key={feature.title}
            >
              <span
                className={`grid size-[39px] place-items-center rounded-[11px] text-lg font-bold ${feature.color}`}
              >
                {feature.icon}
              </span>
              <h3 className="mb-[7px] mt-[17px] font-liv-heading text-base font-bold max-[700px]:mb-[5px] max-[700px]:mt-3">
                {feature.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7] text-liv-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="bg-liv-soft py-[100px] max-[700px]:py-[72px]">
      <Container>
        <SectionHeading
          eyebrow="Getting started"
          title="Up and running in a few steps."
          description="Set up your property once. Keep the monthly routine simple."
          centered
        />
        <div className="grid grid-cols-3 gap-x-[22px] gap-y-8 max-[700px]:grid-cols-2 max-[700px]:gap-x-3 max-[700px]:gap-y-[25px] max-[380px]:grid-cols-1">
          {steps.map(([icon, title, description], index) => (
            <div className="relative py-2 pl-[62px] pr-2.5 max-[700px]:pl-11" key={title}>
              <span className="absolute left-0 top-1 font-liv-heading text-[19px] font-extrabold text-[#9db89d] max-[700px]:text-[15px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-3 grid size-[35px] place-items-center rounded-[10px] bg-[#e4efe3] text-liv-green">
                {icon}
              </div>
              <h3 className="mb-1.5 mt-0 font-liv-heading text-[15px] font-bold max-[700px]:text-[13px]">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7] text-liv-muted max-[700px]:text-[11px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
