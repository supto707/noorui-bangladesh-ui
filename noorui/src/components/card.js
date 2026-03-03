/**
 * NoorUI — Card Component
 * Flexible container with hover effects, image support, and layout variants
 */

export default {
    '.nui-card': {
        'position': 'relative',
        'display': 'flex',
        'flex-direction': 'column',
        'border-radius': 'var(--rounded-box, 1.5rem)',
        'background-color': 'hsl(var(--b1))',
        'border': '1px solid hsl(var(--bc) / 0.08)',
        'overflow': 'hidden',
        'transition': 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'box-shadow': '0 4px 20px -5px rgba(0,0,0,0.05)',
        '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': '0 20px 40px -12px rgba(0,0,0,0.12)',
            'border-color': 'hsl(var(--p) / 0.2)',
        }
    },
    '.nui-card-body': {
        'display': 'flex',
        'flex-direction': 'column',
        'gap': '0.5rem',
        'padding': '1.75rem',
    },
    '.nui-card-title': {
        'font-size': '1.25rem',
        'font-weight': '800',
        'letter-spacing': '-0.025em',
        'margin-bottom': '0.25rem',
        'color': 'hsl(var(--bc))',
    },
    '.nui-card-actions': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-items': 'center',
        'justify-content': 'flex-end',
        'gap': '0.75rem',
        'margin-top': '1.25rem',
    },
    '.nui-card-bordered': { 'border-width': '1.5px' },
    '.nui-card-compact .nui-card-body': { 'padding': '1.25rem' },
    '.nui-card-side': { 'flex-direction': 'row' },
    '.nui-card-image-full': {
        'display': 'grid',
        '& > *': { 'grid-column-start': '1', 'grid-row-start': '1' },
        '& > figure img': { 'height': '100%', 'object-fit': 'cover' },
        '& .nui-card-body': { 'z-index': '1', 'background-color': 'hsl(var(--b1) / 0.8)', 'backdrop-filter': 'blur(16px)' }
    },
    'figure': {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'overflow': 'hidden',
        '& img': {
            'width': '100%',
            'height': 'auto',
            'object-fit': 'cover',
            'transition': 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }
    },
    '.nui-card:hover figure img': {
        'transform': 'scale(1.08)',
    }
};
