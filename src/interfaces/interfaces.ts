  // Exportamos los proyectos en un array
 export interface ItemsProps {
    titulo: string;
    tituloEn?: string;
    href: string;
    hrefEn?: string;
    subItems?: ItemsProps[];
  }

  export interface Proyecto {
    titulo: string;
    tituloEn: string;
    descripcion: string;
    descripcionEn: string;
    herramientas: string;
    imagenUrl: string;
    slug: string
    slugEn?: string;
  }