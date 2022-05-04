<script>
    import { scrollTo } from "svelte-scrolling";
</script>

<main>
    <div
        class="hero min-h-screen"
        style="background-image: url(imgs/background.jpg);"
    >
        <div class="hero-overlay bg-opacity-80" />
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <!-- Heading -->
                <h1 class="mb-5 text-5xl font-bold">Welcome!</h1>
                <!-- Damn paragraph -->
                <p class="mb-5 text-lg">
                    Hello (random) visitor, Welcome to my Portfolio!
                    Here you can find most of the things about me.
                    Just keep in mind that this is still a prototype and yet to be finished
                </p>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a use:scrollTo={"about"}>
                    <button class="btn btn-outline text-zinc-100">Explore!</button>
                </a>
            </div>
        </div>
    </div>
</main>
