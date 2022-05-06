<script>
	import Saos from "saos/src/Saos.svelte";

	export let repo = {
		name: "",
		description: "",
		stargazers_count: "",
		forks_count: "",
		html_url: ""
	};
</script>

<Saos animation={"fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}>
	<div class="card w-96 bg-base-300 shadow-xl m-2">
		<div class="card-body">
			<!-- Repo name -->
			<h2 class="card-title">{repo.name}</h2>
			<!-- Repo description -->
			<p>{repo.description}</p>
			<div id="justify-start">
				<span class="font-semibold">⭐ Stars:</span>
				{repo.stargazers_count}
				<span class="font-semibold">🍴 Forks:</span>
				{repo.forks_count}
			</div>
			<div class="card-actions justify-end">
				<!-- Check out button -->
				<a href={repo.html_url} target="_blank"
					><button class="btn btn-primary">Check out!</button></a
				>
			</div>
		</div>
	</div>
</Saos>

<style>
	/* Copied from https://github.com/shiryel/saos/blob/master/demo/src/Animations.svelte */
	/* ----------------------------------------------
 * Animations below by Animista on 2020-7-11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
