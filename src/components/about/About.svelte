<script>
	import { scrollRef } from 'svelte-scrolling';
	import "../../styles/animation.css"
</script>

<main>
	<section use:scrollRef={'about'}>
		<div class="card my-20 bg-base-100 text-center" data-aos="fade-up">
			<!-- About heading -->
			<h1 class="text-4xl font-bold mb-2 fade-in">About</h1>
			<!-- About pic -->
			<figure>
				<img
					src="https://avatars.githubusercontent.com/u/77770753?v=4"
					alt="Avatar"
					class="rounded-lg max-w-sm mx-auto"
				/>
			</figure>
			<!-- About paragraph -->
			<div class="my-2 m-10 lg:text-lg fade-in" id="second">
				<p>
					<span class="font-semibold text-lg text-info">Itz-fork</span> is a 15yo kid who loves programming.
					He is a back-end developer although recently started front-end development as well. He was
					focused only on telegram bot development until a few months ago. At present, he is developing
					APIs with FastAPI, websites with CSS, and frameworks like Vue, svelte. His favorite and widely-used
					programming language is Python. Also, he is currently learning dart, javascript, and bash.
				</p>
				<p class="mt-5">
					While being a beginner programmer, He is also a student at "[secret name]" college. When
					he isn't sticking his eyes on a computer screen he listens to the music of artists such as
					NF, TheFatRat, and The Score so he could start studying with a relaxed mind.
				</p>
			</div>
		</div>
	</section>
</main>
