import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsCheckCircleFill as Full } from 'react-icons/bs';


function Project({ id, title, img, desc, link, skills }) {
    return (
        <motion.div className="bg-cover flex md:flex-row md:flex-row
        flex-col text-white items-center w-11/12 h-[75vh] p-20 gap-10"
        initial={{ opacity: 0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }}>
            <img src={img} className="sm:w-1/3 md:w-1/2 w-full h-5/6 z-0" alt="Not Found" />
            <div className="flex flex-col w-2/3 h-full">
                <h1 className="m-3 text-[2.5vw] font-bold h-1/12">{ title }</h1>
                <p className="m-3 text-[1vw] text-white w-2/3 h-1/2">
                    { desc.length < 250 ? desc : `${desc.substring(0,250)}...See More` }
                </p>
                <ul className='font-bold h-1/3 grid grid-cols-2 w-1/2 text-[1.25vw]'>
                    {skills.map((skill,idx) => (
                        <li key={idx} className="inline-flex">
                            &nbsp;&nbsp;<Full className='rounded-full text-blue-500'/>&nbsp;{skill}
                        </li>
                    ))}
                </ul>
                <Link href={link}>
                    <a className={`h-1/12 text-gray-100 z-40 p-4 rounded-full 
                    text-xl`}>🔗 Github Repo</a>
                </Link>
            </div>
        </motion.div>
    )
}

export default Project