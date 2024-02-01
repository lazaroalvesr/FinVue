import { FaCheck } from "react-icons/fa";


export default function Pricing() {
  return (
    <section>
      <div className="max-w-7xl mt-32 m-auto">
        <div className="lg:ml-80 ml-8">
          <p className="bg-blue-100 lg:ml-80 p-2 mb-5 rounded-md w-16">Preço</p>
          <h1 className="text-5xl font-semibold">Planos para todos os orçamentos</h1>
          <p className="lg:w-[500px] lg:text-center text-start mt-6 lg:ml-32 w-80">Quer você seja uma pequena empresa ou uma grande corporação, temos o plano certo para você</p>
        </div>
        <div className="mt-20 flex lg:flex-row gap-12 flex-col  mx-2 lg:mx-0 ">
          <div className="lg:w-96 w-[360px] bg-gray-50 p-8 rounded-xl drop-shadow-md">
            <h1 className="text-3xl pb-4 text-blue-500">Pessoal</h1>
            <p className="pb-7">Orçamento integrado e aproveite melhor seu dinheiro com sua conta padrão</p>
            <p><span className="text-blue-500 text-3xl">R$ 0</span> / mês</p>
            <button className=" mt-12 flex 
                items-center justify-center
                w-56 border-gray-400 border  bg-blue-500  text-gray-50
                 rounded-lg py-3">
              Experimente grátis
            </button>
          </div>

          <div className="lg:w-[760px] mx-2 lg:mx-0 relative flex lg:flex-row flex-col text-gray-50 bg-blue-500 p-8 rounded-xl drop-shadow-md">
            <div>
              <h1 className="text-3xl pb-4 ">Plus</h1>
              <p className="pb-7 w-80">Orçamento integrado e aproveite melhor seu dinheiro com sua conta plus</p>
              <p><span className="-500 text-3xl">R$ 20</span> / mês</p>
              <button className=" mt-12 flex 
                items-center justify-center
                w-56 border-gray-400 border  bg-gray-50  
                 rounded-lg py-3 text-blue-500">
                Começe agora
              </button>
            </div>
            <div className="w-0.5 h-[330px] hidden lg:flex left-[370px] absolute top-0 bg-blue-400"></div>
            <div className="lg:ml-12 mt-12 lg:mt-0">
              <p className="text-gray-100">Características</p>
              <ul className="mt-4">
                <li className="flex gap-4 mb-8"><span><FaCheck /></span>Podem ser criadas várias tabelas</li>
                <li className="flex gap-4 mb-8"><span><FaCheck /></span>Suporte 24h</li>
                <li className="flex gap-4 mb-8"><span><FaCheck /></span>Conxeão com o Aplicativo do Banco</li>
                <li className="flex gap-4"><span><FaCheck /></span>Conxeão com Criptomoedas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}