# 🏥 JIVIKA Healthcare Platform - Frontend

A modern, responsive healthcare platform built with Next.js, providing seamless doctor-patient connections and comprehensive medical services.

![JIVIKA Healthcare Platform](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### 🔍 **Doctor Discovery**
- Browse doctors by specialty (Cardiologist, Dermatologist, Gynecologist, etc.)
- Advanced search and filtering capabilities
- Real-time availability status
- Location-based doctor search

### 👥 **User Management**
- Patient registration and authentication
- Doctor registration and profile management
- Secure login system with form validation
- Role-based access control

### 💬 **Consultation Services**
- Video consultation booking
- In-person appointment scheduling
- Real-time availability checking
- Consultation history tracking

### 🏢 **Corporate Solutions**
- Business healthcare packages
- Corporate wellness programs
- Bulk appointment management
- Enterprise pricing tiers

### 🛡️ **Security & Support**
- Comprehensive help center
- FAQ section with searchable content
- Security guidelines and best practices
- 24/7 support contact options

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekgupta028/JIVIKA-frontend.git
   cd JIVIKA-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
JIVIKA-frontend/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.jsx               # Root layout component
│   ├── page.jsx                 # Homepage
│   ├── loading.jsx              # Global loading component
│   ├── corporate/               # Corporate solutions
│   ├── dashboard/               # User dashboard
│   ├── doctor-register/         # Doctor registration
│   ├── find-doctors/           # Doctor search & filtering
│   ├── login/                  # Authentication
│   ├── register/               # User registration
│   ├── security-help/          # Help center
│   ├── surgeries/              # Surgery services
│   ├── terms/                  # Terms & conditions
│   └── video-consult/          # Video consultation
├── components/                  # Reusable components
│   ├── auth/                   # Authentication components
│   ├── layout/                 # Layout components
│   └── ui/                     # UI component library
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets
└── styles/                     # Additional styles
```

## 🎨 Tech Stack

### **Frontend Framework**
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Custom UI Components** - Built with Tailwind & Radix

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
npm update           # Update dependencies
```

## 🌐 Key Pages & Features

### **Homepage (`/`)**
- Hero section with call-to-action
- Featured medical specialties
- Doctor discovery cards
- Service highlights

### **Find Doctors (`/find-doctors`)**
- Specialty-based filtering
- Location search
- Doctor profiles with ratings
- Booking functionality

### **Authentication**
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - Patient registration
- **Doctor Register** (`/doctor-register`) - Healthcare provider signup

### **Services**
- **Video Consult** (`/video-consult`) - Online consultations
- **Surgeries** (`/surgeries`) - Surgical procedures
- **Corporate** (`/corporate`) - Business healthcare solutions

### **Support**
- **Security & Help** (`/security-help`) - FAQ and support
- **Terms** (`/terms`) - Terms and conditions

## 🎯 Performance Optimizations

- **Next.js App Router** for optimized routing
- **Server-side rendering** for better SEO
- **Image optimization** with Next.js Image component
- **Code splitting** for faster load times
- **Responsive design** for all device types

## 🔐 Security Features

- **Form validation** with proper sanitization
- **Secure authentication** flow
- **Protected routes** for authenticated users
- **HTTPS ready** for production deployment

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms**
- **Netlify** - Connect GitHub repository
- **AWS Amplify** - Configure build settings
- **Railway** - One-click deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Developer:** [Abhishek Gupta](https://github.com/abhishekgupta028)
- Email: abhishekgupta6205691283@gmail.com
- GitHub: [@abhishekgupta028](https://github.com/abhishekgupta028)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible components
- **Vercel** for hosting and deployment
- **Open source community** for inspiration

## 📞 Support

For support, email abhishekgupta6205691283@gmail.com or create an issue in this repository.

---

<div align="center">
  <p>Built with ❤️ for better healthcare accessibility</p>
  <p>© 2025 JIVIKA Healthcare Platform. All rights reserved.</p>
</div>