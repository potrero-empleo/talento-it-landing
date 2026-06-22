import React from "react";
import "../styles/speakers.css";

const empleabilidad = [
	{
		name: "Patricia Jebsen",
		role: "Clínica de Empleabilidad",
		org: "Empresa A",
		image: "/Perfil1.png",
	},
	{
		name: "Sofía Jobs",
		role: "Workshop Empleabilidad",
		org: "Empresa B",
		image: "/Perfil2.png",
	},
	{
		name: "Brigitte Bergery",
		role: "Workshop Empleabilidad",
		org: "Rayo Empleabilizador",
		image: "/Perfil3.png",
	},
	{
		name: "Romina Bruscagin",
		role: "Experta en Marketing Digital",
		org: "Startup D",
		image: "/Perfil4.png",
	},
	{
		name: "Laura Marcela Pérez Bosio",
		role: "El poder de la red: construyendo en comunidad y multiplicando el impacto con IA",
		org: "",
		image: "/Perfil5.png",
	},

];

const ecosistema = [
	{
		name: "Victor Maldonado",
		role: "Ecosistema IT",
		org: "Banco Galicia",
		image: "/Perfilx.png",
	},
	{
		name: "Axel Labruna",
		role: "WORKSHOP DESAFÍO TÉCNICO",
		org: "DevOps Day",
		image: "/Perfil6.png",
	},
	{
		name: "Gonzalo Ibañes",
		role: "Developer Advocate",
		org: "AWS",
		image: "/Perfilx.png",
	},
	
];

function Avatar({ name, src, sizeClass = "w-32 h-32" }) {
    if (src) {
        return (
            <img
                className={`${sizeClass} rounded-full object-cover`}
                src={src}
                alt={name}
                loading="lazy"
            />
        );
    }
    const generated = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=25D366&color=ffffff&size=128`;
    return (
        <img
            className={`${sizeClass} rounded-full object-cover`}
            src={generated}
            alt={name}
            loading="lazy"
        />
    );
}

function SpeakerCard({ person }) {
    return (
        <article
            className="group relative border border-[#272727] bg-[#1c1c1c] px-8 py-10 transition-all duration-300 hover:border-[#C8D400]/30 hover:bg-[#202020] w-full"
            tabIndex="0"
            aria-label={`${person.name} - ${person.role}`}
        >
            {/* top accent */}
            <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C8D400] transition-all duration-300 group-hover:w-full" />

            {/* avatar */}
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full overflow-hidden border border-[#2d2d2d] bg-[#151515] transition-colors duration-300 group-hover:border-[#C8D400]/30 mx-auto">
                {/* Avatar renders an img sized to the container */}
                <Avatar name={person.name} src={person.image} sizeClass="w-full h-full" />
            </div>

            {/* info */}
            <h4 className="mb-1 text-lg font-['Chakra_Petch'] font-semibold text-white text-center">
                {person.name}
            </h4>
            <p className="text-sm text-[#cccccc] text-center">{person.role}</p>
            <p className="text-sm text-[#909090] mt-3 text-center">{person.org}</p>
        </article>
    );
}

export default function Speakers() {
	return (
		<section className="py-12 px-4 max-w-6xl mx-auto">
			<div className="speakers-section">
				<h2 className="mb-5 font-['Chakra_Petch'] text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-[1.08] text-white text-center">
					SPEAKERS CONFIRMADOS
				</h2>
				<p className="speakers-desc text-center max-w-3xl mx-auto text-white-300 mb-6">
					Empleabilidad, búsqueda de talento y upskilling. 
					Líderes del ecosistema IT y de empleabilidad digital comparten su visión.
				</p>

				<div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start">
					{empleabilidad.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
			</div>

			<div className="speakers-section mt-12">
				<h3 className="text-xl font-semibold text-white text-center mb-3">
					Speakers — Ecosistema IT / Digital
				</h3>
				<div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start">
					{ecosistema.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
			</div>
		</section>
	);
}