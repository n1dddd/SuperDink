<script lang="ts">
	import type { Content } from '@prismicio/client';
	import App from './App.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let slice: Content.HeroSlice;

	const title_1_letters = slice.primary.title_1?.split('') ?? '';
	const title_2_letters = slice.primary.title_2?.split('') ?? '';
	const title_3_letters = slice.primary.title_3?.split('') ?? '';

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.name-animation',
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: 1,
				delay: 1,
				stagger: {
					each: 0.2,
					from: 'end'
				}
			}
		);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="px-4 md:px-6"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0"
			>
				<App />
			</div>
			<div class="col-start-1 md:row-start-1">
				<h1
					class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,9rem)] leading-none tracking-wide text-nowrap"
					aria-label={slice.primary.title_1 + "" + slice.primary.title_2 + "" + slice.primary.title_3}
				>
					{#if title_1_letters.length && title_2_letters && title_3_letters}
						<span
							class="block bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent"
						>
							{#each title_1_letters as title_1_letter}
								<span class="name-animation inline-block">{title_1_letter}</span>
							{/each}
						</span>
						<span
							class="block bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent"
						>
							{#each title_2_letters as title_2_letter}
								<span class="name-animation inline-block opacity-100">{title_2_letter}</span>
							{/each}
						</span>
						<span
							class="block bg-gradient-to-tr from-blue-300 via-blue-900 to-blue-700 bg-clip-text text-transparent"
						>
							{#each title_3_letters as title_3_letter}
								<span class="name-animation inline-block">{title_3_letter}</span>
							{/each}
						</span>
					{/if}
				</h1>
			</div>
		</div>
	</div>
</section>
