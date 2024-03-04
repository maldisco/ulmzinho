import { CardType, SelectedPage, QuestionType } from "@/shared/types";
import Cblol from "@/assets/Cblol.png";
import Msi from "@/assets/Msi.png";
import Lck from "@/assets/Lck.png";
import Lco from "@/assets/Lco.png";
import Lcs from "@/assets/Lcs.png";
import Lec from "@/assets/Lec.png";
import Ljl from "@/assets/Ljl.png";
import Lpl from "@/assets/Lpl.png";
import Pcs from "@/assets/Pcs.png";
import Worlds from "@/assets/Worlds.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Card from "./Card";
import { useState } from "react";

const cards: Array<CardType> = [
  {
    name: "CBLOL",
    description: "Campeonato Brasileiro de League Of Legends",
    image: Cblol,
  },
  {
    name: "MSI",
    description: "Mid-Season Invitational",
    image: Msi,
  },
  {
    name: "LCK",
    description: "League of legends Champions Korea",
    image: Lck,
  },
  {
    name: "LCO",
    description: "League of legends Circuit Oceania",
    image: Lco,
  },
  {
    name: "LCS",
    description: "League of legends Championship Series",
    image: Lcs,
  },
  {
    name: "LEC",
    description: "League of legends EMEA Championship",
    image: Lec,
  },
  {
    name: "LJL",
    description: "League of legends Japan League",
    image: Ljl,
  },
  {
    name: "LPL",
    description: "League of legends Pro League",
    image: Lpl,
  },
  {
    name: "PCS",
    description: "Pacific Championship Series",
    image: Pcs,
  },
  {
    name: "WORLDS",
    description: "World Championship",
    image: Worlds,
  },
];

const questions: Array<QuestionType> = [
  {
    question: "Eu preciso de uma conta do Discord para jogar?",
    answer: "Sim.",
  },
  {
    question: "Como posso colocar o bot no meu servidor?",
    answer:
      "Entre nesse LINK e selecione o servidor aonde deseja adicionar o bot.",
  },
  {
    question: "Como a sinergia/química funciona?",
    answer:
      "Jogadores com características em comum funcionam melhor do que completos estranhos. O requisito básico para que jogadores tenham uma sinergia é que as versões de suas cartas sejam do mesmo ano. Sendo do mesmo ano, eles podem ter uma sinergia ainda maior se jogarem na mesma liga, ou alcançar a sinergia perfeita se jogarem pelo mesmo time. A sinergia afeta o desempenho dos jogadores dentro de uma partida.",
  },
  {
    question: "Como ativar torneios no meu servidor?",
    answer:
      "Utilize o comando '/tournament channel', escolha o canal que deseja utilizar para os torneios e a partir do próximo dia serão criados torneios diários.",
  },
  {
    question: "Por que o jungler/caçador muda de lugar?",
    answer:
      "O caçador é adaptável, ele vai escolher o lado que tenha mais sinergia para focar. Será sua 'strong side' durante as partidas.",
  },
  {
    question: "Como as pontuações dos jogadores são calculadas?",
    answer:
      "Nenhuma pontuação foi feita manualmente. Todas as pontuações foram geradas por meio de estatísticas de partidas oficiais. Essas estatísticas, além de incluírem dados conhecidos, como K/D/A e DMG/min, também incluem dados mais específicos como sentinelas de controle colocadas e removidas, CS%/15, que nos permite obter estatísticas detalhadas de cada jogador. Dessa forma, os jogadores são ranqueados entre competidores da mesma liga e recebem uma pontuação final que é representada na carta.",
  },
  {
    question: "Ainda tenho mais dúvidas, onde posso procurar ajuda?",
    answer:
      "Visite o nosso servidor (link no topo da página) e encontre a ajuda que precisa para começar a sua jornada e criar o seu elenco dos sonhos.",
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Faq = ({ setSelectedPage }: Props) => {
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index: number) {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  }

  return (
    <section id="faq" className="w-full bg-primary-100 py-28">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}>
        <motion.div
          className="mx-8 md:mx-auto md:w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-4/5">
            <HText>FAQ</HText>
            <div className="container">
              <div className="accordion__faq py-5">
                {questions.map((question, index) => (
                  <div className="accordion__faq__item">
                    <div
                      onClick={() => toggleAccordion(index)}
                      className="accordion__faq__heading my-2 text-2xl"
                    >
                      <div className="accordion__faq__question bg-primary-100 p-8 font-bold">
                        <h3 className={accordion === index ? "active" : ""}>
                          {question.question}
                        </h3>
                        <div>
                          {accordion === index ? (
                            <span className="verticle">-</span>
                          ) : (
                            <span className="verticle">+</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="accordion__faq__footer my-2 text-2xl">
                      <div className="bg-primary-100">
                        <p
                          className={
                            accordion === index
                              ? "active px-8 pb-8"
                              : "inactive"
                          }
                        >
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-10 h-[410px] overflow-x-auto overflow-y-hidden md:mx-28">
          <ul className="w-[2400px] whitespace-nowrap">
            {cards.map((item, index) => (
              <Card
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
