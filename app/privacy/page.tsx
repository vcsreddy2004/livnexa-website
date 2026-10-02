import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "contact@venomai.in";
const EFFECTIVE_DATE = "October 2, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — Livnexa",
  description:
    "How Livnexa collects, uses, stores and protects your personal data. Livnexa collects only your name, email address, phone number and address.",
};

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const sections: Section[] = [
  {
    id: "information-we-collect",
    title: "1. Information we collect",
    paragraphs: [
      "Livnexa collects only the information you give us directly. We do not use background sensors, and we do not build a profile of how you use your device.",
    ],
    items: [
      "Name — the name shown on your Livnexa account.",
      "Email address — used to sign you in, verify your account and reach you about your account or the service.",
      "Phone number — used for account verification and, if you opt in, important service messages by SMS or call.",
      "Address — used to verify your identity and to determine the country or region your account operates in. Livnexa is a digital service, so we never send physical goods to this address.",
    ],
  },
  {
    id: "what-we-do-not-collect",
    title: "2. What we do not collect",
    paragraphs: [
      "We deliberately keep our data collection narrow. Livnexa does not collect, and you should not send us:",
    ],
    items: [
      "Your contacts, photos, videos, files or device storage.",
      "Your precise or background location, health, biometric or religious information.",
      "Payment card or bank details.",
      "Advertising identifiers, browsing history or cross-app tracking data.",
      "Data from any third-party SDK that advertises, sells or shares your data.",
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "3. How we use your information",
    paragraphs: ["We use your information only for these purposes:"],
    items: [
      "Creating, securing and operating your Livnexa account.",
      "Authenticating you and preventing fraud or abuse.",
      "Providing the Livnexa service itself, which is delivered entirely through your device.",
      "Sending service messages, such as security alerts, billing notices and product updates.",
      "Responding to your support requests.",
      "Meeting legal obligations, and enforcing our terms of service.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal basis for processing",
    paragraphs: [
      "Where the law requires a legal basis, we rely on the following: performance of a contract with you, to provide the Livnexa service; our legitimate interests, to keep the service secure, reliable and free from fraud; your consent, for optional marketing messages or any optional permission you grant; and compliance with legal obligation, where we are required to retain certain information.",
    ],
  },
  {
    id: "sharing",
    title: "5. How we share your information",
    paragraphs: [
      "We do not sell your personal information, and we do not share it for anyone else's advertising.",
      "We share your information only with service providers who process it on our behalf, such as cloud hosting, email delivery, SMS delivery and payment processing. These providers are authorised to use your information only to deliver their service to us, are bound by contractual confidentiality obligations, and may not use it for their own purposes.",
      "We may also disclose information where we reasonably believe the law requires it, to protect the rights and safety of Livnexa, our users or the public, or as part of a corporate transaction such as a merger or sale of assets.",
    ],
  },
  {
    id: "retention",
    title: "6. How long we keep your information",
    paragraphs: [
      "We keep your information for as long as your account is active, because we need it to operate the service. When you delete your account, we remove or irreversibly anonymise your personal information, except where we are required to retain it by law, to resolve disputes, or to enforce our terms. Records of that limited retained data are deleted once the legal requirement expires.",
    ],
  },
  {
    id: "security",
    title: "7. How we protect your information",
    paragraphs: [
      "All traffic between you and Livnexa is encrypted in transit using TLS. Your data is stored on infrastructure that is access-controlled and restricted to authorised personnel. No system is perfectly secure, so we cannot guarantee absolute security, but we continuously work to protect your information and will notify you and the relevant authority if a breach affects your data.",
    ],
  },
  {
    id: "your-rights",
    title: "8. Your rights",
    paragraphs: [
      `Depending on where you live, you may have the right to ask us to give you access to your information, correct information that is wrong, delete your information, restrict or object to how we use it, receive a portable copy of it, withdraw consent you previously gave, and complain to your local data protection authority. You can exercise most of these rights yourself by editing your profile or deleting your account in the app. For anything else, email us at ${CONTACT_EMAIL} and we will respond within 30 days.`,
    ],
  },
  {
    id: "children",
    title: "9. Children's privacy",
    paragraphs: [
      "Livnexa is not directed at children under 13, or the minimum age of digital consent in your country where that is higher. We do not knowingly collect personal information from children below that age. If you believe a child has given us information, contact us at " +
        CONTACT_EMAIL +
        " and we will delete it.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy as Livnexa or the law changes. The effective date at the top of this page always reflects the latest version. If a change materially affects how we use your information, we will notify you in the app or by email before it takes effect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex-1 overflow-hidden px-4 py-12 sm:px-8 sm:py-16">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(43, 113, 136, 0.10) 0%, rgba(244, 247, 249, 1) 70%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[url('/logo.png')] bg-no-repeat bg-center bg-[length:min(40vw,280px)] opacity-[0.06]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-[#2B7188]/10 via-transparent to-transparent" />

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        <header className="flex flex-col items-center gap-6 text-center">
          <div className="relative flex items-center justify-center rounded-2xl border border-brand-line bg-white/80 px-6 py-4 shadow-[0_10px_40px_-28px_rgba(18,81,105,0.55)] backdrop-blur-xl sm:px-8">
            <Image
              src="/logo.png"
              alt="Livnexa logo"
              width={280}
              height={80}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-soft px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-brand backdrop-blur-xl sm:text-sm">
              Legal
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted">
              Effective {EFFECTIVE_DATE} • Livnexa by{" "}
              <span className="text-brand">VENOMAI</span>
            </p>
          </div>
        </header>

        <section className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_40px_-32px_rgba(18,81,105,0.5)] backdrop-blur-xl sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">
            In short
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Livnexa collects exactly four things from you: your{" "}
            <span className="text-brand">name</span>, your{" "}
            <span className="text-brand">email address</span>, your{" "}
            <span className="text-brand">phone number</span> and your{" "}
            <span className="text-brand">address</span>. We use them only to
            run the service. We do not sell your data, we do not track you across
            apps, and you can have your information deleted at any time.
          </p>
        </section>

        <section className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_40px_-32px_rgba(18,81,105,0.5)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <article key={section.id} id={section.id}>
                <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-base leading-relaxed text-body"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-4 flex flex-col gap-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-relaxed text-body"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_40px_-32px_rgba(18,81,105,0.5)] backdrop-blur-xl sm:p-8">
          <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
            11. Contact us
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Livnexa is a product of VENOMAI. If you have any question about this
            Privacy Policy, or want to exercise any of your rights, email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-brand underline decoration-brand-line underline-offset-4 hover:decoration-brand"
            >
              {CONTACT_EMAIL}
            </a>
            . We will get back to you within 30 days.
          </p>
        </section>

        <footer className="flex flex-col items-center gap-4 text-sm text-muted">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-soft px-6 py-2 font-medium text-brand transition-all duration-300 hover:bg-brand-line focus:outline-none focus:ring-2 focus:ring-brand/60"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Livnexa
          </Link>
          <p>
            <span className="text-brand">VENOMAI</span> - We make IT happen
          </p>
          <p>© {new Date().getFullYear()} VENOMAI. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}