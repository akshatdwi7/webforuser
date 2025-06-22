import React, { useState } from "react";
import {
  Menu,
  X,
  TrendingUp,
  Shield,
  Smartphone,
  BarChart3,
  Bell,
  Users,
  Star,
  Download,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Brain,
  Clock,
  Globe,
  Award,
  Briefcase,
  PieChart,
  Activity,
  DollarSign,
  LineChart,
  TrendingDown,
  AlertTriangle,
  Layers,
  Database,
  Lock,
  Wifi,
  Monitor,
  Tablet,
} from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Analysis tools",
      description:
        "Advanced machine learning algorithms analyze thousands of data points to provide personalized stock recommendations and market insights.",
      screenshot:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-600" />,
      title: "Smart Alerts",
      description:
        "Get instant notifications about price movements, earnings announcements, and market opportunities that match your investment strategy.",
      screenshot:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Real-Time Data",
      description:
        "Access live market data, advanced charts, and technical indicators from global exchanges with millisecond precision.",
      screenshot:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment tools and portfolio optimization features to protect and grow your investments safely.",
      screenshot:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Precision Trading",
      description:
        "Execute trades with pinpoint accuracy using our advanced order management system and market timing algorithms.",
      screenshot:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description:
        "Ultra-low latency data processing ensures you never miss a trading opportunity in volatile market conditions.",
      screenshot:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Day Trader",
      company: "Independent",
      content:
        "Screeno's AI recommendations have improved my trading success rate by 40%. The alerts are incredibly accurate and timely.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Analyst",
      company: "Goldman Sachs",
      content:
        "As a professional analyst, I'm impressed by the depth of analysis Screeno provides. It's become an essential tool in my workflow.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Emily Johnson",
      role: "Portfolio Manager",
      company: "Vanguard",
      content:
        "The risk management features are outstanding. Screeno helps me balance portfolios more effectively than any other tool I've used.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "David Kim",
      role: "Hedge Fund Manager",
      company: "Bridgewater",
      content:
        "The predictive analytics are game-changing. We've seen a 35% improvement in our alpha generation since implementing Screeno.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  const stats = [
    {
      number: "50K+",
      label: "Active Users",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      number: "89%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    },
    {
      number: "24/7",
      label: "Market Coverage",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
    },
    {
      number: "4.9★",
      label: "App Store Rating",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
  ];

  const useCases = [
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Professional Traders",
      description:
        "Advanced tools for institutional and professional traders who need sophisticated analysis and rapid execution capabilities.",
      features: [
        "Real-time market data",
        "Advanced charting",
        "Risk analytics",
        "Portfolio optimization",
      ],
    },
    {
      icon: <PieChart className="w-12 h-12 text-green-600" />,
      title: "Portfolio Managers",
      description:
        "Comprehensive portfolio management tools for financial advisors and fund managers handling multiple client accounts.",
      features: [
        "Multi-portfolio tracking",
        "Client reporting",
        "Compliance monitoring",
        "Performance analytics",
      ],
    },
    {
      icon: <Activity className="w-12 h-12 text-purple-600" />,
      title: "Individual Investors",
      description:
        "User-friendly interface and educational resources perfect for retail investors looking to grow their wealth.",
      features: [
        "Beginner tutorials",
        "Investment recommendations",
        "Goal tracking",
        "Educational content",
      ],
    },
  ];

  const integrations = [
    {
      name: "Bloomberg Terminal",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Interactive Brokers",
      logo: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "TD Ameritrade",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "E*TRADE",
      logo: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Charles Schwab",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Fidelity",
      logo: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for beginners getting started with stock analysis",
      features: [
        "Basic stock screening",
        "5 watchlists",
        "Email alerts",
        "Mobile app access",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced tools for serious traders and investors",
      features: [
        "Advanced AI analysis",
        "Unlimited watchlists",
        "Real-time alerts",
        "Portfolio optimization",
        "Priority support",
        "Advanced charting",
        "Risk management tools",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for institutions and fund managers",
      features: [
        "Custom AI models",
        "API access",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced compliance",
        "Multi-user management",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const appScreenshots = [
    {
      title: "Dashboard Overview",
      description:
        "Get a complete view of your portfolio performance and market insights at a glance.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      title: "Advanced Charts",
      description:
        "Professional-grade charting with 50+ technical indicators and drawing tools.",
      image:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      title: "AI Recommendations",
      description:
        "Personalized stock picks powered by machine learning algorithms.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      title: "Smart Alerts",
      description:
        "Never miss important market movements with intelligent notifications.",
      image:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
    {
      title: "Portfolio Analytics",
      description:
        "Deep insights into your portfolio performance and risk metrics.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
    },
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Screeno</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#screenshots"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Screenshots
              </a>
              <a
                href="#use-cases"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Reviews
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 font-medium">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#screenshots"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Screenshots
                </a>
                <a
                  href="#use-cases"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Use Cases
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Reviews
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Pricing
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 w-full font-medium">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Stock Analysis</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Smart Trading
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}
                  Decisions
                </span>
                <br />
                Made Simple
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your investment strategy with AI-powered analysis,
                real-time market insights, and personalized recommendations.
                Join 50,000+ traders making smarter decisions with Screeno.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold">
                  <Download className="w-5 h-5" />
                  <span>Download Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero App Screenshot */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop"
                  alt="Screeno mobile app interface"
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      +24.5%
                    </div>
                    <div className="text-xs text-gray-500">Portfolio</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Bell className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      3 Alerts
                    </div>
                    <div className="text-xs text-gray-500">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section
        id="screenshots"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <Smartphone className="w-4 h-4" />
              <span>App Screenshots</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              See Screeno in
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the intuitive interface and powerful features that make
              Screeno the preferred choice for traders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {screenshot.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-20 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Try Interactive Demo
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience Screeno's powerful features firsthand with our
                    interactive demo. No download required.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto font-semibold">
                  <Monitor className="w-5 h-5" />
                  <span>Launch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Screenshots */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
              <Brain className="w-4 h-4" />
              <span>Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and insights designed to give you the edge in
              today's competitive markets.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="p-3 bg-gray-50 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
                      <PlayCircle className="w-5 h-5" />
                      <span>Watch Demo</span>
                    </button>
                  </div>
                </div>
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative z-10">
                    <img
                      src={feature.screenshot}
                      alt={feature.title}
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
              <Target className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Built for Every
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Trader
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a beginner or a seasoned professional, Screeno
              adapts to your trading style and experience level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-xl w-fit">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
              <Layers className="w-4 h-4" />
              <span>Integrations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Connect with Your Favorite
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Brokers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate with leading brokerage platforms and data
              providers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-12 h-12 mx-auto mb-3 rounded-lg object-cover"
                />
                <div className="text-sm font-medium text-gray-700">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200">
              <Star className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Trusted by
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful traders and investors who have
              transformed their strategies with Screeno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Simple, Transparent
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your trading style. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 p-8 relative ${
                  plan.popular
                    ? "border-blue-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-gray-300"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Join 50,000+ successful traders using Screeno. Download now and
                start your free 14-day trial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg">
                <Smartphone className="w-5 h-5" />
                <span>Download for iOS</span>
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg">
                <Smartphone className="w-5 h-5" />
                <span>Download for Android</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Bank-level security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Screeno</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering traders with AI-powered stock market analysis and
                smart investment tools. Make better decisions, reduce risk, and
                maximize returns.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Wifi className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Screeno. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
