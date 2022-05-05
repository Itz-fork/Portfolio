<script>
	export let repo = {
		name: "",
		description: "",
		stargazers_count: "",
		forks_count: "",
		html_url: ""
	};
</script>

<main>
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
            <!-- Repo name -->
			<h2 class="card-title">{repo.name}</h2>
            <!-- Repo description -->
			<p>{repo.description}</p>
            <div id="justify-start">
                <span class="font-semibold">⭐ Stars:</span> {repo.stargazers_count}
                <span class="font-semibold">🍴 Forks:</span> {repo.forks_count}
            </div>
			<div class="card-actions justify-end">
                <!-- Check out button -->
				<a href={repo.html_url} target="_blank"
					><button class="btn btn-primary">Check out!</button></a
				>
			</div>
		</div>
	</div>
</main>
