/**
 * NoorUI — Tooltip Component
 * Clean, accessible tooltip with smooth reveal
 */

export default {
    '.nui-tooltip': {
        'position': 'relative',
        'display': 'inline-block',
        '&::before': {
            'content': 'attr(data-tip)',
            'position': 'absolute',
            'bottom': '100%',
            'left': '50%',
            'transform': 'translateX(-50%) translateY(-8px)',
            'padding': '0.375rem 0.75rem',
            'background-color': 'hsl(var(--bc))',
            'color': 'hsl(var(--b1))',
            'font-size': '0.6875rem',
            'font-weight': '600',
            'letter-spacing': '0.01em',
            'border-radius': '0.375rem',
            'white-space': 'nowrap',
            'z-index': '20',
            'opacity': '0',
            'visibility': 'hidden',
            'transition': 'all 0.15s ease',
            'pointer-events': 'none',
            'box-shadow': '0 4px 12px rgba(0,0,0,0.15)',
        },
        '&:hover::before': {
            'opacity': '1',
            'visibility': 'visible',
            'transform': 'translateX(-50%) translateY(-4px)',
        }
    }
};
