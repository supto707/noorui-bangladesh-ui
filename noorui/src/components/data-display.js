/**
 * NoorUI — Data Display Components
 * Table, Badge, Avatar with premium polish
 */

export default {
    // ── Table ──
    '.nui-table': {
        'width': '100%',
        'text-align': 'left',
        'border-collapse': 'separate',
        'border-spacing': '0',
        'font-size': '0.875rem',
        '& th': {
            'padding': '1rem 1.25rem',
            'font-weight': '700',
            'font-size': '0.75rem',
            'letter-spacing': '0.05em',
            'text-transform': 'uppercase',
            'color': 'hsl(var(--bc) / 0.4)',
            'border-bottom': '1px solid hsl(var(--bc) / 0.08)',
            'background-color': 'hsl(var(--b2) / 0.3)',
        },
        '& td': {
            'padding': '1rem 1.25rem',
            'border-bottom': '1px solid hsl(var(--bc) / 0.04)',
            'vertical-align': 'middle',
            'transition': 'all 0.2s ease',
        },
        '& tr:hover td': {
            'background-color': 'hsl(var(--bc) / 0.02)',
        },
        '& tr:last-child td': {
            'border-bottom': 'none',
        }
    },

    // ── Badge ──
    '.nui-badge': {
        'display': 'inline-flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding-inline': '0.875rem',
        'height': '1.75rem',
        'font-size': '0.75rem',
        'font-weight': '700',
        'letter-spacing': '-0.01em',
        'border-radius': '0.625rem',
        'background-color': 'hsl(var(--bc) / 0.08)',
        'color': 'hsl(var(--bc) / 0.7)',
        'white-space': 'nowrap',
        'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'border': '1px solid transparent',
        '&:hover': {
            'transform': 'scale(1.05)',
            'filter': 'brightness(1.1)',
        }
    },
    '.nui-badge-primary': {
        'background-color': 'hsl(var(--p) / 0.1)',
        'color': 'hsl(var(--p))',
        'border-color': 'hsl(var(--p) / 0.15)',
    },
    '.nui-badge-secondary': {
        'background-color': 'hsl(var(--s) / 0.1)',
        'color': 'hsl(var(--s))',
        'border-color': 'hsl(var(--s) / 0.15)',
    },
    '.nui-badge-accent': {
        'background-color': 'hsl(var(--a) / 0.1)',
        'color': 'hsl(var(--a))',
        'border-color': 'hsl(var(--a) / 0.15)',
    },
    '.nui-badge-success': {
        'background-color': 'hsl(var(--su) / 0.1)',
        'color': 'hsl(var(--su))',
        'border-color': 'hsl(var(--su) / 0.15)',
    },
    '.nui-badge-error': {
        'background-color': 'hsl(var(--er) / 0.1)',
        'color': 'hsl(var(--er))',
        'border-color': 'hsl(var(--er) / 0.15)',
    },
    '.nui-badge-warning': {
        'background-color': 'hsl(var(--wa) / 0.1)',
        'color': 'hsl(var(--wa))',
        'border-color': 'hsl(var(--wa) / 0.15)',
    },
    '.nui-badge-outline': {
        'background': 'transparent',
        'border': '1px solid hsl(var(--bc) / 0.2)',
        'color': 'hsl(var(--bc) / 0.6)',
    },

    // ── Avatar ──
    '.nui-avatar': {
        'position': 'relative',
        'display': 'inline-flex',
        'height': '2.75rem',
        'width': '2.75rem',
        'flex-shrink': '0',
        '& img': {
            'width': '100%',
            'height': '100%',
            'object-fit': 'cover',
            'border-radius': 'var(--rounded-btn, 0.625rem)',
        },
        '&.nui-avatar-circle img': { 'border-radius': '50%' },
        '&.nui-avatar-ring': {
            'padding': '2px',
            'border': '2px solid hsl(var(--p))',
            'border-radius': '50%',
            '& img': { 'border-radius': '50%' },
        }
    }
};
