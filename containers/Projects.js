import { useEffect, useState } from 'react';
import Project from '../components/Project';
import Title from '../components/Title';

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
            <Title title="Projects"/>
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