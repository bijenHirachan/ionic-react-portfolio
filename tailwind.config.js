import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                abeeze: ["ABeeZee", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                mydarkest: "#171717",
                mydarker: "#333333",
                mydark: "#232323",
                mylightdark: "#2b2a2a",
                mylight: "#e8e8e8",
                myblue: "#214eef",
                mypink: "#fc5252",
                mygreen: "#506355",
            },
        },
    },

    plugins: [forms],
};
