import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(43, 113, 136, 0.10) 0%, rgba(244, 247, 249, 1) 70%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[url('/logo.png')] bg-no-repeat bg-center bg-[length:min(40vw,280px)] opacity-[0.06]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-[#2B7188]/10 via-transparent to-transparent" />

      <div className="flex w-full max-w-5xl flex-col items-center gap-16 text-center sm:gap-20">
        <header className="flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center rounded-2xl border border-brand-line bg-white/80 px-6 py-4 shadow-[0_10px_40px_-28px_rgba(18,81,105,0.55)] backdrop-blur-xl sm:px-8">
            <Image
              src="/logo.png"
              alt="Livnexa logo"
              width={280}
              height={80}
              priority
              className="h-12 w-auto sm:h-16"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-soft px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-brand backdrop-blur-xl sm:text-sm">
              Livnexa • Mobile App
            </span>
            <h1 className="max-w-3xl font-heading text-5xl font-bold leading-tight tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              Coming Soon
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
              Livnexa is the next evolution from{" "}
              <span className="font-alt text-brand">VENOMAI</span>
            </p>
          </div>
        </header>

        <section className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Built for a dark-tech future, Livnexa is on its way. Stay tuned
              for updates as we get ready to launch.
            </p>
            <Link
              href="https://www.venomai.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#125169] to-[#2B7188] px-8 py-3 text-base font-semibold text-white shadow-[0_10px_30px_-18px_rgba(18,81,105,0.7)] transition-all duration-300 hover:from-[#084860] hover:to-[#125169] focus:outline-none focus:ring-2 focus:ring-brand/60 focus:ring-offset-2 focus:ring-offset-background sm:px-10 sm:py-4 sm:text-lg"
            >
              <span>Powered by VENOMAI</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 text-sm text-muted">
          <p className="font-heading text-base tracking-wide text-body sm:text-lg">
            <span className="text-brand">VENOMAI</span> - We make IT happen
          </p>
          <Link
            href="/privacy"
            className="text-muted underline decoration-brand-line underline-offset-4 transition-colors hover:text-brand"
          >
            Privacy Policy
          </Link>
          <p>© {new Date().getFullYear()} VENOMAI. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}