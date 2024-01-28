import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiNestjs, SiOracle } from 'react-icons/si';
import { ISkill } from '../types/skill';

export const skills : ISkill[] = [
  {
    icon: FaHtml5,
    name: 'HTML',
    description: 'Lenguaje de marcado utilizado para estructurar y presentar contenido en la web.'
  },
  {
    icon: FaCss3Alt,
    name: 'CSS',
    description: 'Hoja de estilos utilizada para describir la presentación de documentos HTML o XML.'
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
    description: 'Framework de CSS que utiliza clases de utilidad para construir diseños de manera rápida y responsiva.'
  },
  {
    icon: SiJavascript,
    name: 'JavaScript',
    description: 'Lenguaje de programación interpretado, orientado a objetos, utilizado principalmente en la interactividad de las páginas web.'
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    description: 'Framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios estáticos para aplicaciones web.'
  },
  {
    icon: SiNestjs,
    name: 'Nest Js',
    description: 'Framework de Node.js para construir eficientes y escalables aplicaciones del lado del servidor.'
  },
  {
    icon: FaJava,
    name: 'Java',
    description: 'Lenguaje de programación de alto nivel, orientado a objetos y diseñado para tener la menor cantidad de dependencias de implementación posibles.'
  },
  {
    icon: FaReact,
    name: 'Astro',
    description: 'Framework de construcción de sitios web modernos que permite escribir menos JavaScript con un rendimiento optimizado.'
  },
  {
    icon: FaDatabase,
    name: 'SQL',
    description: 'Lenguaje de consulta estructurado utilizado para la gestión y manipulación de bases de datos relacionales.'
  },
  {
    icon: SiOracle,
    name: 'PLSQL',
    description: 'Extensión de SQL utilizada en Oracle para combinar la manipulación de datos y la lógica de programación procedural.'
  },
  {
    icon: FaGitAlt,
    name: 'GIT/GITHUB',
    description: 'Git es un sistema de control de versiones distribuido, mientras que GitHub es una plataforma de alojamiento de código que utiliza Git.'
  }
];

