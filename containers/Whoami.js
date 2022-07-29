import Image from 'next/image';
import { BsFillPersonFill, BsReverseLayoutTextWindowReverse as Date, BsLightbulbFill as Light,
    BsCheckCircleFill as Full, BsCheckCircle as Space } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Whoami() {
    
    //! USING USESTATE + USEEFFECT TO GET RID OF HYDRATION ERROR

    const [animation1, setAnimation1] = useState();
    const [animation2, setAnimation2] = useState();
    const [animation3, setAnimation3] = useState();
    const [animation4, setAnimation4] = useState();
    const [animation5, setAnimation5] = useState();

    useEffect(() => {
        setAnimation1((
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} 
                transition={{ duration: 1 }}>
                <li className="flex flex-row h-10 text-[1.5vw]"><BsFillPersonFill/>&nbsp;Ilia Sichinava </li>
            </motion.div>
        ))
        setAnimation2((
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} 
                transition={{ duration: 0.8 }}>
                <li className="flex flex-row h-10 text-[1.5vw]"><Date/>&nbsp;25/09/2003</li>
            </motion.div>
        ))
        setAnimation3((
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} 
                transition={{ duration: 0.6 }}>
                <li className="flex flex-row h-10 text-[1.5vw]"><Light/>&nbsp;Free University of Tbilisi</li>
            </motion.div>
        ))
        setAnimation4((
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} 
                transition={{ duration: 0.4 }}>
                <li className="flex flex-row h-10 text-[1.5vw]"><Light/>&nbsp;ITC - Mziuri</li>
            </motion.div>
        ))
        setAnimation5((
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} 
                transition={{ duration: 0.5 }}>
                <Image src={'/PROFILE.png'} 
                width={200} height={270} 
                className="rounded-3xl z-50" alt="Not Found"/>
            </motion.div>
        ))
    },[])
    return (
        <div className="mt-[100vh] min-h-screen w-full flex flex-row bg-gray-700 z-50" id="whoami">
            <div className="w-1/3 h-full flex flex-col">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }}>
                    <h1 className="text-[2vw] text-white font-mono bg-black w-full p-5 mt-2 mb-3"
                    style={{ background: 'black' }}>&gt;whoami</h1>
                </motion.div>
                <div className='flex flex-col items-center'>
                    {animation5}
                    <ul className="text-white font-bold p-4">
                        {animation1}
                        {animation2}
                        {animation3}
                        {animation4}
                    </ul>
                </div>
            </div>
            <div className="w-2/3 h-full flex flex-col justify-around items-left text-white" style={{ padding: "0.5rem" }}>
                <h1 className="text-white text-3xl">About Me</h1>
                <p className='p-2'>Hi! I am Ilia, Full-Stack JavaScript developer. I have been learning to code since I was 14.
                    Now I am 19, studying at Free University of Tbilisi on Electrical and Computer Engineering programme.
                    My strongest weapon is <span style={{ color: "yellow", fontWeight: 'bold' }}>JavaScript</span>.
                </p>
                {/* flex flex-col lg:flex-row justify-between flex-wrap */}
                <ul className='font-bold grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <li> 
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <div className="inline-flex text-lg"> <Full className='rounded-full bg-green-500' /> &nbsp; React</div>
                            <ul className='flex flex-col'>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; Redux</li>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; ContextApi</li>  
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; Recoil</li>  
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; React-Query</li>
                            </ul>
                        </motion.div>
                    </li>
                    <li> 
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                            <div className='inline-flex text-lg'> <Full className='rounded-full bg-green-500' /> &nbsp; Node</div>
                            <ul className='flex flex-col'>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; Express</li>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; CRUD Operations</li>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; Authorization</li>
                                <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp; Rest Api</li>
                            </ul>
                        </motion.div>
                    </li>

                        <li> 
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                                <div className='inline-flex text-lg'> <Full className='rounded-full bg-green-500' /> &nbsp; Styling Tools</div>
                                <ul className='flex flex-col'>
                                    <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp;Tailwind</li>
                                    <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp;SCSS</li>
                                    <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp;Material-Ui</li>
                                    <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp;Styled-Components</li>
                                </ul>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2.5 }}>
                                <div className='inline-flex text-lg'> <Full className='rounded-full bg-green-500' /> &nbsp; Mongo</div>
                                <ul className='flex flex-col'>
                                    <li className='inline-flex text-lg'>&nbsp;&nbsp;<Space className="rounded-full bg-green-600"/>&nbsp;Mongoose</li>
                                </ul>
                            </motion.div>                            
                        </li>
                </ul>
            </div>
        </div>
    );
}