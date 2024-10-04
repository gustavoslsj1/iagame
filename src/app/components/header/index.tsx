import Link from "next/link";
import {LiaGamepadSolid} from 'react-icons/lia'
export default function Header (){
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between" >
                <nav className="flex justify-center items-center gap-4">
                    <h1 className=" font-roboto text-3xl font-bold text-gray-800 flex gap-0">Ia <span className="text-red-500">Game</span></h1>
                    <Link href="/"> Games </Link>
                    <Link href="/profile">Perfil</Link>
                </nav>
                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile">
                        <LiaGamepadSolid size={28}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}