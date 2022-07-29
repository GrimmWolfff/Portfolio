import Link from 'next/link';
import { FaFacebookSquare as FbIcon, FaLinkedin as LiIcon, 
FaGithub as GithubIcon, FaInstagram as InstaIcon } from 'react-icons/fa';
import { SiCodewars as CwIcon } from 'react-icons/si';
export default function Footer() {
    return (
        <div className="flex flex-row justify-around align-center w-full h-28 bg-zinc-900 z-50
        text-white left-0 bottom-0 p-10">
            <div className="w-3/5 h-full text-right text-md leading-10">ILIA SICHINAVA © ALL RIGHTS RESERVED</div>
            <div className="h-full flex flex-row justify-evenly align-center w-2/5 text-white text-5xl">
                    <Link href="https://www.facebook.com/sichinavailia/">
                        <a><FbIcon className="ease-in-out duration-150 hover:text-blue-700" /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ilia-sichinava-a46104187/">
                        <a><LiIcon className="ease-in-out duration-150 hover:text-blue-500" /></a>
                    </Link>
                    <Link href="https://github.com/GrimmWolfff">
                        <a><GithubIcon className="ease-in-out duration-150 hover:text-black" /></a>
                    </Link>
                    <Link href="https://www.instagram.com/sichexon_/">
                        <a><InstaIcon className="ease-in-out duration-150 hover:text-black" /></a>
                    </Link>
                    <Link href="https://www.codewars.com/users/iuliuss">
                        <a><CwIcon className="ease-in-out duration-150 hover:text-red-600" /></a>
                    </Link>
            </div>
        </div>
    );
}