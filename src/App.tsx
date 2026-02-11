import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'


// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.split('/')[1]
    const pageName = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home'
    document.title = `Sachini Portfolio | ${pageName}`
    
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />

      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="relative py-10 text-white overflow-hidden border-t border-white/20">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-black via-black to-black"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">
            Sachini
          </h2>

          <p className="text-sm text-gray-400 italic mb-6 max-w-md mx-auto">
            "Innovation is not just what’s new. Innovation is how it changes lives."
          </p>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6 justify-center mt-8 mb-8">
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

          <div className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">Sachini</span>. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App