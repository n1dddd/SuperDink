<script>
    import { useThrelte, useTask } from "@threlte/core";
    import { onMount } from 'svelte'
    import {
        EffectComposer,
        EffectPass,
        RenderPass,
        SMAAEffect,
        SMAAPreset,
        BloomEffect,
        KernelSize
    } from 'postprocessing'

    const { scene, renderer, camera, size } = useThrelte()

    const composer = new EffectComposer(renderer)

    const setupEffectComposer = (camera) => {
        composer.removeAllPasses()
        composer.addPass(new RenderPass(scene, camera))
        composer.addPass(
            new EffectPass(
                camera,
                new BloomEffect({
                    intensity: 2,
                    luminanceThreshold: 0.15,
                    luminanceSmoothing: 1,
                    mipmapBlur: false,
                    kernelSize: KernelSize.MEDIUM
                })
            )
        )
        composer.addPass(
            new EffectPass(
                camera,
                new SMAAEffect({
                    preset: SMAAPreset.LOW
                })
            )
        )
    }

    $: setupEffectComposer($camera)
    $: composer.setSize($size.width, $size.height)

    const { renderStage, autoRender } = useThrelte()

    onMount(() => {
        let before = autoRender.current
        autoRender.set(false)
        return () => autoRender.set(before)
    })

    useTask((delta) => {
        composer.render(delta)
    }, { stage: renderStage, autoInvalidate: false })
</script>