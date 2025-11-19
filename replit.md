# Cehpoint App

## Overview
Cehpoint is a premium Progressive Web App (PWA) showcasing IT services, automation solutions, AI tools, business ideas, and career opportunities. Built with React and Vite, featuring a royal, luxurious design with Capacitor integration for mobile app packaging.

**Purpose**: Marketing platform for Cehpoint's technology services with investor-friendly opportunities
**Status**: Premium redesign completed - November 19, 2025
**Last Updated**: November 19, 2025

## Technology Stack

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **UI**: Premium custom CSS with royal purple & gold theme, smooth animations
- **Mobile**: Capacitor 7.4.4 for native app packaging

### Key Features
- Progressive Web App (PWA) with service worker
- Premium royal design with gold accents and purple gradients
- Responsive mobile-first design (max-width: 480px)
- 5 main screens: Home, Services, Industries, Investor, Careers
- Technology stack showcase with 18+ technologies
- Industry-specific solutions for 9 sectors
- Investor-friendly business opportunity cards
- Career openings section
- Native integrations via Capacitor Browser plugin
- Smooth transitions and animations throughout

## Project Structure

```
├── src/
│   ├── App.jsx           # Main application with 5 screens
│   ├── App.css           # Premium royal design system
│   ├── App.css.old       # Backup of previous design
│   ├── main.jsx          # React entry point
│   └── assets/           # Static assets
├── public/
│   ├── sw.js             # Service worker for PWA
│   ├── manifest.json     # PWA manifest
│   └── vite.svg          # Favicon
├── android/              # Capacitor Android project
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration (configured for Replit)
└── package.json          # Dependencies and scripts
```

## Application Screens

### 1. Home Screen
- Royal header with crown icon and gold title
- Welcome banner with mission statement
- Quick stats (100+ Projects, 50+ Clients, 18+ Technologies)
- Service highlights (AI Automation, App Development, Cloud Solutions)
- Technology stack grid (React, Next.js, Node.js, Python, AWS, GCP, etc.)
- Premium CTA buttons

### 2. Services Screen
- 4 service categories with gradient cards:
  - App Development (6 services)
  - Cloud & Deployment (5 services)
  - Automation Services (6 services)
  - AI Tools & Chatbots (5 services)
- Real pricing displayed for each service
- WhatsApp and Email quick contact buttons

### 3. Industries Screen
- 9 industry sectors with custom gradient cards:
  - Retail, Hospitality, Healthcare, Education
  - Real Estate, SaaS, Finance, MSMEs, Enterprise
- Industry-specific solution lists
- Premium card design with depth and shadows

### 4. Investor Screen
- Investor promise cards (We Build, 100% Equity, Full Support)
- 6 investment opportunity cards:
  - AI-Powered Real Estate Platform
  - Smart Restaurant POS System
  - Healthcare Appointment Platform
  - EdTech Learning Platform
  - Multi-Vendor Marketplace
  - WhatsApp Commerce Bot
- Investment range, ROI timeline, and market details
- Premium gradient backgrounds per opportunity

### 5. Careers Screen
- Company perks section (Remote Work, Growth, Pay, Projects)
- 4 open positions:
  - Full Stack Developer
  - AI/ML Engineer
  - Business Development Executive
  - UI/UX Designer
- Skills tags and apply buttons

## Design System

### Color Palette
- **Primary**: Royal purple (#8A2BE2, #4B0082)
- **Secondary**: Gold accents (#DAA520, #FFD700)
- **Background**: Dark gradients (#1a0f2e, #0f0a1e, #0a0514)
- **Text**: White (#fff), Light purple (#B8A9D9)

### Typography
- **Headers**: Bold 700, gradient gold text
- **Body**: Regular 400-600, light purple
- **Buttons**: Bold 700, white text

### Animations
- Screen fade-in transitions
- Button press effects with ripple
- Card hover/active states
- Floating crown icon
- Pulsing elements
- Shimmer effects

### Shadows & Depth
- Premium box shadows with purple glow
- Layered gradients for depth
- Border highlights with transparency
- Drop shadows on icons and text

## Development Configuration

### Vite Server Settings
- **Host**: 0.0.0.0 (required for Replit)
- **Port**: 5000 (frontend)
- **Allowed Hosts**: Enabled (for Replit proxy)

### Workflow
- **Dev Server**: `npm run dev` - Runs on port 5000 with webview output

## Available Scripts

- `npm run dev` - Start development server (0.0.0.0:5000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Mobile App Packaging

This project includes Capacitor for building native Android apps. See:
- `APK_BUILD_INSTRUCTIONS.md` - Methods for building APKs
- `GITHUB_BUILD_SETUP.md` - GitHub Actions automation setup
- `android/` - Native Android project files

## Recent Changes
- **Nov 19, 2025**: Professional application improvements & premium preloader
  - **Premium Preloader**: Elegant 2.8-second intro with golden logo, tagline, and smooth loading animation
  - **Professional App Bar**: Fixed top header with logo and tagline for consistent branding
  - **Technology Detail Pages**: Comprehensive information for all 18 technologies with:
    * What the technology is
    * Why businesses choose it
    * Key advantages
    * Ideal use cases
    * Companies built with it
    * Market relevance
    * Pricing ranges
    * Subtle CTA to Contact page
  - **Design Excellence**:
    * Removed all emojis - replaced with professional design elements
    * Removed contact spam - contact info ONLY on Contact page
    * Added professional section dividers with subtle animations
    * Reduced gradient overload - cleaner backgrounds with strategic gradient use
    * Improved button states (hover, active, focus) for better feedback
    * Enhanced card interactions with proper elevation and transitions
    * Added professional visual hierarchy with layered surfaces
    * Improved spacing consistency throughout the application
    * Created real-world application feel with polished interactions
  - **User Experience**:
    * Smooth fade transitions between screens
    * Professional loading states and micro-interactions
    * Accessible focus states for keyboard navigation
    * Responsive touch feedback on all interactive elements

- **Nov 19, 2025**: Complete premium redesign with royal theme
  - Redesigned home screen with crown icon, gold title, stats
  - Added comprehensive technology stack section (18+ technologies)
  - Created industry-based solutions for 9 sectors
  - Built investor-friendly business opportunities section
  - Added career openings section with 4 positions
  - Implemented premium design system (royal purple, gold accents)
  - Added smooth animations and transitions throughout
  - Enhanced buttons, cards, and UI elements with luxury finish
  - Ensured consistent spacing and mobile app feel
  - Added 5-tab bottom navigation (Home, Services, Industries, Invest, Careers)

- **Nov 19, 2025**: Initial import and Replit configuration
  - Installed dependencies (259 packages)
  - Verified Vite configuration
  - Set up Dev Server workflow
  - Created project documentation

## Architecture Notes

The app follows a premium mobile-first design with state-based screen routing. Each screen is conditionally rendered based on the `activeScreen` state. The design uses:

- **Royal color scheme**: Purple gradients with gold accents
- **Premium animations**: Smooth transitions, floating elements, ripple effects
- **Depth & layers**: Multiple gradient layers, shadows, transparency
- **Mobile app feel**: Native-like interactions, touch feedback, proper spacing
- **Handcrafted quality**: Custom animations, thoughtful hover states, consistent design language

The application is designed to appeal to:
- Indian startups and business owners (clear pricing, accessible solutions)
- Investors (dedicated opportunities section with ROI details)
- Job seekers (careers section with perks and positions)
- Decision makers (technology stack showcase, industry solutions)

## User Preferences
- None specified yet

## Contact Information
- WhatsApp: +91 90911 56095
- Email: sales@cehpoint.co.in
