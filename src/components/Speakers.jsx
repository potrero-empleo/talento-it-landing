import React from "react";
import "../styles/speakers.css";

const empleabilidad = [
  { name: "Ana Pérez", role: "Reclutadora Senior", org: "Empresa A" },
  { name: "Carlos Gómez", role: "Head de Talento", org: "Empresa B" },
  { name: "María Ruiz", role: "Coach de carrera", org: "Consultora C" },
  { name: "Javier López", role: "CTO / Mentor", org: "Startup D" },
  { name: "Laura Medina", role: "Especialista en Onboarding", org: "Empresa E" },
];

const ecosistema = [
  { name: "Diego Santos", role: "Ecosistema IT", org: "Nodo X" },
  { name: "Sofía Rojas", role: "Policy & Tech", org: "Org Y" },
  { name: "Pablo Herrera", role: "Developer Advocate", org: "Platform Z" },
  { name: "Valeria Ortiz", role: "Emprendimiento Digital", org: "Incubadora" },
  { name: "Miguel Ángel", role: "Product Lead", org: "Producto W" },
];

function Avatar({ name }) {
  const src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=25D366&color=ffffff&size=128`;
  return <img className="spk-avatar" src={src} alt={name} />;
}

function SpeakerCard({ person }) {
  return (
    <article className="spk-card" tabIndex="0" aria-label={`${person.name} - ${person.role}`}>
      <Avatar name={person.name} />
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
        <h2>Speakers — Empleabilidad</h2>
        <p className="speakers-desc">Conversación sobre empleabilidad, búsqueda de talento y upskilling.</p>
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