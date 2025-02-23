// Definimos una interfaz para las tecnologías
export interface Tecnologia {
    nombre: string;
    icono: string;
    porcentaje: number;
  }
  
  // Definimos las categorías de tecnologías (lenguajes y bases de datos)
  export const tecnologias = {
    lenguajes: [
      { nombre: 'Python', icono: '/imagenes/python.png', porcentaje: 60 },
      { nombre: 'JavaScript', icono: '/imagenes/js.png', porcentaje: 80 },
      { nombre: 'C++', icono: '/imagenes/c++.png', porcentaje: 50 },
      { nombre: 'C#', icono: '/imagenes/cchar.png', porcentaje: 40 },
      { nombre: 'Java', icono: '/imagenes/java.png' , porcentaje: 50},
      { nombre: 'TypeScript', icono: '/imagenes/ts.png', porcentaje: 60 },
      { nombre: 'Go', icono: '/imagenes/go.png' , porcentaje: 40}
    ] as Tecnologia[],
    basesDeDatos: [
      { nombre: 'Oracle', icono: '/imagenes/oracle.png', porcentaje: 60 },
      { nombre: 'SQL', icono: '/imagenes/sql.png' , porcentaje: 70},
      { nombre: 'MongoDB', icono: '/imagenes/mongo.png' , porcentaje: 50},
    ] as Tecnologia[],
    Frameworks: [
        {nombre:'nextJs', icono: '/imagenes/nextjs.png', porcentaje: 50},
        {nombre:'React', icono: '/imagenes/react.png', porcentaje: 40},
        {nombre:'nestjs', icono: '/imagenes/nestjs.png', porcentaje: 50},
        {nombre:'astrojs', icono: '/imagenes/astrojs.png', porcentaje: 50},
        {nombre:'express', icono: '/imagenes/express.png', porcentaje: 50},
    ] as Tecnologia[]
  };
  