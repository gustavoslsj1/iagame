
interface labelProps{
    name: string
}


export function Label({name}:labelProps){
    return(
        <div className=" flex-grow sm:flex-grow-0 py-1 px-3  bg-slate-200 text-center rounded-lg hover:font-bold transition-all duration-200">
            {name}
        </div>
    )
}