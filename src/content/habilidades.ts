// Definimos la interfaz para las habilidades
export interface Habilidad {
    icono: string;
    titulo: string;
    descripcion: string;
  }
  
  // Exportamos un array con las habilidades
  export const habilidades: Habilidad[] = [
    {
      icono: '/imagenes/acerca.webp',  // Ruta a tu imagen de icono
      titulo: 'Sobre mi',
      descripcion: 'Con gusto por realizar diversas actividades mas allá de lo informático, con hobbies como la natación, senderismo, o salir a correr. Además me apasiona el arte, especialmente la música y la pintura.',
    },
    {
      icono: '/imagenes/habilidades.png',  // Ruta a tu imagen de icono
      titulo: 'Habilidades principales',
      descripcion: 'Con capacidades para establecer los requisitos de un sistema de información e implementar su solución informática.',
    },
    {
      icono: '/imagenes/perfil.png',  // Ruta a tu imagen de icono
      titulo: 'Otras Habilidades',
      descripcion: 'Manejo de metodologías de trabajo ágiles y clásicas, Sistemas operativos, plataformas Windows y Linux, Manejo de Suite Office.',
    }
  ];
  