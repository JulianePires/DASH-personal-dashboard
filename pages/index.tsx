import type { NextPage } from "next";
import Image from "next/image";
import { images } from "@/constants/index";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-dash-background-dark to-dash-gray-darker flex flex-col items-center justify-center h-screen w-screen">
      <span className="flex gap-2 items-center">
        <h1 className="text-dash-gray-lighter">Seja bem-vinde ao</h1>
        <div className="w-28">
          <Image
            src={images.LOGODARK.src}
            alt={images.LOGODARK.alt}
            height={410}
            width={950}
          />
        </div>
      </span>

      <h2>Seu dashboard completinho</h2>

      <p>Escolha uma das opções para iniciarmos:</p>
    </div>
  );
};

export default Home;
