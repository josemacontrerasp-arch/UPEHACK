# UPEHACK · Buscador de Convenios de Intercambio UP + Asesor IA 🛂

Buscador de los convenios de intercambio de la Universidad Panamericana con un **agente de IA integrado** (API de OpenAI) que asesora al alumno como un coordinador de intercambios: destinos, idiomas, TOEFL, presupuesto y trámites.

## Deploy en Vercel

1. Importa este repo en [vercel.com/new](https://vercel.com/new) (framework: **Other**, sin build command).
2. En el proyecto → **Settings → Environment Variables** agrega:
   - `OPENAI_API_KEY` = tu key de OpenAI (platform.openai.com → API keys)
3. Redeploy. Listo — la key vive **solo en el backend** (`/api/chat`), nunca llega al navegador ni al repo.

Cada push a `main` redeploya automáticamente.

## Asesor de IA

Haz clic en el botón 🛂 (abajo a la derecha) y pregunta lo que quieras: *"¿A dónde puedo ir sin TOEFL?"*, *"Opciones baratas en Europa"*, *"¿Qué necesito para irme a Alemania?"*

El agente conoce el catálogo completo de convenios (país, universidad, idioma, TOEFL requerido, tipo de convenio y costo estimado) **y los filtros que tienes activos**, y responde usando esos datos reales, más orientación general sobre visas y vida en el extranjero.

> Nota: el chat necesita el backend, así que corre en el deploy de Vercel (o con `vercel dev` en local). Abrir `index.html` a secas solo muestra el buscador.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La app: buscador + filtros + chat del asesor |
| `api/chat.js` | Backend (Vercel Edge Function): proxy a OpenAI `gpt-4o-mini` con streaming, key en env var |
| `convenios_oferta_intercambio.xlsx` | Fuente de datos original (International Affairs UP) |

## Funciones del buscador

- Filtro por carrera, país, idioma de las materias y búsqueda libre.
- Toggle "solo con reciprocidad" (pagas colegiatura solo en la UP).
- Orden por costo estimado, TOEFL requerido, nombre o país.
- Estimador visual de presupuesto (1–5 puntos) por universidad.

> Datos informativos, no absolutos — confirma siempre con tu coordinadora de intercambio.
