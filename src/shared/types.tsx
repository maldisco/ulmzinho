export enum SelectedPage {
  Home = "home",
  Commands = "comandos",
  FAQ = "faq",
  Contact = "contato",
  Cartas = "cartas",
  Equipe = "equipe",
}

export type User = {
  userId: number;
  bank: number;
  dropBuff: boolean;
};

export type CommandType = {
  icon: JSX.Element;
  title: string;
  syntax: Array<string>;
};

export type QuestionType = {
  question: string;
  answer: string;
}

export type CardType = {
  name: string;
  description: string;
  image: string;
};
