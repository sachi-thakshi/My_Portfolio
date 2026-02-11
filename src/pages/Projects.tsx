import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, X } from 'lucide-react';

import CielCLothingStoreImg from '../assets/projects/ciel-clothing-store.png'
import TiCTacToeImg from '../assets/projects/tic-tac-toe.png'
import SimpleCalImg from '../assets/projects/simple-calculator.png'
import POSImg from '../assets/projects/pos-system.png'
import TrafficRacerImg from '../assets/projects/traffic-racer.png'
import TastyCeylonImg from '../assets/projects/tasty-ceylon.png'
import PawBuddiesImg from '../assets/projects/paw-buddies.png'
import HotelSiteImg from '../assets/projects/hote-site.png'
import MHealthCareImg from '../assets/projects/serenity-mental-health-care-management-system.png'
import CMSImg from '../assets/projects/complain-management-system.png'
import PawPalImg from '../assets/projects/pawpal.png'
import MoonPagesImg from '../assets/projects/moon-pages.png'
import VHNImg from '../assets/projects/vhn-data-analyst.png'
import JourneyMateImg from '../assets/projects/journeymate.png'

interface Project {
  id: number;
  title: string;
  category: 'Web' | 'App' | 'Desktop' | 'Data';
  image: string;
  description: string;
  github?: string[];
  linkedin?: string;
  techStack: string[];
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Ciel Clothing Store', 
    category: 'Desktop', 
    image: CielCLothingStoreImg, 
    description: 'A clothing retail store management application built with Java, CSS, and JavaFX, designed using both MVC and layered architecture to ensure scalability, maintainability, and a clean separation of concerns. The system streamlines operations, improves efficiency, and enhances customer satisfaction through a structured and intuitive interface.',
    github: [
      'https://github.com/sachi-thakshi/Ciel-Clothing-Store.git',
      'https://github.com/sachi-thakshi/Ciel-Clothing-Store-Layered-Architecture.git'
    ],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_java-javafx-retailmanagement-activity-7334902329776787456-tBre?utm_source=share&utm_medium=member_ios&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY',
    techStack: ['Java', 'JavaFX', 'MySQL', 'CSS', 'MVC Architecture', 'Layered Architecture']
  },
  { 
    id: 2, 
    title: 'Tic-Tac-Toe', 
    category: 'Desktop', 
    image: TiCTacToeImg, 
    description: 'This  game, built with Java, lets two players take turns marking X`s and O`s on a 3x3 grid.The game detects wins and draws, providing an interactive experience while demonstrating Java`s ability to handle user input and game logic.',
    github: ['https://github.com/sachi-thakshi/Tic-Tac-Toe-Game-Final-OOP-Course-Work.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_java-javafx-gamedevelopment-activity-7334898288631963648-8yBJ?utm_source=share&utm_medium=member_ios&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY',
    techStack: ['Java', 'JavaFX', 'OOP']
  },
  { 
    id: 3, 
    title: 'Simple Calculator', 
    category: 'Web', 
    image: SimpleCalImg, 
    description: 'A simple calculator built with HTML, CSS, and JavaScript, featuring a clean interface and basic arithmetic operations for quick and user‑friendly calculations.',
    github: ['https://github.com/sachi-thakshi/IT-Assignment-6-Calculator.git'],
    techStack: ['JavaScript', 'HTML', 'CSS']
  },
  { 
    id: 4, 
    title: 'POS System', 
    category: 'Web', 
    image: POSImg, 
    description: 'A simple Point of Sale (POS) single‑page application built with HTML, CSS, and JavaScript, designed for managing sales and items in a clothing retail context. As a front‑end only solution with no backend integration, all details are cleared upon page reload, making it lightweight and easy to use for demonstration purposes.',
    github: ['https://github.com/sachi-thakshi/IT-Assignment-8-POS-System-SPA-.git'],
    techStack: ['HTML', 'CSS', 'JS']
  },
  { 
    id: 5, 
    title: 'Traffic Racer', 
    category: 'Web', 
    image: TrafficRacerImg, 
    description: 'A simple traffic racer game built with HTML, CSS, and JavaScript, featuring smooth controls and dynamic gameplay where players navigate through traffic to avoid collisions and keep racing.',
    github: ['https://github.com/sachi-thakshi/IT-Assignment-09-Traffic-Racer.git'],
    techStack: ['HTML', 'CSS', 'JS']
  },
  { 
    id: 6, 
    title: 'Tasty Ceylon', 
    category: 'Web', 
    image: TastyCeylonImg, 
    description: 'A responsive recipe website named TastyCeylon, built with HTML and CSS, showcasing authentic Sri Lankan food recipes through a clean, mobile‑friendly, user‑friendly design and The site is hosted on Firebase.',
    github: ['https://github.com/sachi-thakshi/Tasty-Ceylon.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_html-css-webdesign-activity-7334907732120006656-LUqt?utm_source=share&utm_medium=member_ios&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY',
    techStack: ['HTML', 'CSS']
  },
  { 
    id: 7, 
    title: 'Paw Buddies', 
    category: 'Web', 
    image: PawBuddiesImg, 
    description: 'A responsive web page named Paw Buddies, built with HTML and CSS, showcasing dog details in a clean, mobile‑friendly design. The site is hosted on Firebase, making it easily accessible online with a lightweight front‑end implementation.',
    github: ['https://github.com/sachi-thakshi/Paw-Buddies.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_html-css-webdesign-activity-7334910346211610625-Otzj?utm_source=share&utm_medium=member_ios&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY',
    techStack: ['HTML', 'CSS']
  },
  { 
    id: 8, 
    title: 'Conrad Maldives Rangali Island Resort', 
    category: 'Web', 
    image: HotelSiteImg, 
    description: 'An attractive and responsive hotel management website for Conrad Maldives Rangali Island Resort, built with HTML, CSS, and Bootstrap. The site features a modern design and user‑friendly layout to showcase resort services and enhance the guest experience.',
    github: ['https://github.com/sachi-thakshi/Conrad-Maldives-Rangali-Island-Resort.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_html-css-bootstrap-activity-7334918096312270848-kkWE?utm_medium=ios_app&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY&utm_source=social_share_send&utm_campaign=copy_link',
    techStack: ['HTML', 'CSS', 'Boostrap']
  },
  { 
    id: 9, 
    title: 'Serenity Mental Health Care Management System', 
    category: 'Desktop', 
    image: MHealthCareImg, 
    description: 'Serenity Medical Center is a Mental Health Care Management System built with JavaFX and Hibernate, designed to streamline patient management and mental health services.',
    github: ['https://github.com/sachi-thakshi/sachi-thakshi-ORM-Final-Coursework-Serenity-Mental-Health-Therapy-Center.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_java-javafx-hibernate-activity-7334913949714276352-XIq7?utm_medium=ios_app&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY&utm_source=social_share_send&utm_campaign=copy_link',
    techStack: ['Java', 'JavaFX', 'CSS', 'Hibernate']
  },
  { 
    id: 10, 
    title: 'Municipal IT Division - Complaint Management System (CMS)', 
    category: 'Web', 
    image: CMSImg, 
    description: 'A full‑stack Complaint Management System (CMS) for the Municipal IT Division, built with Java EE (JSP, Servlets, JDBC with DBCP) using the MVC pattern. It enables complaint submission and secure admin monitoring, strictly following form‑based synchronous HTTP interaction without AJAX or asynchronous calls.',
    github: ['https://github.com/sachi-thakshi/Complaint-Management-System.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_java-javafx-hibernate-activity-7334913949714276352-XIq7?utm_medium=ios_app&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY&utm_source=social_share_send&utm_campaign=copy_link',
    techStack: ['JavaEE', 'JSP', 'JDBC', 'MVC']
  },
  { 
    id: 11, 
    title: 'PawPal', 
    category: 'Web', 
    image: PawPalImg, 
    description: 'PawPal is a comprehensive web application for pet owners and animal lovers, offering adoption, pet account management, veterinary bookings, lost‑and‑found reporting, pet care tips, photo sharing, and shopping—all in one platform. It supports two user roles: Customers and Admins, each with tailored features to ensure smooth operation and an excellent user experience.',
    github: ['https://github.com/sachi-thakshi/PawPal.git'],
    linkedin: 'https://www.linkedin.com/posts/sachini-imbulagoda-6a767b311_springboot-java-mysql-activity-7375489506457702400-ex9h?utm_source=share&utm_medium=member_ios&rcm=ACoAAE9MnR8BCXO-ucrPrKa7ti5CatbmdaauOxY',
    techStack: ['Java', 'HTML', 'CSS3', 'JavaScript', 'Boostrap', 'JWT', 'Java SpringBoot', 'MySQL', 'WebSocket', 'Maven']
  },
  { 
    id: 12, 
    title: 'MoonPages', 
    category: 'Web', 
    image: MoonPagesImg, 
    description: 'A comprehensive full-stack online book reading platform developed using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. The application features an integrated AI companion to enhance the user experience.',
    github: [
      'https://github.com/sachi-thakshi/MoonPages-FE.git',
      'https://github.com/sachi-thakshi/MoonPages-BE.git'
    ],
    linkedin: 'https://www.linkedin.com/in/sachini-imbulagoda-6a767b311/',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'MERN Stack', 'HTML', 'Tailwind CSS']
  },
  { 
    id: 13, 
    title: 'Vitality Health Project', 
    category: 'Data', 
    image: VHNImg, 
    description: 'A data science initiative focused on patient risk stratification. Developed using Python and data analysis techniques to identify and categorize patient risk levels for improved healthcare outcomes.',
    github: ['https://github.com/sachi-thakshi/Vitality-Health-Risk-Stratification.git'],
    techStack: ['Python', 'Pandas', 'Data Analysis', 'Matplotlib', 'Jupyter']
  },
  { 
    id: 3, 
    title: 'JourneyMate', 
    category: 'App', 
    image: JourneyMateImg, 
    description: 'A cross-platform mobile travel planning application built with React Native and Expo. It utilizes Firebase for real-time data management and user authentication to streamline trip organization.',
    github: ['https://github.com/sachi-thakshi/JourneyMate.git'],
      techStack: ['React Native', 'Expo', 'Firebase', 'Mobile Dev']
  }
]

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Web' | 'App' | 'Desktop' | 'Data'>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = [...projects]
    .reverse() 
    .filter(p => activeTab === 'All' || p.category === activeTab)  

  return (
    <section className="min-h-screen relative text-white py-20 px-6 md:p-12 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-black to-black opacity-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>

      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className='relative z-10 max-w-6xl mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">My <span className="text-[#0086c9]">Work</span></h2>
          <div className="h-1.5 w-24 bg-[#0086c9] mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 md:space-x-6 mb-12">
          {['All', 'Web', 'App', 'Desktop', 'Data'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-[#0086c9] text-white shadow-lg shadow-blue-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map(project => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-[#161b22]/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100" />
                </div>
                <div className="p-6">
                  <span className="text-[#0086c9] text-xs font-bold uppercase tracking-tighter">{project.category}</span>
                  <h4 className="text-xl font-bold mt-1 text-[#98c1ed]">{project.title}</h4>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    <ExternalLink size={16} className="text-[#0086c9]" />
                    <span className="text-xs text-gray-400">View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Modal Section */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            ></motion.div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-60 bg-[#161b22] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl scrollbar-hide"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition z-20 backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col">
                {/* 1. Full Image Section */}
                <div className="w-full bg-black/20 flex items-center justify-center">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto max-h-[60vh] object-contain rounded-t-3xl" 
                  />
                </div>

                {/* 2. Details Section (Below the image) */}
                <div className="p-8 md:p-10 bg-linear-to-b from-[#161b22] to-black">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-[#0086c9] text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mt-3 text-[#98c1ed]">{selectedProject.title}</h3>
                    </div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300 font-medium uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-10 text-base md:text-lg border-l-2 border-[#0086c9] pl-6 italic">
                    {selectedProject.description}
                  </p>

                  {/* Links Section */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                    {(selectedProject.github ?? []).map((link, index) => {
                      const repoName = link.split('/').pop()?.replace('.git', '') || 'GitHub Repo';
                      return (
                        <a 
                          key={index}
                          href={link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-3 bg-[#0086c9] hover:bg-[#0075b0] px-8 py-3.5 rounded-full font-bold transition active:scale-95 text-sm shadow-lg shadow-blue-950/50"
                        >
                          <Github size={18} /> 
                          {repoName}
                        </a>
                      )
                    })}

                    {selectedProject.linkedin && (
                      <a 
                        href={selectedProject.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-3 border border-white/10 hover:bg-white/5 px-8 py-3.5 rounded-full font-bold transition text-sm backdrop-blur-sm"
                      >
                        <Linkedin size={18} /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio