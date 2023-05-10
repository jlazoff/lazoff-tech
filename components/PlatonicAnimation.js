import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron, Tetrahedron, Dodecahedron, Box } from '@react-three/drei';
import AnimatedText from './AnimatedText';
import * as THREE from 'three'

const MorphingPlatonicSolid = () => {
  const meshRef = useRef();

  const geometries = [
    new THREE.TetrahedronGeometry(1, 0),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.DodecahedronGeometry(1, 0),
    new THREE.IcosahedronGeometry(1, 0),
  ];

  const createMorphGeometry = () => {
    const morphGeometry = new THREE.BufferGeometry();
    morphGeometry.morphAttributes.position = [];

    geometries.forEach((geometry) => {
      morphGeometry.morphAttributes.position.push(geometry.attributes.position);
    });

    return morphGeometry;
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.x = elapsedTime * 0.5;
    meshRef.current.rotation.y = elapsedTime * 0.5;

    geometries.forEach((_, index) => {
      meshRef.current.morphTargetInfluences[index] = Math.sin(elapsedTime + index) * 0.5 + 0.5;
    });
  });

  return (
    <mesh ref={meshRef} geometry={createMorphGeometry()} material={new THREE.MeshStandardMaterial({ morphTargets: true })}>
      <primitive object={new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshStandardMaterial({ color: 'white' }))} />
    </mesh>
  );
};

const PlatonicAnimation = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MorphingPlatonicSolid />
        <AnimatedText />
      </Canvas>
    </div>
  );
};

export default PlatonicAnimation;
