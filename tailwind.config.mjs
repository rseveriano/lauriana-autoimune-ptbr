/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#5D7556', // Sage Green
                secondary: '#F2EBE3', // Light Beige
                accent: '#D97757', // Terracotta
                dark: '#2C3E2E', // Dark Green/Brown
                brand: {
                    light: '#F8FAF9', // Sage/Off-white suave
                    green: '#3B755F', // Verde terapeuta/calmante
                    dark: '#1F2937',  // Texto escuro
                    gold: '#C5A065',  // Dourado mais suave/sofisticado
                    accent: '#E07A5F', // Terracota acolhedor
                    sage: '#A7F3D0'   // Verde sálvia muito claro
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                '4xl': '2rem',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            }
        },
    },
    plugins: [],
}
