import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen relative text-white flex flex-col items-center p-6 md:p-12 overflow-x-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mb-16"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            My Academic & Engineering Journey
          </h2>
          <p className="text-3xl md:text-5xl text-[#98c1ed] font-bold">
            Resume & Projects
          </p>
          <div className="h-1 w-20 bg-[#0086c9] rounded-full lg:mx-0 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="text-[#0086c9]" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l border-blue-600/30 ml-6 pl-8 space-y-12">
              {[
                {
                  title: "Higher National Diploma in Software Engineering",
                  sub: "Institute of Java & Software Engineering (IJSE)",
                  date: "2024 - Present",
                  desc: "Specializing in full-stack development, OOP principles, enterprise application architecture, and database systems."
                },
                {
                  title: "GCE Advanced Level – Mathematics Stream",
                  sub: "2023",
                  date: "2021 - 2023",
                  desc: "Completed Advanced Level in Mathematics stream. English – C grade."
                },
                {
                  title: "GCE Ordinary Level",
                  sub: "2020",
                  date: "2020",
                  desc: "Achieved 9A passes including Mathematics and English."
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  
                  <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-black border-2 border-[#0086c9] shadow-[0_0_15px_rgba(0,134,201,0.6)]"></div>

                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-[#0086c9] font-medium">{item.date}</p>
                  <p className="text-sm italic text-gray-300 mt-1">{item.sub}</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Code2 className="text-[#0086c9]" />
              <h3 className="text-2xl font-bold">
                Projects & Engineering Experience
              </h3>
            </div>

            <div className="relative border-l border-blue-600/30 ml-6 pl-8 space-y-12">
              {[
                {
                  title: "Trip Journey AI Mobile App",
                  date: "2026",
                  desc: "Created a React Native mobile app with Firebase backend integration. Implemented AI-based features and real-time database handling."
                },
                {
                  title: "Strategic Patient Risk Stratification System",
                  date: "2025",
                  desc: "Developed a custom 'Vitality Complexity Index (VCI)' using Python to predict 30-day diabetic readmissions. Applied data analysis and risk modeling techniques to generate actionable healthcare insights."
                },
                {
                  title: "Pet Adoption & Healthcare Platform (Spring Boot)",
                  date: "2025",
                  desc: "Built a full-stack Spring Boot application with REST APIs, authentication, and database integration to manage pet adoption and medical records."
                },
                {
                  title: "Online Book Reading Platform (MERN Stack)",
                  date: "2025",
                  desc: "Developed and deployed a full-stack web application using React, Node.js, Express, MongoDB, and Tailwind CSS. Hosted on Vercel with authentication and dynamic content management."
                },
                {
                  title: "Mental Health Care Management System",
                  date: "2024",
                  desc: "Enterprise-style JavaFX application using Hibernate ORM and MySQL. Implemented layered architecture and CRUD operations."
                },
                {
                  title: "Complaint Management System (JavaEE)",
                  date: "2024",
                  desc: "Developed a JavaEE-based web system with servlet architecture and relational database integration."
                },
                {
                  title: "Game Development Projects",
                  date: "2023 - 2024",
                  desc: "Built multiple interactive applications including a Java Tic-Tac-Toe game and a browser-based car racing game using HTML, CSS, and JavaScript."
                }
              ].map((project, i) => (
                <div key={i} className="relative">
                  
                  {/* Timeline Bullet */}
                  <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-black border-2 border-[#0086c9] shadow-[0_0_15px_rgba(0,134,201,0.6)]"></div>

                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm text-[#0086c9] font-medium">{project.date}</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center lg:justify-center mt-20">
          <Link
            to="/contact"
            className="bg-[#0086c9] hover:bg-[#0075b0] px-8 py-3 rounded-full font-semibold transition-all active:scale-95"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Resume

