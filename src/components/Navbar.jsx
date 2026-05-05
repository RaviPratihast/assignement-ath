import { useState } from "react";
import { pageData } from "../data";

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navData = pageData.pagedata.custom_blocks["1"].data;
  const brand = navData.brand.label;
  const links = navData.navigation_links;
  const cta = navData.cta;

  return (
    <>
      <header className="h-[70px] w-full border-b border-[#FFFFFF1F] bg-[#160F41CC] px-5 shadow-[0_8px_32px_0_rgba(22,15,65,0.37)] backdrop-blur-xl md:px-7">
        <nav className="grid h-full w-full grid-cols-[auto_1fr_auto] items-center">
          <a
            href="/"
            className="text-[30px] leading-none font-bold text-white lg:text-[32px]"
            aria-label={brand}
          >
            {brand}
          </a>

          <ul className="hidden items-center justify-self-center gap-14 lg:flex">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  className={`inline-flex border-b-2 pb-1 text-base leading-none tracking-[0.01em] transition-colors ${
                    item.is_active
                      ? "border-[#160F41] text-white"
                      : "border-transparent text-[#FFFFFFB2] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden justify-self-end lg:block">
            <a
              href={cta.link}
              className="inline-flex h-[38px] items-center rounded-[9999px] border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium leading-none text-white whitespace-nowrap transition hover:bg-white/15"
            >
              {cta.label}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-self-end rounded-md p-2 text-white lg:hidden"
            aria-label={navData.mobile_menu_button.label}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-[#160F41] p-6 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-bold">{brand}</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-label="Close navigation"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="space-y-5">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={`block border-b pb-1 text-lg ${
                  item.is_active
                    ? "border-[#7141C4] text-white"
                    : "border-transparent text-[#FFFFFFB2]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={cta.link}
          onClick={() => setIsMenuOpen(false)}
          className="mt-8 inline-flex h-[38px] items-center rounded-[9999px] border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium leading-none text-white whitespace-nowrap"
        >
          {cta.label}
        </a>
      </aside>
    </>
  );
}
