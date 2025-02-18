import React, { useState } from 'react';
import { Instagram, Calendar, Clock, MapPin, Music, Mail, Phone, Globe, Disc, Calendar as EventDate, Users, MapPin as Location } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    duration: '',
    eventType: '',
    location: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email subject and body
    const subject = `New Booking Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Event Date: ${formData.date}
Duration: ${formData.duration}
Event Type: ${formData.eventType}
Location: ${formData.location}

Additional Details:
${formData.details}
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:girnmusic@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Navigation */}
      <section id="home" className="relative h-[85vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-transparent to-transparent">
            <img 
    className="w-full h-full object-cover" 
    src="offical_vid (1).gif" 
    alt="Animated content"
/>
</div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
          </div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col">
          {/* Navigation */}
          <div className="pt-4 md:pt-8 flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-6 text-sm tracking-widest uppercase font-inter">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-500 transition-colors font-medium">Home</button>
              <span className="text-zinc-600 mx-1">/</span>
              <button onClick={() => scrollToSection('biography')} className="text-white hover:text-amber-500 transition-colors font-medium">Biography</button>
              <span className="text-zinc-600 mx-1">/</span>
              <button onClick={() => scrollToSection('booking')} className="text-white hover:text-amber-500 transition-colors font-medium">Book Now</button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center -mt-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-inter font-black tracking-tight text-white transform hover:scale-[1.02] transition-transform duration-500">
                  DEEJAY HMG
                </h1>
                <div className="relative h-[3.5rem] text-xl md:text-2xl max-w-3xl mx-auto font-inter font-medium text-zinc-300">
                  <p className="typing-effect-1 absolute top-0 left-0 right-0">Let us help you create unforgettable memories.</p>
                  <p className="typing-effect-2 absolute top-[1.2rem] left-0 right-0">Bookings for Ontario Are Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-20 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-700/50 via-amber-700/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
              <div className="border-2 border-amber-700/30 absolute -top-4 -left-4 right-4 bottom-4 rounded-lg transition-all duration-500 group-hover:border-amber-700/50"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700 to-amber-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
                alt="Minimalist white background"
                className="w-full relative z-10 rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl font-bold mb-6">
                <div className="relative">
                  <span className="absolute -top-14 text-zinc-900 opacity-20">BROTHERS ON THE MIX</span>
                  <span className="relative z-10">BROTHERS ON THE MIX</span>
                </div>
              </h2>
              <div className="space-y-6 text-lg text-zinc-300">
                <p>
                  Specializing in Hip-Hop, R&B, Punjabi, and Bollywood beats, they seamlessly blend genres to create an unforgettable experience. Now available for bookings across the province—elevate your event with the electrifying sound of these powerhouse DJs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
          {/* Enhanced animated lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent animate-slide-right"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-amber-700/30 via-transparent to-amber-700/30 animate-slide-left"></div>
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-700/30 to-transparent animate-slide-down"></div>
            <div className="absolute right-0 bottom-0 h-full w-px bg-gradient-to-b from-amber-700/30 via-transparent to-amber-700/30 animate-slide-up"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block">
                <div className="relative">
                  <h2 className="text-5xl font-syncopate font-bold mb-6 glitch-title">Book Your Event</h2>
                  <div className="absolute -inset-2 bg-amber-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              </div>
              <p className="text-amber-500 tracking-widest uppercase text-sm font-semibold mt-4 animate-fade-in">Let's Create Something Extraordinary</p>
            </div>

            {/* Enhanced Booking Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: EventDate,
                  title: "Flexible Scheduling",
                  description: "Available for events of any size, any time"
                },
                {
                  icon: Users,
                  title: "Professional Service",
                  description: "Experienced in various celebrations and events"
                },
                {
                  icon: Location,
                  title: "Province-Wide",
                  description: "Serving all locations across Ontario"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-amber-900/20 hover:border-amber-700/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/60"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700 to-amber-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 -z-10"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg p-2.5 mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-amber-900/20">
                      <feature.icon className="w-full h-full text-amber-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors duration-500">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Booking Form */}
            <form onSubmit={handleSubmit} className="relative backdrop-blur-md bg-black/60 p-10 rounded-2xl border border-amber-900/20 shadow-2xl transform hover:scale-[1.01] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 -z-10"></div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      label: "Full Name",
                      name: "name",
                      type: "text",
                      icon: Users,
                      placeholder: "Your name"
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      icon: Mail,
                      placeholder: "your@email.com"
                    },
                    {
                      label: "Event Date",
                      name: "date",
                      type: "date",
                      icon: Calendar
                    },
                    {
                      label: "Event Duration",
                      name: "duration",
                      type: "select",
                      icon: Clock,
                      options: ["2 hours", "3 hours", "4 hours", "5 hours", "6+ hours"]
                    },
                    {
                      label: "Event Type",
                      name: "eventType",
                      type: "select",
                      icon: Music,
                      options: ["Wedding", "Corporate Event", "Birthday Party", "Club Night", "Festival", "Other"]
                    },
                    {
                      label: "Event Location",
                      name: "location",
                      type: "text",
                      icon: MapPin,
                      placeholder: "Event venue or address"
                    }
                  ].map((field, index) => (
                    <div key={index} className="space-y-2 group">
                      <label className="block text-sm font-medium text-amber-500 group-hover:text-amber-400 transition-colors duration-500">{field.label}</label>
                      <div className="relative">
                        <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 w-4 h-4 group-hover:text-amber-500 transition-colors duration-500" />
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-amber-900/20 text-white pl-12 pr-4 py-3.5 rounded-xl focus:border-amber-600/50 focus:ring-2 focus:ring-amber-600/20 transition-all duration-500 outline-none appearance-none hover:border-amber-700/40 shadow-lg shadow-amber-900/10 backdrop-blur-sm"
                          >
                            <option value="">Select {field.label.toLowerCase()}</option>
                            {field.options?.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-amber-900/20 text-white pl-12 pr-4 py-3.5 rounded-xl focus:border-amber-600/50 focus:ring-2 focus:ring-amber-600/20 transition-all duration-500 outline-none hover:border-amber-700/40 shadow-lg shadow-amber-900/10 backdrop-blur-sm"
                          />
                        )}
                        <div className="absolute inset-0 border border-amber-600/0 rounded-xl group-hover:border-amber-600/10 pointer-events-none transition-colors duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mt-8 group">
                  <label className="block text-sm font-medium text-amber-500 group-hover:text-amber-400 transition-colors duration-500">Additional Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your event..."
                    className="w-full bg-black/50 border border-amber-900/20 text-white px-4 py-3.5 rounded-xl focus:border-amber-600/50 focus:ring-2 focus:ring-amber-600/20 transition-all duration-500 outline-none h-32 resize-none hover:border-amber-700/40 shadow-lg shadow-amber-900/10 backdrop-blur-sm"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-8">
                  <button
                    type="submit"
                    className="group relative px-12 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-white font-medium tracking-wide hover:from-amber-600 hover:to-amber-500 transition-all duration-500 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg shadow-amber-900/20"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Submit Booking Request</span>
                      <Mail className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black font-['Inter']">
        {/* Gradient separator line */}
        <div className="absolute top-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
          <div className="h-px mt-px bg-gradient-to-r from-transparent via-amber-700/10 to-transparent"></div>
        </div>

        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-12">
            {/* Brand Section */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-amber-600/20 blur-md rounded-full group-hover:bg-amber-600/30 transition-colors duration-300"></div>
                  <Disc className="w-8 h-8 text-amber-500 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xl font-['SF Pro Display'] font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  DJ HMG
                </span>
              </div>
              <p className="text-zinc-400 text-[14px] leading-relaxed max-w-xs mx-auto md:mx-0 font-light tracking-wide">
                Creating unforgettable moments through music. Available for bookings across Ontario.
              </p>
              <div className="flex items-center space-x-4 pt-2 justify-center md:justify-start">
                <a 
                  href="https://instagram.com/djhmg_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-zinc-900/80 p-2 rounded-lg border border-amber-600/20 group-hover:border-amber-600/40 transition-colors duration-300">
                    <Instagram className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </a>
                <a 
                  href="mailto:girnmusic@gmail.com"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-zinc-900/80 p-2 rounded-lg border border-amber-600/20 group-hover:border-amber-600/40 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[15px] font-['SF Pro Display'] font-semibold text-white uppercase tracking-wider">Quick Links</h3>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                {[
                  { label: 'Home', section: 'home' },
                  { label: 'Biography', section: 'biography' },
                  { label: 'Book Now', section: 'booking' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.section)}
                    className="group text-zinc-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="h-px w-5 bg-amber-600/40 group-hover:w-8 transition-all duration-300"></span>
                      <span className="text-[14px] tracking-wide font-light">{link.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[15px] font-['SF Pro Display'] font-semibold text-white uppercase tracking-wider">Contact</h3>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <a 
                  href="mailto:girnmusic@gmail.com"
                  className="flex items-center space-x-3 group text-zinc-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-amber-600/60 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="text-[14px] tracking-wide font-light">girnmusic@gmail.com</span>
                </a>
                <a 
                  href="tel:+14168062556"
                  className="flex items-center space-x-3 group text-zinc-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-amber-600/60 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="text-[14px] tracking-wide font-light">+1 (416) 806-2556</span>
                </a>
                <a 
                  href="tel:+14169705034"
                  className="flex items-center space-x-3 group text-zinc-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-amber-600/60 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="text-[14px] tracking-wide font-light">+1 (416) 970-5034</span>
                </a>
                <a 
                  href="https://instagram.com/djhmg_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group text-zinc-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 text-amber-600/60 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="text-[14px] tracking-wide font-light">@djhmg_</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-amber-900/10">
            <div className="px-6 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-zinc-500 text-[12px] font-light tracking-wide text-center md:text-left">
                  © {new Date().getFullYear()} DJ HMG. All rights reserved.
                </div>
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-zinc-500 hover:text-amber-500 text-[12px] font-light tracking-wide transition-colors duration-300">Privacy Policy</a>
                  <span className="text-zinc-700">|</span>
                  <a href="#" className="text-zinc-500 hover:text-amber-500 text-[12px] font-light tracking-wide transition-colors duration-300">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;