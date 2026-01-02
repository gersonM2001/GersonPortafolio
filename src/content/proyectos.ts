import type { ItemsProps } from "../interfaces/interfaces";

export const NavProyectos: ItemsProps[] = [
  {
    titulo: "Inicio",
    tituloEn: "Home",
    href: "/", // RELATIVO
  },
  {
    titulo: "Proyectos",
    tituloEn: "Projects",
    href: "/projects",
    subItems: [
      { titulo: "SharkCat", tituloEn: "SharkCat", href: "/projects/sharkcat" },
      { titulo: "Inteligencia Artificial", tituloEn: "Artificial Intelligence", href: "/projects/inteligencia" },
      { titulo: "Colegio de contadores", tituloEn: "Accountants College", href: "/projects/colegio" },
      { titulo: "Analista de datos", tituloEn: "Data Analyst", href: "/projects/analista" },
      { titulo: "SwiftDrop", tituloEn: "SwiftDrop", href: "/projects/swiftdrop" },
      { titulo: "Inversiones Caceres", tituloEn: "Inversiones Caceres", href: "/projects/inversiones" },
      { titulo: "Infraestructura con Azure y Terraform", tituloEn: "Azure and Terraform Infrastructure", href: "/projects/terraform" },
      { titulo: "Servicios en la nube con PokeApi", tituloEn: "Cloud services with PokeApi", href: "/projects/pokeapi" },
      { titulo: "Sistema de inventario y facturación", tituloEn: "Inventory and Billing System", href: "/projects/facturacion"}
    ],
  },
];

  
