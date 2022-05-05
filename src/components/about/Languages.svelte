<script>
	import { scrollRef } from 'svelte-scrolling';
	import '../../styles/tailclasses.css';
</script>

<main>
	<section class="text-center" use:scrollRef={'langs'}>
		<!-- Languages heading -->
		<h1 class="text-4xl font-bold mb-2">Languages</h1>
		<h3 class="text-1xl font-semibold mb-2">- I know -</h3>

		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
			<!-- Python -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/python.svg" alt="Python logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">Python</h2>
					<p>
						I started programming with python
						<br />
						<progress class="progress progress-info w-56" value="82" max="100" />
					</p>
				</div>
			</div>

			<!-- JS -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/js.svg" alt="JS logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">Javascript</h2>
					<p>
						Learned the basics just because this shit is required to make interactive websites
						<br />
						<progress class="progress progress-info w-56" value="37" max="100" />
					</p>
				</div>
			</div>

			<!-- HTML -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/html.svg" alt="Html logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">HTML</h2>
					<p>
						About 2 years ago started to make some crappy web-pages...
						<br />
						<progress class="progress progress-info w-56" value="80" max="100" />
					</p>
				</div>
			</div>

			<!-- CSS -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/css.svg" alt="Css logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">CSS</h2>
					<p>
						Wanted to make some cool looking websites but here I am, still making some ugly-ass
						webpages
						<br />
						<progress class="progress progress-info w-56" value="65" max="100" />
					</p>
				</div>
			</div>

			<!-- BASH -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/bash.svg" alt="Bash logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">Bash</h2>
					<p>
						Started to learn bash scripting recently to make installer scripts for my programs
						<br />
						<progress class="progress progress-info w-56" value="30" max="100" />
					</p>
				</div>
			</div>

			<!-- DART -->
			<div class="lang_card">
				<figure>
					<img src="/imgs/languages/dart.svg" alt="Dart logo" class="lang_ico" />
				</figure>
				<div class="card-body">
					<h2 class="lang_name">Dart</h2>
					<p>
						Had to learn because of the Flutter framework, now I love it ❤️!
						<br />
						<progress class="progress progress-info w-56" value="45" max="100" />
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
