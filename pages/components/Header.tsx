// Importando as dependências necessárias
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CiMenuFries } from "react-icons/ci";

// Definindo o componente de cabeçalho
export default function Header() {
  // Utilizando o hook useUser para obter informações sobre o usuário autenticado
  const { user, error, isLoading } = useUser();

  // Estado para controlar o menu de navegação
  const [ativaMenu, setAtivaMenu] = useState(false);

  // Função para alternar a visibilidade do menu
  function toggle() {
    setAtivaMenu((ativaMenu) => !ativaMenu);
  }

  // Renderização condicional com base no estado do usuário
  return (
    <div className="w-full border-b border-neutral-300">
      <header className="pb-3 lg:max-w-6xl m-auto mt-4 flex lg:items-center lg:justify-between">
        <div className="flex w-32 items-center lg:justify-between">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/img/icone.png"
                alt="Icone Money"
                width={50}
                height={12}
              />
              <p className="pl-2 text-2xl">FinVue</p>
            </Link>
          </div>
          <div className="lg:hidden absolute right-6">
            <button onClick={() => toggle()}>
              <CiMenuFries />
            </button>
          </div>
          <div className="lg:ml-12 pl-4 items-center pt-6">
            <ul className={`flex gap-4 lg:static lg:h-auto ${ativaMenu ? 'absolute bg-gray-50 left-0 w-full text-center top-20 h-full pt-32 flex-col z-50' : "h-0 overflow-hidden"}`}>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Personal
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/dasboard'}>
                  Dashboard
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Pricing
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/private'}>
                  Private
                </Link>
              </li>
              <div className="lg:ml-[440px] ml-0">
                {user ? (
                  // Se o usuário estiver autenticado, exibe o nome e o botão de logout
                  <>
                    <div className="flex lg:flex-row flex-col">
                      <p className="pr-4 lg:pb-0 pb-4">Bem-vindo, {user.nickname}!</p>
                      <LoginButton url="/logout" name="Logout" />
                    </div>
                  </>
                ) : (
                  // Se o usuário não estiver autenticado, exibe o botão de login
                  <LoginButton url="/login" name="Login" />
                )}
              </div>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
