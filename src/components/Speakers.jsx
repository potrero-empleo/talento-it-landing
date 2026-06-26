import { useRef, useState, useEffect } from "react";
import "../styles/speakers.css";
import { speakerProfiles } from "../data/speakersData";

function Avatar({ name, src, altText }) {
  if (src) {
    return (
      <img
        className="spk-avatar"
        src={src}
        alt={altText || name}
        loading="lazy"
      />
    );
  }
  const generated = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=25D366&color=ffffff&size=128`;
  return (
    <img
      className="spk-avatar"
      src={generated}
      alt={altText || name}
      loading="lazy"
    />
  );
}

function SpeakerCard({ person }) {
  return (
    <article
      className="group relative h-full w-full rounded-xl border border-[#272727] bg-[#1c1c1c] px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D400]/35 hover:bg-[#202020] hover:shadow-[0_18px_40px_rgba(200,212,0,0.07)] md:px-8 md:py-10"
      aria-label={`${person.name} - ${person.role}`}>
      {/* top accent */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

      {/* avatar */}
      <div className="mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30 md:mb-6 md:h-28 md:w-28">
        <Avatar name={person.name} src={person.image} altText={`${person.name} — ${person.role} en ${person.org}`} />
      </div>

      <div className="spk-info">
        <span className="mb-3 inline-flex border border-[#313131] bg-[#141414] px-3 py-1 font-['Chakra_Petch'] text-[0.68rem] uppercase tracking-[0.1em] text-[#d7d7d7] transition-colors duration-300 group-hover:border-[#C8D400]/35 group-hover:text-white">
          {person.category}
        </span>
        <h4 className="spk-name">{person.name}</h4>
        <p className="spk-role">{person.role}</p>
        {person.org && <p className="spk-org">{person.org}</p>}
      </div>
    </article>
  );
}

export default function Speakers() {
  const carouselRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [visible, setVisible] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const autoplayRef = useRef(null);
  const pauseRef = useRef(false);

  // Update visible count and prev/next availability
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const v = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setVisible(v);
      const el = carouselRef.current;
      if (!el) return;
      setCanPrev(el.scrollLeft > 10);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };

    // run once to set initial state
    update();

    // attach listeners to the actual DOM node when available
    const onResize = () => update();
    window.addEventListener('resize', onResize);

    let cur = carouselRef.current;
    if (cur) cur.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      if (cur) cur.removeEventListener('scroll', update);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      const reduceMotion = mediaQuery.matches;
      setPrefersReducedMotion(reduceMotion);
      setIsPaused(reduceMotion);
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  const scrollByPage = (direction = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const first = el.firstElementChild;
    const gapStyle = window.getComputedStyle(el).gap || window.getComputedStyle(el).columnGap || '16px';
    const gap = parseInt(gapStyle, 10) || 16;
    const slideW = first ? first.getBoundingClientRect().width : el.clientWidth;
    const amount = Math.round(slideW + gap) * direction;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Autoplay
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;

    autoplayRef.current = setInterval(() => {
      if (!pauseRef.current) scrollByPage(1);
    }, 3000);

    return () => clearInterval(autoplayRef.current);
  }, [visible, isPaused, prefersReducedMotion]);

  const onMouseEnter = () => (pauseRef.current = true);
  const onMouseLeave = () => (pauseRef.current = false);
  const onFocus = () => (pauseRef.current = true);
  const onBlur = () => (pauseRef.current = false);
  const togglePause = () => setIsPaused((current) => !current);

  return (
    <section
      id="speakers"
      className="py-14 md:py-18"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="layout-container">
        <div className="text-center mb-10 md:mb-18 space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Speakers confirmados</h2>
          <p className="text-[#aaaaaa] max-w-2xl mx-auto">Referentes que hacen el encuentro</p>
          <p className="mx-auto max-w-4xl text-[#cfcfcf]">
            Lideres del ecosistema IT y de empleabilidad digital comparten su
            vision sobre el mercado laboral tech en Argentina. La agenda final
            de cada charla se confirmara en la proxima entrega de contenido.
          </p>
        </div>
    
        <div className="flex items-center justify-between mb-6">
          <div />
          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Anterior" onClick={() => scrollByPage(-1)} disabled={!canPrev} className="focus-ring h-10 w-10 rounded-full border border-[#272727] bg-white/5 text-[#d8d8d8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400] disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:border-[#272727] disabled:hover:bg-white/5 disabled:hover:text-[#d8d8d8]">‹</button>
            <button aria-label="Siguiente" onClick={() => scrollByPage(1)} disabled={!canNext} className="focus-ring h-10 w-10 rounded-full border border-[#272727] bg-white/5 text-[#d8d8d8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400] disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:border-[#272727] disabled:hover:bg-white/5 disabled:hover:text-[#d8d8d8]">›</button>
            <button
              type="button"
              onClick={togglePause}
              className="focus-ring rounded-full border border-[#272727] bg-white/5 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[#d8d8d8] transition-all duration-200 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400]"
              aria-pressed={isPaused}
            >
              {isPaused ? "Reanudar" : "Pausar"}
            </button>
          </div>
        </div>

        <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onFocus} onBlur={onBlur}>
          <div
            ref={carouselRef}
            role="list"
            aria-label="Lista de speakers confirmados"
            className="carousel-container flex gap-6 overflow-x-auto snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}>
            {speakerProfiles.map((p) => (
              <div
                key={p.name}
                role="listitem"
                className="speaker-slide shrink-0 snap-start">
                <div className="h-full px-1">
                  <SpeakerCard person={p} />
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <button aria-label="Anterior" onClick={() => scrollByPage(-1)} disabled={!canPrev} className="focus-ring rounded-full border border-[#272727] bg-[#0f0f0f] px-4 py-2 text-[#d8d8d8] transition-colors duration-200 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400] disabled:opacity-40">‹</button>
          <button aria-label="Siguiente" onClick={() => scrollByPage(1)} disabled={!canNext} className="focus-ring rounded-full border border-[#272727] bg-[#0f0f0f] px-4 py-2 text-[#d8d8d8] transition-colors duration-200 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400] disabled:opacity-40">›</button>
          <button
            type="button"
            onClick={togglePause}
            className="focus-ring rounded-full border border-[#272727] bg-[#0f0f0f] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[#d8d8d8] transition-colors duration-200 hover:border-[#C8D400]/60 hover:bg-[#C8D400]/10 hover:text-[#C8D400]"
            aria-pressed={isPaused}
          >
            {isPaused ? "Reanudar" : "Pausar"}
          </button>
        </div>
      </div>
    </section>
  );
}
