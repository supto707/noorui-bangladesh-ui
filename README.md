# NoorUI – Bangladesh's Delightful UI (Official Docs)

A lightweight, high-performance UI framework for modern web development, with a focus on Islamic and Bangladeshi cultural aesthetics. This repository contains the official documentation site.

## 🚀 Getting Started with Docs

To run this documentation project locally:

```sh
# 1. Clone the repository
git clone https://github.com/supto707/noorui-bangladesh-ui.git

# 2. Navigate to the project directory
cd noorui-bangladesh-ui

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## 🛠 Using NoorUI in Your Projects

If you want to use the **NoorUI** framework in your own application:

### 1. Installation

```bash
npm install @supto_noorui/noorui-bangladesh-ui
```

### 2. Configuration (Tailwind)

Add NoorUI to your `tailwind.config.ts`:

```typescript
import noorui from "@supto_noorui/noorui-bangladesh-ui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [noorui],
}
```

## ✨ Core Features

- **Semantic Theming**: 12 custom themes like `islamic-green` and `ramadan`.
- **RTL Ready**: Native support for Arabic/Persian/Urdu script logical properties.
- **Accessible**: Built to follow modern accessibility standards.
- **Lightweight**: Pure PostCSS plugin — zero heavy JS runtimes.

## ⚖️ License

MIT © [NoorUI Contributors](https://github.com/supto707/noorui-bangladesh-ui.git)
