<script>
    // Theme switcher
    import { onMount } from "svelte";
    import { themeChange } from "theme-change";

    onMount(() => {
        themeChange(false);
    });

    let themeName = localStorage.getItem("theme") || "Lofi";
    function chnagethemeName() {
        themeName = themeName == "Lofi" ? "Dracula" : "Lofi";
    }

    // Scroll
    import { scrollTo, scrollTop } from "svelte-scrolling";
    
</script>

<main>
    <nav class="navBar">
        <div class="navbar bg-base-100 navbar-center opacity-90">
            <div class="flex-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    class="btn btn-ghost normal-case text-xl"
                    on:click={() => scrollTop()}>Itz-fork</a
                >
            </div>

            <div class="flex-none gap-2">
                <!-- Navbar menu -->
                <ul class="menu menu-horizontal p-0">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a use:scrollTo={"about"}>About</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a use:scrollTo={"langs"}>Languages</a></li>
                </ul>

                <!-- Avatar -->
                <div class="dropdown dropdown-end">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <img
                                src="https://avatars.githubusercontent.com/u/77770753?v=4"
                            />
                        </div>
                    </label>

                    <!-- Avatar menu -->
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <!-- Theme -->

                        <button
                            data-toggle-theme="dracula"
                            class="btn btn-xs"
                            on:click={chnagethemeName}
                        >
                            Theme: {themeName}</button
                        >

                        <!-- Social links -->
                        <span class="font-semibold">Social</span>
                        <li>
                            <a
                                href="https://github.com/Itz-fork"
                                target="_blank">Github</a
                            >
                            <a href="https://t.me/Bruh_0x" target="_blank"
                                >Telegram</a
                            >
                            <a
                                href="https://twitter.com/im_itz_fork"
                                target="_blank">Twitter</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</main>

<style>
    .navBar {
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 0;
        backdrop-filter: blur(10px);
    }
</style>
