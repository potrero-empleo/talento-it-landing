import React from "react";
import "../styles/speakers.css";

const empleabilidad = [
	{
		name: "Patricia Jebsen",
		role: "CLÍNICA DE EMPLEABILIDAD",
		org: "Empresa A",
		image: "/Perfil1.png",
	},
	{
		name: "Sofía Jobs",
		role: "WORKSHOP EMPLEABILIDAD",
		org: "Empresa B",
		image: "/Perfil2.png",
	},
	{
		name: "Brigitte Bergery",
		role: "WORKSHOP EMPLEABILIDAD",
		org: "RAYO EMPLEABILIZADOR)",
		image: "/Perfil3.png",
	},
	{
		name: "Romina Bruscaginr López",
		role: "ESP MARKETING DIGITAL (WORKSHOP)",
		org: "Startup D",
		image: "/Perfil4.png",
	},
	

];

const ecosistema = [
	{
		name: "Victor Maldonado",
		role: "Ecosistema IT",
		org: "Banco Galicia",
		image: "/Perfil6_victor_maldonado.jpg",
	},
	{
		name: "Axel Labruna",
		role: "Policy & Tech",
		org: "DevOps Day",
		image: "/Perfil7_axel_labruna.jpg",
	},
	{
		name: "Gonzalo Ibañes",
		role: "Developer Advocate",
		org: "AWS",
		image: "/Perfil8_gonzalo_ibanes.jpg",
	},
	
];

function Avatar({ name, src }) {
	if (src)
		return (
			<img
				className="w-32 h-32 rounded-full object-cover border-4 border-green-100 bg-white"
				src={src}
				alt={name}
			/>
		);
	const generated = `https://ui-avatars.com/api/?name=${encodeURIComponent(
		name
	)}&background=25D366&color=ffffff&size=128`;
	return (
		<img
			className="w-32 h-32 rounded-full object-cover border-4 border-green-100 bg-white"
			src={generated}
			alt={name}
		/>
	);
}

function SpeakerCard({ person }) {
	return (
		<article
			className="w-full max-w-xs bg-white rounded-xl p-6 flex flex-col items-center text-center transform transition duration-200 hover:-translate-y-2 hover:scale-[1.02] shadow-md m-1"
			tabIndex="0"
			aria-label={`${person.name} - ${person.role}`}
		>
			<Avatar name={person.name} src={person.image} />
			<div className="mt-4">
				<h4 className="text-lg font-semibold text-gray-900">
					{person.name}
				</h4>
				<p className="text-sm text-gray-700 mt-1">{person.role}</p>
				<p className="text-sm text-gray-500 mt-2">{person.org}</p>
			</div>
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

				<div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
					{empleabilidad.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
			</div>

			<div className="speakers-section mt-12">
				<h3 className="text-xl font-semibold text-white text-center mb-3">
					Speakers — Ecosistema IT / Digital
				</h3>
				<div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
					{ecosistema.map((p) => (
						<SpeakerCard key={p.name} person={p} />
					))}
				</div>
			</div>
		</section>
	);
}