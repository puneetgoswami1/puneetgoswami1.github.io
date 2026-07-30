"use client";
import { HiOutlineMail } from "react-icons/hi";
import { FaHandPointDown } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaBookOpen,
  FaGraduationCap,
  FaDatabase,
  FaPython,
  FaChartBar,
  FaBriefcase,
  FaCode,
  FaFlask,
  FaLightbulb,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaUsers,
  FaUserSecret,
  FaAward,
  FaRegCommentDots,
  FaQuoteLeft
} from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Home() {

  useEffect(() => {
  history.scrollRestoration = "manual";

  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname
    );
  }

  window.scrollTo(0, 0);

}, []);



  const [showAllProjects, setShowAllProjects] = useState(false);

  const [showAllCertifications, setShowAllCertifications] = useState(false);

const certifications = [
  {
    title: "Google IT Automation with Python",
    issuer: "Google",
    date: "Apr 2025",
  },
  {
    title: "Introduction to AI in Digital Marketing",
    issuer: "HubSpot",
    date: "Mar 2025",
  },
  {
    title: "Configuration Management and the Cloud",
    issuer: "Google",
    date: "Jan 2025",
  },
  {
    title: "Troubleshooting and Debugging Techniques",
    issuer: "Google",
    date: "Dec 2024",
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    date: "Dec 2024",
  },
  {
    title: "Using Python to Interact with the Operating System",
    issuer: "Google",
    date: "Dec 2024",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    date: "Dec 2024",
  },
  {
    title: "Stanford Science Small Groups — U-Net AI for Biomedical Image Segmentation",
    issuer: "Stanford University",
    date: "Nov 2024",
  },
  {
    title: "Stanford CCOP Bootcamp — Certificate of Completion",
    issuer: "Stanford University",
    date: "Aug 2024",
  },
  {
    title: "Stanford Fair for Community College Students",
    issuer: "Stanford University",
    date: "May 2025",
  },
  {
    title: "IRB Administration",
    issuer: "CITI Program",
    date: "Jun 2024",
  },
  {
    title: "Responsible Conduct of Research for Engineers",
    issuer: "CITI Program",
    date: "Jun 2024",
  },
  {
    title: "Stanford Code in Place — Certificate of Completion",
    issuer: "Stanford / Code in Place",
    date: "Jun 2024",
  },
];

const projects = [
  {
    title: "AI Research Assistant",
    desc: "Built an advanced AI research assistant using LLMs, RAG pipelines and vector databases for semantic search.",
    tech: ["Python","OpenAI","RAG","Vector DB"]
  },
  {
    title: "Medical Image Analysis",
    desc: "Deep learning system for automated disease detection from radiology images using CNN architectures.",
    tech: ["PyTorch","CNN","Medical AI","CV"]
  },
  {
    title: "Fraud Detection System",
    desc: "Machine learning platform for detecting financial fraud using anomaly detection techniques.",
    tech: ["Python","ML","XGBoost","Analytics"]
  },
  {
    title: "Smart Traffic Prediction",
    desc: "Predictive traffic management platform using AI and real-time sensor data.",
    tech: ["AI","Prediction","Data Science","IoT"]
  },
  {
    title: "NLP Sentiment Engine",
    desc: "Natural language processing engine capable of classifying sentiment from large scale datasets.",
    tech: ["NLP","Transformers","BERT","Python"]
  },
  {
    title: "Computer Vision Surveillance",
    desc: "Real-time object detection and monitoring platform using YOLO and OpenCV.",
    tech: ["YOLO","OpenCV","CV","AI"]
  },

{
  title: "3D Geological Visualization Tool",
  desc: "Interactive 3D subsurface visualization tool using Python and Mayavi for volumetric geological datasets.",
  tech: ["Python","Mayavi","NumPy","PyVista"]
},

{
  title: "Computer Science Club Website",
  desc: "Full-stack website featuring AI chatbot, gallery, team section and contact forms.",
  tech: ["JavaScript","HTML/CSS","AI Chatbot","Full-Stack"]
},

{
  title: "Girls Who Code Club Website",
  desc: "Platform promoting diversity and inclusion with events, membership signup and contact forms.",
  tech: ["HTML5","CSS3","JavaScript","Bootstrap"]
},

{
  title: "Network Connectivity Monitor",
  desc: "Raspberry Pi based monitoring system with real-time network status indicators.",
  tech: ["Python","Raspberry Pi","GPIO","Networking"]
},

{
  title: "K-12 STEM Enrichment Platform",
  desc: "Responsive STEM learning platform built using React, Astro and Firebase.",
  tech: ["React","Astro","Firebase","Tailwind CSS"]
},

{
  title: "Automated Attendance System",
  desc: "Attendance management system using image recognition and automation workflows.",
  tech: ["Python","SikuliX","Automation"]
}
  
];

  const experiences = [
  {
    company: "Contra",
    role: "Data Analyst Intern",
    date: "April 2023 - June 2024",
    side: "right",
    points: [
   "Supported analytics projects using SQL, Excel and Power BI for business reporting.",
   "Cleaned, transformed and validated datasets to improve reporting accuracy.",
   "Built interactive dashboards and generated actionable insights for business decisions."

    ],
    skills: [  "SQL",
    "Excel",
    "Power BI",
    "Data Cleaning",
    "Data Visualization" ]
  },

  {
    company: "Vmayo Technnologies",
    role: "Data Analyst",
    date: "December 2024 - May 2025",
    side: "left",
    points: [
     "Analyzed business datasets using SQL, Excel and Power BI to identify trends and KPIs.",
    "Designed interactive dashboards and automated reports for operational decision-making.",
    "Performed data cleaning, validation and transformation to improve data quality."
    ],
    skills: [  "SQL",
    "Excel",
    "Power BI",
    "Data Analysis",
    "Dashboard Development" ]
  },

  {
    company: "Lemon.io",
    role: "Data Analyst",
    date: "January 2024 - November 2024",
    side: "right",
    points: [
       "Performed advanced data analysis to identify business trends and growth opportunities.",
    "Developed Power BI dashboards and optimized SQL queries for KPI monitoring.",
    "Collaborated with cross-functional teams to deliver data-driven insights and reporting."
    ],
    skills: [ "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Business Intelligence"]
  }
];

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/mosq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/50">

        {/* Navbar */}
        <nav
