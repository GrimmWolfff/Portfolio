import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import { verify } from 'jsonwebtoken';
import Navbar from '../components/Navbar';
import { post } from 'axios';

export default function dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const titleRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    setLoading(true);
    if(!localStorage.getItem('authToken') || process.env.ADMIN_EMAIL !== verify(localStorage.getItem('authToken'), process.env.JWT_SECRET).admin.email) {
      router.push('/admin');
    }
    setLoading(false);
  }, [])
  
  async function handleSubmit() {
    const response = await post('http://localhost:3000/api/admin/posts', { 
      title: titleRef.current.value,
      text: textRef.current.value 
    }, { headers: { 'Content-Type':'application/json'} })
  }
  return (
    <div className={`${loading ? 'hidden' : 'flex'}`}>
      <Navbar />
      <div className="mt-16 w-full bg-gradient-to-br from-gray-600 to-gray-900 flex flex-col justify-center items-center" 
      style={{ height: "calc(100vh - 4rem)" }}>
            <label htmlFor="title" className="w-1/2 font-bold text-left block m-2 text-sm font-medium text-white dark:text-gray-300">Title</label>
            <input ref={titleRef} type="text" id="title" className="bg-gray-300 border text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white" 
            placeholder="Title" required />

            <label htmlFor="text" className="w-1/2 font-bold text-left block m-2 text-sm font-medium text-white dark:text-gray-300">Text</label>
            <textarea ref={textRef} id="text" className="h-1/2 bg-gray-300 border text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white resize-none" 
            placeholder="Text" required/>

            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg 
            shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5
            py-2.5 text-center m-2" onClick={() => handleSubmit()}>Publish</button>

      </div>
    </div>
  )
}
