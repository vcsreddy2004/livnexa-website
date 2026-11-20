import Image from "next/image";
import type { ReactNode } from "react";

export const storeUrl =
  "https://play.google.com/store/apps/details?id=in.venomai.livnexa";

export function BrandLink({ variant }: { variant: "header" | "footer" }) {
  const isHeader = variant === "header";

  return (
    <a
      href="#home"
      aria-label="LivNexa home"
      className="inline-flex items-center gap-2.5 font-liv-heading text-[19px] font-extrabold tracking-[-1px]"
    >
      <Image
        src="/logo.png"
        alt=""
        width={48}
        height={48}
        priority={isHeader}
        className={isHeader ? "size-11 object-contain" : "size-9 object-contain"}
      />
      <span className="text-liv-ink">
        Liv<span className="text-liv-green">Nexa</span>
      </span>
    </a>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-[calc(100%-48px)] max-w-[1160px] max-[700px]:w-[calc(100%-36px)] max-[700px]:max-w-[540px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  dot = false,
  light = false,
}: {
  children: ReactNode;
  dot?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[9px] text-[10px] font-extrabold uppercase tracking-[1.6px] ${
        light ? "text-[#b6d8b3]" : "text-liv-green"
      }`}
    >
      {dot && (
        <span
          aria-hidden="true"
          className="size-[7px] rounded-full bg-liv-accent"
        />
      )}
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-[42px] max-w-[650px] max-[700px]:mb-[30px] ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <div className={centered ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mb-[14px] mt-[14px] font-liv-heading text-[clamp(32px,3.5vw,43px)] font-extrabold leading-tight tracking-[-1.5px] text-liv-ink max-[700px]:text-[34px]">
        {title}
      </h2>
      <p className="m-0 text-[15px] leading-[1.8] text-liv-muted max-[700px]:text-[13px]">
        {description}
      </p>
    </div>
  );
}

type StoreButtonTone = "green" | "outline" | "white";

const buttonTones: Record<StoreButtonTone, string> = {
  green:
    "bg-liv-green text-white shadow-[0_8px_18px_#1b5e2026] hover:bg-liv-deep",
  outline:
    "border border-[#cbdccb] bg-white text-liv-green shadow-none hover:bg-liv-green hover:text-white",
  white:
    "bg-white text-liv-green shadow-none hover:bg-[#eff7ee] hover:text-liv-deep",
};

export function StoreButton({
  children,
  tone = "green",
  className = "",
}: {
  children: ReactNode;
  tone?: StoreButtonTone;
  className?: string;
}) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-3 rounded-[9px] px-[23px] py-[15px] text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${buttonTones[tone]} ${className}`}
      href={storeUrl}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
}

export function TextLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      className="text-sm font-bold text-liv-green hover:text-liv-deep"
      href={href}
    >
      {children}
    </a>
  );
}
