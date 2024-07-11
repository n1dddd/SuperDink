<script>
    import { T } from "@threlte/core";
	import { Environment, OrbitControls, Float, ContactShadows} from "@threlte/extras";
    import Sprdnk from "./SPRDNK.svelte";
</script>

<Environment files="night.hdr" path="/" format="hdr" />

<T.PerspectiveCamera
    makeDefault
    position={[-45, 0, 50]}
    aspect={10}
    fov={45}
    near={1}
    far={500}
>
    <OrbitControls autoRotate enableDamping enabled={false}/>
</T.PerspectiveCamera>


<Float speed={5} floatIntensity={5} rotationIntensity={1} rotationSpeed={1}>
    <Sprdnk scale={1} shadows/>
</Float>



