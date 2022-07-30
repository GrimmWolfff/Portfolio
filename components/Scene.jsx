import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';
import { darkMode } from '../global/darkThemeContext';

// function Gun() {
//     const gunRef = useRef();
//     useFrame(state => {
//         if(!gunRef.current) {
//             return;
//         }
//         gunRef.current.rotation.x += 0.01;
//         gunRef.current.rotation.y += 0.01;
//     })

//     const gltf = useLoader(GLTFLoader, '/Gun/scene.gltf')
//     return <primitive ref={gunRef} rotation={[ Math.PI / 2, 0, 0 ]} position={[0, 0, 0]} object={gltf.scene} scale={1} />
// }

// function BTR() {
//     const btrRef = useRef();
//     useFrame(state => {
//         if(!btrRef.current) {
//             return;
//         }
//         btrRef.current.rotation.x += 0.01;
//         btrRef.current.rotation.y += 0.01;
//     })

//     const gltf = useLoader(GLTFLoader, '/BTR/scene.gltf')
//     return <primitive ref={btrRef} rotation={[ Math.PI / 2, 0, 0 ]} position={[0, 0, 0]} object={gltf.scene} scale={0.25} />
// }


export function Scene() {
    const Box = dynamic(() => import('./Box'), { suspense: true });
    const nightMode = useRecoilValue(darkMode);
    return (
        <Canvas style={{ height: '100vh', position: 'absolute', marginTop: "20vh" }}>
            <PerspectiveCamera />
            <OrbitControls enableZoom={false}/>
            <Box />
            <Stars radius={10} depth={50} count={nightMode ? 5000 : 0} factor={4} saturation={0} fade speed={3} />
            <ambientLight args={['#a6a6a6', 1]} />
            <spotLight position={[10, 15, 10]} angle={0.3}></spotLight>
        </Canvas>
    );
}