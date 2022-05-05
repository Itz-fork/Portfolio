<script>
	import "../styles/animation.css"
</script>

<main>
	<div class="hero min-h-screen hero_bg">
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<!-- Heading -->
				<h1 class="mb-5 text-5xl font-bold animate-pulse fade-in">Welcome!</h1>
				<!-- Damn paragraph -->
				<p class="mb-5 text-lg fade-in" id="second">
					Hello (random) visitor, Welcome to Itz-fork's Portfolio! Here you can find most of the things
					about me. Just keep in mind that this is still a prototype and yet to be finished
				</p>
				<a href="/about">
					<button class="btn btn-outline text-zinc-100">Learn more!</button>
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	.hero_bg {
		background-image: url(/imgs/background.jpg);
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
