/**
 * NoorUI - PostCSS Plugin Structure
 * 
 * This file represents the npm package entry point for distribution.
 * In production, this would be published as the `noorui` npm package.
 * 
 * Usage:
 *   // tailwind.config.js
 *   module.exports = {
 *     plugins: [require('noorui')],
 *   }
 * 
 * Or with options:
 *   plugins: [require('noorui')({ themes: ['islamic-green', 'ramadan'] })],
 */

// Theme definitions — each theme maps semantic tokens to HSL values
export const themes = {
  light: {
    "--background": "60 20% 98%",
    "--foreground": "150 10% 12%",
    "--primary": "152 55% 28%",
    "--primary-foreground": "60 20% 98%",
    "--secondary": "42 80% 55%",
    "--secondary-foreground": "30 50% 12%",
    "--muted": "150 10% 93%",
    "--muted-foreground": "150 8% 45%",
    "--accent": "42 80% 55%",
    "--accent-foreground": "30 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "60 15% 97%",
    "--card-foreground": "150 10% 12%",
    "--border": "150 10% 88%",
    "--input": "150 10% 88%",
    "--ring": "152 55% 28%",
    "--radius": "0.75rem",
  },
  dark: {
    "--background": "160 15% 8%",
    "--foreground": "60 10% 92%",
    "--primary": "152 55% 45%",
    "--primary-foreground": "160 15% 8%",
    "--secondary": "42 70% 50%",
    "--secondary-foreground": "160 15% 8%",
    "--muted": "160 10% 16%",
    "--muted-foreground": "160 8% 55%",
    "--accent": "42 70% 50%",
    "--accent-foreground": "160 15% 8%",
    "--destructive": "0 62% 45%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "160 12% 11%",
    "--card-foreground": "60 10% 92%",
    "--border": "160 10% 18%",
    "--input": "160 10% 18%",
    "--ring": "152 55% 45%",
    "--radius": "0.75rem",
  },
  "islamic-green": {
    "--background": "140 20% 97%",
    "--foreground": "140 30% 10%",
    "--primary": "140 60% 25%",
    "--primary-foreground": "140 20% 97%",
    "--secondary": "45 85% 52%",
    "--secondary-foreground": "40 50% 10%",
    "--muted": "140 12% 91%",
    "--muted-foreground": "140 10% 42%",
    "--accent": "45 85% 52%",
    "--accent-foreground": "40 50% 10%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "140 15% 95%",
    "--card-foreground": "140 30% 10%",
    "--border": "140 12% 86%",
    "--input": "140 12% 86%",
    "--ring": "140 60% 25%",
    "--radius": "0.75rem",
  },
  ramadan: {
    "--background": "270 15% 97%",
    "--foreground": "270 20% 12%",
    "--primary": "270 45% 35%",
    "--primary-foreground": "270 15% 97%",
    "--secondary": "42 90% 55%",
    "--secondary-foreground": "40 50% 12%",
    "--muted": "270 10% 92%",
    "--muted-foreground": "270 8% 45%",
    "--accent": "42 90% 55%",
    "--accent-foreground": "40 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "270 12% 95%",
    "--card-foreground": "270 20% 12%",
    "--border": "270 10% 87%",
    "--input": "270 10% 87%",
    "--ring": "270 45% 35%",
    "--radius": "0.75rem",
  },
  hijri: {
    "--background": "200 15% 97%",
    "--foreground": "200 20% 10%",
    "--primary": "200 65% 35%",
    "--primary-foreground": "200 15% 97%",
    "--secondary": "170 50% 40%",
    "--secondary-foreground": "170 30% 10%",
    "--muted": "200 10% 92%",
    "--muted-foreground": "200 8% 45%",
    "--accent": "42 75% 55%",
    "--accent-foreground": "40 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "200 12% 95%",
    "--card-foreground": "200 20% 10%",
    "--border": "200 10% 87%",
    "--input": "200 10% 87%",
    "--ring": "200 65% 35%",
    "--radius": "0.75rem",
  },
  "dhaka-night": {
    "--background": "230 20% 10%",
    "--foreground": "60 10% 90%",
    "--primary": "180 70% 45%",
    "--primary-foreground": "230 20% 10%",
    "--secondary": "340 70% 55%",
    "--secondary-foreground": "0 0% 100%",
    "--muted": "230 15% 17%",
    "--muted-foreground": "230 10% 50%",
    "--accent": "50 85% 55%",
    "--accent-foreground": "230 20% 10%",
    "--destructive": "0 62% 45%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "230 18% 13%",
    "--card-foreground": "60 10% 90%",
    "--border": "230 15% 20%",
    "--input": "230 15% 20%",
    "--ring": "180 70% 45%",
    "--radius": "0.75rem",
  },
  rangpur: {
    "--background": "30 25% 97%",
    "--foreground": "25 30% 12%",
    "--primary": "25 75% 42%",
    "--primary-foreground": "30 25% 97%",
    "--secondary": "140 45% 35%",
    "--secondary-foreground": "140 20% 97%",
    "--muted": "30 15% 91%",
    "--muted-foreground": "30 10% 45%",
    "--accent": "45 80% 52%",
    "--accent-foreground": "40 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "30 20% 95%",
    "--card-foreground": "25 30% 12%",
    "--border": "30 15% 86%",
    "--input": "30 15% 86%",
    "--ring": "25 75% 42%",
    "--radius": "0.75rem",
  },
  sylhet: {
    "--background": "120 18% 97%",
    "--foreground": "120 20% 10%",
    "--primary": "120 45% 30%",
    "--primary-foreground": "120 18% 97%",
    "--secondary": "180 45% 35%",
    "--secondary-foreground": "0 0% 100%",
    "--muted": "120 10% 91%",
    "--muted-foreground": "120 8% 45%",
    "--accent": "80 55% 45%",
    "--accent-foreground": "80 30% 10%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "120 14% 95%",
    "--card-foreground": "120 20% 10%",
    "--border": "120 10% 86%",
    "--input": "120 10% 86%",
    "--ring": "120 45% 30%",
    "--radius": "0.75rem",
  },
  chittagong: {
    "--background": "15 20% 97%",
    "--foreground": "15 25% 10%",
    "--primary": "15 65% 40%",
    "--primary-foreground": "15 20% 97%",
    "--secondary": "200 50% 40%",
    "--secondary-foreground": "0 0% 100%",
    "--muted": "15 12% 91%",
    "--muted-foreground": "15 8% 45%",
    "--accent": "42 75% 52%",
    "--accent-foreground": "40 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "15 15% 95%",
    "--card-foreground": "15 25% 10%",
    "--border": "15 12% 86%",
    "--input": "15 12% 86%",
    "--ring": "15 65% 40%",
    "--radius": "0.75rem",
  },
  coxsbazar: {
    "--background": "195 25% 97%",
    "--foreground": "195 25% 10%",
    "--primary": "195 70% 38%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "35 80% 52%",
    "--secondary-foreground": "30 50% 10%",
    "--muted": "195 12% 91%",
    "--muted-foreground": "195 10% 45%",
    "--accent": "170 55% 40%",
    "--accent-foreground": "170 30% 10%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "195 18% 95%",
    "--card-foreground": "195 25% 10%",
    "--border": "195 12% 86%",
    "--input": "195 12% 86%",
    "--ring": "195 70% 38%",
    "--radius": "0.75rem",
  },
  sundarban: {
    "--background": "90 18% 96%",
    "--foreground": "90 25% 10%",
    "--primary": "90 40% 28%",
    "--primary-foreground": "90 18% 96%",
    "--secondary": "35 60% 42%",
    "--secondary-foreground": "35 25% 97%",
    "--muted": "90 10% 90%",
    "--muted-foreground": "90 8% 42%",
    "--accent": "55 65% 48%",
    "--accent-foreground": "55 30% 10%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "90 14% 94%",
    "--card-foreground": "90 25% 10%",
    "--border": "90 10% 85%",
    "--input": "90 10% 85%",
    "--ring": "90 40% 28%",
    "--radius": "0.75rem",
  },
  cupcake: {
    "--background": "340 20% 97%",
    "--foreground": "340 15% 15%",
    "--primary": "340 55% 55%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "200 50% 55%",
    "--secondary-foreground": "0 0% 100%",
    "--muted": "340 10% 92%",
    "--muted-foreground": "340 8% 45%",
    "--accent": "45 80% 60%",
    "--accent-foreground": "40 50% 12%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 100%",
    "--card": "340 15% 95%",
    "--card-foreground": "340 15% 15%",
    "--border": "340 10% 88%",
    "--input": "340 10% 88%",
    "--ring": "340 55% 55%",
    "--radius": "0.75rem",
  },
} as const;

