/**
 * NoorUI — Modal Component
 * Premium dialog with spring animation and backdrop blur
 */

export default {
    '.nui-modal': {
        'position': 'fixed',
        'inset': '0',
        'z-index': '1000',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding': '1.5rem',
        'visibility': 'hidden',
        'opacity': '0',
        'transition': 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pointer-events': 'none',
        '&.nui-modal-open': {
            'visibility': 'visible',
            'opacity': '1',
            'pointer-events': 'auto',
            '& .nui-modal-box': { 'transform': 'scale(1) translateY(0)' }
        }
    },
    '.nui-modal-backdrop': {
        'position': 'absolute',
        'inset': '0',
        'background-color': 'hsl(0 0% 0% / 0.55)',
        'backdrop-filter': 'blur(12px)',
        'transition': 'opacity 0.4s ease',
    },
    '.nui-modal-box': {
        'position': 'relative',
        'width': '100%',
        'max-width': '30rem',
        'background-color': 'hsl(var(--b1))',
        'padding': '2.25rem',
        'border-radius': '2rem',
        'border': '1px solid hsl(var(--bc) / 0.1)',
        'transform': 'scale(0.9) translateY(20px)',
        'transition': 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'box-shadow': '0 25px 80px -15px rgba(0,0,0,0.3)',
    },
    '.nui-modal-action': {
        'display': 'flex',
        'justify-content': 'flex-end',
        'gap': '0.75rem',
        'margin-top': '2rem',
    }
};
