import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/ProfilePic.jpeg";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen relative text-white flex items-center justify-center p-6 md:p-12 overflow-x-hidden font-sans">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-black to-black opacity-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image Section */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 py-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-112.5 lg:w-100 lg:h-120 bg-[#1a1e26] rounded-4xl overflow-hidden border border-white/5 shadow-2xl transform transition-all duration-700 hover:scale-105">
              <img
                src={profileImg}
                alt="Profile"
                className="object-cover w-full h-full brightness-75 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2 leading-tight">
            Hello, I'm <span className="text-[#0086c9]">Sachini Imbulagoda</span>
          </h2>

          <p className="text-2xl md:text-5xl text-gray-400 mb-4 font-bold tracking-tight h-12 md:h-16">
            <span className="text-[#98c1ed]">
              <Typewriter
                words={["FullStack Developer", "Data Analyst", "Web Developer", "UI/UX Designer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            I am a Computer Science professional with a strong interest in Data Science and analytics.
            I enjoy working with data to uncover insights, build predictive models, and develop
            data-driven solutions. Passionate about continuous learning and applying technology to
            real-world problems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <Link
              to="/projects"
              className="bg-[#0086c9] hover:bg-[#0075b0] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="border border-[#0086c9] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-[#0086c9]/10 transition-all active:scale-95"
            >
              Get In Touch
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 md:gap-6 justify-center lg:justify-start mt-8 md:mt-12">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/sachi-thakshi" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sachini-imbulagoda-6a767b311/" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:sachiniimbulagoda@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 md:w-12 md:h-12 border border-blue-600/30 hover:border-blue-400 hover:bg-blue-600/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home