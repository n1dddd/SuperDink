<script lang="ts">
	import { asDate, type Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.BlogPostSlice;

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	}

	const rawPrismicDate = slice.primary.news_time;

	const jsDate = asDate(rawPrismicDate);

	const formattedTime = jsDate?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

	const formattedDate = jsDate?.toLocaleDateString('en-US', options);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Bounded as="div">
		<div class="w-3/4 flex flex-col self-center gap-y-8">
			<Heading size="md" class="mb-8 gap-y-2" tag="h2">
				<div>
					{slice.primary.news_title}
				</div>
			</Heading>
			<Heading size="sm" class="mb-8 gap-y-2" tag="h2">
					<div>
						{formattedDate} {formattedTime}
					</div>
			</Heading>
			<PrismicImage
			field={slice.primary.news_image}
			class="rounded-2xl"
		/>
			<div class="grid md:text-lg text-md text-slate-300 gap-y-8">
				<PrismicRichText field={slice.primary.news_description}/>
			</div>
		</div>
	</Bounded>
</section>
