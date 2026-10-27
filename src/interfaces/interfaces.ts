  // Exportamos los proyectos en un array
 export interface ItemsProps {
    titulo: string;
    tituloEn?: string;
    hrefEn?: string;
    href?: string;
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