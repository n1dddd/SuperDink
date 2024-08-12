<script lang="ts">
    import { Canvas } from "@threlte/core"
    import Scene from "./Scene.svelte";
    import Renderer from "$lib/components/Renderer.svelte";
</script>

<Canvas shadows>
    <Renderer />
    <Scene />
</Canvas>