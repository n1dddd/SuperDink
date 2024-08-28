<script lang="ts">

    export let tag = 'section';
</script>

<svelte:element
    this={tag}
    {...$$restProps} class={`py-6 md:py-10 ${$$props.class}`}
    >
    <div class="flex flex-col mx-auto w-full max-w-7xl">
        <slot/>
    </div>

</svelte:element>