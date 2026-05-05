import { pageData } from "../data";

const SOURCE_CODE_PRO_STACK =
  '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

function NewsletterForm({ placeholder, ctaLabel }) {
  return (
    <form
      className="mt-14 flex w-full max-w-[600px] flex-col items-center gap-4 md:flex-row md:justify-center"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="email"
        placeholder={placeholder}
        className="h-16 w-full rounded-[9999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-9 text-lg font-normal text-white outline-none placeholder:font-normal placeholder:text-[rgba(255,255,255,0.38)] focus:border-[rgba(255,255,255,0.35)] md:flex-1"
      />
      <button
        type="submit"
        className="inline-flex h-16 w-[148px] shrink-0 items-center justify-center rounded-[9999px] bg-[#7141C4] px-8 text-lg font-semibold text-white transition hover:bg-[#5B32A3]"
      >
        {ctaLabel}
      </button>
    </form>
  );
}

export function NewsletterSection() {
  const newsletter = pageData.pagedata.custom_blocks["7"].data;
  const desktop = newsletter.desktop;
  const mobile = newsletter.mobile;

  return (
    <section
      id={newsletter.section_id}
      className="bg-[#160F41] px-6 py-16 lg:px-48 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
        <p
          className="font-mono text-xs font-normal leading-4 tracking-widest text-[#A879FE] uppercase"
          style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
        >
          <span className="hidden lg:inline">{desktop.eyebrow}</span>
          <span className="lg:hidden">CURATED KNOWLEDGE</span>
        </p>

        <h2 className="mt-4 max-w-[824px] text-[32px] leading-[1.12] font-normal text-white lg:text-[36px] lg:leading-[40px]">
          <span className="hidden lg:inline">{desktop.title}</span>
          <span className="lg:hidden">{mobile.title}</span>
        </h2>

        <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[rgba(255,255,255,0.72)] lg:hidden">
          {mobile.body}
        </p>

        <NewsletterForm
          placeholder={desktop.input_placeholder}
          ctaLabel={desktop.cta.label}
        />

        <p className="mt-6 text-center text-xs leading-4 text-[rgba(255,255,255,0.4)]">
          {desktop.disclaimer}
        </p>
      </div>
    </section>
  );
}

