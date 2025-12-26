
import { ContentResult, ContentType } from "../types";

/**
 * Content Generation Service
 * Simulates AI-powered content generation for demonstration purposes
 * In production, this would connect to an AI API service
 */
export const generateGrowthContent = async (topic: string, type: ContentType, language: 'en' | 'es' = 'en'): Promise<ContentResult> => {
  // Simulate API delay for realistic UX
  return new Promise((resolve) => {
    setTimeout(() => {
      const isEs = language === 'es';
      
      // Generate contextual mock data based on input
      const result = generateMockContent(topic, type, isEs);
      resolve(result);
    }, 1500);
  });
};

/**
 * Generates realistic mock content based on type and language
 * Demonstrates the structure and quality of AI-generated content
 */
function generateMockContent(topic: string, type: ContentType, isEs: boolean): ContentResult {
  const baseResult: ContentResult = {
    cta: isEs ? "¡Descubre más en el enlace!" : "Learn more at the link!"
  };

  switch (type) {
    case 'viral-hooks':
      return {
        ...baseResult,
        headline: isEs ? `Domina ${topic} en 2025` : `Master ${topic} in 2025`,
        hook: isEs 
          ? `La mayoría falla en ${topic}, pero tú no lo harás después de ver esto.` 
          : `Most people fail at ${topic}, but you won't after seeing this.`,
        ideas: isEs ? [
          `El futuro de ${topic} con IA`,
          `3 Estrategias probadas para ${topic}`,
          `Caso de éxito: De 0 a 400k`,
          `Herramientas esenciales para ${topic}`,
          `Errores comunes que debes evitar`
        ] : [
          `The future of ${topic} with AI`,
          `3 Proven strategies for ${topic}`,
          `Case study: From 0 to 400k`,
          `Essential tools for ${topic}`,
          `Common mistakes to avoid`
        ]
      };

    case 'video-script':
      return {
        ...baseResult,
        headline: isEs ? `Guion: ${topic}` : `Script: ${topic}`,
        script: isEs 
          ? `[INTRO - 0:00-0:05]\n"¿Quieres dominar ${topic}? Esto cambiará todo."\n\n[DESARROLLO - 0:05-0:45]\nEl mundo de ${topic} está evolucionando rápidamente. La clave está en tres pilares fundamentales:\n\n1. Automatización inteligente\n2. Estrategia basada en datos\n3. Ejecución consistente\n\n[CIERRE - 0:45-1:00]\nEstos principios me ayudaron a escalar a 400k seguidores. Ahora es tu turno.`
          : `[INTRO - 0:00-0:05]\n"Want to master ${topic}? This changes everything."\n\n[BODY - 0:05-0:45]\nThe world of ${topic} is evolving rapidly. The key lies in three fundamental pillars:\n\n1. Smart automation\n2. Data-driven strategy\n3. Consistent execution\n\n[CLOSE - 0:45-1:00]\nThese principles helped me scale to 400k followers. Now it's your turn.`
      };

    case 'thread-writer':
      return {
        ...baseResult,
        headline: isEs ? `🧵 Hilo: ${topic}` : `🧵 Thread: ${topic}`,
        steps: isEs ? [
          `1/ ${topic} está cambiando el juego. Aquí está todo lo que necesitas saber en 2025. 👇`,
          `2/ Primero, entiende esto: La automatización no reemplaza la creatividad, la amplifica. He usado esto para gestionar 400k seguidores.`,
          `3/ Segundo, la clave está en los sistemas. No trabajes más duro, trabaja más inteligente. Mis workflows reducen el tiempo en 80%.`,
          `4/ Tercero, los datos son tu mejor amigo. Cada decisión debe estar respaldada por métricas reales, no intuición.`,
          `5/ Conclusión: ${topic} + IA + Estrategia = Resultados exponenciales. ¿Listo para empezar? 🚀`
        ] : [
          `1/ ${topic} is changing the game. Here's everything you need to know in 2025. 👇`,
          `2/ First, understand this: Automation doesn't replace creativity, it amplifies it. I've used this to manage 400k followers.`,
          `3/ Second, systems are key. Don't work harder, work smarter. My workflows reduce time by 80%.`,
          `4/ Third, data is your best friend. Every decision should be backed by real metrics, not intuition.`,
          `5/ Bottom line: ${topic} + AI + Strategy = Exponential results. Ready to start? 🚀`
        ]
      };

    case 'ad-copy':
      return {
        ...baseResult,
        headline: isEs 
          ? `Transforma tu ${topic} en 30 días` 
          : `Transform your ${topic} in 30 days`,
        script: isEs
          ? `¿Cansado de resultados mediocres en ${topic}?\n\nDescubre el sistema exacto que usé para:\n✓ Escalar a 400k seguidores\n✓ Reducir tiempo de trabajo en 80%\n✓ Automatizar procesos complejos\n\nNo más teoría. Solo estrategias probadas que funcionan.\n\nÚnete a miles que ya están transformando su ${topic}.`
          : `Tired of mediocre results in ${topic}?\n\nDiscover the exact system I used to:\n✓ Scale to 400k followers\n✓ Reduce work time by 80%\n✓ Automate complex processes\n\nNo more theory. Just proven strategies that work.\n\nJoin thousands already transforming their ${topic}.`
      };

    default:
      return baseResult;
  }
}
