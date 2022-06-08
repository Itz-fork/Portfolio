<script context="module">
	// @ts-ignore
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.github.com/search/repositories?q=org:${sveltefolioData.github_username}&sort=stars&order=desc&per_page=${sveltefolioData.max_github_projects}`
		);

		if (res.ok) {
			return {
				props: {
					githubData: (await res.json())["items"]
				}
			};
		}
	}
</script>

<script>
	// Imports
	import Project from "../components/Project.svelte";
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import sveltefolioData from "../sveltefolio.config.js";

	export /**
	 * @type {never[]}
	 */
	let githubData = [];
</script>

<main>
	<Navbar />

	<div class="text-center">
		<h1 class="mb-5 text-5xl font-bold fade-in my-20">My Projects</h1>
		<p>These are my most popular github repos</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center my-10">
		{#each githubData as repo}
			<Project {repo} />
		{/each}
	</div>

	<p class="text-center">
		<a
			href="https://github.com/{sveltefolioData.github_username}?tab=repositories&q=&type=&language=&sort=stargazers"
			target="_blank"
		>
			<button class="btn btn-wide">Other repos -></button>
		</a>
	</p>

	<Footer />
</main>
