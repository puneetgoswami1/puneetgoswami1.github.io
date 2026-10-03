"use client";
import { HiOutlineMail } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
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
  FaUsers,
  FaUserSecret,
  FaAward,
  FaRegCommentDots,
  FaQuoteLeft,
  FaCheckCircle,
  FaExternalLinkAlt
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastShownRef = useRef(false);

  useEffect(() => {
    history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight - 120 && !toastShownRef.current) {
        toastShownRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(25);
    }
  };

  // REFRESH / FIRST LOAD STAGGERED ENTRANCE ANIMATION (DESKTOP & MOBILE)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

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

  const marqueeItems = [
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Stanford", icon: <FaGraduationCap /> },
    { name: "Contra", icon: <FaBriefcase /> },
  ];

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative select-none">
      {/* 1. ZERO-SHAKE / ZERO-FLICKER HARDWARE GPU BACKGROUND */}
      <div
  className="fixed inset-0 -z-30 pointer-events-none"
  style={{
    backgroundImage: "url('/kp.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-black/60" />
</div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full px-5 md:px-12 py-3.5 md:py-4 flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-xl md:text-xl font-serif font-bold tracking-wider text-[#e8cb76] cursor-pointer hover:text-[#ffd978] transition-colors">
          P.G.
        </h1>
        <ul className="hidden md:flex items-center gap-7 text-[13px] text-gray-300 font-medium">
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#experience">Experience</a></li>
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#certifications">Certifications</a></li>
          <li className="hover:text-[#e8cb76] hover:scale-105 transition-all cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4 md:gap-5 text-base md:text-lg text-gray-300">
          <FaLinkedin
            onClick={() => {
              triggerHaptic();
              window.open("https://www.linkedin.com/in/puneetgoswami-ai/", "_blank");
            }}
            className="hover:text-[#e8cb76] hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(232,203,118,0.8)] cursor-pointer transition-all duration-200"
          />
          <FaGithub
            onClick={() => {
              triggerHaptic();
              window.open("https://github.com/puneetgoswami1", "_blank");
            }}
            className="hover:text-[#e8cb76] hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(232,203,118,0.8)] cursor-pointer transition-all duration-200"
          />
          <FaEnvelope
            onClick={() => {
              triggerHaptic();
              window.location.href = "mailto:parasgoswami1156@gmail.com";
            }}
            className="hover:text-[#e8cb76] hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(232,203,118,0.8)] cursor-pointer transition-all duration-200"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[100dvh] flex flex-col justify-between items-center text-center px-4 md:px-6 relative pt-20 md:pt-28 pb-6 md:pb-8 overflow-hidden">
        
        {/* SHOOTING METEOR */}
        <motion.div
          className="absolute pointer-events-none z-0 transform -rotate-[35deg]"
          style={{
            width: "90px",
            height: "1.2px",
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(232,203,118,0.85) 55%, #ffffff 100%)",
            boxShadow: "0 0 6px #ffd95e",
          }}
          initial={{ top: "-5%", left: "90%", opacity: 0 }}
          animate={{
            top: ["-5%", "46%"],
            left: ["90%", "10%"],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut",
          }}
        />

        {/* 55 REALISTIC BLINKING STARS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transform-gpu">
          {[...Array(55)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-100"
              style={{
                left: `${(i * 11) % 94 + 3}%`,
                top: `${(i * 13) % 48 + 2}%`,
                fontSize: `${i % 3 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2.5}px`,
                textShadow: i % 2 === 0 ? "0 0 4px rgba(255, 217, 94, 0.9)" : "0 0 2px rgba(255, 255, 255, 0.8)",
              }}
              animate={{
                opacity: [0.15, 1, 0.15],
                scale: [0.75, 1.25, 0.75],
              }}
              transition={{
                duration: 3 + (i % 4) * 0.8,
                repeat: Infinity,
                delay: (i % 7) * 0.3,
                ease: "easeInOut",
              }}
            >
              ✦
            </motion.div>
          ))}
        </div>

        {/* HERO CONTENT - REFRESH STAGGERED ENTRANCE MOTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full z-10 flex flex-col items-center justify-center my-auto pt-2 pb-4"
        >
          {/* Sparkle Icon */}
          <motion.div variants={itemVariants} className="flex justify-center mb-2.5 md:mb-3">
            <span className="text-[#e8cb76] text-2xl md:text-2xl drop-shadow-[0_0_12px_rgba(232,203,118,0.8)]">
              ✦
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[3px] md:tracking-[4px] text-[#e8cb76] text-[11px] md:text-xs font-semibold mb-2.5 md:mb-3"
          >
            DATA ANALYST • SQL • PYTHON
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[42px] md:text-[54px] font-medium tracking-tight mb-2 md:mb-2.5 leading-tight whitespace-nowrap"
            style={{
              color: "#e8cb76",
              textShadow: "0 0 30px rgba(232,203,118,0.4)",
            }}
          >
            Puneet Goswami
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemVariants}
            className="font-serif italic text-sm md:text-lg text-gray-300 font-light mb-4 md:mb-5"
          >
            Data Analyst • AI Researcher
          </motion.h2>

          {/* Location & University */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm mb-5 md:mb-6"
          >
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#e8cb76] text-xs" />
              Rajasthan, India
            </span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1.5">
              <FaGraduationCap className="text-[#e8cb76] text-sm" />
              BCA ICFAI University
            </span>
          </motion.div>

          {/* CHIPS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-7 md:mb-8"
          >
            {["Lemon.io", "Data Annotation", "Contra"].map((item) => (
              <span
                key={item}
                onClick={triggerHaptic}
                className="px-3.5 py-1.5 md:px-4 md:py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-gray-200 hover:border-[#e8cb76] hover:text-[#e8cb76] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* ACTION BUTTONS WITH HOVER GLOW */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row justify-center items-center gap-3 md:gap-4 px-2 w-full max-w-[340px] md:max-w-none mx-auto"
          >
            <button
              onClick={() => {
                triggerHaptic();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 md:flex-initial bg-[#ebb236] hover:bg-[#f5be42] text-black font-semibold px-4 md:px-6 py-2.5 md:py-2.5 rounded-xl shadow-lg transition-all duration-300 text-xs md:text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(235,178,54,0.6)]"
            >
              <span>☆</span> Explore My Work
            </button>

            <button
              onClick={() => {
                triggerHaptic();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 md:flex-initial border border-white/20 hover:border-[#e8cb76] bg-black/40 text-white font-medium px-4 md:px-6 py-2.5 md:py-2.5 rounded-xl transition-all duration-300 text-xs md:text-sm cursor-pointer hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(232,203,118,0.3)]"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* DOWN CHEVRON */}
        <div className="z-20 mt-auto pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              triggerHaptic();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer p-2 text-[#ebb236]/90 hover:text-[#ebb236]"
          >
            <FaChevronDown className="text-xl" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="scroll-mt-20 pt-10 md:pt-16 pb-4 px-4 md:px-6 bg-[#06030f] relative overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="flex gap-1">
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaBookOpen className="text-[#d4af37] text-lg md:text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
            About Me
          </h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </div>

        {/* CENTERED STARS */}
        <div className="flex items-center justify-center -mt-1 mb-8 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-sm">✦</span>
            <span className="text-xs md:text-base">◆</span>
            <span className="text-[11px] md:text-sm">✦</span>
          </div>
        </div>

        {/* DESKTOP ABOUT LAYOUT */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10 px-2">
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[3px] border-[#d4af37] bg-white/5 shadow-[0_0_25px_rgba(212,175,55,0.2)]"></div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 text-gray-300 text-xs md:text-[14px] leading-relaxed hover:border-[#d4af37]/40 transition-colors">
              Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions.
            </div>
          </div>
        </div>

        {/* CONTINUOUS ZERO-GAP INFINITE MARQUEE */}
        <div className="mt-8 text-center">
          <h3 className="tracking-[3px] md:tracking-[5px] text-[#d4af37] uppercase text-xs md:text-xs mb-5 font-semibold">
            ORGANIZATIONS & PLATFORMS
          </h3>
        </div>

        <div className="overflow-hidden w-full max-w-5xl mx-auto relative mb-12 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            className="flex gap-8 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 px-3 py-1">
                <span className="text-[#d4af37]">{item.icon}</span>
                {item.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* EDUCATION */}
        <div className="flex items-center justify-center gap-3 mt-14 mb-1">
          <div className="flex gap-1">
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaGraduationCap className="text-[#d4af37] text-lg md:text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
            Education
          </h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-center -mt-1 mb-6 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-sm">✦</span>
            <span className="text-xs md:text-base">◆</span>
            <span className="text-[11px] md:text-sm">✦</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
              <div>
                <h3 className="text-base md:text-xl font-bold text-white">ICFAI University, Jaipur</h3>
                <p className="text-[#d4af37] mt-1 text-xs md:text-sm">Bachelor of Computer Application, Computer Application</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="px-3 py-0.5 bg-[#d4af37] text-black font-semibold rounded-full text-xs">GPA: 8.0</span>
                <span className="text-gray-400 text-xs">May 2020 - Sep 2023</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-base md:text-xl font-bold text-white">Royal International</h3>
                <p className="text-[#d4af37] mt-1 text-xs md:text-sm font-semibold">Senior Secondary(+2) — CS, Physics, Chemistry, Math</p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <span className="px-3 py-0.5 bg-[#d4af37] text-black font-semibold rounded-full text-xs">GPA: 7.0</span>
                <span className="text-gray-400 text-xs">March 2019 - May 2020</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed">
              <span className="text-white font-semibold flex items-center gap-2 mb-1">
                <FaBookOpen className="text-[#d4af37]" /> Relevant Coursework:
              </span>
              Advanced SQL, Database Management Systems, Data Structures & Algorithms, Python for Data Analytics, Statistical Analysis, Linear Algebra, Machine Learning, Deep Learning, Business Intelligence, Data Warehousing, Microsoft Power BI.
            </p>
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div id="experience" className="scroll-mt-20 text-center my-14 md:my-20">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaBriefcase className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Experience
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-8 text-[#d4af37]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto py-2">
            <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-[#d4af37]/25 -translate-x-1/2 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-6 md:mb-10 cursor-pointer"
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-6">
                  <div className="w-9 h-9 rounded-full border-2 border-[#d4af37] bg-[#111] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                    <FaCode className="text-[#39ff88] text-sm" />
                  </div>
                </div>

                <div
                  className={`w-full md:w-[47%] ${
                    exp.side === "left"
                      ? "md:mr-auto text-left"
                      : "md:ml-auto text-left"
                  }`}
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white leading-tight">{exp.company}</h3>
                        <p className="text-[#d4af37] font-semibold text-xs md:text-sm mt-0.5">{exp.role}</p>
                      </div>
                      <span className="text-gray-400 text-xs text-right whitespace-nowrap">{exp.date}</span>
                    </div>

                    <ul className="space-y-1.5 mb-3.5 text-gray-300 text-xs md:text-[13px]">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#d4af37] mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white">
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
        <section id="research" className="py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaFlask className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Research & Publications
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">Research Project Three</h3>
                  <p className="text-[#d4af37] font-semibold text-xs">AI Researcher</p>
                </div>
                <span className="text-gray-400 text-xs">June 2024 - Present</span>
              </div>
              <p className="text-gray-300 text-xs md:text-[13px] mb-3 leading-relaxed">
                Developed advanced AI systems and biomedical image segmentation using modern machine learning pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "TensorFlow", "NLP", "LLM"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">Research Project Four</h3>
                  <p className="text-[#d4af37] font-semibold text-xs">AI Researcher</p>
                </div>
                <span className="text-gray-400 text-xs">June 2024 - Present</span>
              </div>
              <p className="text-gray-300 text-xs md:text-[13px] mb-3 leading-relaxed">
                Built intelligent systems for prediction and model optimization through distributed computing methods.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["PyTorch", "Deep Learning", "CV", "AI"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaLightbulb className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Projects
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            <AnimatePresence>
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col justify-between hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-3">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <a
                      href="https://github.com/puneetgoswami1"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={triggerHaptic}
                      className="inline-flex items-center gap-1.5 text-[#ffd95e] hover:text-yellow-300 text-[11px] font-semibold mb-2.5 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[9px]" /> GitHub
                    </a>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-7">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllProjects(!showAllProjects);
              }}
              className="px-5 py-2 border border-[#d4af37]/50 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 hover:border-[#d4af37] hover:text-[#d4af37] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span className="text-[10px]">{showAllProjects ? "▲" : "▼"}</span>
              {showAllProjects ? "Show Less" : `View All ${projects.length} Projects`}
            </button>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="Leadership" className="py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUsers className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Leadership & Involvement
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { title: "Stanford SERIS Scholar", org: "Stanford School of Engineering", date: "Dec 2024 - Feb 2025", desc: "1 of 23 undergraduates selected nationwide for research introduction." },
              { title: "Break Through Tech Fellow", org: "Cornell University", date: "Mar 2025 - Jun 2025", desc: "Completed hands-on machine learning AI studio programs." },
              { title: "Girls Who Code — President", org: "College of San Mateo", date: "Apr 2024 - May 2025", desc: "Organized technical workshops to promote diversity in STEM." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-white text-sm md:text-base font-bold mb-1">{item.title}</h3>
                <p className="text-[#d4af37] text-xs font-semibold mb-1">{item.org}</p>
                <p className="text-gray-400 text-[11px] mb-2">{item.date}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="scroll-mt-20 py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUserSecret className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Technical Skills
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { title: "Languages", list: ["Java", "Python", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"] },
              { title: "Frameworks", list: ["React", "Node.js", "Next.js", "WordPress", "GraphQL", "Django", "Flask"] },
              { title: "Developer Tools", list: ["Git", "GitHub", "Docker", "Kubernetes", "VS Code", "JIRA"] },
              { title: "Libraries", list: ["Pandas", "NumPy", "Matplotlib", "SciPy", "Seaborn", "OpenAI API"] },
              { title: "Databases", list: ["PostgreSQL", "MySQL", "Firebase", "SQLite"] },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[#d4af37] text-sm md:text-base font-bold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.list.map((item) => (
                    <span
                      key={item}
                      onClick={triggerHaptic}
                      className="px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] md:text-xs cursor-pointer hover:bg-[#d4af37]/20 hover:text-[#d4af37] hover:scale-105 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-20 py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaAward className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Certifications
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 max-w-5xl mx-auto">
            <AnimatePresence>
              {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-white font-bold text-xs md:text-sm">{cert.title}</h3>
                    <p className="text-[#d4af37] text-[11px] mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-[10px] mt-2">{cert.date}</span>
                </div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-7">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllCertifications(!showAllCertifications);
              }}
              className="px-5 py-2 rounded-xl border border-[#d4af37]/50 text-white text-xs font-semibold flex items-center gap-1.5 hover:text-[#d4af37] hover:border-[#d4af37] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span className="text-[10px]">{showAllCertifications ? "▲" : "▼"}</span>
              {showAllCertifications ? "Show Less" : `View All ${certifications.length} Certifications`}
            </button>
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section id="Recommendation" className="py-8 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaRegCommentDots className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Recommendation
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 hover:border-[#d4af37]/40 transition-colors">
            <FaQuoteLeft className="text-[#d4af37] text-2xl mb-3 opacity-80" />
            <p className="text-gray-200 text-xs md:text-base leading-relaxed italic">
              "I had the pleasure of working with Puneet during multiple development and AI projects. He consistently demonstrated strong problem-solving skills, technical curiosity and a commitment to delivering quality work."
            </p>
            <div className="mt-4 pt-3 border-t border-white/10">
              <h3 className="text-white text-sm md:text-base font-bold">John Smith</h3>
              <p className="text-[#d4af37] text-xs font-semibold">Senior Software Engineer | AI Research Mentor</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 pt-6 md:pt-12 pb-4">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <HiOutlineMail className="text-[#d4af37] text-lg md:text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap cursor-pointer">
              Get in Touch
            </h2>
            <div className="flex gap-1">
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-3.5 h-1 md:h-1.5 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-sm">✦</span>
              <span className="text-xs md:text-base">◆</span>
              <span className="text-[11px] md:text-sm">✦</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="mailto:parasgoswami1156@gmail.com"
                onClick={triggerHaptic}
                className="w-full sm:w-auto bg-[#ebb236] text-black px-5 py-2.5 rounded-xl font-medium text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-[#f5be42] hover:scale-105 active:scale-95 transition-all"
              >
                <HiOutlineMail className="text-base md:text-lg" />
                parasgoswami1156@gmail.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerHaptic}
                className="w-full sm:w-auto border border-white/20 px-5 py-2.5 rounded-xl text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 hover:border-[#ebb236] hover:text-[#ebb236] hover:scale-105 active:scale-95 transition-all"
              >
                <FaLinkedin className="text-base md:text-lg" />
                Follow on LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerHaptic}
                className="w-full sm:w-auto border border-white/20 px-5 py-2.5 rounded-xl text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 hover:border-[#ebb236] hover:text-[#ebb236] hover:scale-105 active:scale-95 transition-all"
              >
                <FaGithub className="text-base md:text-lg" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-8 md:mt-12 pt-4 border-t border-white/10 text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-0">
            <span className="text-[#d4af37] text-xs">✦ ✦ ✦</span>
            <h3 className="text-white text-base md:text-lg font-serif font-semibold">
              Puneet Goswami
            </h3>
            <span className="text-[#d4af37] text-xs">✦ ✦ ✦</span>
          </div>
          <p className="text-gray-400 text-[11px] md:text-xs mt-1">
            © 2026 Puneet Goswami
          </p>
        </div>
      </section>

      {/* THANK YOU POPUP */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#161324]/95 border border-[#e8cb76]/60 text-white px-5 py-2.5 rounded-2xl shadow-[0_0_25px_rgba(232,203,118,0.4)] flex items-center gap-2.5 text-xs whitespace-nowrap pointer-events-none"
          >
            <FaCheckCircle className="text-[#e8cb76] text-sm flex-shrink-0" />
            <span>Thank you for visiting my portfolio! ✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}