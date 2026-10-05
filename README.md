# Portfolio · Ignacio Carignano

Sitio personal para presentar mi perfil como desarrollador: sobre mí, proyectos, CV descargable y formulario de contacto.

**Sitio publicado:** https://i-carignano.github.io/Portfolio/

## Stack

- **React 19** con **TypeScript**
- **Vite** como herramienta de build
- **Tailwind CSS 4** para estilos (modo claro y oscuro)
- **Web3Forms** para el formulario de contacto (sin backend)
- **GitHub Actions** para el deploy en **GitHub Pages**

## Funcionalidades

- Navbar fija: barra superior en desktop y menú lateral en mobile.
- Modo claro y oscuro, con preferencia guardada en el navegador.
- Animaciones sutiles de entrada y hover, desactivadas con `prefers-reduced-motion`.
- Formulario de contacto con validación de campos antes del envío.
- CV descargable en PDF.
- HTML semántico, un solo `h1`, y navegación completa con teclado.

## Estructura

```text
src/
├── components/   # Secciones y componentes de UI (Navbar, Hero, About, Projects, Contact, Footer…)
├── data/         # Contenido: datos personales, habilidades y proyectos
├── hooks/        # useTheme: modo claro y oscuro
└── lib/          # Validación del formulario de contacto
public/
├── avatar.webp   # Foto de perfil
└── cv/           # CV en PDF
```

Para cambiar textos, proyectos o links, alcanza con editar `src/data/portfolio.ts`.

## Cómo correrlo localmente

Requisitos: Node.js 22 o superior.

```bash
git clone https://github.com/I-Carignano/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local   # completar VITE_WEB3FORMS_KEY (ver más abajo)
npm run dev
```

El sitio queda disponible en http://localhost:5173/Portfolio/.

Otros comandos:

- `npm run build`: compila a la carpeta `dist/` (incluye chequeo de tipos).
- `npm run preview`: sirve el build generado para revisarlo.

## Formulario de contacto

El formulario envía los mensajes con [Web3Forms](https://web3forms.com/), que no necesita backend.

1. Crear una access key gratuita en web3forms.com con el email de contacto.
2. Ponerla en `.env.local` como `VITE_WEB3FORMS_KEY=...` para correrlo localmente.
3. Para el deploy, guardarla en el repositorio como secreto de GitHub Actions con el nombre `VITE_WEB3FORMS_KEY` (Settings → Secrets and variables → Actions).

Sin esa clave el formulario muestra un mensaje de error y el resto del sitio funciona igual.

## Deploy en GitHub Pages

1. En el repositorio: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Cargar el secreto `VITE_WEB3FORMS_KEY` (ver arriba).
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio.

La URL pública es `https://<usuario>.github.io/Portfolio/`. Si cambia el nombre del repositorio, también hay que actualizar `base` en `vite.config.ts`.
