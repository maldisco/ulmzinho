import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import Faker from "@/assets/Faker.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAbouveMediumScreens = useMediaQuery("min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-managetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="text-m mt-8">
              Ultimate League Manager (ULM) é um bot do Discord em que você pode
              colecionar cartas dos seus jogadores de League of Legends
              preferidos, montar elencos e participar de torneios com os seus
              amigos.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 mb-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
              href="https://discord.com/api/oauth2/authorize?client_id=834223009249230848&permissions=8&scope=bot"
              target="_blank"
            >
              <span className="text-primary-300">Jogue agora</span>
            </a>
            <div className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
              <a target="_blank" href="https://discord.gg/TbUtcW6qt4">
                Servidor de suporte
              </a>
            </div>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-faker" src={Faker}></img>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
