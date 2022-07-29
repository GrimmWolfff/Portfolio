import { useRouter } from 'next/router';
import { useState } from 'react'
import { ReactTerminal } from "react-terminal";
import { useRecoilState } from 'recoil';
import { Profile } from '../classes/Profile';
import { consoleState } from '../hooks/consoleState';
export default function Terminal() {
    const [isConsole, setIsConsole] = useRecoilState(consoleState);
    const profile = new Profile();
    const router = useRouter();
    profile.age = new Date().getFullYear() - 2003 - 1;
    const [welcomeMessage, setWelcomeMessage] = useState(
        <div>Type --help for commands list<br/></div>
    );
    const commands = {
        whoami: profile.whoami(),
        fullinfo: profile.fullInfo(),
        contact: profile.getContactInfo(),
        age: profile.age,
        cd: dir => router.push(`/#${dir}`),
        "--help": `whoami - Get short information fullinfo - Get full information contact - Get Contact information`
    };
    return (
        <div className={`${isConsole?'flex':'hidden'} fixed flex-col justify-around
        w-1/4 h-1/2 bottom-0 right-0 z-50`}>
            <ReactTerminal commands={commands}
                prompt=">>>"
                themes={{
                    "my-custom-theme": {
                        themeBGColor: "#272B36",
                        themeToolbarColor: "#111111",
                        themeColor: "#FFFEFC",
                        themePromptColor: "#a917a8"
                    }
                }}
                theme="my-custom-theme" 
                welcomeMessage={welcomeMessage}
            />
        </div>
        )
}