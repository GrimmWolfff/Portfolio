import { useRouter } from 'next/router';
import Head from 'next/head';
import { useRef, useEffect } from 'react';
import axios from 'axios';
import { verify } from 'jsonwebtoken';

export default function Admin() {
    useEffect(() => {
        if(localStorage.getItem('authToken') || process.env.ADMIN_EMAIL !== verify(localStorage.getItem('authToken'), process.env.JWT_SECRET).admin.email) {
            router.push('/dashboard');
        }    
    }, [])

    const email = useRef();
    const password = useRef();
    const router = useRouter();
    const handleAuth = async () => {
        try {
            const { data } = await axios.post(`/api/admin/auth`, { 
                email: email.current.value,
                password: password.current.value 
            }, { headers: { 'Content-Type':'application/json'} })
            localStorage.setItem('authToken', data.token)
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }   
    return (
        <div className="w-full h-screen flex flex-col items-center justify-around bg-gray-700">
            <Head>
                <title>Admin Login</title>
            </Head>
            <div className="w-1/2 h-full mt-48">
                <input ref={email} type="email" placeholder="Email" 
                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <input ref={password} type="password" placeholder="Password" 
                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button onClick={() => handleAuth()} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Run as admin
                    </span>
                </button>
            </div>
        </div>
    );
}