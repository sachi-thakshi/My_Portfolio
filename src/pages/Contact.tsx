import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (formRef.current) {
      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
        .then(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Message was sent successfully!',
            icon: 'success',
            confirmButtonColor: '#0086c9', 
            background: '#1a1e26', 
            color: '#fff'
          })
          setForm({ name: '', email: '', message: '' })
          formRef.current?.reset()
        })
        .catch((error) => {
          console.error('FAILED...', error)
            Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonColor: '#0086c9',
            background: '#1a1e26',
            color: '#fff'
          })
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    }
  }

  return (
    <div className="min-h-screen relative text-white flex items-center justify-center p-6 md:p-12 overflow-x-hidden font-sans">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-black to-black opacity-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl w-full pt-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2 leading-tight">
            Get In <span className="text-[#0086c9]">Touch</span>
          </h2>
          <p className="text-2xl md:text-5xl text-[#98c1ed] mb-4 font-bold tracking-tight">
            Contact Me
          </p>
          <div className="h-1 w-20 bg-[#0086c9] mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {[
              { icon: <MapPin className="text-[#0086c9]" />, title: "Location", detail: "Bandarawela, Sri Lanka" },
              { icon: <Mail className="text-[#0086c9]" />, title: "Email", detail: "sachiniimbulagoda@gmail.com" },
              { icon: <Phone className="text-[#0086c9]" />, title: "Call", detail: "+94 71 235 3785" },
            ].map((info, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:border-[#0086c9]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold">{info.title}</h4>
                  <p className="text-sm md:text-base font-medium">{info.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="space-y-6 bg-white/8 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input 
                    required
                    name="name" 
                    type="text" 
                    placeholder="Your Name" 
                    value={form.name}
                    className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 outline-none focus:border-[#0086c9] focus:ring-1 focus:ring-[#0086c9]/30 transition-all"
                    onChange={(e) => setForm({...form, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input 
                    required
                    name="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    value={form.email}
                    className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 outline-none focus:border-[#0086c9] focus:ring-1 focus:ring-[#0086c9]/30 transition-all"
                    onChange={(e) => setForm({...form, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                <textarea 
                  required
                  name="message" 
                  rows={5} 
                  placeholder="How can I help you?" 
                  value={form.message}
                  className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 outline-none focus:border-[#0086c9] focus:ring-1 focus:ring-[#0086c9]/30 transition-all resize-none"
                  onChange={(e) => setForm({...form, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#0086c9] hover:bg-[#0075b0] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact