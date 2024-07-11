<script lang="ts">
	import type { Content } from '@prismicio/client';
	export let slice: Content.HeroSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="px-4 md:px-6">
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0">
				Shape Scene
			</div>
			<div class="col-start-1 md:row-start-1">
				<h1 class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,13rem)] leading-none tracking-wide text-nowrap">
					<span class="block bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">{slice.primary.title_1}</span>
					<span class="block bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">{slice.primary.title_2}</span>
					<span class="block bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-500 bg-clip-text text-transparent">{slice.primary.title_3}</span>
				</h1>
			</div>
		</div>
	</div>
</section>
