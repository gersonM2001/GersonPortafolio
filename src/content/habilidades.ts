// Definimos la interfaz para las habilidades
export interface Habilidad {
    icono: string;
    titulo: string;
    descripcion: string;
    lan: string;
  }
  
  // Exportamos un array con las habilidades
  export const habilidades: Habilidad[] = [
    {
      icono: '/imagenes/acerca.webp',  // Ruta a tu imagen de icono
      titulo: 'Sobre mi',
      descripcion: 'Con gusto por realizar diversas actividades mas allá de lo informático, con hobbies como la natación, senderismo, o salir a correr. Además me apasiona el arte, especialmente la música y la pintura.',
      lan: 'en',
    },
    {
      icono: '/imagenes/habilidades.png',  // Ruta a tu imagen de icono
      titulo: 'Habilidades principales',
      descripcion: 'Con capacidades para establecer los requisitos de un sistema de información e implementar su solución informática.',
      lan: 'en',
    },
    {
      icono: '/imagenes/perfil.png',  // Ruta a tu imagen de icono
      titulo: 'Otras Habilidades',
      descripcion: 'Manejo de metodologías de trabajo ágiles y clásicas, Sistemas operativos, plataformas Windows y Linux, Manejo de Suite Office.',
      lan: 'en',
    }
  ];
  
 export const habilidadesEn: Habilidad[] = [
    {
      icono: '/imagenes/acerca.webp',  // Ruta a tu imagen de icono
      titulo: 'About me',
      descripcion: 'With a passion for engaging in various activities beyond computing, hobbies such as swimming, hiking, or going for runs. Additionally, I am passionate about art, especially music and painting.',
      lan: 'en',
    },
    {
      icono: '/imagenes/habilidades.png',  // Ruta a tu imagen de icono
      titulo: 'Main Skills',
      descripcion: 'With the ability to establish the requirements of an information system and implement its computer solution.',
      lan: 'en',
    },
    {
      icono: '/imagenes/perfil.png',  // Ruta a tu imagen de icono
      titulo: 'Other Skills',
      descripcion: 'Experience with agile and classic work methodologies, operating systems, Windows and Linux platforms, and Office Suite.',
      lan: 'en',
    }
  ];