import { pageData } from "../data";

const FEATURED_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80&auto=format&fit=crop";

/** Dr. Helena avatar — design reference (Unsplash); overrides Figma asset URL in JSON for this build. */
const AUTHOR_AVATAR_URL =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&q=80&auto=format&fit=crop";

/** 64×64 ring: 8 equal segments, alternating accent purple + light lavender (Figma-style). */
const RING_SEGMENT_DARK = "#6D48D7";
const RING_SEGMENT_LIGHT = "#E8E3FF";
const SOURCE_CODE_PRO_STACK =
  '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

function FallbackImage({
  src,
  alt,
  className,
  width,
  height,
  containerClassName = "",
}) {
  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </div>
  );
}

function MetricRing({ value, centerBg }) {
  const ringGradient = `conic-gradient(from -22.5deg,
    ${RING_SEGMENT_DARK} 0deg 45deg,
    ${RING_SEGMENT_LIGHT} 45deg 90deg,
    ${RING_SEGMENT_DARK} 90deg 135deg,
    ${RING_SEGMENT_LIGHT} 135deg 180deg,
    ${RING_SEGMENT_DARK} 180deg 225deg,
    ${RING_SEGMENT_LIGHT} 225deg 270deg,
    ${RING_SEGMENT_DARK} 270deg 315deg,
    ${RING_SEGMENT_LIGHT} 315deg 360deg
  )`;

  return (
    <div
      className="relative h-16 w-16 shrink-0"
      role="img"
      aria-label={`${value} impact indicator`}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: ringGradient }}
      />
      <div
        className="absolute inset-[5px] flex items-center justify-center rounded-full"
        style={{ backgroundColor: centerBg }}
      >
        <span className="text-sm font-bold leading-none text-black">{value}</span>
      </div>
    </div>
  );
}

export function FeaturedSection() {
  const featuredData = pageData.pagedata.custom_blocks["4"].data;
  const primary = featuredData.primary_feature;
  const secondary = featuredData.secondary_feature;

  return (
    <section className="bg-[#FBF9F1] px-5 pb-20 pt-28 md:px-7">
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <article className="overflow-hidden rounded-[32px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] lg:col-span-8 lg:h-[462px]">
          <div className="grid h-full lg:grid-cols-[1.08fr_1fr]">
            <FallbackImage
              src={FEATURED_IMAGE_FALLBACK}
              alt={primary.image.options.alt}
              className="h-full w-full object-cover"
              containerClassName="min-h-[340px]"
            />

            <div className="flex flex-col border-l border-[#E8E4DA] bg-[#F6F3EB] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-[#1A1A3F] px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white uppercase">
                  {primary.tag}
                </span>
                <span
                  className="font-mono text-[14px] font-bold leading-4 text-[#7141C4]"
                  style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
                >
                  {primary.read_time}
                </span>
              </div>

              <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-tight text-black md:text-[36px]">
                {primary.title}
              </h2>

              <p className="mt-5 max-w-md text-[15px] font-normal leading-[1.55] text-[#4B4B4B]">
                {primary.description}
              </p>

              <div className="mt-8 border-t border-[#E0DCD0] pt-6">
                <div className="flex items-center gap-4">
                  <MetricRing
                    value={primary.impact_metric.value}
                    centerBg="#F6F3EB"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-normal tracking-[0.2em] text-[#BDBDBD] uppercase">
                      {primary.impact_metric.label}
                    </p>
                    <p className="mt-1 text-xl font-bold leading-snug text-black md:text-2xl">
                      {primary.impact_metric.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="relative overflow-hidden rounded-[32px] bg-black shadow-[0_12px_40px_rgba(0,0,0,0.18)] lg:col-span-4 lg:h-[300px] lg:min-h-0">
          {/* Figma: 256×256 purple (#7141C4) + blur 60 — glow in bottom-right; ~70% of card reads as black */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-[18%] translate-y-[22%] rounded-full bg-[#7141C4] opacity-45 blur-[60px]"
          />

          <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-10 text-white">
            <div className="min-h-0">
              <p
                className="font-mono text-[14px] font-normal leading-[18px] text-[#A879FE]"
                style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
              >
                {secondary.label}
              </p>
              <blockquote className="mt-4 text-[20px] font-medium leading-[1.35] tracking-tight text-white md:text-[22px]">
                {secondary.quote}
              </blockquote>
            </div>

            <div className="flex items-center gap-4">
              <FallbackImage
                src={AUTHOR_AVATAR_URL}
                alt={secondary.author.image.options.alt}
                className="h-12 w-12 shrink-0 rounded-full border-2 border-[#7141C4] object-cover"
                width={48}
                height={48}
              />
              <div className="min-w-0">
                <p className="text-[16px] font-semibold leading-tight text-white">
                  {secondary.author.name}
                </p>
                <p className="mt-1 font-mono text-[14px] font-normal leading-tight text-[#A1A1B5]">
                  {secondary.author.role}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
