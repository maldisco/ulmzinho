import React from "react";
import Ranger from "@/assets/Ranger.png";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Stats = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="cartas"
      className="gap-16 py-40 md:h-full md:pb-0 bg-tertiary-100"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Cartas)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <motion.div
          className="mx-auto w-5/6"
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
            <HText>
              COLECIONE SEUS <span className="text-primary-500">JOGADORES</span>{" "}
              FAVORITOS
            </HText>
            <div className="z-10 mt-16 md:basis-3/5">
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                  <img src={Ranger} alt="ranger-nation" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STATS EXPLANATION */}
        <div className="flex basis-3/5 flex-col justify-center gap-10 md:z-10 md:mt-16">
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Awareness (AWA)</span> é uma
            pontuação baseada no controle de visão e na capacidade de
            sobrevivência de um jogador durante o jogo.
          </p>
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Efficiency (EFF)</span> é uma
            pontuação focada em quão impactante um jogador pode ser com
            determinados recursos.
          </p>
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Fighting (FI)</span> é uma
            pontuação que quantifica a capacidade de um jogador de impactar o
            jogo através de lutas.
          </p>
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Laning (LA)</span> é uma
            pontuação fortemente ligada ao desempenho de um jogador na lane,
            levando em consideração o quão melhor ele se sai em relação ao
            adversário da lane.
          </p>
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Experience (EXP)</span> é uma
            pontuação vinculada à experiência do jogador na vida real, levando
            em consideração campeonatos, vitórias e desempenho em grandes
            torneios.
          </p>
          <p className="text-xl">
            <span className="text-primary-500 font-bold">Overall (OVR)</span> é uma
            pontuação que agrega todas as outras pontuações, além de fatores
            como taxa de vitória e número de partidas jogadas.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
