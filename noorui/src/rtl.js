/**
 * NoorUI — RTL Helpers
 * Focuses on logical properties to support Arabic/Urdu prayer apps.
 */

const rtlUtilities = {
    // Logical Properties for Layout
    '.ms-noor': { 'margin-inline-start': 'var(--ms, 0)' },
    '.me-noor': { 'margin-inline-end': 'var(--me, 0)' },
    '.ps-noor': { 'padding-inline-start': 'var(--ps, 0)' },
    '.pe-noor': { 'padding-inline-end': 'var(--pe, 0)' },

    // Explicit RTL resets if needed
    '[dir="rtl"] .text-start-noor': { 'text-align': 'right' },
    '[dir="rtl"] .text-end-noor': { 'text-align': 'left' },

    // Directional flow for Islamic components
    '.rtl-flow': { 'direction': 'rtl', 'text-align': 'right' },
    '.ltr-flow': { 'direction': 'ltr', 'text-align': 'left' },
};

export default rtlUtilities;
