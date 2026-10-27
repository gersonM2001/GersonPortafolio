  // Exportamos los proyectos en un array
  export type CategoriaId = 'desarrollo' | 'bi' | 'ia' | 'cloud' | 'analisis';
 export interface ItemsProps {
    titulo: string;
    tituloEn?: string;
    hrefEn?: string;
    href?: string;
    subItems?: ItemsProps[];
  }



export interface Categoria {
  id: CategoriaId;
  titulo: string;
  tituloEn: string;
}

export interface Proyecto {
  titulo: string;
  tituloEn: string;
  descripcion: string;
  descripcionEn: string;
  herramientas: string;
  imagenUrl: string;
  slug: string;
  slugEn: string;
  categoria: CategoriaId; // nuevo
}