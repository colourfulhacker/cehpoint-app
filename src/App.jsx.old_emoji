import { useState } from 'react'
import { Browser } from '@capacitor/browser'
import './App.css'

function App() {
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [expandedService, setExpandedService] = useState(null)

  const whatsappNumber = '919091156095'
  const email = 'sales@cehpoint.co.in'

  const toggleServiceExpand = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName)
  }

  const handleWhatsApp = async (service = '') => {
    const message = service 
      ? `Hello! I'm interested in ${service}. Can you provide more details?`
      : 'Hello! I would like to discuss my project with Cehpoint.'
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    try {
      await Browser.open({ url })
    } catch (error) {
      window.open(url, '_blank')
    }
  }

  const handleEmail = async () => {
    const url = `mailto:${email}`
    
    try {
      await Browser.open({ url })
    } catch (error) {
      window.location.href = url
    }
  }

  const techStack = [
    { name: 'React', emoji: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', emoji: '▲', color: '#000000' },
    { name: 'Node.js', emoji: '🟢', color: '#68A063' },
    { name: 'Python', emoji: '🐍', color: '#3776AB' },
    { name: 'Java', emoji: '☕', color: '#007396' },
    { name: 'Flutter', emoji: '💙', color: '#02569B' },
    { name: 'React Native', emoji: '📱', color: '#61DAFB' },
    { name: 'AWS', emoji: '☁️', color: '#FF9900' },
    { name: 'GCP', emoji: '🌐', color: '#4285F4' },
    { name: 'Firebase', emoji: '🔥', color: '#FFCA28' },
    { name: 'Docker', emoji: '🐳', color: '#2496ED' },
    { name: 'Kubernetes', emoji: '☸️', color: '#326CE5' },
    { name: 'MongoDB', emoji: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', emoji: '🐘', color: '#336791' },
    { name: 'MySQL', emoji: '🐬', color: '#4479A1' },
    { name: 'AI/ML', emoji: '🤖', color: '#FF6B6B' },
    { name: 'DevOps', emoji: '⚙️', color: '#326CE5' },
    { name: 'Automation', emoji: '⚡', color: '#FFD700' }
  ]

  const industries = [
    {
      name: 'Retail',
      icon: '🛍️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      solutions: ['POS Systems', 'Inventory Management', 'Customer Loyalty', 'E-commerce Integration']
    },
    {
      name: 'Hospitality',
      icon: '🏨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      solutions: ['Table Booking', 'Menu Management', 'Kitchen Automation', 'Guest Management']
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      solutions: ['Patient Records', 'Appointment System', 'Billing Integration', 'Medical Reports']
    },
    {
      name: 'Education',
      icon: '🎓',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      solutions: ['Student Portal', 'Attendance Tracking', 'Parent Communication', 'Online Classes']
    },
    {
      name: 'Real Estate',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      solutions: ['Property Listings', 'Lead Management', 'Virtual Tours', 'Document Management']
    },
    {
      name: 'SaaS',
      icon: '💼',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      solutions: ['Subscription Billing', 'Multi-tenant Architecture', 'Analytics Dashboard', 'API Integration']
    },
    {
      name: 'Finance',
      icon: '💰',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      solutions: ['Payment Gateway', 'Transaction Tracking', 'Financial Reports', 'Compliance Automation']
    },
    {
      name: 'MSMEs',
      icon: '🏪',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      solutions: ['Business Automation', 'Lead Generation', 'Inventory Systems', 'Customer Management']
    },
    {
      name: 'Enterprise',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      solutions: ['ERP Systems', 'Workflow Automation', 'Data Analytics', 'Cloud Migration']
    }
  ]

  const investorIdeas = [
    {
      name: 'AI-Powered Real Estate Platform',
      description: 'Virtual property tours with AI recommendations',
      investment: '₹50,000 - ₹2,00,000',
      roi: '18-24 months',
      market: 'Growing 40% annually',
      icon: '🏘️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Smart Restaurant POS System',
      description: 'Cloud-based POS with kitchen automation',
      investment: '₹30,000 - ₹1,50,000',
      roi: '12-18 months',
      market: '₹500Cr+ opportunity',
      icon: '🍽️',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Healthcare Appointment Platform',
      description: 'Multi-clinic booking and patient management',
      investment: '₹40,000 - ₹1,80,000',
      roi: '15-20 months',
      market: 'High demand sector',
      icon: '⚕️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'EdTech Learning Platform',
      description: 'Online courses with live classes and certificates',
      investment: '₹35,000 - ₹2,50,000',
      roi: '10-15 months',
      market: 'Fastest growing sector',
      icon: '📚',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: 'Multi-Vendor Marketplace',
      description: 'Your own Amazon for specific niche',
      investment: '₹60,000 - ₹3,00,000',
      roi: '20-30 months',
      market: 'Massive scalability',
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: 'WhatsApp Commerce Bot',
      description: 'Complete e-commerce through WhatsApp',
      investment: '₹25,000 - ₹1,20,000',
      roi: '8-12 months',
      market: '500M+ WhatsApp users',
      icon: '💬',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  const careerOpenings = [
    {
      role: 'Full Stack Developer',
      type: 'Full-time',
      experience: '1-3 years',
      location: 'Remote',
      skills: ['React', 'Node.js', 'MongoDB'],
      icon: '💻'
    },
    {
      role: 'AI/ML Engineer',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      skills: ['Python', 'TensorFlow', 'NLP'],
      icon: '🤖'
    },
    {
      role: 'Business Development Executive',
      type: 'Full-time',
      experience: '1-2 years',
      location: 'Hybrid',
      skills: ['Sales', 'Communication', 'Client Management'],
      icon: '📈'
    },
    {
      role: 'UI/UX Designer',
      type: 'Contract',
      experience: '2-3 years',
      location: 'Remote',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      icon: '🎨'
    }
  ]

  const services = {
    'App Development': {
      icon: '📱',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      items: [
        {
          name: 'Modern Web App',
          summary: 'Beautiful, fast, and responsive web applications',
          benefits: ['Mobile-first design', 'Lightning-fast performance', 'Scalable architecture'],
          price: '₹15,000 - ₹1,50,000'
        },
        {
          name: 'Mobile App Development',
          summary: 'Native-quality apps for iOS and Android',
          benefits: ['Cross-platform support', 'App store ready', 'Offline capabilities'],
          price: '₹25,000 - ₹2,50,000'
        },
        {
          name: 'SaaS Product Development',
          summary: 'Complete software-as-a-service solutions',
          benefits: ['Subscription management', 'Multi-tenant architecture', 'Analytics dashboard'],
          price: '₹49,000 - ₹5,00,000'
        },
        {
          name: 'Dashboard & Admin Panel',
          summary: 'Powerful control centers for your business',
          benefits: ['Real-time data visualization', 'User management', 'Custom reports'],
          price: '₹12,000 - ₹90,000'
        },
        {
          name: 'Landing Page & Business Website',
          summary: 'Professional websites that convert visitors',
          benefits: ['SEO optimized', 'Fast loading', 'Mobile responsive'],
          price: '₹7,999 - ₹45,000'
        },
        {
          name: 'Ecommerce Website/App',
          summary: 'Complete online store solutions',
          benefits: ['Payment integration', 'Inventory management', 'Order tracking'],
          price: '₹20,000 - ₹2,00,000'
        }
      ]
    },
    'Cloud & Deployment': {
      icon: '☁️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      items: [
        {
          name: 'AWS Deployment',
          summary: 'Scalable cloud infrastructure on Amazon Web Services',
          benefits: ['Auto-scaling', '99.99% uptime', 'Global reach'],
          price: '₹9,999 - ₹75,000'
        },
        {
          name: 'GCP Deployment',
          summary: 'Google Cloud Platform deployment and management',
          benefits: ['Machine learning ready', 'High performance', 'Cost optimization'],
          price: '₹8,999 - ₹70,000'
        },
        {
          name: 'Firebase Setup',
          summary: 'Real-time database and hosting solutions',
          benefits: ['Instant sync', 'Authentication included', 'Free tier available'],
          price: '₹6,999 - ₹75,000'
        },
        {
          name: 'CI/CD Setup',
          summary: 'Automated deployment pipelines',
          benefits: ['Faster releases', 'Fewer errors', 'Automated testing'],
          price: '₹7,999 - ₹35,000'
        },
        {
          name: 'Cloud Optimization',
          summary: 'Reduce costs and improve performance',
          benefits: ['Cost savings up to 40%', 'Better performance', 'Security hardening'],
          price: '₹5,999 - ₹30,000'
        }
      ]
    },
    'Automation Services': {
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      items: [
        {
          name: 'Lead Generation Automation',
          summary: 'Automated systems to capture and nurture leads',
          benefits: ['24/7 lead capture', 'Automatic follow-ups', 'CRM integration'],
          price: '₹7,999 - ₹99,999'
        },
        {
          name: 'WhatsApp Automation',
          summary: 'Intelligent WhatsApp messaging systems',
          benefits: ['Instant responses', 'Order confirmations', 'Customer support'],
          price: '₹4,999 - ₹70,000'
        },
        {
          name: 'Business Process Automation',
          summary: 'Streamline repetitive tasks and workflows',
          benefits: ['Save 10+ hours weekly', 'Reduce human errors', 'Boost productivity'],
          price: '₹4,999 - ₹49,000'
        },
        {
          name: 'Sales Follow-Up Automation',
          summary: 'Never miss a follow-up opportunity',
          benefits: ['Automated reminders', 'Email sequences', 'SMS notifications'],
          price: '₹5,999 - ₹55,000'
        },
        {
          name: 'Automated Report System',
          summary: 'Daily, weekly, monthly reports on autopilot',
          benefits: ['Scheduled delivery', 'Custom templates', 'Data visualization'],
          price: '₹6,999 - ₹40,000'
        },
        {
          name: 'CRM Workflow Automation',
          summary: 'Intelligent customer relationship management',
          benefits: ['Lead scoring', 'Pipeline automation', 'Task assignment'],
          price: '₹10,000 - ₹95,000'
        }
      ]
    },
    'AI Tools & Chatbots': {
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      items: [
        {
          name: 'Custom AI Chatbot',
          summary: 'Smart conversational AI for your business',
          benefits: ['24/7 availability', 'Multi-language support', 'Learning capabilities'],
          price: '₹9,999 - ₹80,000'
        },
        {
          name: 'AI Support Agent',
          summary: 'Automated customer support that understands context',
          benefits: ['Instant responses', 'Ticket management', 'Human handoff'],
          price: '₹12,000 - ₹1,20,000'
        },
        {
          name: 'AI Appointment Bot',
          summary: 'Intelligent booking and scheduling assistant',
          benefits: ['Calendar integration', 'Reminder automation', 'Rescheduling handling'],
          price: '₹9,999 - ₹75,000'
        },
        {
          name: 'AI Knowledgebase Bot',
          summary: 'Instant answers from your documentation',
          benefits: ['Learns from your docs', 'Accurate responses', 'Easy updates'],
          price: '₹8,999 - ₹70,000'
        },
        {
          name: 'AI Sales Assistant',
          summary: 'Intelligent lead qualification and nurturing',
          benefits: ['Qualify leads 24/7', 'Personalized pitches', 'Sales insights'],
          price: '₹15,000 - ₹1,50,000'
        }
      ]
    }
  }

  const HomeScreen = () => (
    <div className="screen home-screen">
      <div className="royal-header">
        <div className="crown-icon">👑</div>
        <h1 className="royal-title">Cehpoint</h1>
        <p className="royal-subtitle">Your Premium Technology Partner</p>
        <div className="shimmer-line"></div>
      </div>

      <div className="welcome-banner">
        <div className="welcome-icon">✨</div>
        <h2 className="welcome-heading">Transform Your Business</h2>
        <p className="welcome-description">
          Affordable, elegant digital solutions crafted with care for Indian startups and businesses
        </p>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">18+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </div>

      <div className="home-section">
        <h3 className="section-title">
          <span className="title-icon">🎯</span>
          What We Do Best
        </h3>
        <div className="service-highlights">
          <div className="highlight-card" onClick={() => setActiveScreen('services')}>
            <div className="highlight-icon">🤖</div>
            <h4>AI Automation</h4>
            <p>Smart chatbots & workflow automation</p>
            <div className="highlight-price">From ₹4,999</div>
          </div>
          <div className="highlight-card" onClick={() => setActiveScreen('services')}>
            <div className="highlight-icon">📱</div>
            <h4>App Development</h4>
            <p>Web & mobile applications</p>
            <div className="highlight-price">From ₹7,999</div>
          </div>
          <div className="highlight-card" onClick={() => setActiveScreen('services')}>
            <div className="highlight-icon">☁️</div>
            <h4>Cloud Solutions</h4>
            <p>AWS, GCP, Firebase deployment</p>
            <div className="highlight-price">From ₹5,999</div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h3 className="section-title">
          <span className="title-icon">⚡</span>
          Technology Stack
        </h3>
        <div className="tech-grid">
          {techStack.map((tech, idx) => (
            <div key={idx} className="tech-badge">
              <span className="tech-emoji">{tech.emoji}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-container">
        <button className="premium-btn primary" onClick={() => setActiveScreen('services')}>
          <span className="btn-icon">🚀</span>
          Explore Services
        </button>
        <button className="premium-btn secondary" onClick={() => setActiveScreen('contact')}>
          <span className="btn-icon">💬</span>
          Get Started
        </button>
      </div>
    </div>
  )

  const ServicesScreen = () => (
    <div className="screen services-screen">
      <div className="page-header">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">Premium solutions with transparent pricing</p>
      </div>

      <div className="screen-content">
        {selectedCategory ? (
          <div className="category-detail">
            <button className="back-button" onClick={() => setSelectedCategory(null)}>
              <span className="back-icon">←</span>
              <span>Back</span>
            </button>
            <div className="category-header" style={{ background: services[selectedCategory].gradient }}>
              <span className="category-icon-big">{services[selectedCategory].icon}</span>
              <h2 className="category-title">{selectedCategory}</h2>
            </div>
            <div className="services-grid">
              {services[selectedCategory].items.map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-card-header">
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-summary">{service.summary}</p>
                  </div>
                  <div className="service-benefits">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="benefit-item">
                        <span className="benefit-check">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="service-price-tag">{service.price}</div>
                  <div className="service-actions">
                    <button className="action-btn whatsapp" onClick={() => handleWhatsApp(service.name)}>
                      <span>💬</span> WhatsApp
                    </button>
                    <button className="action-btn email" onClick={handleEmail}>
                      <span>✉️</span> Email
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="categories-grid">
            {Object.keys(services).map((category) => (
              <div 
                key={category} 
                className="category-card"
                onClick={() => setSelectedCategory(category)}
                style={{ background: services[category].gradient }}
              >
                <div className="category-icon">{services[category].icon}</div>
                <h3 className="category-name">{category}</h3>
                <div className="category-count">{services[category].items.length} services</div>
                <div className="category-arrow">→</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const IndustriesScreen = () => (
    <div className="screen industries-screen">
      <div className="page-header">
        <h1 className="page-title">Industry Solutions</h1>
        <p className="page-subtitle">Tailored solutions for every sector</p>
      </div>

      <div className="screen-content">
        {selectedIndustry ? (
          <div className="industry-detail">
            <button className="back-button" onClick={() => setSelectedIndustry(null)}>
              <span className="back-icon">←</span>
              <span>Back</span>
            </button>
            <div 
              className="industry-detail-header"
              style={{ background: industries.find(i => i.name === selectedIndustry).gradient }}
            >
              <span className="industry-icon-big">
                {industries.find(i => i.name === selectedIndustry).icon}
              </span>
              <h2 className="industry-title">{selectedIndustry}</h2>
            </div>
            <div className="solutions-list">
              {industries.find(i => i.name === selectedIndustry).solutions.map((solution, idx) => (
                <div key={idx} className="solution-item">
                  <span className="solution-check">✓</span>
                  <span className="solution-text">{solution}</span>
                </div>
              ))}
            </div>
            <div className="industry-cta">
              <button className="premium-btn primary" onClick={() => handleWhatsApp(`${selectedIndustry} Solutions`)}>
                <span className="btn-icon">💬</span>
                Discuss Your Needs
              </button>
            </div>
          </div>
        ) : (
          <div className="industries-grid">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="industry-card"
                onClick={() => setSelectedIndustry(industry.name)}
                style={{ background: industry.gradient }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <div className="industry-solutions-count">
                  {industry.solutions.length} solutions
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const InvestorScreen = () => (
    <div className="screen investor-screen">
      <div className="page-header investor-header">
        <div className="investor-badge">💎</div>
        <h1 className="page-title">Investment Opportunities</h1>
        <p className="page-subtitle">Start your business with 100% equity</p>
      </div>

      <div className="investor-promise">
        <div className="promise-card">
          <div className="promise-icon">🎯</div>
          <h3>We Build For You</h3>
          <p>Complete product development from scratch</p>
        </div>
        <div className="promise-card">
          <div className="promise-icon">💼</div>
          <h3>100% Your Equity</h3>
          <p>You own the entire business</p>
        </div>
        <div className="promise-card">
          <div className="promise-icon">🚀</div>
          <h3>Full Support</h3>
          <p>Branding, documentation, and expansion</p>
        </div>
      </div>

      <div className="screen-content">
        <h3 className="section-title">
          <span className="title-icon">💡</span>
          Business Ideas Ready to Launch
        </h3>
        <div className="investor-ideas-grid">
          {investorIdeas.map((idea, idx) => (
            <div key={idx} className="investor-card" style={{ background: idea.gradient }}>
              <div className="investor-icon">{idea.icon}</div>
              <h3 className="investor-title">{idea.name}</h3>
              <p className="investor-description">{idea.description}</p>
              <div className="investor-stats">
                <div className="investor-stat">
                  <div className="stat-label">Investment</div>
                  <div className="stat-value">{idea.investment}</div>
                </div>
                <div className="investor-stat">
                  <div className="stat-label">ROI Timeline</div>
                  <div className="stat-value">{idea.roi}</div>
                </div>
                <div className="investor-stat">
                  <div className="stat-label">Market</div>
                  <div className="stat-value">{idea.market}</div>
                </div>
              </div>
              <button className="investor-btn" onClick={() => handleWhatsApp(idea.name)}>
                <span>💬</span> Discuss This Opportunity
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CareersScreen = () => (
    <div className="screen careers-screen">
      <div className="page-header">
        <h1 className="page-title">Join Our Team</h1>
        <p className="page-subtitle">Build the future with us</p>
      </div>

      <div className="careers-intro">
        <div className="intro-icon">🌟</div>
        <h3>Why Work With Cehpoint?</h3>
        <div className="perks-grid">
          <div className="perk-item">
            <span className="perk-icon">🏠</span>
            <span>Remote Work</span>
          </div>
          <div className="perk-item">
            <span className="perk-icon">📈</span>
            <span>Growth Opportunities</span>
          </div>
          <div className="perk-item">
            <span className="perk-icon">💰</span>
            <span>Competitive Pay</span>
          </div>
          <div className="perk-item">
            <span className="perk-icon">🎯</span>
            <span>Exciting Projects</span>
          </div>
        </div>
      </div>

      <div className="screen-content">
        <h3 className="section-title">
          <span className="title-icon">💼</span>
          Open Positions
        </h3>
        <div className="careers-grid">
          {careerOpenings.map((job, idx) => (
            <div key={idx} className="career-card">
              <div className="career-icon">{job.icon}</div>
              <h3 className="career-role">{job.role}</h3>
              <div className="career-meta">
                <span className="meta-tag">{job.type}</span>
                <span className="meta-tag">{job.location}</span>
              </div>
              <div className="career-detail">
                <strong>Experience:</strong> {job.experience}
              </div>
              <div className="career-skills">
                {job.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button className="career-apply-btn" onClick={() => handleWhatsApp(`Application for ${job.role}`)}>
                <span>📧</span> Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const ContactScreen = () => (
    <div className="screen contact-screen">
      <div className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">We're here to help you succeed</p>
      </div>

      <div className="screen-content">
        <div className="contact-methods">
          <div className="contact-method-card whatsapp-card">
            <div className="contact-method-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Quick responses, instant support</p>
            <div className="contact-detail">+91 90911 56095</div>
            <button className="contact-btn whatsapp-btn" onClick={() => handleWhatsApp()}>
              Start Chat Now
            </button>
          </div>

          <div className="contact-method-card email-card">
            <div className="contact-method-icon">✉️</div>
            <h3>Email</h3>
            <p>Detailed queries and proposals</p>
            <div className="contact-detail">sales@cehpoint.co.in</div>
            <button className="contact-btn email-btn" onClick={handleEmail}>
              Send Email
            </button>
          </div>
        </div>

        <div className="contact-info-section">
          <h3 className="section-title">
            <span className="title-icon">⏰</span>
            Working Hours
          </h3>
          <div className="working-hours">
            <div className="hours-item">
              <span className="day">Monday - Friday</span>
              <span className="time">9:00 AM - 7:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Saturday</span>
              <span className="time">10:00 AM - 5:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday</span>
              <span className="time">Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mobile-app">
      <div className="app-container">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'services' && <ServicesScreen />}
        {activeScreen === 'industries' && <IndustriesScreen />}
        {activeScreen === 'investor' && <InvestorScreen />}
        {activeScreen === 'careers' && <CareersScreen />}
        {activeScreen === 'contact' && <ContactScreen />}
      </div>

      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => setActiveScreen('home')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button 
          className={`nav-item ${activeScreen === 'services' ? 'active' : ''}`}
          onClick={() => setActiveScreen('services')}
        >
          <span className="nav-icon">💼</span>
          <span className="nav-label">Services</span>
        </button>
        <button 
          className={`nav-item ${activeScreen === 'industries' ? 'active' : ''}`}
          onClick={() => setActiveScreen('industries')}
        >
          <span className="nav-icon">🏢</span>
          <span className="nav-label">Industries</span>
        </button>
        <button 
          className={`nav-item ${activeScreen === 'investor' ? 'active' : ''}`}
          onClick={() => setActiveScreen('investor')}
        >
          <span className="nav-icon">💎</span>
          <span className="nav-label">Invest</span>
        </button>
        <button 
          className={`nav-item ${activeScreen === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveScreen('careers')}
        >
          <span className="nav-icon">🎯</span>
          <span className="nav-label">Careers</span>
        </button>
      </nav>
    </div>
  )
}

export default App
