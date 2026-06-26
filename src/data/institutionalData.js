import {
  LuGraduationCap,
  LuBuilding2,
  LuMap,
  LuUserPlus,
  LuBriefcaseBusiness,
  LuRefreshCcw,
} from "react-icons/lu";

export const institutionalPillars = [
  {
    title: "Formacion conectada con empleabilidad",
    description:
      "La propuesta se apoya en iniciativas de formacion gratuita y desarrollo profesional orientadas a ampliar oportunidades laborales en entornos digitales.",
    icon: LuGraduationCap,
  },
  {
    title: "Articulacion con empresas y aliados",
    description:
      "La participacion empresarial se integra en un entramado de organizaciones, aliados y programas que conectan talento, empleabilidad e impacto sostenido.",
    icon: LuBuilding2,
  },
  {
    title: "Alcance nacional",
    description:
      "La convocatoria y el acceso tienen una mirada federal para acercar oportunidades a perfiles IT de distintas regiones del pais.",
    icon: LuMap,
  },
];

export const institutionalPartners = [
  {
    id: "potrero-digital",
    name: "Potrero Digital",
    description:
      "Red de centros de aprendizaje de oficios digitales con foco en formacion y empleabilidad.",
  },
  {
    id: "fundacion-compromiso",
    name: "Fundacion Compromiso",
    description:
      "Organizacion que impulsa programas, alianzas y proyectos de desarrollo con impacto social.",
  },
];

export const institutionalSupportNote =
  "La convocatoria tambien se articula con Potrero Empleos para acompanar la vinculacion con empresas y reforzar el puente entre formacion y empleabilidad.";

export const institutionalStats = [
  { value: "30.000", label: "personas vinculadas a Potrero Digital" },
  { value: "24", label: "distritos alcanzados por la convocatoria" },
  { value: "+500", label: "perfiles IT en busqueda activa para esta edicion" },
];

export const federalProfiles = [
  {
    icon: LuUserPlus,
    title: "Nuevos en IT",
    description:
      "Personas que buscan su primera oportunidad laboral en tecnologia y necesitan empresas dispuestas a apostar por potencial.",
  },
  {
    icon: LuBriefcaseBusiness,
    title: "Con experiencia",
    description:
      "Profesionales IT en busqueda activa de nuevos proyectos, equipos y desafios concretos.",
  },
  {
    icon: LuRefreshCcw,
    title: "En reconversion laboral",
    description:
      "Perfiles provenientes de otras industrias que eligieron desarrollarse en tecnologia con una motivacion muy alta.",
  },
];
