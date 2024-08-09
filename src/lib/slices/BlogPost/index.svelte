<script lang="ts">
	import { asDate, type Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.BlogPostSlice;

	const rawPrismicDate = slice.primary.news_time;

	const jsDate = asDate(rawPrismicDate);

	const formattedDate = jsDate?.toLocaleDateString();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Bounded as="div">
		<Heading size="md" class="mb-8 gap-y-2" tag="h2">
			<div>
				{slice.primary.news_title}
			</div>
		</Heading>
		<div class="flex-row my-6">
			<Heading size="sm" class="mb-8 gap-y-2" tag="h2">
				<div>
					Authored: {formattedDate}
				</div>
			</Heading>
			<PrismicImage
				field={slice.primary.news_image}
				class="rounded-2xl"
			/>
		</div>
		<div class="flex justify-center">
			<div class="md:text-lg text-md text-slate-300 w-3/4">
				<PrismicRichText field={slice.primary.news_description} />
			</div>
		</div>
	</Bounded>
</section>
