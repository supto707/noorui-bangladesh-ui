/**
 * NoorUI — Dropdown Component
 * Smooth reveal with shadow and border
 */

export default {
    '.nui-dropdown': {
        'position': 'relative',
        'display': 'inline-flex',
    },
    '.nui-dropdown-content': {
        'position': 'absolute',
        'top': '100%',
        'left': '0',
        'z-index': '50',
        'min-width': '14rem',
        'margin-top': '0.5rem',
        'background-color': 'hsl(var(--b1))',
        'border': '1px solid hsl(var(--bc) / 0.1)',
        'padding': '0.5rem',
        'border-radius': '1rem',
        'box-shadow': '0 15px 50px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.08)',
        'opacity': '0',
        'visibility': 'hidden',
        'transform': 'translateY(-10px) scale(0.95)',
        'transition': 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'transform-origin': 'top left',
    },
    '.nui-dropdown:hover .nui-dropdown-content, .nui-dropdown-open .nui-dropdown-content': {
        'opacity': '1',
        'visibility': 'visible',
        'transform': 'translateY(0) scale(1)',
    },
    '.nui-dropdown-end .nui-dropdown-content': {
        'left': 'auto',
        'right': '0',
        'transform-origin': 'top right',
    },
    '.nui-dropdown-center .nui-dropdown-content': {
        'left': '50%',
        'transform': 'translateX(-50%) translateY(-10px) scale(0.95)',
        'transform-origin': 'top center',
    },
    '.nui-dropdown-center:hover .nui-dropdown-content': {
        'transform': 'translateX(-50%) translateY(0) scale(1)',
    }
};
