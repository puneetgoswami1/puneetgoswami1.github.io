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
  FaExternalLinkAlt,
FaChevronLeft,
FaChevronRight
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastShownRef = useRef(false);
// CAROUSEL STATE & RECOMMENDATIONS DATA
  const [currentRec, setCurrentRec] = useState(0);

  const recommendations = [
    {
      quote:
        "Puneet has an exceptional ability to cut through complex, unorganized datasets and turn them into crystal-clear executive narratives. His work on automated SQL pipelines and Power BI reporting significantly reduced our data latency, enabling leadership to make faster, high-confidence growth decisions.",
      name: "Amitabh Saxena",
      role: "Lead Analytics Manager | Business Intelligence",
    },
    {
      quote:
        "Working alongside Puneet was a seamless experience. He didn’t just write queries; he deeply understood the underlying business metrics behind retention and funnel drops. His proactive data validation and dbt modeling ensured our core stakeholder dashboards were always reliable and audit-ready.",
      name: "Sarah Jenkins",
      role: "Senior Product Operations Lead",
    },
    {
      quote:
        "Puneet consistently brought deep technical discipline to SQL and Python data workflows. Whether optimizing query execution times or designing automated anomaly detection routines, his analytical problem-solving and structured documentation made him a vital asset across sprint cycles.",
      name: "Rohan Mehra",
      role: "Principal Data Architect",
    },
  ];

  const prevRec = () => {
    triggerHaptic();
    setCurrentRec((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
  };

  const nextRec = () => {
    triggerHaptic();
    setCurrentRec((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
  };
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
    { title: "Google Data Analytics Professional Certificate", issuer: "Google", date: "Jul 2023" },
    { title: "SQL for Data Science & Business Intelligence", issuer: "UC Davis", date: "Oct 2023" },
    { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "Apr 2024" },
    { title: "HubSpot Inbound Marketing & Revenue Analytics", issuer: "HubSpot", date: "Aug 2024" },
    { title: "Tableau Desktop Specialist", issuer: "Tableau", date: "Nov 2024" },
    { title: "Google Advanced Data Analytics Specialization", issuer: "Google", date: "Jan 2025" },
    { title: "Fundamentals of Accelerated Computing with Python", issuer: "NVIDIA", date: "Apr 2025" },
    { title: "dbt Fundamentals (Analytics Engineering)", issuer: "dbt Labs", date: "Jul 2025" },
    { title: "HubSpot CRM & Sales Operations Reporting", issuer: "HubSpot", date: "Sep 2025" },
    { title: "Snowflake Hands-On Essentials: Data Warehousing", issuer: "Snowflake", date: "Nov 2025" },
    { title: "Microsoft Certified: Azure Data Fundamentals (DP-900)", issuer: "Microsoft", date: "Jan 2026" },
    { title: "Generative AI for Data Analytics & Insights", issuer: "Google Cloud", date: "Apr 2026" },
  ];

 // LINE 130 SE 143 TAK PURA REPLACE KAR DO:
  const projects = [
    {
      title: "Fintech Real-Time Fraud & Anomaly Detection",
      desc: "Architected transaction velocity and anomaly detection engine processing 200k+ events to flag high-risk transfers and chargeback leaks.",
      tech: ["Python", "SQL", "XGBoost", "Power BI", "Data Modeling"],
    },
    {
      title: "Cross-Border D2C Cohort & Customer LTV Engine",
      desc: "Modeled multi-region retention curves, repurchase rates, and customer acquisition payback to optimize global advertising ROAS.",
      tech: ["SQL", "Python", "Tableau", "Cohort Analysis", "PostgreSQL"],
    },
    {
      title: "Modern Data Stack ELT Pipeline with dbt & Snowflake",
      desc: "Designed star-schema dimensional models with automated data quality testing and incremental dbt builds for daily analytics refresh.",
      tech: ["dbt", "Snowflake", "SQL", "Airflow", "Data Warehousing"],
    },
    {
      title: "SaaS Product Funnel & Churn Prediction System",
      desc: "Built user journey activation funnels and a logistic regression churn score to identify high-risk accounts 30 days prior to renewal.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Mixpanel", "SQL"],
    },
    {
      title: "Omnichannel Marketing Multi-Touch Attribution",
      desc: "Developed Markov-chain and algorithmic attribution models across 6 ad networks to eliminate multi-channel revenue over-reporting.",
      tech: ["Python", "R", "SQL", "Google BigQuery", "Power BI"],
    },
    {
      title: "Supply Chain Inventory & Safety Stock Optimization",
      desc: "Implemented dynamic reorder point models and supplier transit variance tracking to reduce stockout rate by 18% across 4 warehouses.",
      tech: ["Python", "Time Series", "SQL", "Tableau", "Operations Analytics"],
    },
    {
      title: "Multi-Asset Prop Trading Risk & Volatility Dashboard",
      desc: "Built automated risk engine calculating Sharpe/Sortino ratios, max drawdown distributions, and Value-at-Risk (VaR) for spot & derivatives.",
      tech: ["Python", "NumPy", "SQL", "Power BI", "Financial Modeling"],
    },
    {
      title: "Healthcare Clinic Utilization & Patient Wait Analytics",
      desc: "Analyzed admission arrival patterns and clinical triage flow to balance provider capacity and compress average emergency queue times.",
      tech: ["SQL", "Python", "Tableau", "Capacity Planning", "Statistics"],
    },
    {
      title: "AI Voice & Text Support Ticket Topic Discovery",
      desc: "Engineered NLP embedding cluster pipeline to auto-categorize 50k+ raw customer complaints into actionable product defect trends.",
      tech: ["Python", "Transformers", "spaCy", "SQL", "Data Analytics"],
    },
    {
      title: "B2B Sales Velocity & Quota Performance Dashboard",
      desc: "Created executive revenue pipeline dashboard tracking deal stage conversion, sales cycle friction, and rep quota attainment.",
      tech: ["Power BI", "DAX", "SQL Server", "ETL", "Sales Analytics"],
    },
    {
      title: "Geospatial Retail Market Penetration & Cannibalization",
      desc: "Evaluated customer drive-time radiuses and trade-area demographics to optimize new storefront expansion while minimizing store overlap.",
      tech: ["Python", "GeoPandas", "PostGIS", "SQL", "Data Visualization"],
    },
    {
      title: "Employee Flight Risk & Workforce Equity Analytics",
      desc: "Modeled tenure survival analysis and internal pay-band distributions to provide predictive attrition warnings for core technical roles.",
      tech: ["Python", "Survival Analysis", "SQL", "Power BI", "People Analytics"],
    },
  ];

 const experiences = [
    {
      company: "Contra",
      role: "Data Analyst Intern",
      date: "April 2023 - June 2024",
      side: "right",
      logo: <span className="text-[10px] md:text-[11px] font-extrabold text-white tracking-tight">Contra</span>,
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
      logo: <span className="text-[10px] md:text-[11px] font-extrabold text-white tracking-tight">Vmayo</span>,
      points: [
        "Analyzed business datasets using SQL, Excel and Power BI to identify trends and KPIs.",
        "Designed interactive dashboards and automated reports for operational decision-making.",
        "Perform data cleaning, validation and transformation to improve data quality."
      ],
      skills: ["SQL", "Excel", "Power BI", "Data Analysis", "Dashboard Development"]
    },
    {
      company: "Lemon.io",
      role: "Data Analyst",
      date: "January 2024 - November 2024",
      side: "right",
      logo: <span className="text-[10px] md:text-[11px] font-black text-[#facc15] tracking-tight">Lemon</span>,
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
    <main className="min-h-screen text-white overflow-x-hidden relative select-none bg-[#06030f]">
      {/* HERO BACKGROUND (CONSTRAINED TO 100VH - ZERO SCROLL LAG, NO BLEED BEHIND BLACK SECTIONS) */}
      <div
        className="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/nj.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* NAVBAR */}
    <nav
  className={`fixed top-0 left-0 w-full px-5 md:px-12 py-3.5 md:py-4 flex justify-between items-center z-50 transition-all duration-500 ease-in-out ${
    scrolled
      ? "bg-black/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      : "bg-transparent"
  }`}
>
        <h1 className="text-xl md:text-xl font-serif font-bold tracking-wider text-[#e8cb76] cursor-pointer hover:text-[#ffd978] transition-colors">
          P.G.
        </h1>
        <ul className="hidden md:flex items-center gap-9 text-[14.5px] tracking-wide text-gray-300 font-medium">
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
        
       {/* REALISTIC RANDOM HEBA-STYLE METEORS (LINEAR SPEED - ZERO BRAKING/DELAY) */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes meteorStreak {
              0% {
                transform: translate3d(0, 0, 0) rotate(-35deg);
                opacity: 0;
              }
              0.4% {
                opacity: 0.8;  
              }
              4.5% {
  opacity: 0.7;
}
5.0% {
  transform: translate3d(-850px, 580px, 0) rotate(-35deg);
  opacity: 0;
}
100% {
  transform: translate3d(-850px, 580px, 0) rotate(-35deg);
  opacity: 0;
}
            }

            @media (max-width: 767px) {
              @keyframes meteorStreak {
                0% {
                  transform: translate3d(0, 0, 0) rotate(-35deg);
                  opacity: 0;
                }
                0.4% {
                  opacity: 0.8;
                }
                2.0% {
                  opacity: 0.7;
                }
                2.5% {
                  transform: translate3d(-210px, 140px, 0) rotate(-35deg);
                  opacity: 0;
                }
                100% {
                  transform: translate3d(-210px, 140px, 0) rotate(-35deg);
                  opacity: 0;
                }
              }
            }

            .meteor-base {
              position: absolute;
              height: 1px;
              width: 50px;
              background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(212,175,55,0.4) 50%, rgba(255,255,255,0.85) 100%);
              border-radius: 9999px;
              filter: drop-shadow(0 0 3px rgba(212,175,55,0.6));
              animation: meteorStreak 24s linear infinite;
              will-change: transform, opacity;
              pointer-events: none;
              opacity: 0;
            }

            .meteor-base::after {
              content: '';
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 2px;
              height: 2px;
              border-radius: 50%;
              background: #ffffff;
              box-shadow: 0 0 4px 1px rgba(255,255,255,0.8), 0 0 7px 1px rgba(212,175,55,0.5);
            }

            @media (min-width: 768px) {
              .meteor-base {
                width: 75px;
              }
            }
          `}} />

          {/* 3 RANDOM SKY POSITIONS (STAGGERED EVERY 8 SECONDS) */}
          {/* Position 1: Top Right */}
          <div className="absolute top-[8%] right-[14%] z-0 pointer-events-none">
            <div className="meteor-base" style={{ animationDelay: "0s" }} />
          </div>

          {/* Position 2: Mid-Sky (Thoda Niche & Left) */}
          <div className="absolute top-[22%] right-[28%] z-0 pointer-events-none">
            <div className="meteor-base" style={{ animationDelay: "8s" }} />
          </div>

          {/* Position 3: High Sky (Upar Beech Me) */}
          <div className="absolute top-[6%] right-[38%] z-0 pointer-events-none">
            <div className="meteor-base" style={{ animationDelay: "16s" }} />
          </div>



{/* REALISTIC 3 FLYING BIRDS FLOCK (FACING LEFT - CONTINUOUS FLOW - ZERO BREAKS) */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes flyAcrossLinear {
              0% {
                transform: translate3d(0, 0, 0);
                opacity: 0;
              }
              2% {
                opacity: 0.85;
              }
              90% {
                opacity: 0.85;
              }
              100% {
                transform: translate3d(calc(-100vw - 280px), 0, 0);
                opacity: 0;
              }
            }

            @keyframes flockUndulation {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-26px);
              }
            }

            @keyframes wingBeat {
              0% {
                transform: rotate(-22deg);
              }
              50% {
                transform: rotate(26deg);
              }
              100% {
                transform: rotate(-22deg);
              }
            }

            .flock-motion-path {
              position: absolute;
              top: 18%;
              right: -100px;
              pointer-events: none;
              z-index: 1;
              animation: flyAcrossLinear 9.5s linear 0.4s 1 forwards;
              will-change: transform, opacity;
            }

            .flock-wave {
              display: flex;
              align-items: center;
              position: relative;
              animation: flockUndulation 4s ease-in-out infinite;
            }

            .bird-wing-flap {
              transform-origin: 15px 15px;
              animation: wingBeat 0.38s ease-in-out infinite;
            }

            .bird-wing-flap-fast {
              transform-origin: 15px 15px;
              animation: wingBeat 0.32s ease-in-out infinite;
            }

            .bird-wing-flap-slow {
              transform-origin: 15px 15px;
              animation: wingBeat 0.42s ease-in-out infinite;
            }
@keyframes birdGlance {
  0%, 42%, 58%, 100% {
    transform: rotate(0deg) scaleX(1);
  }
  48% {
    /* 1 baar peeche mud kar dekhegi */
    transform: rotate(14deg) scaleX(-0.85);
  }
  53% {
    /* Wapas aage dekhne lagegi */
    transform: rotate(-6deg) scaleX(1);
  }
}

.bird-glance {
  animation: birdGlance 9.5s linear 0.4s 1 forwards;
  transform-origin: center;
}

          `}} />

          <div className="flock-motion-path select-none">
            <div className="flock-wave">
              {/* Chidiya 1: FRONT LEADER (Sabse aage - Face Left) */}
              <div className="relative bird-glance">
                <svg
                  viewBox="0 0 50 32"
                  className="w-7 h-4 md:w-9 md:h-5 fill-white/30 opacity-40 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  {/* Far Wing */}
                  <path
                    d="M15 15 C19 9 26 4 35 2 C31 8 27 13 21 16 Z"
                    className="bird-wing-flap-slow opacity-60"
                  />
                  {/* Main Body (Facing Left) */}
                  <path d="M2 16 C5 14 9 13 13 14 C18 15 28 17 48 19 C43 21 35 21 25 21 C17 21 12 20 7 18 C4 17 3 17 2 16 Z" />
                  {/* Near Wing (Flapping) */}
                  <path
                    d="M14 15 C19 8 28 2 38 1 C34 8 29 14 22 16 Z"
                    className="bird-wing-flap"
                  />
                </svg>
              </div>

              {/* Chidiya 2: TOP TRAILING (Gap: 45px peeche aur thoda upar) */}
              <div className="absolute left-11 -top-6">
                <svg
                  viewBox="0 0 50 32"
                  className="w-6 h-3.5 md:w-8 md:h-4.5 fill-white/32 opacity-35 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  <path
                    d="M15 15 C19 9 26 4 35 2 C31 8 27 13 21 16 Z"
                    className="bird-wing-flap opacity-60"
                  />
                  <path d="M2 16 C5 14 9 13 13 14 C18 15 28 17 48 19 C43 21 35 21 25 21 C17 21 12 20 7 18 C4 17 3 17 2 16 Z" />
                  <path
                    d="M14 15 C19 8 28 2 38 1 C34 8 29 14 22 16 Z"
                    className="bird-wing-flap-fast"
                  />
                </svg>
              </div>

              {/* Chidiya 3: BOTTOM TRAILING (Gap: 75px peeche aur thoda niche) */}
              <div className="absolute left-[75px] top-6">
                <svg
                  viewBox="0 0 50 32"
                  className="w-5.5 h-3 md:w-7 md:h-4 fill-white/30 opacity-32 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  <path
                    d="M15 15 C19 9 26 4 35 2 C31 8 27 13 21 16 Z"
                    className="bird-wing-flap-fast opacity-60"
                  />
                  <path d="M2 16 C5 14 9 13 13 14 C18 15 28 17 48 19 C43 21 35 21 25 21 C17 21 12 20 7 18 C4 17 3 17 2 16 Z" />
                  <path
                    d="M14 15 C19 8 28 2 38 1 C34 8 29 14 22 16 Z"
                    className="bird-wing-flap-slow"
                  />
                </svg>
              </div>
            </div>
          </div>

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
{/* 1. Left Side Moving Object (Faded & Slow) */}
        <motion.div
          className="absolute -left-10 md:left-8 top-28 md:top-32 w-32 h-32 md:w-44 md:h-44 border border-[#d4af37]/10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        {/* 2. Right Side Moving Object (Faded & Slow) */}
        <motion.div
          className="absolute -right-10 md:right-10 top-36 md:top-40 w-36 h-36 md:w-48 md:h-48 rounded-full border border-dashed border-[#d4af37]/15 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />

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
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-24 px-2">
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[3px] border-[#d4af37] bg-white/5 shadow-[0_0_25px_rgba(212,175,55,0.2)]"></div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 text-gray-300 text-xs md:text-[14px] leading-relaxed hover:border-[#d4af37]/40 transition-colors">
              Hi, my name is Puneet and I am an aspiring Data Analyst from Jaipur. I am passionate about data analytics, business intelligence, dashboard creation and transforming raw data into meaningful insights. I enjoy working with SQL, Python, Power BI and Excel to solve real-world business problems and help organizations make data-driven decisions.
            </div>
          </div>
        </div>

      {/* CONTINUOUS ZERO-GAP HARDWARE MARQUEE (DESKTOP ZERO-LAG + NO BREAK) */}
        <div className="mt-8 md:mt-16 text-center">
          <h3 className="tracking-[3px] md:tracking-[5px] text-[#d4af37] uppercase text-xs mb-6 md:mb-8 font-semibold">
            ORGANIZATIONS & PLATFORMS
          </h3>
        </div>

        {/* Embedded Pure CSS Animation (GPU Compositor Thread par 60FPS scroll-lag free) */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeInfinite {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .gpu-marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeInfinite 12s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
        `}} />

        <div className="overflow-hidden w-full max-w-5xl md:max-w-6xl mx-auto relative mb-12 md:mb-28 pointer-events-none">
          <div className="gpu-marquee-track">
            {/* Track 1 (Double items taaki desktop screen par kabhi blank gap na bane) */}
            <div className="flex items-center gap-8 md:gap-10 pr-8 md:pr-10 shrink-0">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span key={`track1-${idx}`} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 select-none">
                  <span className="text-[#d4af37] text-sm md:text-base">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>

            {/* Track 2 (Exact Duplicate - Jaise hi Track 1 aage jayega, Track 2 bina kisi gap ke loop karega) */}
            <div className="flex items-center gap-8 md:gap-10 pr-8 md:pr-10 shrink-0">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span key={`track2-${idx}`} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 select-none">
                  <span className="text-[#d4af37] text-sm md:text-base">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="flex items-center justify-center gap-3 mt-14 md:mt-24 mb-1">
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

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-14 md:mb-28">
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
        <div id="experience" className="scroll-mt-20 text-center my-14 md:my-28">
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

          <div className="relative max-w-5xl mx-auto py-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-6 md:mb-16 cursor-pointer"
              >
                {/* 1. TIMELINE LINE (Sirf cards ke beech chalegi - Upar Contra se bahar nahi jayegi aur Lemon par end ho jayegi) */}
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1.5px] bg-[#d4af37]/40 top-5 -bottom-20 z-0 pointer-events-none" />
                )}

                {/* 2. HEBA STYLE BADGE (Box ke bilkul Top par aligned) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 top-0">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-[#d4af37] bg-[#0c0915] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.45)] select-none">
                    {exp.logo}
                  </div>
                </div>

                {/* 3. CARD CONTAINER (Circle ko touch karega - Beech ka gap khatam) */}
                {/* 3. CARD CONTAINER (DIRECTION-AWARE SLIDE - SIRF EK BAAR CHALEGA) */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: exp.side === "left" ? -40 : 40,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.12,
                  }}
                  className={`w-full md:w-[calc(50%-24px)] transform-gpu will-change-transform ${
                    exp.side === "left"
                      ? "md:mr-auto text-left"
                      : "md:ml-auto text-left"
                  }`}
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-[#d4af37] font-semibold text-xs md:text-sm mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <span className="text-gray-400 text-xs text-right whitespace-nowrap">
                        {exp.date}
                      </span>
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
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* RESEARCH */}
        <section id="research" className="py-8 md:py-24">
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
          {/* Card 1: Customer Churn & Retention */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300">
            <div className="flex justify-between items-start gap-3 mb-2">
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">Customer Churn & Retention Analysis</h3>
                <p className="text-[#d4af37] font-semibold text-xs mt-0.5">Data Analytics Researcher</p>
              </div>
              <span className="text-gray-400 text-xs whitespace-nowrap shrink-0">Jan 2024 - Jul 2024</span>
            </div>
            <p className="text-gray-300 text-xs md:text-[13px] mb-3 leading-relaxed">
              Analyzed 120k+ user transaction logs to isolate early churn signals and identify friction points in customer retention lifecycles.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "SQL", "Cohort Analysis", "Retention Modeling"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 2: Retail Demand Forecasting */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300">
            <div className="flex justify-between items-start gap-3 mb-2">
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">Retail Demand Forecasting Study</h3>
                <p className="text-[#d4af37] font-semibold text-xs mt-0.5">Applied Data Researcher</p>
              </div>
              <span className="text-gray-400 text-xs whitespace-nowrap shrink-0">Aug 2024 - Mar 2025</span>
            </div>
            <p className="text-gray-300 text-xs md:text-[13px] mb-3 leading-relaxed">
              Benchmarked classical time-series algorithms against gradient-boosted trees on retail supply chain data to optimize sales forecasting.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "Time Series", "Pandas", "Scikit-Learn"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-white">{tag}</span>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 py-8 md:py-24">
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

          {/* PROJECTS GRID WITH HARDWARE ACCELERATED CASCADE ANIMATION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    delay: index >= 6 ? (index - 6) * 0.05 : 0,
                    ease: "easeOut",
                  }}
                  className="transform-gpu bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col justify-between hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* VIEW ALL / SHOW LESS BUTTON (GLOW + CLICK EFFECT) */}
          <div className="flex justify-center mt-7">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllProjects(!showAllProjects);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 active:scale-90 ${
                showAllProjects
                  ? "border border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:text-white"
                  : "border border-[#d4af37] bg-black/40 text-[#ffd95e] shadow-[0_0_18px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.65)] hover:scale-105 active:shadow-[0_0_35px_rgba(212,175,55,0.85)]"
              }`}
            >
              <span className="text-[10px]">{showAllProjects ? "▲" : "▼"}</span>
              {showAllProjects ? "Show Less" : `View All ${projects.length} Projects`}
            </button>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="Leadership" className="py-8 md:py-24">
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
        {
          title: "Student Lead — Data & Analytics Wing",
          org: "The ICFAI University, Jaipur",
          date: "Aug 2023 - May 2024",
          desc: "Led hands-on SQL and Power BI workshops for 120+ students; mentored juniors on business analytics problem statements and data modeling."
        },
        {
          title: "Analytics Track Coordinator",
          org: "Annual University Tech Fest",
          date: "Sep 2023 - Feb 2024",
          desc: "Designed exploratory data challenge rubrics, curating retail and financial datasets for 35+ participating collegiate teams."
        },
        {
          title: "Technical Peer Mentor",
          org: "Google Developer Student Clubs (GDSC)",
          date: "Jan 2023 - Dec 2023",
          desc: "Conducted collaborative sessions covering Python for data analysis, clean ETL practices, and Git-based collaborative workflows."
        }
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
        <section id="skills" className="scroll-mt-20 py-8 md:py-24">
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
        { 
          title: "Languages & Querying", 
          list: ["SQL", "Python", "Power Query (M)", "Bash"] 
        },
        { 
          title: "BI & Visualization", 
          list: ["Power BI", "Tableau", "Microsoft Fabric", "Excel (Advanced)"] 
        },
        { 
          title: "Cloud & Data Warehouse", 
          list: ["Snowflake", "Google BigQuery", "Microsoft Azure", "Databricks"] 
        },
        { 
          title: "Libraries & Analytics", 
          list: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels"] 
        },
        { 
          title: "Databases & Storage", 
          list: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"] 
        },
        { 
          title: "Developer & Agile Tools", 
          list: ["Git", "GitHub", "GitLab", "Git Bash", "JIRA", "Docker", "VS Code"] 
        },
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
        <section id="certifications" className="scroll-mt-20 py-8 md:py-24">
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
{/* CERTIFICATIONS GRID (CASCADE ANIMATION - PHONE + DESKTOP) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 max-w-6xl mx-auto">
            <AnimatePresence>
              {(showAllCertifications ? certifications : certifications.slice(0, 6)).map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    delay: index >= 6 ? (index - 6) * 0.04 : 0,
                    ease: "easeOut",
                  }}
                  className="transform-gpu bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-white font-bold text-xs md:text-sm">{cert.title}</h3>
                    <p className="text-[#d4af37] text-[11px] mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-[10px] mt-2">{cert.date}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* VIEW ALL / SHOW LESS BUTTON (GLOW + CLICK EFFECT) */}
          <div className="flex justify-center mt-7">
            <button
              onClick={() => {
                triggerHaptic();
                setShowAllCertifications(!showAllCertifications);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 active:scale-90 ${
                showAllCertifications
                  ? "border border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:text-white"
                  : "border border-[#d4af37] bg-black/40 text-[#ffd95e] shadow-[0_0_18px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.65)] hover:scale-105 active:shadow-[0_0_35px_rgba(212,175,55,0.85)]"
              }`}
            >
              <span className="text-[10px]">{showAllCertifications ? "▲" : "▼"}</span>
              {showAllCertifications ? "Show Less" : `View All ${certifications.length} Certifications`}
            </button>
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section id="Recommendation" className="py-8 md:py-24">
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
{/* HEBA ALAZZEH STYLE RECOMMENDATION SLIDER WITH ARROWS & DOTS */}
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#d4af37]/40 transition-colors">
            <FaQuoteLeft className="text-[#d4af37] text-2xl md:text-3xl mb-3 opacity-80" />

            {/* SMOOTH FADE + SLIDE ANIMATED QUOTE (PHONE + DESKTOP) */}
            <div className="min-h-[115px] md:min-h-[95px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRec}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="text-gray-200 text-xs md:text-[15px] leading-relaxed italic transform-gpu select-none"
                >
                  "{recommendations[currentRec].quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* SMOOTH ANIMATED AUTHOR NAME & ROLE */}
              <div className="min-h-[40px] flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRec}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="transform-gpu select-none"
                  >
                    <h3 className="text-white text-sm md:text-base font-bold">
                      {recommendations[currentRec].name}
                    </h3>
                    <p className="text-[#d4af37] text-xs font-semibold mt-0.5">
                      {recommendations[currentRec].role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* HEBA STYLE ARROW CONTROLS + DOTS (PHONE + DESKTOP) */}
              <div className="flex items-center justify-center md:justify-end gap-3 select-none">
                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={prevRec}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-[#d4af37] hover:text-[#d4af37] hover:scale-105 active:scale-90 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous recommendation"
                >
                  <FaChevronLeft className="text-[10px]" />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-1.5 px-1">
                  {recommendations.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        triggerHaptic();
                        setCurrentRec(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentRec === idx
                          ? "w-4 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                          : "w-2 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={nextRec}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-[#d4af37] hover:text-[#d4af37] hover:scale-105 active:scale-90 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next recommendation"
                >
                  <FaChevronRight className="text-[10px]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 pt-6 md:pt-20 pb-8 md:pb-12">
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