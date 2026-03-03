/**
 * NoorUI — Navigation Components
 * Drawer, Tabs, Breadcrumbs, Pagination with premium transitions
 */

export default {
    // ── Drawer ──
    '.nui-drawer': {
        'position': 'fixed',
        'inset': '0',
        'z-index': '100',
        'pointer-events': 'none',
        'visibility': 'hidden',
        '&.nui-drawer-open': {
            'pointer-events': 'auto',
            'visibility': 'visible',
            '& .nui-drawer-side': { 'transform': 'translateX(0)' },
            '& .nui-drawer-overlay': { 'opacity': '1', 'backdrop-filter': 'blur(8px)' }
        }
    },
    '.nui-drawer-overlay': {
        'position': 'absolute',
        'inset': '0',
        'background-color': 'hsl(0 0% 0% / 0.5)',
        'backdrop-filter': 'blur(0px)',
        'opacity': '0',
        'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.nui-drawer-side': {
        'position': 'absolute',
        'left': '0',
        'top': '0',
        'bottom': '0',
        'width': '18rem',
        'background-color': 'hsl(var(--b1))',
        'transform': 'translateX(-100%)',
        'transition': 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'padding': '2rem',
        'box-shadow': '20px 0 60px -10px rgba(0,0,0,0.2)',
        'border-right': '1px solid hsl(var(--bc) / 0.08)',
    },

    // ── Tabs ──
    '.nui-tabs': {
        'display': 'inline-flex',
        'align-items': 'center',
        'gap': '0.25rem',
        'background-color': 'hsl(var(--bc) / 0.04)',
        'padding': '0.375rem',
        'border-radius': '1rem',
        'border': '1px solid hsl(var(--bc) / 0.06)',
    },
    '.nui-tab': {
        'padding': '0.625rem 1.25rem',
        'font-weight': '600',
        'font-size': '0.875rem',
        'cursor': 'pointer',
        'border-radius': '0.75rem',
        'transition': 'color 0.15s ease, background-color 0.15s ease, transform 0.1s ease',
        'color': 'hsl(var(--bc) / 0.5)',
        'position': 'relative',
        '&:hover': { 'color': 'hsl(var(--bc) / 0.8)' },
    },
    '.nui-tab-active': {
        'color': 'hsl(var(--pc))',
        'background-color': 'hsl(var(--p))',
        'box-shadow': '0 4px 12px hsl(var(--p) / 0.25)',
    },

    // ── Breadcrumbs ──
    '.nui-breadcrumbs': {
        'display': 'flex',
        'align-items': 'center',
        'gap': '0.5rem',
        'font-size': '0.8125rem',
        'color': 'hsl(var(--bc) / 0.5)',
        '& a': { 'color': 'inherit', 'text-decoration': 'none', '&:hover': { 'color': 'hsl(var(--p))' } },
        '& span:not(:last-child)::after': {
            'content': '"/"',
            'margin-left': '0.5rem',
            'opacity': '0.3',
        },
        '& span:last-child': { 'color': 'hsl(var(--bc))', 'font-weight': '600' }
    },

    // ── Pagination ──
    '.nui-pagination': {
        'display': 'flex',
        'align-items': 'center',
        'gap': '0.25rem',
    },
    '.nui-pagination-item': {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'width': '2.25rem',
        'height': '2.25rem',
        'border-radius': '0.5rem',
        'background-color': 'hsl(var(--b2))',
        'cursor': 'pointer',
        'font-weight': '600',
        'font-size': '0.8125rem',
        'transition': 'all 0.2s ease',
        '&:hover': { 'background-color': 'hsl(var(--b3))', 'transform': 'translateY(-1px)' },
        '&.nui-active': {
            'background-color': 'hsl(var(--p))',
            'color': 'white',
            'box-shadow': '0 2px 8px hsl(var(--p) / 0.3)',
        }
    }
};
