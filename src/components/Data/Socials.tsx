// ./Data/Socials.ts
import { IconType } from "react-icons";
import { SiLinkedin, SiGithub, SiReaddotcv } from "react-icons/si";

export type SocialItem = {
  link: string;
  label: string;
  Icon: IconType;
};

export const Socials: SocialItem[] = [
  {
    link: "/KHURRAM.pdf",
    label: "Resume",
    Icon: SiReaddotcv,
  },
  {
    link: "https://www.linkedin.com/in/patel786/",
    label: "Linkedin",
    Icon: SiLinkedin,
  },
  {
    link: "https://github.com/Noman-Patel",
    label: "Github",
    Icon: SiGithub,
  },
];