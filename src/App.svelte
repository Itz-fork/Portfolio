<script>
  // Svelte scrolling config
  import { setGlobalOptions } from "svelte-scrolling";

  // @ts-ignore
  setGlobalOptions({
    duration: 800
  });

  // Importing components
  import Navbar from "./lib/Navbar.svelte";
  import Hero from "./lib/Hero.svelte";
  import About from "./lib/About.svelte";
  import Languages from "./lib/Languages.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Navbar />
  <Hero />
  <About />
  <Languages />
  <Footer />
</main>
