import React from "react";
// imagen servida desde public/Perfil1_pato_jebsen.jpg (no requiere import)
import "../styles/speakers.css";

const empleabilidad = [
  { name: "Patricia Jebsen", role: "Reclutadora Senior", org: "Empresa A", image: "public/Perfil1_pato_jebsen.jpg" },
  { name: "Sofía Jobs", role: "Head de Talento", org: "Empresa B", image: "public/Perfil2_sofia_jobs.jpg" },
  { name: "Brigitte Bergery", role: "Coach de carrera", org: "Consultora C", image: "public/Perfil3_brigitte_bergery.jpg" },
  { name: "Romina Bruscaginr López", role: "CTO / Mentor", org: "Startup D", image: "public/Perfil4_romina_bruscagin.jpg" },
  { name: "Acá Podés estar vos!", role: "Especialista en Onboarding", org: "Empresa E", image: "public/Perfil5_acá_podes_estar_vos.jpg" },
];

const ecosistema = [
  { name: "Victor Maldonado", role: "Ecosistema IT", org: "Banco Galicia", image: "public/Perfil6_victor_maldonado.jpg" },
  { name: "Axel Labruna", role: "Policy & Tech", org: "DevOps Day", image: "public/Perfil7_axel_labruna.jpg" },
  { name: "Gonzalo Ibañes", role: "Developer Advocate", org: "AWS", image: "public/Perfil8_gonzalo_ibanes.jpg" },
  { name: "Tu nombre", role: "Emprendimiento Digital", org: "Incubadora", image: "public/Perfil9_tu_nombre.jpg" },
 
];

function Avatar({ name, src }) {
  if (src) {
    return <img className="spk-avatar" src={src} alt={name} />;
  }
  const generated = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=25D366&color=ffffff&size=128`;
  return <img className="spk-avatar" src={generated} alt={name} />;
}

function SpeakerCard({ person }) {
  return (
    <article className="spk-card" tabIndex="0" aria-label={`${person.name} - ${person.role}`}>
      <Avatar name={person.name} src={person.image} />
      <div className="spk-info">
        <h4 className="spk-name">{person.name}</h4>
        <p className="spk-role">{person.role}</p>
        <p className="spk-org">{person.org}</p>
      </div>
    </article>
  );
}

export default function Speakers() {
  return (
    <section className="speakers-wrap">
      <div className="speakers-section">
        <h1>Speakers — Empleabilidad</h1>
        <p className="speakers-desc">SPEAKERS CONFIRMADOS: Empleabilidad, búsqueda de talento y upskilling.</p>
        <div className="spk-grid">
          {empleabilidad.map((p) => (
            <SpeakerCard key={p.name} person={p} />
          ))}
        </div>
      </div>

      <div className="speakers-section">
        <h2>Speakers — Ecosistema IT / Digital</h2>
        <p className="speakers-desc">Ecosistema, redes, empresas y herramientas que impulsan el sector.</p>
        <div className="spk-grid">
          {ecosistema.map((p) => (
            <SpeakerCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}