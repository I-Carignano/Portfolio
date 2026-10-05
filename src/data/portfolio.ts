export const profile = {
  name: 'Ignacio Carignano',
  role: 'Desarrollador Junior · .NET y Full Stack',
  tagline:
    'Construyo aplicaciones de escritorio y web con C# y .NET, desde la base de datos hasta la interfaz.',
  avatar: '/avatar.webp',
  cvUrl: '/cv/Ignacio-Carignano-CV.pdf',
  email: 'nachocarignano@gmail.com',
  github: 'https://github.com/I-Carignano',
  linkedin: 'https://www.linkedin.com/in/ignacio-carignano/',
  whatsappNumber: '5493413731022',
  whatsappMessage:
    'Hola Ignacio! Vi tu portfolio y me gustaría charlar sobre una oportunidad.',
}

export const about = {
  bio:
    'Soy estudiante avanzado de Ingeniería en Sistemas de la Información en la UAI Rosario, con el 72,5 % de la carrera aprobado. Desarrollé aplicaciones de escritorio con C# y WinForms, una plataforma full-stack con .NET 9 y Blazor, y un juego web publicado en GitHub Pages. Hoy trabajo en soporte técnico IT y busco mi primer rol en desarrollo donde aportar y crecer con code review.',
  skills: [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Blazor WebAssembly', 'MudBlazor'],
    },
    {
      category: 'Backend',
      items: [
        'C#',
        '.NET 8 / 9',
        'ASP.NET Core',
        'API REST',
        'Entity Framework Core',
        'SQL Server',
        'T-SQL',
        'JWT y BCrypt',
      ],
    },
    {
      category: 'Herramientas',
      items: ['Git', 'GitHub', 'Visual Studio 2022', 'SQL Server Management Studio', 'Postman', 'SendGrid'],
    },
  ],
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'VitaStays · Plataforma web de gestión',
    description:
      'Aplicación full-stack para administrar reservas, clientes y cabañas, con cálculo de ocupación anual, mensual y diaria, y un semáforo que compara la ocupación con los objetivos definidos.',
    technologies: ['.NET 9', 'ASP.NET Core', 'Blazor WebAssembly', 'Entity Framework Core', 'SQL Server', 'JWT'],
    repoUrl: 'https://github.com/I-Carignano/Proyecto_BDA',
  },
  {
    title: 'VitaStays · Sistema de escritorio',
    description:
      'Sistema para gestionar cabañas, reservas, servicios y mantenimientos, con control de permisos, auditoría de operaciones y recuperación de contraseña por correo.',
    technologies: ['C#', '.NET 8', 'WinForms', 'Entity Framework Core', 'SQL Server', 'SendGrid'],
    repoUrl: 'https://github.com/I-Carignano/ProyectoIDS',
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
    title: 'Actividades MYDW · API REST',
    description:
      'API REST con Express y TypeScript para gestionar estudiantes y profesores, con operaciones CRUD y persistencia en MongoDB mediante Mongoose.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose'],
    repoUrl: 'https://github.com/I-Carignano/Actividades-MYDW',
  },
]
