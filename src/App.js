import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Moon, Sun, Code, Database, Server, Calendar, Award, ChevronRight, Menu, X, Phone } from 'lucide-react';

// ============================================================
// PHOTO: Place your photo in public/images/profile.jpg
// RESUME: Place your resume in public/resume.pdf
// ============================================================

export default function AdvancedPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [photoError, setPhotoError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    // Scroll progress bar
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'Java', level: 85, icon: '☕', category: 'Backend' },
    { name: 'Spring Boot', level: 80, icon: '🍃', category: 'Backend' },
    { name: 'React.js', level: 88, icon: '⚛️', category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: '🟨', category: 'Frontend' },
    { name: 'MySQL', level: 80, icon: '🐬', category: 'Database' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', category: 'Database' },
    { name: 'HTML & CSS', level: 90, icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, icon: '💨', category: 'Frontend' },
    { name: 'Redux', level: 78, icon: '🔄', category: 'Frontend' },
    { name: 'Git & GitHub', level: 88, icon: '🔧', category: 'Tools' },
    { name: 'REST APIs', level: 85, icon: '🔌', category: 'Backend' },

    // Tools
    { name: 'VS Code', level: 92, icon: '💙', category: 'Tools' },
    { name: 'Eclipse', level: 80, icon: '🌑', category: 'Tools' },
    { name: 'Netlify', level: 85, icon: '🚀', category: 'Deployment' },
    { name: 'Render', level: 82, icon: '☁️', category: 'Deployment' },
    { name: 'Vercel', level: 80, icon: '▲', category: 'Deployment' },

    // AI Tools
    { name: 'ChatGPT', level: 90, icon: '🤖', category: 'AI Tools' },
    { name: 'Claude AI', level: 88, icon: '🧠', category: 'AI Tools' },
    { name: 'GitHub Copilot', level: 82, icon: '🤝', category: 'AI Tools' },
    { name: 'Cursor AI', level: 78, icon: '✨', category: 'AI Tools' },
  ];

  const projects = [
    {
      title: 'Ecommerce Web Application',
      description: 'Responsive ecommerce app with JWT authentication, Redux state management, Cloudinary image storage, and RESTful APIs for product and order management.',
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'JWT', 'Cloudinary'],
      github: 'https://github.com/jeshwanth059',
      live: '#',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      highlights: ['JWT Authentication', 'Redux State Management', 'Cloudinary Integration']
    },
    {
      title: 'Food Delivery Web Application',
      description: 'Full-stack food delivery app with Stripe payment integration, secure JWT auth, Cloudinary image optimization, and RESTful APIs for menu and order management.',
      tech: ['React.js', 'Node.js', 'Redux', 'JWT', 'Stripe API', 'Cloudinary'],
      github: 'https://github.com/jeshwanth059/Food-Delivery-Application',
      live: '#',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      highlights: ['Stripe Payment Gateway', 'Secure Authentication', 'Real-time Order Tracking']
    },
    {
      title: 'Full Stack Portfolio',
      description: 'Personal portfolio website with Spring Boot backend, PostgreSQL database, contact form with real-time data storage, deployed on Netlify and Render.',
      tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Netlify', 'Render', 'Docker'],
      github: 'https://github.com/jeshwanth059/my-portfolio',
      live: 'https://portfolio-jeshwanthsagi.netlify.app',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      highlights: ['Spring Boot Backend', 'PostgreSQL Database', 'Docker Deployment']
    }
  ];

  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'SmartEd',
      period: 'Jun 2024 – Aug 2024',
      type: 'Remote',
      description: 'Contributed to design and development of web applications, showcasing proficiency in frontend technologies.',
      achievements: [
        'Contributed actively to design and development of web applications',
        'Translated company and customer requirements into functional interactive applications',
        'Developed practical experience in frontend development'
      ]
    },
    {
      role: 'Full-Stack Java Development Trainee',
      company: 'CODE BEGUN',
      period: '2025 – Present',
      type: 'Madhapur, Hyderabad',
      description: 'Currently undergoing Full-Stack Java Development training focusing on frontend and backend technologies.',
      achievements: [
        'Frontend: HTML, CSS, JavaScript, React.js',
        'Backend: Java, JDBC, Servlets, Spring Boot',
        'Real-time project assignments and debugging practice'
      ]
    }
  ];

  const certificates = [
    { name: 'Meta Frontend Developer Certificate', platform: 'Coursera', icon: '🏆' },
    { name: 'What is Data Science', platform: 'Coursera', icon: '📊' },
    { name: 'Tools for Data Science', platform: 'Coursera', icon: '🛠️' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Syne', sans-serif; overflow-x: hidden; }
        .mono { font-family: 'Space Mono', monospace; }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass {
          background: ${darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(10px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        .skill-bar {
          position: relative; height: 8px;
          background: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 9999px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 9999px; transition: width 1s ease-out;
        }
        .project-card { transform: translateY(0); transition: all 0.3s ease; }
        .project-card:hover { transform: translateY(-8px); }
        .fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
        @keyframes fadeIn { to { opacity: 1; } }
        .slide-in-left { animation: slideInLeft 0.6s ease-out forwards; opacity: 0; }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-in-up { animation: slideInUp 0.6s ease-out forwards; opacity: 0; }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .profile-img {
          width: 100%; height: 100%; object-fit: cover; border-radius: 1rem;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 glass ${darkMode ? 'border-b border-gray-800' : 'border-b border-gray-200'}`}>
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100 z-50"
          style={{width: `${scrollProgress}%`}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">J</div>
              <span className="font-bold text-xl gradient-text">Jeshwanth</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section ? 'text-purple-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded capitalize ${activeSection === section ? 'bg-purple-500 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
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
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="fade-in space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
              <span className="text-purple-500 font-semibold mono">👋 Hey there!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I'm <span className="gradient-text">Jeshwanth Sagi</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Full-Stack Java Developer
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building scalable applications with <span className="text-purple-500 font-semibold">Spring Boot</span>,
              <span className="text-purple-500 font-semibold"> React.js</span>, and
              <span className="text-purple-500 font-semibold"> PostgreSQL</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Code className="text-purple-500" size={20} />
                <span className="font-semibold">React & JavaScript</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Server className="text-purple-500" size={20} />
                <span className="font-semibold">Spring Boot & Node.js</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
                <Database className="text-purple-500" size={20} />
                <span className="font-semibold">MySQL & PostgreSQL</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center space-x-2">
                <span>View My Work</span>
                <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 rounded-lg font-semibold border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all`}>
                Contact Me
              </button>
              {/* ✅ RESUME DOWNLOAD - File must be in public/resume.pdf */}
              <a href="/resume.pdf" download="Jeshwanth_Sagi_Resume.pdf"
                className={`px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/jeshwanth059" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/jeshwanth-sagi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:Jeshwanthsagi@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
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
            {/* ✅ PHOTO - File must be in public/images/profile.jpg */}
            <div className={isVisible.about ? 'slide-in-left' : 'opacity-0'}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 max-w-sm mx-auto">
                {!photoError ? (
                  <img
                    src="/images/profile.jpg"
                    alt="Jeshwanth Sagi"
                    className="profile-img"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className={`w-full h-full rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center text-8xl`}>
                    👨‍💻
                  </div>
                )}
              </div>
            </div>
            <div className={`space-y-6 ${isVisible.about ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Computer Science graduate from GITAM University, passionate about building 
                scalable full-stack web applications. Proficient in <span className="text-purple-500 font-semibold">Java, JavaScript, and React.js</span>, 
                with hands-on experience in <span className="text-purple-500 font-semibold">Spring Boot, Node.js, and PostgreSQL</span>. 
                Skilled in developing RESTful APIs, cloud deployments, and creating responsive 
                user interfaces with Tailwind CSS and Redux.
              </p>

              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Completed a Frontend Developer internship at <span className="text-purple-500 font-semibold">SmartEd</span> and 
                built real-world projects including an Ecommerce and Food Delivery platform with 
                payment integration and JWT authentication. Currently undergoing Full-Stack Java 
                training at <span className="text-purple-500 font-semibold">CODE BEGUN, Hyderabad</span>. A fast learner 
                with strong problem-solving and team collaboration skills, eager to contribute to 
                innovative teams and grow as a <span className="text-purple-500 font-semibold">Full-Stack Java Developer</span>.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Projects Built</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">3mo</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Internship</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Technologies</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Certificates</div>
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
              <div key={skill.name} className={`p-6 rounded-xl glass ${isVisible.skills ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}>
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
                  <div className="skill-bar-fill" style={{width: isVisible.skills ? `${skill.level}%` : '0%'}}></div>
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
              <div key={project.title} className={`project-card rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${isVisible.projects ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-48 flex items-center justify-center text-white text-4xl font-bold" style={{background: project.image}}>
                  {project.title.split(' ')[0]}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors">
                      <Github size={20} /><span>Code</span>
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors">
                        <ExternalLink size={20} /><span>Live Demo</span>
                      </a>
                    )}
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
              <div key={exp.role} className={`p-8 rounded-xl glass ${isVisible.experience ? 'slide-in-left' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-purple-500 font-semibold">{exp.company}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.type}</p>
                  </div>
                  <div className={`flex items-center space-x-2 mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar size={20} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
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
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                <p className="text-purple-500">GITAM University, Visakhapatnam</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2021 – 2025 | CGPA: 7.19</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold">Board of Intermediate</h4>
                <p className="text-purple-500">Narayana Junior College, Hyderabad</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2019 – 2021 | CGPA: 8.5</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold">Secondary School (SSC)</h4>
                <p className="text-purple-500">Jaya High School, Suryapet</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>March 2019 | CGPA: 8.7</p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className={`mt-8 p-8 rounded-xl glass ${isVisible.experience ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Certificates</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certificates.map(cert => (
                <div key={cert.name} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className={`text-sm text-purple-500`}>{cert.platform}</p>
                </div>
              ))}
            </div>
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
                <div className="p-6 rounded-xl glass">
                  <div className="flex items-center space-x-4 mb-2">
                    <Mail className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">Email</h3>
                  </div>
                  <a href="mailto:Jeshwanthsagi@gmail.com" className="text-purple-500 hover:underline">
                    Jeshwanthsagi@gmail.com
                  </a>
                </div>
                <div className="p-6 rounded-xl glass">
                  <div className="flex items-center space-x-4 mb-2">
                    <Phone className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">Phone</h3>
                  </div>
                  <a href="tel:+917780791924" className="text-purple-500 hover:underline">
                    +91 7780791924
                  </a>
                </div>
                <div className="p-6 rounded-xl glass">
                  <div className="flex items-center space-x-4 mb-2">
                    <Github className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">GitHub</h3>
                  </div>
                  <a href="https://github.com/jeshwanth059" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    github.com/jeshwanth059
                  </a>
                </div>
                <div className="p-6 rounded-xl glass">
                  <div className="flex items-center space-x-4 mb-2">
                    <Linkedin className="text-purple-500" size={24} />
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                  </div>
                  <a href="https://linkedin.com/in/jeshwanth-sagi" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    linkedin.com/in/jeshwanth-sagi
                  </a>
                </div>
              </div>
            </div>
            <div className={isVisible.contact ? 'slide-in-up' : 'opacity-0'} style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleSubmit} className="p-8 rounded-xl glass">
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Name</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:border-purple-500`}
                    placeholder="Your name" />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Email</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:border-purple-500`}
                    placeholder="your.email@example.com" />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea required rows={5} value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:border-purple-500`}
                    placeholder="Your message..." />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
            © 2025 Jeshwanth Sagi. Built with React.js & Spring Boot
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Designed & Developed with 💜
          </p>
        </div>
      </footer>
    </div>
  );
}
