# NoorUI – Bangladesh's Delightful UI Kit

A lightweight, standalone, production-ready UI framework designed for Bangladeshi developers and Islamic web applications. Build fast, accessible, and beautiful interfaces with a local first-class citizen approach.

## ✨ Features

- **Size-Conscious**: Under 50 KB gzipped, fully tree-shakable.
- **Standalone Architecture**: Zero external UI dependencies.
- **RTL-First**: Built-in support for Arabic/Urdu prayer apps using CSS logical properties.
- **12 Semantic Themes**: `islamic-green`, `ramadan`, `dhaka-night`, `rangpur`, `sylhet`, and more.
- **High Performance**: PostCSS-based Tailwind plugin for maximum optimization.

## 🚀 Modern Setup (Tailwind v4)

NoorUI is optimized for Tailwind CSS v4 and Vite.

### 1. Install

```bash
npm install @supto_noorui/noorui-bangladesh-ui tailwindcss @tailwindcss/vite
```

### 2. Configure Vite

Add the Tailwind plugin to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 3. Register Plugin in CSS

In your main CSS file (e.g., `src/index.css`), import Tailwind and register NoorUI using the `@plugin` directive:

```css
@import "tailwindcss";

@plugin "@supto_noorui/noorui-bangladesh-ui" {
  themes: islamic-green, ramadan;
  prefix: nui-;
}
```

## 🧩 Usage

```html
<button class="nui-btn nui-btn-primary">Bismillah</button>
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
