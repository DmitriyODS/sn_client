import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    background: "#0A1C5A",
                    foreground: "#ffffff",
                    primary: {
                        foreground: "#FFFFFF",
                        DEFAULT: "#1726A6",
                    },
                },
            }
        }
    })],
}
