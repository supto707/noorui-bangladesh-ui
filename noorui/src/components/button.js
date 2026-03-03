/**
 * NoorUI — Button Component
 * Premium button with variants, sizes, shapes, and states
 */

export default {
    '.nui-btn': {
        'display': 'inline-flex',
        'align-items': 'center',
        'justify-content': 'center',
        'gap': '0.5rem',
        'padding-inline': '1.5rem',
        'block-size': '2.75rem',
        'border-radius': 'var(--rounded-btn, 0.75rem)',
        'font-weight': '600',
        'font-size': '0.875rem',
        'letter-spacing': '-0.01em',
        'text-align': 'center',
        'cursor': 'pointer',
        'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'border': '1px solid transparent',
        'background-color': 'hsl(var(--b3))',
        'color': '#ffffff',
        'user-select': 'none',
        'white-space': 'nowrap',
        'text-decoration': 'none',
        '&:hover': {
            'background-color': 'hsl(var(--b3) / 0.85)',
            'box-shadow': '0 4px 12px rgba(0,0,0,0.08)',
            'transform': 'translateY(-1px)',
        },
        '&:active': {
            'transform': 'translateY(0) scale(0.97)',
            'box-shadow': 'none',
        },
        '&:focus-visible': {
            'outline': '2px solid hsl(var(--p))',
            'outline-offset': '2px',
        },
        '&:disabled, &.nui-btn-disabled': {
            'opacity': '0.4',
            'pointer-events': 'none',
            'filter': 'grayscale(0.5)',
        }
    },

    // Variants
    '.nui-btn-primary': {
        'background-color': 'hsl(var(--p))',
        'color': '#ffffff',
        'box-shadow': '0 2px 8px hsl(var(--p) / 0.25)',
        '&:hover': {
            'background-color': 'hsl(var(--p) / 0.9)',
            'box-shadow': '0 6px 20px hsl(var(--p) / 0.35)',
        },
    },
    '.nui-btn-secondary': {
        'background-color': 'hsl(var(--s))',
        'color': '#ffffff',
        'box-shadow': '0 2px 8px hsl(var(--s) / 0.2)',
        '&:hover': { 'background-color': 'hsl(var(--s) / 0.9)', 'box-shadow': '0 6px 20px hsl(var(--s) / 0.3)' },
    },
    '.nui-btn-accent': {
        'background-color': 'hsl(var(--a))',
        'color': 'hsl(var(--ac))',
        '&:hover': { 'background-color': 'hsl(var(--a) / 0.9)' },
    },
    '.nui-btn-ghost': {
        'background-color': 'transparent',
        'border-color': 'transparent',
        'color': 'hsl(var(--bc))',
        'box-shadow': 'none',
        '&:hover:not(:disabled)': {
            'background-color': 'hsl(var(--bc) / 0.08)',
            'box-shadow': 'none',
        },
    },
    '.nui-btn-link': {
        'background-color': 'transparent',
        'color': 'hsl(var(--p))',
        'text-decoration': 'underline',
        'text-underline-offset': '3px',
        'padding': '0',
        'block-size': 'auto',
        'box-shadow': 'none',
        '&:hover': { 'background-color': 'transparent', 'opacity': '0.75', 'box-shadow': 'none', 'transform': 'none' },
    },
    '.nui-btn-outline': {
        'background-color': 'transparent',
        'border-color': 'currentColor',
        'color': 'hsl(var(--bc))',
        'box-shadow': 'none',
        '&:hover:not(:disabled)': {
            'background-color': 'hsl(var(--bc) / 0.04)',
        }
    },

    // Sizes
    '.nui-btn-xs': { 'padding': '0.25rem 0.5rem', 'font-size': '0.75rem', 'min-height': '1.5rem' },
    '.nui-btn-sm': { 'padding': '0.375rem 0.75rem', 'font-size': '0.8125rem', 'min-height': '2rem' },
    '.nui-btn-lg': { 'padding': '0.875rem 1.75rem', 'font-size': '1rem', 'min-height': '3.5rem' },

    // Shape
    '.nui-btn-circle': { 'width': '3rem', 'height': '3rem', 'border-radius': '50%', 'padding': '0' },
    '.nui-btn-square': { 'width': '3rem', 'height': '3rem', 'padding': '0' },

    // Loading
    '.nui-btn-loading': {
        'position': 'relative',
        'color': 'transparent !important',
        'pointer-events': 'none',
        '&::after': {
            'content': '""',
            'position': 'absolute',
            'width': '1.25rem',
            'height': '1.25rem',
            'border': '2.5px solid currentColor',
            'border-right-color': 'transparent',
            'border-radius': '50%',
            'animation': 'nui-spin 0.6s linear infinite',
            'color': 'white', // Default for primary
        },
        '&.nui-btn-ghost::after, &.nui-btn-outline::after': {
            'color': 'hsl(var(--bc))',
        }
    }
};
