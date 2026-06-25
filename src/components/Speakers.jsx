import { useRef, useState, useEffect } from "react";
import "../styles/speakers.css";
const empleabilidad = [
	{
		name: "Patricia Jebsen",
		role: "Referente en transformación digital y e-commerce",
		org: "Mentora en liderazgo e innovación",
		image: "/Perfil1.jpg",
	},
	{
		name: "Sofía Jobs",
		role: "Especialista en talento e inserción laboral ",
		org: "",
		image: "/Perfil4.jpg",
	},
	{
		name: "Brigitte Bergery",
		role: "Empleabilidad y desarrollo profesional ",
		org: "",
		image: "/Perfil2.jpg",
	},
	{
		name: "Romina Bruscagin",
		role: "Empleabilidad y desarrollo profesional ",
		org: "",
		image: "/Perfil3.jpg",
	},
	{
		name: "Laura Pérez Bosio",
		role: "AI & CLOUD ARCHITECT y Graduada Potrero Digital",
		org: "",
		image: "/Perfil6.jpg",
	},
{
		name: "Victor Maldonado",
		role: "Marketing Digital",
		org: "",
		image: "/Perfil7.jpg",
	},
	{
		name: "Axel Labruna",
		role: "Speaker internacional y Organizador DevOpsDays BA ",
		org: "",
		image: "/Perfil5.jpg",
	},

	
];
=======
import { speakerProfiles } from "../data/speakersData";
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c
=======
import { speakerProfiles } from "../data/speakersData";
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c

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
      className="group relative w-full border border-[#272727] bg-[#1c1c1c] px-8 py-10 rounded-xl transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#202020]"
      tabIndex="0"
      aria-label={`${person.name} - ${person.role}`}>
      {/* top accent */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

      {/* avatar */}
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30 overflow-hidden">
        <Avatar name={person.name} src={person.image} altText={`${person.name} — ${person.role} en ${person.org}`} />
      </div>

      <div className="spk-info">
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
    autoplayRef.current = setInterval(() => {
      if (!pauseRef.current) scrollByPage(1);
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [visible]);

  const onMouseEnter = () => (pauseRef.current = true);
  const onMouseLeave = () => (pauseRef.current = false);
  const onFocus = () => (pauseRef.current = true);
  const onBlur = () => (pauseRef.current = false);

  return (
    <section id="speakers" className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center mb-10 md:mb-18 space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Speakers confirmados</h2>
          <p className="text-[#aaaaaa] max-w-2xl mx-auto">Referentes que hacen el encuentro</p>
          <p>Líderes del ecosistema IT y de empleabilidad digital comparten su visión sobre el mercado laboral tech en Argentina. 
            Charlas pensadas para el sector con datos, tendencias y perspectivas reales.</p>
        </div>
    
        <div className="flex items-center justify-between mb-6">
          <div />
          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Previous" onClick={() => scrollByPage(-1)} disabled={!canPrev} className="w-10 h-10 rounded-full bg-white/5 border border-[#272727] disabled:opacity-40">‹</button>
            <button aria-label="Next" onClick={() => scrollByPage(1)} disabled={!canNext} className="w-10 h-10 rounded-full bg-white/5 border border-[#272727] disabled:opacity-40">›</button>
          </div>
        </div>

        <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onFocus} onBlur={onBlur}>
          <div
            ref={carouselRef}
            role="list"
            className="carousel-container flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}>
            {speakerProfiles.map((p) => (
              <div
                key={p.name}
                role="listitem"
                className="shrink-0 snap-start"
                style={{ minWidth: `${100 / visible}%` }}>
                <div className="px-2">
                  <SpeakerCard person={p} />
                </div>
              </div>
            ))}
          </div>

          {/* mobile controls */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden">
            <button aria-label="Previous" onClick={() => scrollByPage(-1)} className="px-3 py-2 rounded bg-[#0f0f0f] border border-[#272727]">‹</button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden">
            <button aria-label="Next" onClick={() => scrollByPage(1)} className="px-3 py-2 rounded bg-[#0f0f0f] border border-[#272727]">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
