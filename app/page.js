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

    const triggerHaptic = () => {
  if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(25); // 25ms ka light tactile vibration
  }
};
    history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Toast popup detection at page bottom
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

  // First Load / Refresh Stagger Animation
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
    hidden: { opacity: 0, y: 16 },
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

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative select-none">
    
      {/* FIXED BACKGROUND LAYER - ZERO ZOOM & ZERO LAG */}
     
<div
  className="fixed inset-0 -z-20 pointer-events-none"
  style={{
    backgroundImage: "url('/mosq.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "translate3d(0, 0, 0)", // GPU compositor layer par lock
    WebkitTransform: "translate3d(0, 0, 0)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  }}
>
  <div className="absolute inset-0 bg-black/55" />
</div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-xl sm:text-2xl font-serif font-black tracking-wider text-[#e8cb76] cursor-pointer hover:text-[#ffd978] transition-colors">
          P.G.
        </h1>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-white font-medium">
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#experience">Experience</a></li>
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#certifications">Certifications</a></li>
          <li className="hover:text-[#e8cb76] transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4 sm:gap-5 text-lg sm:text-xl text-gray-300">
          <motion.div whileTap={{ scale: 0.9 }}>
            <FaLinkedin
              onClick={() => window.open("https://www.linkedin.com/in/puneetgoswami-ai/", "_blank")}
              className="hover:text-[#e8cb76] cursor-pointer transition-colors"
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <FaGithub
              onClick={() => window.open("https://github.com/puneetgoswami1", "_blank")}
              className="hover:text-[#e8cb76] cursor-pointer transition-colors"
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <FaEnvelope
              onClick={() => window.location.href = "mailto:parasgoswami1156@gmail.com"}
              className="hover:text-[#e8cb76] cursor-pointer transition-colors"
            />
          </motion.div>
        </div>
      </nav>

      {/* HERO SECTION - MOBILE SPACING & SKY ANIMATIONS FIXED */}
        <section className="min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 relative pt-20 sm:pt-28 pb-6 sm:pb-8 overflow-hidden">
          
          {/* 1. REALISTIC SHOOTING METEOR (Chhota size + Smooth/Dheemi speed) */}
          <motion.div
            className="absolute pointer-events-none z-0 transform -rotate-[35deg]"
            style={{
              width: "90px", // Size chhota kar diya (Pehle 130px tha)
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
              duration: 1.6, // Speed halki si kam kardi (Pehle 1.2s tha)
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeOut",
            }}
          />

          {/* 2. REALISTIC BLINKING STARS (Quantity badhayi + Sharp blink + Bada size) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transform-gpu">
            {[...Array(55)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-100"
                style={{
                  left: `${(i * 11) % 94 + 3}%`,
                  top: `${(i * 13) % 48 + 2}%`, // Sky area me rahega
                  fontSize: `${i % 3 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2.5}px`, // Size halka sa bada kiya
                  textShadow: i % 2 === 0 ? "0 0 4px rgba(255, 217, 94, 0.9)" : "0 0 2px rgba(255, 255, 255, 0.8)",
                }}
                animate={{
                  opacity: [0.15, 1, 0.15], // Real twinkling blink effect
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

          {/* CONTENT BLOCK - HEBA ALAZZEH STYLE BALANCED SPACING (STARS KO TOUCH NAHI KIYA) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl w-full z-10 flex flex-col items-center justify-center my-auto pt-2 pb-4"
          >
            {/* Top Sparkle Star */}
            <motion.div variants={itemVariants} className="flex justify-center mb-3 sm:mb-4">
              <span className="text-[#e8cb76] text-2xl sm:text-3xl drop-shadow-[0_0_14px_rgba(232,203,118,0.8)]">
                ✦
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-[3.5px] sm:tracking-[5px] text-[#e8cb76] text-[11px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4"
            >
              DATA ANALYST • SQL • PYTHON
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[42px] sm:text-6xl md:text-[76px] font-medium tracking-normal mb-3 sm:mb-4 leading-tight whitespace-nowrap"
              style={{
                color: "#e8cb76",
                textShadow: "0 0 35px rgba(232,203,118,0.4)",
              }}
            >
              Puneet Goswami
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={itemVariants}
              className="font-serif italic text-sm sm:text-lg md:text-xl text-gray-300 font-light mb-5 sm:mb-6"
            >
              Data Analyst • AI Researcher
            </motion.h2>

            {/* Location & Degree Divider */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-gray-300 text-xs sm:text-sm mb-6 sm:mb-7"
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

            {/* Chips (Lemon.io, etc.) - Iska margin badhaya taaki buttons neeche push ho sakein */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12"
            >
              {["Lemon.io", "Data Annotation", "Contra"].map((item) => (
                <motion.span
                  key={item}
                  whileTap={{ scale: 0.94 }}
                  className="px-4 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-gray-200 cursor-pointer active:border-[#e8cb76] transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons - Perfect Lower Position */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row justify-center items-center gap-3 sm:gap-4 px-2 w-full max-w-[340px] sm:max-w-md mx-auto"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
  window.navigator?.vibrate?.(25);
  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
}}
                className="flex-1 bg-[#ebb236] hover:bg-[#f5be42] text-black font-semibold px-4 sm:px-8 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:shadow-[0_0_20px_#ebb236]"
              >
                <span>☆</span> Explore My Work
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
  window.navigator?.vibrate?.(25);
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
}}
                className="flex-1 border border-white/20 hover:border-white/40 bg-black/40 text-white font-medium px-4 sm:px-8 py-3.5 rounded-xl transition-all text-xs sm:text-sm cursor-pointer active:border-[#e8cb76]"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Downward Chevron */}
          <div className="z-20 mt-auto pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer p-2 text-[#ebb236]/90 hover:text-[#ebb236]"
            >
              <FaChevronDown className="text-xl" />
            </motion.div>
          </div>
        </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="scroll-mt-24 pt-10 pb-2 px-4 sm:px-6 bg-[#06030f] relative overflow-hidden"
      >
        {/* Subtle Rotating Shapes on SIDES (Faint & Non-distracting) */}
        <motion.div
          className="absolute -left-10 sm:left-6 top-32 w-32 h-32 sm:w-44 sm:h-44 border border-[#d4af37]/10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-10 sm:right-8 top-48 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-dashed border-[#d4af37]/15 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-1">
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaBookOpen className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            About Me
          </h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </div>

        {/* Centered Stars shifted UP */}
        <div className="flex items-center justify-center -mt-1 mb-6 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-base">✦</span>
            <span className="text-xs md:text-lg">◆</span>
            <span className="text-[11px] md:text-base">✦</span>
          </div>
        </div>

        {/* Profile Circle */}
        <div className="flex flex-col items-center justify-center gap-6 mb-8 relative z-10">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[3.5px] border-[#d4af37] bg-white/5 backdrop-blur-sm shadow-[0_0_25px_rgba(212,175,55,0.15)]"></div>

          <div className="max-w-2xl px-2">
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 text-gray-300 text-sm sm:text-base leading-relaxed active:border-[#d4af37]/40 transition-colors"
            >
              Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions.
            </motion.div>
          </div>
        </div>

        {/* Organizations Marquee - FASTER SPEED (7s) */}
        <div className="mt-4 text-center">
          <h3 className="tracking-[4px] text-[#d4af37] uppercase text-xs sm:text-sm mb-4">
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
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-14 mb-1">
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
          <FaGraduationCap className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            Education
          </h2>
          <div className="flex gap-1">
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
          </div>
        </div>

        {/* Centered Stars shifted UP */}
        <div className="flex items-center justify-center -mt-1 mb-6 text-[#d4af37]">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[11px] md:text-base">✦</span>
            <span className="text-xs md:text-lg">◆</span>
            <span className="text-[11px] md:text-base">✦</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-7 active:border-[#d4af37]/40 transition-colors"
          >
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">ICFAI University, Jaipur</h3>
                <p className="text-[#d4af37] mt-1 text-xs sm:text-base">Bachelor of Computer Application, Computer Application</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="px-3 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs">GPA: 8.0</span>
                <span className="text-gray-300 text-xs">May 2020 - Sep 2023</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-7 active:border-[#d4af37]/40 transition-colors"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">Royal International</h3>
                <p className="text-[#d4af37] mt-1 text-xs sm:text-base font-semibold">Senior Secondary(+2) — CS, Physics, Chemistry, Math</p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <span className="px-3 py-1 bg-[#d4af37] text-black font-semibold rounded-full text-xs">GPA: 7.0</span>
                <span className="text-gray-300 text-xs">March 2019 - May 2020</span>
              </div>
            </div>
          </motion.div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6">
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              <span className="text-white font-semibold flex items-center gap-2 mb-1.5">
                <FaBookOpen className="text-[#d4af37]" /> Relevant Coursework:
              </span>
              Advanced SQL, DBMS, Data Structures & Algorithms, Python for Analytics, Statistics, Linear Algebra, Machine Learning, Business Intelligence, Data Warehousing, Power BI.
            </p>
          </div>
        </div>

        {/* EXPERIENCE WITH SMOOTH TIMELINE */}
        <div id="experience" className="scroll-mt-24 text-center my-12 md:my-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaBriefcase className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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

          <div className="relative max-w-6xl mx-auto py-2 md:py-14">
            <div className="absolute left-1/2 top-[40px] h-[85%] w-[2px] bg-[#d4af37]/25 -translate-x-1/2 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="relative mb-6 sm:mb-12 cursor-pointer"
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-8">
                  <div className="w-12 h-12 rounded-full border-[2.5px] border-[#d4af37] bg-[#111] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <FaCode className="text-[#39ff88] text-xl" />
                  </div>
                </div>

                <div
                  className={`w-full md:w-[48%] ${
                    exp.side === "left" ? "md:mr-auto text-left" : "md:ml-auto text-left"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 shadow-xl hover:border-[#d4af37]/40 active:border-[#d4af37] transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.company}</h3>
                        <p className="text-[#d4af37] font-semibold text-sm sm:text-base">{exp.role}</p>
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm text-right min-w-[100px]">{exp.date}</span>
                    </div>

                    <ul className="space-y-2 mb-4 text-gray-300 text-xs sm:text-sm">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#d4af37]">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-lg bg-white/10 text-[11px] sm:text-xs text-white">
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
        <section id="research" className="py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaFlask className="text-[#d4af37] text-base sm:text-xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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

          <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 active:border-[#d4af37]/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Research Project Three</h3>
                  <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">AI Researcher</p>
                </div>
                <span className="text-gray-300 text-xs">June 2024 - Present</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3">Developed scalable AI architectures for large-scale biomedical image segmentation.</p>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "TensorFlow", "NLP", "LLM"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-lg bg-white/10 text-[11px] text-white">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 active:border-[#d4af37]/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Research Project Four</h3>
                  <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">AI Researcher</p>
                </div>
                <span className="text-gray-300 text-xs">June 2024 - Present</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3">Optimized deep learning models using distributed computing and PyTorch.</p>
              <div className="flex flex-wrap gap-1.5">
                {["PyTorch", "Deep Learning", "CV", "AI"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-lg bg-white/10 text-[11px] text-white">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaLightbulb className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
              Projects
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex flex-col justify-between hover:border-[#d4af37]/40 active:border-[#d4af37] transition-all"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{project.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">{project.desc}</p>
                  </div>

                  <div>
                    {/* Glowing GitHub Link Button */}
                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://github.com/puneetgoswami1", "_blank");
                      }}
                      className="inline-flex items-center gap-1.5 text-[#ffd95e] hover:text-yellow-300 text-xs font-semibold mb-3 px-2.5 py-1 rounded-lg border border-[#ffd95e]/30 hover:border-[#ffd95e] active:shadow-[0_0_15px_#ffd95e] transition-all cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> GitHub
                    </motion.button>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-lg bg-white/10 text-[11px] text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-7">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-6 py-2.5 border border-[#d4af37]/60 active:border-[#ffd95e] rounded-xl text-white text-xs sm:text-sm font-semibold active:shadow-[0_0_20px_#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
            >
              {showAllProjects ? "▲ Show Less" : `▼ View All ${projects.length} Projects`}
            </motion.button>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="Leadership" className="py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUsers className="text-[#d4af37] text-base sm:text-2xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { title: "Stanford SERIS Scholar", org: "Stanford School of Engineering", date: "Dec 2024 - Feb 2025", desc: "1 of 23 undergraduates selected nationwide for research introduction." },
              { title: "Break Through Tech Fellow", org: "Cornell University", date: "Mar 2025 - Jun 2025", desc: "Completed hands-on machine learning AI studio programs." },
              { title: "Girls Who Code — President", org: "College of San Mateo", date: "Apr 2024 - May 2025", desc: "Organized technical workshops to promote diversity in STEM." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 active:border-[#d4af37]/40 transition-colors"
              >
                <h3 className="text-white text-base font-bold mb-1">{item.title}</h3>
                <p className="text-[#d4af37] text-xs font-semibold">{item.org}</p>
                <p className="text-gray-400 text-[11px] mb-2">{item.date}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaUserSecret className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { title: "Languages", list: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"] },
              { title: "Frameworks", list: ["React", "Next.js", "Node.js", "Django", "Flask", "Express.js"] },
              { title: "Developer Tools", list: ["Git", "GitHub", "Docker", "VS Code", "JIRA"] },
              { title: "Libraries", list: ["Pandas", "NumPy", "Matplotlib", "SciPy", "Seaborn", "OpenAI API"] },
              { title: "Databases", list: ["PostgreSQL", "MySQL", "Firebase", "SQLite"] },
            ].map((category, idx) => (
              <div key={idx} className="bg-[#111827]/70 border border-white/10 rounded-2xl p-5">
                <h3 className="text-[#d4af37] text-base font-bold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.list.map((item) => (
                    <motion.span
                      key={item}
                      whileTap={{ scale: 0.9 }}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-xs text-white cursor-pointer active:border-[#d4af37]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24 py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaAward className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#111827]/70 border border-white/10 rounded-2xl p-4 flex flex-col justify-between active:border-[#d4af37]/50 transition-colors"
                >
                  <div>
                    <h3 className="text-white font-bold text-xs sm:text-sm">{cert.title}</h3>
                    <p className="text-[#d4af37] text-[11px] mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-[10px] mt-2">{cert.date}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-7">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="px-6 py-2.5 border border-[#d4af37]/60 active:border-[#ffd95e] rounded-xl text-white text-xs sm:text-sm font-semibold active:shadow-[0_0_20px_#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
            >
              {showAllCertifications ? "▲ Show Less" : `▼ View All ${certifications.length} Certifications`}
            </motion.button>
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section id="Recommendation" className="py-6 md:py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
              <div className="w-2.5 md:w-4 h-1 md:h-2 border border-[#d4af37]/40 rounded-full"></div>
            </div>
            <FaRegCommentDots className="text-[#d4af37] text-lg sm:text-2xl flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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
            whileTap={{ scale: 0.98 }}
            className="max-w-6xl mx-auto bg-[#111827]/60 border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-md active:border-[#d4af37]/40 transition-colors"
          >
            <FaQuoteLeft className="text-[#d4af37] text-2xl mb-3 opacity-80" />
            <p className="text-gray-200 text-xs sm:text-base leading-relaxed italic">
              "I had the pleasure of working with Puneet during multiple development and AI projects. He consistently demonstrated strong problem-solving skills, technical curiosity and a commitment to delivering quality work."
            </p>
            <div className="mt-4 pt-3 border-t border-white/10">
              <h3 className="text-white text-base sm:text-lg font-bold">John Smith</h3>
              <p className="text-[#d4af37] text-xs font-semibold">Senior Software Engineer | AI Research Mentor</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
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
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <motion.a
                whileTap={{ scale: 0.94 }}
                href="mailto:parasgoswami1156@gmail.com"
                className="w-full sm:w-auto bg-[#ebb236] text-black px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 active:shadow-[0_0_20px_#ebb236] transition-all"
              >
                <HiOutlineMail className="text-lg" />
                parasgoswami1156@gmail.com
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.94 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 px-5 py-2.5 rounded-xl text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 active:border-[#ebb236] transition-all"
              >
                <FaLinkedin className="text-lg" />
                Follow on LinkedIn
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.94 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 px-5 py-2.5 rounded-xl text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 active:border-[#ebb236] transition-all"
              >
                <FaGithub className="text-lg" />
                GitHub
              </motion.a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center pb-2">
          <div className="flex items-center justify-center gap-2 mb-0">
            <span className="text-[#d4af37] text-xs">✦ ✦ ✦</span>
            <h3 className="text-white text-lg sm:text-xl font-serif font-semibold">
              Puneet Goswami
            </h3>
            <span className="text-[#d4af37] text-xs">✦ ✦ ✦</span>
          </div>
          <p className="text-gray-400 text-xs mt-1">
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