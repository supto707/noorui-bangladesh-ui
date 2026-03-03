import plugin from 'tailwindcss/plugin';
import { getBaseStyles, getThemeExtensions } from './themes.js';
import rtlUtilities from './rtl.js';

// --- Import Standalone NoorUI Components ---
import button from './components/button.js';
import card from './components/card.js';
import forms from './components/forms.js';
import navbar from './components/navbar.js';
import navigation from './components/navigation.js';
import feedback from './components/feedback.js';
import layout from './components/layout.js';
import dataDisplay from './components/data-display.js';
import modal from './components/modal.js';
import tooltip from './components/tooltip.js';
import dropdown from './components/dropdown.js';

const nooruui = plugin.withOptions(
    function (options = {}) {
        return function ({ addBase, addComponents, addUtilities }) {
            // 0. Sanitize Prefix (Future-proofing, components currently use hardcoded .nui-)
            let prefix = options.prefix || 'nui-';
            if (prefix && !prefix.endsWith('-')) prefix += '-';

            // 1. Inject theme CSS variables
            const themeStyles = getBaseStyles(options);
            addBase(themeStyles);

            // 2. Inject shared base styles
            addBase({
                '*': {
                    'border-color': 'hsl(var(--bc) / 0.1)',
                },
                'body': {
                    'background-color': 'hsl(var(--b1))',
                    'color': 'hsl(var(--bc))',
                },
                '@keyframes nui-spin': {
                    'from': { 'transform': 'rotate(0deg)' },
                    'to': { 'transform': 'rotate(360deg)' },
                },
                '@keyframes nui-fade-in': {
                    'from': { 'opacity': '0' },
                    'to': { 'opacity': '1' },
                },
                '@keyframes nui-slide-up': {
                    'from': { 'transform': 'translateY(10px)', 'opacity': '0' },
                    'to': { 'transform': 'translateY(0)', 'opacity': '1' },
                }
            });

            // 3. Inject RTL logical property utilities
            addUtilities(rtlUtilities);

            // 4. Inject all component classes
            addComponents({
                ...button,
                ...card,
                ...forms,
                ...navbar,
                ...navigation,
                ...feedback,
                ...layout,
                ...dataDisplay,
                ...modal,
                ...tooltip,
                ...dropdown,
            });

            // 5. Inject decorative utilities
            addUtilities({
                '.rui-pattern': {
                    'background-image': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill-opacity=\'.04\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'12\' fill-opacity=\'.06\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                },
                '.hero-pattern-noor': {
                    'background-image': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill-opacity=\'.04\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'12\' fill-opacity=\'.06\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }
            });
        };
    },
    function (options = {}) {
        return {
            theme: {
                extend: getThemeExtensions(),
            },
        };
    }
);

export default nooruui;
