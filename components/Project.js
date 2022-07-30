import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsCheckCircleFill as Full } from 'react-icons/bs';


function Project({ id, title, img, desc, link, skills }) {
    return (
        <motion.div className="bg-cover flex md:flex-row md:flex-row
        flex-col text-white justify-center w-full p-20 gap-10"
        initial={{ opacity: 0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }}>
            <img src={img} className="w-full md:w-1/3 h-5/6 z-0" alt="Not Found" />
            <div className="flex flex-col justify-center w-full md:w-2/3 h-full">
                <h1 className="m-3 text-3xl font-bold h-1/12 w-full">{ title }</h1>
                <p className="m-3 text-lg text-white w-full md:w-2/3 h-1/2">
                    { desc.length < 250 ? desc : `${desc.substring(0,250)}...See More` }
                </p>
                <ul className='font-bold h-1/3 grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 text-xl'>
                    {skills.map((skill,idx) => (
                        <li key={idx} className="inline-flex text-lg">
                            &nbsp;&nbsp;<Full className='rounded-full text-lg text-blue-500'/>&nbsp;{skill}
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