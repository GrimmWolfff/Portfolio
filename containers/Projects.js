import { useEffect, useState } from 'react';
import Project from '../components/Project';
import { motion } from 'framer-motion';

export default function Projects (){
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await fetch('/api/projects');
            const projects = await data.json();
            setItems(projects);
        }
        getData();
    }, [])
    return (
        <div className="flex flex-col w-full h-auto bg-gray-800 z-40">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }}>
                <h1 className="text-[2vw] text-white font-mono bg-black w-1/3 p-5 mt-2 mb-3"
                style={{ background: 'black' }}>&gt;Projects</h1>
            </motion.div>
            <div id="projects" className="flex flex-col items-center justify-evenly">
                {items.map(item => 
                <Project 
                    key={item.id} 
                    link={item.link} 
                    title={item.title} 
                    img={item.img} 
                    desc={item.desc} 
                    skills={item.skills} />
                )}
            </div>
        </div>
    );
}