import { motion } from "framer-motion";

export default function Title({ title }) {
    return (
        <motion.div className="text-4xl text-white font-mono w-full md:w-1/3 p-5 mt-2 mb-3 bg-black" 
        initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }}>
            <h1>&gt;{title}</h1>
        </motion.div>
    )
}
