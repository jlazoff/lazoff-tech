import { useState, useTransition } from 'react'
import { useControls } from 'leva'
import { Canvas } from '@react-three/fiber'
import { Html, AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei'

export default function App() {
  const email = 'joshua@lazoff.tech';
  const obfuscatedEmail = obfuscateEmail(email);
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}>
          <Sphere />
          <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
            <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
          </AccumulativeShadows>
        </group>
        <Env />
        <OrbitControls autoRotate autoRotateSpeed={3} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer' }}>
        <a href="https://lazoff.tech/" target="_blank" rel="noopener noreferrer" style={{ transform: 'scale(1.1)' }}>
          <span role="img" aria-label="computer" style={{ fontSize: '30px', marginRight: '10px', animation: 'bounce 1s infinite' }}>💻</span>
          <span style={{ display: 'inline-block', position: 'relative', animation: 'slide-in 1s forwards' }}>Visit Lazoff.Tech</span>
        </a>
        <div style={{ cursor: 'pointer', transform: 'scale(1.1)' }}  >
          <span role="img" aria-label="email" style={{ fontSize: '30px', marginRight: '10px', animation: 'bounce 1s infinite' }}>📧</span>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: obfuscatedEmail }}></a>
        </div>

        <a href="https://joshualazoff.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', transform: 'scale(1.1)', cursor: 'pointer', color: 'black', display: 'inline-block', position: 'relative' }}>
          <span role="img" aria-label="globe" style={{ fontSize: '30px', marginRight: '10px', animation: 'bounce 1s infinite' }}>🌐</span>
          <span style={{ display: 'inline-block', position: 'relative', animation: 'slide-in 1s forwards' }}>Meet Joshua Lazoff</span>
        </a>
      </div>
    </>
  )
}

function Sphere() {
  const { roughness } = useControls({ roughness: { value: 0, min: 0, max: 1 } })
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={roughness} />
      </mesh>
    </Center>
  )
}

function obfuscateEmail(email) {
  let obfuscatedEmail = '';
  for (let i = 0; i < email.length; i++) {
    obfuscatedEmail += `&#${email.charCodeAt(i)};`;
  }
  return obfuscatedEmail;
}

function Env() {
  const [preset, setPreset] = useState('sunset')
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition()
  const { blur } = useControls({
    blur: { value: 0, min: 0, max: 1 },
    preset: {
      value: preset,
      options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
      // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
      // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
      // That way we can hang onto the current environment until the new one has finished loading ...
      onChange: (value) => startTransition(() => setPreset(value))
    }
  })
  return <Environment preset={preset} background blur={blur} />
}
