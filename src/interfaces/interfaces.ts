  // Exportamos los proyectos en un array
 export interface ItemsProps {
    titulo: string;
    href: string;
    subItems?: ItemsProps[];
  }

  export interface Proyecto {
    titulo: string;
    descripcion: string;
    herramientas: string;
    imagenUrl: string;

    slug: string
  }