/**
 * NoorUI — Navbar Component
 * Main navigation hub.
 */

export default {
    '.nui-navbar': {
        'display': 'flex',
        'align-items': 'center',
        'padding': '0.5rem 1rem',
        'min-height': '4rem',
        'width': '100%',
        'background-color': 'hsl(var(--b1))',
        'gap': '0.5rem',
        'border-bottom': '1px solid hsl(var(--bc) / 0.1)',
    },
    '.nui-navbar-start': { 'display': 'flex', 'flex': '1', 'justify-content': 'flex-start' },
    '.nui-navbar-center': { 'display': 'flex', 'justify-content': 'center' },
    '.nui-navbar-end': { 'display': 'flex', 'flex': '1', 'justify-content': 'flex-end' },
};
