<script>
	// Imports
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { scrollTop } from "svelte-scrolling";
	import { themeChange } from "theme-change";
	import sveltefolioData from "../sveltefolio.config";

	// Theme switcher
	// I don't know why the fuck did i wrote this logic but hey, it works
	let themeName = "";
	onMount(() => {
		themeChange(false);
		let sg = window.localStorage.getItem("theme")
		themeName = sg === "night" ? "Dark":"Light" || "Light";
	});

	function chnagethemeName() {
		themeName = themeName === "Dark" ? "Light" : "Dark";
	}
</script>

<nav class="navBar">
	<div class="navbar bg-base-100 navbar-center opacity-90">
		<div class="flex-1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="btn btn-ghost normal-case text-xl" on:click={() => scrollTop()}>{sveltefolioData.name}</a>
		</div>

		<div class="flex-none gap-2">
			<!-- Navbar menu -->
			<ul class="menu menu-horizontal p-0">
				{#if $page.url.pathname != "/"}
					<li><a href="/">Home</a></li>
				{/if}
				{#if $page.url.pathname != "/about"}
					<li><a href="/about">About</a></li>
				{/if}
				{#if $page.url.pathname != "/projects"}
					<li><a href="/projects">Projects</a></li>
				{/if}
			</ul>

			<!-- Avatar -->
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="{sveltefolioData.avatar_url}" alt="Navbar avatar"/>
					</div>
				</label>

				<!-- Avatar menu -->
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<!-- Theme -->

					<button data-toggle-theme="night" class="btn btn-xs" on:click={chnagethemeName}>
						Theme: {themeName}</button
					>

					<!-- Social links -->
					<span class="font-semibold">Social</span>
					<li>
						<a href="https://github.com/{sveltefolioData.github_username}" target="_blank">Github</a>
						<a href="https://t.me/{sveltefolioData.telegram_username}" target="_blank">Telegram</a>
						<a href="https://twitter.com/{sveltefolioData.twitter_username}" target="_blank">Twitter</a>
					</li>
					<li>
						<a href="https://github.com/Itz-fork/Sveltefolio" target="_blank">❤️ Source</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<style>
	.navBar {
		position: fixed;
		z-index: 999;
		width: 100%;
		top: 0;
		backdrop-filter: blur(10px);
	}
</style>
