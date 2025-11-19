import { useState } from 'react'
import { Browser } from '@capacitor/browser'
import './App.css'

function App() {
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)
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

  const services = {
    'App Development': {
      icon: '📱',
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
    },
    'Industry Solutions': {
      icon: '🏢',
      items: [
        {
          name: 'Retail Automation Suite',
          summary: 'Complete retail management system',
          benefits: ['Inventory tracking', 'POS integration', 'Customer loyalty'],
          price: '₹15,000 - ₹1,20,000'
        },
        {
          name: 'Clinic & Healthcare Management',
          summary: 'Patient management and appointment system',
          benefits: ['Patient records', 'Appointment scheduling', 'Billing integration'],
          price: '₹20,000 - ₹1,00,000'
        },
        {
          name: 'School & College Automation',
          summary: 'Education management platform',
          benefits: ['Student management', 'Attendance tracking', 'Parent portal'],
          price: '₹30,000 - ₹2,50,000'
        },
        {
          name: 'Restaurant & Hospitality Automation',
          summary: 'Complete restaurant operations system',
          benefits: ['Table booking', 'Menu management', 'Kitchen automation'],
          price: '₹20,000 - ₹1,50,000'
        },
        {
          name: 'Real Estate Micro-CRM',
          summary: 'Property and client management',
          benefits: ['Property listings', 'Lead tracking', 'Follow-up automation'],
          price: '₹9,999 - ₹95,000'
        }
      ]
    },
    'SaaS & Digital Product Kits': {
      icon: '🎯',
      items: [
        {
          name: 'Multi-Vendor Marketplace Kit',
          summary: 'Launch your own marketplace platform',
          benefits: ['Vendor onboarding', 'Commission management', 'Payment splitting'],
          price: '₹25,000 - ₹2,00,000'
        },
        {
          name: 'Subscription Platform Kit',
          summary: 'Recurring revenue business platform',
          benefits: ['Payment automation', 'Member management', 'Content access control'],
          price: '₹30,000 - ₹2,50,000'
        },
        {
          name: 'Learning Platform (LMS)',
          summary: 'Online education and training system',
          benefits: ['Course management', 'Progress tracking', 'Certificate generation'],
          price: '₹20,000 - ₹1,20,000'
        },
        {
          name: 'Job/Internship Portal',
          summary: 'Complete recruitment platform',
          benefits: ['Job posting', 'Application tracking', 'Candidate database'],
          price: '₹15,000 - ₹95,000'
        }
      ]
    },
    'Cybersecurity': {
      icon: '🔒',
      items: [
        {
          name: 'Vulnerability Assessment',
          summary: 'Comprehensive security testing and vulnerability scanning',
          benefits: ['Identify security gaps', 'Detailed risk reports', 'Fix recommendations'],
          price: '₹8,999 - ₹65,000'
        },
        {
          name: 'GRC Automation',
          summary: 'Governance, Risk, and Compliance management',
          benefits: ['Automated compliance tracking', 'Risk assessment', 'Audit reporting'],
          price: '₹15,000 - ₹90,000'
        },
        {
          name: 'Security Hardening',
          summary: 'Strengthen your systems against cyber threats',
          benefits: ['Server security', 'Application hardening', 'Security best practices'],
          price: '₹6,999 - ₹45,000'
        }
      ]
    }
  }

  const businessIdeas = [
    {
      name: 'AI Follow-Up System for Gyms',
      problem: 'Gym members often miss renewals and follow-ups',
      solution: 'Automated WhatsApp and email reminders with personalized workout tips',
      value: 'Increase retention by 30% with zero manual effort',
      price: '₹12,000 - ₹85,000'
    },
    {
      name: 'Housing Society Complaint Automation',
      problem: 'Society complaints get lost in WhatsApp groups',
      solution: 'Digital complaint portal with tracking and automated updates',
      value: 'Transparent complaint management for happier residents',
      price: '₹10,000 - ₹75,000'
    },
    {
      name: 'WhatsApp Booking Assistant',
      problem: 'Missing bookings due to delayed responses',
      solution: 'AI-powered WhatsApp bot that confirms bookings instantly',
      value: 'Never lose a customer due to slow response',
      price: '₹8,999 - ₹55,000'
    },
    {
      name: 'Multi-Vendor Marketplace Idea',
      problem: 'Want to create the next Amazon for your niche',
      solution: 'Complete marketplace with vendor management and payments',
      value: 'Earn commission on every transaction',
      price: '₹25,000 - ₹2,00,000'
    },
    {
      name: 'Digital Restaurant Menu System',
      problem: 'Printed menus are expensive and hard to update',
      solution: 'QR code based digital menu with online ordering',
      value: 'Update menu instantly, accept orders online',
      price: '₹12,000 - ₹95,000'
    },
    {
      name: 'AI Lead Scoring CRM',
      problem: 'Sales team wastes time on cold leads',
      solution: 'AI analyzes lead behavior and scores them automatically',
      value: 'Focus on hot leads, close 40% faster',
      price: '₹15,000 - ₹1,20,000'
    }
  ]

  const automationPacks = [
    {
      name: 'Business Booster Pack',
      includes: 'Lead automation + Email sequences + WhatsApp bot',
      benefit: 'Complete marketing automation bundle',
      price: '₹15,000 - ₹1,20,000'
    },
    {
      name: 'Retail Automation Pack',
      includes: 'Inventory + POS + Customer loyalty system',
      benefit: 'Everything to run a modern retail store',
      price: '₹20,000 - ₹1,50,000'
    },
    {
      name: 'Education Automation Pack',
      includes: 'Student portal + Attendance + Parent communication',
      benefit: 'Complete school management solution',
      price: '₹20,000 - ₹1,80,000'
    },
    {
      name: 'WhatsApp Sales Engine Pack',
      includes: 'WhatsApp bot + CRM + Follow-up automation',
      benefit: 'Turn WhatsApp into your sales machine',
      price: '₹12,000 - ₹85,000'
    }
  ]

  const HomeScreen = () => (
    <div className="screen home-screen">
      <div className="screen-header">
        <div className="header-glow"></div>
        <h1 className="app-title">Welcome to Cehpoint</h1>
        <p className="app-tagline">Your Modern Technology Partner</p>
      </div>

      <div className="screen-content">
        <div className="welcome-card">
          <p className="welcome-text">We build powerful, affordable, and elegant digital solutions for every business.</p>
        </div>

        <div className="featured-section">
          <h2 className="section-heading">Featured Services</h2>
          <div className="featured-grid">
            <div className="feature-card" onClick={() => setActiveScreen('services')}>
              <div className="feature-icon">🤖</div>
              <h3>AI Chatbots</h3>
              <p>Smart automation</p>
              <span className="feature-price">From ₹9,999</span>
            </div>
            <div className="feature-card" onClick={() => setActiveScreen('services')}>
              <div className="feature-icon">💼</div>
              <h3>Business Automation</h3>
              <p>Save time & costs</p>
              <span className="feature-price">From ₹4,999</span>
            </div>
            <div className="feature-card" onClick={() => setActiveScreen('services')}>
              <div className="feature-icon">🚀</div>
              <h3>Web & Mobile Apps</h3>
              <p>Professional solutions</p>
              <span className="feature-price">From ₹7,999</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <button className="cta-btn primary" onClick={() => setActiveScreen('services')}>
            Explore All Services
          </button>
          <button className="cta-btn secondary" onClick={() => setActiveScreen('contact')}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )

  const ServicesScreen = () => (
    <div className="screen services-screen">
      <div className="screen-header-simple">
        <h1 className="screen-title">Our Services</h1>
        <p className="screen-subtitle">Premium solutions for your business</p>
      </div>

      <div className="screen-content">
        {selectedCategory ? (
          <div className="category-detail">
            <button className="back-btn" onClick={() => setSelectedCategory(null)}>
              <span>←</span> Back
            </button>
            <h2 className="category-detail-title">
              <span className="category-detail-icon">{services[selectedCategory].icon}</span>
              {selectedCategory}
            </h2>
            <div className="services-list">
              {services[selectedCategory].items.map((service, idx) => (
                <div key={idx} className="service-item">
                  <h3 className="service-item-name">{service.name}</h3>
                  <p className="service-item-summary">{service.summary}</p>
                  <div className="service-benefits">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="benefit">
                        <span className="check">✓</span> {benefit}
                      </div>
                    ))}
                  </div>
                  {expandedService === service.name && (
                    <div className="service-expanded-details">
                      <p className="expanded-text">
                        This service includes comprehensive support, professional implementation, 
                        ongoing maintenance, and consultation to ensure your success. Our team works 
                        closely with you to understand your requirements and deliver a solution that 
                        exceeds expectations.
                      </p>
                      <div className="expanded-features">
                        <div className="expanded-feature">✨ Professional consultation</div>
                        <div className="expanded-feature">🛠️ Custom implementation</div>
                        <div className="expanded-feature">📞 Dedicated support</div>
                        <div className="expanded-feature">🔄 Regular updates</div>
                      </div>
                    </div>
                  )}
                  <div className="service-item-footer">
                    <span className="service-price">{service.price}</span>
                    <button 
                      className={`view-more-btn ${expandedService === service.name ? 'active' : ''}`}
                      onClick={() => toggleServiceExpand(service.name)}
                    >
                      {expandedService === service.name ? 'Show Less' : 'View More'}
                    </button>
                  </div>
                  <div className="quick-contact-bar">
                    <button className="quick-contact-item whatsapp" onClick={() => handleWhatsApp(service.name)}>
                      <span className="contact-icon">💬</span>
                      <span className="contact-text">WhatsApp</span>
                    </button>
                    <button className="quick-contact-item email" onClick={handleEmail}>
                      <span className="contact-icon">✉️</span>
                      <span className="contact-text">Email</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="categories-list">
            {Object.keys(services).map((category) => (
              <div 
                key={category} 
                className="category-item"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="category-icon-large">{services[category].icon}</div>
                <div className="category-info">
                  <h3 className="category-name">{category}</h3>
                  <p className="category-count">{services[category].items.length} services</p>
                </div>
                <div className="category-arrow">→</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const IdeasScreen = () => (
    <div className="screen ideas-screen">
      <div className="screen-header-simple">
        <h1 className="screen-title">Business Ideas</h1>
        <p className="screen-subtitle">Innovative solutions for modern problems</p>
      </div>

      <div className="screen-content">
        <div className="ideas-list">
          {businessIdeas.map((idea, idx) => (
            <div key={idx} className="idea-item">
              <h3 className="idea-title">{idea.name}</h3>
              <div className="idea-detail">
                <strong>Problem:</strong> {idea.problem}
              </div>
              <div className="idea-detail">
                <strong>Solution:</strong> {idea.solution}
              </div>
              <div className="idea-detail">
                <strong>Value:</strong> {idea.value}
              </div>
              <div className="service-item-footer">
                <span className="service-price">{idea.price}</span>
              </div>
              <div className="quick-contact-bar">
                <button className="quick-contact-item whatsapp" onClick={() => handleWhatsApp(idea.name)}>
                  <span className="contact-icon">💬</span>
                  <span className="contact-text">WhatsApp</span>
                </button>
                <button className="quick-contact-item email" onClick={handleEmail}>
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">Email</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="packs-section">
          <h2 className="section-heading">Automation Packs</h2>
          {automationPacks.map((pack, idx) => (
            <div key={idx} className="pack-item">
              <h3 className="pack-name">{pack.name}</h3>
              <p className="pack-includes">{pack.includes}</p>
              <p className="pack-benefit">{pack.benefit}</p>
              <div className="service-item-footer">
                <span className="service-price">{pack.price}</span>
              </div>
              <div className="quick-contact-bar">
                <button className="quick-contact-item whatsapp" onClick={() => handleWhatsApp(pack.name)}>
                  <span className="contact-icon">💬</span>
                  <span className="contact-text">WhatsApp</span>
                </button>
                <button className="quick-contact-item email" onClick={handleEmail}>
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">Email</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const ContactScreen = () => (
    <div className="screen contact-screen">
      <div className="screen-header-simple">
        <h1 className="screen-title">Get in Touch</h1>
        <p className="screen-subtitle">We're here to help</p>
      </div>

      <div className="screen-content">
        <div className="contact-section">
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Chat with us instantly</p>
            <button className="contact-action-btn" onClick={() => handleWhatsApp()}>
              Start Chat
            </button>
            <span className="contact-info">+91 90911 56095</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>Send us your query</p>
            <button className="contact-action-btn" onClick={handleEmail}>
              Send Email
            </button>
            <span className="contact-info">sales@cehpoint.co.in</span>
          </div>
        </div>

        <div className="careers-card">
          <h2 className="careers-heading">Grow with Cehpoint</h2>
          <p className="careers-text">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <button className="cta-btn primary" onClick={handleEmail}>
            Send Your Profile
          </button>
        </div>

        <div className="footer-info">
          <p>© 2024 Cehpoint</p>
          <p>Crafted with excellence</p>
        </div>
      </div>
    </div>
  )

  const renderScreen = () => {
    const screens = {
      home: <HomeScreen />,
      services: <ServicesScreen />,
      ideas: <IdeasScreen />,
      contact: <ContactScreen />
    }
    return screens[activeScreen]
  }

  return (
    <div className="mobile-app">
      <div className="app-container">
        {renderScreen()}
      </div>

      <nav className="bottom-nav">
        <button 
          className={`nav-btn ${activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => { setActiveScreen('home'); setSelectedCategory(null); }}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button 
          className={`nav-btn ${activeScreen === 'services' ? 'active' : ''}`}
          onClick={() => { setActiveScreen('services'); setSelectedCategory(null); }}
        >
          <span className="nav-icon">💼</span>
          <span className="nav-label">Services</span>
        </button>
        <button 
          className={`nav-btn ${activeScreen === 'ideas' ? 'active' : ''}`}
          onClick={() => { setActiveScreen('ideas'); setSelectedCategory(null); }}
        >
          <span className="nav-icon">💡</span>
          <span className="nav-label">Ideas</span>
        </button>
        <button 
          className={`nav-btn ${activeScreen === 'contact' ? 'active' : ''}`}
          onClick={() => { setActiveScreen('contact'); setSelectedCategory(null); }}
        >
          <span className="nav-icon">📞</span>
          <span className="nav-label">Contact</span>
        </button>
      </nav>

    </div>
  )
}

export default App
