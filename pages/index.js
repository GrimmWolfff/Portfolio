import Head from "next/head";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';

export default function App() {
  const Navbar = dynamic(() => import('../components/Navbar'), { suspense: true })
  const Header = dynamic(() => import('../containers/Header'), { suspense: true })
  const Whoami = dynamic(() => import('../containers/Whoami'), { suspense: true })
  const Skills = dynamic(() => import('../containers/Skills'), { suspense: true })
  const Projects = dynamic(() => import('../containers/Projects'), { suspense: true })
  const Footer = dynamic(() => import('../components/Footer'), { suspense: true })

  return (
    <div className="min-h-screen w-full">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href="https://cdn3.emoji.gg/emojis/4534-wojak-ss.png"></link>
        <title>Ilia Sichinava</title>
      </Head>
      <div className="flex flex-col p-0 m-0 min-h-screen w-full bg-gradient-to-tr from-gray-500 to-gray-900">
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Header />
          <Whoami />
          <Skills />
          <Projects />
          {/* <Terminal /> */}
          {/* Three.js */}
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}