className={`fixed top-0 left-0 w-full px-4 py-6 flex justify-between items-center z-50 ${
  scrolled
    ? "bg-black/70 backdrop-blur-md border-b border-white/10"
    : "bg-transparent"
}`}
>
          <h1 className="text-2xl font-black tracking-wide text-[#d4af37] cursor-pointer hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_20px_#facc15] transition-all duration-300">
            P.G.
          </h1>
          <ul className="hidden lg:flex items-center gap-6 text-sm-text text-white font-medium">
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold"> <a href="#about">About</a></li>
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15]  transition-all duration-200 cursor-pointer font-semibold"> <a href="#experience">Experience</a></li>
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15]  transition-all duration-200 cursor-pointer font-semibold"> <a href="#projects">Projects</a></li>
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15]  transition-all duration-200 cursor-pointer font-semibold"> <a href="#skills">Skills</a></li>
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15]  transition-all duration-200 cursor-pointer font-semibold"> <a href="#certifications">Certifications</a></li>
  <li className="hover:text-yellow-400 hover:scale-110 active:scale-95  hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold"> <a href="#contact">Contact</a></li>
</ul>

          <div className="flex items-center gap-5 text-xl">
  <FaLinkedin
  onClick={() => window.open("https://www.linkedin.com/in/puneetgoswami-ai/", "_blank")}
  className="hover:text-yellow-400 hover:scale-125 active:scale-90 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer" />
  <FaGithub
  onClick={() => window.open("https://github.com/puneetgoswami1", "_blank")}
  className="hover:text-yellow-400 hover:scale-125 active:scale-90  hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer" />
  <FaEnvelope 
   onClick={() => window.location.href = "mailto:parasgoswami1156@gmail.com"}
  className="hover:text-yellow-400 hover:scale-125 active:scale-90  hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer" />
