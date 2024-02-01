import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const { user, error, isLoading } = useUser();

  const [ativaMenu, setAtivaMenu] = useState(false);

  function toggle() {
    setAtivaMenu((ativaMenu) => !ativaMenu);
  }

  return (
    <div className="">
      <header className="pb-3 lg:max-w-6xl lg:m-auto mt-4 flex lg:items-center lg:justify-between ">
        <div className="flex  lg:justify-between ">
          <div className="flex ">
            <Link href="/" className="flex items-center ">
              <Image
                src="/img/icone.png"
                alt="Icone Money"
                width={50}
                height={12}
              />
              <p className="pl-2 text-2xl">FinVue</p>
            </Link>
            <div className="lg:hidden absolute right-5 top-7">
              <button onClick={() => toggle()}>
                <CiMenuFries />
              </button>
            </div>
          </div>
          <div className="lg:ml-12 ml-0 pl-4 items-center pt-6 relative">
            <ul className={`lg:flex gap-4 lg:static lg:h-auto ${ativaMenu ? 'absolute bg-gray-50 -ml-32 left-0 w-96 text-center top-20 h-96 pt-32 flex-col z-50' : "h-0 overflow-hidden"}`}>
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
              <div className="lg:ml-[440px] ml-0">
                {user ? (
                  <>
                    <div className="flex lg:flex-row flex-col">
                      <p className="pr-4 lg:pb-0 pb-4">Bem-vindo, {user.nickname}!</p>
                      <LoginButton url="/logout" name="Logout" />
                    </div>
                  </>
                ) : (
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

