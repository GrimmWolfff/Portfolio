import { useEffect, useState } from 'react';
import { get } from 'axios';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { darkMode } from '../global/darkThemeContext';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const nightMode = useRecoilValue(darkMode);
    useEffect(() => {        
        async function getData() {
            const response = await get(`/api/admin/posts`, { headers: { 'Content-Type': 'application/json' } });
            console.log(response)
            setPosts(response.data.posts);
        }
        getData();
    }, [])
    return (
        <div>
            <Head>
                <link rel='icon' href="https://cdn3.emoji.gg/emojis/4534-wojak-ss.png"></link>
                <title>Ilia Sichinava | Blog</title>
            </Head>
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center p-0 m-0 w-full bg-gradient-to-tr from-gray-500 to-gray-900">
                <Canvas>
                    <Stars radius={10} depth={50} count={nightMode ? 5000 : 0} factor={4} saturation={0} fade speed={3} />
                </Canvas>
                <div className="absolute h-full w-1/2 md:w-full shadow-lg mx-auto rounded-xl flex flex-col items-center
                justify-evenly">
                    {posts.map((post, idx) => (
                        <Post key={idx} title={post.title} text={post.text} publishedAt={post.publishedAt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
