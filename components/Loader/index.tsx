import { images } from "@/constants/index";
import Image from "next/image";

export const Loader = () => {
  return (
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
  );
};
