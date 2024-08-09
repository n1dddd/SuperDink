<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { type Content } from '@prismicio/client';
	
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import IconArrow from '~icons/carbon/arrow-up-right'
	

	export let slice: Content.NewsSlotSlice;
</script>
 
<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="px-4 md:px-6">
	<Bounded as="div">
		<Heading size="lg" class="mb-8 flex top-0 text-slate-300" tag="h2">
			{slice.primary.news_header}
		</Heading>
		{#each slice.primary.news_item as {news_image, news_title, news_blurb, news_link}}
		<PrismicLink field={news_link}>
		<div class="relative my-12 hover:blur-none">
		
			<Heading size="md" class="mb-8 flex md:absolute top-0 text-zinc-100 md:text-zinc-900 md:px-4" tag="h3">
				{news_title}
			</Heading>
			<Heading size="md" class="mb-8 hidden md:flex md:absolute top-0 text-zinc-100 -z-10 blur-sm px-4" tag="h3">
				{news_title}
			</Heading>
			<div class="flex absolute text-slate-900 bg-blue-300 text-lg font-bold md:text-2xl opacity-90 hover:opacity-100 rounded-b-2xl py-2 px-4 -bottom-1 z-10 w-full">
				<span class="hidden md:flex w-11/12">
					{news_blurb}
				</span>	
				<IconArrow class="text-4xl md:text-7xl"/>
				<span class="md:hidden flex self-center">
					Continue Reading
				</span>
			</div>
			<PrismicImage field={news_image} class="flex md:relative -z-50 grayscale blur-xs rounded-2xl"/>
		</div>
	</PrismicLink>
		{/each}
		
	</Bounded>
	
</section>
