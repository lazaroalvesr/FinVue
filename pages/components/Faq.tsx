'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  const [items, setItems] = useState([
    { id: 1, title: 'Como a Finviue pode me ajudar a melhorar minhas finanças pessoais?', info: 'A Finviue prioriza seu bem-estar financeiro, fornecendo serviços personalizados de planejamento, acompanhamento e orientação em investimentos', isOpen: false },
    { id: 2, title: 'Quais são os benefícios da contabilidade digital para empresas oferecida pela Finviue? ', info: 'A Finviue transforma a contabilidade empresarial com soluções digitais avançadas, simplificando processos e proporcionando relatórios financeiros precisos em tempo real.', isOpen: false },
    { id: 3, title: 'Como a Finviue diferencia seus serviços de outras empresas de gerenciamento financeiro ?', info: 'Na Finviue, destacamo-nos pela combinação de tecnologia inovadora e atendimento personalizado. Nossos especialistas em finanças estão prontos para entender suas necessidades específicas e oferecer soluções adaptadas.', isOpen: false },
  ]);

  function toggle(index: any) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...prevItems[index], isOpen: !prevItems[index].isOpen };
      return newItems;
    });
  }

  return (
    <section>
      <div className="max-w-3xl mt-32 m-auto mx-4 lg:mx-96">
        <div className="justify-center flex">
          <h1 className="text-4xl">FAQ</h1>
        </div>
        <div className="mt-12">
          <ul>
            {items.map((item, index) => (
              <li key={item.id} className="relative bg-gray-200 mb-4 lg:h-32 h-52 p-4 rounded-md">
                <div className="flex  justify-between items-center ">
                  <p>{item.title}</p>
                  <button onClick={() => toggle(index)}>{item.isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                  {item.isOpen && (
                    <span className="absolute left-4 right-0 top-24 text-sm flex-col">
                      {item.info}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
