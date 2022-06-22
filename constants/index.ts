import { IconType } from "react-icons";
import { Object } from "@/types/index";
import {
  GiMushroomHouse,
  GiMailbox,
  GiDialPadlock,
  GiStairsGoal,
  GiBookshelf,
  GiSun,
  GiCheckMark,
  GiCalendar,
  GiTomato,
  GiSecretBook,
  GiPencil,
  GiCoffeeBeans,
  GiMusicalScore,
  GiMoneyStack,
} from "react-icons/gi";
import { FaUserAstronaut, FaGithub } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { Image } from "@/types/index";

const icons: Object<IconType> = {
  USER: FaUserAstronaut,
  HOME: GiMushroomHouse,
  MAIL: GiMailbox,
  PASSWORD: GiDialPadlock,
  GITHUB: FaGithub,
  GOALS: GiStairsGoal,
  MOVIES: MdLocalMovies,
  BOOKS: GiBookshelf,
  DAY: GiSun,
  TASKS: GiCheckMark,
  SCHEDULE: GiCalendar,
  POMODORO: GiTomato,
  DIARY: GiSecretBook,
  BLOG: GiPencil,
  COFFEE: GiCoffeeBeans,
  MUSIC: GiMusicalScore,
  MONEY: GiMoneyStack,
};

const images: Object<Image> = {
  LOGODARK: {
    src: "/images/logoDark.png",
    alt: "dash logo dark",
  },
};

export { icons, images };
