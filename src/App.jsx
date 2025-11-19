import { useState, useEffect } from 'react'
import { Browser } from '@capacitor/browser'
import './App.css'
import './AppImproved.css'
import { technologyDetails } from './data/technologyDetails'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [preloaderFadeOut, setPreloaderFadeOut] = useState(false)
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [selectedTech, setSelectedTech] = useState(null)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setPreloaderFadeOut(true)
    }, 2300)

    const hideTimer = setTimeout(() => {
      setShowPreloader(false)
    }, 2800)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const whatsappNumber = '919091156095'
  const email = 'sales@cehpoint.co.in'

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
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'Firebase', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'AI/ML', category: 'AI' },
    { name: 'DevOps', category: 'Automation' },
    { name: 'Automation', category: 'Automation' }
  ]

  const industries = [
    {
      name: 'Retail',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      solutions: ['POS Systems', 'Inventory Management', 'Customer Loyalty Programs', 'E-commerce Integration']
    },
    {
      name: 'Hospitality',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      solutions: ['Table Booking Systems', 'Menu Management', 'Kitchen Automation', 'Guest Management']
    },
    {
      name: 'Healthcare',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      solutions: ['Patient Records', 'Appointment Scheduling', 'Billing Integration', 'Medical Reports']
    },
    {
      name: 'Education',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      solutions: ['Student Portals', 'Attendance Tracking', 'Parent Communication', 'Online Class Management']
    },
    {
      name: 'Real Estate',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      solutions: ['Property Listings', 'Lead Management', 'Virtual Tours', 'Document Management']
    },
    {
      name: 'SaaS',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      solutions: ['Subscription Billing', 'Multi-tenant Architecture', 'Analytics Dashboard', 'API Integration']
    },
    {
      name: 'Finance',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      solutions: ['Payment Gateway', 'Transaction Tracking', 'Financial Reports', 'Compliance Automation']
    },
    {
      name: 'MSMEs',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      solutions: ['Business Automation', 'Lead Generation', 'Inventory Systems', 'Customer Management']
    },
    {
      name: 'Enterprise',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      solutions: ['ERP Systems', 'Workflow Automation', 'Data Analytics', 'Cloud Migration']
    }
  ]

  const investorIdeas = [
    {
      name: 'AI-Powered Real Estate Platform',
      description: 'Virtual property tours with AI-based recommendations and predictive analytics',
      investment: '₹50,000 - ₹2,00,000',
      roi: '18-24 months',
      market: 'Growing 40% annually',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Smart Restaurant POS System',
      description: 'Cloud-based point-of-sale with kitchen automation and inventory tracking',
      investment: '₹30,000 - ₹1,50,000',
      roi: '12-18 months',
      market: '₹500Cr+ opportunity',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Healthcare Appointment Platform',
      description: 'Multi-clinic booking system with patient management and telemedicine',
      investment: '₹40,000 - ₹1,80,000',
      roi: '15-20 months',
      market: 'High demand sector',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'EdTech Learning Platform',
      description: 'Online courses with live classes, assessments, and certification',
      investment: '₹35,000 - ₹2,50,000',
      roi: '10-15 months',
      market: 'Fastest growing sector',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: 'Multi-Vendor Marketplace',
      description: 'Niche-specific marketplace platform with vendor management and payments',
      investment: '₹60,000 - ₹3,00,000',
      roi: '20-30 months',
      market: 'Massive scalability potential',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: 'WhatsApp Commerce Bot',
      description: 'Complete e-commerce solution through WhatsApp with payment integration',
      investment: '₹25,000 - ₹1,20,000',
      roi: '8-12 months',
      market: '500M+ WhatsApp users in India',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  const careerOpenings = [
    {
      role: 'Full Stack Developer',
      type: 'Full-time',
      experience: '1-3 years',
      location: 'Remote',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      role: 'AI/ML Engineer',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      skills: ['Python', 'TensorFlow', 'NLP']
    },
    {
      role: 'Business Development Executive',
      type: 'Full-time',
      experience: '1-2 years',
      location: 'Hybrid',
      skills: ['Sales', 'Communication', 'Client Management']
    },
    {
      role: 'UI/UX Designer',
      type: 'Contract',
      experience: '2-3 years',
      location: 'Remote',
      skills: ['Figma', 'Adobe XD', 'Prototyping']
    }
  ]

  const services = {
    'App Development': {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      items: [
        {
          name: 'Modern Web Applications',
          summary: 'Beautiful, fast, and responsive web applications built with latest technologies',
          benefits: ['Mobile-first responsive design', 'Lightning-fast performance', 'Scalable architecture'],
          price: '₹15,000 - ₹1,50,000'
        },
        {
          name: 'Mobile App Development',
          summary: 'Native-quality applications for iOS and Android platforms',
          benefits: ['Cross-platform support', 'App store deployment ready', 'Offline capabilities'],
          price: '₹25,000 - ₹2,50,000'
        },
        {
          name: 'SaaS Product Development',
          summary: 'Complete software-as-a-service solutions with subscription management',
          benefits: ['Subscription billing integration', 'Multi-tenant architecture', 'Analytics dashboard'],
          price: '₹49,000 - ₹5,00,000'
        },
        {
          name: 'Dashboard & Admin Panels',
          summary: 'Powerful control centers for business management and analytics',
          benefits: ['Real-time data visualization', 'User role management', 'Custom report generation'],
          price: '₹12,000 - ₹90,000'
        },
        {
          name: 'Business Websites',
          summary: 'Professional websites optimized for conversions and search engines',
          benefits: ['SEO optimized', 'Fast loading speeds', 'Mobile responsive'],
          price: '₹7,999 - ₹45,000'
        },
        {
          name: 'E-commerce Solutions',
          summary: 'Complete online store solutions with payment and inventory management',
          benefits: ['Payment gateway integration', 'Inventory management', 'Order tracking system'],
          price: '₹20,000 - ₹2,00,000'
        }
      ]
    },
    'Cloud & Deployment': {
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      items: [
        {
          name: 'AWS Deployment',
          summary: 'Scalable cloud infrastructure on Amazon Web Services',
          benefits: ['Auto-scaling capabilities', '99.99% uptime guarantee', 'Global CDN deployment'],
          price: '₹9,999 - ₹75,000'
        },
        {
          name: 'GCP Deployment',
          summary: 'Google Cloud Platform deployment and infrastructure management',
          benefits: ['Machine learning ready', 'High performance computing', 'Cost optimization'],
          price: '₹8,999 - ₹70,000'
        },
        {
          name: 'Firebase Integration',
          summary: 'Real-time database and hosting solutions with authentication',
          benefits: ['Real-time data sync', 'Built-in authentication', 'Free tier available'],
          price: '₹6,999 - ₹75,000'
        },
        {
          name: 'CI/CD Pipeline Setup',
          summary: 'Automated deployment pipelines for faster releases',
          benefits: ['Faster release cycles', 'Reduced deployment errors', 'Automated testing'],
          price: '₹7,999 - ₹35,000'
        },
        {
          name: 'Cloud Cost Optimization',
          summary: 'Reduce cloud costs while improving performance and security',
          benefits: ['Up to 40% cost savings', 'Performance improvements', 'Security hardening'],
          price: '₹5,999 - ₹30,000'
        }
      ]
    },
    'Automation Services': {
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      items: [
        {
          name: 'Lead Generation Automation',
          summary: 'Automated systems to capture, qualify and nurture leads',
          benefits: ['24/7 automated lead capture', 'Automatic follow-up sequences', 'CRM integration'],
          price: '₹7,999 - ₹99,999'
        },
        {
          name: 'WhatsApp Business Automation',
          summary: 'Intelligent WhatsApp messaging and customer engagement systems',
          benefits: ['Instant automated responses', 'Order confirmations', 'Customer support automation'],
          price: '₹4,999 - ₹70,000'
        },
        {
          name: 'Business Process Automation',
          summary: 'Streamline repetitive tasks and optimize workflows',
          benefits: ['Save 10+ hours weekly', 'Reduce human errors by 90%', 'Boost team productivity'],
          price: '₹4,999 - ₹49,000'
        },
        {
          name: 'Sales Follow-Up Automation',
          summary: 'Never miss a follow-up opportunity with automated sequences',
          benefits: ['Automated reminder system', 'Multi-channel sequences', 'SMS & email integration'],
          price: '₹5,999 - ₹55,000'
        },
        {
          name: 'Automated Reporting',
          summary: 'Daily, weekly, monthly reports generated and delivered automatically',
          benefits: ['Scheduled delivery', 'Custom templates', 'Data visualization'],
          price: '₹6,999 - ₹40,000'
        },
        {
          name: 'CRM Workflow Automation',
          summary: 'Intelligent customer relationship management automation',
          benefits: ['Automated lead scoring', 'Pipeline automation', 'Task assignment'],
          price: '₹10,000 - ₹95,000'
        }
      ]
    },
    'AI Tools & Chatbots': {
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      items: [
        {
          name: 'Custom AI Chatbot',
          summary: 'Smart conversational AI tailored for your business needs',
          benefits: ['24/7 customer engagement', 'Multi-language support', 'Self-learning capabilities'],
          price: '₹9,999 - ₹80,000'
        },
        {
          name: 'AI Support Agent',
          summary: 'Automated customer support with contextual understanding',
          benefits: ['Instant response times', 'Ticket management', 'Seamless human handoff'],
          price: '₹12,000 - ₹1,20,000'
        },
        {
          name: 'AI Appointment Bot',
          summary: 'Intelligent booking and scheduling assistant',
          benefits: ['Calendar integration', 'Automated reminders', 'Rescheduling handling'],
          price: '₹9,999 - ₹75,000'
        },
        {
          name: 'AI Knowledge Base',
          summary: 'Instant answers from your documentation and content',
          benefits: ['Learns from documentation', 'Accurate contextual responses', 'Easy content updates'],
          price: '₹8,999 - ₹70,000'
        },
        {
          name: 'AI Sales Assistant',
          summary: 'Intelligent lead qualification and sales nurturing',
          benefits: ['24/7 lead qualification', 'Personalized engagement', 'Sales insights & analytics'],
          price: '₹15,000 - ₹1,50,000'
        }
      ]
    }
  }

  const HomeScreen = () => (
    <div className="screen home-screen">
      <div className="welcome-banner">
        <h2 className="welcome-heading">Transforming Indian Businesses</h2>
        <p className="welcome-text">
          Affordable, elegant digital solutions crafted with precision for startups and enterprises
        </p>
      </div>

      <div className="section-divider"></div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">100+</div>
          <div className="stat-name">Projects Delivered</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-name">Happy Clients</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">18+</div>
          <div className="stat-name">Technologies</div>
        </div>
      </div>

      <div className="content-section">
        <h3 className="section-heading">Our Expertise</h3>
        <div className="expertise-grid">
          <div className="expertise-card" onClick={() => setActiveScreen('services')}>
            <div className="expertise-label">AI & Automation</div>
            <p className="expertise-desc">Smart chatbots, workflow automation, and intelligent systems</p>
            <div className="expertise-price">Starting ₹4,999</div>
          </div>
          <div className="expertise-card" onClick={() => setActiveScreen('services')}>
            <div className="expertise-label">App Development</div>
            <p className="expertise-desc">Web & mobile applications with modern technologies</p>
            <div className="expertise-price">Starting ₹7,999</div>
          </div>
          <div className="expertise-card" onClick={() => setActiveScreen('services')}>
            <div className="expertise-label">Cloud Solutions</div>
            <p className="expertise-desc">AWS, GCP, Firebase deployment & optimization</p>
            <div className="expertise-price">Starting ₹5,999</div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3 className="section-heading">Technology Stack</h3>
        <div className="tech-showcase">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="tech-item"
              onClick={() => {
                setSelectedTech(tech.name)
                setActiveScreen('techDetail')
              }}
            >
              <div className="tech-label">{tech.name}</div>
              <div className="tech-category">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <button className="primary-button" onClick={() => setActiveScreen('services')}>
          Explore Services
        </button>
        <button className="secondary-button" onClick={() => setActiveScreen('industries')}>
          View Industries
        </button>
      </div>
    </div>
  )

  const ServicesScreen = () => (
    <div className="screen services-screen">
      <div className="page-header">
        <h1 className="page-title">Our Services</h1>
        <p className="page-description">Comprehensive solutions with transparent pricing</p>
      </div>

      <div className="screen-content">
        {selectedCategory ? (
          <div className="category-detail">
            <button className="back-btn" onClick={() => setSelectedCategory(null)}>
              <span className="back-arrow">←</span>
              <span>Back to Categories</span>
            </button>
            <div className="category-detail-header" style={{ background: services[selectedCategory].gradient }}>
              <h2 className="category-detail-title">{selectedCategory}</h2>
              <p className="category-detail-count">{services[selectedCategory].items.length} Services Available</p>
            </div>
            <div className="services-list">
              {services[selectedCategory].items.map((service, idx) => (
                <div key={idx} className="service-detail-card">
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.summary}</p>
                  <div className="service-features">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="service-pricing">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="categories-list">
            {Object.keys(services).map((category) => (
              <div 
                key={category} 
                className="service-category-card"
                onClick={() => setSelectedCategory(category)}
                style={{ background: services[category].gradient }}
              >
                <h3 className="category-title">{category}</h3>
                <p className="category-services-count">{services[category].items.length} services available</p>
                <div className="category-view-arrow">→</div>
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
        <p className="page-description">Tailored solutions for every sector</p>
      </div>

      <div className="screen-content">
        {selectedIndustry ? (
          <div className="industry-detail">
            <button className="back-btn" onClick={() => setSelectedIndustry(null)}>
              <span className="back-arrow">←</span>
              <span>Back to Industries</span>
            </button>
            <div 
              className="industry-detail-header"
              style={{ background: industries.find(i => i.name === selectedIndustry).gradient }}
            >
              <h2 className="industry-detail-title">{selectedIndustry}</h2>
              <p className="industry-detail-subtitle">Specialized Solutions</p>
            </div>
            <div className="solutions-grid">
              {industries.find(i => i.name === selectedIndustry).solutions.map((solution, idx) => (
                <div key={idx} className="solution-card">
                  <div className="solution-marker">✓</div>
                  <div className="solution-name">{solution}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="industries-list">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="industry-card"
                onClick={() => setSelectedIndustry(industry.name)}
                style={{ background: industry.gradient }}
              >
                <h3 className="industry-title">{industry.name}</h3>
                <p className="industry-solutions-count">{industry.solutions.length} specialized solutions</p>
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
        <h1 className="page-title">Investment Opportunities</h1>
        <p className="page-description">Start your business with 100% equity ownership</p>
      </div>

      <div className="investor-promise-section">
        <div className="promise-item">
          <div className="promise-title">We Build</div>
          <p className="promise-text">Complete product development from concept to launch</p>
        </div>
        <div className="promise-item">
          <div className="promise-title">100% Your Equity</div>
          <p className="promise-text">You own the entire business and all intellectual property</p>
        </div>
        <div className="promise-item">
          <div className="promise-title">Full Support</div>
          <p className="promise-text">Branding, documentation, expansion planning & technical support</p>
        </div>
      </div>

      <div className="screen-content">
        <h3 className="section-heading">Business Opportunities</h3>
        <div className="opportunities-list">
          {investorIdeas.map((idea, idx) => (
            <div key={idx} className="opportunity-card" style={{ background: idea.gradient }}>
              <h3 className="opportunity-title">{idea.name}</h3>
              <p className="opportunity-description">{idea.description}</p>
              <div className="opportunity-metrics">
                <div className="metric-item">
                  <div className="metric-label">Investment Range</div>
                  <div className="metric-value">{idea.investment}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">ROI Timeline</div>
                  <div className="metric-value">{idea.roi}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Market Opportunity</div>
                  <div className="metric-value">{idea.market}</div>
                </div>
              </div>
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
        <p className="page-description">Build the future of technology with us</p>
      </div>

      <div className="benefits-section">
        <h3 className="section-heading">Why Work With Cehpoint</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-name">Remote First</div>
            <p className="benefit-desc">Work from anywhere with flexible hours</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-name">Career Growth</div>
            <p className="benefit-desc">Learning opportunities and advancement</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-name">Competitive Pay</div>
            <p className="benefit-desc">Industry-leading compensation packages</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-name">Exciting Projects</div>
            <p className="benefit-desc">Work on cutting-edge technologies</p>
          </div>
        </div>
      </div>

      <div className="screen-content">
        <h3 className="section-heading">Open Positions</h3>
        <div className="careers-list">
          {careerOpenings.map((job, idx) => (
            <div key={idx} className="career-card">
              <h3 className="career-role">{job.role}</h3>
              <div className="career-tags">
                <span className="career-tag">{job.type}</span>
                <span className="career-tag">{job.location}</span>
                <span className="career-tag">{job.experience}</span>
              </div>
              <div className="career-skills">
                <div className="skills-label">Required Skills:</div>
                <div className="skills-list">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const TechDetailScreen = () => {
    if (!selectedTech || !technologyDetails[selectedTech]) {
      return null
    }

    const tech = technologyDetails[selectedTech]

    return (
      <div className="screen tech-detail-screen">
        <button className="back-btn" onClick={() => setActiveScreen('home')}>
          <span className="back-arrow">←</span>
          <span>Back to Home</span>
        </button>

        <div className="tech-hero" style={{ background: tech.gradient }}>
          <div className="tech-category-badge">{tech.category}</div>
          <h1 className="tech-name">{tech.name}</h1>
          <p className="tech-tagline">{tech.tagline}</p>
        </div>

        <div className="tech-content">
          <section className="tech-section">
            <h2 className="tech-section-title">What is {tech.name}?</h2>
            <p className="tech-section-description">{tech.description}</p>
          </section>

          <section className="tech-section">
            <h2 className="tech-section-title">Why Businesses Choose {tech.name}</h2>
            <div className="tech-benefits-grid">
              {tech.whyBusinessesChoose.map((reason, idx) => (
                <div key={idx} className="tech-benefit-item">
                  <span className="tech-check">✓</span>
                  <span className="tech-benefit-text">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-section">
            <h2 className="tech-section-title">Key Advantages</h2>
            <div className="tech-advantages-list">
              {tech.advantages.map((advantage, idx) => (
                <div key={idx} className="tech-advantage-card">
                  <div className="advantage-number">{idx + 1}</div>
                  <div className="advantage-text">{advantage}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-section">
            <h2 className="tech-section-title">Ideal Use Cases</h2>
            <div className="tech-usecase-grid">
              {tech.idealFor.map((usecase, idx) => (
                <div key={idx} className="tech-usecase-card">
                  <div className="usecase-marker">•</div>
                  <div className="usecase-text">{usecase}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-section">
            <h2 className="tech-section-title">Built With {tech.name}</h2>
            <p className="tech-section-subtitle">Trusted by industry leaders worldwide</p>
            <div className="tech-companies-list">
              {tech.builtWith.map((company, idx) => (
                <div key={idx} className="company-badge">{company}</div>
              ))}
            </div>
          </section>

          <section className="tech-section">
            <h2 className="tech-section-title">Market Relevance</h2>
            <p className="tech-market-text">{tech.marketRelevance}</p>
          </section>

          {tech.pricingRange && (
            <section className="tech-section">
              <h2 className="tech-section-title">Pricing Range</h2>
              <div className="tech-pricing-card">
                <div className="pricing-range">{tech.pricingRange}</div>
                <div className="pricing-note">Investment varies based on project scope and complexity</div>
              </div>
            </section>
          )}

          <section className="tech-cta-section">
            <h3 className="tech-cta-heading">Need Development Support?</h3>
            <p className="tech-cta-description">
              If you need help building your next project with {tech.name}, our team is ready to assist.
            </p>
            <button 
              className="tech-cta-button"
              onClick={() => setActiveScreen('contact')}
            >
              Visit Contact Page
            </button>
          </section>
        </div>
      </div>
    )
  }

  const ContactScreen = () => (
    <div className="screen contact-screen">
      <div className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-description">We're here to help you succeed</p>
      </div>

      <div className="screen-content">
        <div className="contact-options">
          <div className="contact-card">
            <h3 className="contact-method">WhatsApp</h3>
            <p className="contact-description">Quick responses and instant support</p>
            <div className="contact-info">+91 90911 56095</div>
            <button className="contact-action-btn whatsapp-action" onClick={() => handleWhatsApp()}>
              Start Conversation
            </button>
          </div>

          <div className="contact-card">
            <h3 className="contact-method">Email</h3>
            <p className="contact-description">Detailed queries and formal proposals</p>
            <div className="contact-info">sales@cehpoint.co.in</div>
            <button className="contact-action-btn email-action" onClick={handleEmail}>
              Send Email
            </button>
          </div>
        </div>

        <div className="availability-section">
          <h3 className="section-heading">Business Hours</h3>
          <div className="hours-list">
            <div className="hours-row">
              <span className="hours-day">Monday - Friday</span>
              <span className="hours-time">9:00 AM - 7:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Saturday</span>
              <span className="hours-time">10:00 AM - 5:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Sunday</span>
              <span className="hours-time">Emergency Support Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const Preloader = () => (
    <div className={`preloader ${preloaderFadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <h1 className="preloader-logo">Cehpoint</h1>
        <p className="preloader-tagline">Modern IT, Automation, and AI Solutions</p>
        <div className="preloader-animation">
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  )

  if (showPreloader) {
    return <Preloader />
  }

  return (
    <div className="mobile-app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="header-logo">Cehpoint</h1>
          <p className="header-tagline">Premium Technology Solutions</p>
        </div>
      </header>

      <div className="app-container">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'services' && <ServicesScreen />}
        {activeScreen === 'industries' && <IndustriesScreen />}
        {activeScreen === 'investor' && <InvestorScreen />}
        {activeScreen === 'careers' && <CareersScreen />}
        {activeScreen === 'contact' && <ContactScreen />}
        {activeScreen === 'techDetail' && <TechDetailScreen />}
      </div>

      <nav className="bottom-navigation">
        <button 
          className={`nav-button ${activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => setActiveScreen('home')}
        >
          <span className="nav-label">Home</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'services' ? 'active' : ''}`}
          onClick={() => setActiveScreen('services')}
        >
          <span className="nav-label">Services</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'industries' ? 'active' : ''}`}
          onClick={() => setActiveScreen('industries')}
        >
          <span className="nav-label">Industries</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'investor' ? 'active' : ''}`}
          onClick={() => setActiveScreen('investor')}
        >
          <span className="nav-label">Invest</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveScreen('careers')}
        >
          <span className="nav-label">Careers</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveScreen('contact')}
        >
          <span className="nav-label">Contact</span>
        </button>
      </nav>
    </div>
  )
}

export default App
