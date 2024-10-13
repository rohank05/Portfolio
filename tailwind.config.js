/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",
                secondary: "#8B5CF6",
                accent1: "#EC4899",
                accent2: "#10B981",
                dark: "#1F2937",
                darker: "#111827",
            },
        },
    },
    plugins: [],
};
