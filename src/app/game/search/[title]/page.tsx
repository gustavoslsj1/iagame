import Container from "@/app/components/container"
import { GameCard } from "@/app/components/gamecard"
import { Input } from "@/app/components/input"
import { GameProps } from "@/app/utils/types/game"
import { json } from "stream/consumers"

async function getData(title:string) {
    try{
        const res =await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
        return res.json();
    }catch(err){
        return null;
    }
}
export default async function Search({
    params: {title}
}:{
    params:{title:string}
}){
    const game : GameProps[] =await getData(title)
    return(
        <main>
            <Container>
                <Input/>

                {!game &&(
                    <p> GAME Nao  ENCONTRADO</p>
                )}

                <section className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {game && game.map ((item) =>(
                        <GameCard key={item.id} data={item}/> 
                    ))}
                </section>
            </Container>
        </main>
    )
}