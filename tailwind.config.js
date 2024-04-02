/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container:{
      center : "true",
    },
    
    extend: {
      colors :{
        "light-bg" : "#FFFFFF",
        "light-text" : "#09090B",
        "light-hover" : "#F4F4F5",
        "dark-bg" : "#09090B",
        "dark-text-primary" : "#FAFAFA",
        "dark-text-secondary" : "#A1A1AA",
        "dark-hover" : "#27272A",
      } 
    },

  },
  darkMode: "class",
  plugins: [
    function ({addUtilities}){
      const newUtilities ={
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarHeight: "50px",
          scrollbarColor: "rgb(31 29 29) red",
        },
        ".scrollbar-webkit-light" : {
          "&::-webkit-scrollbar" : {
            width : "5px",
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "rgb(31 41 55)",
            borderRadius : "20px",
            // border : "1px solid white"

          }
        },

        ".scrollbar-webkit-dark" : {
          "&::-webkit-scrollbar" : {
            width : "5px",
          },
          "&::-webkit-scrollbar-track" : {
            background: "#09090B"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "white",
            borderRadius : "20px",
            // border : "1px solid white"

          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}