/**
 * NoorUI — Layout Components
 */

export default {
    // ── Hero ──
    '.nui-hero': {
        'position': 'relative',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding-block': '5rem',
        'background-color': 'hsl(var(--b1))',
        'overflow': 'hidden',
    },
    '.nui-hero-content': {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'text-align': 'center',
        'max-width': '42rem',
        'z-index': '1',
    },

    // ── Divider ──
    '.nui-divider': {
        'display': 'flex',
        'align-items': 'center',
        'align-self': 'stretch',
        'height': '1rem',
        'margin-block': '1rem',
        '&::before, &::after': {
            'content': '""',
            'flex-grow': '1',
            'height': '1px',
            'background-color': 'hsl(var(--bc) / 0.1)',
        }
    },

    // ── Kbd ──
    '.nui-kbd': {
        'display': 'inline-flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding-inline': '0.5rem',
        'block-size': '1.5rem',
        'font-family': 'monospace',
        'background-color': 'hsl(var(--b2))',
        'border': '1px solid hsl(var(--bc) / 0.2)',
        'border-bottom-width': '3px',
        'border-radius': '0.375rem',
        'font-size': '0.75rem',
        'font-weight': '700',
    }
};
