import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const AnimatedText = ({ position, content }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    ref.current.rotation.x = elapsedTime * 0.1
    ref.current.rotation.y = elapsedTime * 0.1
  })

  return (
    <group ref={ref} position={position}>
      <Text
        color="white"
        fontSize={0.25}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        anchorX="left"
        anchorY="top"
        outlineWidth={0.01}
        outlineColor="black"
      >
        {content}
      </Text>
    </group>
  )
}

export default AnimatedText
