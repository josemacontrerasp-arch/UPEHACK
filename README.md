# UPEHACK · Buscador de Convenios de Intercambio UP + Asesor IA 🛂

Buscador de los convenios de intercambio de la Universidad Panamericana con un **agente de IA integrado** (API de OpenAI) que asesora al alumno como un coordinador de intercambios: destinos, idiomas, TOEFL, presupuesto y trámites.

## Demo

Abre `index.html` en el navegador. No necesita servidor ni build — todo es un solo archivo.

## Asesor de IA

1. Haz clic en el botón 🛂 (abajo a la derecha).
2. Pega tu API key de OpenAI (platform.openai.com → API keys). Se guarda **solo en tu navegador** (localStorage) — nunca en el código ni en GitHub.
3. Pregunta lo que quieras: *"¿A dónde puedo ir sin TOEFL?"*, *"Opciones baratas en Europa"*, *"¿Qué necesito para irme a Alemania?"*

El agente conoce el catálogo completo de convenios (país, universidad, idioma, TOEFL requerido, tipo de convenio y costo estimado) y responde usando esos datos reales, más orientación general sobre visas y vida en el extranjero.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa: buscador + filtros + asesor IA |
| `convenios_oferta_intercambio.xlsx` | Fuente de datos original (International Affairs UP) |

## Funciones del buscador

- Filtro por carrera, país, idioma de las materias y búsqueda libre.
- Toggle "solo con reciprocidad" (pagas colegiatura solo en la UP).
- Orden por costo estimado, TOEFL requerido, nombre o país.
- Estimador visual de presupuesto (1–5 puntos) por universidad.

> Datos informativos, no absolutos — confirma siempre con tu coordinadora de intercambio.
