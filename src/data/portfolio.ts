export const profile = {
  name: 'Ignacio Carignano',
  role: 'Desarrollador Junior · Full Stack · .NET y Node.js',
  tagline:
    'Construyo aplicaciones de punta a punta con .NET y Node.js, desde la base de datos hasta la interfaz.',
  // BASE_URL incluye el subdirectorio de GitHub Pages (/Portfolio/).
  avatar: `${import.meta.env.BASE_URL}avatar.webp`,
  cvUrl: `${import.meta.env.BASE_URL}cv/Ignacio-Carignano-CV.pdf`,
  email: 'nachocarignano@gmail.com',
  github: 'https://github.com/I-Carignano',
  linkedin: 'https://www.linkedin.com/in/ignacio-carignano/',
  whatsappNumber: '5493413731022',
  whatsappMessage:
    'Hola Ignacio! Vi tu portfolio y me gustaría charlar sobre una oportunidad.',
}

export const about = {
  bio:
    'Soy estudiante avanzado de Ingeniería en Sistemas de la Información en la UAI Rosario, con el 72,5 % de la carrera aprobado, y me gusta construir aplicaciones de punta a punta, desde la base de datos hasta la interfaz. Trabajo en dos ecosistemas: con C# y .NET desarrollé VitaStays, en versión de escritorio con WinForms y en versión web full-stack con API REST en ASP.NET Core y Blazor, y con Node.js, TypeScript y MongoDB armé una API REST con autenticación JWT; en el frontend publiqué Futbolle y este portfolio en React. En paralelo llevo adelante TapTrack, mi propio emprendimiento con su sitio web en producción, y trabajo en soporte técnico IT. Busco mi primer rol como desarrollador en un equipo donde pueda aportar desde tareas concretas y seguir creciendo con code review y mentoría.',
  skills: [
    {
      category: 'Frontend',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Blazor WebAssembly',
        'MudBlazor',
      ],
    },
    {
      category: 'Backend',
      items: [
        'C#',
        '.NET 8 / 9',
        'ASP.NET Core',
        'API REST',
        'Entity Framework Core',
        'SQL Server / T-SQL',
        'JWT y BCrypt',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Zod',
      ],
    },
    {
      category: 'Herramientas',
      items: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'Vite',
        'Visual Studio 2022',
        'SQL Server Management Studio',
        'Postman',
        'VS Code',
      ],
    },
  ],
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  // Opcional: los proyectos privados no tienen repositorio público.
  repoUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'VitaStays · Versión web full-stack',
    description:
      'Plataforma web para administrar reservas, clientes y cabañas, con una API REST protegida con JWT y un front-end en Blazor WebAssembly. Calcula la ocupación anual, mensual y diaria, y la compara con los objetivos definidos mediante un semáforo.',
    technologies: ['.NET 9', 'ASP.NET Core', 'API REST', 'Blazor WebAssembly', 'Entity Framework Core', 'SQL Server', 'JWT'],
    repoUrl: 'https://github.com/I-Carignano/Proyecto_BDA',
  },
  {
    title: 'VitaStays · Versión de escritorio',
    description:
      'Aplicación de escritorio para administrar cabañas, reservas, servicios, mantenimientos y empleados. Incluye permisos por grupo, auditoría de operaciones, informes en PDF y Excel, y recuperación de contraseña por correo.',
    technologies: ['C#', '.NET 8', 'WinForms', 'Entity Framework Core', 'SQL Server', 'SendGrid'],
    repoUrl: 'https://github.com/I-Carignano/ProyectoIDS',
  },
  {
    title: 'API REST con Node.js, Express y TypeScript',
    description:
      'API REST con routing modular versionado, autenticación completa con JWT (access y refresh tokens), cookies httpOnly y autorización por roles. Valida los datos en runtime con Zod y persiste en MongoDB con Mongoose, con paginación y ordenamiento.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Zod', 'JWT'],
    repoUrl: 'https://github.com/I-Carignano/Actividades-MYDW',
  },
  {
    title: 'Futbolle · Juego web',
    description:
      'Juego tipo Wordle en el que hay que adivinar un jugador de fútbol comparando sus atributos. Incluye tres niveles de dificultad, puntaje, historial y efectos de sonido generados en el navegador.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Fetch API', 'Web Audio API', 'LocalStorage'],
    repoUrl: 'https://github.com/I-Carignano/Trabajo_Futbolle',
    demoUrl: 'https://i-carignano.github.io/Trabajo_Futbolle/',
  },
  {
    title: 'TapTrack · Emprendimiento propio',
    description:
      'Landing de un emprendimiento propio de tarjetas NFC y QR que llevan al cliente a dejar una reseña en Google, con informes de reputación. Incluye formulario de contacto, acceso directo a WhatsApp y diseño responsive.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Apache', 'Google Fonts'],
    demoUrl: 'https://taptrack.com.ar/',
  },
]
