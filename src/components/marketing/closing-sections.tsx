import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FaqAccordion } from "./faq-accordion";
import {
  BrandLink,
  Container,
  Eyebrow,
  SectionHeading,
  StoreButton,
} from "./ui";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#f8faf8] py-[100px] max-[700px]:py-[72px]">
      <Container>
        <div className="grid grid-cols-[0.75fr_1.25fr] gap-20 max-[900px]:gap-10 max-[700px]:grid-cols-1 max-[700px]:gap-[15px]">
          <div className="sticky top-[120px] self-start max-[700px]:static">
            <SectionHeading
              eyebrow="A few things to know"
              title="Frequently asked questions."
              description="Need help understanding how LivNexa works? Start here."
            />
          </div>
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="bg-[linear-gradient(115deg,#0b3d0f,#1b5e20)] py-[65px] text-white">
      <Container>
        <div className="flex items-center justify-between gap-[30px] max-[700px]:flex-col max-[700px]:items-start">
          <div>
            <Eyebrow light>Make the monthly routine easier</Eyebrow>
            <h2 className="mb-3 mt-3 font-liv-heading text-[34px] font-extrabold tracking-[-1.2px] max-[700px]:text-[30px]">
              Start managing your PG with less paperwork.
            </h2>
            <p className="m-0 text-[13px] text-[#d2e2d1]">
              Bring property details, residents and rent updates together with
              LivNexa.
            </p>
          </div>
          <StoreButton tone="white" className="flex-none">
            Get started <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </StoreButton>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#f6f8f6] py-[35px]">
      <Container>
        <div className="grid grid-cols-[1fr_auto] items-center gap-5 max-[700px]:grid-cols-1">
          <div>
            <BrandLink variant="footer" />
            <p className="mb-0 mt-2 text-[10px] text-[#7e8a80]">
              PG management without spreadsheet chaos.
            </p>
          </div>
          <div className="flex gap-[22px] text-[11px] font-semibold text-[#5f6c62] max-[700px]:flex-wrap max-[700px]:gap-[15px]">
            <a className="hover:text-liv-green" href="#features">Features</a>
            <a className="hover:text-liv-green" href="#pricing">Pricing</a>
            <a className="hover:text-liv-green" href="#faq">FAQ</a>
            <a className="hover:text-liv-green" href="#faq">Support</a>
            <Link className="hover:text-liv-green" href="/privacy">
              Privacy Policy
            </Link>
          </div>
          <div className="col-span-full border-t border-[#e5eae5] pt-[15px] text-[9px] text-[#929c93] max-[700px]:col-span-1">
            © {new Date().getFullYear()} LivNexa. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
