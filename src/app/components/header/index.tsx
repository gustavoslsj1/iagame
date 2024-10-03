import Link from "next/link";

export default function Header (){
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between" >
                <nav>
                    <h1>IaGame</h1>
                    <Link href="/"> Games </Link>
                    <Link href="/">Perfil</Link>
                </nav>
            </div>
        </header>
    )
}