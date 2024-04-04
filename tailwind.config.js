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
        "li-bg" : "#09090B",
        "li-bg-tertiary" : "#f3f4f6",
        "li-txt" : "#09090B",
        "li-txt-secondary" : "#575759",
        "li-hvr" : "#F4F4F5",
        "li-bg-secondary" : "#111827",
        "dark-bg" : "#09090B",
        "dr-bg-secondary" : "#111827",
        "dr-txt" : "#FAFAFA",
        "dr-txt-secondary" : "#A1A1AA",
        "dr-hvr" : "#27272A",
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