// Component class definitions
export const components = {
  btn: {
    base: "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ease-out px-5 py-2.5 text-sm gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
    variants: {
      primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
      secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
      ghost: "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]",
      outline: "bg-transparent border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]",
    },
    sizes: {
      xs: "px-2.5 py-1 text-xs",
      sm: "px-3.5 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
      xl: "px-9 py-4 text-lg",
    },
  },
  card: {
    base: "rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] overflow-hidden",
    body: "p-6",
    compact: "p-4",
  },
  alert: {
    base: "flex items-start gap-3 rounded-lg p-4 text-sm border",
    variants: {
      info: "bg-[hsl(var(--info)/0.1)] border-[hsl(var(--info)/0.2)] text-[hsl(var(--info))]",
      success: "bg-[hsl(var(--success)/0.1)] border-[hsl(var(--success)/0.2)] text-[hsl(var(--success))]",
      warning: "bg-[hsl(var(--warning)/0.1)] border-[hsl(var(--warning)/0.2)] text-[hsl(var(--warning))]",
      error: "bg-[hsl(var(--destructive)/0.1)] border-[hsl(var(--destructive)/0.2)] text-[hsl(var(--destructive))]",
    },
  },
  badge: {
    base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
    variants: {
      primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
      secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
      outline: "bg-transparent border border-[hsl(var(--border))] text-[hsl(var(--foreground))]",
    },
  },
  input: {
    base: "flex h-10 w-full rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-[hsl(var(--background))] placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:cursor-not-allowed disabled:opacity-50",
  },
  table: {
    base: "w-full text-sm",
    th: "text-left font-semibold text-[hsl(var(--muted-foreground))] px-4 py-3 border-b border-[hsl(var(--border))]",
    td: "px-4 py-3 border-b border-[hsl(var(--border))]",
  },
  progress: {
    track: "w-full h-2.5 rounded-full bg-[hsl(var(--muted))] overflow-hidden",
    bar: "h-full rounded-full bg-[hsl(var(--primary))] transition-all duration-500 ease-out",
  },
} as const;

// Plugin configuration type
export interface NoorUIConfig {
  themes?: (keyof typeof themes)[];
  prefix?: string;
  darkMode?: "class" | "media" | "auto";
}

/**
 * NoorUI Tailwind CSS Plugin
 * 
 * This is the main plugin entry point.
 * 
 * In a real npm package, this would be:
 * 
 *   const plugin = require('tailwindcss/plugin');
 *   module.exports = plugin.withOptions((options) => {
 *     return function({ addBase, addComponents, addUtilities }) {
 *       // inject themes as CSS custom properties
 *       // inject component classes
 *       // inject utility classes
 *     }
 *   });
 * 
 * For now, this exports the theme and component definitions
 * that can be consumed by the Tailwind config.
 */
export function createNoorPlugin(config: NoorUIConfig = {}) {
  const {
    themes: enabledThemes = Object.keys(themes) as (keyof typeof themes)[],
    prefix = "nui-",
    darkMode = "class",
  } = config;

  return {
    themes: Object.fromEntries(
      enabledThemes.map((name) => [name, themes[name]])
    ),
    components,
    prefix,
    darkMode,
  };
}

export default createNoorPlugin;
