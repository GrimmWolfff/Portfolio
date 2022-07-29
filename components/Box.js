import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Box() {
    const cube = useRef();
    useEffect(() => {
        cube.current.rotation.x += 0.25;
    }, [])
    useFrame(state => {
        if(!cube.current) {
            return;
        }
        cube.current.rotation.y += 0.04;
    })

    return (
        <mesh ref={cube}>
            <boxBufferGeometry rotation={[ Math.PI / 2, 0, 0 ]} attach="geometry"></boxBufferGeometry>
            <meshStandardMaterial color={`#B99F2F`} attach="material"></meshStandardMaterial>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            position={[0, 0, 0.51]}
            >JS</Text>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            rotation={[Math.PI / 2, Math.PI, 0]}
            position={[0, 0.51, 0]}
            >JS</Text>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            position={[0.51, 0, 0]}
            rotation={[ Math.PI, Math.PI / 2, Math.PI ]}
            >JS</Text>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            position={[-0.51, 0, 0]}
            rotation={[ Math.PI / 2, Math.PI / -2, Math.PI / 2 ]}
            >JS</Text>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            position={[0, -0.51, 0]}
            rotation={[ Math.PI / -2, Math.PI, Math.PI / 2 ]}
            >JS</Text>
            <Text
            scale={[7, 7, 7]}
            color="#323330"
            position={[0, 0, -0.51]}
            rotation={[ Math.PI, Math.PI * 2, Math.PI ]}
            >JS</Text>
        </mesh>
    );
}