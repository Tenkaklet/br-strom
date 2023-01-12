import React from "react";
import { BiHome, BiMessageAltDetail } from "react-icons/bi";
import { MdDevicesOther } from "react-icons/md";
import { RiServiceLine, RiTeamLine } from "react-icons/ri";

export const SidebarData = [
  {
    title: "Hem",
    path: "/",
    icon: <BiHome />,
    cName: "nav_text",
  },
  {
    title: "Produkter",
    path: "/produkter",
    icon: <MdDevicesOther />,
    cName: "nav_text",
  },
  {
    title: "Tjänster",
    path: "/tjanster",
    icon: <RiServiceLine />,
    cName: "nav_text",
  },
  {
    title: "Om oss",
    path: "/om",
    icon: <RiTeamLine />,
    cName: "nav_text",
  },
  {
    title: "Kontakta oss",
    path: "/kontakt",
    icon: <BiMessageAltDetail />,
    cName: "nav_text",
  },
];
