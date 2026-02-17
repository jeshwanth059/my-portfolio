import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Moon, Sun, Code, Database, Server, Calendar, Award, ChevronRight, Menu, X } from 'lucide-react';

export default function AdvancedPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Java', level: 95, icon: '☕', category: 'Backend' },
    { name: 'Spring Boot', level: 90, icon: '🍃', category: 'Backend' },
    { name: 'React', level: 88, icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: '📘', category: 'Frontend' },
    { name: 'Node.js', level: 82, icon: '🟢', category: 'Backend' },
    { name: 'MongoDB', level: 87, icon: '🍃', category: 'Database' },
    { name: 'MySQL', level: 90, icon: '🐬', category: 'Database' },
    { name: 'PostgreSQL', level: 85, icon: '🐘', category: 'Database' },
    { name: 'Docker', level: 80, icon: '🐳', category: 'DevOps' },
    { name: 'AWS', level: 75, icon: '☁️', category: 'Cloud' },
    { name: 'Git', level: 92, icon: '🔧', category: 'Tools' },
    { name: 'REST APIs', level: 93, icon: '🔌', category: 'Backend' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, real-time inventory, and admin dashboard',
      tech: ['Spring Boot', 'React', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      highlights: ['10K+ users', 'Real-time updates', 'Payment gateway']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team chat, and analytics dashboard',
      tech: ['Java', 'Spring WebSocket', 'Next.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://taskmanager-demo.vercel.app',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      highlights: ['Real-time collaboration', 'Analytics', 'Role-based access']
    },
    {
      title: 'Social Media Analytics',
      description: 'Advanced analytics platform for social media metrics with ML-powered insights and automated reporting',
      tech: ['Spring Boot', 'React', 'MySQL', 'Python', 'Kafka'],
      github: 'https://github.com/yourusername/analytics',
      live: 'https://analytics-demo.vercel.app',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      highlights: ['ML insights', 'Real-time processing', 'Custom dashboards']
    },
    {
      title: 'RESTful API Marketplace',
      description: 'API marketplace with authentication, rate limiting, billing, and comprehensive documentation',
      tech: ['Spring Boot', 'Redis', 'React', 'Stripe', 'OpenAPI'],
      github: 'https://github.com/yourusername/api-marketplace',
      live: 'https://api-marketplace-demo.vercel.app',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      highlights: ['API monetization', 'Rate limiting', 'Auto documentation']
    },
    {
      title: 'Microservices Blog Platform',
      description: 'Scalable blog platform with microservices architecture, CDN integration, and SEO optimization',
      tech: ['Spring Cloud', 'Next.js', 'MongoDB', 'RabbitMQ', 'AWS'],
      github: 'https://github.com/yourusername/blog-platform',
      live: 'https://blog-demo.vercel.app',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      highlights: ['Microservices', 'CDN optimized', 'SEO friendly']
    },
    {
      title: 'Real-time Chat Application',
      description: 'Enterprise chat app with video calls, file sharing, encryption, and bot integration',
      tech: ['Spring WebFlux', 'React', 'WebRTC', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-demo.vercel.app',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      highlights: ['End-to-end encryption', 'Video calls', 'File sharing']
    }
  ];

  const experience = [
    {
      role: 'Full-Stack Java Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Building scalable microservices with Spring Boot and React. Led migration to cloud infrastructure.',
      achievements: ['Reduced API response time by 40%', 'Implemented CI/CD pipeline', 'Mentored 5 junior developers']
    },
    {
      role: 'Backend Developer Intern',
      company: 'StartUp Innovations',
      period: '2022 - 2023',
      description: 'Developed REST APIs and integrated third-party services. Worked on database optimization.',
      achievements: ['Built 15+ REST endpoints', 'Optimized database queries', 'Implemented caching layer']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Lead at Google',
      content: 'Jeshwanth is an exceptional developer with strong problem-solving skills. His code quality and architecture decisions are outstanding.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO at StartUp Inc',
      content: 'Working with Jeshwanth was a pleasure. He delivered high-quality solutions ahead of schedule and showed great initiative.',
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Developer',
      content: 'Jeshwanth\'s full-stack expertise and ability to learn quickly make him a valuable asset to any team.',
      avatar: '👩‍🔬'
    }
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
  
  try {
    setIsSubmitting(true);
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('❌ Failed to send. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Failed to connect to server.');
  } finally {
    setIsSubmitting(false);
  }
};

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Syne', sans-serif;
          overflow-x: hidden;
        }
        
        .mono {
          font-family: 'Space Mono', monospace;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-border {
          position: relative;
          background: ${darkMode ? '#1f2937' : 'white'};
          border-radius: 1rem;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .glass {
          background: ${darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(10px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .skill-bar {
          position: relative;
          height: 8px;
          background: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 9999px;
          transition: width 1s ease-out;
        }
        
        .project-card {
          transform: translateY(0);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.8);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 glass ${darkMode ? 'border-b border-gray-800' : 'border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <span className="font-bold text-xl gradient-text">Jeshwanth</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-purple-500' 
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded capitalize ${
                    activeSection === section 
                      ? 'bg-purple-500 text-white' 
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="fade-in space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
              <span className="text-purple-500 font-semibold mono">👋 Hey there!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I'm <span className="gradient-text">Jeshwanth</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Java Full-Stack Developer
            </h2>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building scalable applications with <span className="text-purple-500 font-semibold">Spring Boot</span>, 
              <span className="text-purple-500 font-semibold"> React</span>, and 
              <span className="text-purple-500 font-semibold"> MongoDB</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Code className="text-purple-500" size={20} />
                <span className="font-semibold">React & TypeScript</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Server className="text-purple-500" size={20} />
                <span className="font-semibold">Spring Boot</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Database className="text-purple-500" size={20} />
                <span className="font-semibold">MongoDB & MySQL</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ChevronRight size={20} />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 rounded-lg font-semibold border-2 border-purple-500 hover:bg-purple-500 transition-all ${
                  darkMode ? 'hover:text-white' : 'hover:text-white'
                }`}
              >
                Contact Me
              </button>
              
              <a 
                href="/resume.pdf" 
                download
                className={`px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <Download size={20} />
                <span>Resume</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible.about ? 'slide-in-up' : 'opacity-0'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isVisible.about ? 'slide-in-left' : 'opacity-0'}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className={`w-full h-full rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center text-8xl`}>
                  👨‍💻
                </div>
              </div>
            </div>
            
            <div className={`space-y-6 ${isVisible.about ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate <span className="text-purple-500 font-semibold">Full-Stack Java Developer</span> specializing in building 
                scalable, high-performance web applications. With expertise in both frontend and backend technologies, 
                I create seamless user experiences backed by robust server-side architecture.
              </p>
              
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My journey in software development has equipped me with strong problem-solving skills and a deep understanding 
                of modern development practices. I'm constantly learning and adapting to new technologies to deliver 
                cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Years Experience</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Projects Completed</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Technologies</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible.skills ? 'slide-in-up' : 'opacity-0'}`}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-xl glass ${isVisible.skills ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.category}</p>
                    </div>
                  </div>
                  <span className="text-purple-500 font-bold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-bar-fill" 
                    style={{width: isVisible.skills ? `${skill.level}%` : '0%'}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible.projects ? 'slide-in-up' : 'opacity-0'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-center mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${isVisible.projects ? 'fade-in' : 'opacity-0'}`}>
            Real-world applications showcasing my full-stack development skills
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${isVisible.projects ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="h-48 flex items-center justify-center text-white text-4xl font-bold"
                  style={{background: project.image}}
                >
                  {project.title.split(' ')[0]}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {project.highlights.map(highlight => (
                      <div key={highlight} className="flex items-center space-x-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible.experience ? 'slide-in-up' : 'opacity-0'}`}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.role}
                className={`p-8 rounded-xl glass ${isVisible.experience ? 'slide-in-left' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-purple-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className={`flex items-center space-x-2 mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar size={20} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map(achievement => (
                    <div key={achievement} className="flex items-start space-x-2">
                      <Award size={18} className="text-purple-500 mt-1 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className={`mt-16 p-8 rounded-xl glass ${isVisible.experience ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h4>
                <p className="text-purple-500">XYZ University</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2019 - 2023 | CGPA: 8.5/10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 slide-in-up">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`p-6 rounded-xl glass slide-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible.contact ? 'slide-in-up' : 'opacity-0'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`text-center mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${isVisible.contact ? 'fade-in' : 'opacity-0'}`}>
            Let's build something amazing together
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={isVisible.contact ? 'slide-in-left' : 'opacity-0'}>
              <div className="space-y-6">
                <div className={`p-6 rounded-xl glass`}>
                  <div className="flex items-center space-x-4 mb-2">
                    <Mail className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">Email</h3>
                  </div>
                  <a href="mailto:jeshwanth@example.com" className="text-purple-500 hover:underline">
                    jeshwanth@example.com
                  </a>
                </div>
                
                <div className={`p-6 rounded-xl glass`}>
                  <div className="flex items-center space-x-4 mb-2">
                    <Github className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">GitHub</h3>
                  </div>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    github.com/yourusername
                  </a>
                </div>
                
                <div className={`p-6 rounded-xl glass`}>
                  <div className="flex items-center space-x-4 mb-2">
                    <Linkedin className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                  </div>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
            
            <div className={isVisible.contact ? 'slide-in-up' : 'opacity-0'} style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleSubmit} className={`p-8 rounded-xl glass`}>
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
                    } border focus:outline-none focus:border-purple-500`}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
                    } border focus:outline-none focus:border-purple-500`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
                    } border focus:outline-none focus:border-purple-500`}
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Jeshwanth. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Designed & Developed with 💜
          </p>
        </div>
      </footer>
    </div>
  );
}
