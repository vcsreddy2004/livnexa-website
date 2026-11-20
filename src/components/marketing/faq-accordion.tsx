"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Is there a free option?",
    answer:
      "Home and Land property management is free. PG owners pay a flat ₹30 total for the first 3 months, regardless of bed count. During this period, they can increase their bed limit without extra bed charges. After the first 3 months, pricing is ₹10 per bed per month.",
  },
  {
    question: "How do residents log in?",
    answer:
      "Residents use the property-specific login link shared by their owner and verify their phone number with an OTP.",
  },
  {
    question: "Does a payment screenshot count as paid immediately?",
    answer:
      "No. The resident's screenshot is submitted for the owner's review. The payment is treated as paid only after the owner approves it.",
  },
  {
    question: "Can I manage a PG and a Home or Land property?",
    answer:
      "Yes. LivNexa supports three property types: PG/Hostel, Home and Land. PGs can be organised into floors, rooms and beds; Home and Land properties use units.",
  },
  {
    question: "How are rent reminders sent?",
    answer:
      "LivNexa uses push notifications for updates and scheduled rent reminders to help residents stay informed.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Android is the primary supported platform today. iOS is not currently available and should be treated as a future roadmap item.",
  },
  {
    question: "Where do I purchase the PG subscription?",
    answer:
      "Click a Get Started or pricing button to open the LivNexa Google Play listing. Install or open the app, sign in as an owner, choose your plan and complete checkout inside LivNexa. This website does not collect payments.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <details
            key={item.question}
            open={isOpen}
            className="group mb-[9px] rounded-[9px] border border-[#e7ece7] bg-white px-[18px]"
          >
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(isOpen ? null : index);
              }}
              className="flex cursor-pointer list-none items-center justify-between gap-5 py-[17px] text-[13px] font-bold marker:hidden max-[700px]:text-xs [&::-webkit-details-marker]:hidden"
            >
              {item.question}
              <span className="text-[19px] font-normal text-liv-green transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="m-0 pb-[17px] pr-[25px] text-xs leading-[1.8] text-liv-muted">
              {item.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
