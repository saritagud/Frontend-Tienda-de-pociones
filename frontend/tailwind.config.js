/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        morado: "#BF05F2",
        moradoAzul: "#6D3BD9",
        azul: "#0F0140",
        moradoClaro: "#B3A9D9",
        crema: "#F2D8A7",
      },
      fontFamily: {
        principal: ["Shadows Into Light", "cursive"],
        Urbanist: ["Urbanist", "sans-serif"],
        signikaNegative: ["Signika Negative", "sans-serif"]
      },
      backgroundImage: {
        principal: "url('./src/assets/fondo3.jpg')",
        principal2: "url('./src/assets/fondo2.png')",
        pocion: "url('./src/assets/118ca44e80db5585737cc8028b95806e.jpg')",
        pocion2: "url('./src/assets/pocion2.jpg')",
        ingredients: "url('./src/assets/ingre.jpg')",
        fondo: "url('./src/assets/fondoForm.jpg')"
      },
      
      screens: {

        'p': '250px',
        // => @media (min-width: 250px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'ur': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}

