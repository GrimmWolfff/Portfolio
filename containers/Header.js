import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Scene }from '../components/Scene';

export default function Header() {
    const [animation1, setAnimation1] = useState();        
    const [animation2, setAnimation2] = useState();        
    const [animation3, setAnimation3] = useState();        
    useEffect(() => {
        setAnimation1(
            <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, times: [0, 0.5, 1] }} >
                🔥 Are you interested in mighty JS developer portfolio?
            </motion.div>
        )
        setAnimation2(
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5, times: [0, 0.5, 1] }} >
                <span className="z-50 absolute text-center left-0 w-full">📜 Scroll Down !</span>
            </motion.div>
        )
        setAnimation3(
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, times: [0, 0.5, 1] }} >
                👋 Hi, I am Ilia Sichinava, Full-Stack developer
            </motion.div>
        )
    }, [])
    return (
        <div id="header" className="fixed bg-fixed min-h-screen w-full flex flex-col items-center justify-around z-0">
            <Scene />
            <p className="text-center text-white text-[1.5rem] w-3/4">
                {animation3}
                {animation1}
            </p>
            <Link href="#whoami">
                <a>
                    <p className="cursor-pointer text-center text-[#8686fd] text-[2rem] w-full">
                        {animation2}
                    </p>
                </a>
            </Link>
        </div>
    );
}