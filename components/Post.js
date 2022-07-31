import { motion } from 'framer-motion';

export default function Post({ title, text, publishedAt }) {
    return (
        <motion.div className="border border-1 border-black bg-gray-700 rounded-xl flex
        md:flex-row flex-col text-white justify-center w-1/2 h-60 hover:bg-gray-600 duration-300"
        initial={{ opacity: 0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }}>
            <div className="flex flex-col justify-center w-full md:w-2/3 h-full">
                <h1 className="m-3 text-3xl font-bold h-1/12 w-full">{ title }</h1>
                <p className="m-3 text-lg text-white w-full md:w-2/3 h-1/2 break-all">
                    { text.length < 250 ? text : `${text.substring(0,250)}...See More` }
                </p>
                <sub> { publishedAt } </sub>
            </div>
        </motion.div>
    )
}