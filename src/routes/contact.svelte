<script>
	// Imports
	import { fade } from "svelte/transition";
	import { contact_data, alert_data } from "../stores/store.js";
	import sveltefolioData from "../sveltefolio.config.js";
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";

	async function updatValue(skey = "", sval = true) {
		alert_data.update((s) => ({ ...s, [skey]: sval }));
		// Reset value after 3 seconds
		setTimeout(() => alert_data.update((s) => ({ ...s, [skey]: !sval })), 3000);
	}

	async function sendMessage() {
		// Shows a warning if the input values are empty
		if (Object.values($contact_data).some((val) => val === null || val === "")) {
			await updatValue("is_null");
			return;
		}

		const resp = await fetch(sveltefolioData.contact_worker_url, {
			method: "POST",
			body: JSON.stringify($contact_data)
		});
		resp.ok ? await updatValue("is_fetch_success") : await updatValue("is_fetch_suck");
	}
</script>

<main>
	<Navbar />

	<div class="text-center">
		<h1 class="mb-5 text-5xl font-bold fade-in my-20">Contact Me</h1>
		<p>Contact me via this form. I usually reply within a week</p>
	</div>

	<form class="grid justify-center m-6">
		<!-- Empty value warning -->
		{#if $alert_data.is_null}
			<div transition:fade class="alert alert-warning shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					>
					<span>Warning: You must fill all the values!</span>
				</div>
			</div>
		{/if}

		<!-- Successful fetch alert -->
		{#if $alert_data.is_fetch_success}
			<div transition:fade class="alert alert-success shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Message has been sent successfully!</span>
				</div>
			</div>
		{/if}

		<!-- Error alert -->
		{#if $alert_data.is_fetch_suck}
			<div transition:fade class="alert alert-error shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Unable to send the message!</span>
				</div>
			</div>
		{/if}

		<!-- Name -->
		<div class="relative m-4">
			<div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 9H8M16 9H14M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM14 13H10V16C10 16.6667 10.4 18 12 18C13.6 18 14 16.6667 14 16V13Z"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<input
				type="text"
				placeholder="Your name"
				class="input input-bordered input-primary w-full max-w-xs pl-10"
				bind:value={$contact_data.name}
			/>
		</div>

		<!-- Email -->
		<div class="relative m-4">
			<div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 9L12 12.5L17 9"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
						stroke="currentColor"
						stroke-width="1.5"
					/>
				</svg>
			</div>
			<input
				type="email"
				placeholder="Your email"
				class="input input-bordered input-primary w-full max-w-xs pl-10"
				bind:value={$contact_data.email}
			/>
		</div>

		<!-- Subject -->
		<div class="relative m-4">
			<div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.5 15.5C11.5 15.5 13 13.5 16 13.5C19 13.5 20.5 15.5 20.5 15.5"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M3 4C3 1.24586 7 1.2458 7 3.99993C7 5.96716 5 5.63927 5 7.99994"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5 11.01L5.01 10.9989"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M17.5 9C17.2239 9 17 8.77614 17 8.5C17 8.22386 17.2239 8 17.5 8C17.7761 8 18 8.22386 18 8.5C18 8.77614 17.7761 9 17.5 9Z"
						fill="black"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M10.5 9C10.2239 9 10 8.77614 10 8.5C10 8.22386 10.2239 8 10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9Z"
						fill="black"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<input
				type="text"
				placeholder="Subject"
				class="input input-bordered input-primary w-full max-w-xs pl-10"
				bind:value={$contact_data.subject}
			/>
		</div>

		<!-- Message -->
		<div class="relative m-4">
			<div class="absolute inset-y-0 left-0 items-center py-2 pl-2 pointer-events-none">
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z"
						stroke="currentColor"
						stroke-width="1.5"
					/>
				</svg>
			</div>
			<textarea
				class="textarea textarea-primary w-full pl-10"
				placeholder="Your message"
				rows="4"
				bind:value={$contact_data.msg}
			/>
		</div>

		<!-- Submit button -->
		<div class="relative m-4">
			<button
				type="submit"
				class="btn btn-outline btn-accent w-full"
				on:click|preventDefault={sendMessage}
			>
				<svg
					width="24"
					height="24"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.42596 13.0064C8.36853 13.0053 8.36853 13.0053 8.31129 13C7.67797 12.9296 7.21591 12.3021 7.27924 11.5983L7.88954 4.1532C7.94845 3.49854 8.4442 3 9.03626 3H13.4991C13.6266 3 13.7532 3.0235 13.8737 3.06956C14.4756 3.29947 14.7958 4.02807 14.5889 4.69693L13.0999 8.80233L15.8465 8.80235C16.0497 8.80235 16.2493 8.86206 16.4251 8.97543C16.9755 9.33051 17.1627 10.1142 16.8432 10.7259C16.4287 11.5409 12.2632 18.5413 10.9171 20.8004C10.81 20.9802 10.5357 20.8921 10.5479 20.6831L10.9986 13L8.42596 13.0064Z"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Contact Now!
			</button>
		</div>
	</form>

	<Footer />
</main>
