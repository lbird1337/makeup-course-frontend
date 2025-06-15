/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Переопределяем цвета, чтобы оставить только черный и белый
    colors: {
      'black': '#000000',
      'white': '#ffffff',
    },
    extend: {
      // Добавляем кастомную тень
      boxShadow: {
        'brutal': '4px 4px 0px #000000',
      },
      // Определяем семейства шрифтов (будет рассмотрено в следующем разделе)
      fontFamily: {
        heading: ['Darker Grotesque', 'sans-serif'],
        body: ['Space Mono', 'monospace'],
      },
      colors: {
        'brand-bg': '#0D0D0D',
        'brand-accent': '#FFFFFF',
        'brand-text': '#A3A3A3',
      },
    },
  },
  plugins: [],
}