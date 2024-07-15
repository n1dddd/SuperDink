<script lang="ts">
	import {  type Content, isFilled } from "@prismicio/client";
    import { PrismicLink } from "@prismicio/svelte";
    import IconX from '~icons/fa6-brands/x-twitter'
    import IconInsta from '~icons/fa6-brands/instagram'
    
    export let settings: Content.SettingsDocument;
</script>

<footer class="text-slate-100">
    <div class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div class="name flex clex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
            <a href="/" class="text-xl font-extrabold tracking-tighter text-slate-100 transition-color duration-150 hover:text-blue-300">
                {settings.data.name}
            </a>
            <span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" aria-hidden="true"> / </span>
            <p class="text-sm text-slate-300">
                © {new Date().getFullYear()} {settings.data.name}    
            </p>
        </div>
        <nav class="navigation" aria-label="Footer Navigation">
            <ul class="flex items-center gap-1">
                {#each settings.data.nav_item as {link, label}, index}
                <li>
                    <PrismicLink field={link} class="block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-blue-300">{label}</PrismicLink>
                </li>
                {#if index < settings.data.nav_item.length - 1}
                    <span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">
                        /
                    </span>
                {/if}
                {/each}
            </ul>
        </nav>
        <div class="socials inline-flex justify-center sm:justify-end">
            {#if isFilled.link(settings.data.x_link)}
                <PrismicLink field={settings.data.x_link} class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-150 hover:text-blue-300" aria-label={settings.data.name + 'on X'}>
                    <IconX />
                </PrismicLink>
            {/if}
            {#if isFilled.link(settings.data.insta_link)}
                <PrismicLink field={settings.data.insta_link} class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-150 hover:text-blue-300" aria-label={settings.data.name + 'on instagram'}>
                    <IconInsta />
                </PrismicLink>
            {/if}
        </div>
    </div>
</footer>