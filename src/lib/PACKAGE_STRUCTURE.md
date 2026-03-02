# RangpurUI — npm Package Structure

This document describes the npm package structure for distributing RangpurUI as a standalone Tailwind CSS plugin.

## Package Structure

```
rangpurui/
├── package.json           # npm metadata
├── README.md              # Documentation
├── LICENSE                # MIT License
├── tsconfig.json          # TypeScript config
├── src/
│   ├── index.ts           # Main entry — Tailwind plugin
│   ├── themes/
│   │   ├── index.ts       # Theme registry
│   │   ├── light.ts       # Light theme tokens
│   │   ├── dark.ts        # Dark theme tokens
│   │   ├── islamic-green.ts
│   │   ├── ramadan.ts
│   │   ├── hijri.ts
│   │   ├── dhaka-night.ts
│   │   ├── rangpur.ts
│   │   ├── sylhet.ts
│   │   ├── chittagong.ts
│   │   ├── coxsbazar.ts
│   │   ├── sundarban.ts
│   │   └── cupcake.ts
│   ├── components/
│   │   ├── index.ts       # Component registry
│   │   ├── button.ts      # .rui-btn classes
│   │   ├── card.ts        # .rui-card classes
│   │   ├── modal.ts       # .rui-modal classes
│   │   ├── navbar.ts      # .rui-navbar classes
│   │   ├── input.ts       # .rui-input classes
│   │   ├── table.ts       # .rui-table classes
│   │   ├── alert.ts       # .rui-alert classes
│   │   ├── drawer.ts      # .rui-drawer classes
│   │   ├── tabs.ts        # .rui-tabs classes
│   │   ├── badge.ts       # .rui-badge classes
│   │   ├── progress.ts    # .rui-progress classes
│   │   ├── toast.ts       # .rui-toast classes
│   │   ├── dropdown.ts    # .rui-dropdown classes
│   │   ├── accordion.ts   # .rui-accordion classes
│   │   ├── steps.ts       # .rui-steps classes
│   │   ├── rating.ts      # .rui-rating classes
│   │   ├── avatar.ts      # .rui-avatar classes
│   │   ├── divider.ts     # .rui-divider classes
│   │   ├── pagination.ts  # .rui-pagination classes
│   │   ├── breadcrumbs.ts # .rui-breadcrumbs classes
│   │   ├── hero.ts        # .rui-hero classes
│   │   ├── footer.ts      # .rui-footer classes
│   │   ├── stats.ts       # .rui-stats classes
│   │   ├── prayer-card.ts # .rui-prayer classes
│   │   └── qibla.ts       # .rui-qibla classes
│   └── utilities/
│       ├── rtl.ts         # RTL logical properties
│       ├── animations.ts  # Transition/animation utils
│       └── patterns.ts    # Islamic geometric patterns
├── dist/                  # Built output
│   ├── index.js           # CJS bundle
│   ├── index.mjs          # ESM bundle
│   ├── index.d.ts         # Type definitions
│   └── themes/            # Individual theme files (tree-shakable)
└── examples/
    ├── react/             # React example
    ├── vue/               # Vue example
    ├── vanilla/           # Vanilla JS example
    └── nextjs/            # Next.js example
```

## package.json

```json
{
  "name": "rangpurui",
  "version": "1.0.0",
  "description": "A lightweight Tailwind CSS UI framework with Islamic-themed palettes for Bangladeshi developers",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./themes/*": {
      "import": "./dist/themes/*.mjs",
      "require": "./dist/themes/*.js"
    },
    "./components/*": {
      "import": "./dist/components/*.mjs",
      "require": "./dist/components/*.js"
    }
  },
  "sideEffects": false,
  "files": ["dist", "README.md", "LICENSE"],
  "keywords": [
    "tailwindcss",
    "ui-framework",
    "components",
    "islamic",
    "bangladesh",
    "rtl",
    "daisyui-alternative",
    "rangpurui",
    "prayer-app",
    "hijri"
  ],
  "author": "RangpurUI Contributors",
  "license": "MIT",
  "peerDependencies": {
    "tailwindcss": ">=3.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "tsup": "^8.0.0",
    "vitest": "^1.0.0"
  },
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts --clean --treeshake",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
    "test": "vitest",
    "prepublishOnly": "npm run build"
  }
}
```

## Installation & Usage

```bash
npm install rangpurui
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('rangpurui')({
      themes: ['light', 'dark', 'islamic-green', 'ramadan'],
      prefix: 'rui-',
      darkMode: 'class',
    }),
  ],
}
```

```html
<!-- Set theme -->
<html data-theme="islamic-green">
  <body>
    <button class="rui-btn-primary rui-btn-lg">
      Bismillah — Get Started
    </button>
    
    <div class="rui-card">
      <div class="rui-card-body">
        <h2>Assalamu Alaikum</h2>
        <p>Welcome to RangpurUI</p>
      </div>
    </div>
  </body>
</html>
```

## Tree-Shaking

RangpurUI is fully tree-shakable. Import only what you need:

```js
// Import specific themes
import { islamicGreen, ramadan } from 'rangpurui/themes';

// Import specific components  
import { button, card } from 'rangpurui/components';
```

## RTL Support

```html
<html dir="rtl" data-theme="islamic-green">
  <!-- All components automatically adapt to RTL -->
</html>
```

## Bundle Size

| Import | Gzipped |
|--------|---------|
| Full library | ~42KB |
| 1 theme + 5 components | ~8KB |
| CSS only (no JS) | ~35KB |
