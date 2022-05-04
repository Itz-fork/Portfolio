module.exports = {
    content: ['./src/**/*.{svelte,js,ts}'],
    plugins: [require("daisyui")],

    daisyui: {
        styled: true,
        themes: ["lofi", "dracula"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "class",
    },
}