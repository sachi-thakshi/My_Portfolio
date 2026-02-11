import { motion } from 'framer-motion'
import { Download, ArrowUpRight, Code, Database, Palette, Monitor, Box, Layers, Network } from 'lucide-react'
import profileImg from '../assets/AboutPic.png'
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython, SiOpenjdk,
  SiReact, SiSpringboot, SiMongodb, SiNodedotjs, SiTailwindcss, SiBootstrap,
  SiMysql, SiFigma, SiCanva, SiHibernate, 
  SiCreatereactapp
} from '@icons-pack/react-simple-icons'
import { Link } from "react-router-dom"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="w-4 h-4" /> },
      { name: "CSS", icon: <SiCss className="w-4 h-4" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Python", icon: <SiPython className="w-4 h-4" /> },
      { name: "Java", icon: <SiOpenjdk className="w-4 h-4" /> },
    ],
    glow: "bg-blue-500/40",
  },
  {
    title: "Frameworks & Stacks",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "React Native", icon: <SiCreatereactapp className="w-4 h-4" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "Boostrap", icon: <SiBootstrap className="w-4 h-4" /> },
    ],
    glow: "bg-cyan-500/40",
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
    ],
    glow:"bg-green-500/40"
  },
  {
    title: "Design Tools",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "Figma", icon: <SiFigma className="w-4 h-4" /> },
      { name: "Canva", icon: <SiCanva className="w-4 h-4" /> },
    ],
    glow:"bg-pink-500/40"
  },
  {
    title: "Design Patterns",
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: "MVC Architecture", icon: <Box className="w-4 h-4" /> },
      { name: "Layered Architecture", icon: <Layers className="w-4 h-4" /> },
      { name: "Microservices", icon: <Network className="w-4 h-4" /> },
      { name: "Hibernate", icon: <SiHibernate className="w-4 h-4" /> },
    ],
    glow:"bg-yellow-500/40"
  },
]

const About = () => {
  return (
    <section className="min-h-screen relative text-white py-20 px-6 md:p-12 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-black to-black opacity-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>

      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-6xl mx-auto mt-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="h-1.5 w-24 bg-[#0086c9] mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[#0086c9] font-bold uppercase tracking-widest text-sm mb-4 block">
              The Journey
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
              Hi, I'm Sachini — a data-driven <br />
              <span className="text-[#98c1ed]">creative developer</span> crafting <br />
              intelligent digital journeys
            </h3>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                My journey in tech is fueled by a passion for continuous learning and applying 
                technology to real-world problems. Whether it's building a full-stack application 
                or analyzing complex datasets, I focus on delivering impactful solutions.
              </p>
              <p>
                I specialize in bridging the gap between robust software engineering and 
                insightful data analysis, ensuring that every project is not only 
                functional but also strategically informed by data.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                to="/projects"
                className="flex items-center gap-2 bg-[#0086c9] hover:bg-[#0075b0] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 group"
              >
                View My Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <a
                href="https://example.com/Sachini-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 border border-[#0086c9] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0086c9]/10 transition-all active:scale-95 group"
              >
                Download Resume  
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-[#0086c9]/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Sachini Profile" 
                  className="object-cover w-full h-full brightness-90 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capability Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#0086c9] font-mono text-sm tracking-widest uppercase mb-2 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Ecosystem</h2>
          <div className="h-1.5 w-32 bg-[#0086c9] mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>

        {/* Skills Timeline/Ecosystem */}
        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex gap-8 md:gap-12"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full border-2 border-[#0086c9]/50 group-hover:border-[#0086c9] transition-colors bg-black z-10 relative shadow-[0_0_15px_rgba(0,134,201,0.3)]" />
                  <div className={`absolute inset-0 ${category.glow} blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
                {index !== skillCategories.length - 1 && (
                  <div className="w-px h-full bg-linear-to-b from-[#0086c9]/30 to-transparent mt-2" />
                )}
              </div>

              <div className="pb-12 w-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-blue-400/70 group-hover:text-[#0086c9] transition-colors">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-x-10 gap-y-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center gap-3 group/skill cursor-default"
                    >
                      <div className="transition-all duration-300 filter grayscale group-hover/skill:grayscale-0 text-blue-400/80 group-hover/skill:text-blue-400">
                        {skill.icon} 
                      </div>
                      <span className="text-lg md:text-xl text-gray-400 group-hover/skill:text-[#98c1ed] font-medium transition-all duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About