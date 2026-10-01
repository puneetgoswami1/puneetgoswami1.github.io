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
      history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo(0, 0);
  }, []);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const certifications = [
    { title: "Google IT Automation with Python", issuer: "Google", date: "Apr 2025" },
    { title: "Introduction to AI in Digital Marketing", issuer: "HubSpot", date: "Mar 2025" },
    { title: "Configuration Management and the Cloud", issuer: "Google", date: "Jan 2025" },
    { title: "Troubleshooting and Debugging Techniques", issuer: "Google", date: "Dec 2024" },
    { title: "Introduction to Git and GitHub", issuer: "Google", date: "Dec 2024" },
    { title: "Using Python to Interact with the Operating System", issuer: "Google", date: "Dec 2024" },
    { title: "Crash Course on Python", issuer: "Google", date: "Dec 2024" },
    { title: "Stanford Science Small Groups — U-Net AI for Biomedical Image Segmentation", issuer: "Stanford University", date: "Nov 2024" },
    { title: "Stanford CCOP Bootcamp — Certificate of Completion", issuer: "Stanford University", date: "Aug 2024" },
    { title: "Stanford Fair for Community College Students", issuer: "Stanford University", date: "May 2025" },
    { title: "IRB Administration", issuer: "CITI Program", date: "Jun 2024" },
    { title: "Responsible Conduct of Research for Engineers", issuer: "CITI Program", date: "Jun 2024" },
    { title: "Stanford Code in Place — Certificate of Completion", issuer: "Stanford / Code in Place", date: "Jun 2024" },
  ];

  const projects = [
    { title: "AI Research Assistant", desc: "Built an advanced AI research assistant using LLMs, RAG pipelines and vector databases for semantic search.", tech: ["Python", "OpenAI", "RAG", "Vector DB"] },
    { title: "Medical Image Analysis", desc: "Deep learning system for automated disease detection from radiology images using CNN architectures.", tech: ["PyTorch", "CNN", "Medical AI", "CV"] },
    { title: "Fraud Detection System", desc: "Machine learning platform for detecting financial fraud using anomaly detection techniques.", tech: ["Python", "ML", "XGBoost", "Analytics"] },
    { title: "Smart Traffic Prediction", desc: "Predictive traffic management platform using AI and real-time sensor data.", tech: ["AI", "Prediction", "Data Science", "IoT"] },
    { title: "NLP Sentiment Engine", desc: "Natural language processing engine capable of classifying sentiment from large scale datasets.", tech: ["NLP", "Transformers", "BERT", "Python"] },
    { title: "Computer Vision Surveillance", desc: "Real-time object detection and monitoring platform using YOLO and OpenCV.", tech: ["YOLO", "OpenCV", "CV", "AI"] },
    { title: "3D Geological Visualization Tool", desc: "Interactive 3D subsurface visualization tool using Python and Mayavi for volumetric geological datasets.", tech: ["Python", "Mayavi", "NumPy", "PyVista"] },
    { title: "Computer Science Club Website", desc: "Full-stack website featuring AI chatbot, gallery, team section and contact forms.", tech: ["JavaScript", "HTML/CSS", "AI Chatbot", "Full-Stack"] },
    { title: "Girls Who Code Club Website", desc: "Platform promoting diversity and inclusion with events, membership signup and contact forms.", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    { title: "Network Connectivity Monitor", desc: "Raspberry Pi based monitoring system with real-time network status indicators.", tech: ["Python", "Raspberry Pi", "GPIO", "Networking"] },
    { title: "K-12 STEM Enrichment Platform", desc: "Responsive STEM learning platform built using React, Astro and Firebase.", tech: ["React", "Astro", "Firebase", "Tailwind CSS"] },
    { title: "Automated Attendance System", desc: "Attendance management system using image recognition and automation workflows.", tech: ["Python", "SikuliX", "Automation"] }
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
      skills: ["SQL", "Excel", "Power BI", "Data Cleaning", "Data Visualization"]
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
      skills: ["SQL", "Excel", "Power BI", "Data Analysis", "Dashboard Development"]
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
      skills: ["SQL", "Python", "Power BI", "Excel", "Business Intelligence"]
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
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        backgroundImage: "url('/mosq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen bg-black/50">

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center z-50 transition-all duration-300 ${
            scrolled
              ? "bg-black/70 backdrop-blur-md border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <h1 className="text-xl sm:text-2xl font-serif font-black tracking-wider text-[#e8cb76] cursor-pointer hover:text-[#ffd978] hover:scale-105 active:scale-95 transition-all duration-300">
            P.G.
          </h1>
          <ul className="hidden lg:flex items-center gap-6 text-sm text-white font-medium">
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#about">About</a></li>
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#experience">Experience</a></li>
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#projects">Projects</a></li>
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#skills">Skills</a></li>
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#certifications">Certifications</a></li>
            <li className="hover:text-[#e8cb76] transition-all duration-200 cursor-pointer font-semibold"><a href="#contact">Contact</a></li>
          </ul>

          <div className="flex items-center gap-4 sm:gap-5 text-lg sm:text-xl text-gray-300">
            <FaLinkedin
              onClick={() => window.open("https://www.linkedin.com/in/puneetgoswami-ai/", "_blank")}
              className="hover:text-[#e8cb76] hover:scale-110 cursor-pointer transition-all duration-200"
            />
            <FaGithub
              onClick={() => window.open("https://github.com/puneetgoswami1", "_blank")}
              className="hover:text-[#e8cb76] hover:scale-110 cursor-pointer transition-all duration-200"
            />
            <FaEnvelope
              onClick={() => window.location.href = "mailto:parasgoswami1156@gmail.com"}
              className="hover:text-[#e8cb76] hover:scale-110 cursor-pointer transition-all duration-200"
            />
          </div>
        </nav>

        {/* HERO SECTION - Style matching Heba Alazzeh */}
        <section className="min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 relative pt-24 sm:pt-28 pb-6 sm:pb-8">
          
          {/* Lightweight Background Stars to Remove Lag */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="star opacity-60"
                style={{
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 23) % 90}%`,
                  animationDelay: `${i * 0.4}s`,
                  fontSize: `${(i % 3) + 3}px`,
                }}
              >
                ✦
              </div>
            ))}
          </div>

          {/* Smooth Background Ambient Glow */}
          <div className="absolute bottom-0 left-0 w-full h-72 pointer-events-none z-0 transform-gpu bg-gradient-to-t from-[#e8cb76]/10 via-transparent to-transparent blur-2xl" />

          {/* Center Content */}
          <div className="max-w-4xl w-full my-auto z-10">
            
            {/* Top Sparkle Star */}
            <div className="flex justify-center mb-3">
              <span className="text-[#e8cb76] text-2xl drop-shadow-[0_0_12px_rgba(232,203,118,0.7)] animate-pulse">
                ✦
              </span>
            </div>

            {/* Subtitle in exact Heba Alazzeh style */}
            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[#e8cb76] text-[11px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4">
              DATA ANALYST • SQL • PYTHON
            </p>

            {/* Name - Exact Serif Typography and Golden Color from Image 1 */}
            <h1
              className="font-serif text-[42px] sm:text-6xl md:text-[76px] font-medium tracking-tight text-[#f5deb3] mb-3 sm:mb-4 leading-none"
              style={{
                color: "#e8cb76",
                textShadow: "0 0 35px rgba(232,203,118,0.35)",
              }}
            >
              Puneet Goswami
            </h1>

            {/* Role Tagline */}
            <h2 className="font-serif italic text-sm sm:text-lg md:text-xl text-gray-300 font-light mb-5 sm:mb-6">
              Data Analyst • AI Researcher
            </h2>

            {/* Details with icons */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-gray-300 text-xs sm:text-sm mb-6">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-[#e8cb76] text-xs" />
                Rajasthan, India
              </span>
              <span className="text-gray-500">|</span>
              <span className="flex items-center gap-1.5">
                <FaGraduationCap className="text-[#e8cb76] text-sm" />
                BCA ICFAI University
              </span>
            </div>

            {/* Company / Platform Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-7 sm:mb-8">
              {["Lemon.io", "Data Annotation", "Contra"].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs rounded-xl bg-black/40 border border-white/10 text-gray-200 hover:border-[#e8cb76]/60 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons matching Heba Alazzeh */}
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 px-2 max-w-md mx-auto">
              <button
                onClick={() =>
                  document.querySelector("#experience")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="flex-1 bg-[#ebb236] hover:bg-[#f5be42] text-black font-semibold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl shadow-lg transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span>☆</span> Explore My Work
              </button>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="flex-1 border border-white/20 hover:border-white/40 bg-black/40 backdrop-blur-md text-white font-medium px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm active:scale-95 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Hand Icon - Screen ke ekdum bottom edge par pinned on Mobile */}
          <div className="z-20 mt-auto pt-4 md:pt-0">
            <FaHandPointDown
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="text-[#ebb236] text-2xl sm:text-3xl animate-bounce cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="scroll-mt-28 pt-4 pb-2 px-4 sm:px-6 bg-[#06030f] relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-2 md:mb-4">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaBookOpen className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer select-none about-glow whitespace-nowrap">
              About Me
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          {/* About Stars */}
          <div className="flex items-center justify-center mt-0 mb-6 md:mb-8">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
              <span className="text-[#d4af37] text-sm md:text-2xl">◆</span>
              <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mb-8">
            <div className="w-36 h-36 md:w-56 md:h-56 rounded-full border-[4px] md:border-[5px] border-[#d4af37]"></div>

            <div className="max-w-2xl px-2">
              <p className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 text-gray-300 text-sm sm:text-base leading-relaxed">
                Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions.
              </p>
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-6 md:mt-8 text-center">
            <h3 className="tracking-[4px] sm:tracking-[6px] text-[#d4af37] uppercase text-xs sm:text-sm mb-6 md:mb-10">
              Organizations & Platforms
            </h3>
          </div>
          <div className="overflow-hidden w-full">
            <div className="marquee-wrapper">
              <div className="marquee-track">
                <span className="flex items-center gap-2"><FaLinkedin /> LinkedIn</span>
                <span className="flex items-center gap-2"><FaGithub /> GitHub</span>
                <span className="flex items-center gap-2"><FaChartBar /> Power BI</span>
                <span className="flex items-center gap-2"><FaDatabase /> SQL</span>
                <span className="flex items-center gap-2"><FaPython /> Python</span>
                <span className="flex items-center gap-2"><FaLinkedin /> LinkedIn</span>
                <span className="flex items-center gap-2"><FaGithub /> GitHub</span>
                <span className="flex items-center gap-2"><FaChartBar /> Power BI</span>
                <span className="flex items-center gap-2"><FaDatabase /> SQL</span>
                <span className="flex items-center gap-2"><FaPython /> Python</span>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-14 md:mt-28 mb-2 md:mb-4">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaGraduationCap className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer select-none about-glow whitespace-nowrap">
              Education
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          {/* Education Stars */}
          <div className="flex items-center justify-center mt-0 mb-6 md:mb-8">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
              <span className="text-[#d4af37] text-sm md:text-2xl">◆</span>
              <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 hover:border-[#d4af37]/50 transition-all duration-300">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-3">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white">ICFAI University, Jaipur</h3>
                <p className="text-[#d4af37] mt-1 text-sm sm:text-base">Bachelor of Computer Application, Computer Application</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="px-3 md:px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs sm:text-sm">GPA: 8.0</span>
                <span className="text-gray-300 text-xs sm:text-sm">May 2020 - Sep 2023</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 hover:border-[#d4af37]/50 transition-all duration-300">
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white">Royal International</h3>
                <p className="text-[#d4af37] mt-1 text-sm sm:text-base font-semibold">Senior Secondary(+2) — Computer Science, Physics, Chemistry, and Mathematics</p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <span className="px-3 md:px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs sm:text-sm">GPA: 7.0</span>
                <span className="text-gray-300 text-xs sm:text-sm">March 2019 - May 2020</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 hover:border-[#d4af37]/50 transition-all duration-300">
            <p className="text-gray-200 text-xs sm:text-base leading-relaxed">
              <span className="text-white font-semibold flex items-center gap-2 mb-2">
                <FaBookOpen className="text-[#d4af37] text-lg sm:text-xl" />
                <span className="tracking-wide">Relevant Coursework:</span>
              </span>
              Advanced SQL, Database Management Systems, Data Structures & Algorithms, Python for Data Analytics, Statistical Analysis, Probability & Statistics, Linear Algebra, Machine Learning, Deep Learning, Business Intelligence, Data Warehousing, Microsoft Power BI.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div id="experience" className="scroll-mt-28 text-center my-10 md:my-20">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaBriefcase className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Experience
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            {/* Experience Stars */}
            <div className="w-full flex justify-center mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-1.5 md:gap-2">
                <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
                <span className="text-[#d4af37] text-sm md:text-2xl">◆</span>
                <span className="text-[#d4af37] text-xs md:text-xl">✦</span>
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto py-4 md:py-20">
              <div className="absolute left-1/2 top-[120px] h-[1050px] w-[2px] bg-[#d4af37]/20 -translate-x-1/2 hidden md:block"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative mb-6 sm:mb-16"
                >
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-10">
                    <div className="w-14 h-14 rounded-full border-[3px] border-[#d4af37] bg-[#111] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      <FaCode className="text-[#39ff88] text-2xl drop-shadow-[0_0_8px_#39ff88]" />
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-[50%] ${
                      exp.side === "left"
                        ? "md:mr-auto md:pr-4 md:translate-y-8"
                        : "md:ml-auto md:pl-4 md:translate-y-8"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-[#d4af37] font-semibold text-base sm:text-lg mt-1">
                            {exp.role}
                          </p>
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm text-right min-w-[110px]">
                          {exp.date}
                        </span>
                      </div>

                      <ul className="space-y-3 sm:space-y-6 mb-4 sm:mb-6 mt-3 sm:mt-5">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 sm:gap-4 text-gray-300 leading-6 sm:leading-8 text-xs sm:text-[15px]"
                          >
                            <span className="text-[#d4af37] mt-[2px] sm:mt-[6px] text-base sm:text-lg flex-shrink-0">•</span>
                            <p className="text-left max-w-[95%]">{point}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESEARCH */}
          <section id="research" className="py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaFlask className="text-[#d4af37] text-base sm:text-xl flex-shrink-0" />

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Research & Publications
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-4 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Research Project Three</h3>
                    <p className="text-[#d4af37] font-semibold text-base sm:text-lg">AI Researcher</p>
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm">June 2024 - Present</span>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 text-gray-300 text-xs sm:text-base">
                  <li className="flex gap-2"><span className="text-[#d4af37]">•</span> Developed advanced AI systems using machine learning pipelines.</li>
                  <li className="flex gap-2"><span className="text-[#d4af37]">•</span> Implemented scalable architectures for large-scale data processing.</li>
                </ul>

                <a href="#" className="inline-flex items-center gap-2 text-[#d4af37] font-semibold text-xs sm:text-base mb-4">
                  <FaGithub /> View on GitHub
                </a>

                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "NLP", "LLM"].map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Research Project Four</h3>
                    <p className="text-[#d4af37] font-semibold text-base sm:text-lg">AI Researcher</p>
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm">June 2024 - Present</span>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 text-gray-300 text-xs sm:text-base">
                  <li className="flex gap-2"><span className="text-[#d4af37]">•</span> Built intelligent systems for real-time prediction and analytics.</li>
                  <li className="flex gap-2"><span className="text-[#d4af37]">•</span> Optimized model performance through distributed computing methods.</li>
                </ul>

                <a href="#" className="inline-flex items-center gap-2 text-[#d4af37] font-semibold text-xs sm:text-base mb-4">
                  <FaGithub /> View on GitHub
                </a>

                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Deep Learning", "Computer Vision", "AI"].map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-28 py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaLightbulb className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Project
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#ffd95e] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <a href="#" className="flex items-center gap-2 text-[#ffd95e] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                      <FaExternalLinkAlt /> GitHub
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-5 sm:px-6 py-2.5 border border-[#d4af37]/50 rounded-xl text-white text-xs sm:text-sm font-semibold flex items-center gap-2 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
              >
                <span className="text-xs">{showAllProjects ? "▲" : "▼"}</span>
                {showAllProjects ? "Show Less" : `View All ${projects.length} Projects`}
              </button>
            </div>
          </section>

          {/* LEADERSHIP */}
          <section id="Leadership" className="py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaUsers className="text-[#d4af37] text-base sm:text-2xl flex-shrink-0" />

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Leadership & Involvement
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1.5">Stanford SERIS Scholar</h3>
                <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">Stanford University School of Engineering</p>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-3">Dec 2024 - Feb 2025</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Competitively selected as 1 of 23 undergraduates across the U.S. for Stanford’s Engineering Research Introduction Scholar Program.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1.5">Break Through Tech AI Fellow</h3>
                <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">Break Through Tech (Cornell University)</p>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-3">Mar 2025 - Jun 2025</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Selected as one of 1,000 fellows nationwide for a rigorous AI/ML program. Completed ML coursework and AI Studio projects.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1.5">Girls Who Code Club — President</h3>
                <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">College of San Mateo</p>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-3">Apr 2024 - May 2025</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Founded and led the Girls Who Code Club, organizing coding workshops and community outreach to promote diversity in STEM.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-28 py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaUserSecret className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Technical Skills
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Languages", list: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"] },
                { title: "Frameworks", list: ["React", "Next.js", "Node.js", "Django", "Flask", "Express.js"] },
                { title: "Developer Tools", list: ["Git", "GitHub", "Docker", "VS Code", "JIRA"] },
                { title: "Libraries", list: ["Pandas", "NumPy", "Matplotlib", "SciPy", "Seaborn", "OpenAI API"] },
                { title: "Databases", list: ["PostgreSQL", "MySQL", "Firebase", "SQLite"] },
              ].map((category, idx) => (
                <div key={idx} className="bg-[#111827]/70 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
                  <h3 className="text-[#d4af37] text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.list.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="scroll-mt-28 py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaAward className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Certifications
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-lg">{cert.title}</h3>
                      <p className="text-[#d4af37] font-semibold text-xs sm:text-sm mt-1 sm:mt-2">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="flex items-center gap-2 mx-auto mt-6 sm:mt-10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-[#d4af37]/50 text-white text-xs sm:text-sm hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
            >
              <span className="text-xs">{showAllCertifications ? "▲" : "▼"}</span>
              {showAllCertifications ? "Show Less" : `View All ${certifications.length} Certifications`}
            </button>
          </section>

          {/* RECOMMENDATION */}
          <section id="Recommendation" className="py-8 md:py-24">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <FaRegCommentDots className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Recommendation
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="max-w-6xl mx-auto bg-[#111827]/60 border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-md">
              <FaQuoteLeft className="text-[#d4af37] text-2xl sm:text-4xl mb-3 sm:mb-6 opacity-80" />
              <p className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed italic">
                "I had the pleasure of working with Puneet during multiple development and AI projects. He consistently demonstrated strong problem-solving skills, technical curiosity and a commitment to delivering quality work."
              </p>

              <div className="mt-5 sm:mt-8 pt-4 border-t border-white/10">
                <h3 className="text-white text-lg sm:text-2xl font-bold">John Smith</h3>
                <p className="text-[#d4af37] text-sm sm:text-lg font-semibold mt-1 sm:mt-2">Senior Software Engineer | AI Research Mentor</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Technology Industry Professional</p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-28 pt-8 md:pt-16 pb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 md:-mt-8 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>

              <HiOutlineMail className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer whitespace-nowrap">
                Get in Touch
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
                <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-0 mb-6 md:mb-8 text-[#ffd95e]">
              <span className="text-xs md:text-2xl">✦</span>
              <span className="text-sm md:text-2xl">◆</span>
              <span className="text-xs md:text-2xl">✦</span>
            </div>

            <div className="max-w-4xl mx-auto mt-4 sm:mt-12 text-center px-2">
              <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed mb-6 sm:mb-10">
                I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out!
              </p>

              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
                <a
                  href="mailto:parasgoswami1156@gmail.com"
                  className="w-full sm:w-auto bg-[#ebb236] text-black px-4 sm:px-6 py-3 rounded-xl font-medium text-xs sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <HiOutlineMail className="text-lg sm:text-2xl" />
                  parasgoswami1156@gmail.com
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-white/20 px-4 sm:px-6 py-3 rounded-xl text-white font-medium text-xs sm:text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#ebb236] hover:text-[#ebb236]"
                >
                  <FaLinkedin className="text-lg sm:text-2xl" />
                  Follow on LinkedIn
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-white/20 px-4 sm:px-6 py-3 rounded-xl text-white font-medium text-xs sm:text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#ebb236] hover:text-[#ebb236]"
                >
                  <FaGithub className="text-lg sm:text-2xl" />
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <div className="mt-8 md:mt-10 pt-4 border-t border-white/10 text-center pb-2">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-0">
              <span className="text-[#d4af37] text-xs sm:text-sm">✦ ✦ ✦</span>
              <h3 className="text-white text-lg sm:text-2xl font-serif font-semibold">
                Puneet Goswami
              </h3>
              <span className="text-[#d4af37] text-xs sm:text-sm">✦ ✦ ✦</span>
            </div>

            <p className="text-gray-400 text-xs sm:text-base mt-1 sm:mt-2">
              © 2026 Puneet Goswami
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}