</div>
        </nav>

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center text-center px-6 relative pt-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(50)].map((_, i) => (
    <div
      key={i}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${3 + Math.random() * 5}s`,
    fontSize: `${4 + Math.random() * 4}px`,
      }}
    >
      ✦
    </div>
  ))}
</div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
  
</div>
<motion.div
  className="absolute bottom-0 left-0 w-full h-80 pointer-events-none z-10"
  animate={{
    x: [0, 40, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="w-full h-full bg-gradient-to-t from-yellow-300/20 via-yellow-200/5 to-transparent blur-3xl" />
</motion.div>

          <div className="max-w-5xl">

            

            {/* Star Icon */}

            <p className="uppercase tracking-[6px] text-[#facc15] text-sm mb-6">
              Data Analyst • SQL • Python
            </p>

            <h1
  className="4xl md:text-[75px] font-bold leading-none mb-8"
  style={{
    textShadow: "0 0 50px rgba(255,255,255,0.35)"
  }}
>
              𝓟𝓾𝓷𝓮𝓮𝓽 𝓖𝓸𝓼𝔀𝓪𝓶𝓲
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
               Data Analyst • AI Researcher
            </h2>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-8">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Rajasthan, India
              </span>

              <span>|</span>

              <span className="flex items-center gap-2">
  <FaGraduationCap className="text-[#d4af37]" />
  BCA ICFAI University
</span>
            </div>

           <div className="flex justify-center items-center gap-4 text-gray-300 mb-6">

  

</div>

<div className="flex justify-center gap-3 mb-8">
  <span className="px-5 py-3 rounded-2xl bg-black/30 border border-white/20 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 cursor-pointer">
    Lemon.io
  </span>

  <span className="px-5 py-3 rounded-2xl bg-black/30 border border-white/20 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 cursor-pointer">
    Data Annotation
  </span>

  <span className="px-5 py-3 rounded-2xl bg-black/30 border border-white/20 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 cursor-pointer">
    Contra
  </span>
</div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-10">

  <button 
    onClick={() =>
    document.querySelector("#experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className="bg-[#d4af37] text-black px-10 py-4 rounded-2xl font-bold border border-[#d4af37] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] active:scale-95 transition-all duration-300 cursor-pointer">
    ✦ Explore My Work
  </button>

  <button 
  onClick={() =>
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  className="px-10 py-4 rounded-2xl font-bold border border-white/30 bg-black/30 backdrop-blur-md hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 cursor-pointer">
    Get In Touch
  </button>

</div>
            {/* Social Icons */}

            <div className="mt-20 flex justify-center">
  <FaHandPointDown
    className="text-[#d4af37] text-4xl animate-bounce"
  />
</div>
          </div>
        </section>


        {/* ABOUT */}
<motion.section
id="about" 
  
  className="scroll-mt-28 pt-0 pb-20 px-6 bg-[#06030f] relative overflow-hidden"
>


<motion.div
  className="absolute left-20 top-40 w-32 h-32 border border-yellow-400/5 rotate-45"
  animate={{ rotate: [45, 405] }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
/>
<motion.div
  className="absolute right-20 top-72 w-24 h-24 border border-yellow-400/10 rotate-45"
  animate={{ rotate: [45, 405] }}
  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
/>

<motion.div
 animate={{ y:[0,10,0] }}
 transition={{ repeat:Infinity,duration:1.5 }}
 className="text-[#d4af37] text-3xl text-center mb-10"
>
 ᗐ
</motion.div>
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-6xl mx-auto text-center"
>
</motion.div>

  <motion.div
  whileHover={{ scale: 1.02 }}
  className="flex items-center justify-center gap-6 mb-8"
>

  <div className="flex gap-1">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>
<FaBookOpen className="text-[#d4af37] text-3xl" />
 <motion.h2
  
  whileHover={{
    scale: 1.08,
    textShadow:
      "0px 0px 10px rgba(212,175,55,0.8), 0px 0px 25px rgba(212,175,55,0.6)"
  }}
  whileTap={{
    scale: 0.88,
      rotate:-1
  }}
  transition={{ duration: 0.3 }}
  className="text-4xl font-bold text-white cursor-pointer select-none about-glow"
>
  About Me
</motion.h2>

  <div className="flex gap-1">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</motion.div>

<div className="flex items-center justify-center -mt-8 mb-8 ml-8">

  

  <div className="flex items-center mx-4">
  <span className="text-[#d4af37] text-xl">✦</span>
  <span className="text-[#d4af37] text-2xl mx-2">◆</span>
  <span className="text-[#d4af37] text-xl">✦</span>
</div>

  

</div>


    <div className="flex flex-col items-center justify-center gap-8 mb-8">

  {/* Profile Circle */}
  <div
  className="
             w-56 h-56 rounded-full
             border-[5px] border-[#d4af37]"
></div>

  {/* Summary Card */}


  <div className="max-w-2xl">

    <p
initial={{
  opacity:0,
  y:150
}}
whileInView={{
  opacity:1,
  y:0
}}
viewport={{ once:true }}
transition={{
  duration:1.3,
  ease:[0.22,1,0.36,1]
}}
className="
max-w-2xl
mx-auto
rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-md
p-8
transition-all
duration-500
hover:scale-[1.03]
hover:border-[#d4af37]
hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
text-gray-300
"
>
  
{"Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions."
  .split(" ")
  .map((word, index) => (
    <span
      key={index}
      className="inline-block mr-2"
    >
      {word}
    </span>
))}
    </p>
    </div>
    </div>
    
{/* Shapes */}
  
    <div className="mt-8 text-center">
      <h3 className="tracking-[6px] text-[#d4af37] uppercase mb-10">
        Organizations & Platforms
      </h3>

    </div>
    <div className="overflow-hidden w-full">
  <div className="marquee-wrapper">
  <div className="marquee-track">

    <span className="flex items-center gap-2">
  <FaLinkedin />
  LinkedIn
</span>

<span className="flex items-center gap-2">
  <FaGithub />
  GitHub
</span>

<span className="flex items-center gap-2">
  <FaChartBar />
  Power BI
</span>

<span className="flex items-center gap-2">
  <FaDatabase />
  SQL
</span>

<span className="flex items-center gap-2">
  <FaPython />
  Python
</span>

<span className="flex items-center gap-2">
  <FaLinkedin />
  LinkedIn
</span>

<span className="flex items-center gap-2">
  <FaGithub />
  GitHub
</span>

<span className="flex items-center gap-2">
  <FaChartBar />
  Power BI
</span>

<span className="flex items-center gap-2">
  <FaDatabase />
  SQL
</span>

<span className="flex items-center gap-2">
  <FaPython />
  Python
</span>

<span className="flex items-center gap-2">
  <FaLinkedin />
  LinkedIn
</span>

<span className="flex items-center gap-2">
  <FaGithub />
  GitHub
</span>

<span className="flex items-center gap-2">
  <FaChartBar />
  Power BI
</span>

<span className="flex items-center gap-2">
  <FaDatabase />
  SQL
</span>

<span className="flex items-center gap-2">
  <FaPython />
  Python
</span>

<span className="flex items-center gap-2">
  <FaLinkedin />
  LinkedIn
</span>

<span className="flex items-center gap-2">
  <FaGithub />
  GitHub
</span>

<span className="flex items-center gap-2">
  <FaChartBar />
  Power BI
</span>

<span className="flex items-center gap-2">
  <FaDatabase />
  SQL
</span>

<span className="flex items-center gap-2">
  <FaPython />
  Python
</span>

<span className="flex items-center gap-2">
  <FaLinkedin />
  LinkedIn
</span>

<span className="flex items-center gap-2">
  <FaGithub />
  GitHub
</span>

<span className="flex items-center gap-2">
  <FaChartBar />
  Power BI
</span>

<span className="flex items-center gap-2">
  <FaDatabase />
  SQL
</span>

<span className="flex items-center gap-2">
  <FaPython />
  Python
</span>

  </div>
</div>
</div>

  <motion.div
  whileHover={{ scale: 1.02 }}
  className="flex items-center justify-center gap-6 mt-28 mb-8"
>

  <div className="flex gap-1">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>
<FaGraduationCap className="text-[#d4af37] text-3xl" />
 <motion.h2

  whileHover={{
    scale: 1.08,
    textShadow:
      "0px 0px 10px rgba(212,175,55,0.8), 0px 0px 25px rgba(212,175,55,0.6)"
  }}
  whileTap={{
    scale: 0.88,
      rotate:-1
  }}
  transition={{ duration: 0.3 }}
  className="text-4xl font-bold text-white cursor-pointer select-none about-glow"
>
  Education
</motion.h2>

  <div className="flex gap-1">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</motion.div>

<div className="flex items-center justify-center -mt-8 mb-8 ml-12">

  

  <div className="flex items-center mx-4">
  <span className="text-[#d4af37] text-xl">✦</span>
  <span className="text-[#d4af37] text-2xl mx-2">◆</span>
  <span className="text-[#d4af37] text-xl">✦</span>
</div>
</div>


<motion.div
  className="
  max-w-6xl
  mx-auto
  mt-10s
  mb-6
  rounded-3xl
  border border-white/10
  bg-white/5
  backdrop-blur-md
  p-8
  hover:border-[#d4af37]/50
  transition-all
  duration-300
"
>

<div className="flex justify-between items-start">

  <div>
    <h3 className="text-3xl font-bold text-white">
      ICFAI University, Jaipur
    </h3>

    <p className="text-[#d4af37] mt-2">
      Bachelor of Computer Application, Computer Application
    </p>
  </div>

  <div className="flex gap-3 items-center">
    <span className="px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full">
      GPA: 8.0
    </span>

    <span className="text-gray-300">
      May 2020 - Sep 2023
    </span>
  </div>

</div>


</motion.div>
<motion.div
className="
max-w-6xl
mx-auto
mt-10
mb-6
rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-md
p-8
hover:border-[#d4af37]/50
transition-all
duration-300
"
>

<div className="flex justify-between items-start flex-wrap gap-4">

<div>
<h3 className="text-3xl font-bold text-white">
Royal International
</h3>

<p className="text-[#d4af37] mt-2 font-semibold">
Senior Secondary(+2) — Computer Science, Physics, Chemistry, and Mathematics
</p>
</div>

<div className="flex gap-4 items-center flex-wrap">

<span className="px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full">
GPA: 7.0
</span>


<span className="text-gray-300">
March 2019 - May 2020
</span>
 
</div>

</div>
</motion.div>

<motion.div
  className="
    max-w-6xl
    mx-auto
    mt-6
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-6
    hover:border-[#d4af37]/50
    transition-all
    duration-300
  "
>
  <p className="text-gray-200 leading-relaxed">

  <span className="text-white font-semibold flex items-center gap-3 mb-2">
    <FaBookOpen className="text-[#d4af37] text-xl" />
    <span className="tracking-wide">Relevant Coursework:</span>
  </span>

 Advanced SQL, Database Management Systems, Data Structures & Algorithms, 
 Python for Data Analytics, Statistical Analysis, Probability & Statistics, 
 Linear Algebra, Calculus I-III, Data Mining, Machine Learning, 
 Deep Learning Fundamentals, Business Intelligence, Data Warehousing, 
 ETL Pipelines, Big Data Technologies, Predictive Modeling, Data Visualization, Microsoft Power BI, 
 Tableau, Advanced Excel Analytics, Cloud Data Engineering, 
 Artificial Intelligence, Object-Oriented Programming,
 Computer Architecture, Operations Research.

</p>
</motion.div>

<div id="experience" className="scroll-mt-28 text-center my-20">
  
  <div className="flex items-center justify-center gap-4">

    <div className="flex items-center gap-1">
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
    </div>

    <FaBriefcase className="text-[#d4af37] text-2xl" />

    <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:drop-shadow-[0_0_15px_#d4af37]
    hover:scale-105
    active:scale-95
  "
>
  Experience
</h2>



    <div className="flex items-center gap-1">
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
      <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
    </div>


  </div>
<div className="w-full flex justify-center">
  <div className="flex items-center mx-4 ml-12">
    <span className="text-[#d4af37] text-xl">✦</span>
    <span className="text-[#d4af37] text-2xl mx-2">◆</span>
    <span className="text-[#d4af37] text-xl">✦</span>
  </div>
</div>

<div className="relative max-w-6xl mx-auto py-20">

  <div className="absolute left-1/2 top-20 h-[1200px] w-[2px] bg-[#d4af37]/20 -translate-x-1/2 hidden md:block"></div>

  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        x: exp.side === "left" ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-16"
    >

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-10">
       <div className="w-14 h-14 rounded-full border-[3px] border-[#d4af37] bg-[#111] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
  <FaCode className="text-[#39ff88] text-2xl drop-shadow-[0_0_8px_#39ff88]" />
</div>
      </div>

      <div
    className={`w-full md:w-[53%]
  ${
    exp.side === "left"
      ? "md:mr-auto md:pr-16"
      : "md:ml-auto md:pl-16"
  }
  md:mt-10
  `}
>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-500">

          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 text-left">

              <h3 className="text-2xl font-bold text-white leading-tight">
                {exp.company}
              </h3>

              <p className="text-[#d4af37] font-semibold text-lg mt-1">
                {exp.role}
              </p>
            </div>

            <span className="text-gray-300 text-sm text-right min-w-[150px]">
              {exp.date}
            </span>
          </div>

          <ul className="space-y-6 mb-6 mt-5">
            {exp.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-gray-300 leading-8 text-[15px]"
              >
                <span className="text-[#d4af37] mt-[6px] text-lg flex-shrink-0">
                  •</span>
                <p className="text-left leading-8 tracking-normal max-w-[95%]">
  {point}
</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>

    </motion.div>
  ))}

</div>

</div>


{/* Research Section */}

<section id="research" className="py-24">
  

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaFlask className="text-[#d4af37] text-xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Research & Publications
  </h2>

  <div className="flex items-center gap-1">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-4 mt-1 text-[#ffd95e] text-2xl">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>
<div className="grid md:grid-cols-2 gap-8 mt-8">

  {/* Card 3 */}
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-500">

    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-2xl font-bold text-white">
          Research Project Three
        </h3>

        <p className="text-[#d4af37] font-semibold text-lg">
          AI Researcher
        </p>
      </div>

      <span className="text-gray-300 text-sm">
        June 2024 - Present
      </span>
    </div>

    <ul className="space-y-3 mb-5 text-gray-300">
      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Developed advanced AI systems using modern machine learning pipelines.
      </li>

      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Implemented scalable architectures for large-scale data processing.
      </li>

      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Published findings and collaborated with research teams.
      </li>
    </ul>

    <a
      href="#"
      className="inline-flex items-center gap-2 text-[#d4af37] font-semibold mb-4"
    >
      <FaGithub/>
      View on GitHub
    </a>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">Python</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">TensorFlow</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">NLP</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">LLM</span>
    </div>

  </div>

  {/* Card 4 */}
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-500">

    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-2xl font-bold text-white">
          Research Project Four
        </h3>

        <p className="text-[#d4af37] font-semibold text-lg">
          AI Researcher
        </p>
      </div>

      <span className="text-gray-300 text-sm">
        June 2024 - Present
      </span>
    </div>

    <ul className="space-y-3 mb-5 text-gray-300">
      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Built intelligent systems for real-time prediction and analytics.
      </li>

      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Optimized model performance through distributed computing methods.
      </li>

      <li className="flex gap-2">
        <span className="text-[#d4af37]">•</span>
        Worked with multidisciplinary teams on cutting-edge AI solutions.
      </li>
    </ul>

    <a
      href="#"
      className="inline-flex items-center gap-2 text-[#d4af37] font-semibold mb-4"
    >
          <FaGithub/>
      View on GitHub
    </a>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">PyTorch</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">Deep Learning</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">Computer Vision</span>
      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white">AI</span>
    </div>

  </div>

</div>
</section>

{/* Project Section */}

<section id="projects" className="scroll-mt-28 py-24">
  

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaLightbulb className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Project
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-8">
  {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="
group
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-[28px]
p-6
transition-all
duration-300
cursor-pointer
hover:-translate-y-2
hover:border-[#d4af37]/50
hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
"
    >
      <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#ffd95e]">
        {project.title}
      </h3>

      <p className="text-gray-300 leading-relaxed mb-5">
        {project.desc}
      </p>

      <a
        href="#"
        className="
flex
items-center
gap-2
text-[#ffd95e]
font-semibold
mb-4
transition-all
duration-300
hover:scale-105
hover:text-[#fff176]
hover:drop-shadow-[0_0_12px_#ffd95e]
"
      >
        <FaExternalLinkAlt />
        GitHub
      </a>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>

<div className="flex justify-center mt-8">
  <button
  onClick={() => setShowAllProjects(!showAllProjects)}
  className="
    px-6 py-2
    border border-[#d4af37]/50
    rounded-xl
    text-white text-sm font-semibold
    flex items-center gap-2
    hover:border-[#d4af37]
    hover:text-[#d4af37]
    hover:shadow-[0_0_20px_#d4af37]
    hover:scale-105
    active:scale-95
    transition-all duration-300
  "
>
  <span className="text-xs">
    {showAllProjects ? "▲" : "▼"}
  </span>

  {showAllProjects
    ? "Show Less"
    : `View All ${projects.length} Projects`}
</button>
</div>

</section>
{/* Leadership & Involvement Section */}

<section id="Leadership" className="py-24">

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaUsers className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Leadership & Involvement
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-12">

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_25px_#d4af37] hover:scale-105 transition-all duration-300"
  >
    <h3 className="text-white text-xl font-bold mb-2">
      Stanford SERIS Scholar
    </h3>

    <p className="text-[#d4af37] font-semibold">
      Stanford University School of Engineering
    </p>

    <p className="text-gray-300 font-semibold mb-4">
      Dec 2024 - Feb 2025
    </p>

    <p className="text-gray-300 leading-relaxed">
      Competitively selected as 1 of 23 undergraduates across the U.S.
      for Stanford’s Engineering Research Introduction Scholar Program.
      Engaged with world-class researchers and faculty.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_25px_#d4af37] hover:scale-105 transition-all duration-300"
  >
    <h3 className="text-white text-xl font-bold mb-2">
      Break Through Tech AI Fellow
    </h3>

    <p className="text-[#d4af37] font-semibold">
      Break Through Tech (Cornell University)
    </p>

    <p className="text-gray-300 font-semibold mb-4">
      Mar 2025 - Jun 2025
    </p>

    <p className="text-gray-300 leading-relaxed">
      Selected as one of 1,000 fellows nationwide for a rigorous AI/ML
      program. Completed Machine Learning Foundations coursework and
      AI Studio projects with real-world datasets.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_25px_#d4af37] hover:scale-105 transition-all duration-300"
  >
    <h3 className="text-white text-xl font-bold mb-2">
      Girls Who Code Club — Founder & President
    </h3>

    <p className="text-[#d4af37] font-semibold">
      College of San Mateo
    </p>

    <p className="text-gray-300 font-semibold mb-4">
      Apr 2024 - May 2025
    </p>

    <p className="text-gray-300 leading-relaxed">
      Founded and led the Girls Who Code Club, organizing coding
      workshops, guest speaker events, and community outreach to
      promote diversity and inclusion in STEM.
    </p>
  </motion.div>

</div>
</section>

{/* Technical Skills */}

<section id="skills" className="scroll-mt-28 py-24">
  

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaUserSecret className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Technical Skills
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>
</section>

<div className="grid md:grid-cols-3 gap-8 mt-12">

  {/* Languages */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 0 25px rgba(212,175,55,0.25)"
    }}
    className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
  >
    <h3 className="text-[#d4af37] text-2xl font-bold mb-5">
      Languages
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "Java",
        "Python",
        "C++",
        "SQL",
        "JavaScript",
        "TypeScript",
        "PHP",
        "HTML/CSS",
        "Julia",
        "LaTeX",
        "MatLab",
        "LangChain",
      ].map((item) => (
        <span
          key={item}
          className="
px-3 py-1
rounded-lg
bg-white/10
text-white
text-sm
border border-white/10
transition-all duration-300
cursor-pointer

hover:bg-[#d4af37]/20
hover:text-[#d4af37]
hover:border-[#d4af37]/50
hover:shadow-[0_0_15px_#d4af37]

hover:scale-110
active:scale-95
"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Frameworks */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 0 25px rgba(212,175,55,0.25)"
    }}
    className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
  >
    <h3 className="text-[#d4af37] text-2xl font-bold mb-5">
      Frameworks
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "React",
        "Node.js",
        "Next.js",
        "WordPress",
        "GraphQL",
        "Django",
        "Flask",
        "Express.js",
      ].map((item) => (
        <span
          key={item}
          className="
px-3 py-1
rounded-lg
bg-white/10
text-white
text-sm
border border-white/10
transition-all duration-300
cursor-pointer

hover:bg-[#d4af37]/20
hover:text-[#d4af37]
hover:border-[#d4af37]/50
hover:shadow-[0_0_15px_#d4af37]

hover:scale-110
active:scale-95
"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Developer Tools */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 0 25px rgba(212,175,55,0.25)"
    }}
    className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
  >
    <h3 className="text-[#d4af37] text-2xl font-bold mb-5">
      Developer Tools
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Kubernetes",
        "VS Code",
        "JIRA",
      ].map((item) => (
        <span
          key={item}
          className="
px-3 py-1
rounded-lg
bg-white/10
text-white
text-sm
border border-white/10
transition-all duration-300
cursor-pointer

hover:bg-[#d4af37]/20
hover:text-[#d4af37]
hover:border-[#d4af37]/50
hover:shadow-[0_0_15px_#d4af37]

hover:scale-110
active:scale-95
"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Libraries */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 0 25px rgba(212,175,55,0.25)"
    }}
    className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
  >
    <h3 className="text-[#d4af37] text-2xl font-bold mb-5">
      Libraries
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Mayavi",
        "SciPy",
        "Seaborn",
        "OpenAI API",
      ].map((item) => (
        <span
          key={item}
          className="
px-3 py-1
rounded-lg
bg-white/10
text-white
text-sm
border border-white/10
transition-all duration-300
cursor-pointer

hover:bg-[#d4af37]/20
hover:text-[#d4af37]
hover:border-[#d4af37]/50
hover:shadow-[0_0_15px_#d4af37]

hover:scale-110
active:scale-95
"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Databases */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.4 }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 0 25px rgba(212,175,55,0.25)"
    }}
    className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
  >
    <h3 className="text-[#d4af37] text-2xl font-bold mb-5">
      Databases
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "SQLite",
      ].map((item) => (
        <span
          key={item}
          className="
px-3 py-1
rounded-lg
bg-white/10
text-white
text-sm
border border-white/10
transition-all duration-300
cursor-pointer

hover:bg-[#d4af37]/20
hover:text-[#d4af37]
hover:border-[#d4af37]/50
hover:shadow-[0_0_15px_#d4af37]

hover:scale-110
active:scale-95
"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

</div>



{/* Certifications */}

<section id="certifications" className="scroll-mt-28 py-24">

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaAward className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Certifications
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-12">
  {(showAllCertifications
    ? certifications
    : certifications.slice(0, 6)
  ).map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow:
          "0 0 25px rgba(212,175,55,0.25)",
      }}
      className="
        bg-[#111827]/70
        border border-white/10
        rounded-2xl
        p-6
        backdrop-blur-md
      "
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-white font-bold text-lg">
            {cert.title}
          </h3>

          <p className="text-[#d4af37] font-semibold mt-2">
            {cert.issuer}
          </p>
        </div>

        <span className="text-gray-400 text-sm whitespace-nowrap">
          {cert.date}
        </span>
      </div>
    </motion.div>
  ))}
</div>

<button
  onClick={() => setShowAllCertifications(!showAllCertifications)}
  className="
    flex items-center gap-2
    mx-auto mt-10
    px-6 py-3
    rounded-xl
    border border-[#d4af37]/50
    text-white
    hover:text-[#d4af37]
    hover:border-[#d4af37]
    hover:shadow-[0_0_15px_#d4af37]
    hover:scale-105
    active:scale-95
    transition-all duration-300
  "
>
  <span className="text-xs">
    {showAllCertifications ? "▲" : "▼"}
  </span>

  {showAllCertifications
    ? "Show Less"
    : `View All ${certifications.length} Certifications`}
</button>
</section>

{/* Recommendation Section */}

<section id="Recommendation" className="py-24">

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <FaRegCommentDots className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Recommendation
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>

<div className="max-w-6xl mx-auto"></div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{
    y: -6,
    scale: 1.01,
    boxShadow: "0 0 30px rgba(212,175,55,0.25)",
  }}
  whileTap={{
    scale: 0.98,
    boxShadow: "0 0 40px rgba(212,175,55,0.4)",
  }}
  className="
    max-w-6xl
    mx-auto
    mt-16
    bg-[#111827]/60
    border border-white/10
    rounded-2xl
    p-8
    backdrop-blur-md
  "
>
    <FaQuoteLeft className="text-[#d4af37] text-4xl mb-6 opacity-80" />

    <p className="text-gray-200 text-xl leading-relaxed italic">
      "I had the pleasure of working with Puneet during multiple
      development and AI projects. He consistently demonstrated
      strong problem-solving skills, technical curiosity and a
      commitment to delivering quality work. His ability to learn
      quickly and adapt to new technologies makes him a valuable
      contributor to any team."
    </p>

    <div className="mt-8 pt- border-t border-white/10">
      <h3 className="text-white text-2xl font-bold">
        John Smith
      </h3>

      <p className="text-[#d4af37] text-lg font-semibold mt-2">
        Senior Software Engineer | AI Research Mentor
      </p>

      <p className="text-gray-400 mt-2">
        Technology Industry Professional
      </p>
    </div>
  </motion.div>

</section>


{/* Get in Touch*/}

<section  id="contact" className="scroll-mt-28 py-24">
   
  

  <div className="flex items-center justify-center gap-4 -mt-8">
<div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

  <HiOutlineMail className="text-[#d4af37] text-2xl" />

  <h2
  className="
    text-4xl
    font-bold
    text-white
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    hover:drop-shadow-[0_0_20px_#ffd95e]
    active:scale-95
  "
>
    Get in Touch
  </h2> 

  <div className="flex items-center justify-center gap-4">
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
  <div className="w-4 h-2 border border-[#d4af37]/40 rounded-full"></div>
</div>

</div>

<div className="flex justify-center gap-2 mt-1 text-[#ffd95e] text-2xl ml-8">
  <span>✦</span>
  <span>◆</span>
  <span>✦</span>
</div>

<div className="max-w-4xl mx-auto mt-12 text-center">
  <p className="text-gray-300 text-xl leading-relaxed mb-10">
    I'm always open to discussing new opportunities, collaborations, or
    just connecting. Feel free to reach out!
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    
    <a
      href="mailto:yourmail@gmail.com"
      className="
bg-[#ffd95e]
text-black
px-6 py-3
rounded-xl
font-medium
text-lg
flex items-center gap-2
shadow-lg
cursor-pointer
transition-all duration-300
hover:scale-105
hover:shadow-[0_0_30px_rgba(255,217,94,0.8)]
active:scale-95
"
    >
      <HiOutlineMail className="text-2xl" />
      parasgoswami1156@gmail.com
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
border border-white/20
px-6 py-3
rounded-xl
text-white
font-medium
text-lg
flex items-center gap-2
cursor-pointer
transition-all duration-300
hover:border-[#ffd95e]
hover:text-[#ffd95e]
hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]
hover:scale-105
active:scale-95
"
    >
      <FaLinkedin className="text-2xl" />
      Follow on LinkedIn
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
border border-white/20
px-6 py-3
rounded-xl
text-white
font-medium
text-lg
flex items-center gap-2
cursor-pointer
transition-all duration-300
hover:border-[#ffd95e]
hover:text-[#ffd95e]
hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]
hover:scale-105
active:scale-95
"
    >
      <FaGithub className="text-2xl" />
      GitHub
    </a>

  </div>
</div>

</section>

<div className="mt-40 pt-4 border-t border-white/10 text-center">

  <div className="flex items-center justify-center gap-4 mb-4">
    

    <span className="text-[#d4af37] text-sm">✦ ✦ ✦</span>

    <h3 className="text-white text-2xl font-serif font-semibold">
      Puneet Goswami
    </h3>

    <span className="text-[#d4af37] text-sm">✦ ✦ ✦</span>

    
  </div>

  <p className="text-gray-400 text-lg">
    © 2026 Puneet Goswami
  </p>

</div>

</motion.section>

      </div>
    </main>
  );
}  
