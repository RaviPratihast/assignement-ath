import { pageData } from "../data";
import { AtSign } from "lucide-react";

const SOURCE_CODE_PRO_STACK =
  '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

function ShareIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}

function FooterHeading({ children }) {
  return (
    <h4
      className="text-xs font-normal tracking-[0.18em] text-[#6D6A7E] uppercase"
      style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
    >
      {children}
    </h4>
  );
}

function FooterLinksColumn({ section }) {
  return (
    <div className="flex flex-col gap-3">
      <FooterHeading>{section.label}</FooterHeading>
      {section.links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className="text-[15px] leading-relaxed text-[#6A6880] transition hover:text-[#1D184A]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function FooterIconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D6DF] text-[#1D184A] transition hover:border-[#1D184A]"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const footer = pageData.pagedata.custom_blocks["8"].data.desktop;
  const [sections, legal, connect] = footer.sections;

  return (
    <footer className="bg-[#FAFAF5] border-t-2 border-[#1D184A]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-y-10 gap-x-8 px-8 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] lg:gap-x-14 lg:px-12">
        <div className="flex max-w-[280px] flex-col gap-5">
          <h3 className="text-[36px] font-semibold leading-none text-[#1D184A]">
            {footer.brand.label}
          </h3>
          <p className="text-[15px] leading-7 text-[#6A6880]">
            {footer.brand.description}
          </p>
        </div>

        <FooterLinksColumn section={sections} />
        <FooterLinksColumn section={legal} />

        <div className="flex flex-col gap-4">
          <FooterHeading>{connect.label}</FooterHeading>
          <div className="flex items-center gap-3">
            <FooterIconLink
              href={connect.links[0].link}
              label={connect.links[0].label}
            >
              <ShareIcon className="h-4 w-4" />
            </FooterIconLink>
            <FooterIconLink
              href={connect.links[1].link}
              label={connect.links[1].label}
            >
              <AtSign className="h-4 w-4" />
            </FooterIconLink>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E7E5EC] py-5 text-center text-xs text-[#A5A3B3]">
        {footer.copyright}
      </div>
    </footer>
  );
}

