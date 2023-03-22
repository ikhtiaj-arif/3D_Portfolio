import {
  backend, creator, css, dorkar, Edu, figma, freeCodeCmap, git, html, javascript, meta, mobile, mongodb, moto, nodejs, programmingHero, reactjs,
  redux, shopify, starbucks, tailwind, tesla, threejs, typescript, web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Researcher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }

  ];

  const courses = [
    {
      title: "JavaScript Algorithms and Data Structures",
      company_name: "FreeCodeCamp",
      icon: freeCodeCmap,
      iconBg: "#383E56",
      date: "March 2021 - December 2021",
      points: [
        "Learned the basics of programming and problem solving",
        "Learned about DataStructures and how it works.",
        "Solved Algorithmic problems.",
        "Learned the basics of Object Oriented Programming",
      ],
    },
    {
      title: "Complete Web Development With Jhankar Mahbub",
      company_name: "Programming_Hero",
      icon: programmingHero,
      iconBg: "#383E56",
      date: "June 2022 - January 2023",
      points: [
        "Learned the MERN stack and build 10+ projects.",
        "Finished all the assignments within the deadline",
        "Built and deployed projects with the team and lead the team.",
        "Understood the fundamentals of web development.",
      ],
    },
  ]
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dorkar Shop",
      description:
        "Web-based E-Commers platform that allows users to search, book, and buy products from various vendors, providing a convenient and efficient solution for daily shopping needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "TyepScript",
          color: "blue-text-gradient",
        },
      ],
      image: dorkar,
      source_code_link: "https://github.com/TheOpenAi/DorkarShop-Client",
      live_link: "https://dork-shop.web.app/"
    },
    {
      name: "Moto-Cross",
      description:
        "Web application that enables users to search for available used bikes at there targeted rigion, view estimated price ranges along with condition of the bike, and locate available bikes based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: moto,
      source_code_link: "https://github.com/ikhtiaj-arif/MOTO-CROSS-Client",
      live_link: "https://moto-cross-1.web.app/"
    },
    {
      name: "EducatorIO",
      description:
        "A comprehensive education platform that allows users to read & download cources.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Edu,
      source_code_link: "https://github.com/ikhtiaj-arif/Educator-IO-Client",
      live_link: "https://educatorio.web.app/"
    },
  ];
  
  export { services, technologies, courses, experiences, testimonials, projects };

