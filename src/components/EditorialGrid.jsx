import { pageData } from "../data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SOURCE_CODE_PRO_STACK =
  '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Local fallbacks for editorial images (Figma assets are not directly usable here).
const EDITORIAL_IMAGE_FALLBACKS = {
  "desktop-card-1":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
  "desktop-card-2":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  "desktop-card-3":
    "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80&auto=format&fit=crop",
  "desktop-card-5":
    "https://images.unsplash.com/photo-1535916707207-35f97e715e1b?w=1200&q=80&auto=format&fit=crop",
  "desktop-card-6":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop",
};
const EDITORIAL_IMAGE_BACKUP =
  "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=1200&q=80&auto=format&fit=crop";

function TrendingUpIcon({ className }) {
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
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  );
}

function FallbackImage({ src, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== EDITORIAL_IMAGE_BACKUP) {
          setCurrentSrc(EDITORIAL_IMAGE_BACKUP);
        }
      }}
    />
  );
}

function ArticleMetaRow({ date, category }) {
  return (
    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
      <span
        className="font-mono"
        style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
      >
        {date}
      </span>
      <span className="mx-1 inline-block h-[3px] w-[3px] rounded-full bg-[#9CA3AF]" />
      <span
        className="font-mono"
        style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
      >
        {category}
      </span>
    </div>
  );
}

function ArticleCard({ card }) {
  const { tag, date, category, title, description, image } = card;
  const fallbackSrc =
    EDITORIAL_IMAGE_FALLBACKS[card.id] ?? image.rel_url;

  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-384/230 overflow-hidden rounded-[28px]">
        <FallbackImage
          src={fallbackSrc}
          alt={image.options.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex rounded-full bg-[#7141C4] px-4 py-1 text-[10px] font-bold leading-[15px] tracking-widest text-white uppercase"
            style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
          >
            {tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <ArticleMetaRow date={date} category={category} />

        <h3 className="text-[20px] font-bold leading-[28px] text-black">
          {title}
        </h3>

        <p className="mt-3 text-[14px] font-normal leading-[1.62] text-[#47464F]">
          {description}
        </p>
      </div>
    </article>
  );
}

function InsightTile({ insight }) {
  return (
    <article className="relative flex flex-col self-start overflow-hidden rounded-[32px] bg-[#FBF7EE] shadow-[0_1px_3px_rgba(15,23,42,0.06)] lg:h-[304px]">
      <div className="absolute inset-y-0 left-0 w-[6px] rounded-[32px] bg-[#7141C4]" />

      <div className="relative flex flex-col px-6 pb-5 pt-6 pl-8">
        <div className="flex items-start justify-between gap-3">
          <p
            className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#7141C4]"
            style={{ fontFamily: SOURCE_CODE_PRO_STACK }}
          >
            {insight.tag}
          </p>
          <TrendingUpIcon className="mt-1 h-4 w-6 text-[#C9C5D0]" />
        </div>

        <h3 className="mt-5 text-[24px] font-bold leading-tight text-black">
          {insight.title}
        </h3>

        <div className="mt-6 space-y-4">
          {insight.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="flex items-baseline justify-between text-[14px]">
                <span className="text-[#4B5563]">{metric.label}</span>
                <span className="font-mono text-[18px] font-bold text-[#7141C4]">
                  {metric.value}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-[#E5E5E5]" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 inline-flex items-center text-[14px] font-bold text-[#7141C4]"
        >
          {insight.cta.label}
          <span aria-hidden className="ml-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

function PaginationButton({ label }) {
  return (
    <div className="mt-20 flex justify-center">
      <button
        type="button"
        className="inline-flex h-[66px] min-w-[310px] items-center justify-center gap-4 rounded-[9999px] border border-[rgba(201,197,208,0.3)] px-12 py-5 text-base font-semibold text-[#111111]"
      >
        <span className="leading-none">{label}</span>
        <ChevronDown className="h-5 w-5 text-[#111111]" strokeWidth={2} />
      </button>
    </div>
  );
}

export function EditorialGrid() {
  const editorial = pageData.pagedata.custom_blocks["5"].data;
  const cardsById = new Map(
    editorial.cards.map((card) => [card.id, card]),
  );

  return (
    <section className="bg-[#FBF9F1] px-5 pb-24 pt-10 md:px-7">
      <div className="grid items-start gap-x-6 gap-y-8 lg:grid-cols-3">
        {editorial.layout_order.map((slotId) => {
          if (slotId === editorial.insight_tile.id) {
            return (
              <InsightTile
                key={slotId}
                insight={editorial.insight_tile}
              />
            );
          }

          const card = cardsById.get(slotId);
          if (!card) return null;

          return <ArticleCard key={slotId} card={card} />;
        })}
      </div>
      <PaginationButton label={editorial.pagination_cta.label} />
    </section>
  );
}

