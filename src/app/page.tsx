import Image from "next/image";
import Container from "./components/container";
import { GameProps } from "./utils/types/game";
import Link from "next/link";

import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "./components/input";
import { GameCard } from "./components/gamecard";


async function getDalyGames() {
  try{
    const res =await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next:{revalidate:360}})
    return res.json()
  
  }catch(err){
    throw new Error("failed to fetch data")
  }  
}


async function getDataGames() {
  try{
    const res =await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next:{revalidate:360}})
    return res.json()
  
  }catch(err){
    throw new Error("failed to fetch data")
  }  
}

export default async function Home() {
  const dalyGame: GameProps= await getDalyGames();
  const data: GameProps[] = await getDataGames()
  return (
    <main className="w-full ">
      <Container>
        <h1 className="text-center font-bold text-x1 mt-8 mb-5">separamos um jogo exlusivamente para você</h1>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg" >
            <div className="w-full max-h-96 h-96 relative ">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="white"/>
              </div>
            <Image
             src={dalyGame.image_url}
             alt={dalyGame.title}
             priority={true}
             quality={100}
             fill={true}
             className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 "
             sizes="(max-width:780px) 100vw, (max-width:1200px) 44vw "
            />
            </div>
          </section>
        </Link>
        <Input/>

        <h2>jogos para conhecer</h2>

        <section className=" gap-7 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data.map ((item)=>(
            <GameCard key={item.id} data={item}/>
          ))}
        </section>
      </Container>
       
      
    </main> 
  );
}