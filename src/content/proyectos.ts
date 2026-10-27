import type { ItemsProps } from "../interfaces/interfaces";

export const NavProyectos: ItemsProps[] = [
  {
    titulo: "Inicio",
    tituloEn: "Home",
    href: "/",
  },
  {
    titulo: "Proyectos",
    tituloEn: "Projects",
    href: "/projects",
    subItems: [
      {
        titulo: "Desarrollo de software",
        tituloEn: "Software Development",
        subItems: [
          { titulo: "SharkCat", tituloEn: "SharkCat", href: "/projects/sharkcat" },
          { titulo: "SwiftDrop", tituloEn: "SwiftDrop", href: "/projects/swiftdrop" },
          { titulo: "Colegio de contadores", tituloEn: "Accountants College", href: "/projects/colegio" },
          { titulo: "Inversiones Caceres", tituloEn: "Inversiones Caceres", href: "/projects/inversiones" },
          { titulo: "Sistema de inventario y facturación", tituloEn: "Inventory and Billing System", href: "/projects/facturacion" },
          { titulo: "App móvil de finanzas personales", tituloEn: "Personal finance mobile app", href: "/projects/finanzas" },
        ],
      },
      {
        titulo: "BI y datos",
        tituloEn: "BI & Data",
        subItems: [
          { titulo: "Empresa de autorespuestos", tituloEn: "Auto Parts Company", href: "/projects/analista" },
          {titulo: "Analisis de efeciencia de equipo", tituloEn: "Team Efficiency Analysis", href: "/projects/rrhh" },
        ],
      },
      {
        titulo: "IA",
        tituloEn: "AI",
        subItems: [
          { titulo: "Red neuronal artificial de reconocimiento facial y de emociones", tituloEn: "Artificial Neural Network for Facial Recognition and Emotion Detection", href: "/projects/inteligencia" },
        ],
      },
      {
        titulo: "Cloud e infraestructura",
        tituloEn: "Cloud & Infrastructure",
        subItems: [
          { titulo: "Azure y Terraform", tituloEn: "Azure and Terraform", href: "/projects/terraform" },
          { titulo: "Servicios en la nube con PokeApi", tituloEn: "Cloud services with PokeApi", href: "/projects/pokeapi" },
        ],
      },
    ],
  },
];