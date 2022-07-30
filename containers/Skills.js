import { FaReact as ReactIcon, FaHtml5 as HtmlIcon, FaCss3Alt as CssIcon,
FaNodeJs as NodeIcon, FaGitAlt as GitIcon } from 'react-icons/fa';
import { SiNextdotjs as NextIcon, SiTailwindcss as TailwindIcon, SiCplusplus as CppIcon,
SiMongodb as MongoIcon, SiExpress as ExpressIcon, SiFirebase as FirebaseIcon,
SiElectron as ElectronIcon
} from 'react-icons/si';
import { IoLogoJavascript as JsIcon } from 'react-icons/io';
import { BsBootstrapFill as BootstrapIcon } from 'react-icons/bs';
import Skill from '../components/Skill';
import { motion } from 'framer-motion';
import Title from '../components/Title';

function Skills() {
    return (
        <div id="skills" className="flex flex-col w-full h-auto bg-gray-900 z-20 h-screen pb-10">
            <Title title="Skills"/>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="grid sm:grid-cols-1 xl:grid-cols-3">
                    <Skill title="Front End Development" icons={(<>
                            <HtmlIcon className="skillIcon text-orange-700" />
                            <CssIcon className="skillIcon text-cyan-700" />
                            <JsIcon className="skillIcon text-yellow-300" />
                        </>)} />
                    <Skill title="Version Control" icons={<GitIcon className="skillIcon text-orange-700" />} />
                    <Skill title="JS Libraries/Frameworks" icons={(<>
                            <ReactIcon className="skillIcon text-sky-900"/>
                            <NextIcon className="skillIcon text-slate-700" />
                            <ElectronIcon className="skillIcon text-sky-400" />
                        </>)} />
                </div>
                <br /><br /><br />
                <div className="grid sm:grid-cols-1 xl:grid-cols-2">
                    <Skill title="Algorithms & Data Structures" icons={<>
                        <CppIcon className="skillIcon text-sky-900"/>
                        <JsIcon className="skillIcon text-yellow-300"/>
                    </>}/>
                    <Skill title="Styling Tools" icons={(<>
                            <TailwindIcon className="skillIcon text-sky-600" />
                            <BootstrapIcon className="skillIcon text-violet-700" />
                    </>)} />
                </div>
                <br /><br /><br />            
                <Skill className="grid grid-cols-2 md:grid-cols-4" title="Backend Development" icons={<>
                    <NodeIcon className="skillIcon text-emerald-800"/>
                    <ExpressIcon className="skillIcon text-white"/>
                    <MongoIcon className="skillIcon text-emerald-700"/>
                    <FirebaseIcon className="skillIcon bg-clip-text text-yellow-500"/>
                </>}/>
            </motion.div>
        </div>
    );
}

export default Skills;