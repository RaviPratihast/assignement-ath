import { pageData } from "../data";

export function HeroSection() {
  const heroData = pageData.pagedata.custom_blocks["2"].data;
  const desktop = heroData.desktop;
  const mobile = heroData.mobile;

  const heroBackground = {
    backgroundImage: `
      radial-gradient(circle at 30% 8%, rgba(113, 65, 196, 0.42) 0%, rgba(113, 65, 196, 0) 38%),
      radial-gradient(circle at 96% 72%, rgba(59, 138, 195, 0.55) 0%, rgba(59, 138, 195, 0) 30%),
      linear-gradient(180deg, #1A1345 0%, #160F41 100%)
    `,
  };

  return (
    <section
      className="flex min-h-[calc(100vh-72px)] w-full items-center justify-center px-6 text-white"
      style={heroBackground}
    >
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-8 px-6 text-center">
        <h1 className="hidden text-[66px] leading-[1.02] font-normal md:block">
          {desktop.title}
        </h1>
        <h1 className="text-4xl leading-tight font-normal md:hidden">
          {mobile.title}
        </h1>

        <a
          href={desktop.cta.link}
          className="inline-flex h-12 items-center rounded-[9999px] bg-white px-8 text-base font-semibold text-[#111827] transition hover:bg-white/90"
        >
          {desktop.cta.label}
        </a>

        <p className="text-[11px] tracking-[0.35em] text-white/60 uppercase">
          {desktop.meta_label}
        </p>
      </div>
    </section>
  );
}
