import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    Openweaver,
    shopify,
    Remote,
    carrent,  //
    jobit,   //
    tripguide,  //
    threejs,
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
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Database Management Systems",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
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
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Remote",
      icon: Remote,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Remote",
      icon: Remote,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Remote",
      icon: Remote,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Intern @ Openweaver",
      icon: Openweaver,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Daya, you've truly amazed me. I used to believe that creating a website as stunning as our product was an unattainable goal, but you've proven me absolutely wrong. Your work is truly impressive!.",
      name: "Pooja Singh",
      designation: "Student",
      company: "Sri Sairam College of Engineering",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      testimonial:
        " Daya's remarkable dedication to ensuring client success in web development truly sets them apart, leaving an impressive and lasting impression",
      name: "Kavya MN",
      designation: "Student",
      company: "Sri Sairam College of Engineering",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      testimonial:
        "Daya's expertise in website optimization has made a significant impact on our traffic. Your efforts are greatly valued and appreciated!",
      name: "Banu Prasad L",
      designation: "Student",
      company: "Sri Sairam College of Engineering",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Steganify",
      description:
     "STEGANIFY addresses hidden message detection in digital media, aiding crime detection, cybersecurity, and enhancing steganographic methods.",
      tags: [
        {
          name: "AI/ML",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Expense Tracker appllication",
      description:
        "Android Expense Tracker app developed with Flutter for seamless expense management..",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "android studio",
          color: "green-text-gradient",
        },
        {
          name: "dart",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Responsive 3D Website",
      description:
        "Responsive Three.js site: Interactive 3D visuals for all devices, elevating web experiences to immersive heights of innovation and creativity.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };