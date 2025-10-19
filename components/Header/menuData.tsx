import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Bosh sahifa",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Haqida",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Yangiliklar",
    newTab: false,
    path: "/news",
  },
  {
    id: 2.3,
    title: "Hujjatlar",
    newTab: false,
    path: "/docs",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "News Grid",
  //       newTab: false,
  //       path: "/news",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Bog'lanish",
    newTab: false,
    path: "/support",
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   newTab: false,
  //   path: "/#contact",
  // },
];

export default menuData;
