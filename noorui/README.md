# NoorUI – Bangladesh's Delightful UI Kit

A lightweight, standalone, production-ready UI framework designed for Bangladeshi developers and Islamic web applications. Build fast, accessible, and beautiful interfaces with a local first-class citizen approach.

## ✨ Features

- **Size-Conscious**: Under 50 KB gzipped, fully tree-shakable.
- **Standalone Architecture**: Zero external UI dependencies.
- **RTL-First**: Built-in support for Arabic/Urdu prayer apps using CSS logical properties.
- **12 Semantic Themes**: `islamic-green`, `ramadan`, `dhaka-night`, `rangpur`, `sylhet`, and more.
- **High Performance**: PostCSS-based Tailwind plugin for maximum optimization.

## 🚀 Step-by-Step Setup

### 1. Install the package

```bash
npm install @supto_noorui/noorui-bangladesh-ui
```

### 2. Framework Configuration

#### Vite (React)

Add to your `tailwind.config.ts` (or `.js`):

```javascript
import noorui from "@supto_noorui/noorui-bangladesh-ui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    noorui({
      themes: ["islamic-green", "ramadan", "dark"],
      prefix: "nui-",
    }),
  ],
}
```

#### Next.js (App Router)

Update your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";
import noorui from "@supto_noorui/noorui-bangladesh-ui";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [noorui],
};
export default config;
```

### 3. Start Using Components

NoorUI provides a set of semantic classes that prefix with `nui-` (by default).

```html
<!-- Button -->
<button class="nui-btn nui-btn-primary">Bismillah</button>

<!-- Card -->
<div class="nui-card">
  <div class="nui-card-body">
    <h3 class="font-bold text-lg">Assalamu Alaikum</h3>
    <p>This is a standalone NoorUI card component.</p>
  </div>
</div>
```

## 🎨 Theming

Apply themes using the `data-theme` attribute on your `<html>` or any parent element:

```html
<html data-theme="islamic-green">
```

**Available Themes:** `light`, `dark`, `cupcake`, `islamic-green`, `ramadan`, `hijri`, `dhaka-night`, `rangpur`, `sylhet`, `chittagong`, `coxsbazar`, `sundarban`.

## 🌍 RTL Support

NoorUI uses logical properties. Simply add `dir="rtl"` to your HTML tag for full support.

```html
<html dir="rtl" data-theme="ramadan">
```

## ⚖️ License

MIT © [NoorUI Contributors](https://github.com/supto707/noorui-bangladesh-ui.git)
