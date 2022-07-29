import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from 'next/image';
import Link from "next/link";
import DarkModeToggle from "react-dark-mode-toggle";
import { darkMode } from "../global/darkThemeContext";
import { useRecoilState } from 'recoil';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [nightMode, setNightMode] = useRecoilState(darkMode);
    return (
        <nav className="bg-transparent w-full absolute z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 relative">
                            <Image layout="fill" 
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex flex-row items-baseline space-x-4">
                                <Link href="/">
                                    <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                </Link>
                                <Link href="#whoami">
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white 
                                    px-3 py-2 rounded-md text-sm font-medium">Whoami</a>
                                </Link>
                                <Link href="#skills">
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white 
                                    px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                                </Link>
                                <Link href="#projects">
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white 
                                    px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" aria-controls="mobile-menu" aria-expanded="false" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <div className="sr-only">Open main menu</div>
                        {!isOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                        </button>
                    </div>
                    <DarkModeToggle onChange={setNightMode} checked={nightMode} size={60} />
                </div>
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#">
                            <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        </Link>
                        <Link href="#">
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Whoami</a>
                        </Link>
                        <Link href="#">
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                        </Link>
                        <Link href="#">
                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        </Link>
                    </div>
                </div>
                )}
            </Transition>
        </nav>
    );
}
