<script lang="ts">
    import { type Content, isFilled } from "@prismicio/client"
	import NavBarLink from "./NavBarLink.svelte";
	import Button from "./Button.svelte";
    import IconMenu from '~icons/mingcute/menu-fill'
    import IconClose from '~icons/mingcute/close-fill'
	import Bounded from "./Bounded.svelte";
	import { PrismicImage } from "@prismicio/svelte";

    export let settings: Content.SettingsDocument;
    let open = false;

    function onLinkClick() {
        open = false;
    }
</script>

<Bounded as="header" size="xl" class="top-0 z-50 mx-auto md:sticky md:top-4 relative">
    <nav>
        <div class="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m4 md:flex-row md:items-center md:rounded-xl">
            <div class="flex items-center justify-between">
                <a href="/" aria-label="Homepage"
                class="text-2xl font-extrabold tracking-wider text-slate-900 flex flex-row">
                    {settings.data.name}
                    <PrismicImage field={settings.data.sprdnk_logo} width={35}/>
            </a>
                <button aria-expanded={open} aria-label="Open Menu" class="block p-2 text-2xl text-slate-200 md:hidden" on:click={() => (open=true)}>
                    <IconMenu />
                </button>
            </div>
            <!--Mobile Nav-->
            <ul class={`fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                <li>
                    <button aria-expanded={open} aria-label="Close Menu" class="fixed right-4 top-3 block p-2 text-xl text-slate-900 md:hidden" on:click={() => (open=false)}>
                        <IconClose />
                    </button> 
                </li>
                {#each settings.data.nav_item as {label, link}} 
                    <li class="first:mt-8">
                        <NavBarLink field={link} label={label} {onLinkClick} type="mobile"/>
                    </li>
                {/each}
            </ul>
            <ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex text-xl">
                {#each settings.data.nav_item as {label, link}} 
                    <li>
                        <NavBarLink field={link} label={label} {onLinkClick} type="desktop"/>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</Bounded>