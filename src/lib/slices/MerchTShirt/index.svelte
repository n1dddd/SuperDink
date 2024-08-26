<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import ImageGallery from '@react2svelte/image-gallery';
	export let slice: Content.MerchTShirtSlice;

	const images = [
		{
			original: 'https://images.prismic.io/prismic-threlte-demo/Zsu2Z0aF0TcGJYRJ_SPR_DNK_T_SHIRT.png?auto=compress%2Cformat&rect=976%2C0%2C3548%2C3548&w=800&h=800&fit=max',
			thumbnail: 'https://images.prismic.io/prismic-threlte-demo/Zsu2Z0aF0TcGJYRJ_SPR_DNK_T_SHIRT.png?auto=compress%2Cformat&rect=976%2C0%2C3548%2C3548&w=800&h=800&fit=max'
			
		},
		{
			original: "https://images.prismic.io/prismic-threlte-demo/Zsu2ckaF0TcGJYRL_SPR_DNK_T__BACK_SHIRT.png?auto=compress%2Cformat&rect=976%2C0%2C3548%2C3548&w=800&h=800&fit=max",
			thumbnail: "https://images.prismic.io/prismic-threlte-demo/Zsu2ckaF0TcGJYRL_SPR_DNK_T__BACK_SHIRT.png?auto=compress%2Cformat&rect=976%2C0%2C3548%2C3548&w=800&h=800&fit=max",

		}
	]
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Bounded as="div">
		<Heading size="md" class="mb-8 flex top-0 text-slate-300" tag="h2">
			{slice.primary.t_shirt_title}
		</Heading>
		<div class="grid md:grid-cols-2 grid-cols-1 outline outline-1 outline-slate-100 p-8">
			<ImageGallery items={images} showThumbnails={true} showBullets={false} showPlayButton={false} showFullscreenButton={false}/>
			<div class="flex flex-col md:text-lg text-md text-slate-300 gap-y-8 justify-around text-center">
				<PrismicRichText field={slice.primary.t_shirt_description} />
				{slice.primary.size}
			</div>

		</div>
	</Bounded>
</section>

