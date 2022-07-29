import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Porsche() {
    const carRef = useRef();
    useFrame(state => {
        if(!carRef.current) {
            return;
        }
        // carRef.current.rotation.x += 0.01;
        carRef.current.rotation.y += 0.01;
    })

    const gltf = useLoader(GLTFLoader, '/Porsche/scene.gltf')
    return <primitive ref={carRef} position={[0, -1, 0]} object={gltf.scene} scale={0.6} />
}