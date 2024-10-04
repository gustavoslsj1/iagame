import Image from "next/image";
import Container from "./components/container";
import { GameProps } from "./utils/types/game";
import Link from "next/link";


async function getDalyGames() {
  try{
    const res =await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`)
    return res.json()
  
  }catch(err){
    throw new Error("failed to fetch data")
  }  
}

export default async function Home() {
  const dalyGame: GameProps= await getDalyGames();

  console.log(dalyGame)

  return (
    <main className="flex">
      <Container>
        <h1 className="text-center font-bold text-x1 mt-8 mb-5">separamos um jogo exlusivamente para você</h1>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg" >
            <Image
             src={dalyGame.image_url}
             alt={dalyGame.title}
             priority={true}
             quality={100}
             width={100}
             height={100}
            />
          </section>
        </Link>
      </Container>
       
      
    </main> 
  );
}