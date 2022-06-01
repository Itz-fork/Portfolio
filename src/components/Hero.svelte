<script>
	import "../styles/animation.css";
	import sveltefolioData from "../sveltefolio.config";
</script>

<div
	class="hero min-h-screen hero_bg"
	style="background-image: url({sveltefolioData.hero_background_url});"
>
	<div class="hero-overlay bg-opacity-80" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<!-- Heading -->
			<h1 class="mb-5 text-5xl font-bold fade-in">{sveltefolioData.hero_head_msg}</h1>
			<!-- Welcome paragraph -->
			<p class="mb-5 text-lg fade-in" id="second">{sveltefolioData.hero_welcome_msg}</p>
			<a href="/about">
				<button class="btn btn-outline text-zinc-100">Learn more!</button>
			</a>
		</div>
	</div>
</div>

<style>
	.hero_bg {
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
