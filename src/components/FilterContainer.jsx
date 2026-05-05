import { pageData } from "../data";
import { ChevronDown, Search } from "lucide-react";

function FilterIcon({ type }) {
  if (type === "search") {
    return (
      <Search className="h-5 w-5 text-[#64748B]" strokeWidth={2} />
    );
  }

  return (
    <svg
      className="h-5 w-5 text-[#7141C4]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h10" />
      <path d="M4 17h16" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </svg>
  );
}

export function FilterContainer() {
  const controls = pageData.pagedata.custom_blocks["3"].data.desktop.controls;
  const [topicControl, specialtyControl, searchControl, buttonControl] = controls;

  return (
    <section className="hidden w-full px-5 lg:block md:px-7">
      <div className="flex h-[88px] items-center rounded-[9999px] bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.14)]">
        <div className="grid h-full flex-1 grid-cols-[0.85fr_0.85fr_2fr] items-center overflow-hidden rounded-[9999px]">
          <button
            type="button"
            className="flex h-full min-w-0 items-center gap-3 border-r border-[#E9EEF5] px-8 text-base text-[#111827]"
          >
            <FilterIcon type="select" />
            <span>{topicControl.label}</span>
            <ChevronDown className="ml-auto h-5 w-5 text-[#64748B]" strokeWidth={2} />
          </button>

          <button
            type="button"
            className="flex h-full min-w-0 items-center gap-3 border-r border-[#E9EEF5] px-8 text-base text-[#111827]"
          >
            <FilterIcon type="select" />
            <span>{specialtyControl.label}</span>
            <ChevronDown className="ml-auto h-5 w-5 text-[#64748B]" strokeWidth={2} />
          </button>

          <div className="flex h-full min-w-0 items-center gap-3 px-6 text-base text-[#64748B] italic">
            <FilterIcon type="search" />
            <span>{searchControl.placeholder}</span>
          </div>
        </div>

        <button
          type="button"
          className="ml-3 inline-flex h-12 w-[160px] shrink-0 items-center justify-center rounded-[9999px] bg-[#7141C4] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#5B32A3]"
        >
          {buttonControl.label}
        </button>
      </div>
    </section>
  );
}
