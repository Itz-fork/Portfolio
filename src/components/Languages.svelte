<script>
	// Importing libs
	import { scrollRef } from "svelte-scrolling";
	import Saos from "saos";

	// Importing css
	import "../styles/tailclasses.css";

	// Language list
	let langsList = [
		{
			name: "python",
			desc: "I started programming with python",
			prgs: "82"
		},
		{
			name: "javascript",
			desc: "Learned the basics just because this shit is required to make interactive websites",
			prgs: "37"
		},
		{
			name: "dart",
			desc: "Had to learn because of the Flutter framework, now I love it ❤️!",
			prgs: "45"
		},
		{
			name: "bash",
			desc: "Started to learn bash scripting recently to make installer scripts for my programs",
			prgs: "45"
		},
		{
			name: "html",
			desc: "About 2 years ago started to make some crappy web-pages...",
			prgs: "85"
		},
		{
			name: "css",
			desc: "Wanted to make some cool looking websites but here I am, still making some ugly-ass webpages",
			prgs: "65"
		}
	];
</script>

<section class="text-center" use:scrollRef={"langs"}>
	<!-- Languages heading -->
	<h1 class="text-4xl font-bold mb-2">Languages</h1>
	<h3 class="text-1xl font-semibold mb-2">- I know -</h3>

	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
		{#each langsList as lang}
			<Saos
				animation={"fade-in 1.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
				animation_out={"slide-out-fwd-center 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"}
			>
				<div class="lang_card">
					<figure>
						<img src="/imgs/languages/{lang.name}.svg" alt="Python logo" class="lang_ico" />
					</figure>
					<div class="card-body">
						<h2 class="lang_name">{lang.name.toUpperCase()}</h2>
						<p>
							{lang.desc}
							<br />
							<progress class="progress progress-info w-56" value={lang.prgs} max="100" />
						</p>
					</div>
				</div>
			</Saos>
		{/each}
	</div>
</section>

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

	@keyframes -global-slide-out-fwd-center {
		0% {
			transform: translateZ(1);
			opacity: 1;
		}

		100% {
			transform: translateZ(600px);
			opacity: 0;
		}
	}
</style>
