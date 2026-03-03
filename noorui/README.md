# NoorUI – Bangladesh's Delightful UI Kit

A lightweight, standalone, production-ready UI framework designed for Bangladeshi developers and Islamic web applications. Build fast, accessible, and beautiful interfaces with a local first-class citizen approach.

## ✨ Features

- **Size-Conscious**: Under 50 KB gzipped, fully tree-shakable.
- **Standalone Architecture**: Zero external UI dependencies.
- **RTL-First**: Built-in support for Arabic/Urdu prayer apps using CSS logical properties.
- **12 Semantic Themes**: `islamic-green`, `ramadan`, `dhaka-night`, `rangpur`, `sylhet`, and more.
- **High Performance**: PostCSS-based Tailwind plugin for maximum optimization.

## 🚀 Quick Start

### 1. Installation

```bash
npm install @supto_noorui/noorui-bangladesh-ui
```

### 2. Configuration

Add NoorUI to your `tailwind.config.ts` or `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
import noorui from "@supto_noorui/noorui-bangladesh-ui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    noorui({
      themes: ["islamic-green", "ramadan", "dark"], // Optional: specifying themes
      prefix: "nui-", // Optional: component prefix
    }),
  ],
}
```

## 🧩 Component Examples

NoorUI provides a set of semantic classes that prefix with `nui-` (by default).

### Buttons

```html
<button class="nui-btn nui-btn-primary">Bismillah</button>
<button class="nui-btn nui-btn-outline">Outline</button>
<button class="nui-btn nui-btn-ghost">Ghost</button>
```

### Cards

```html
<div class="nui-card">
  <div class="nui-card-body">
    <h3 class="font-bold text-lg">Assalamu Alaikum</h3>
    <p>This is a standalone NoorUI card component.</p>
    <div class="nui-card-actions mt-4">
      <button class="nui-btn nui-btn-primary nui-btn-sm">Confirm</button>
    </div>
  </div>
</div>
```

## 🎨 Themes

Apply themes using the `data-theme` attribute on any parent element (usually `<html>`):

```html
<html data-theme="islamic-green">
  <!-- Content here -->
</html>
```

**Available Themes:** `light`, `dark`, `cupcake`, `islamic-green`, `ramadan`, `hijri`, `dhaka-night`, `rangpur`, `sylhet`, `chittagong`, `coxsbazar`, `sundarban`.

## 🌍 RTL Support

NoorUI uses logical properties. Simply add `dir="rtl"` to your HTML tag for full support.

```html
<html dir="rtl" data-theme="ramadan">
```

## ⚖️ License

MIT © [NoorUI Contributors](https://github.com/supto707/noorui-bangladesh-ui.git)
