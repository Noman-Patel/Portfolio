import {
    SiCss3,
    SiDrizzle,
    SiFirebase,
    SiGooglegemini,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
  } from "react-icons/si";
  
  export const projects = [
    {
      title: "Expense Tracker",
      tech: [SiNextdotjs, SiDrizzle,SiTailwindcss,SiPostgresql],
      link: "https://expense-tracker-updated.vercel.app",
      cover: {
        imageUrl: "/Expense.jpg",
        hoverImageUrl: "/Expense.gif",
      },
      background: "bg-blue-500",
    },
    {
      title: "Loop",
      tech: [SiNextdotjs, SiFirebase,SiTailwindcss,SiGooglegemini],
      link: "https://newer-loop.vercel.app",
      cover: {
        imageUrl: "/Loop.jpg",
        hoverImageUrl: "/Loop.gif",
      },
      background: "bg-green-500",
    },
    {
      title: "Isekai Station",
      tech: [SiHtml5,SiCss3,SiJavascript],
      link: "https://dainty-frangollo-b7bd23.netlify.app",
      cover: {
        imageUrl: "/Isekai.jpg",
        hoverImageUrl: "/Isekai.gif",
      },
      background: "bg-sky-500",
    },
  
    {
      title: "Mergesort Visualizer",
      tech: [SiReact, SiCss3,SiJavascript],
      link: "https://adorable-semolina-c3d933.netlify.app",
      cover: {
        imageUrl: "/Sort.jpg",
        hoverImageUrl: "/Sort.gif",
      },
      background: "bg-gray-500",
    },
    
  ];
  
