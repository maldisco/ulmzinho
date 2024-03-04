import HText from "@/shared/HText";
import { CommandType, SelectedPage } from "@/shared/types";
import {
  GiftIcon,
  UserCircleIcon,
  TrophyIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Command from "./Command";

const commands: Array<CommandType> = [
  {
    icon: <GiftIcon className="h-6 w-6" />,
    title: "Comandos de carta",
    syntax: [
      "/claim",
      "/lookup",
      "/sell",
      "/pack",
      "/view",
      "/cardinfo",
      "/multisell",
    ],
  },
  {
    icon: <UserCircleIcon className="h-6 w-6" />,
    title: "Comandos de usuário",
    syntax: [
      "/bank",
      "/buy",
      "/inventory",
      "/collection",
      "/userinfo",
      "/trade",
      "/shop",
    ],
  },
  {
    icon: <TrophyIcon className="h-6 w-6" />,
    title: "Comandos de torneio",
    syntax: [
      "/tournament list",
      "/tournament channel",
      "/tournament register",
      "/tournament unregister",
      "/tournament details",
      "/tournament standings",
      "/tournament schedule",
    ],
  },
  {
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
    title: "Comandos de equipe",
    syntax: [
      "/lineup create",
      "/lineup assign",
      "/lineup remove",
      "/lineup delete",
      "/lineup list",
      "/lineup view",
      "/lineup rename",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Commands = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="comandos"
      className="md:w-full py-20 px-8 mx-auto min-h-full bg-tertiary-100"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Commands)}
        className="md:mx-auto md:w-5/6"
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>COMANDOS</HText>
          <p className="my-5 text-xl">
            Após adicionar o Bot em seu servidor, você pode utilizar os comandos
            abaixo para gerenciar seus jogadores e participar de torneios.
          </p>
        </motion.div>

        {/* COMMANDS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex md:h-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {commands.map((command: CommandType) => (
            <Command
              key={command.title}
              icon={command.icon}
              title={command.title}
              syntax={command.syntax}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Commands;
