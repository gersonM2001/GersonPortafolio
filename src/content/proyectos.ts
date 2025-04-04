import Proyectos from "../components/proyectos.astro";
import type { ItemsProps } from "../interfaces/interfaces";

// Definimos la interfaz para un proyecto
export interface Proyecto {
    titulo: string;
    descripcion: string;
    herramientas: string;
    imagenUrl: string;
  }
  


  export const NavProyectos: ItemsProps[] = [
    {
      titulo: 'Inicio',
      href: '/',      
    },
    {
      titulo: 'Proyectos',
      href: '/proyectos',
    subItems: [
      {titulo: 'SharkCat', href: '/projects/sharkcat'},   
      {titulo: 'Inteligencia Artificial', href: '/projects/inteligencia'},
      {titulo: 'Colegio de contadores', href: '/projects/colegio'},
      {titulo: 'Analista de datos', href: '/projects/analista'},
      {titulo: 'SwiftDrop', href: '/projects/swiftdrop'},
      {titulo: 'Inversiones Caceres', href: '/projects/inversiones'},  
      {titulo: 'Infraestructura con Azure y Terraform', href: '/projects/terraform'},
  ]
    }
      ];
  