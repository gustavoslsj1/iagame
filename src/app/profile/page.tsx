import Container from "../components/container";
import Image from "next/image";
import User from "@/app/public/user.png";
import { LikedCard } from "./components/favoritos";
export default function Profile() {
  return (
    <main className="w-full ">
      <Container>
        <section className="flex flex-col mt-8 mb-6 items-center justify-between gap-4 relative sm:flex-row">
          <div className="w-full flex items-center text-lg gap-4 flex-col sm:flex-row justify-center sm:justify-normal ">
            <Image
              priority={true}
              quality={100}
              alt="user"
              className=" object-cover rounded-full w-56 h-56"
              src={User}
            />

            <h1 className="font-bold text-2xl"> perfil do jogador</h1>
          </div>
          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
            <button>oasdas</button>
            <button>asdasdasd</button>
          </div>
        </section>

        <section className="flex gap-4 flex-wrap w-full ">
          <div className="flex-grow flex-wrap">
            <LikedCard />
          </div>
          <div className="flex-grow flex-wrap">
            <LikedCard />
          </div>
          <div className="flex-grow flex-wrap">
            <LikedCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
