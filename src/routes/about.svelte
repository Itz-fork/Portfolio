<script>
	import Saos from "saos";
	import { scrollRef } from "svelte-scrolling";
	import "../styles/animation.css";
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import sveltefolioData from "../sveltefolio.config";
</script>

<!-- HTML Content Start -->
<Navbar />

<!-- About section -->
<section use:scrollRef={"about"}>
	<div class="card my-20 bg-base-100 text-center" data-aos="fade-up">
		<!-- About heading -->
		<h1 class="text-5xl font-bold mb-2 fade-in animate-pulse">About</h1>
		<!-- About pic -->
		<figure>
			<img
				src={sveltefolioData.avatar_url}
				alt="Avatar"
				class="rounded-lg max-w-sm mx-auto"
				style="pointer-events: none;"
			/>
		</figure>
		<!-- About paragraph -->
		<div class="my-2 m-10 lg:text-lg fade-in" id="second">
			<p>
				<span class="font-semibold text-lg text-info">{sveltefolioData.name}</span> is a 15yo kid who
				loves programming. He is a back-end developer although recently started front-end development
				as well. He was focused only on telegram bot development until a few months ago. At present,
				he is developing APIs with FastAPI, websites with CSS, and frameworks like Vue, svelte. His favorite
				and widely-used programming language is Python. Also, he is currently learning dart, javascript,
				and bash.
			</p>
			<p class="mt-5">
				While being a beginner programmer, He is also a student at "X" college. When he isn't
				sticking his eyes on a computer screen he listens to the music of artists such as NF,
				TheFatRat, and The Score so he could start studying with a relaxed mind.
			</p>
		</div>
	</div>
</section>

<!-- Programming languages section -->
<section class="text-center" use:scrollRef={"langs"}>
	<!-- Languages heading -->
	<h1 class="text-4xl font-bold mb-2">Languages</h1>
	<h3 class="text-1xl font-semibold mb-2">- I know -</h3>

	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
		{#each sveltefolioData.language_list as lang}
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

<Footer />

<!-- Styles -->
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
