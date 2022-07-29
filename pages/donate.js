import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../error/ErrorMessage";
import TxList from "../error/TxList";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRecoilValue } from 'recoil';
import { darkMode } from "../global/darkThemeContext";
import Navbar from "../components/Navbar";
//0x36006083C211074B5188c225987c1C880593a774

const startPayment = async ({ setError, setTxs, ether }) => {
    try {
        if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress("0x36006083C211074B5188c225987c1C880593a774");
        const tx = await signer.sendTransaction({
            to: "0x36006083C211074B5188c225987c1C880593a774",
            value: ethers.utils.parseEther(ether)
        });
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
        console.log(err.message)
    }
};

export default function Donate() {
    const nightMode = useRecoilValue(darkMode);
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            "0x36006083C211074B5188c225987c1C880593a774": data.get("0x36006083C211074B5188c225987c1C880593a774")
        });
    };

    return (
        <div>
            <Navbar />
            <form className="flex flex-col justify-center items-center p-0 m-0 h-screen w-full bg-gradient-to-tr from-gray-500 to-gray-900" onSubmit={handleSubmit}>
                <Canvas>
                    <Stars radius={10} depth={50} count={nightMode ? 5000 : 0} factor={4} saturation={0} fade speed={3} />
                </Canvas>
                <div className="absolute h-1/3 sm:w-1/2 w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white flex flex-col items-center justify-evenly">
                    <h1 className="text-xl font-semibold text-gray-700 text-center">
                    Send me some ethereum
                    </h1>
                    <div className="w-full h-1/2 flex flex-col justify-around items-center">
                        <div className="my-3 h-3/4 w-full flex flex-col justify-center items-center">
                            <input
                            name="ether"
                            type="number"
                            className="bg-gray-100 rounded-full text-center text-black placeholder:text-gray-500 p-2 border
                            border-1 border-gray-900 block w-1/2"
                            placeholder="Amount in ETH"
                            />
                        </div>
                        <footer className="p-4 w-1/4">
                            <button type="submit" className="bg-gradient-to-br from-indigo-400 to-indigo-800 hover:to-indigo-900 
                            p-2 rounded-full text-white w-full">Send</button>
                        </footer>
                    </div>
                </div>
                <ErrorMessage message={error} />
                <TxList txs={txs} />
            </form>
        </div>
    );
}
