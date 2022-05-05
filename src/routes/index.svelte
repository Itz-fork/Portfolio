<script>
	// Svelte scrolling config
	import { setGlobalOptions } from 'svelte-scrolling';

	// @ts-ignore
	setGlobalOptions({
		duration: 800
	});

	// Importing components
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main>
	<Navbar />
	<Hero />
	<Footer />
</main>
