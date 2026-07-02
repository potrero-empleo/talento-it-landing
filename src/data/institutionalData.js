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
    title: "Formación conectada con empleabilidad",
    description:
      "La propuesta se apoya en iniciativas de formación gratuita y desarrollo profesional orientadas a ampliar oportunidades laborales en entornos digitales.",
    icon: LuGraduationCap,
  },
  {
    title: "Articulación con empresas y aliados",
    description:
      "La participación empresarial se integra en un entramado de organizaciones, aliados y programas que conectan talento, empleabilidad e impacto sostenido.",
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
      "Red de centros de aprendizaje de oficios digitales con foco en formación y empleabilidad.",
  },
  {
    id: "fundacion-compromiso",
    name: "Fundación Compromiso",
    description:
      "Organización que impulsa programas, alianzas y proyectos de desarrollo con impacto social.",
  },
];

export const institutionalSupportNote =
  "La convocatoria también se articula con Potrero Empleos para acompañar la vinculación con empresas y reforzar el puente entre formación y empleabilidad.";

export const institutionalStats = [
  { value: "30.000", label: "personas vinculadas a Potrero Digital" },
  { value: "24", label: "distritos alcanzados por la convocatoria" },
  { value: "+500", label: "perfiles IT en busqueda activa para esta edición" },
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
    title: "En reconversión laboral",
    description:
      "Perfiles provenientes de otras industrias que eligieron desarrollarse en tecnología con una motivación muy alta.",
  },
];
