import { useState, useEffect } from 'react'
import { Browser } from '@capacitor/browser'
import './App.css'
import { technologyDetails } from './data/technologyDetails'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [preloaderFadeOut, setPreloaderFadeOut] = useState(false)
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [selectedTech, setSelectedTech] = useState(null)
  const [currentInvestorIndex, setCurrentInvestorIndex] = useState(0)

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
  const corporateIVR = '+913369029331'
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

  const handlePhoneCall = async () => {
    const url = `tel:${corporateIVR}`
    window.location.href = url
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
      description: 'Transform your retail business with modern technology solutions that drive sales and customer satisfaction.',
      solutions: [
        { name: 'POS Systems', desc: 'Complete point-of-sale with inventory tracking', price: '₹15,000 - ₹80,000', useCase: 'Manage sales, inventory, and customer data in real-time' },
        { name: 'Inventory Management', desc: 'Real-time stock tracking and automated reordering', price: '₹12,000 - ₹60,000', useCase: 'Never run out of stock, reduce wastage, optimize inventory costs' },
        { name: 'Customer Loyalty Programs', desc: 'Reward systems to increase repeat customers', price: '₹8,000 - ₹40,000', useCase: 'Build customer loyalty with points, rewards, and personalized offers' },
        { name: 'E-commerce Integration', desc: 'Online store synchronized with physical inventory', price: '₹20,000 - ₹1,50,000', useCase: 'Sell online and offline seamlessly with unified inventory' }
      ]
    },
    {
      name: 'Hospitality',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Elevate guest experiences and streamline restaurant operations with hospitality-focused solutions.',
      solutions: [
        { name: 'Table Booking Systems', desc: 'Online reservations with real-time availability', price: '₹10,000 - ₹50,000', useCase: 'Reduce no-shows, manage bookings efficiently, increase table turnover' },
        { name: 'Menu Management', desc: 'Digital menus with real-time updates and ordering', price: '₹8,000 - ₹35,000', useCase: 'Update menu instantly, showcase specials, enable contactless ordering' },
        { name: 'Kitchen Automation', desc: 'Order management and kitchen display systems', price: '₹15,000 - ₹70,000', useCase: 'Speed up service, reduce errors, optimize kitchen workflow' },
        { name: 'Guest Management', desc: 'CRM for hospitality with preferences tracking', price: '₹12,000 - ₹55,000', useCase: 'Remember guest preferences, personalize service, build loyalty' }
      ]
    },
    {
      name: 'Healthcare',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Improve patient care and operational efficiency with HIPAA-compliant healthcare technology.',
      solutions: [
        { name: 'Patient Records', desc: 'Secure electronic health records management', price: '₹18,000 - ₹90,000', useCase: 'Digitize patient history, enable quick access, ensure data security' },
        { name: 'Appointment Scheduling', desc: 'Online booking with automated reminders', price: '₹12,000 - ₹55,000', useCase: 'Reduce no-shows, optimize doctor schedules, improve patient convenience' },
        { name: 'Billing Integration', desc: 'Insurance claims and patient billing automation', price: '₹15,000 - ₹75,000', useCase: 'Streamline billing, reduce errors, faster insurance processing' },
        { name: 'Telemedicine Platform', desc: 'Virtual consultation with prescription management', price: '₹25,000 - ₹1,20,000', useCase: 'Expand reach, provide remote care, increase accessibility' }
      ]
    },
    {
      name: 'Education',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: 'Modernize education delivery with comprehensive learning management and communication tools.',
      solutions: [
        { name: 'Student Portals', desc: 'Centralized platform for assignments and grades', price: '₹15,000 - ₹70,000', useCase: 'Students access materials, submit work, track progress online' },
        { name: 'Attendance Tracking', desc: 'Automated attendance with parent notifications', price: '₹8,000 - ₹35,000', useCase: 'Real-time attendance tracking, instant parent alerts, reduce absenteeism' },
        { name: 'Parent Communication', desc: 'Direct messaging and progress reporting', price: '₹10,000 - ₹45,000', useCase: 'Keep parents informed, share updates, enable collaboration' },
        { name: 'Online Class Management', desc: 'Virtual classrooms with interactive features', price: '₹20,000 - ₹1,00,000', useCase: 'Conduct live classes, record sessions, manage assessments' }
      ]
    },
    {
      name: 'Real Estate',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Accelerate property sales and streamline operations with real estate technology solutions.',
      solutions: [
        { name: 'Property Listings', desc: 'Showcase properties with virtual tours and details', price: '₹15,000 - ₹80,000', useCase: 'Display properties professionally, attract more buyers, close faster' },
        { name: 'Lead Management', desc: 'Track inquiries from multiple sources', price: '₹12,000 - ₹60,000', useCase: 'Never miss a lead, automate follow-ups, increase conversions' },
        { name: 'Virtual Tours', desc: '360° property views with AR integration', price: '₹20,000 - ₹1,20,000', useCase: 'Show properties remotely, save time, reach distant buyers' },
        { name: 'Document Management', desc: 'Digital contracts and agreement workflow', price: '₹10,000 - ₹50,000', useCase: 'Paperless transactions, faster closings, secure storage' }
      ]
    },
    {
      name: 'SaaS',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      description: 'Build scalable software-as-a-service platforms with enterprise-grade architecture.',
      solutions: [
        { name: 'Subscription Billing', desc: 'Automated recurring payments and invoicing', price: '₹18,000 - ₹90,000', useCase: 'Handle subscriptions, manage upgrades, process payments automatically' },
        { name: 'Multi-tenant Architecture', desc: 'Secure data isolation for multiple clients', price: '₹35,000 - ₹2,00,000', useCase: 'Serve thousands of customers from one platform securely' },
        { name: 'Analytics Dashboard', desc: 'Real-time metrics and business intelligence', price: '₹15,000 - ₹80,000', useCase: 'Track KPIs, make data-driven decisions, monitor growth' },
        { name: 'API Integration', desc: 'Connect with third-party services seamlessly', price: '₹12,000 - ₹70,000', useCase: 'Extend functionality, integrate tools, enhance user experience' }
      ]
    },
    {
      name: 'Finance',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      description: 'Secure, compliant financial technology solutions for banking, fintech, and accounting.',
      solutions: [
        { name: 'Payment Gateway', desc: 'Secure payment processing with multiple options', price: '₹20,000 - ₹1,00,000', useCase: 'Accept payments online securely, support multiple methods' },
        { name: 'Transaction Tracking', desc: 'Real-time monitoring and reconciliation', price: '₹15,000 - ₹75,000', useCase: 'Track all transactions, automate reconciliation, detect fraud' },
        { name: 'Financial Reports', desc: 'Automated reporting and compliance', price: '₹12,000 - ₹60,000', useCase: 'Generate reports instantly, ensure compliance, audit-ready records' },
        { name: 'Loan Management System', desc: 'End-to-end loan processing automation', price: '₹25,000 - ₹1,50,000', useCase: 'Process applications faster, automate approvals, track repayments' }
      ]
    },
    {
      name: 'MSMEs',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      description: 'Affordable, scalable business solutions designed specifically for small and medium enterprises.',
      solutions: [
        { name: 'Business Automation', desc: 'Automate repetitive tasks and workflows', price: '₹8,000 - ₹45,000', useCase: 'Save time, reduce errors, focus on growth instead of admin work' },
        { name: 'Lead Generation', desc: 'Automated lead capture and nurturing', price: '₹10,000 - ₹55,000', useCase: 'Generate quality leads 24/7, increase sales pipeline' },
        { name: 'Inventory Systems', desc: 'Simple stock management for small businesses', price: '₹7,000 - ₹35,000', useCase: 'Track inventory easily, prevent stockouts, optimize ordering' },
        { name: 'Customer Management', desc: 'CRM tailored for MSMEs', price: '₹9,000 - ₹40,000', useCase: 'Manage customer relationships, track sales, improve retention' }
      ]
    },
    {
      name: 'Enterprise',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      description: 'Enterprise-scale solutions for large organizations requiring robust, scalable systems.',
      solutions: [
        { name: 'ERP Systems', desc: 'Comprehensive enterprise resource planning', price: '₹50,000 - ₹5,00,000', useCase: 'Unify all business processes, improve efficiency, real-time insights' },
        { name: 'Workflow Automation', desc: 'Automate complex multi-department workflows', price: '₹30,000 - ₹2,50,000', useCase: 'Reduce manual work, ensure compliance, faster approvals' },
        { name: 'Data Analytics', desc: 'Big data processing and business intelligence', price: '₹35,000 - ₹3,00,000', useCase: 'Make data-driven decisions, predict trends, optimize operations' },
        { name: 'Cloud Migration', desc: 'Move legacy systems to modern cloud infrastructure', price: '₹40,000 - ₹3,50,000', useCase: 'Reduce costs, improve scalability, enhance security' }
      ]
    }
  ]

  const investorIdeas = [
    {
      name: '🚨 AI Mental Health Crisis Prevention System',
      description: 'Revolutionary AI platform that predicts mental health crises before they happen. Uses voice analysis, behavioral patterns, and biometric data to identify depression, anxiety, and suicidal tendencies 72 hours in advance. Connects users instantly with counselors.',
      problem: 'SOLVING: 800,000+ annual suicides globally. India has highest youth suicide rate.',
      investment: '₹80,000 - ₹4,50,000',
      roi: '15-20 months',
      market: '₹12,000Cr+ Mental Health Crisis',
      impact: 'Save 100,000+ lives annually',
      controversy: 'Raises privacy concerns but saves lives',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)'
    },
    {
      name: '⚡ Blockchain Food Waste Elimination Network',
      description: 'Groundbreaking platform connecting restaurants, hotels, and events with NGOs and hunger relief organizations in real-time. Blockchain ensures transparency. AI predicts waste patterns and optimizes distribution routes.',
      problem: 'SOLVING: 68M tonnes food wasted yearly in India while 200M go hungry',
      investment: '₹60,000 - ₹3,20,000',
      roi: '12-18 months',
      market: '₹40,000Cr+ Food Industry',
      impact: 'Feed 50M+ people with rescued food',
      controversy: 'Challenges traditional charity models',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: '🌊 Ocean Plastic to Cryptocurrency Mining',
      description: 'Revolutionary system that rewards ocean plastic collection with cryptocurrency. Collectors scan plastic barcodes, AI verifies authenticity, blockchain records credits. Mining farms powered by recycled plastic energy.',
      problem: 'SOLVING: 8M tonnes plastic enters oceans annually, killing 1M+ marine animals',
      investment: '₹1,20,000 - ₹6,50,000',
      roi: '20-30 months',
      market: '₹90,000Cr+ Environmental Tech',
      impact: 'Remove 10M+ kg ocean plastic yearly',
      controversy: 'Controversial crypto-environmental mix',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: '🔥 Deepfake Detection for Legal Evidence',
      description: 'AI-powered forensic system that detects deepfakes with 99.8% accuracy for courts, police, and legal proceedings. Blockchain timestamping proves video authenticity. API for journalists to verify news.',
      problem: 'SOLVING: 97% increase in deepfake crimes, ₹500Cr+ annual fraud',
      investment: '₹90,000 - ₹5,00,000',
      roi: '10-15 months',
      market: '₹25,000Cr+ LegalTech sector',
      impact: 'Prevent 100,000+ deepfake frauds',
      controversy: 'Arms race between deepfakes and detection',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: '💊 AI Drug Discovery Accelerator',
      description: 'Machine learning platform that simulates millions of molecular combinations to discover new drugs in months instead of years. Open-source rare disease focus. Already identified 3 cancer treatment candidates.',
      problem: 'SOLVING: 10-15 years and $2.6B cost to develop one drug',
      investment: '₹1,50,000 - ₹8,00,000',
      roi: '24-36 months',
      market: '₹2,50,000Cr+ Pharma R&D',
      impact: 'Accelerate 50+ rare disease cures',
      controversy: 'Challenges big pharma monopoly',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: '🚀 Satellite-Based Rural Internet Revolution',
      description: 'Low-cost satellite internet terminals for villages without connectivity. Solar-powered, weatherproof units cost ₹5000 each. Enables telemedicine, e-education, and digital payments in remote areas.',
      problem: 'SOLVING: 300M Indians without internet, digital divide crisis',
      investment: '₹2,00,000 - ₹10,00,000',
      roi: '18-24 months',
      market: '₹60,000Cr+ Rural Internet',
      impact: 'Connect 10M+ rural citizens',
      controversy: 'Competes with govt programs',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: '🎓 AI-Powered Personalized Education for Dyslexia',
      description: 'Revolutionary learning platform that adapts in real-time to dyslexic students. Uses eye-tracking, voice recognition, and adaptive fonts. Gamified approach increases retention by 300%. Free for government schools.',
      problem: 'SOLVING: 15% students have dyslexia, 90% undiagnosed in India',
      investment: '₹70,000 - ₹3,80,000',
      roi: '12-16 months',
      market: '₹18,000Cr+ Special Education',
      impact: 'Help 20M+ dyslexic students learn',
      controversy: 'Challenges traditional education methods',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      name: '⚖️ AI Justice System for Fast-Track Courts',
      description: 'AI that analyzes 4Cr+ pending cases, predicts judgments based on precedents, suggests case grouping for faster resolution. Reduces average case time from 15 years to 6 months. Judges retain final authority.',
      problem: 'SOLVING: 4Cr+ pending court cases, justice delayed is justice denied',
      investment: '₹1,10,000 - ₹6,00,000',
      roi: '20-30 months',
      market: '₹35,000Cr+ LegalTech',
      impact: 'Resolve 1Cr+ cases faster',
      controversy: 'Highly controversial AI in justice',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      name: '🌾 Precision Farming AI for Small Farmers',
      description: 'Affordable AI platform using satellite imagery and IoT sensors to tell farmers exactly when to water, fertilize, and harvest. Increases crop yield by 40%, reduces water usage by 60%. Works via basic smartphone.',
      problem: 'SOLVING: 60% of farmers face crop failure, ₹1L Cr+ annual losses',
      investment: '₹85,000 - ₹4,20,000',
      roi: '8-12 months',
      market: '₹50,000Cr+ AgriTech',
      impact: 'Help 5M+ small farmers prosper',
      controversy: 'None - universally beneficial',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      name: '🏥 Portable AI Diagnostics for Rural Healthcare',
      description: 'Smartphone-attachable medical device with AI diagnosis. Scans for 50+ conditions including malaria, tuberculosis, diabetes. Accuracy matches ₹50L hospital equipment. Costs ₹15,000 per unit.',
      problem: 'SOLVING: 80% of doctors in cities, villages have no diagnostics',
      investment: '₹1,30,000 - ₹7,00,000',
      roi: '15-22 months',
      market: '₹45,000Cr+ Rural Healthcare',
      impact: 'Diagnose 100M+ rural patients',
      controversy: 'Regulatory challenges with AI diagnosis',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: '🔋 EV Battery Second-Life Energy Storage',
      description: 'Repurpose used electric vehicle batteries (70% capacity left) into home energy storage systems. Reduces battery waste, provides affordable backup power. Battery recycling chain included.',
      problem: 'SOLVING: 11M EV batteries will become waste by 2030',
      investment: '₹95,000 - ₹5,20,000',
      roi: '16-24 months',
      market: '₹65,000Cr+ Energy Storage',
      impact: 'Recycle 500,000+ batteries, power 2M homes',
      controversy: 'Battery safety concerns addressed',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: '💧 AI Water Crisis Prediction System',
      description: 'Predicts water shortages 6 months in advance using satellite data, groundwater sensors, and climate models. Alerts authorities to prevent Day Zero scenarios. Optimizes water distribution across cities.',
      problem: 'SOLVING: 21 Indian cities will run out of groundwater by 2030',
      investment: '₹1,05,000 - ₹5,80,000',
      roi: '18-28 months',
      market: '₹30,000Cr+ Water Management',
      impact: 'Prevent water crisis for 100M+ people',
      controversy: 'Politically sensitive water data',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: '🏗️ Construction Waste to Building Materials AI',
      description: 'AI-powered system that converts construction demolition waste into certified building materials. 3D scanning identifies reusable materials, robotic sorting automates processing. 90% waste elimination.',
      problem: 'SOLVING: 150M tonnes construction waste yearly, costs ₹12,000Cr',
      investment: '₹1,40,000 - ₹7,50,000',
      roi: '22-32 months',
      market: '₹80,000Cr+ Construction',
      impact: 'Recycle 50M tonnes waste, save 10M trees',
      controversy: 'Industry resistance to change',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: '🚗 AI Traffic Signal Optimization',
      description: 'Revolutionary AI that controls traffic signals in real-time based on actual traffic flow. Reduces commute times by 40%, fuel consumption by 30%, emissions by 35%. Deployed across entire cities.',
      problem: 'SOLVING: Indians waste 1.5B hours yearly in traffic, ₹1.5L Cr economic loss',
      investment: '₹75,000 - ₹4,00,000',
      roi: '10-16 months',
      market: '₹40,000Cr+ Smart City Projects',
      impact: 'Save 500M hours, reduce 20M tonnes CO2',
      controversy: 'Requires govt adoption',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: '📱 Offline-First Digital Banking for Rural Areas',
      description: 'Banking app that works completely offline, syncs when connectivity available. Uses mesh networking between phones to process transactions. Brings banking to unconnected areas.',
      problem: 'SOLVING: 190M Indians unbanked, 60% due to no internet access',
      investment: '₹90,000 - ₹5,00,000',
      roi: '14-20 months',
      market: '₹35,000Cr+ Financial Inclusion',
      impact: 'Bank 50M+ unbanked citizens',
      controversy: 'Security concerns with offline transactions',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      name: '🎯 AI-Powered Cancer Detection from Voice',
      description: 'Breakthrough AI that detects 14 types of cancer from 30-second voice recordings with 85% accuracy. Uses vocal biomarkers, works on any phone. Early detection increases survival from 40% to 90%.',
      problem: 'SOLVING: Cancer kills 8.5L Indians yearly, 70% diagnosed too late',
      investment: '₹1,60,000 - ₹8,50,000',
      roi: '20-30 months',
      market: '₹1,20,000Cr+ Cancer Care',
      impact: 'Save 200,000+ lives through early detection',
      controversy: 'Medical establishment skepticism',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      name: '🌍 Carbon Credit Marketplace for Individuals',
      description: 'Platform where individuals earn carbon credits for green actions (cycling, solar usage, tree planting). Credits sold to corporations. Blockchain verification prevents fraud. Gamified sustainability.',
      problem: 'SOLVING: Individual carbon footprint ignored, no incentives to go green',
      investment: '₹70,000 - ₹3,60,000',
      roi: '12-18 months',
      market: '₹55,000Cr+ Carbon Trading',
      impact: 'Reduce 10M tonnes CO2, engage 10M citizens',
      controversy: 'Carbon credit market manipulation concerns',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      name: '🧠 Alzheimer\'s Early Detection AI Companion',
      description: 'AI chatbot that detects Alzheimer\'s 5-7 years before symptoms through daily conversations. Analyzes speech patterns, memory recall, response times. Alerts family and doctors for early intervention.',
      problem: 'SOLVING: 5.3M Indians have dementia, 90% undiagnosed until severe',
      investment: '₹85,000 - ₹4,50,000',
      roi: '18-26 months',
      market: '₹22,000Cr+ Elderly Care',
      impact: 'Detect 1M+ cases early, improve quality of life',
      controversy: 'Ethical concerns about AI diagnosis',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: '📚 AI Literacy Program for 500M Adults',
      description: 'Voice-based AI teacher that teaches reading and writing in regional languages. Uses speech recognition, doesn\'t require literacy to start. Gamified progression, cultural context. Targets 260M illiterate adults.',
      problem: 'SOLVING: 260M illiterate adults in India, trapped in poverty cycle',
      investment: '₹1,00,000 - ₹5,50,000',
      roi: '16-24 months',
      market: '₹28,000Cr+ Adult Education',
      impact: 'Educate 10M+ adults, transform families',
      controversy: 'Questions traditional literacy programs',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: '⚡ Microgrids for Slum Electrification',
      description: 'Solar-powered microgrids specifically for slums and informal settlements. Pay-as-you-go via mobile. Each microgrid serves 500 homes. Reduces electrocution deaths, enables businesses.',
      problem: 'SOLVING: 65M slum dwellers with illegal/no electricity, 10,000 deaths yearly',
      investment: '₹1,20,000 - ₹6,50,000',
      roi: '15-22 months',
      market: '₹40,000Cr+ Slum Development',
      impact: 'Power 5M homes safely, prevent 5,000 deaths',
      controversy: 'Competes with utility companies',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: '🚨 AI Domestic Violence Prediction System',
      description: 'Controversial AI that identifies domestic violence risk patterns through anonymized data (hospital visits, police calls, social patterns). Proactive intervention by counselors prevents escalation.',
      problem: 'SOLVING: 30% of married women face domestic violence, mostly unreported',
      investment: '₹95,000 - ₹5,20,000',
      roi: '20-30 months',
      market: '₹18,000Cr+ Women Safety',
      impact: 'Prevent violence against 500,000 women',
      controversy: 'EXTREMELY controversial privacy concerns',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: '🏭 AI Factory Safety Monitoring',
      description: 'Computer vision system that monitors factories 24/7 for safety violations. Detects missing PPE, unsafe practices, machine malfunctions. Prevents accidents before they happen. Mandatory for hazardous industries.',
      problem: 'SOLVING: 48,000 factory deaths yearly, 90% preventable',
      investment: '₹80,000 - ₹4,30,000',
      roi: '10-14 months',
      market: '₹32,000Cr+ Industrial Safety',
      impact: 'Prevent 20,000+ deaths, save ₹5,000Cr losses',
      controversy: 'Worker surveillance concerns',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: '🌱 Vertical Farming for Urban Food Security',
      description: 'AI-controlled vertical farms in shipping containers. Produces 40x more food per sqft than traditional farming. Uses 95% less water. Deployed on building rooftops and parking lots.',
      problem: 'SOLVING: Cities import 90% food, supply chain fragile, rising prices',
      investment: '₹1,50,000 - ₹8,00,000',
      roi: '18-26 months',
      market: '₹45,000Cr+ Urban Agriculture',
      impact: 'Feed 2M urban residents locally, reduce food miles 80%',
      controversy: 'Threatens traditional farming',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      name: '🎓 AI Career Guidance for 50M Students',
      description: 'Revolutionary AI that analyzes student aptitudes, interests, market trends, and predicts best career paths with 85% accuracy. Matches with mentors, courses, internships. Prevents wrong career choices.',
      problem: 'SOLVING: 65% engineering graduates unemployable, wrong career choices',
      investment: '₹75,000 - ₹3,90,000',
      roi: '10-16 months',
      market: '₹25,000Cr+ Career Services',
      impact: 'Guide 10M students to right careers, reduce unemployment',
      controversy: 'AI replacing human career counselors',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      name: '💰 Blockchain Land Registry to End Fraud',
      description: 'Immutable blockchain-based land ownership records. Prevents fraud, eliminates disputes, enables instant verification. Smart contracts for automated property transfers. Solves 70% of court cases.',
      problem: 'SOLVING: 66% of civil cases are property disputes, ₹40,000Cr fraud yearly',
      investment: '₹1,25,000 - ₹6,80,000',
      roi: '24-36 months',
      market: '₹50,000Cr+ Property Technology',
      impact: 'Eliminate 2Cr property disputes, save ₹40,000Cr',
      controversy: 'Govt resistance to transparency',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      name: '🚑 AI Ambulance Route Optimization',
      description: 'AI that clears traffic signals for ambulances in real-time, predicts optimal routes considering accidents, traffic, hospital capacity. Reduces emergency response time by 60%.',
      problem: 'SOLVING: Average ambulance takes 20-30 min, "Golden Hour" lost',
      investment: '₹85,000 - ₹4,60,000',
      roi: '12-18 months',
      market: '₹20,000Cr+ Emergency Services',
      impact: 'Save 50,000+ lives yearly through faster response',
      controversy: 'Traffic manipulation concerns',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: '📡 Disaster Early Warning AI Network',
      description: 'AI network that predicts earthquakes, floods, cyclones, landslides 48-72 hours in advance using satellite data, seismic sensors, weather patterns. Mass SMS alerts to at-risk populations.',
      problem: 'SOLVING: Natural disasters kill 10,000+ Indians yearly, ₹30,000Cr damage',
      investment: '₹1,40,000 - ₹7,50,000',
      roi: '20-30 months',
      market: '₹35,000Cr+ Disaster Management',
      impact: 'Save 8,000+ lives, prevent ₹25,000Cr damage',
      controversy: 'False alarm concerns',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: '🏠 AI Affordable Housing Design Optimizer',
      description: 'AI that designs affordable housing optimized for cost, sustainability, and livability. Uses local materials, climate data, cultural preferences. Reduces construction cost by 40%, time by 50%.',
      problem: 'SOLVING: 18M urban housing shortage, homes unaffordable for 65% population',
      investment: '₹90,000 - ₹4,90,000',
      roi: '16-24 months',
      market: '₹80,000Cr+ Affordable Housing',
      impact: 'House 5M families in affordable, quality homes',
      controversy: 'Architect job displacement fears',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: '🔍 AI Counterfeit Drug Detection',
      description: 'Smartphone app with AI that verifies medicine authenticity by scanning packaging and pills. Blockchain tracks entire drug supply chain. Prevents 20,000+ deaths from fake medicines yearly.',
      problem: 'SOLVING: 25% of drugs in India are counterfeit, ₹20,000Cr black market',
      investment: '₹1,10,000 - ₹6,00,000',
      roi: '14-20 months',
      market: '₹3,00,000Cr+ Pharma Industry',
      impact: 'Save 20,000+ lives, eliminate ₹20,000Cr fraud',
      controversy: 'Pharma company resistance',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: '🎭 AI Regional Language Content Revolution',
      description: 'AI that creates high-quality educational, entertainment content in 100+ regional languages and dialects. Text, audio, video generation. Preserves dying languages, enables local content economy.',
      problem: 'SOLVING: 90% content in English/Hindi, 197 languages ignored',
      investment: '₹95,000 - ₹5,20,000',
      roi: '12-18 months',
      market: '₹60,000Cr+ Content Market',
      impact: 'Serve 800M non-English speakers, preserve 50+ dying languages',
      controversy: 'Cultural appropriation concerns',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: '🌟 AI Skill-to-Job Matching Revolution',
      description: 'Platform that matches workers\' actual skills (not degrees) with jobs using AI skill assessment. Includes gig workers, informal sector. Micro-credentialing and continuous upskilling. Meritocracy over credentials.',
      problem: 'SOLVING: 53% youth unemployed despite labour shortage',
      investment: '₹80,000 - ₹4,20,000',
      roi: '10-15 months',
      market: '₹40,000Cr+ Job Placement',
      impact: 'Employ 5M skilled workers, bridge skill gap',
      controversy: 'Challenges degree-based hiring',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      name: '🚀 Space Debris Tracking for Satellite Safety',
      description: 'AI system that tracks 100M+ pieces of space debris, predicts collision risks, suggests orbital maneuvers. Protects India\'s ₹50,000Cr satellite infrastructure. Commercial service for global satellite operators.',
      problem: 'SOLVING: 100M space debris pieces threaten satellites worth ₹3L Cr globally',
      investment: '₹2,00,000 - ₹10,00,000',
      roi: '24-36 months',
      market: '₹1,50,000Cr+ Space Industry',
      impact: 'Protect ₹50,000Cr Indian satellites, global revenue potential',
      controversy: 'Strategic military concerns',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      name: '💡 AI Energy Audit for Every Building',
      description: 'AI platform that audits energy usage in any building using smart meter data and computer vision. Identifies waste, suggests optimizations, predicts savings. Reduces energy bills by 30-50%.',
      problem: 'SOLVING: Buildings waste 40% of energy, ₹80,000Cr yearly loss',
      investment: '₹85,000 - ₹4,50,000',
      roi: '8-12 months',
      market: '₹45,000Cr+ Energy Management',
      impact: 'Save ₹40,000Cr energy, reduce 50M tonnes CO2',
      controversy: 'Utility company revenue concerns',
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
      email: 'fullstack@cehpoint.co.in'
    },
    {
      role: 'AI/ML Engineer',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      skills: ['Python', 'TensorFlow', 'NLP'],
      email: 'aiml@cehpoint.co.in'
    },
    {
      role: 'Business Development Executive',
      type: 'Full-time',
      experience: '1-2 years',
      location: 'Hybrid',
      skills: ['Sales', 'Communication', 'Client Management'],
      email: 'business@cehpoint.co.in'
    },
    {
      role: 'UI/UX Designer',
      type: 'Contract',
      experience: '2-3 years',
      location: 'Remote',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      email: 'design@cehpoint.co.in'
    },
    {
      role: 'DevOps Engineer',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      skills: ['Docker', 'Kubernetes', 'AWS/GCP'],
      email: 'devops@cehpoint.co.in'
    },
    {
      role: 'Frontend Developer Intern',
      type: 'Internship',
      experience: 'Fresher - 1 year',
      location: 'Remote',
      skills: ['HTML/CSS', 'JavaScript', 'React'],
      email: 'intern.frontend@cehpoint.co.in'
    },
    {
      role: 'Backend Developer Intern',
      type: 'Internship',
      experience: 'Fresher - 1 year',
      location: 'Remote',
      skills: ['Node.js/Python', 'Databases', 'APIs'],
      email: 'intern.backend@cehpoint.co.in'
    },
    {
      role: 'Digital Marketing Intern',
      type: 'Internship',
      experience: 'Fresher - 1 year',
      location: 'Remote',
      skills: ['SEO', 'Social Media', 'Content Writing'],
      email: 'intern.marketing@cehpoint.co.in'
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
          price: '₹15,000 - ₹1,50,000',
          howToUse: 'Perfect for businesses needing an online presence. We handle everything from design to deployment. You provide your business requirements, we build a fully functional web application that works seamlessly across all devices.',
          whyInvest: 'A professional web application increases credibility by 80% and can boost sales by up to 200%. With our affordable pricing starting at ₹15,000, the return on investment typically happens within 3-6 months through increased customer reach and automated processes.'
        },
        {
          name: 'Mobile App Development',
          summary: 'Native-quality applications for iOS and Android platforms',
          benefits: ['Cross-platform support', 'App store deployment ready', 'Offline capabilities'],
          price: '₹25,000 - ₹2,50,000',
          howToUse: 'Ideal for businesses wanting to reach customers on mobile. Share your app concept, we design and develop for both iOS and Android. Includes app store submission assistance.',
          whyInvest: 'Mobile apps drive 3x more engagement than websites. With 500M+ smartphone users in India, a mobile app can increase customer retention by 90%. Average ROI achieved within 6-9 months.'
        },
        {
          name: 'SaaS Product Development',
          summary: 'Complete software-as-a-service solutions with subscription management',
          benefits: ['Subscription billing integration', 'Multi-tenant architecture', 'Analytics dashboard'],
          price: '₹49,000 - ₹5,00,000',
          howToUse: 'Build your own SaaS business. We create the complete platform with user management, subscription billing, and analytics. You focus on acquiring customers.',
          whyInvest: 'SaaS businesses have recurring revenue and high valuations. A well-built SaaS product can scale to thousands of users. With our starting price of ₹49,000, you can launch your SaaS dream affordably.'
        },
        {
          name: 'Dashboard & Admin Panels',
          summary: 'Powerful control centers for business management and analytics',
          benefits: ['Real-time data visualization', 'User role management', 'Custom report generation'],
          price: '₹12,000 - ₹90,000',
          howToUse: 'Get real-time insights into your business. We build custom dashboards that consolidate all your data into one beautiful, easy-to-use interface.',
          whyInvest: 'Data-driven decisions increase profitability by 60%. A custom dashboard saves 15+ hours weekly in report generation and provides insights that help you make better business decisions instantly.'
        },
        {
          name: 'Business Websites',
          summary: 'Professional websites optimized for conversions and search engines',
          benefits: ['SEO optimized', 'Fast loading speeds', 'Mobile responsive'],
          price: '₹7,999 - ₹45,000',
          howToUse: 'Get your business online in days. We create professional websites that showcase your products/services and convert visitors into customers. Includes hosting setup.',
          whyInvest: 'First impressions matter - 75% of people judge a company by its website. Starting at just ₹7,999, this is the most affordable way to establish credibility and reach customers 24/7.'
        },
        {
          name: 'E-commerce Solutions',
          summary: 'Complete online store solutions with payment and inventory management',
          benefits: ['Payment gateway integration', 'Inventory management', 'Order tracking system'],
          price: '₹20,000 - ₹2,00,000',
          howToUse: 'Start selling online today. We build your complete e-commerce store with product catalog, shopping cart, payment integration, and order management.',
          whyInvest: 'E-commerce is growing 25% annually in India. Selling online increases your market reach by 1000x. Businesses see 40-70% revenue increase within first year of going online. Investment pays back in 4-8 months.'
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
          price: '₹9,999 - ₹75,000',
          howToUse: 'Launch your application on AWS with auto-scaling and load balancing. We handle complete setup, security configuration, and monitoring.',
          whyInvest: 'AWS powers companies like Netflix and Amazon. Get enterprise-grade infrastructure with 99.99% uptime. Scales automatically during traffic spikes. Pay 40% less vs traditional hosting.'
        },
        {
          name: 'GCP Deployment',
          summary: 'Google Cloud Platform deployment and infrastructure management',
          benefits: ['Machine learning ready', 'High performance computing', 'Cost optimization'],
          price: '₹8,999 - ₹70,000',
          howToUse: 'Deploy on Google Cloud with integrated analytics and ML capabilities. Ideal for data-heavy applications.',
          whyInvest: 'Benefit from Google global network used by YouTube and Gmail. Built-in AI/ML tools. Average 35% cost saving vs competitors.'
        },
        {
          name: 'Firebase Integration',
          summary: 'Real-time database and hosting solutions with authentication',
          benefits: ['Real-time data sync', 'Built-in authentication', 'Free tier available'],
          price: '₹6,999 - ₹75,000',
          howToUse: 'Perfect for real-time apps. We integrate Firebase for instant data sync, user authentication, and cloud storage.',
          whyInvest: 'Start free and scale as you grow. Real-time features that would cost ₹50,000+ to build custom are included. Saves 80+ development hours.'
        },
        {
          name: 'CI/CD Pipeline Setup',
          summary: 'Automated deployment pipelines for faster releases',
          benefits: ['Faster release cycles', 'Reduced deployment errors', 'Automated testing'],
          price: '₹7,999 - ₹35,000',
          howToUse: 'Automate your deployment process. Push code changes that automatically test and deploy to production.',
          whyInvest: 'Release updates 10x faster. Reduce deployment errors by 95%. Save 20+ hours monthly on manual deployments. ROI in first month.'
        },
        {
          name: 'Cloud Cost Optimization',
          summary: 'Reduce cloud costs while improving performance and security',
          benefits: ['Up to 40% cost savings', 'Performance improvements', 'Security hardening'],
          price: '₹5,999 - ₹30,000',
          howToUse: 'We analyze your cloud usage and optimize resources. Typical clients save 30-40% on monthly bills.',
          whyInvest: 'If you spend ₹20,000/month on cloud, save ₹8,000/month. Investment pays back in under 1 month, then pure savings every month.'
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
          price: '₹7,999 - ₹99,999',
          howToUse: 'Capture leads from website, social media, and ads automatically. System qualifies and nurtures them without manual work.',
          whyInvest: '80% of leads need 5+ follow-ups to convert. Automation never forgets. Clients see 3-5x increase in conversions. ROI within 2-3 months.'
        },
        {
          name: 'WhatsApp Business Automation',
          summary: 'Intelligent WhatsApp messaging and customer engagement systems',
          benefits: ['Instant automated responses', 'Order confirmations', 'Customer support automation'],
          price: '₹4,999 - ₹70,000',
          howToUse: 'Automate WhatsApp responses, order updates, and support. Customers get instant replies 24/7.',
          whyInvest: 'WhatsApp has 90% open rate vs 20% for email. Save 30+ hours/week on manual messaging. Handle 100x more customer conversations. Pays back in 1-2 months.'
        },
        {
          name: 'Business Process Automation',
          summary: 'Streamline repetitive tasks and optimize workflows',
          benefits: ['Save 10+ hours weekly', 'Reduce human errors by 90%', 'Boost team productivity'],
          price: '₹4,999 - ₹49,000',
          howToUse: 'Automate data entry, invoicing, report generation, and repetitive workflows. We identify and automate your time-consuming tasks.',
          whyInvest: 'Save 15-20 hours/week worth ₹30,000/month in labor costs. Eliminate 90% of human errors. Investment recovers in under 2 months.'
        },
        {
          name: 'Sales Follow-Up Automation',
          summary: 'Never miss a follow-up opportunity with automated sequences',
          benefits: ['Automated reminder system', 'Multi-channel sequences', 'SMS & email integration'],
          price: '₹5,999 - ₹55,000',
          howToUse: 'Set up automated follow-up sequences via email, SMS, and WhatsApp. System tracks responses and adjusts automatically.',
          whyInvest: 'Companies lose 70% of leads due to poor follow-up. Automation increases conversion by 50%. Generate 5-10 extra sales monthly.'
        },
        {
          name: 'Automated Reporting',
          summary: 'Daily, weekly, monthly reports generated and delivered automatically',
          benefits: ['Scheduled delivery', 'Custom templates', 'Data visualization'],
          price: '₹6,999 - ₹40,000',
          howToUse: 'Get automated reports delivered to your inbox. Sales, inventory, financials - all automatically generated and formatted.',
          whyInvest: 'Save 10-15 hours monthly on report creation. Make faster decisions with timely data. ROI in first 2 months.'
        },
        {
          name: 'CRM Workflow Automation',
          summary: 'Intelligent customer relationship management automation',
          benefits: ['Automated lead scoring', 'Pipeline automation', 'Task assignment'],
          price: '₹10,000 - ₹95,000',
          howToUse: 'Automate your entire sales process. Leads automatically scored, assigned, and followed up based on behavior.',
          whyInvest: 'Increase sales team productivity by 40%. Close 30% more deals. Better customer relationships. Average ROI in 3-4 months.'
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
          price: '₹9,999 - ₹80,000',
          howToUse: 'AI chatbot handles customer queries 24/7. Trained on your business data to provide accurate answers instantly.',
          whyInvest: 'Handle 80% of queries without human intervention. Save ₹40,000/month on support staff. Customers get instant responses. ROI in 2-3 months.'
        },
        {
          name: 'AI Support Agent',
          summary: 'Automated customer support with contextual understanding',
          benefits: ['Instant response times', 'Ticket management', 'Seamless human handoff'],
          price: '₹12,000 - ₹1,20,000',
          howToUse: 'Advanced AI handles complex support queries with context awareness. Escalates to humans only when needed.',
          whyInvest: 'Reduce support costs by 60%. Solve tickets 5x faster. 24/7 availability increases customer satisfaction by 85%. Pays back in 3-4 months.'
        },
        {
          name: 'AI Appointment Bot',
          summary: 'Intelligent booking and scheduling assistant',
          benefits: ['Calendar integration', 'Automated reminders', 'Rescheduling handling'],
          price: '₹9,999 - ₹75,000',
          howToUse: 'Let AI handle bookings, confirmations, and rescheduling. Syncs with your calendar and sends automated reminders.',
          whyInvest: 'Reduce no-shows by 70% with automated reminders. Save 15+ hours/week on scheduling. Increase bookings by 40%. ROI in 2 months.'
        },
        {
          name: 'AI Knowledge Base',
          summary: 'Instant answers from your documentation and content',
          benefits: ['Learns from documentation', 'Accurate contextual responses', 'Easy content updates'],
          price: '₹8,999 - ₹70,000',
          howToUse: 'Upload your documents, manuals, and FAQs. AI learns and provides instant accurate answers to employee/customer questions.',
          whyInvest: 'Find information in seconds vs hours. New employees get instant answers. Reduce training time by 50%. Better knowledge retention.'
        },
        {
          name: 'AI Sales Assistant',
          summary: 'Intelligent lead qualification and sales nurturing',
          benefits: ['24/7 lead qualification', 'Personalized engagement', 'Sales insights & analytics'],
          price: '₹15,000 - ₹1,50,000',
          howToUse: 'AI engages leads, qualifies them based on your criteria, and nurtures them until sales-ready. Provides insights on best leads.',
          whyInvest: 'Qualify 10x more leads without adding sales staff. 24/7 engagement means you never miss opportunities. Close 35% more deals. ROI in 3-5 months.'
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

      <div className="home-credentials-section">
        <div className="credential-badge iso-badge">
          <div className="credential-icon">🏆</div>
          <div className="credential-details">
            <div className="credential-title">ISO Certified</div>
            <div className="credential-number">ISO 9001:2015</div>
          </div>
        </div>
        <div className="credential-badge gst-badge">
          <div className="credential-icon">✓</div>
          <div className="credential-details">
            <div className="credential-title">GST Registered</div>
            <div className="credential-number">19ETGPB5153Q1Z5</div>
          </div>
        </div>
      </div>

      <div className="content-section why-choose-section">
        <h3 className="section-heading">Why Choose Cehpoint</h3>
        <p className="section-subheading">What sets us apart from the competition</p>
        <div className="why-choose-grid">
          <div className="why-card">
            <div className="why-number">01</div>
            <div className="why-title">Unmatched Expertise</div>
            <p className="why-desc">We master 18+ cutting-edge technologies including AI, Cloud, and Full-Stack Development. Our team delivers solutions others cannot.</p>
          </div>
          <div className="why-card">
            <div className="why-number">02</div>
            <div className="why-title">Premium Quality, Affordable Pricing</div>
            <p className="why-desc">Enterprise-grade solutions at startup-friendly prices. Starting from ₹4,999, we deliver exceptional value without compromising quality.</p>
          </div>
          <div className="why-card">
            <div className="why-number">03</div>
            <div className="why-title">Industry-Specific Solutions</div>
            <p className="why-desc">We serve 9+ industries with tailored solutions. From Healthcare to SaaS, we understand your unique challenges and deliver precisely what you need.</p>
          </div>
          <div className="why-card">
            <div className="why-number">04</div>
            <div className="why-title">Proven Track Record</div>
            <p className="why-desc">100+ successful projects delivered, 50+ happy clients, and growing. Our results speak for themselves.</p>
          </div>
          <div className="why-card">
            <div className="why-number">05</div>
            <div className="why-title">End-to-End Support</div>
            <p className="why-desc">From ideation to deployment and beyond. We provide complete lifecycle support including maintenance, scaling, and optimization.</p>
          </div>
          <div className="why-card">
            <div className="why-number">06</div>
            <div className="why-title">Modern Tech Stack</div>
            <p className="why-desc">We use the latest technologies - React, Next.js, Node.js, Python, AI/ML, AWS, GCP - ensuring your solution is future-proof and scalable.</p>
          </div>
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

      <div className="content-section strength-section">
        <h3 className="section-heading">Our Achievements</h3>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-title">5+ Years Experience</div>
            <p className="achievement-desc">Delivering cutting-edge solutions since 2019</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <div className="achievement-title">100+ Projects</div>
            <p className="achievement-desc">Successfully delivered across industries</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">👥</div>
            <div className="achievement-title">50+ Happy Clients</div>
            <p className="achievement-desc">Building long-term partnerships</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🚀</div>
            <div className="achievement-title">99% Success Rate</div>
            <p className="achievement-desc">Projects delivered on time, on budget</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3 className="section-heading">Technology Stack</h3>
        <p className="section-subheading">18+ Modern Technologies We Master</p>
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

      <div className="content-section industries-served-section">
        <h3 className="section-heading">Industries We Serve</h3>
        <p className="section-subheading">Specialized solutions for 9+ sectors</p>
        <div className="industries-served-grid">
          {industries.map((industry, idx) => (
            <div 
              key={idx} 
              className="industry-badge"
              onClick={() => {
                setSelectedIndustry(industry.name)
                setActiveScreen('industries')
              }}
              style={{ background: industry.gradient }}
            >
              {industry.name}
            </div>
          ))}
        </div>
      </div>

      <div className="content-section key-differentiators-section">
        <h3 className="section-heading">Why We're Different</h3>
        <div className="differentiators-list">
          <div className="differentiator-item">
            <div className="diff-icon">💡</div>
            <div className="diff-content">
              <div className="diff-title">Innovation First</div>
              <p className="diff-desc">We use the latest technologies and best practices, ensuring your solution is future-proof</p>
            </div>
          </div>
          <div className="differentiator-item">
            <div className="diff-icon">💰</div>
            <div className="diff-content">
              <div className="diff-title">Transparent Pricing</div>
              <p className="diff-desc">No hidden costs. Clear pricing from ₹4,999 onwards with detailed breakdowns</p>
            </div>
          </div>
          <div className="differentiator-item">
            <div className="diff-icon">⚡</div>
            <div className="diff-content">
              <div className="diff-title">Fast Delivery</div>
              <p className="diff-desc">Agile methodology means faster time-to-market without compromising quality</p>
            </div>
          </div>
          <div className="differentiator-item">
            <div className="diff-icon">🔒</div>
            <div className="diff-content">
              <div className="diff-title">Enterprise Security</div>
              <p className="diff-desc">Bank-level security standards for all projects, regardless of size</p>
            </div>
          </div>
          <div className="differentiator-item">
            <div className="diff-icon">🤝</div>
            <div className="diff-content">
              <div className="diff-title">Ongoing Support</div>
              <p className="diff-desc">We don't disappear after delivery. Continuous support and maintenance included</p>
            </div>
          </div>
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

  const ServicesScreen = () => {
    if (selectedService) {
      return (
        <div className="screen service-full-detail-screen">
          <button className="back-btn" onClick={() => setSelectedService(null)}>
            <span className="back-arrow">←</span>
            <span>Back to Services</span>
          </button>
          <div className="service-full-header" style={{ background: services[selectedCategory].gradient }}>
            <h1 className="service-full-title">{selectedService.name}</h1>
            <p className="service-full-price">{selectedService.price}</p>
          </div>
          <div className="service-full-content">
            <div className="service-full-section">
              <h3 className="service-section-title">Overview</h3>
              <p className="service-section-text">{selectedService.summary}</p>
            </div>

            <div className="service-full-section">
              <h3 className="service-section-title">How to Use This Service</h3>
              <p className="service-section-text service-how-to-use">{selectedService.howToUse}</p>
            </div>

            <div className="service-full-section">
              <h3 className="service-section-title">Why This is a Smart Investment</h3>
              <p className="service-section-text service-why-invest">{selectedService.whyInvest}</p>
            </div>

            <div className="service-full-section">
              <h3 className="service-section-title">Key Benefits</h3>
              <div className="service-benefits-detailed">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="benefit-detail-item">
                    <span className="benefit-check">✓</span>
                    <span className="benefit-detail-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-cta-section">
              <button className="primary-button" onClick={() => handleWhatsApp(selectedService.name)}>
                Get Started - WhatsApp
              </button>
              <button className="secondary-button" onClick={handlePhoneCall}>
                Call {corporateIVR.replace('+91', '+91 ')} (24/7)
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
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
                  <div 
                    key={idx} 
                    className="service-detail-card clickable-service"
                    onClick={() => setSelectedService(service)}
                  >
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
                    <div className="service-learn-more">Tap for Details →</div>
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
  }

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
              <p className="industry-detail-subtitle">{industries.find(i => i.name === selectedIndustry).description}</p>
            </div>
            <div className="solutions-detailed-grid">
              {industries.find(i => i.name === selectedIndustry).solutions.map((solution, idx) => (
                <div key={idx} className="solution-detailed-card">
                  <h3 className="solution-name">{solution.name}</h3>
                  <p className="solution-description">{solution.desc}</p>
                  <div className="solution-usecase">
                    <div className="usecase-label">Use Case:</div>
                    <p className="usecase-text">{solution.useCase}</p>
                  </div>
                  <div className="solution-pricing">
                    <div className="pricing-label">Investment Range:</div>
                    <div className="pricing-value">{solution.price}</div>
                  </div>
                  <button 
                    className="solution-cta-btn"
                    onClick={() => setActiveScreen('contact')}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
            <div className="industry-contact-cta">
              <h3>Ready to Transform Your {selectedIndustry} Business?</h3>
              <p>Contact us to discuss your specific requirements and get a customized solution</p>
              <button className="primary-button" onClick={() => setActiveScreen('contact')}>
                Get in Touch
              </button>
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

  const InvestorScreen = () => {
    const currentIdea = investorIdeas[currentInvestorIndex]

    const handleSwipeLeft = () => {
      setCurrentInvestorIndex((prev) => (prev === 0 ? investorIdeas.length - 1 : prev - 1))
    }

    const handleSwipeRight = () => {
      setCurrentInvestorIndex((prev) => (prev === investorIdeas.length - 1 ? 0 : prev + 1))
    }

    return (
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
          <h3 className="section-heading">Swipe to Explore Ideas</h3>
          <p className="swipe-instruction">Swipe left or right to see different opportunities</p>
          
          <div className="swipe-container">
            <div className="opportunity-swipe-card" style={{ background: currentIdea.gradient }}>
              <h3 className="opportunity-title">{currentIdea.name}</h3>
              <p className="opportunity-description">{currentIdea.description}</p>
              
              <div className="problem-highlight">
                <div className="problem-badge">PROBLEM</div>
                <p className="problem-text">{currentIdea.problem}</p>
              </div>

              <div className="opportunity-metrics">
                <div className="metric-item">
                  <div className="metric-label">Investment Range</div>
                  <div className="metric-value">{currentIdea.investment}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">ROI Timeline</div>
                  <div className="metric-value">{currentIdea.roi}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Market Opportunity</div>
                  <div className="metric-value">{currentIdea.market}</div>
                </div>
              </div>

              <div className="impact-section">
                <div className="impact-badge">POTENTIAL IMPACT</div>
                <p className="impact-text">{currentIdea.impact}</p>
              </div>

              <div className="controversy-section">
                <div className="controversy-badge">⚠️ NOTE</div>
                <p className="controversy-text">{currentIdea.controversy}</p>
              </div>

              <div className="swipe-indicator">
                <span className="swipe-count">{currentInvestorIndex + 1} / {investorIdeas.length}</span>
              </div>
            </div>

            <div className="swipe-controls">
              <button className="swipe-button swipe-left" onClick={handleSwipeLeft}>
                <span className="swipe-arrow">←</span>
                <span className="swipe-label">Previous</span>
              </button>
              <button className="swipe-button swipe-right" onClick={handleSwipeRight}>
                <span className="swipe-label">Next</span>
                <span className="swipe-arrow">→</span>
              </button>
            </div>
          </div>

          <div className="investor-cta">
            <button className="primary-button" onClick={() => handleWhatsApp(currentIdea.name)}>
              I'm Interested
            </button>
            <button className="secondary-button" onClick={handlePhoneCall}>
              Call {corporateIVR.replace('+91', '+91 ')} (24/7)
            </button>
          </div>
        </div>
      </div>
    )
  }

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
              <button 
                className="apply-now-btn"
                onClick={async () => {
                  const subject = encodeURIComponent(`Application for ${job.role}`)
                  const body = encodeURIComponent(`Hello Cehpoint Team,\n\nI am interested in applying for the ${job.role} position.\n\nRole: ${job.role}\nType: ${job.type}\nLocation: ${job.location}\nExperience: ${job.experience}\n\nPlease find my resume attached.\n\nBest regards`)
                  const url = `mailto:${job.email}?subject=${subject}&body=${body}`
                  
                  try {
                    await Browser.open({ url })
                  } catch (error) {
                    window.location.href = url
                  }
                }}
              >
                Apply Now
              </button>
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
        <div className="corporate-ivr-banner">
          <div className="ivr-badge">24/7 Support</div>
          <h3 className="ivr-heading">Corporate IVR Line</h3>
          <div className="ivr-number">{corporateIVR.replace('+91', '+91 ')}</div>
          <p className="ivr-description">Call anytime for instant assistance</p>
          <button className="ivr-call-button" onClick={handlePhoneCall}>
            Call Now
          </button>
        </div>

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

        <div className="credentials-section">
          <h3 className="section-heading">Company Credentials</h3>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-label">GST Number</div>
              <div className="credential-value">19ETGPB5153Q1Z5</div>
            </div>
            <div className="credential-item">
              <div className="credential-label">ISO Certified</div>
              <div className="credential-value">ISO 9001:2015</div>
            </div>
          </div>
        </div>

        <div className="portals-section">
          <h3 className="section-heading">Our Portals</h3>
          <div className="portals-grid">
            <div className="portal-card" onClick={async () => {
              try {
                await Browser.open({ url: 'https://cehpoint.co.in/' })
              } catch (error) {
                window.open('https://cehpoint.co.in/', '_blank')
              }
            }}>
              <div className="portal-icon">🌐</div>
              <div className="portal-name">Official Website</div>
              <div className="portal-url">cehpoint.co.in</div>
            </div>
            <div className="portal-card" onClick={async () => {
              try {
                await Browser.open({ url: 'https://elearning.cehpoint.co.in/' })
              } catch (error) {
                window.open('https://elearning.cehpoint.co.in/', '_blank')
              }
            }}>
              <div className="portal-icon">📚</div>
              <div className="portal-name">E-Learning Platform</div>
              <div className="portal-url">elearning.cehpoint.co.in</div>
            </div>
            <div className="portal-card" onClick={async () => {
              try {
                await Browser.open({ url: 'https://services.cehpoint.co.in/' })
              } catch (error) {
                window.open('https://services.cehpoint.co.in/', '_blank')
              }
            }}>
              <div className="portal-icon">⚙️</div>
              <div className="portal-name">Services Portal</div>
              <div className="portal-url">services.cehpoint.co.in</div>
            </div>
            <div className="portal-card" onClick={async () => {
              try {
                await Browser.open({ url: 'https://projects.cehpoint.co.in/' })
              } catch (error) {
                window.open('https://projects.cehpoint.co.in/', '_blank')
              }
            }}>
              <div className="portal-icon">📊</div>
              <div className="portal-name">Projects Portal</div>
              <div className="portal-url">projects.cehpoint.co.in</div>
            </div>
          </div>
        </div>

        <div className="global-presence-section">
          <h3 className="section-heading">Our Global Presence</h3>
          <div className="offices-list">
            <div className="office-card">
              <div className="office-flag">🇺🇸</div>
              <div className="office-country">United States</div>
              <div className="office-address">5 Penn Plaza, 14th Floor, New York, NY 10001, US</div>
            </div>
            <div className="office-card">
              <div className="office-flag">🇬🇧</div>
              <div className="office-country">United Kingdom</div>
              <div className="office-address">12 Steward Street, The Steward Building, London, E1 6FQ, Great Britain</div>
            </div>
            <div className="office-card">
              <div className="office-flag">🇩🇪</div>
              <div className="office-country">Germany</div>
              <div className="office-address">Banking Circle S.A. - German Branch, Maximilianstraße 54, 80538 München</div>
            </div>
            <div className="office-card">
              <div className="office-flag">🇦🇺</div>
              <div className="office-country">Australia</div>
              <div className="office-address">Level 11/10 Carrington St, Sydney NSW 2000, Australia</div>
            </div>
            <div className="office-card">
              <div className="office-flag">🇨🇦</div>
              <div className="office-country">Canada</div>
              <div className="office-address">736 Meridian Road N.E, Calgary, Alberta, CA</div>
            </div>
            <div className="office-card">
              <div className="office-flag">🇮🇳</div>
              <div className="office-country">India (Headquarters)</div>
              <div className="office-address">Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur, West Bengal - 731303, India</div>
            </div>
          </div>
        </div>

        <div className="banking-section">
          <h3 className="section-heading">International Payment Details</h3>
          <p className="banking-subtitle">Bank Transfer Details (ACH / Fedwire / SWIFT)</p>
          <div className="banking-details">
            <div className="banking-row">
              <span className="banking-label">Bank Name:</span>
              <span className="banking-value">JPMorgan Chase & Co.</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">Account Number:</span>
              <span className="banking-value">20000045876362</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">Account Type:</span>
              <span className="banking-value">Business Checking</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">Beneficiary Name:</span>
              <span className="banking-value">CEHPOINT</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">Beneficiary Address:</span>
              <span className="banking-value">383 Madison Ave, New York, NY 10179, USA</span>
            </div>
            <div className="banking-divider"></div>
            <div className="banking-row">
              <span className="banking-label">ACH Routing Number:</span>
              <span className="banking-value">028000024</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">Fedwire Routing:</span>
              <span className="banking-value">021000021</span>
            </div>
            <div className="banking-row">
              <span className="banking-label">SWIFT/BIC Code:</span>
              <span className="banking-value">CHASUS33XXX</span>
            </div>
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

  const PaymentScreen = () => (
    <div className="screen payment-screen">
      <div className="page-header">
        <h1 className="page-title">Payment Information</h1>
        <p className="page-description">Secure payment options for your projects</p>
      </div>

      <div className="screen-content">
        <div className="payment-methods-section">
          <h3 className="section-heading">Accepted Payment Methods</h3>
          <div className="payment-methods-grid">
            <div className="payment-method-card">
              <div className="payment-icon">🏦</div>
              <div className="payment-name">Bank Transfer</div>
              <p className="payment-desc">Direct bank transfer (NEFT/RTGS/IMPS)</p>
            </div>
            <div className="payment-method-card">
              <div className="payment-icon">💳</div>
              <div className="payment-name">UPI</div>
              <p className="payment-desc">Instant payment via UPI</p>
            </div>
            <div className="payment-method-card">
              <div className="payment-icon">📱</div>
              <div className="payment-name">Digital Wallets</div>
              <p className="payment-desc">Paytm, PhonePe, Google Pay</p>
            </div>
            <div className="payment-method-card">
              <div className="payment-icon">💵</div>
              <div className="payment-name">Cheque</div>
              <p className="payment-desc">Business cheques accepted</p>
            </div>
          </div>
        </div>

        <div className="bank-details-section">
          <h3 className="section-heading">Bank Account Details</h3>
          <div className="bank-info-card">
            <div className="bank-header">
              <div className="bank-logo">🏦</div>
              <div className="bank-primary">
                <div className="bank-name-primary">HDFC Bank</div>
                <div className="account-type">Current Account</div>
              </div>
            </div>
            <div className="bank-details-grid">
              <div className="bank-detail-row">
                <span className="detail-label">Account Name:</span>
                <span className="detail-value">Cehpoint E-Learning Pvt Ltd</span>
              </div>
              <div className="bank-detail-row">
                <span className="detail-label">Account Number:</span>
                <span className="detail-value">50200012345678</span>
              </div>
              <div className="bank-detail-row">
                <span className="detail-label">IFSC Code:</span>
                <span className="detail-value">HDFC0000123</span>
              </div>
              <div className="bank-detail-row">
                <span className="detail-label">Branch:</span>
                <span className="detail-value">Kolkata Main Branch</span>
              </div>
              <div className="bank-detail-row">
                <span className="detail-label">SWIFT Code:</span>
                <span className="detail-value">HDFCINBBXXX</span>
              </div>
            </div>
          </div>

          <div className="upi-section">
            <h4 className="upi-heading">UPI Payment</h4>
            <div className="upi-id-card">
              <div className="upi-label">UPI ID:</div>
              <div className="upi-value">cehpoint@hdfc</div>
              <button className="copy-upi-button" onClick={() => {
                navigator.clipboard.writeText('cehpoint@hdfc')
                alert('UPI ID copied!')
              }}>
                Copy UPI ID
              </button>
            </div>
          </div>
        </div>

        <div className="payment-notes-section">
          <h3 className="section-heading">Important Notes</h3>
          <div className="payment-notes-list">
            <div className="payment-note">
              <div className="note-icon">✅</div>
              <p className="note-text">Share payment proof via WhatsApp (+91 90911 56095) or email (sales@cehpoint.co.in) after transfer</p>
            </div>
            <div className="payment-note">
              <div className="note-icon">📧</div>
              <p className="note-text">GST invoice will be provided within 24 hours of payment confirmation</p>
            </div>
            <div className="payment-note">
              <div className="note-icon">🔒</div>
              <p className="note-text">All transactions are secure and encrypted. We never store payment card details</p>
            </div>
            <div className="payment-note">
              <div className="note-icon">💰</div>
              <p className="note-text">50% advance payment required to start project. Balance due before final delivery</p>
            </div>
            <div className="payment-note">
              <div className="note-icon">⏰</div>
              <p className="note-text">Refund policy: Full refund within 7 days if project not started</p>
            </div>
          </div>
        </div>

        <div className="payment-contact-section">
          <h3 className="payment-cta-heading">Need Payment Assistance?</h3>
          <p className="payment-cta-description">Contact us for payment queries or custom payment plans</p>
          <div className="payment-cta-buttons">
            <button className="primary-button" onClick={() => handleWhatsApp('Payment Assistance')}>
              WhatsApp Support
            </button>
            <button className="secondary-button" onClick={handlePhoneCall}>
              Call {corporateIVR.replace('+91', '+91 ')}
            </button>
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
        {activeScreen === 'payment' && <PaymentScreen />}
        {activeScreen === 'techDetail' && <TechDetailScreen />}
      </div>

      <nav className="bottom-navigation" role="navigation" aria-label="Main navigation">
        <button 
          className={`nav-button ${activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => setActiveScreen('home')}
          aria-label="Navigate to Home page"
          aria-current={activeScreen === 'home' ? 'page' : undefined}
        >
          <span className="nav-label">Home</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'services' ? 'active' : ''}`}
          onClick={() => setActiveScreen('services')}
          aria-label="Navigate to Services page"
          aria-current={activeScreen === 'services' ? 'page' : undefined}
        >
          <span className="nav-label">Services</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'industries' ? 'active' : ''}`}
          onClick={() => setActiveScreen('industries')}
          aria-label="Navigate to Industries page"
          aria-current={activeScreen === 'industries' ? 'page' : undefined}
        >
          <span className="nav-label">Industries</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'investor' ? 'active' : ''}`}
          onClick={() => setActiveScreen('investor')}
          aria-label="Navigate to Investment opportunities page"
          aria-current={activeScreen === 'investor' ? 'page' : undefined}
        >
          <span className="nav-label">Invest</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveScreen('careers')}
          aria-label="Navigate to Careers page"
          aria-current={activeScreen === 'careers' ? 'page' : undefined}
        >
          <span className="nav-label">Careers</span>
        </button>
        <button 
          className={`nav-button ${activeScreen === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveScreen('contact')}
          aria-label="Navigate to Contact page"
          aria-current={activeScreen === 'contact' ? 'page' : undefined}
        >
          <span className="nav-label">Contact</span>
        </button>
      </nav>
    </div>
  )
}

export default App
