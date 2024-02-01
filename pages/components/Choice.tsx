import { GrSecure } from "react-icons/gr";
import { SiAuthelia } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

export function Choice() {
  return (
    <section>
      <div className="max-w-7xl m-auto grid  grid-cols-1 lg:grid-cols-2 mt-24">
        <div className="max-3xl ml-12 lg:ml-0 ">
          <h1 className="text-6xl lg:w-[450px] mt-12">Nos temos a escolha de estrategia</h1>
          <p
            className="w-72 pt-6"
          >Nós temos a missão de trazer transparência para as suas finanças</p>
          <button className=" mt-12 flex 
                items-center justify-center
                w-56 border-gray-400 border  bg-blue-500  text-gray-50
                 rounded-3xl py-3">
            Saber Mais
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 mt-12 ml-12 lg:ml-0">
          <div>
            <div className="bg-blue-300 rounded-full w-12 h-12 items-center justify-center flex">
              <GrSecure size="22px" className="text-white" />
            </div>
            <p className="font-bold pt-4 pb-4 ">Time de Segurança</p>
            <p className="w-64">Time de segurança faz com que seu dinheiro continue seguro</p>
          </div>

          <div>
            <div className="bg-blue-300 rounded-full w-12 h-12 items-center justify-center flex">
              <SiAuthelia size="22px" className="text-white" />
            </div>
            <p className="font-bold pt-4 pb-4">Authenticação</p>
            <p className="w-64">Nós usamos Authenticação para proteger sua conta</p>
          </div>

          <div className="pt-12">
            <div className="bg-blue-300 rounded-full w-12 h-12 items-center justify-center flex">
              <CiBank size="22px" className="text-white" />
            </div>
            <p className="font-bold pt-4 pb-4">Sua economia segura</p>
            <p className="w-72">Fique de oilho no seu dinheiro rendendo</p>
          </div>

          <div className="pt-12">
            <div className="bg-blue-300 rounded-full w-12 h-12 items-center justify-center flex">
              <VscAccount size="22px" className="text-white" />
            </div>
            <p className="font-bold pt-4 pb-4">Conta </p>
            <p>Fique de oilho na sua conta</p>
          </div>
        </div>
      </div>
    </section>
  )
}