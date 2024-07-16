<script lang="ts">
	import type { Content } from '@prismicio/client';
	import App from './App.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let slice: Content.HeroSlice;


	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.name-animation',
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: 4,
				delay: 0.1,
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
					class="mb-2 md:mb-8 text-[clamp(5.5rem,20vmin,10rem)] font-extrabold leading-none tracking-wider text-nowrap"
					aria-label={slice.primary.title_1 + "" + slice.primary.title_2 + "" + slice.primary.title_3}
				>
					 <div class="block">
						<span
							class="name-animation absolute bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
								<span class="inline-block">{slice.primary.title_1}</span>
						</span>
						<span
							class="name-animation relative bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent">
								<span class=" inline-block">{slice.primary.title_1}</span>
						</span>
					 </div>
					 <div class="block">
						<span
							class="name-animation absolute bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
								<span class="inline-block">{slice.primary.title_2}</span>

						</span>
						<span
							class="name-animation relative bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent">
								<span class=" inline-block">{slice.primary.title_2}</span>
						</span>
					 </div>
					 <div class="block">
						<span
							class="name-animation absolute bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent blur-sm">
								<span class="inline-block">{slice.primary.title_3}</span>

						</span>
						<span
							class="name-animation relative bg-gradient-to-tr from-blue-700 via-blue-300 to-blue-500 bg-clip-text text-transparent">
								<span class=" inline-block">{slice.primary.title_3}</span>
						</span>
					 </div>
				</h1>
			</div>
		</div>
	</div>
</section>
