import Container from "@/app/components/container";
import { GameProps } from "@/app/utils/types/game";
import Image from "next/image";
import { Label } from "./components/label";
import { GameCard } from "@/app/components/gamecard";
import { redirect } from "next/navigation";


async function GetData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );

    return res.json();
  } catch (err) {
    throw new Error(" falhou em buscar os dados");
  }
}

async function GetGameCard() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (err) {
    throw new Error(" falhou em buscar os dados");
  }
}

export default async function Id({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await GetData(id);
  const sortedGame: GameProps = await GetGameCard();
  console.log(sortedGame);
  if (!data) {
    redirect("/");
  }

  return (
    <main className=" w-full text-black">
      <div className="w-full h-80 text-black sm:h-96 relative">
        <Image
          className="object-cover w-full h-80 sm:h-96"
          quality={100}
          priority={true}
          alt={data.title}
          fill={true}
          src={data.image_url}
          sizes="(max-width:780px) 100vw, (max-width:1200px) 44vw "
        />
      </div>
      <Container>
        <h1 className="my-4 font-bold text-xl ">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className=" font-bold text-lg mt-7 mb-4">categorias</h2>
        <div className=" flex gap-2 flex-wrap  text-black ">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>
        <h2 className=" font-bold text-lg mt-7 mb-4">plataformas</h2>
        <div className=" flex gap-2 flex-wrap  ">
          {data.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>
        <h2 className=" font-bold text-lg mt-7 mb-4">game sorteado </h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
