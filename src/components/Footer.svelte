<script>
	import sveltefolioData from "../sveltefolio.config.js";
	import "../styles/tailclasses.css";
</script>

<footer class="footer footer-center p-10 bg-secondary text-primary-content mt-10 back">
	<div>
		<p class="font-bold text-2xl base-200">{sveltefolioData.name}</p>
		<p class="text-lg base-200">Copyright © 2022</p>
	</div>

	<!-- Social links -->
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/{sveltefolioData.github_username}" target="_blank">
				<img src="/imgs/social/github.svg" alt="Github" class="footer_social" />
			</a>
			<a href="https://t.me/Bruh_0x" target="_blank">
				<img src="imgs/social/telegram.svg" alt="Telegram" class="footer_social" />
			</a>
			<a href="https://twitter.com/im_itz_fork" target="_blank">
				<img src="imgs/social/twitter.svg" alt="Twitter" class="footer_social" />
			</a>
		</div>
	</div>
</footer>
