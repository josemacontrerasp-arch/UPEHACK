export const config = { runtime: "edge" };

// Diagnóstico rápido: confirma si la env var OPENAI_API_KEY está cargada en el deploy.
// Nunca expone el valor de la key, solo si existe.
export default async function handler() {
  const key = process.env.OPENAI_API_KEY || "";
  return new Response(
    JSON.stringify({
      ok: true,
      keyConfigured: key.length > 0,
      keyLooksValid: key.startsWith("sk-"),
      model: "gpt-4o-mini",
      hint: key.length > 0
        ? "Todo listo, el asesor debería responder."
        : "Falta agregar OPENAI_API_KEY en Vercel → Settings → Environment Variables, y luego Redeploy.",
    }),
    { status: 200, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } }
  );
}
