import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiBrazilFlag } from "react-icons/gi";


export default function Footer() {
  return (
    <section>
      <div className="bg-blue-500 relative text-gray-50 pb-12 lg:pb-0 w-full mt-12">
        <div className="max-w-7xl m-auto pt-20 flex">
          <div className="flex lg:gap-32 flex-col lg:flex-row ml-12 gap-12 lg:ml-0">
            <div className="flex flex-col">
              <p className="text-2xl pb-4">Plataforma</p>
              <Link href="/dasboard" className="mb-3">
                <span className="text-gray-300">Dasboard</span>
              </Link>
              <Link href="/dasboard" className="mb-3">
                <span className="text-gray-300">Personal</span>
              </Link>
              <Link href="/dasboard">
                <span className="text-gray-300 ">Preço</span>
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl pb-4">Empresa</p>
              <Link href="/" className="mb-3">
                <span className="text-gray-300">Sobre nós</span>
              </Link>
              <Link href="/" className="mb-3">
                <span className="text-gray-300">Carreira</span>
              </Link>
              <Link href="/">
                <span className="text-gray-300 ">Blog</span>
              </Link>
            </div>
            <div>
              <p className="mb-4">Nos siga na nossa newsletter</p>
              <form>
                <input type="text"
                  placeholder="Digite seu email"
                  className="focus:outline-none  w-72 bg-gray-50 p-4 rounded-2xl"
                />
                <input type="submit"
                  value="Enviar"
                  className="py-3 px-4 cursor-pointer rounded-md -ml-24 bg-blue-500 text-gray-100"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto flex mt-12 mx-12 lg:mx-32 justify-between">
          <div className="flex gap-2">
            <GiBrazilFlag size="23px" />
            <p>PT-BR</p>
          </div>
          <div className="flex gap-1">
            <p className="mr-5">Nos siga:</p>
            <FaLinkedin size="23px" />
            <FaFacebookSquare size="23px" />
            <FaXTwitter size="23px" />
          </div>
        </div>
        <div className="max-w-7xl m-auto mt-12 border-t border-gray-50">
          <div className="flex justify-between flex-col lg:flex-row  items-center">
            <div className="pt-4">
              <Link href="/">
                <Image
                  src="/img/icone.png"
                  alt="Icone Money"
                  width={50}
                  height={12}
                />
              </Link>
            </div>
            <div>
              <p>@FinVue. Todos os direitos reservado</p>
            </div>
            <div className="flex gap-2">
              <p>Termos</p>
              <p>Privacidade</p>
              <p>Segurança</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}