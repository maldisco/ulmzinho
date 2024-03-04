import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  syntax: Array<string>;
};

const Command = ({ icon, title, syntax }: Props) => {
  return (
    <motion.div
      className="mt-5 h-full w-full rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <ul>
        {syntax.map((command) => (
          <li className="my-3" key={command}>
            {command}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Command;
