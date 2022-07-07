import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Loader } from "@/components/Loader";
import { routes } from "routes";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  setTimeout(() => setLoading(false), 2000);

  const acessarPaginaLogin = () => {
    router.push(routes.LOGIN);
  };

  const acessarPaginaCriacaoConta = () => {
    router.push(routes.CREATE);
  };

  return (
    <div className="bg-gradient-to-r from-dash-background-dark to-dash-gray-darker flex flex-col items-center justify-center h-screen w-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-dash-secondary">Seu dashboard completinho</h2>

          <p className="text-dash-gray-lighter font-semibold">
            Escolha uma das opções para iniciarmos:
          </p>

          <span className="flex gap-3 align-middle justify-center mt-4">
            <button
              onClick={acessarPaginaLogin}
              className="p-2 bg-dash-gray-lighter rounded-md font-semibold hover:bg-dash-primary-hover transition ease-in-out delay-75 hover:ring-2 hover:ring-dash-details hover:ring-offset-2"
            >
              Entrar
            </button>
            <button
              onClick={acessarPaginaCriacaoConta}
              className="p-2 bg-dash-gray-lighter rounded-md font-semibold hover:bg-dash-primary-hover transition ease-in-out delay-75 hover:ring-2 hover:ring-dash-details hover:ring-offset-2"
            >
              Criar conta
            </button>
          </span>
        </>
      )}
    </div>
  );
};

export default Home;
