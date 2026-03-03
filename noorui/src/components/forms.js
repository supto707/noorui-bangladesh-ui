/**
 * NoorUI — Forms & User Input
 * Polished inputs, selects, toggles, checkboxes, textareas, and range sliders
 */

export default {
    '.nui-form-control': {
        'display': 'flex',
        'flex-direction': 'column',
        'gap': '0.375rem',
        'width': '100%',
    },
    '.nui-label': {
        'display': 'flex',
        'user-select': 'none',
        'align-items': 'center',
        'justify-content': 'space-between',
        'padding': '0.25rem 0.125rem',
    },
    '.nui-label-text': {
        'font-size': '0.8125rem',
        'font-weight': '600',
        'color': 'hsl(var(--bc) / 0.8)',
        'letter-spacing': '-0.01em',
    },

    // ── Input ──
    '.nui-input': {
        'appearance': 'none',
        'height': '3rem',
        'width': '100%',
        'padding-inline': '1rem',
        'border-radius': 'var(--rounded-btn, 0.75rem)',
        'background-color': 'hsl(var(--b1))',
        'border': '1.5px solid hsl(var(--bc) / 0.1)',
        'font-size': '0.875rem',
        'color': 'hsl(var(--bc))',
        'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        '&::placeholder': { 'color': 'hsl(var(--bc) / 0.3)' },
        '&:focus': {
            'outline': 'none',
            'border-color': 'hsl(var(--p))',
            'box-shadow': '0 0 0 4px hsl(var(--p) / 0.1)',
            'background-color': 'hsl(var(--b1))',
        },
        '&:disabled': {
            'background-color': 'hsl(var(--b2))',
            'cursor': 'not-allowed',
            'opacity': '0.6',
        },
    },

    // ── Select ──
    '.nui-select': {
        'appearance': 'none',
        'height': '3rem',
        'width': '100%',
        'padding-inline': '1rem',
        'padding-right': '2.5rem',
        'border-radius': 'var(--rounded-btn, 0.75rem)',
        'background-color': 'hsl(var(--b1))',
        'border': '1.5px solid hsl(var(--bc) / 0.1)',
        'font-size': '0.875rem',
        'color': 'hsl(var(--bc))',
        'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
        'background-repeat': 'no-repeat',
        'background-position': 'right 1rem center',
        'background-size': '1.25rem',
        'cursor': 'pointer',
        'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:focus': {
            'outline': 'none',
            'border-color': 'hsl(var(--p))',
            'box-shadow': '0 0 0 4px hsl(var(--p) / 0.1)',
        },
    },

    // ── Checkbox & Radio ──
    '.nui-checkbox, .nui-radio': {
        'appearance': 'none',
        'width': '1.25rem',
        'height': '1.25rem',
        'border-radius': '0.5rem',
        'border': '2px solid hsl(var(--bc) / 0.15)',
        'cursor': 'pointer',
        'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'display': 'grid',
        'place-content': 'center',
        'flex-shrink': '0',
        'background-color': 'transparent',
        '&:checked': {
            'background-color': 'hsl(var(--p))',
            'border-color': 'hsl(var(--p))',
            'box-shadow': '0 4px 12px hsl(var(--p) / 0.25)',
        },
        '&::before': {
            'content': '""',
            'width': '0.65rem',
            'height': '0.65rem',
            'transform': 'scale(0)',
            'transition': '200ms transform cubic-bezier(0.34, 1.56, 0.64, 1)',
            'box-shadow': 'inset 1em 1em white',
            'clip-path': 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
        },
        '&:checked::before': { 'transform': 'scale(1)' },
        '&:focus-visible': { 'outline': '2px solid hsl(var(--p))', 'outline-offset': '2px' },
    },
    '.nui-radio': {
        'border-radius': '50%',
        '&::before': {
            'width': '0.5rem',
            'height': '0.5rem',
            'border-radius': '50%',
            'clip-path': 'none',
        }
    },

    // ── Toggle (Switch) ──
    '.nui-toggle': {
        'appearance': 'none',
        'width': '3rem',
        'height': '1.625rem',
        'border-radius': '2rem',
        'background-color': 'hsl(var(--bc) / 0.12)',
        'position': 'relative',
        'cursor': 'pointer',
        'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'flex-shrink': '0',
        'border': '1.5px solid transparent',
        '&::after': {
            'content': '""',
            'position': 'absolute',
            'top': '2px',
            'left': '2px',
            'width': 'calc(1.625rem - 7px)',
            'height': 'calc(1.625rem - 7px)',
            'border-radius': '50%',
            'background-color': 'white',
            'transition': 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            'box-shadow': '0 2px 5px rgba(0,0,0,0.2)',
        },
        '&:checked': {
            'background-color': 'hsl(var(--p))',
        },
        '&:checked::after': { 'transform': 'translateX(1.375rem)' },
        '&:focus-visible': { 'outline': '2px solid hsl(var(--p))', 'outline-offset': '2px' },
    },

    // ── Textarea ──
    '.nui-textarea': {
        'appearance': 'none',
        'min-height': '6rem',
        'width': '100%',
        'padding': '1rem',
        'border-radius': 'var(--rounded-btn, 0.75rem)',
        'background-color': 'hsl(var(--b1))',
        'border': '1.5px solid hsl(var(--bc) / 0.1)',
        'font-size': '0.875rem',
        'color': 'hsl(var(--bc))',
        'resize': 'vertical',
        'line-height': '1.6',
        'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        '&::placeholder': { 'color': 'hsl(var(--bc) / 0.3)' },
        '&:focus': {
            'outline': 'none',
            'border-color': 'hsl(var(--p))',
            'box-shadow': '0 0 0 4px hsl(var(--p) / 0.1)',
        },
    },

    // ── Range ──
    '.nui-range': {
        'appearance': 'none',
        'width': '100%',
        'height': '2rem',
        'background': 'transparent',
        'cursor': 'grab',
        '&:active': { 'cursor': 'grabbing' },
        '&::-webkit-slider-runnable-track': {
            'width': '100%',
            'height': '0.5rem',
            'background': 'hsl(var(--bc) / 0.08)',
            'border-radius': '1rem',
        },
        '&::-webkit-slider-thumb': {
            'appearance': 'none',
            'height': '1.5rem',
            'width': '1.5rem',
            'border-radius': '50%',
            'background': 'hsl(var(--p))',
            'border': '3px solid white',
            'margin-top': '-0.5rem',
            'box-shadow': '0 4px 10px hsl(var(--p) / 0.3)',
            'transition': 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
        '&:hover::-webkit-slider-thumb': {
            'transform': 'scale(1.15)',
            'box-shadow': '0 6px 15px hsl(var(--p) / 0.4)',
        }
    }
};
