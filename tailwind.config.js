/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        'bg-grid': '#10141d',
        surface: '#141923',
        'surface-2': '#1a212e',
        line: '#242c3a',
        'line-bright': '#33405a',
        ink: '#E7EAF0',
        'ink-mid': '#AEB7C8',
        'ink-dim': '#727C90',
        amber: '#FFB23E',
        'amber-deep': '#E8941C',
        online: '#5BD18A',
        cyan: '#5BC8D6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1080px',
      },
    },
  },
  plugins: [],
}
