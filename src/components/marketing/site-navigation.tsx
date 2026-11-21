"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { BrandLink, Container, storeUrl } from "./ui";

const links = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["For owners", "#owners"],
  ["For residents", "#residents"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-[78px] border-b border-[rgba(229,231,235,0.8)] bg-white/[0.94] backdrop-blur-[14px] max-[700px]:h-[68px]">
      <Container className="h-full">
        <nav className="flex h-full items-center justify-between" aria-label="Main navigation">
          <BrandLink variant="header" />
          <button
            type="button"
            className="hidden border-0 bg-transparent p-2 max-[700px]:block"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="nav-links"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="my-[5px] block h-0.5 w-[23px] bg-liv-ink" />
            <span className="my-[5px] block h-0.5 w-[23px] bg-liv-ink" />
            <span className="my-[5px] block h-0.5 w-[23px] bg-liv-ink" />
          </button>
          <div
            id="nav-links"
            className={`flex items-center gap-[27px] text-[13px] font-semibold text-[#47544a] max-[900px]:gap-[15px] max-[900px]:text-[11px] max-[700px]:absolute max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-[68px] max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:border-b max-[700px]:border-liv-line max-[700px]:bg-white max-[700px]:px-[22px] max-[700px]:pb-[22px] max-[700px]:pt-[18px] max-[700px]:shadow-[0_16px_25px_#122d1410] ${
              isOpen ? "max-[700px]:flex max-[700px]:flex-col" : "max-[700px]:hidden"
            }`}
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-liv-green max-[700px]:border-b max-[700px]:border-[#f0f2f0] max-[700px]:py-3 max-[700px]:text-[13px]"
              >
                {label}
              </a>
            ))}
            <a
              className="inline-flex items-center justify-center gap-3 rounded-[9px] bg-liv-green px-[17px] py-[11px] text-[13px] font-bold text-white shadow-[0_8px_18px_#1b5e2026] transition hover:-translate-y-0.5 hover:bg-liv-deep max-[700px]:mt-[15px]"
              href={storeUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setIsOpen(false)}
            >
              Get started <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
