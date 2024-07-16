<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import IconCircle from '~icons/teenyicons/circle-solid'
	import { onMount } from 'svelte';
	import {gsap} from 'gsap';
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
	import { PrismicImage } from '@prismicio/svelte';

	gsap.registerPlugin(ScrollTrigger);

	export let slice: Content.GamesListSlice;

	let component: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4
			}
		});

		tl.fromTo(".game-row", {
			x: (index) => {
				return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
			}
		}, {
			x: (index) => {
				return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
			},
			ease: 'power1.inOut'
		})
	})
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="overflow-hidden" bind:this={component}>
	<Bounded as="div">
		<Heading size="lg" class="mb-8" tag="h2">
			{slice.primary.heading}
		</Heading>
	</Bounded>

	{#each slice.primary.item as {game_logo, game_name, tech_color,}}
		<div class="game-row flex-row mb-8 flex items-center justify-center gap-4 text-slate-500" aria-label={game_name || undefined}>
			{#each Array(15) as _, index}
			<span class="text-2xl md:text-3xl">
				<IconCircle/>
			</span>
			<span class="game-item text-4xl md:text-8xl font-extrabold tracking-wider uppercase" style="color:{index === 7 && tech_color ? tech_color : 'inherit'}">
				{game_name}
			</span>
		
				<PrismicImage field={game_logo} class="game_logo" />
			{/each}
		</div>
	{/each}
</section>
