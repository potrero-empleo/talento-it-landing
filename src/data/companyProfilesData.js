import {
  LuBriefcaseBusiness,
  LuChartColumn,
  LuBadgeCheck,
  LuWorkflow,
} from "react-icons/lu";

export const companyRoleTracks = [
  {
    title: "Talento para equipos tech en crecimiento",
    description:
      "Perfiles vinculados a desarrollo, producto, QA y entrega digital para empresas que necesitan sumar capacidad de forma ordenada.",
    icon: LuBriefcaseBusiness,
    tags: ["React", "Node", "QA", "UX/UI"],
  },
  {
    title: "Perfiles de datos, automatizacion e IA",
    description:
      "Talento con experiencia o formacion aplicada en analisis, BI, automatizacion y herramientas de IA para distintos tipos de equipos.",
    icon: LuChartColumn,
    tags: ["SQL", "Power BI", "Python", "IA"],
  },
  {
    title: "Infraestructura, soporte y cloud",
    description:
      "Perfiles orientados a operaciones, soporte tecnico, DevOps y administracion de entornos para equipos con necesidades de continuidad tecnica.",
    icon: LuBadgeCheck,
    tags: ["AWS", "DevOps", "Soporte", "Cloud"],
  },
  {
    title: "Procesos, coordinacion y negocio digital",
    description:
      "Personas que articulan procesos, documentacion, gestion y acompanamiento operativo dentro de equipos que trabajan en entornos digitales.",
    icon: LuWorkflow,
    tags: ["PM", "Agile", "Ops", "Analisis"],
  },
];

export const companyAudienceSignals = [
  {
    value: "Visibilidad para tu empresa",
    label:
      "Tu propuesta puede presentarse con contexto, cultura y datos clave para que los postulantes entiendan mejor a tu organizacion.",
  },
  {
    value: "Talento con recorridos diversos",
    label:
      "La convocatoria alcanza perfiles junior, semi senior y personas en reconversion laboral con interes real en sumarse al sector tech.",
  },
  {
    value: "Contacto al cierre del evento",
    label:
      "Al finalizar la feria, tu equipo recibe la informacion de los perfiles interesados para continuar la conversacion.",
  },
];

export const companySupportPoints = [
  {
    title: "Muestras tu propuesta",
    description:
      "Tu empresa puede comunicar su marca, su cultura y la informacion que necesita destacar dentro de la feria.",
  },
  {
    title: "Llegas a perfiles diversos",
    description:
      "Accedes a una convocatoria que incluye distintos niveles de experiencia y trayectorias de entrada al mundo IT.",
  },
  {
    title: "Recibes interes real",
    description:
      "La feria deja una base concreta de contactos para que tu equipo avance con entrevistas, seguimiento o proximos pasos.",
  },
];
