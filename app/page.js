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

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative select-none">
      {/* 1. FIXED BACKGROUND LAYER (NO SHAKE / NO JITTER) */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/kp.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/75 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-xl sm:text-2xl font-black tracking-wide text-[#d4af37] cursor-pointer hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_20px_#facc15] transition-all duration-300">
          P.G.
        </h1>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-white font-medium">
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#certifications">Certifications</a>
          </li>
          <li className="hover:text-yellow-400 hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_#facc15] transition-all duration-200 cursor-pointer font-semibold">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4 sm:gap-5 text-lg sm:text-xl text-gray-300">
          <FaLinkedin
            onClick={() => {
              triggerHaptic();
              window.open("https://www.linkedin.com/in/puneetgoswami-ai/", "_blank");
            }}
            className="hover:text-yellow-400 hover:scale-125 active:scale-90 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer"
          />
          <FaGithub
            onClick={() => {
              triggerHaptic();
              window.open("https://github.com/puneetgoswami1", "_blank");
            }}
            className="hover:text-yellow-400 hover:scale-125 active:scale-90 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer"
          />
          <FaEnvelope
            onClick={() => {
              triggerHaptic();
              window.location.href = "mailto:parasgoswami1156@gmail.com";
            }}
            className="hover:text-yellow-400 hover:scale-125 active:scale-90 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300 cursor-pointer"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[100dvh] flex flex-col justify-between items-center text-center px-4 sm:px-6 relative pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden">
        
        {/* REALISTIC SHOOTING METEOR IN SKY */}
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

        {/* DESKTOP AMBIENT BOTTOM GLOW (RESTORED FROM ORIGINAL) */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-80 pointer-events-none z-10 hidden md:block"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-t from-yellow-300/20 via-yellow-200/5 to-transparent blur-3xl" />
        </motion.div>

        {/* HERO CONTENT */}
        <div className="max-w-4xl w-full z-10 flex flex-col items-center justify-center my-auto pt-2 pb-4">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-[#e8cb76] text-2xl sm:text-3xl drop-shadow-[0_0_14px_rgba(232,203,118,0.8)]">
              ✦
            </span>
          </div>

          <p className="uppercase tracking-[3.5px] sm:tracking-[6px] text-[#facc15] text-[11px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
            DATA ANALYST • SQL • PYTHON
          </p>

          <h1
            className="font-serif text-[42px] sm:text-6xl md:text-[76px] font-medium tracking-normal mb-3 sm:mb-4 leading-tight whitespace-nowrap"
            style={{
              color: "#e8cb76",
              textShadow: "0 0 35px rgba(232,203,118,0.45)",
            }}
          >
            Puneet Goswami
          </h1>

          <h2 className="font-serif italic text-sm sm:text-lg md:text-2xl text-gray-300 font-light mb-5 sm:mb-6">
            Data Analyst • AI Researcher
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-gray-300 text-xs sm:text-base mb-6 sm:mb-7">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#e8cb76] text-xs sm:text-base" />
              Rajasthan, India
            </span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1.5">
              <FaGraduationCap className="text-[#e8cb76] text-sm sm:text-lg" />
              BCA ICFAI University
            </span>
          </div>

          {/* CHIPS (ORIGINAL DESKTOP HOVER SCALE & GLOW) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {["Lemon.io", "Data Annotation", "Contra"].map((item) => (
              <span
                key={item}
                onClick={triggerHaptic}
                className="px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-base rounded-2xl bg-black/40 border border-white/20 text-gray-200 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          {/* BUTTONS (ORIGINAL DESKTOP HOVER SCALE & SHADOW) */}
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 px-2 w-full max-w-[340px] sm:max-w-md mx-auto">
            <button
              onClick={() => {
                triggerHaptic();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 bg-[#d4af37] text-black px-4 sm:px-8 py-3.5 rounded-2xl font-bold border border-[#d4af37] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] active:scale-95 transition-all duration-300 text-xs sm:text-base cursor-pointer"
            >
              ✦ Explore My Work
            </button>

            <button
              onClick={() => {
                triggerHaptic();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 border border-white/30 bg-black/40 text-white font-bold px-4 sm:px-8 py-3.5 rounded-2xl backdrop-blur-md hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] active:scale-95 transition-all duration-300 text-xs sm:text-base cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>

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
            <FaChevronDown className="text-xl sm:text-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="scroll-mt-24 pt-10 pb-2 px-4 sm:px-6 bg-[#06030f] relative overflow-hidden"
      >
        {/* DESKTOP FLOATING ROTATING DIAMONDS (ORIGINAL CODE) */}
        <motion.div
          className="absolute left-20 top-40 w-32 h-32 border border-yellow-400/5 rotate-45 pointer-events-none hidden md:block"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-20 top-72 w-24 h-24 border border-yellow-400/10 rotate-45 pointer-events-none hidden md:block"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#d4af37] text-2xl md:text-3xl text-center mb-6 md:mb-10"
        >
          ᗐ
        </motion.div>

        {/* HEADING (RESTORED HOVER GLOW & ROTATE TAP) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-1"
        >
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaBookOpen className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
          <motion.h2
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 10px rgba(212,175,55,0.8), 0px 0px 25px rgba(212,175,55,0.6)",
            }}
            whileTap={{ scale: 0.88, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap cursor-pointer select-none"
          >
            About Me
          </motion.h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </motion.div>

        {/* CENTERED STARS */}
        <div className="flex items-center justify-center -mt-1 mb-6 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-base">✦</span>
            <span className="text-xs md:text-lg">◆</span>
            <span className="text-[11px] md:text-base">✦</span>
          </div>
        </div>

        {/* PROFILE & SUMMARY CARD (ORIGINAL HOVER SCALING & SHADOW) */}
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mb-8 relative z-10">
          <div className="w-36 h-36 md:w-56 md:h-56 rounded-full border-[4px] md:border-[5px] border-[#d4af37] bg-white/5 backdrop-blur-sm shadow-[0_0_25px_rgba(212,175,55,0.2)]"></div>

          <div className="max-w-2xl px-2">
            <p className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 text-gray-300 text-sm sm:text-base leading-relaxed transition-all duration-500 hover:scale-[1.03] hover:border-[#d4af37] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]">
              Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions.
            </p>
          </div>
        </div>

        {/* ORGANIZATIONS MARQUEE */}
        <div className="mt-4 text-center">
          <h3 className="tracking-[4px] sm:tracking-[6px] text-[#d4af37] uppercase text-xs sm:text-sm mb-4 md:mb-8 font-semibold">
            Organizations & Platforms
          </h3>
        </div>
        <div className="overflow-hidden w-full mb-8">
          <div className="marquee-wrapper">
            <div className="marquee-track flex gap-8" style={{ animationDuration: "7s" }}>
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
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-14 mb-1"
        >
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaGraduationCap className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
          <motion.h2
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 10px rgba(212,175,55,0.8), 0px 0px 25px rgba(212,175,55,0.6)",
            }}
            whileTap={{ scale: 0.88, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap cursor-pointer select-none"
          >
            Education
          </motion.h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center -mt-1 mb-6 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-base">✦</span>
            <span className="text-xs md:text-lg">◆</span>
            <span className="text-[11px] md:text-base">✦</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 hover:border-[#d4af37]/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
              <div>
                <h3 className="text-lg sm:text-3xl font-bold text-white">ICFAI University, Jaipur</h3>
                <p className="text-[#d4af37] mt-1 text-xs sm:text-base">Bachelor of Computer Application, Computer Application</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="px-3 md:px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs sm:text-sm">GPA: 8.0</span>
                <span className="text-gray-300 text-xs sm:text-sm">May 2020 - Sep 2023</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 hover:border-[#d4af37]/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg sm:text-3xl font-bold text-white">Royal International</h3>
                <p className="text-[#d4af37] mt-1 text-xs sm:text-base font-semibold">Senior Secondary(+2) — CS, Physics, Chemistry, Math</p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <span className="px-3 md:px-4 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs sm:text-sm">GPA: 7.0</span>
                <span className="text-gray-300 text-xs sm:text-sm">March 2019 - May 2020</span>
              </div>
            </div>
          </motion.div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 hover:border-[#d4af37]/50 transition-all duration-300">
            <p className="text-gray-200 text-xs sm:text-base leading-relaxed">
              <span className="text-white font-semibold flex items-center gap-2 mb-1.5">
                <FaBookOpen className="text-[#d4af37] text-lg sm:text-xl" /> Relevant Coursework:
              </span>
              Advanced SQL, Database Management Systems, Data Structures & Algorithms, Python for Data Analytics, Statistical Analysis, Probability & Statistics, Linear Algebra, Calculus I-III, Data Mining, Machine Learning, Deep Learning Fundamentals, Business Intelligence, Data Warehousing, ETL Pipelines, Big Data Technologies, Predictive Modeling, Data Visualization, Microsoft Power BI, Tableau, Advanced Excel Analytics, Cloud Data Engineering, Artificial Intelligence, Object-Oriented Programming, Computer Architecture, Operations Research.
            </p>
          </div>
        </div>

        {/* EXPERIENCE TIMELINE (ORIGINAL DESKTOP STAGGER SLIDE & BADGES) */}
        <div id="experience" className="scroll-mt-24 text-center my-12 md:my-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaBriefcase className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_15px_#d4af37] hover:scale-105 active:scale-95 whitespace-nowrap">
              Experience
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-8 text-[#d4af37]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto py-2 md:py-20">
            {/* Desktop Center Timeline Bar */}
            <div className="absolute left-1/2 top-[120px] h-[1050px] w-[2px] bg-[#d4af37]/20 -translate-x-1/2 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: typeof window !== "undefined" && window.innerWidth >= 768 ? (exp.side === "left" ? -120 : 120) : 0,
                  y: typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-8 md:mb-16 cursor-pointer"
              >
                {/* Desktop Center Badge Icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-10">
                  <div className="w-14 h-14 rounded-full border-[3px] border-[#d4af37] bg-[#111] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <FaCode className="text-[#39ff88] text-2xl drop-shadow-[0_0_8px_#39ff88]" />
                  </div>
                </div>

                <div
                  className={`w-full md:w-[50%] ${
                    exp.side === "left"
                      ? "md:mr-auto md:pr-4 md:translate-y-8 text-left"
                      : "md:ml-auto md:pl-4 md:translate-y-8 text-left"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">{exp.company}</h3>
                        <p className="text-[#d4af37] font-semibold text-sm sm:text-lg mt-1">{exp.role}</p>
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm text-right min-w-[120px]">{exp.date}</span>
                    </div>

                    <ul className="space-y-3 sm:space-y-6 mb-4 sm:mb-6 mt-3 sm:mt-5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 sm:gap-4 text-gray-300 leading-6 sm:leading-8 text-xs sm:text-[15px]">
                          <span className="text-[#d4af37] mt-[3px] sm:mt-[6px] text-base sm:text-lg flex-shrink-0">•</span>
                          <p className="text-left max-w-[95%]">{point}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">
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

        {/* RESEARCH */}
        <section id="research" className="py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaFlask className="text-[#d4af37] text-base sm:text-xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Research & Publications
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl hover:shadow-[#d4af37]/20 hover:scale-[1.02] transition-all duration-500">
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
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "NLP", "LLM"].map((tag) => (
                  <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl hover:shadow-[#d4af37]/20 hover:scale-[1.02] transition-all duration-500">
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
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "Deep Learning", "CV", "AI"].map((tag) => (
                  <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/10 text-xs sm:text-sm text-white">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaLightbulb className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Project
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 transition-all duration-300 group-hover:text-[#ffd95e]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <a
                      href="https://github.com/puneetgoswami1"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={triggerHaptic}
                      className="flex items-center gap-2 text-[#ffd95e] font-semibold text-xs sm:text-sm mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 hover:text-[#fff176] hover:drop-shadow-[0_0_12px_#ffd95e]"
                    >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllProjects(!showAllProjects);
              }}
              className="px-6 py-2.5 border border-[#d4af37]/50 rounded-xl text-white text-xs sm:text-sm font-semibold flex items-center gap-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:shadow-[0_0_20px_#d4af37] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs">{showAllProjects ? "▲" : "▼"}</span>
              {showAllProjects ? "Show Less" : `View All ${projects.length} Projects`}
            </button>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="Leadership" className="py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUsers className="text-[#d4af37] text-base sm:text-2xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Leadership & Involvement
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: "Stanford SERIS Scholar", org: "Stanford School of Engineering", date: "Dec 2024 - Feb 2025", desc: "1 of 23 undergraduates selected nationwide for research introduction." },
              { title: "Break Through Tech AI Fellow", org: "Cornell University", date: "Mar 2025 - Jun 2025", desc: "Completed hands-on machine learning AI studio programs." },
              { title: "Girls Who Code Club — President", org: "College of San Mateo", date: "Apr 2024 - May 2025", desc: "Organized technical workshops to promote diversity in STEM." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-6 hover:border-[#d4af37]/40 hover:shadow-[0_0_25px_#d4af37] transition-all duration-300"
              >
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1.5">{item.title}</h3>
                <p className="text-[#d4af37] text-xs sm:text-sm font-semibold">{item.org}</p>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-3">{item.date}</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUserSecret className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Technical Skills
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: "Languages", list: ["Java", "Python", "C++", "SQL", "JavaScript", "TypeScript", "PHP", "HTML/CSS", "Julia", "LaTeX", "MatLab", "LangChain"] },
              { title: "Frameworks", list: ["React", "Node.js", "Next.js", "WordPress", "GraphQL", "Django", "Flask", "Express.js"] },
              { title: "Developer Tools", list: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "VS Code", "JIRA"] },
              { title: "Libraries", list: ["Pandas", "NumPy", "Matplotlib", "Mayavi", "SciPy", "Seaborn", "OpenAI API"] },
              { title: "Databases", list: ["PostgreSQL", "MySQL", "Firebase", "SQLite"] },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 0 25px rgba(212,175,55,0.25)" }}
                className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <h3 className="text-[#d4af37] text-2xl font-bold mb-5">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.list.map((item) => (
                    <span
                      key={item}
                      onClick={triggerHaptic}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm border border-white/10 transition-all duration-300 cursor-pointer hover:bg-[#d4af37]/20 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_#d4af37] hover:scale-110 active:scale-95"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24 py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaAward className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Certifications
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03, boxShadow: "0 0 25px rgba(212,175,55,0.25)" }}
                  className="bg-[#111827]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">{cert.title}</h3>
                      <p className="text-[#d4af37] font-semibold text-xs sm:text-sm mt-2">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllCertifications(!showAllCertifications);
              }}
              className="px-6 py-3 rounded-xl border border-[#d4af37]/50 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 hover:text-[#d4af37] hover:border-[#d4af37] hover:shadow-[0_0_15px_#d4af37] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs">{showAllCertifications ? "▲" : "▼"}</span>
              {showAllCertifications ? "Show Less" : `View All ${certifications.length} Certifications`}
            </button>
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section id="Recommendation" className="py-6 md:py-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaRegCommentDots className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Recommendation
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 0 30px rgba(212,175,55,0.25)" }}
            whileTap={{ scale: 0.98, boxShadow: "0 0 40px rgba(212,175,55,0.4)" }}
            className="max-w-6xl mx-auto bg-[#111827]/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
          >
            <FaQuoteLeft className="text-[#d4af37] text-2xl sm:text-4xl mb-4 sm:mb-6 opacity-80" />
            <p className="text-gray-200 text-sm sm:text-xl leading-relaxed italic">
              "I had the pleasure of working with Puneet during multiple development and AI projects. He consistently demonstrated strong problem-solving skills, technical curiosity and a commitment to delivering quality work. His ability to learn quickly and adapt to new technologies makes him a valuable contributor to any team."
            </p>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10">
              <h3 className="text-white text-lg sm:text-2xl font-bold">John Smith</h3>
              <p className="text-[#d4af37] text-sm sm:text-lg font-semibold mt-1 sm:mt-2">Senior Software Engineer | AI Research Mentor</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Technology Industry Professional</p>
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 pt-6 md:pt-16 pb-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <HiOutlineMail className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#ffd95e] active:scale-95 whitespace-nowrap">
              Get in Touch
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center -mt-1 mb-6 text-[#ffd95e]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[11px] md:text-base">✦</span>
              <span className="text-xs md:text-lg">◆</span>
              <span className="text-[11px] md:text-base">✦</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center px-2">
            <p className="text-gray-300 text-sm sm:text-xl leading-relaxed mb-6 sm:mb-10">
              I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a
                href="mailto:parasgoswami1156@gmail.com"
                onClick={triggerHaptic}
                className="w-full sm:w-auto bg-[#ffd95e] text-black px-6 py-3 rounded-xl font-medium text-sm sm:text-lg flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,217,94,0.8)] active:scale-95"
              >
                <HiOutlineMail className="text-xl sm:text-2xl" />
                parasgoswami1156@gmail.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerHaptic}
                className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl text-white font-medium text-sm sm:text-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-[#ffd95e] hover:text-[#ffd95e] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
                Follow on LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerHaptic}
                className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl text-white font-medium text-sm sm:text-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-[#ffd95e] hover:text-[#ffd95e] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95"
              >
                <FaGithub className="text-xl sm:text-2xl" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-8 md:mt-12 pt-4 border-t border-white/10 text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-0">
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
      </section>

      {/* THANK YOU POPUP */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#161324]/95 border border-[#e8cb76]/60 text-white px-5 py-3 rounded-2xl shadow-[0_0_25px_rgba(232,203,118,0.4)] flex items-center gap-3 text-xs sm:text-sm whitespace-nowrap pointer-events-none"
          >
            <FaCheckCircle className="text-[#e8cb76] text-base sm:text-lg flex-shrink-0" />
            <span>Thank you for visiting my portfolio! ✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}