/**
 * NoorUI — Feedback Components
 * Alerts, toasts, and progress bars with premium styling
 */

export default {
    // ── Alert ──
    '.nui-alert': {
        'display': 'flex',
        'align-items': 'flex-start',
        'gap': '0.75rem',
        'padding': '1rem 1.25rem',
        'border-radius': '0.75rem',
        'background-color': 'hsl(var(--b2))',
        'border': '1px solid hsl(var(--bc) / 0.08)',
        'font-size': '0.875rem',
        'line-height': '1.5',
    },
    '.nui-alert-success': {
        'background-color': 'hsl(var(--su) / 0.08)',
        'color': 'hsl(var(--su))',
        'border-color': 'hsl(var(--su) / 0.15)',
    },
    '.nui-alert-error': {
        'background-color': 'hsl(var(--er) / 0.08)',
        'color': 'hsl(var(--er))',
        'border-color': 'hsl(var(--er) / 0.15)',
    },
    '.nui-alert-warning': {
        'background-color': 'hsl(var(--wa) / 0.08)',
        'color': 'hsl(var(--wa))',
        'border-color': 'hsl(var(--wa) / 0.15)',
    },
    '.nui-alert-info': {
        'background-color': 'hsl(var(--in) / 0.08)',
        'color': 'hsl(var(--in))',
        'border-color': 'hsl(var(--in) / 0.15)',
    },

    '.nui-toast': {
        'position': 'fixed',
        'bottom': '1.5rem',
        'right': '1.5rem',
        'z-index': '1000',
        'display': 'flex',
        'flex-direction': 'column',
        'gap': '0.5rem',
    },

    // ── Progress Bar ──
    '.nui-progress': {
        'width': '100%',
        'height': '0.375rem',
        'border-radius': '1rem',
        'background-color': 'hsl(var(--bc) / 0.08)',
        'overflow': 'hidden',
    },
    '.nui-progress-bar': {
        'height': '100%',
        'background': 'linear-gradient(90deg, hsl(var(--p)), hsl(var(--p) / 0.8))',
        'border-radius': '1rem',
        'transition': 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // ── Accordion ──
    '.nui-accordion': {
        'display': 'flex',
        'flex-direction': 'column',
        'gap': '0.5rem',
        'width': '100%',
    },
    '.nui-collapse': {
        'border-radius': '1.25rem',
        'overflow': 'hidden',
        'border': '1px solid hsl(var(--bc) / 0.08)',
        'background-color': 'hsl(var(--b1))',
        'transition': 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '& summary': { 'list-style': 'none', '&::-webkit-details-marker': { 'display': 'none' } },
    },
    '.nui-collapse-title': {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        'padding': '1.25rem 1.5rem',
        'font-weight': '700',
        'cursor': 'pointer',
        'transition': 'all 0.2s ease',
        '&:hover': { 'background-color': 'hsl(var(--bc) / 0.03)' },
    },
    '.nui-collapse-content': {
        'padding': '0 1.5rem 1.75rem',
        'font-size': '0.875rem',
        'line-height': '1.6',
        'color': 'hsl(var(--bc) / 0.6)',
        'opacity': '0',
        'transform': 'translateY(-8px)',
        'transition': 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pointer-events': 'none',
    },
    '.nui-collapse[open]': {
        'border-color': 'hsl(var(--p) / 0.2)',
        'box-shadow': '0 20px 40px -12px rgba(0,0,0,0.08)',
        '& .nui-collapse-content': {
            'opacity': '1',
            'transform': 'translateY(0)',
            'pointer-events': 'auto',
        }
    }
};
