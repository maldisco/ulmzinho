import React from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import LineupExample from "@/assets/Lineup.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Lineup = ({ setSelectedPage }: Props) => {
  return (
    <section id="equipe" className="bg-primary-100 w-full mx-auto min-h-full py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Equipe)}
        className="mx-auto w-5/6"
      >
        {/* LINEUP EXAMPLE */}
        <div className="items-center justify-between gap-20">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    CRIE UMA EQUIPE COM{" "}
                    <span className="text-primary-500">A SUA CARA</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-xl">
                Você pode participar de torneios diários com seus amigos se
                tiver uma equipe com cinco jogadores.
              </p>
              <p className="mb-5 text-xl">
                Torneios são uma ótima forma de ganhar recursos para contratar
                jogadores ainda melhores e evoluir o seu time.
              </p>
            </motion.div>

            {/* GRAPHIC */}
            <img className="mx-auto" src={LineupExample} alt="commands-page-graphic" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Lineup;
