<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let slice: Content.RosterListSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Bounded as="div">
		<Heading size="lg" class="mb-8 flex top-0 text-slate-300" tag="h2">
			{slice.primary.roster_header}
		</Heading>
		{#each slice.primary.roster_item as { roster_title, game_image, roster_member_1, roster_member_2, roster_member_3, roster_member_4, roster_member_5, roster_member_1_name, roster_member_2_name, roster_member_3_name, roster_member_4_name, roster_member_5_name, game_logo, game_colour }}
			<div class="relative my-12 hover:blur-none">
				<Heading size="lg" class="mb-8 flex md:absolute top-0 text-zinc-200 w-full" tag="h3">
					<div class="flex w-full p-4 bg-opacity-35 bg-blur">
						<p class="self-center" style="color:{game_colour}">{roster_title}</p>
					</div>
				</Heading>
				<div
					class="flex flex-col md:flex-row md:absolute text-slate-300 text-lg font-bold md:text-2xl rounded-b-2xl px-4 z-10 w-full justify-center"
				>
					<div class="grid gap-2 mt-36 grid-cols-1 md:grid-cols-5 self-center">
						<div class="grid grid-rows-2 ">
							<PrismicImage
								field={roster_member_1}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 rounded-b-2xl h-2/5 content-center">{roster_member_1_name}</p>
						</div>
						<div class="grid grid-rows-2">
							<PrismicImage
								field={roster_member_2}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 rounded-b-2xl h-2/5 content-center">{roster_member_2_name}</p>
						</div>
						<div class="grid grid-rows-2">
							<PrismicImage
								field={roster_member_3}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 rounded-b-2xl h-2/5 content-center">{roster_member_3_name}</p>
						</div>
						<div class="grid grid-rows-2">
							<PrismicImage
								field={roster_member_4}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 rounded-b-2xl h-2/5 content-center">{roster_member_4_name}</p>
						</div>
						<div class="grid grid-rows-2">
							<PrismicImage
								field={roster_member_5}
								class=" bg-slate-700 bg-opacity-50 rounded-t-2xl"
							/>
							<p class="text-center bg-slate-900 rounded-b-2xl h-2/5 content-center">{roster_member_5_name}</p>
						</div>
					</div>
				</div>
				<PrismicImage field={game_image} class="invisible md:visible md:relative -z-50 blur-xs rounded-2xl" />
			</div>
		{/each}
	</Bounded>
</section>
