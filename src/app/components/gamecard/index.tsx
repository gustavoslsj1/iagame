import { GameProps } from "@/app/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";
interface GameCardProps{
    data: GameProps
}

export function GameCard({data}:GameCardProps){
    return(
        <Link href={`/game/${data.id}`}>
            <section className=" bg-slate-200 rounded-lg p-4 w-full mb-5">
               <div className="relative w-full h-56">
                <Image 
                className=" rounded-lg object-cover hover:scale-105 transition-all duration-300"
                src={data.image_url} 
                alt={data.title}
                fill={true}
                quality={100}
                sizes="(max-width:780px) 100vw, (max-width:1200px) 44vw "
                />
               </div>
               <div className="flex items-center justify-between mt-4">
                <p className="overflow-hidden">{data.title}</p>
                <BsArrowRightSquare size={24} color="black"/>
               </div>
            </section>
        </Link>
    )
}