"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { FiSearch } from "react-icons/fi"
export function Input(){

    const [input, setinput] = useState('');
    const router = useRouter();

    function handleSearch(event:FormEvent ){
        event.preventDefault();
        if(input === "") return

        router.push(`/game/search/${input}`)
    }
    return(
        <form 
        className="w-full bg-slate-200 my-24 p-2 flex justify-between rounded-lg items-center " 
        onSubmit={handleSearch}>
            <input className="w-11/12 bg-slate-200 outline-none"
            type="text" 
            value={input}
            placeholder="qual game voce procura ?"
            onChange={(event)=>setinput(event.target.value)}
            />
            <button type="submit">
                <FiSearch size={24} color="red"/>
            </button>
        </form>
    )
}