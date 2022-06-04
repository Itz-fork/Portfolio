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
		let sg = window.localStorage.getItem("theme");
		themeName = sg === "night" ? "Dark" : "Light" || "Light";
	});

	function chnagethemeName() {
		themeName = themeName === "Dark" ? "Light" : "Dark";
	}
</script>

<div class="navbar bg-base-100 navBar">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3 5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3 12H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="https://github.com/Itz-fork/Sveltefolio">Open Source ❤️</a></li>
			</ul>
		</div>
		<div class="flex-1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="btn btn-ghost normal-case text-xl" on:click={() => scrollTop()}
				>{sveltefolioData.name}</a
			>
		</div>
	</div>

	<!-- For large screens -->
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="https://github.com/Itz-fork/Sveltefolio">Open Source ❤️</a></li>
		</ul>
	</div>

	<!-- Avatar -->
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src={sveltefolioData.avatar_url} alt="Navbar avatar" />
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
					<a href="https://twitter.com/{sveltefolioData.twitter_username}" target="_blank"
						>Twitter</a
					>
				</li>
				<li>
					<a href="https://github.com/Itz-fork/Sveltefolio" target="_blank">❤️ Source</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.navBar {
		position: fixed;
		z-index: 999;
		width: 100%;
		top: 0;
		backdrop-filter: blur(10px);
	}
</style>
