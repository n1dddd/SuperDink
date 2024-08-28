<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let slice: Content.RosterListSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Bounded as="div">
		<Heading size="lg" class="mb-20 flex top-0 text-slate-300" tag="h2">
			{slice.primary.roster_header}
		</Heading>
		{#each slice.primary.roster_item as { roster_title, game_image, roster_member_1, roster_member_2, roster_member_3, roster_member_4, roster_member_5, roster_member_1_name, roster_member_2_name, roster_member_3_name, roster_member_4_name, roster_member_5_name, game_logo, game_colour }}
			<div class="relative hover:blur-none">
				<Heading size="lg" class="md:mb-8 flex md:absolute top-0 text-zinc-300 w-full" tag="h3">
					<div class="flex w-fit bg-slate-200 bg-opacity-55 bg-blur rounded-br-2xl outline-1 outline outline-white outline-offset-8 px-4">
						<p class="self-center text-blue-800 tracking-wide">{roster_title}</p>
						<PrismicImage field={game_logo} class="game_logo"/>
					</div>
				</Heading>
				<div
					class="flex flex-col md:flex-row md:absolute text-slate-300 text-lg font-bold md:text-2xl rounded-b-2xl px-4 z-10 w-full justify-center"
				>
					<div class="flex flex-col md:grid gap-2 mt-16 md:mt-36 grid-cols-1 md:grid-cols-5 self-center">
						<div class="md:grid grid-rows-2 md:h-3/4 ">
							<PrismicImage
								field={roster_member_1}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 md:rounded-b-2xl h-1/5 md:h-4/5 content-center outline-2 outline outline-white">{roster_member_1_name}</p>
						</div>
						<div class="md:grid grid-rows-2 md:h-3/4">
							<PrismicImage
								field={roster_member_2}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 md:rounded-b-2xl h-1/5 md:h-4/5 content-center outline-2 outline outline-white">{roster_member_2_name}</p>
						</div>
						<div class="md:grid grid-rows-2 md:h-3/4">
							<PrismicImage
								field={roster_member_3}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 md:rounded-b-2xl h-1/5 md:h-4/5 content-center outline-2 outline outline-white">{roster_member_3_name}</p>
						</div>
						<div class="md:grid grid-rows-2 md:h-3/4">
							<PrismicImage
								field={roster_member_4}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 md:rounded-b-2xl h-1/5 md:h-4/5 content-center outline-2 outline outline-white">{roster_member_4_name}</p>
						</div>
						<div class="md:grid grid-rows-2 md:h-3/4">
							<PrismicImage
								field={roster_member_5}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 md:rounded-b-2xl h-1/5 md:h-4/5 content-center outline-2 outline outline-white">{roster_member_5_name}</p>
						</div>
					</div>
				</div>
				<PrismicImage field={game_image} class="invisible md:visible md:relative -z-50 blur-xs rounded-2xl" />
			</div>
		{/each}
	</Bounded>
</section>
