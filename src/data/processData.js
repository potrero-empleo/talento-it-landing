import {
  LuClipboardCheck,
  LuMegaphone,
  LuUsers,
  LuMessagesSquare,
  LuClock3,
  LuMapPinned,
  LuBadgeCheck,
} from "react-icons/lu";

export const processSteps = [
  {
    step: "01",
    title: "Nos compartis tu búsqueda",
    description:
      "Relevamos el perfil, seniority, stack y objetivos de contratación para presentar tu empresa con claridad.",
    icon: LuClipboardCheck,
  },
  {
    step: "02",
    title: "Publicamos tu propuesta",
    description:
      "Tu marca empleadora, vacantes y beneficios se integran a la feria para que el talento vea una propuesta ordenada.",
    icon: LuMegaphone,
  },
  {
    step: "03",
    title: "Recibis candidatos alineados",
    description:
      "Conectas con perfiles IT de distintas provincias, en búsqueda activa o explorando nuevas oportunidades.",
    icon: LuUsers,
  },
  {
    step: "04",
    title: "Seguimos la conversacion",
    description:
      "Queda abierto el canal para continuar entrevistas, retos técnicos y próximos pasos con los equipos interesados.",
    icon: LuMessagesSquare,
  },
];

export const processHighlights = [
  {
    title: "Activacion agil",
    description: "Podemos dejar tu participación lista en pocos pasos, sin una implementacion compleja.",
    icon: LuClock3,
  },
  {
    title: "Cobertura federal",
    description: "La propuesta llega a talento de todo el pais, no solo de los polos tradicionales.",
    icon: LuMapPinned,
  },
  {
    title: "Experiencia curada",
    description: "El evento esta pensado para que empresa y candidato se encuentren con contexto y expectativas claras.",
    icon: LuBadgeCheck,
  },
];
